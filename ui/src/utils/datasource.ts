// Copyright (c) 2017 Uber Technologies, Inc.
//
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


import { hasVariableFormat, replaceWithVariables } from "./variable"
import { Datasource } from "types/datasource"
import { floor } from "lodash"
import { $datasources } from "src/views/datasource/store"

export const getDatasource = (k, ds?):Datasource => {
    const datasources = ds ?? $datasources.get()
    let currentDatasource
    if (hasVariableFormat(k?.toString())) {
        const name = replaceWithVariables(k)
        currentDatasource = datasources?.find(ds => ds.name == name)
    } else {
        currentDatasource = datasources?.find(ds => ds.id == k)
    }
    return currentDatasource
}

export const roundDsTime = timestamp => {
    return floor(timestamp)
}