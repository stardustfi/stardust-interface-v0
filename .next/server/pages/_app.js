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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.polygon,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.optimism,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.arbitrum\n], [\n    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"stardust\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.NextUIProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/sehyun/code/stardust-interface-v0/pages/_app.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sehyun/code/stardust-interface-v0/pages/_app.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sehyun/code/stardust-interface-v0/pages/_app.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sehyun/code/stardust-interface-v0/pages/_app.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUM0QjtBQUNwQztBQUUrQjtBQUNsQjtBQUN6QjtBQUUvQixNQUFNLEVBQUVRLE9BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdMLHNEQUFlQSxDQUMxQztJQUFDRCxnREFBYTtJQUFFQSxnREFBYTtJQUFFQSxpREFBYztJQUFFQSxpREFBYztDQUFDLEVBQzlEO0lBQ0UsdURBQXVEO0lBQ3ZESSxzRUFBY0E7Q0FDZjtBQUVILE1BQU0sRUFBRU8sV0FBVSxFQUFFLEdBQUdiLHlFQUFpQkEsQ0FBQztJQUN2Q2MsU0FBUztJQUNUUDtBQUNGO0FBQ0EsTUFBTVEsY0FBY1gsbURBQVlBLENBQUM7SUFDL0JZLGFBQWEsSUFBSTtJQUNqQkg7SUFDQUw7QUFDRjtBQUVlLFNBQVNTLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUM5RCxxQkFDRSw4REFBQ2QsOENBQVdBO1FBQUNlLFFBQVFMO2tCQUNuQiw0RUFBQ2Qsc0VBQWtCQTtZQUFDTSxRQUFRQTtzQkFDMUIsNEVBQUNSLDZEQUFjQTswQkFDYiw0RUFBQ21CO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcmR1c3Qtd3d3Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0VUlQcm92aWRlciB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFdhbGxldHMsIFJhaW5ib3dLaXRQcm92aWRlciB9IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5pbXBvcnQgXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IGNoYWluLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9wdWJsaWNcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgW2NoYWluLm1haW5uZXQsIGNoYWluLnBvbHlnb24sIGNoYWluLm9wdGltaXNtLCBjaGFpbi5hcmJpdHJ1bV0sXG4gIFtcbiAgICAvLyBhbGNoZW15UHJvdmlkZXIoeyBhcGlLZXk6IHByb2Nlc3MuZW52LkFMQ0hFTVlfSUQgfSksXG4gICAgcHVibGljUHJvdmlkZXIoKSxcbiAgXVxuKTtcbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBhcHBOYW1lOiBcInN0YXJkdXN0XCIsXG4gIGNoYWlucyxcbn0pO1xuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfT5cbiAgICAgICAgPE5leHRVSVByb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9OZXh0VUlQcm92aWRlcj5cbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFVJUHJvdmlkZXIiLCJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImNoYWluIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJwdWJsaWNQcm92aWRlciIsImNoYWlucyIsInByb3ZpZGVyIiwibWFpbm5ldCIsInBvbHlnb24iLCJvcHRpbWlzbSIsImFyYml0cnVtIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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