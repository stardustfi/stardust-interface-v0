/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@next/font/google/target.css?{\"path\":\"pages/_app.tsx\",\"import\":\"Karla\",\"arguments\":[{\"weight\":\"400\",\"subsets\":[\"latin\"]}],\"variableName\":\"karla\"}":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@next/font/google/target.css?{"path":"pages/_app.tsx","import":"Karla","arguments":[{"weight":"400","subsets":["latin"]}],"variableName":"karla"} ***!
  \************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"style\": {\"fontFamily\":\"'__Karla_20e4de', '__Karla_Fallback_20e4de'\",\"fontWeight\":400,\"fontStyle\":\"normal\"},\n\t\"className\": \"__className_20e4de\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG5leHQvZm9udC9nb29nbGUvdGFyZ2V0LmNzcz97XCJwYXRoXCI6XCJwYWdlcy9fYXBwLnRzeFwiLFwiaW1wb3J0XCI6XCJLYXJsYVwiLFwiYXJndW1lbnRzXCI6W3tcIndlaWdodFwiOlwiNDAwXCIsXCJzdWJzZXRzXCI6W1wibGF0aW5cIl19XSxcInZhcmlhYmxlTmFtZVwiOlwia2FybGFcIn0uanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBLFdBQVcsaUdBQWlHO0FBQzVHO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFyZHVzdC13d3cvLi9ub2RlX21vZHVsZXMvQG5leHQvZm9udC9nb29nbGUvdGFyZ2V0LmNzcz9kYTUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN0eWxlXCI6IHtcImZvbnRGYW1pbHlcIjpcIidfX0thcmxhXzIwZTRkZScsICdfX0thcmxhX0ZhbGxiYWNrXzIwZTRkZSdcIixcImZvbnRXZWlnaHRcIjo0MDAsXCJmb250U3R5bGVcIjpcIm5vcm1hbFwifSxcblx0XCJjbGFzc05hbWVcIjogXCJfX2NsYXNzTmFtZV8yMGU0ZGVcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@next/font/google/target.css?{\"path\":\"pages/_app.tsx\",\"import\":\"Karla\",\"arguments\":[{\"weight\":\"400\",\"subsets\":[\"latin\"]}],\"variableName\":\"karla\"}\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_font_google_target_css_path_pages_app_tsx_import_Karla_arguments_weight_400_subsets_latin_variableName_karla___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"pages/_app.tsx\",\"import\":\"Karla\",\"arguments\":[{\"weight\":\"400\",\"subsets\":[\"latin\"]}],\"variableName\":\"karla\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.tsx\\\",\\\"import\\\":\\\"Karla\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"400\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"karla\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_pages_app_tsx_import_Karla_arguments_weight_400_subsets_latin_variableName_karla___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_pages_app_tsx_import_Karla_arguments_weight_400_subsets_latin_variableName_karla___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nconst darkTheme = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.createTheme)({\n    type: \"dark\",\n    theme: {\n        fonts: {}\n    }\n});\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.polygon,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.optimism,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.arbitrum\n], [\n    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"stardust\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n                defaultTheme: \"system\",\n                attribute: \"class\",\n                value: {\n                    dark: darkTheme.className\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.NextUIProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: (_next_font_google_target_css_path_pages_app_tsx_import_Karla_arguments_weight_400_subsets_latin_variableName_karla___WEBPACK_IMPORTED_MODULE_8___default().className),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/sehyun/code/stardust-interface-v0/pages/_app.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sehyun/code/stardust-interface-v0/pages/_app.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sehyun/code/stardust-interface-v0/pages/_app.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sehyun/code/stardust-interface-v0/pages/_app.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sehyun/code/stardust-interface-v0/pages/_app.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sehyun/code/stardust-interface-v0/pages/_app.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXTUE7QUFYNkM7QUFDNEI7QUFDcEM7QUFFK0I7QUFDbEI7QUFDekI7QUFDaUI7QUFDa0I7QUFRbEUsTUFBTVksWUFBWUgsOERBQVdBLENBQUM7SUFDNUJJLE1BQU07SUFDTkMsT0FBTztRQUNMQyxPQUFPLENBQUM7SUFDVjtBQUNGO0FBRUEsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHWixzREFBZUEsQ0FDMUM7SUFBQ0QsZ0RBQWE7SUFBRUEsZ0RBQWE7SUFBRUEsaURBQWM7SUFBRUEsaURBQWM7Q0FBQyxFQUM5RDtJQUNFLHVEQUF1RDtJQUN2REksc0VBQWNBO0NBQ2Y7QUFFSCxNQUFNLEVBQUVjLFdBQVUsRUFBRSxHQUFHcEIseUVBQWlCQSxDQUFDO0lBQ3ZDcUIsU0FBUztJQUNUUDtBQUNGO0FBQ0EsTUFBTVEsY0FBY2xCLG1EQUFZQSxDQUFDO0lBQy9CbUIsYUFBYSxJQUFJO0lBQ2pCSDtJQUNBTDtBQUNGO0FBRWUsU0FBU1MsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELHFCQUNFLDhEQUFDckIsOENBQVdBO1FBQUNzQixRQUFRTDtrQkFDbkIsNEVBQUNyQixzRUFBa0JBO1lBQUNhLFFBQVFBO3NCQUMxQiw0RUFBQ0wsc0RBQWtCQTtnQkFDakJtQixjQUFhO2dCQUNiQyxXQUFVO2dCQUNWQyxPQUFPO29CQUNMQyxNQUFNckIsVUFBVXNCLFNBQVM7Z0JBQzNCOzBCQUVBLDRFQUFDakMsNkRBQWNBOzhCQUNiLDRFQUFDa0M7d0JBQUtELFdBQVdsQyxzS0FBZTtrQ0FDOUIsNEVBQUMyQjs0QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFyZHVzdC13d3cvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRVSVByb3ZpZGVyIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0V2FsbGV0cywgUmFpbmJvd0tpdFByb3ZpZGVyIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgY2hhaW4sIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL3B1YmxpY1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciBhcyBOZXh0VGhlbWVzUHJvdmlkZXIgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcbmltcG9ydCB7IEthcmxhIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5cbmNvbnN0IGthcmxhID0gS2FybGEoe1xuICB3ZWlnaHQ6IFwiNDAwXCIsXG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxufSk7XG5cbmNvbnN0IGRhcmtUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgdHlwZTogXCJkYXJrXCIsXG4gIHRoZW1lOiB7XG4gICAgZm9udHM6IHt9LFxuICB9LFxufSk7XG5cbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbY2hhaW4ubWFpbm5ldCwgY2hhaW4ucG9seWdvbiwgY2hhaW4ub3B0aW1pc20sIGNoYWluLmFyYml0cnVtXSxcbiAgW1xuICAgIC8vIGFsY2hlbXlQcm92aWRlcih7IGFwaUtleTogcHJvY2Vzcy5lbnYuQUxDSEVNWV9JRCB9KSxcbiAgICBwdWJsaWNQcm92aWRlcigpLFxuICBdXG4pO1xuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6IFwic3RhcmR1c3RcIixcbiAgY2hhaW5zLFxufSk7XG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICA8TmV4dFRoZW1lc1Byb3ZpZGVyXG4gICAgICAgICAgZGVmYXVsdFRoZW1lPVwic3lzdGVtXCJcbiAgICAgICAgICBhdHRyaWJ1dGU9XCJjbGFzc1wiXG4gICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgIGRhcms6IGRhcmtUaGVtZS5jbGFzc05hbWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxOZXh0VUlQcm92aWRlcj5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17a2FybGEuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDwvTmV4dFVJUHJvdmlkZXI+XG4gICAgICAgIDwvTmV4dFRoZW1lc1Byb3ZpZGVyPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJrYXJsYSIsIk5leHRVSVByb3ZpZGVyIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJjaGFpbiIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwicHVibGljUHJvdmlkZXIiLCJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJOZXh0VGhlbWVzUHJvdmlkZXIiLCJkYXJrVGhlbWUiLCJ0eXBlIiwidGhlbWUiLCJmb250cyIsImNoYWlucyIsInByb3ZpZGVyIiwibWFpbm5ldCIsInBvbHlnb24iLCJvcHRpbWlzbSIsImFyYml0cnVtIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwiZGVmYXVsdFRoZW1lIiwiYXR0cmlidXRlIiwidmFsdWUiLCJkYXJrIiwiY2xhc3NOYW1lIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@rainbow-me/rainbowkit/dist/index.css":
/*!************************************************************!*\
  !*** ./node_modules/@rainbow-me/rainbowkit/dist/index.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@nextui-org/react":
/*!************************************!*\
  !*** external "@nextui-org/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nextui-org/react");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();