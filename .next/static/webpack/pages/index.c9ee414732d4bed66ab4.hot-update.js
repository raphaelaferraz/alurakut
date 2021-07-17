self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_componentes_MainGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/componentes/MainGrid */ "./src/componentes/MainGrid/index.js");
/* harmony import */ var _src_componentes_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/componentes/Box */ "./src/componentes/Box/index.js");
/* harmony import */ var _src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/lib/AlurakutCommons */ "./src/lib/AlurakutCommons.js");
/* harmony import */ var _src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/componentes/ProfileRelations */ "./src/componentes/ProfileRelations/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\Users\\EPS\\Documents\\RAPHAELA\\DEV\\pages\\index.js",
    _s = $RefreshSig$();







function ProfileSidebar(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "image",
      src: "https://github.com/".concat(propriedades.usuarioAleatorio, ".png"),
      style: {
        borderRadius: '8px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "boxLink",
        href: "https://github.com/".concat(propriedades.usuarioAleatorio),
        children: ["@", propriedades.usuarioAleatorio]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_8__.AlurakutProfileSidebarMenuDefault, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = ProfileSidebar;

function ProfileRelationsBox(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_9__.ProfileRelationsBoxWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "smallTitle",
      children: [propriedades.title, "   (", propriedades.items.length, ") "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_c2 = ProfileRelationsBox;
function Home() {
  _s();

  var _this = this;

  var usuarioAleatorio = 'raphaelaferraz';

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]),
      _React$useState2 = (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState, 2),
      comunidades = _React$useState2[0],
      setComunidades = _React$useState2[1];

  console.log(comunidades); //const comunidades = ['Alurakut']

  var pessoasFavoritas = ['VictorGM01', 'juunegreiros', 'omariosouto', 'peas', 'filipedeschamps'];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]),
      _React$useState4 = (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState3, 2),
      seguidores = _React$useState4[0],
      setSeguidores = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_5___default().useEffect(function () {
    fetch('https://api.github.com/users/raphaelaferraz/followers').then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    }).then(function (respostaCompleta) {
      setSeguidores(respostaCompleta);
    }); //API GraphQL

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '5f9f6416d2cdbe390876028c213d28',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "query": "query {\n        allCommunities {\n          title\n          imageUrl\n          communityUrl\n        }\n      }"
      })
    }).then(function (response) {
      return response.json();
    }).then(function (respostaCompleta) {
      var comunidadesDoDato = respostaCompleta.data.allCommunities;
      console.log(comunidadesDoDato);
      setComunidades(comunidadesDoDato);
    });
  }, []);

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]),
      _React$useState6 = (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_React$useState5, 2),
      seguindo = _React$useState6[0],
      setSeguindo = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_5___default().useEffect(function () {
    fetch('https://api.github.com/users/raphaelaferraz/following').then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    }).then(function (respostaCompleta) {
      setSeguindo(respostaCompleta);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_8__.AlurakutMenu, {
      usuarioAleatorio: usuarioAleatorio
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_MainGrid__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileArea",
        style: {
          gridArea: 'profileArea'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSidebar, {
          usuarioAleatorio: usuarioAleatorio
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "welcomeArea",
        style: {
          gridArea: 'welcomeArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "title",
            children: "Bem vindo (a)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_8__.OrkutNostalgicIconSet, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_Box__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "subTitle",
            children: " O que voc\xEA deseja fazer?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            onSubmit: function handleCriarcomunidade(e) {
              e.preventDefault();
              var dadosDoFormulario = new FormData(e.target);
              console.log('Campo: ', dadosDoFormulario.get('title'));
              console.log('Campo: ', dadosDoFormulario.get('image'));
              console.log('Campo: ', dadosDoFormulario.get('link'));
              var comunidade = {
                title: dadosDoFormulario.get('title'),
                imageUrl: dadosDoFormulario.get('image'),
                communityUrl: dadosDoFormulario.get('link')
              };
              fetch('api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(comunidade)
              }).then( /*#__PURE__*/function () {
                var _ref = (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(response) {
                  return C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
              var comunidadesAtualizadas = [].concat((0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(comunidades), [comunidade]);
              setComunidades(comunidadesAtualizadas);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Qual vai ser o nome da comunidade?",
                name: "title",
                "aria-label": "Qual vai ser o nome da comunidade?",
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Coloque aqui a URL da capa de sua comunidade",
                name: "image",
                "aria-label": "Coloque aqui a URL da capa de sua comunidade"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Coloque aqui, o link da sua comunidade",
                name: "link",
                "aria-label": "Coloque aqui, o link da sua comunidade"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "submit",
              children: "Criar comunidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileRelationsArea",
        style: {
          gridArea: 'profileRelationsArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileRelationsBox, {
          title: "Seguidores",
          items: seguidores
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileRelationsBox, {
          title: "Seguindo",
          items: seguindo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_9__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Minhas comunidades (", comunidades.length, ") "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: comunidades.map(function (itemAtual) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: itemAtual.communityUrl,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: itemAtual.imageUrl
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 22
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 21
                }, _this)
              }, itemAtual.id, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_9__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Pessoas favoritas (", pessoasFavoritas.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: pessoasFavoritas.map(function (itemAtual) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "/users/".concat(itemAtual),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "https://github.com/".concat(itemAtual, ".png")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 23
                  }, _this)]
                }, itemAtual, true, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 21
                }, _this)
              }, itemAtual, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(Home, "OowJsjEoEJqnqPB6WnU49N/CrHs=");

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "ProfileSidebar");
$RefreshReg$(_c2, "ProfileRelationsBox");
$RefreshReg$(_c3, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2ZpbGVTaWRlYmFyIiwicHJvcHJpZWRhZGVzIiwidXN1YXJpb0FsZWF0b3JpbyIsImJvcmRlclJhZGl1cyIsIlByb2ZpbGVSZWxhdGlvbnNCb3giLCJ0aXRsZSIsIml0ZW1zIiwibGVuZ3RoIiwiSG9tZSIsIlJlYWN0IiwiY29tdW5pZGFkZXMiLCJzZXRDb211bmlkYWRlcyIsImNvbnNvbGUiLCJsb2ciLCJwZXNzb2FzRmF2b3JpdGFzIiwic2VndWlkb3JlcyIsInNldFNlZ3VpZG9yZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YURvU2Vydmlkb3IiLCJqc29uIiwicmVzcG9zdGFDb21wbGV0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiY29tdW5pZGFkZXNEb0RhdG8iLCJkYXRhIiwiYWxsQ29tbXVuaXRpZXMiLCJzZWd1aW5kbyIsInNldFNlZ3VpbmRvIiwiZ3JpZEFyZWEiLCJoYW5kbGVDcmlhcmNvbXVuaWRhZGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYWRvc0RvRm9ybXVsYXJpbyIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiZ2V0IiwiY29tdW5pZGFkZSIsImltYWdlVXJsIiwiY29tbXVuaXR5VXJsIiwiY29tdW5pZGFkZXNBdHVhbGl6YWRhcyIsIm1hcCIsIml0ZW1BdHVhbCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFBQSwyQkFERixlQUVFO0FBQUEsOEJBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBLG1CQUFxQ0EsU0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTQSxTQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFRRCxhQVRBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIQTtBQUFBLGtCQURGO0FBbUlEOztHQWpNdUJ0QyxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5ZWU0MTQ3MzJkNGJlZDY2YWI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5HcmlkIGZyb20gJy4uL3NyYy9jb21wb25lbnRlcy9NYWluR3JpZCdcbmltcG9ydCBCb3ggZnJvbSAnLi4vc3JjL2NvbXBvbmVudGVzL0JveCdcbmltcG9ydCAgeyBBbHVyYWt1dE1lbnUsIEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdCwgT3JrdXROb3N0YWxnaWNJY29uU2V0IH0gIGZyb20gJy4uL3NyYy9saWIvQWx1cmFrdXRDb21tb25zJztcbmltcG9ydCB7IFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudGVzL1Byb2ZpbGVSZWxhdGlvbnMnO1xuXG5mdW5jdGlvbiBQcm9maWxlU2lkZWJhcihwcm9wcmllZGFkZXMpIHtcbiAgcmV0dXJuICggXG4gICAgPEJveCBjbGFzc05hbWU+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7cHJvcHJpZWRhZGVzLnVzdWFyaW9BbGVhdG9yaW99LnBuZ2B9IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzhweCd9fS8+XG5cbiAgICAgIDxociAvPiBcblxuICAgICAgPHA+IFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJib3hMaW5rXCIgaHJlZiA9e2BodHRwczovL2dpdGh1Yi5jb20vJHtwcm9wcmllZGFkZXMudXN1YXJpb0FsZWF0b3Jpb31gfT5cbiAgICAgICAgICBAe3Byb3ByaWVkYWRlcy51c3VhcmlvQWxlYXRvcmlvfVxuICAgICAgICA8L2E+XG5cbiAgICAgIDwvcD5cbiAgICAgIDxociAvPiBcbiAgICAgIDxBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQgLz5cbiAgICA8L0JveD5cbiAgXG4gICBcbiAgXG4gIFxuICApXG59XG5cbmZ1bmN0aW9uIFByb2ZpbGVSZWxhdGlvbnNCb3gocHJvcHJpZWRhZGVzKXtcbiAgcmV0dXJuIChcbiAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwic21hbGxUaXRsZVwiPlxuICAgICAgICAgICB7cHJvcHJpZWRhZGVzLnRpdGxlfSAgICh7IHByb3ByaWVkYWRlcy5pdGVtcy5sZW5ndGggfSkgPC9oMj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHsgLyogc2VndWlkb3Jlcy5tYXAoKGl0ZW1BdHVhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtQXR1YWx9ID5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2l0ZW1BdHVhbH0ucG5nYH0+XG4gICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbUF0dWFsLmltYWdlfSAvPiBcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbUF0dWFsLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfSAqL31cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj4gXG4gICl9XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB1c3VhcmlvQWxlYXRvcmlvID0gJ3JhcGhhZWxhZmVycmF6J1xuICBjb25zdCBbY29tdW5pZGFkZXMsIHNldENvbXVuaWRhZGVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuICBjb25zb2xlLmxvZyhjb211bmlkYWRlcyk7XG4gIC8vY29uc3QgY29tdW5pZGFkZXMgPSBbJ0FsdXJha3V0J11cbiAgY29uc3QgcGVzc29hc0Zhdm9yaXRhcyA9IFtcbiAgICAnVmljdG9yR00wMScsXG4gICAgJ2p1dW5lZ3JlaXJvcycsXG4gICAgJ29tYXJpb3NvdXRvJyxcbiAgICAncGVhcycsXG4gICAgJ2ZpbGlwZWRlc2NoYW1wcydcbiAgXVxuICBcbmNvbnN0IFtzZWd1aWRvcmVzLCBzZXRTZWd1aWRvcmVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgXG5SZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3JhcGhhZWxhZmVycmF6L2ZvbGxvd2VycycpXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb3N0YURvU2Vydmlkb3IpIHtcbiAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZpZG9yLmpzb24oKTtcbiAgfSlcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3Bvc3RhQ29tcGxldGEpe1xuICAgIHNldFNlZ3VpZG9yZXMocmVzcG9zdGFDb21wbGV0YSk7XG4gIH0pXG4gXG5cbiAgLy9BUEkgR3JhcGhRTFxuICAgIGZldGNoKCdodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20vJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJzVmOWY2NDE2ZDJjZGJlMzkwODc2MDI4YzIxM2QyOCcsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1wicXVlcnlcIjogYHF1ZXJ5IHtcbiAgICAgICAgYWxsQ29tbXVuaXRpZXMge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgaW1hZ2VVcmxcbiAgICAgICAgICBjb21tdW5pdHlVcmxcbiAgICAgICAgfVxuICAgICAgfWAgIH0pXG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbiAoKHJlc3Bvc3RhQ29tcGxldGEpID0+IHtcbiAgICAgIGNvbnN0IGNvbXVuaWRhZGVzRG9EYXRvPXJlc3Bvc3RhQ29tcGxldGEuZGF0YS5hbGxDb21tdW5pdGllcztcbiAgICAgIGNvbnNvbGUubG9nKGNvbXVuaWRhZGVzRG9EYXRvKVxuICAgICAgc2V0Q29tdW5pZGFkZXMoY29tdW5pZGFkZXNEb0RhdG8pXG4gICAgfSlcbn0sIFtdKVxuXG5jb25zdCBbc2VndWluZG8sIHNldFNlZ3VpbmRvXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9yYXBoYWVsYWZlcnJhei9mb2xsb3dpbmcnKVxuICAudGhlbihmdW5jdGlvbiAocmVzcG9zdGFEb1NlcnZpZG9yKSB7XG4gICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2aWRvci5qc29uKCk7XG4gIH0pXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb3N0YUNvbXBsZXRhKXtcbiAgICBzZXRTZWd1aW5kbyhyZXNwb3N0YUNvbXBsZXRhKTtcbiAgfSlcbn0sIFtdKVxuXG4gIHJldHVybiAoIFxuICAgIDw+XG4gICAgPEFsdXJha3V0TWVudSB1c3VhcmlvQWxlYXRvcmlvPXt1c3VhcmlvQWxlYXRvcmlvfS8+IFxuICAgICAgXG4gICAgPE1haW5HcmlkPiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUFyZWFcIiBzdHlsZSA9IHt7IGdyaWRBcmVhOiAncHJvZmlsZUFyZWEnIH19PiBcbiAgICAgICA8UHJvZmlsZVNpZGViYXIgdXN1YXJpb0FsZWF0b3Jpbz17dXN1YXJpb0FsZWF0b3Jpb30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUFyZWFcIiBzdHlsZSA9IHt7IGdyaWRBcmVhOiAnd2VsY29tZUFyZWEnIH19PlxuICAgICAgICBcbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj4gXG4gICAgICAgICAgICBCZW0gdmluZG8gKGEpXG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxPcmt1dE5vc3RhbGdpY0ljb25TZXQgLz5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveD4gXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YlRpdGxlXCI+IE8gcXVlIHZvY8OqIGRlc2VqYSBmYXplcj88L2gyPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmdW5jdGlvbiBoYW5kbGVDcmlhcmNvbXVuaWRhZGUoZSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjb25zdCBkYWRvc0RvRm9ybXVsYXJpbyA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wbzogJywgZGFkb3NEb0Zvcm11bGFyaW8uZ2V0KCd0aXRsZScpKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvOiAnLCBkYWRvc0RvRm9ybXVsYXJpby5nZXQoJ2ltYWdlJykpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FtcG86ICcsIGRhZG9zRG9Gb3JtdWxhcmlvLmdldCgnbGluaycpKVxuXG4gICAgICAgICAgICAgIGNvbnN0IGNvbXVuaWRhZGUgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGRhZG9zRG9Gb3JtdWxhcmlvLmdldCgndGl0bGUnKSxcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogZGFkb3NEb0Zvcm11bGFyaW8uZ2V0KCdpbWFnZScpLFxuICAgICAgICAgICAgICAgIGNvbW11bml0eVVybDogZGFkb3NEb0Zvcm11bGFyaW8uZ2V0KCdsaW5rJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZmV0Y2goJ2FwaS9jb211bmlkYWRlcycsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb211bmlkYWRlKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihhc3luYyhyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBjb25zdCBjb211bmlkYWRlc0F0dWFsaXphZGFzID0gWy4uLmNvbXVuaWRhZGVzLCBjb211bmlkYWRlXVxuXG4gICAgICAgICAgICAgIHNldENvbXVuaWRhZGVzKGNvbXVuaWRhZGVzQXR1YWxpemFkYXMpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUXVhbCB2YWkgc2VyIG8gbm9tZSBkYSBjb211bmlkYWRlP1wiIG5hbWU9XCJ0aXRsZVwiIFxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUXVhbCB2YWkgc2VyIG8gbm9tZSBkYSBjb211bmlkYWRlP1wiIFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkNvbG9xdWUgYXF1aSBhIFVSTCBkYSBjYXBhIGRlIHN1YSBjb211bmlkYWRlXCIgbmFtZT1cImltYWdlXCIgXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDb2xvcXVlIGFxdWkgYSBVUkwgZGEgY2FwYSBkZSBzdWEgY29tdW5pZGFkZVwiIFxuICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb2xvcXVlIGFxdWksIG8gbGluayBkYSBzdWEgY29tdW5pZGFkZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvbG9xdWUgYXF1aSwgbyBsaW5rIGRhIHN1YSBjb211bmlkYWRlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICBDcmlhciBjb211bmlkYWRlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvQm94PlxuXG4gICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlUmVsYXRpb25zQXJlYVwiIHN0eWxlID0ge3sgZ3JpZEFyZWE6ICdwcm9maWxlUmVsYXRpb25zQXJlYScgfX0+XG4gICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveCB0aXRsZT1cIlNlZ3VpZG9yZXNcIiBpdGVtcz17c2VndWlkb3Jlc30vPlxuXG4gICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveCB0aXRsZT0nU2VndWluZG8nIGl0ZW1zPXtzZWd1aW5kb30gLz5cbiAgICAgIFxuICAgICAgXG4gICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwic21hbGxUaXRsZVwiPlxuICAgICAgICAgICAgICBNaW5oYXMgY29tdW5pZGFkZXMgKHsgY29tdW5pZGFkZXMubGVuZ3RoIH0pIDwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7Y29tdW5pZGFkZXMubWFwKChpdGVtQXR1YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsLmlkfSA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW1BdHVhbC5jb21tdW5pdHlVcmx9PlxuICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1BdHVhbC5pbWFnZVVybH0gLz4gXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW1BdHVhbC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+IFxuICAgICAgICAgICAgUGVzc29hcyBmYXZvcml0YXMgKHtwZXNzb2FzRmF2b3JpdGFzLmxlbmd0aH0pIFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgXG5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtwZXNzb2FzRmF2b3JpdGFzLm1hcCgoaXRlbUF0dWFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvdXNlcnMvJHtpdGVtQXR1YWx9YH0ga2V5PXtpdGVtQXR1YWx9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aXRlbUF0dWFsfS5wbmdgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYWluR3JpZD5cbiAgICA8Lz5cbiAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9