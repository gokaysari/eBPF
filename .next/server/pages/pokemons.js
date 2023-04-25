"use strict";
(() => {
var exports = {};
exports.id = 43;
exports.ids = [43];
exports.modules = {

/***/ 172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6141);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_resource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4817);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6428);
/* harmony import */ var _components_Pokemon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1416);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5704);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_1__, _components_Pokemon__WEBPACK_IMPORTED_MODULE_6__, _hooks__WEBPACK_IMPORTED_MODULE_7__]);
([_layout__WEBPACK_IMPORTED_MODULE_1__, _components_Pokemon__WEBPACK_IMPORTED_MODULE_6__, _hooks__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Pokemons = (props)=>{
    const { pokemonResource , page , perPage , sort , order  } = props;
    const pokemonListURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}pokemons` || "";
    // swr: data -> axios: data -> resource: data
    const { data: { data: resource  }  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useSWRAxios */ .T)({
        url: pokemonListURL,
        params: {
            _page: page,
            _limit: perPage,
            _sort: sort,
            _order: order
        },
        transformResponse: (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .transformResponseWrapper */ .b)((d, h)=>{
            const total = h ? parseInt(h["x-total-count"], 10) : 0;
            return (0,_models_resource__WEBPACK_IMPORTED_MODULE_8__/* .newResource */ .m)(d, total, page, perPage);
        })
    }, {
        data: pokemonResource,
        headers: {
            "x-total-count": pokemonResource.meta.total.toString()
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_1__/* .AdminLayout */ .l, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
                    children: "Pok\xe9mon"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__/* .Pagination */ .t, {
                            meta: resource.meta
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pokemon__WEBPACK_IMPORTED_MODULE_6__/* .PokemonList */ .W, {
                            pokemons: resource.data
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__/* .Pagination */ .t, {
                            meta: resource.meta
                        })
                    ]
                })
            ]
        })
    });
};
const getServerSideProps = async (context)=>{
    const pokemonListURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}pokemons` || "";
    let page = 1;
    if (context.query?.page && typeof context.query.page === "string") {
        page = parseInt(context.query.page, 10);
    }
    let perPage = 20;
    if (context.query?.per_page && typeof context.query.per_page === "string") {
        perPage = parseInt(context.query.per_page.toString(), 10);
    }
    let sort = "id";
    if (context.query?.sort && typeof context.query.sort === "string") {
        sort = context.query.sort;
    }
    let order = "asc";
    if (context.query?.order && typeof context.query.order === "string") {
        order = context.query.order;
    }
    const { data: pokemons , headers  } = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(pokemonListURL, {
        params: {
            _page: page,
            _limit: perPage,
            _sort: sort,
            _order: order
        }
    });
    const total = parseInt(headers["x-total-count"], 10);
    const pokemonResource = (0,_models_resource__WEBPACK_IMPORTED_MODULE_8__/* .newResource */ .m)(pokemons, total, page, perPage);
    return {
        props: {
            pokemonResource,
            page,
            perPage,
            sort,
            order
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pokemons);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 9700:
/***/ ((module) => {

module.exports = require("react-paginate");

/***/ }),

/***/ 6105:
/***/ ((module) => {

module.exports = require("react-resize-detector");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2765:
/***/ ((module) => {

module.exports = import("@fortawesome/free-regular-svg-icons");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675,141,68], () => (__webpack_exec__(172)));
module.exports = __webpack_exports__;

})();