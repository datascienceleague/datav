webpackHotUpdate_N_E("pages/docs/migration",{

/***/ "./src/components/mobile-nav.tsx":
/*!***************************************!*\
  !*** ./src/components/mobile-nav.tsx ***!
  \***************************************/
/*! exports provided: MobileNavContent, MobileNavButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobileNavContent\", function() { return MobileNavContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobileNavButton\", function() { return MobileNavButton; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var hooks_use_route_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hooks/use-route-changed */ \"./src/hooks/use-route-changed.ts\");\n/* harmony import */ var layouts_mdx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! layouts/mdx */ \"./layouts/mdx.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-remove-scroll */ \"./node_modules/react-remove-scroll/dist/es2015/index.js\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logo */ \"./src/components/logo.tsx\");\n/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/sidebar */ \"./src/components/sidebar/sidebar.tsx\");\n/* harmony import */ var _sponsor_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sponsor-button */ \"./src/components/sponsor-button.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/sunfei/Downloads/website/src/components/mobile-nav.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _this = undefined,\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction NavLink(_ref) {\n  _s();\n\n  var href = _ref.href,\n      children = _ref.children;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])(),\n      pathname = _useRouter.pathname;\n\n  var _href$split = href.split(\"/\"),\n      _href$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_href$split, 2),\n      group = _href$split2[1];\n\n  var isActive = pathname.includes(group);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: href,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Center\"], {\n      flex: \"1\",\n      minH: \"40px\",\n      as: \"button\",\n      rounded: \"md\",\n      transition: \"0.2s all\",\n      fontWeight: isActive ? \"semibold\" : \"medium\",\n      bg: isActive ? \"teal.400\" : undefined,\n      borderWidth: isActive ? undefined : \"1px\",\n      color: isActive ? \"white\" : undefined,\n      _hover: {\n        bg: isActive ? \"teal.500\" : Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useColorModeValue\"])(\"gray.100\", \"whiteAlpha.100\")\n      },\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NavLink, \"8c/0L2gPdnxRfVGllOcu7QfPkQU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useColorModeValue\"]];\n});\n\n_c = NavLink;\nfunction MobileNavContent(props) {\n  _s2();\n\n  var isOpen = props.isOpen,\n      onClose = props.onClose;\n  var closeBtnRef = react__WEBPACK_IMPORTED_MODULE_10__[\"useRef\"]();\n\n  var _useRouter2 = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])(),\n      pathname = _useRouter2.pathname;\n\n  Object(hooks_use_route_changed__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(onClose);\n  /**\n   * Scenario: Menu is open on mobile, and user resizes to desktop/tablet viewport.\n   * Result: We'll close the menu\n   */\n\n  var showOnBreakpoint = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useBreakpointValue\"])({\n    base: true,\n    lg: false\n  });\n  react__WEBPACK_IMPORTED_MODULE_10__[\"useEffect\"](function () {\n    if (showOnBreakpoint == false) {\n      onClose();\n    }\n  }, [showOnBreakpoint]);\n  Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useUpdateEffect\"])(function () {\n    if (isOpen) {\n      requestAnimationFrame(function () {\n        var _closeBtnRef$current;\n\n        (_closeBtnRef$current = closeBtnRef.current) === null || _closeBtnRef$current === void 0 ? void 0 : _closeBtnRef$current.focus();\n      });\n    }\n  }, [isOpen]);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"](),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      shadow = _React$useState2[0],\n      setShadow = _React$useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"AnimatePresence\"], {\n    children: isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_remove_scroll__WEBPACK_IMPORTED_MODULE_12__[\"RemoveScroll\"], {\n      forwardProps: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].div, {\n        transition: {\n          duration: 1\n        },\n        initial: {\n          opacity: 0\n        },\n        animate: {\n          opacity: 1\n        },\n        exit: {\n          opacity: 0\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n          direction: \"column\",\n          w: \"100%\",\n          bg: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useColorModeValue\"])(\"white\", \"gray.800\"),\n          h: \"100vh\",\n          overflow: \"auto\",\n          pos: \"absolute\",\n          top: \"0\",\n          left: \"0\",\n          zIndex: 20,\n          pb: \"8\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n              justify: \"space-between\",\n              px: \"6\",\n              pt: \"5\",\n              pb: \"4\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_logo__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 114,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"HStack\"], {\n                spacing: \"5\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_sponsor_button__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                  display: \"flex\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 116,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"CloseButton\"], {\n                  ref: closeBtnRef,\n                  onClick: onClose\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 117,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 115,\n                columnNumber: 19\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n              px: \"6\",\n              pb: \"6\",\n              pt: \"2\",\n              shadow: shadow,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"HStack\"], {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(NavLink, {\n                  href: \"/docs/getting-started\",\n                  children: \"Docs\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 122,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(NavLink, {\n                  href: \"/guides/integrations/with-cra\",\n                  children: \"Guides\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 123,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(NavLink, {\n                  href: \"/team\",\n                  children: \"Team\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 126,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 121,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ScrollView, {\n            onScroll: function onScroll(scrolled) {\n              setShadow(scrolled ? \"md\" : undefined);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_14__[\"SidebarContent\"], {\n              pathname: pathname,\n              routes: Object(layouts_mdx__WEBPACK_IMPORTED_MODULE_7__[\"getRoutes\"])(pathname)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 136,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(MobileNavContent, \"eIZ5rT34UQCqW9nFUqZm9bszS1U=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], hooks_use_route_changed__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useBreakpointValue\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useUpdateEffect\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useColorModeValue\"]];\n});\n\n_c2 = MobileNavContent;\n\nvar ScrollView = function ScrollView(props) {\n  _s3();\n\n  var onScroll = props.onScroll,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props, [\"onScroll\"]);\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"](0),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      y = _React$useState4[0],\n      setY = _React$useState4[1];\n\n  var elRef = react__WEBPACK_IMPORTED_MODULE_10__[\"useRef\"]();\n\n  var _useElementScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useElementScroll\"])(elRef),\n      scrollY = _useElementScroll.scrollY;\n\n  react__WEBPACK_IMPORTED_MODULE_10__[\"useEffect\"](function () {\n    return scrollY.onChange(function () {\n      return setY(scrollY.get());\n    });\n  }, [scrollY]);\n  Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useUpdateEffect\"])(function () {\n    onScroll === null || onScroll === void 0 ? void 0 : onScroll(y > 5 ? true : false);\n  }, [y]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], _objectSpread({\n    ref: elRef,\n    flex: \"1\",\n    id: \"routes\",\n    overflow: \"auto\",\n    px: \"6\",\n    pb: \"6\"\n  }, rest), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 163,\n    columnNumber: 5\n  }, _this);\n};\n\n_s3(ScrollView, \"L1PVdp+/dSGKjyHrJWN5R+kJ9RI=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useElementScroll\"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useUpdateEffect\"]];\n});\n\n_c3 = ScrollView;\nvar MobileNavButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__[\"forwardRef\"](_c4 = _s4(function (props, ref) {\n  _s4();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"IconButton\"], _objectSpread({\n    ref: ref,\n    display: {\n      base: \"flex\",\n      md: \"none\"\n    },\n    \"aria-label\": \"Open menu\",\n    fontSize: \"20px\",\n    color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useColorModeValue\"])(\"gray.800\", \"inherit\"),\n    variant: \"ghost\",\n    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__[\"AiOutlineMenu\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 185,\n      columnNumber: 15\n    }, _this)\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 178,\n    columnNumber: 7\n  }, _this);\n}, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"useColorModeValue\"]];\n}));\n_c5 = MobileNavButton;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c2, \"MobileNavContent\");\n$RefreshReg$(_c3, \"ScrollView\");\n$RefreshReg$(_c4, \"MobileNavButton$React.forwardRef\");\n$RefreshReg$(_c5, \"MobileNavButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9iaWxlLW5hdi50c3g/ZTQ1NyJdLCJuYW1lcyI6WyJOYXZMaW5rIiwiaHJlZiIsImNoaWxkcmVuIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJzcGxpdCIsImdyb3VwIiwiaXNBY3RpdmUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZCIsImJnIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJNb2JpbGVOYXZDb250ZW50IiwicHJvcHMiLCJpc09wZW4iLCJvbkNsb3NlIiwiY2xvc2VCdG5SZWYiLCJSZWFjdCIsInVzZVJvdXRlQ2hhbmdlZCIsInNob3dPbkJyZWFrcG9pbnQiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJiYXNlIiwibGciLCJ1c2VVcGRhdGVFZmZlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjdXJyZW50IiwiZm9jdXMiLCJzaGFkb3ciLCJzZXRTaGFkb3ciLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJzY3JvbGxlZCIsImdldFJvdXRlcyIsIlNjcm9sbFZpZXciLCJvblNjcm9sbCIsInJlc3QiLCJ5Iiwic2V0WSIsImVsUmVmIiwidXNlRWxlbWVudFNjcm9sbCIsInNjcm9sbFkiLCJvbkNoYW5nZSIsImdldCIsIk1vYmlsZU5hdkJ1dHRvbiIsInJlZiIsIm1kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxPQUFxQztBQUFBOztBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsbUJBQ2RDLDZEQUFTLEVBREs7QUFBQSxNQUMzQkMsUUFEMkIsY0FDM0JBLFFBRDJCOztBQUFBLG9CQUdqQkgsSUFBSSxDQUFDSSxLQUFMLENBQVcsR0FBWCxDQUhp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QUFNZ0MsZSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL21vYmlsZS1uYXYudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCb3hQcm9wcyxcbiAgQ2VudGVyLFxuICBDbG9zZUJ1dHRvbixcbiAgRmxleCxcbiAgSFN0YWNrLFxuICBJY29uQnV0dG9uLFxuICBJY29uQnV0dG9uUHJvcHMsXG4gIHVzZUJyZWFrcG9pbnRWYWx1ZSxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIHVzZVVwZGF0ZUVmZmVjdCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24sIHVzZUVsZW1lbnRTY3JvbGwgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgdXNlUm91dGVDaGFuZ2VkIGZyb20gXCJob29rcy91c2Utcm91dGUtY2hhbmdlZFwiXG5pbXBvcnQgeyBnZXRSb3V0ZXMgfSBmcm9tIFwibGF5b3V0cy9tZHhcIlxuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBBaU91dGxpbmVNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCJcbmltcG9ydCB7IFJlbW92ZVNjcm9sbCB9IGZyb20gXCJyZWFjdC1yZW1vdmUtc2Nyb2xsXCJcbmltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ29cIlxuaW1wb3J0IHsgU2lkZWJhckNvbnRlbnQgfSBmcm9tIFwiLi9zaWRlYmFyL3NpZGViYXJcIlxuaW1wb3J0IFNwb25zb3JCdXR0b24gZnJvbSBcIi4vc3BvbnNvci1idXR0b25cIlxuXG5mdW5jdGlvbiBOYXZMaW5rKHsgaHJlZiwgY2hpbGRyZW4gfSkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IFssIGdyb3VwXSA9IGhyZWYuc3BsaXQoXCIvXCIpXG4gIGNvbnN0IGlzQWN0aXZlID0gcGF0aG5hbWUuaW5jbHVkZXMoZ3JvdXApXG5cbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0+XG4gICAgICA8Q2VudGVyXG4gICAgICAgIGZsZXg9XCIxXCJcbiAgICAgICAgbWluSD1cIjQwcHhcIlxuICAgICAgICBhcz1cImJ1dHRvblwiXG4gICAgICAgIHJvdW5kZWQ9XCJtZFwiXG4gICAgICAgIHRyYW5zaXRpb249XCIwLjJzIGFsbFwiXG4gICAgICAgIGZvbnRXZWlnaHQ9e2lzQWN0aXZlID8gXCJzZW1pYm9sZFwiIDogXCJtZWRpdW1cIn1cbiAgICAgICAgYmc9e2lzQWN0aXZlID8gXCJ0ZWFsLjQwMFwiIDogdW5kZWZpbmVkfVxuICAgICAgICBib3JkZXJXaWR0aD17aXNBY3RpdmUgPyB1bmRlZmluZWQgOiBcIjFweFwifVxuICAgICAgICBjb2xvcj17aXNBY3RpdmUgPyBcIndoaXRlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgIGJnOiBpc0FjdGl2ZVxuICAgICAgICAgICAgPyBcInRlYWwuNTAwXCJcbiAgICAgICAgICAgIDogdXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIndoaXRlQWxwaGEuMTAwXCIpLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NlbnRlcj5cbiAgICA8L05leHRMaW5rPlxuICApXG59XG5cbmludGVyZmFjZSBNb2JpbGVOYXZDb250ZW50UHJvcHMge1xuICBpc09wZW4/OiBib29sZWFuXG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNb2JpbGVOYXZDb250ZW50KHByb3BzOiBNb2JpbGVOYXZDb250ZW50UHJvcHMpIHtcbiAgY29uc3QgeyBpc09wZW4sIG9uQ2xvc2UgfSA9IHByb3BzXG4gIGNvbnN0IGNsb3NlQnRuUmVmID0gUmVhY3QudXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PigpXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpXG5cbiAgdXNlUm91dGVDaGFuZ2VkKG9uQ2xvc2UpXG5cbiAgLyoqXG4gICAqIFNjZW5hcmlvOiBNZW51IGlzIG9wZW4gb24gbW9iaWxlLCBhbmQgdXNlciByZXNpemVzIHRvIGRlc2t0b3AvdGFibGV0IHZpZXdwb3J0LlxuICAgKiBSZXN1bHQ6IFdlJ2xsIGNsb3NlIHRoZSBtZW51XG4gICAqL1xuICBjb25zdCBzaG93T25CcmVha3BvaW50ID0gdXNlQnJlYWtwb2ludFZhbHVlKHsgYmFzZTogdHJ1ZSwgbGc6IGZhbHNlIH0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2hvd09uQnJlYWtwb2ludCA9PSBmYWxzZSkge1xuICAgICAgb25DbG9zZSgpXG4gICAgfVxuICB9LCBbc2hvd09uQnJlYWtwb2ludF0pXG5cbiAgdXNlVXBkYXRlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjbG9zZUJ0blJlZi5jdXJyZW50Py5mb2N1cygpXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2lzT3Blbl0pXG5cbiAgY29uc3QgW3NoYWRvdywgc2V0U2hhZG93XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oKVxuXG4gIHJldHVybiAoXG4gICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICA8UmVtb3ZlU2Nyb2xsIGZvcndhcmRQcm9wcz5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKFwid2hpdGVcIiwgXCJncmF5LjgwMFwiKX1cbiAgICAgICAgICAgICAgaD1cIjEwMHZoXCJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c9XCJhdXRvXCJcbiAgICAgICAgICAgICAgcG9zPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICB0b3A9XCIwXCJcbiAgICAgICAgICAgICAgbGVmdD1cIjBcIlxuICAgICAgICAgICAgICB6SW5kZXg9ezIwfVxuICAgICAgICAgICAgICBwYj1cIjhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgcHg9XCI2XCIgcHQ9XCI1XCIgcGI9XCI0XCI+XG4gICAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgICAgPEhTdGFjayBzcGFjaW5nPVwiNVwiPlxuICAgICAgICAgICAgICAgICAgICA8U3BvbnNvckJ1dHRvbiBkaXNwbGF5PVwiZmxleFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiByZWY9e2Nsb3NlQnRuUmVmfSBvbkNsaWNrPXtvbkNsb3NlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDxCb3ggcHg9XCI2XCIgcGI9XCI2XCIgcHQ9XCIyXCIgc2hhZG93PXtzaGFkb3d9PlxuICAgICAgICAgICAgICAgICAgPEhTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9kb2NzL2dldHRpbmctc3RhcnRlZFwiPkRvY3M8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvZ3VpZGVzL2ludGVncmF0aW9ucy93aXRoLWNyYVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEd1aWRlc1xuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvdGVhbVwiPlRlYW08L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPFNjcm9sbFZpZXdcbiAgICAgICAgICAgICAgICBvblNjcm9sbD17KHNjcm9sbGVkKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRTaGFkb3coc2Nyb2xsZWQgPyBcIm1kXCIgOiB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyQ29udGVudFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWU9e3BhdGhuYW1lfVxuICAgICAgICAgICAgICAgICAgcm91dGVzPXtnZXRSb3V0ZXMocGF0aG5hbWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvUmVtb3ZlU2Nyb2xsPlxuICAgICAgKX1cbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgKVxufVxuXG5jb25zdCBTY3JvbGxWaWV3ID0gKHByb3BzOiBCb3hQcm9wcyAmIHsgb25TY3JvbGw/OiBhbnkgfSkgPT4ge1xuICBjb25zdCB7IG9uU2Nyb2xsLCAuLi5yZXN0IH0gPSBwcm9wc1xuICBjb25zdCBbeSwgc2V0WV0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuICBjb25zdCBlbFJlZiA9IFJlYWN0LnVzZVJlZjxhbnk+KClcbiAgY29uc3QgeyBzY3JvbGxZIH0gPSB1c2VFbGVtZW50U2Nyb2xsKGVsUmVmKVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiBzY3JvbGxZLm9uQ2hhbmdlKCgpID0+IHNldFkoc2Nyb2xsWS5nZXQoKSkpXG4gIH0sIFtzY3JvbGxZXSlcblxuICB1c2VVcGRhdGVFZmZlY3QoKCkgPT4ge1xuICAgIG9uU2Nyb2xsPy4oeSA+IDUgPyB0cnVlIDogZmFsc2UpXG4gIH0sIFt5XSlcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHJlZj17ZWxSZWZ9XG4gICAgICBmbGV4PVwiMVwiXG4gICAgICBpZD1cInJvdXRlc1wiXG4gICAgICBvdmVyZmxvdz1cImF1dG9cIlxuICAgICAgcHg9XCI2XCJcbiAgICAgIHBiPVwiNlwiXG4gICAgICB7Li4ucmVzdH1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBNb2JpbGVOYXZCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAocHJvcHM6IEljb25CdXR0b25Qcm9wcywgcmVmOiBSZWFjdC5SZWY8YW55PikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgZGlzcGxheT17eyBiYXNlOiBcImZsZXhcIiwgbWQ6IFwibm9uZVwiIH19XG4gICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIG1lbnVcIlxuICAgICAgICBmb250U2l6ZT1cIjIwcHhcIlxuICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjgwMFwiLCBcImluaGVyaXRcIil9XG4gICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgIGljb249ezxBaU91dGxpbmVNZW51IC8+fVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfSxcbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/mobile-nav.tsx\n");

/***/ })

})