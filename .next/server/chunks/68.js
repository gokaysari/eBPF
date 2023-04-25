"use strict";
exports.id = 68;
exports.ids = [68];
exports.modules = {

/***/ 6428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* reexport */ Pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Pagination/Summary.tsx


function Summary(props) {
    const { total , from , to  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-12 text-center text-sm-start col-sm-auto col-lg mb-3",
        children: [
            "Showing",
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "fw-semibold",
                children: from
            }),
            " ",
            "to",
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "fw-semibold",
                children: to
            }),
            " ",
            "of",
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "fw-semibold",
                children: total
            }),
            " ",
            "results"
        ]
    });
}

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Pagination/RowsPerPage.tsx




function RowsPerPage(props) {
    const { perPage , setPerPage  } = props;
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-auto ms-sm-auto mb-3",
        children: [
            "Rows per page:",
            " ",
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Select, {
                defaultValue: perPage,
                className: "d-inline-block w-auto",
                "aria-label": "Item per page",
                onChange: (event)=>{
                    if (setPerPage) {
                        setPerPage(parseInt(event.target.value, 10));
                    }
                    router.push({
                        pathname: router.pathname,
                        query: {
                            ...router.query,
                            page: 1,
                            per_page: event.target.value
                        }
                    });
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: 20,
                        children: "20"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: 50,
                        children: "50"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: 100,
                        children: "100"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: 250,
                        children: "250"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "react-paginate"
var external_react_paginate_ = __webpack_require__(9700);
var external_react_paginate_default = /*#__PURE__*/__webpack_require__.n(external_react_paginate_);
;// CONCATENATED MODULE: ./src/components/Pagination/Paginate.tsx




function Paginate(props) {
    const { currentPage , lastPage , setPage  } = props;
    const [pageIndex, setPageIndex] = (0,external_react_.useState)(currentPage - 1);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        setPageIndex(currentPage - 1);
    }, [
        currentPage
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-auto ms-sm-auto mb-3 overflow-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_paginate_default()), {
            forcePage: pageIndex,
            pageCount: lastPage,
            marginPagesDisplayed: 1,
            pageRangeDisplayed: 3,
            containerClassName: "pagination mb-0",
            previousClassName: "page-item",
            pageClassName: "page-item",
            breakClassName: "page-item",
            nextClassName: "page-item",
            previousLinkClassName: "page-link",
            pageLinkClassName: "page-link",
            breakLinkClassName: "page-link",
            nextLinkClassName: "page-link",
            previousLabel: "‹",
            nextLabel: "›",
            activeClassName: "active",
            disabledClassName: "disabled",
            onPageChange: (selectedItem)=>{
                const page = selectedItem.selected + 1;
                if (setPage) {
                    setPage(page);
                }
                router.push({
                    pathname: router.pathname,
                    query: {
                        ...router.query,
                        page
                    }
                });
            }
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Pagination/Pagination.tsx





function Pagination(props) {
    const { meta: { from , to , total , per_page: perPage , last_page: lastPage , current_page: currentPage  } , setPerPage , setPage  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row align-items-center justify-content-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Summary, {
                from: from,
                to: to,
                total: total
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RowsPerPage, {
                perPage: perPage,
                setPerPage: setPerPage
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Paginate, {
                currentPage: currentPage,
                lastPage: lastPage,
                setPage: setPage
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Pagination/index.ts
// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ 6611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PokemonList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_TableSort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5854);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _components_TableSort__WEBPACK_IMPORTED_MODULE_5__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _components_TableSort__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const typeColorMap = {
    normal: "#aa9",
    fighting: "#b54",
    flying: "#89f",
    poison: "#a59",
    ground: "#db5",
    rock: "#ba6",
    bug: "#ab2",
    ghost: "#66b",
    steel: "#aab",
    fire: "#f42",
    water: "#39f",
    grass: "#7c5",
    electric: "#fc3",
    psychic: "#f59",
    ice: "#6cf",
    dragon: "#76e",
    dark: "#754",
    fairy: "#e9e",
    unknown: "#aa9",
    shadow: "#aa9"
};
const TypeLabel = ({ type  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "text-white d-inline-block text-uppercase text-center rounded-1 shadow-sm me-2",
        style: {
            backgroundColor: typeColorMap[type],
            textShadow: "1px 1px 2px rgb(0 0 0 / 70%)",
            fontSize: ".7rem",
            width: "70px"
        },
        children: type
    });
function PokemonList(props) {
    const { pokemons , setSort , setOrder  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Table, {
        responsive: true,
        bordered: true,
        hover: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                className: "bg-light",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TableSort__WEBPACK_IMPORTED_MODULE_5__/* .THSort */ .W, {
                                name: "id",
                                setSort: setSort,
                                setOrder: setOrder,
                                children: "#"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            "aria-label": "Photo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TableSort__WEBPACK_IMPORTED_MODULE_5__/* .THSort */ .W, {
                                name: "name",
                                setSort: setSort,
                                setOrder: setOrder,
                                children: "Name"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            children: "Type"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            className: "text-center",
                            children: "Egg group"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            className: "text-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TableSort__WEBPACK_IMPORTED_MODULE_5__/* .THSort */ .W, {
                                name: "hp",
                                setSort: setSort,
                                setOrder: setOrder,
                                children: "Hp"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            className: "text-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TableSort__WEBPACK_IMPORTED_MODULE_5__/* .THSort */ .W, {
                                name: "attack",
                                setSort: setSort,
                                setOrder: setOrder,
                                children: "Atk"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            className: "text-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TableSort__WEBPACK_IMPORTED_MODULE_5__/* .THSort */ .W, {
                                name: "defense",
                                setSort: setSort,
                                setOrder: setOrder,
                                children: "Def"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            className: "text-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TableSort__WEBPACK_IMPORTED_MODULE_5__/* .THSort */ .W, {
                                name: "special_attack",
                                setSort: setSort,
                                setOrder: setOrder,
                                children: "SpA"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            className: "text-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TableSort__WEBPACK_IMPORTED_MODULE_5__/* .THSort */ .W, {
                                name: "special_defense",
                                setSort: setSort,
                                setOrder: setOrder,
                                children: "SpD"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            className: "text-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TableSort__WEBPACK_IMPORTED_MODULE_5__/* .THSort */ .W, {
                                name: "speed",
                                setSort: setSort,
                                setOrder: setOrder,
                                children: "Spd"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            className: "text-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TableSort__WEBPACK_IMPORTED_MODULE_5__/* .THSort */ .W, {
                                name: "total",
                                setSort: setSort,
                                setOrder: setOrder,
                                children: "Total"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            "aria-label": "Action"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                children: pokemons.map((pokemon)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: pokemon.id
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "position-relative mx-auto",
                                    style: {
                                        width: "70px",
                                        height: "70px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        fill: true,
                                        style: {
                                            objectFit: "contain"
                                        },
                                        alt: pokemon.pokemondb_identifier,
                                        sizes: "5vw",
                                        src: `https://img.pokemondb.net/sprites/home/normal/2x/${pokemon.pokemondb_identifier}.jpg`
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: pokemon.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: pokemon.types.map((type)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TypeLabel, {
                                        type: type
                                    }, type))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "text-center",
                                style: {
                                    whiteSpace: "pre"
                                },
                                children: pokemon.egg_groups.join("\n")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "text-end",
                                children: pokemon.hp
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "text-end",
                                children: pokemon.attack
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "text-end",
                                children: pokemon.defense
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "text-end",
                                children: pokemon.special_attack
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "text-end",
                                children: pokemon.special_defense
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "text-end",
                                children: pokemon.speed
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "text-end",
                                children: pokemon.total
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
                                    align: "end",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Toggle, {
                                            as: "button",
                                            bsPrefix: "btn",
                                            className: "btn-link rounded-0 text-black-50 shadow-none p-0",
                                            id: `action-${pokemon.id}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                                fixedWidth: true,
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEllipsisVertical
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Menu, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {
                                                    href: "#/action-1",
                                                    children: "Info"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {
                                                    href: "#/action-2",
                                                    children: "Edit"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {
                                                    className: "text-danger",
                                                    href: "#/action-3",
                                                    children: "Delete"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }, pokemon.id))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1416:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* reexport safe */ _PokemonList__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _PokemonList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PokemonList__WEBPACK_IMPORTED_MODULE_0__]);
_PokemonList__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// eslint-disable-next-line import/prefer-default-export


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ THSort)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function THSort(props) {
    const { name , children , setSort , setOrder  } = props;
    const [icon, setIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSort);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { query: { sort , order  }  } = router;
    const onClick = ()=>{
        if (setOrder) {
            setOrder(order === "asc" ? "desc" : "asc");
        }
        if (setSort) {
            setSort(name);
        }
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                sort: name,
                order: order === "asc" ? "desc" : "asc"
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (sort !== name) {
            setIcon(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSort);
            return;
        }
        if (order === "asc") {
            setIcon(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSortUp);
            return;
        }
        if (order === "desc") {
            setIcon(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSortDown);
        }
    }, [
        sort,
        order,
        name
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "text-decoration-none",
        role: "button",
        tabIndex: 0,
        onClick: onClick,
        onKeyDown: onClick,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                icon: icon,
                fixedWidth: true,
                size: "xs"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* reexport safe */ _THSort__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _THSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1016);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_THSort__WEBPACK_IMPORTED_MODULE_0__]);
_THSort__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// eslint-disable-next-line import/prefer-default-export


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* reexport safe */ _useSWRAxios__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "b": () => (/* reexport safe */ _useSWRAxios__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var _useSWRAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useSWRAxios__WEBPACK_IMPORTED_MODULE_0__]);
_useSWRAxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9590:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useSWRAxios),
/* harmony export */   "b": () => (/* binding */ transformResponseWrapper)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/**
 * `useSWR` wrapper with `axios` as fetcher.
 * Requires `fallbackData` for initial fetch.
 *
 * @param axiosRequest
 * @param axiosFallbackData
 */ function useSWRAxios(axiosRequest, axiosFallbackData) {
    const initFallbackData = {
        data: axiosFallbackData.data,
        headers: {},
        status: 200,
        statusText: "Initial",
        config: {}
    };
    const fallbackData = {
        ...initFallbackData,
        ...axiosFallbackData
    };
    return (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(JSON.stringify(axiosRequest), ()=>axios__WEBPACK_IMPORTED_MODULE_1___default().request(axiosRequest), {
        fallbackData,
        onErrorRetry: (error, key, config, revalidate, { retryCount  })=>{
            // Never retry on 404.
            if (error.response?.status === 404) return;
            // Only retry up to `maxRetry` times.
            const maxRetry = parseInt(process.env.NEXT_PUBLIC_API_MAX_RETRY ?? "5", 10);
            if (retryCount >= maxRetry) return;
            // Retry after `retryInterval` seconds.
            const retryInterval = parseInt(process.env.NEXT_PUBLIC_API_RETRY_INTERVAL_IN_SECONDS ?? "5", 10);
            setTimeout(()=>revalidate({
                    retryCount
                }), retryInterval * 1000);
        }
    });
}
// Disable style for better reading.
// eslint-disable-next-line arrow-body-style
const transformResponseWrapper = (transformer)=>{
    return [].concat((axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.transformResponse), transformer);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ newResource)
/* harmony export */ });
const getTo = (total, page, perPage)=>{
    if (page === 1) {
        return total < perPage ? total : perPage;
    }
    return (page - 1) * perPage + perPage;
};
const getLastPage = (total, perPage)=>{
    if (total <= 1) {
        return 1;
    }
    return Math.ceil(total / perPage);
};
const newResource = (data, total, page, perPage)=>({
        data,
        meta: {
            current_page: page,
            last_page: getLastPage(total, perPage),
            from: page === 1 ? 1 : (page - 1) * perPage + 1,
            to: getTo(total, page, perPage),
            per_page: perPage,
            total
        }
    });


/***/ })

};
;