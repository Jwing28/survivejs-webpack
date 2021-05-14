/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
{

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello world';\n  var element = document.createElement('button');\n  element.className = 'rounded bg-red-100 border max-w-md m-4 p-4';\n  element.innerHTML = text;\n\n  element.onclick = function () {\n    return __webpack_require__.e(/*! import() */ \"src_lazy_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./lazy */ \"./src/lazy.js\")).then(function (lazy) {\n      element.textContent = lazy[\"default\"];\n    })[\"catch\"](function (err) {\n      return console.error(err);\n    });\n  };\n\n  return element;\n});\n\n//# sourceURL=webpack://webpack-survivejs-demo/./src/component.js?");

/***/ })

};