// Copyright 2023 Datav.io Team
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
package dashboard

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/DataObserve/datav/backend/internal/user"
	"github.com/DataObserve/datav/backend/pkg/common"
	"github.com/DataObserve/datav/backend/pkg/config"
	"github.com/DataObserve/datav/backend/pkg/db"
	"github.com/DataObserve/datav/backend/pkg/e"
	"github.com/DataObserve/datav/backend/pkg/log"
	"github.com/DataObserve/datav/backend/pkg/models"
	"github.com/DataObserve/datav/backend/pkg/utils"
	"github.com/gin-gonic/gin"
)

var logger = log.RootLogger.New("logger", "dashboard")

func SaveDashboard(c *gin.Context) {
	u := user.CurrentUser(c)
	req := &models.DashboardHistory{}
	err := c.Bind(&req)
	if err != nil {
		logger.Warn("invalid request in saving dashboard", "error", err)
		c.JSON(400, common.RespError(e.ParamInvalid))
		return
	}

	dash := req.Dashboard

	if !u.Role.IsAdmin() {
		isTeamAdmin, err := models.IsTeamAdmin(dash.OwnedBy, u.Id)
		if err != nil {
			logger.Error("check team admin error", "error", err)
			c.JSON(500, common.RespInternalError())
			return
		}
		if !isTeamAdmin {
			c.JSON(403, common.RespError(e.NoPermission))
			return
		}
	}

	now := time.Now()
	isUpdate := dash.Id != ""
	if !isUpdate { // create dashboard
		dash.Id = "d-" + utils.GenerateShortUID()
		dash.CreatedBy = u.Id
		dash.Created = &now
	}
	dash.Updated = &now

	jsonData, err := dash.Data.Encode()
	if err != nil {
		logger.Warn("decode dashboard data error", "error", err)
		c.JSON(400, common.RespError(e.ParamInvalid))
		return
	}

	tags, err := json.Marshal(dash.Tags)
	if err != nil {
		logger.Warn("encode tags error", "error", err)
		c.JSON(400, common.RespError(e.ParamInvalid))
		return
	}
	if !isUpdate {
		_, err := db.Conn.Exec(`INSERT INTO dashboard (id,title, owned_by, created_by,tags, data,created,updated) VALUES (?,?,?,?,?,?,?,?)`,
			dash.Id, dash.Title, dash.OwnedBy, dash.CreatedBy, tags, jsonData, dash.Created, dash.Updated)
		if err != nil {
			if e.IsErrUniqueConstraint(err) {
				c.JSON(409, common.RespError("dashboard id already exists"))
			} else {
				logger.Error("add dashboard error", "error", err)
				c.JSON(500, common.RespInternalError())
			}
			return
		}
	} else {
		_, err = db.Conn.Exec(`UPDATE dashboard SET title=?,tags=?,data=?,updated=? WHERE id=?`,
			dash.Title, tags, jsonData, dash.Updated, dash.Id)
		if err != nil {
			logger.Error("update dashboard error", "error", err)
			c.JSON(500, common.RespInternalError())
			return
		}
	}

	historyCh <- req

	c.JSON(200, common.RespSuccess(dash.Id))
}

func GetDashboard(c *gin.Context) {
	id := c.Param("id")

	dash, err := models.QueryDashboard(id)
	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(404, common.RespError(fmt.Sprintf("dashboard id `%s` not found", id)))
			return
		}
		logger.Warn("query dashboard error", "error", err)
		c.JSON(500, common.RespError(e.Internal))
		return
	}

	dash.Editable = true

	c.JSON(200, common.RespSuccess(dash))
}

func DeleteDashboard(c *gin.Context) {
	id := c.Param("id")
	if id == "" {
		c.JSON(400, common.RespError(e.ParamInvalid))
		return
	}

	for _, rid := range models.ReservedDashboardId {
		if id == rid {
			c.JSON(400, common.RespError("reserved dashboard can not be deleted"))
			return
		}
	}

	// delete dashboard
	_, err := db.Conn.Exec("DELETE FROM dashboard WHERE id=?", id)
	if err != nil {
		logger.Warn("delete dashboard error", "error", err)
		c.JSON(500, common.RespError(e.Internal))
		return
	}

	c.JSON(200, common.RespSuccess(nil))
}

func UpdateOwnedBy(c *gin.Context) {
	dash := &models.Dashboard{}
	c.Bind(&dash)

	if dash.Id == "" || dash.OwnedBy == 0 {
		c.JSON(400, common.RespError(e.ParamInvalid))
		return
	}

	// check if the new owner is a valid team
	if !models.IsTeamExist(dash.OwnedBy, "") {
		c.JSON(400, common.RespError("targe team is not exist"))
		return
	}

	// query the team which dashboard originally belongs to
	ownedBy, err := models.QueryDashboardBelongsTo(dash.Id)
	if err != nil {
		logger.Warn("query dashboard belongs to error", "error", err)
		c.JSON(500, common.RespInternalError())
		return
	}

	u := user.CurrentUser(c)
	// constrains need to be satisfied:
	// 1. current user must be the admin of the team which dashboard originally belongs to
	isTeamAdmin, err := models.IsTeamAdmin(ownedBy, u.Id)
	if err != nil {
		logger.Error("check team admin error", "error", err)
		c.JSON(500, common.RespInternalError())
		return
	}
	if !isTeamAdmin {
		c.JSON(403, common.RespError(e.NoPermission))
		return
	}

	_, err = db.Conn.Exec("UPDATE dashboard SET owned_by=? WHERE id=?", dash.OwnedBy, dash.Id)
	if err != nil {
		logger.Warn("update dashboard ownedBy error", "error", err)
		c.JSON(500, common.RespInternalError())
		return
	}

	c.JSON(200, common.RespSuccess(nil))
}

