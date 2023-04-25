"use strict";
exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i7": () => (/* reexport */ cookie_serializeCookie)
});

// UNUSED EXPORTS: redirectIfAuthenticated, withAuth

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(4802);
;// CONCATENATED MODULE: ./src/lib/cookie.ts

// eslint-disable-next-line import/prefer-default-export
function cookie_serializeCookie(name, value, options) {
    const stringValue = typeof value === "object" ? `j:${JSON.stringify(value)}` : String(value);
    const cookieOptions = {
        ...options
    };
    if (cookieOptions.maxAge) {
        cookieOptions.expires = new Date(Date.now() + cookieOptions.maxAge);
        cookieOptions.maxAge /= 1000;
    }
    return (0,external_cookie_.serialize)(name, String(stringValue), cookieOptions);
}

;// CONCATENATED MODULE: ./src/lib/withAuth.ts

/**
 * Use with `GetServerSideProps`
 * eg:
 * ```
 * export const getServerSideProps: GetServerSideProps<Props> = withAuth(async (context) => {
 *   ...
 * })
 * ```
 */ const withAuth = (gssp)=>async (context)=>{
        const { auth: authSession  } = context.req.cookies;
        if (!authSession) {
            context.res.setHeader("Set-Cookie", serializeCookie("redirect", context.resolvedUrl, {
                path: "/"
            }));
            return {
                redirect: {
                    destination: "/login",
                    permanent: false
                }
            };
        }
        return gssp(context) // Continue on to call `getServerSideProps` logic
        ;
    };
/* harmony default export */ const lib_withAuth = ((/* unused pure expression or super */ null && (withAuth)));

;// CONCATENATED MODULE: ./src/lib/index.ts





/***/ })

};
;