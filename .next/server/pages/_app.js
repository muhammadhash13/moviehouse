"use strict";
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

/***/ "./contexts/ThemeContext.js":
/*!**********************************!*\
  !*** ./contexts/ThemeContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext),\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ThemeProvider = ({ children  })=>{\n    const { 0: darkMode , 1: setDarkMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTheme = localStorage.getItem(\"darkMode\");\n        if (savedTheme) {\n            setDarkMode(JSON.parse(savedTheme));\n        }\n    }, []);\n    const toggleDarkMode = ()=>{\n        setDarkMode(!darkMode);\n        localStorage.setItem(\"darkMode\", JSON.stringify(!darkMode));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            darkMode,\n            toggleDarkMode\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rohan\\\\Downloads\\\\21L-5275\\\\project\\\\contexts\\\\ThemeContext.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9UaGVtZUNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBa0U7QUFFM0QsTUFBTUksWUFBWSxpQkFBR0gsb0RBQWEsRUFBRSxDQUFDO0FBRXJDLE1BQU1JLGFBQWEsR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQzdDLE1BQU0sS0FBQ0MsUUFBUSxNQUFFQyxXQUFXLE1BQUlOLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRS9DQyxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNTSxVQUFVLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNuRCxJQUFJRixVQUFVLEVBQUU7WUFDZEQsV0FBVyxDQUFDSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0osVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTUssY0FBYyxHQUFHLElBQU07UUFDM0JOLFdBQVcsQ0FBQyxDQUFDRCxRQUFRLENBQUMsQ0FBQztRQUN2QkcsWUFBWSxDQUFDSyxPQUFPLENBQUMsVUFBVSxFQUFFSCxJQUFJLENBQUNJLFNBQVMsQ0FBQyxDQUFDVCxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxxQkFDRSw4REFBQ0gsWUFBWSxDQUFDYSxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFWCxRQUFRO1lBQUVPLGNBQWM7U0FBRTtrQkFDdkRSLFFBQVE7Ozs7O2lCQUNhLENBQ3hCO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aWUtaG91c2UvLi9jb250ZXh0cy9UaGVtZUNvbnRleHQuanM/YjczOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbZGFya01vZGUsIHNldERhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKTtcclxuICAgIGlmIChzYXZlZFRoZW1lKSB7XHJcbiAgICAgIHNldERhcmtNb2RlKEpTT04ucGFyc2Uoc2F2ZWRUaGVtZSkpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICBzZXREYXJrTW9kZSghZGFya01vZGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgSlNPTi5zdHJpbmdpZnkoIWRhcmtNb2RlKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZGFya01vZGUsIHRvZ2dsZURhcmtNb2RlIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59OyAiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUaGVtZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkYXJrTW9kZSIsInNldERhcmtNb2RlIiwic2F2ZWRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ0b2dnbGVEYXJrTW9kZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/ThemeContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContext */ \"./contexts/ThemeContext.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst AppContent = ({ Component , pageProps  })=>{\n    const { darkMode  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.createTheme)({\n        palette: {\n            mode: darkMode ? \"dark\" : \"light\"\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rohan\\\\Downloads\\\\21L-5275\\\\project\\\\pages\\\\_app.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rohan\\\\Downloads\\\\21L-5275\\\\project\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rohan\\\\Downloads\\\\21L-5275\\\\project\\\\pages\\\\_app.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContent, {\n            Component: Component,\n            pageProps: pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rohan\\\\Downloads\\\\21L-5275\\\\project\\\\pages\\\\_app.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rohan\\\\Downloads\\\\21L-5275\\\\project\\\\pages\\\\_app.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF1RTtBQUNlO0FBQ2xDO0FBQ2pCO0FBRW5DLE1BQU1NLFVBQVUsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDL0MsTUFBTSxFQUFFQyxRQUFRLEdBQUUsR0FBR0osaURBQVUsQ0FBQ0osZ0VBQVksQ0FBQztJQUM3QyxNQUFNUyxLQUFLLEdBQUdQLGlFQUFXLENBQUM7UUFDeEJRLE9BQU8sRUFBRTtZQUNQQyxJQUFJLEVBQUVILFFBQVEsR0FBRyxNQUFNLEdBQUcsT0FBTztTQUNsQztLQUNGLENBQUM7SUFFRixxQkFDRSw4REFBQ1AsK0RBQWdCO1FBQUNRLEtBQUssRUFBRUEsS0FBSzs7MEJBQzVCLDhEQUFDTixrRUFBVzs7Ozt5QkFBRzswQkFDZiw4REFBQ0csU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7Ozt5QkFBSTs7Ozs7O2lCQUNYLENBQ25CO0FBQ0osQ0FBQztBQUVELFNBQVNLLEtBQUssQ0FBQyxFQUFFTixTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDUixpRUFBYTtrQkFDWiw0RUFBQ00sVUFBVTtZQUFDQyxTQUFTLEVBQUVBLFNBQVM7WUFBRUMsU0FBUyxFQUFFQSxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDNUMsQ0FDaEI7QUFDSixDQUFDO0FBRUQsaUVBQWVLLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLWhvdXNlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgYXMgTXVpVGhlbWVQcm92aWRlciwgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFwcENvbnRlbnQgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBkYXJrTW9kZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBtb2RlOiBkYXJrTW9kZSA/ICdkYXJrJyA6ICdsaWdodCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8QXBwQ29udGVudCBDb21wb25lbnQ9e0NvbXBvbmVudH0gcGFnZVByb3BzPXtwYWdlUHJvcHN9IC8+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJUaGVtZUNvbnRleHQiLCJNdWlUaGVtZVByb3ZpZGVyIiwiY3JlYXRlVGhlbWUiLCJDc3NCYXNlbGluZSIsInVzZUNvbnRleHQiLCJBcHBDb250ZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGFya01vZGUiLCJ0aGVtZSIsInBhbGV0dGUiLCJtb2RlIiwiTXlBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();