func GetTeamDashboards(c *gin.Context) {
	teamId := c.Param("id")
	if teamId == "" {
		c.JSON(400, common.RespError(e.ParamInvalid))
		return
	}

	dashboards := make([]*models.Dashboard, 0)

	rows, err := db.Conn.Query("SELECT id,title, created, updated FROM dashboard WHERE owned_by=?", teamId)
	if err != nil {
		logger.Warn("query team dashboards error", "error", err)
		c.JSON(500, common.RespError(e.Internal))
		return
	}

	for rows.Next() {
		dash := &models.Dashboard{}
		err = rows.Scan(&dash.Id, &dash.Title, &dash.Created, &dash.Updated)
		if err != nil {
			logger.Warn("scan dashboard error", "error", err)
			c.JSON(500, common.RespError(e.Internal))
			return
		}

		dashboards = append(dashboards, dash)

	}
	c.JSON(200, common.RespSuccess(dashboards))
}

func GetSimpleList(c *gin.Context) {
	dashboards := make([]*models.Dashboard, 0)

	rows, err := db.Conn.Query("SELECT id,title, owned_by, tags FROM dashboard ORDER BY created")
	if err != nil {
		logger.Warn("query simple dashboards error", "error", err)
		c.JSON(500, common.RespError(e.Internal))
		return
	}

	for rows.Next() {
		dash := &models.Dashboard{}
		var rawTags []byte
		err = rows.Scan(&dash.Id, &dash.Title, &dash.OwnedBy, &rawTags)
		if err != nil {
			logger.Warn("get simple dashboards scan error", "error", err)
			c.JSON(500, common.RespError(e.Internal))
			return
		}
		var tags []string
		err = json.Unmarshal(rawTags, &tags)
		if err != nil {
			logger.Warn("get simple dashboards decode tags error", "error", err)
			c.JSON(500, common.RespError(e.Internal))
			return
		}
		dash.Tags = tags

		dashboards = append(dashboards, dash)
	}

	c.JSON(http.StatusOK, common.RespSuccess(dashboards))
}

func Star(c *gin.Context) {
	id := c.Param("id")
	u := user.CurrentUser(c)
	_, err := db.Conn.Exec("INSERT INTO star_dashboard (user_id, dashboard_id, created) VALUES (?,?,?)", u.Id, id, time.Now())
	if err != nil {
		logger.Warn("star dashboard", "error", err)
		c.JSON(500, common.RespError(e.Internal))
		return
	}

	c.JSON(http.StatusOK, common.RespSuccess(nil))
}

func UnStar(c *gin.Context) {
	id := c.Param("id")
	u := user.CurrentUser(c)
	_, err := db.Conn.Exec("DELETE FROM star_dashboard WHERE user_id=? and dashboard_id=?", u.Id, id)
	if err != nil {
		logger.Warn("unstar dashboard", "error", err)
		c.JSON(500, common.RespError(e.Internal))
		return
	}

	c.JSON(http.StatusOK, common.RespSuccess(nil))
}

func GetStarred(c *gin.Context) {
	id := c.Param("id")
	u := user.CurrentUser(c)
	starred, err := models.QuertyDashboardStared(u.Id, id)
	if err != nil {
		logger.Warn("unstar dashboard", "error", err)
		c.JSON(500, common.RespError(e.Internal))
		return
	}

	c.JSON(http.StatusOK, common.RespSuccess(starred))
}

func GetAllStarred(c *gin.Context) {
	u := user.CurrentUser(c)

	rows, err := db.Conn.Query("SELECT dashboard_id FROM star_dashboard WHERE user_id=?", u.Id)
	if err != nil {
		logger.Warn("get all starred dashboard error", "error", err)
		c.JSON(500, common.RespError(e.Internal))
		return
	}

	starredList := make([]string, 0)
	for rows.Next() {
		var id string
		err = rows.Scan(&id)
		if err != nil {
			logger.Warn("get all starred scan error", "error", err)
			c.JSON(500, common.RespError(e.Internal))
			return
		}

		starredList = append(starredList, id)
	}

	c.JSON(http.StatusOK, common.RespSuccess(starredList))
}

func Delete(c *gin.Context) {
	if !config.Data.Dashboard.EnableDelete {
		c.JSON(http.StatusForbidden, common.RespError("Deleting dashboard is disabled in datav config"))
		return
	}

	id := c.Param("id")
	u := user.CurrentUser(c)

	for _, rid := range models.ReservedDashboardId {
		if id == rid {
			c.JSON(400, common.RespError("reserved dashboard can not be deleted"))
			return
		}
	}

	ownedBy, err := models.QueryDashboardBelongsTo(id)
	if err != nil {
		logger.Warn("query dash belongs to error", "error", err)
		c.JSON(500, common.RespError(e.Internal))
		return
	}

	if !u.Role.IsAdmin() {
		isTeamAdmin, err := models.IsTeamAdmin(ownedBy, u.Id)
		if err != nil {
			logger.Error("check team admin error", "error", err)
			c.JSON(500, common.RespInternalError())
			return
		}
		if !isTeamAdmin {
			c.JSON(403, common.RespError(e.NoPermission))
			return
		}
	}

	_, err = db.Conn.Exec("DELETE FROM dashboard WHERE id=?", id)
	if err != nil {
		logger.Warn("delete dashboard erorr", "error", err)
		c.JSON(500, common.RespError(e.Internal))
		return
	}

	_, err = db.Conn.Exec("DELETE FROM star_dashboard WHERE dashboard_id=?", id)
	if err != nil {
		logger.Warn("delete dashboard star erorr", "error", err)
		c.JSON(500, common.RespError(e.Internal))
		return
	}

	c.JSON(200, common.RespSuccess(nil))
}
