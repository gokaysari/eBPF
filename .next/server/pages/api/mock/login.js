"use strict";
(() => {
var exports = {};
exports.id = 438;
exports.ids = [438];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 4453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(960);

function handler(req, res) {
    const cookie = (0,_lib__WEBPACK_IMPORTED_MODULE_0__/* .serializeCookie */ .i7)("auth", {
        user: "Andy"
    }, {
        path: "/"
    });
    res.status(200).setHeader("Set-Cookie", cookie).json({
        login: true
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [960], () => (__webpack_exec__(4453)));
module.exports = __webpack_exports__;

})();