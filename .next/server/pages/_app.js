(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* reexport */ ProgressBar)
});

;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/ProgressBar/ProgressBar.tsx


router_.Router.events.on("routeChangeStart", ()=>{
    external_nprogress_default().start();
});
router_.Router.events.on("routeChangeComplete", ()=>{
    external_nprogress_default().done(true);
});
function ProgressBar() {
    return null;
}

;// CONCATENATED MODULE: ./src/components/ProgressBar/index.ts
// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6961);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5800);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8595);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// Next.js allows you to import CSS directly in .js files.
// It handles optimization and all the necessary Webpack configuration to make this work.




// You change this configuration value to false so that the Font Awesome core SVG library
// will not try and insert <style> elements into the <head> of the page.
// Next.js blocks this from happening anyway so you might as well not even try.
// See https://fontawesome.com/v6/docs/web/use-with/react/use-with#next-js
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.config.autoAddCss = false;
function MyApp({ Component , pageProps  }) {
    // In server-side rendered applications, a SSRProvider must wrap the application in order
    // to ensure that the auto-generated ids are consistent between the server and client.
    // https://react-bootstrap.github.io/getting-started/server-side-rendering/
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.SSRProvider, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_5__/* .ProgressBar */ .k, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5800:
/***/ (() => {



/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/fontawesome-svg-core");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9212));
module.exports = __webpack_exports__;

})();