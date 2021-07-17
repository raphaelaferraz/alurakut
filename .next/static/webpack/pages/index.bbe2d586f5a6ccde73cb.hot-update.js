self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_componentes_MainGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/componentes/MainGrid */ "./src/componentes/MainGrid/index.js");
/* harmony import */ var _src_componentes_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/componentes/Box */ "./src/componentes/Box/index.js");
/* harmony import */ var _src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/lib/AlurakutCommons */ "./src/lib/AlurakutCommons.js");
/* harmony import */ var _src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/componentes/ProfileRelations */ "./src/componentes/ProfileRelations/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\EPS\\Documents\\RAPHAELA\\DEV\\pages\\index.js",
    _s = $RefreshSig$();







function ProfileSidebar(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__.AlurakutProfileSidebarMenuDefault, {}, void 0, false, {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__.ProfileRelationsBoxWrapper, {
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState2 = (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      comunidades = _React$useState2[0],
      setComunidades = _React$useState2[1];

  console.log(comunidades); //const comunidades = ['Alurakut']

  var pessoasFavoritas = ['VictorGM01', 'juunegreiros', 'omariosouto', 'peas', 'filipedeschamps'];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState4 = (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 2),
      seguidores = _React$useState4[0],
      setSeguidores = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {
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
    });
  }, []);

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState6 = (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState5, 2),
      seguindo = _React$useState6[0],
      setSeguindo = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {
    fetch('https://api.github.com/users/raphaelaferraz/following').then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    }).then(function (respostaCompleta) {
      setSeguindo(respostaCompleta);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__.AlurakutMenu, {
      usuarioAleatorio: usuarioAleatorio
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_MainGrid__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileArea",
        style: {
          gridArea: 'profileArea'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSidebar, {
          usuarioAleatorio: usuarioAleatorio
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "welcomeArea",
        style: {
          gridArea: 'welcomeArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "title",
            children: "Bem vindo (a)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__.OrkutNostalgicIconSet, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "subTitle",
            children: " O que voc\xEA deseja fazer?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            onSubmit: function handleCriarcomunidade(e) {
              e.preventDefault();
              var dadosDoFormulario = new FormData(e.target);
              console.log('Campo: ', dadosDoFormulario.get('title'));
              console.log('Campo: ', dadosDoFormulario.get('image'));
              console.log('Campo: ', dadosDoFormulario.get('link'));
              var comunidade = {
                id: new Date().toISOString(),
                title: dadosDoFormulario.get('title'),
                image: dadosDoFormulario.get('image'),
                link: dadosDoFormulario.get('link')
              };
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
                lineNumber: 149,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Coloque aqui a URL da capa de sua comunidade",
                name: "image",
                "aria-label": "Coloque aqui a URL da capa de sua comunidade"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Coloque aqui, o link da sua comunidade",
                name: "link",
                "aria-label": "Coloque aqui, o link da sua comunidade"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "submit",
              children: "Criar comunidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
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
          lineNumber: 181,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileRelationsBox, {
          title: "Seguindo",
          items: seguindo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Minhas comunidades (", comunidades.length, ") "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
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
                    lineNumber: 194,
                    columnNumber: 22
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 21
                }, _this)
              }, itemAtual.id, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Pessoas favoritas (", pessoasFavoritas.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
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
                    lineNumber: 216,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 23
                  }, _this)]
                }, itemAtual, true, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 21
                }, _this)
              }, itemAtual, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGViYXIiLCJwcm9wcmllZGFkZXMiLCJ1c3VhcmlvQWxlYXRvcmlvIiwiYm9yZGVyUmFkaXVzIiwiUHJvZmlsZVJlbGF0aW9uc0JveCIsInRpdGxlIiwiaXRlbXMiLCJsZW5ndGgiLCJIb21lIiwiUmVhY3QiLCJjb211bmlkYWRlcyIsInNldENvbXVuaWRhZGVzIiwiY29uc29sZSIsImxvZyIsInBlc3NvYXNGYXZvcml0YXMiLCJzZWd1aWRvcmVzIiwic2V0U2VndWlkb3JlcyIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhRG9TZXJ2aWRvciIsImpzb24iLCJyZXNwb3N0YUNvbXBsZXRhIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VndWluZG8iLCJzZXRTZWd1aW5kbyIsImdyaWRBcmVhIiwiaGFuZGxlQ3JpYXJjb211bmlkYWRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGFkb3NEb0Zvcm11bGFyaW8iLCJGb3JtRGF0YSIsInRhcmdldCIsImdldCIsImNvbXVuaWRhZGUiLCJpZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImltYWdlIiwibGluayIsImNvbXVuaWRhZGVzQXR1YWxpemFkYXMiLCJtYXAiLCJpdGVtQXR1YWwiLCJjb21tdW5pdHlVcmwiLCJpbWFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLFlBQXhCLEVBQXNDO0FBQ3BDLHNCQUNFLDhEQUFDLHlEQUFEO0FBQUssYUFBUyxNQUFkO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUF1QixTQUFHLCtCQUF3QkEsWUFBWSxDQUFDQyxnQkFBckMsU0FBMUI7QUFBdUYsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLEVBQUU7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QixDQUFDOEIsR0FBakIsQ0FBcUIsVUFBQ0MsU0FBRCxFQUFlO0FBQ25DLGtDQUNFO0FBQUEsdUNBQ0U7QUFBRyxzQkFBSSxtQkFBWUEsU0FBWixDQUFQO0FBQUEsMENBQ0U7QUFBSyx1QkFBRywrQkFBd0JBLFNBQXhCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUEsOEJBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBLG1CQUFxQ0EsU0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTQSxTQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFRRCxhQVRBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIQTtBQUFBLGtCQURGO0FBMEhEOztHQW5MdUJyQyxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJiZTJkNTg2ZjVhNmNjZGU3M2NiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5HcmlkIGZyb20gJy4uL3NyYy9jb21wb25lbnRlcy9NYWluR3JpZCdcbmltcG9ydCBCb3ggZnJvbSAnLi4vc3JjL2NvbXBvbmVudGVzL0JveCdcbmltcG9ydCAgeyBBbHVyYWt1dE1lbnUsIEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdCwgT3JrdXROb3N0YWxnaWNJY29uU2V0IH0gIGZyb20gJy4uL3NyYy9saWIvQWx1cmFrdXRDb21tb25zJztcbmltcG9ydCB7IFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudGVzL1Byb2ZpbGVSZWxhdGlvbnMnO1xuXG5mdW5jdGlvbiBQcm9maWxlU2lkZWJhcihwcm9wcmllZGFkZXMpIHtcbiAgcmV0dXJuICggXG4gICAgPEJveCBjbGFzc05hbWU+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7cHJvcHJpZWRhZGVzLnVzdWFyaW9BbGVhdG9yaW99LnBuZ2B9IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzhweCd9fS8+XG5cbiAgICAgIDxociAvPiBcblxuICAgICAgPHA+IFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJib3hMaW5rXCIgaHJlZiA9e2BodHRwczovL2dpdGh1Yi5jb20vJHtwcm9wcmllZGFkZXMudXN1YXJpb0FsZWF0b3Jpb31gfT5cbiAgICAgICAgICBAe3Byb3ByaWVkYWRlcy51c3VhcmlvQWxlYXRvcmlvfVxuICAgICAgICA8L2E+XG5cbiAgICAgIDwvcD5cbiAgICAgIDxociAvPiBcbiAgICAgIDxBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQgLz5cbiAgICA8L0JveD5cbiAgXG4gICBcbiAgXG4gIFxuICApXG59XG5cbmZ1bmN0aW9uIFByb2ZpbGVSZWxhdGlvbnNCb3gocHJvcHJpZWRhZGVzKXtcbiAgcmV0dXJuIChcbiAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwic21hbGxUaXRsZVwiPlxuICAgICAgICAgICB7cHJvcHJpZWRhZGVzLnRpdGxlfSAgICh7IHByb3ByaWVkYWRlcy5pdGVtcy5sZW5ndGggfSkgPC9oMj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHsgLyogc2VndWlkb3Jlcy5tYXAoKGl0ZW1BdHVhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtQXR1YWx9ID5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2l0ZW1BdHVhbH0ucG5nYH0+XG4gICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbUF0dWFsLmltYWdlfSAvPiBcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbUF0dWFsLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfSAqL31cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj4gXG4gICl9XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB1c3VhcmlvQWxlYXRvcmlvID0gJ3JhcGhhZWxhZmVycmF6J1xuICBjb25zdCBbY29tdW5pZGFkZXMsIHNldENvbXVuaWRhZGVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuICBjb25zb2xlLmxvZyhjb211bmlkYWRlcyk7XG4gIC8vY29uc3QgY29tdW5pZGFkZXMgPSBbJ0FsdXJha3V0J11cbiAgY29uc3QgcGVzc29hc0Zhdm9yaXRhcyA9IFtcbiAgICAnVmljdG9yR00wMScsXG4gICAgJ2p1dW5lZ3JlaXJvcycsXG4gICAgJ29tYXJpb3NvdXRvJyxcbiAgICAncGVhcycsXG4gICAgJ2ZpbGlwZWRlc2NoYW1wcydcbiAgXVxuICBcbmNvbnN0IFtzZWd1aWRvcmVzLCBzZXRTZWd1aWRvcmVzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgXG5SZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3JhcGhhZWxhZmVycmF6L2ZvbGxvd2VycycpXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb3N0YURvU2Vydmlkb3IpIHtcbiAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZpZG9yLmpzb24oKTtcbiAgfSlcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3Bvc3RhQ29tcGxldGEpe1xuICAgIHNldFNlZ3VpZG9yZXMocmVzcG9zdGFDb21wbGV0YSk7XG4gIH0pXG4gXG5cbiAgLy9BUEkgR3JhcGhRTFxuICAgIGZldGNoKCdodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20vJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJzVmOWY2NDE2ZDJjZGJlMzkwODc2MDI4YzIxM2QyOCcsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1wicXVlcnlcIjogYHF1ZXJ5IHtcbiAgICAgICAgYWxsQ29tbXVuaXRpZXMge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgaW1hZ2VVcmxcbiAgICAgICAgICBjb21tdW5pdHlVcmxcbiAgICAgICAgfVxuICAgICAgfWAgIH0pXG4gICAgfSlcblxufSwgW10pXG5cbmNvbnN0IFtzZWd1aW5kbywgc2V0U2VndWluZG9dID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG5SZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3JhcGhhZWxhZmVycmF6L2ZvbGxvd2luZycpXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb3N0YURvU2Vydmlkb3IpIHtcbiAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZpZG9yLmpzb24oKTtcbiAgfSlcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3Bvc3RhQ29tcGxldGEpe1xuICAgIHNldFNlZ3VpbmRvKHJlc3Bvc3RhQ29tcGxldGEpO1xuICB9KVxufSwgW10pXG5cbiAgcmV0dXJuICggXG4gICAgPD5cbiAgICA8QWx1cmFrdXRNZW51IHVzdWFyaW9BbGVhdG9yaW89e3VzdWFyaW9BbGVhdG9yaW99Lz4gXG4gICAgICBcbiAgICA8TWFpbkdyaWQ+IFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQXJlYVwiIHN0eWxlID0ge3sgZ3JpZEFyZWE6ICdwcm9maWxlQXJlYScgfX0+IFxuICAgICAgIDxQcm9maWxlU2lkZWJhciB1c3VhcmlvQWxlYXRvcmlvPXt1c3VhcmlvQWxlYXRvcmlvfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lQXJlYVwiIHN0eWxlID0ge3sgZ3JpZEFyZWE6ICd3ZWxjb21lQXJlYScgfX0+XG4gICAgICAgIFxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPiBcbiAgICAgICAgICAgIEJlbSB2aW5kbyAoYSlcbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPE9ya3V0Tm9zdGFsZ2ljSWNvblNldCAvPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94PiBcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViVGl0bGVcIj4gTyBxdWUgdm9jw6ogZGVzZWphIGZhemVyPzwvaDI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Z1bmN0aW9uIGhhbmRsZUNyaWFyY29tdW5pZGFkZShlKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNvbnN0IGRhZG9zRG9Gb3JtdWxhcmlvID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvOiAnLCBkYWRvc0RvRm9ybXVsYXJpby5nZXQoJ3RpdGxlJykpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FtcG86ICcsIGRhZG9zRG9Gb3JtdWxhcmlvLmdldCgnaW1hZ2UnKSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wbzogJywgZGFkb3NEb0Zvcm11bGFyaW8uZ2V0KCdsaW5rJykpXG5cbiAgICAgICAgICAgICAgY29uc3QgY29tdW5pZGFkZSA9IHtcbiAgICAgICAgICAgICAgICBpZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBkYWRvc0RvRm9ybXVsYXJpby5nZXQoJ3RpdGxlJyksXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGRhZG9zRG9Gb3JtdWxhcmlvLmdldCgnaW1hZ2UnKSxcbiAgICAgICAgICAgICAgICBsaW5rOiBkYWRvc0RvRm9ybXVsYXJpby5nZXQoJ2xpbmsnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjb25zdCBjb211bmlkYWRlc0F0dWFsaXphZGFzID0gWy4uLmNvbXVuaWRhZGVzLCBjb211bmlkYWRlXVxuXG4gICAgICAgICAgICAgIHNldENvbXVuaWRhZGVzKGNvbXVuaWRhZGVzQXR1YWxpemFkYXMpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUXVhbCB2YWkgc2VyIG8gbm9tZSBkYSBjb211bmlkYWRlP1wiIG5hbWU9XCJ0aXRsZVwiIFxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUXVhbCB2YWkgc2VyIG8gbm9tZSBkYSBjb211bmlkYWRlP1wiIFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkNvbG9xdWUgYXF1aSBhIFVSTCBkYSBjYXBhIGRlIHN1YSBjb211bmlkYWRlXCIgbmFtZT1cImltYWdlXCIgXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDb2xvcXVlIGFxdWkgYSBVUkwgZGEgY2FwYSBkZSBzdWEgY29tdW5pZGFkZVwiIFxuICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb2xvcXVlIGFxdWksIG8gbGluayBkYSBzdWEgY29tdW5pZGFkZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvbG9xdWUgYXF1aSwgbyBsaW5rIGRhIHN1YSBjb211bmlkYWRlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICBDcmlhciBjb211bmlkYWRlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvQm94PlxuXG4gICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlUmVsYXRpb25zQXJlYVwiIHN0eWxlID0ge3sgZ3JpZEFyZWE6ICdwcm9maWxlUmVsYXRpb25zQXJlYScgfX0+XG4gICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveCB0aXRsZT1cIlNlZ3VpZG9yZXNcIiBpdGVtcz17c2VndWlkb3Jlc30vPlxuXG4gICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveCB0aXRsZT0nU2VndWluZG8nIGl0ZW1zPXtzZWd1aW5kb30gLz5cbiAgICAgIFxuICAgICAgXG4gICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwic21hbGxUaXRsZVwiPlxuICAgICAgICAgICAgICBNaW5oYXMgY29tdW5pZGFkZXMgKHsgY29tdW5pZGFkZXMubGVuZ3RoIH0pIDwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7Y29tdW5pZGFkZXMubWFwKChpdGVtQXR1YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsLmlkfSA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW1BdHVhbC5jb21tdW5pdHlVcmx9PlxuICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1BdHVhbC5pbWFnZVVybH0gLz4gXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW1BdHVhbC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+IFxuICAgICAgICAgICAgUGVzc29hcyBmYXZvcml0YXMgKHtwZXNzb2FzRmF2b3JpdGFzLmxlbmd0aH0pIFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgXG5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtwZXNzb2FzRmF2b3JpdGFzLm1hcCgoaXRlbUF0dWFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvdXNlcnMvJHtpdGVtQXR1YWx9YH0ga2V5PXtpdGVtQXR1YWx9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aXRlbUF0dWFsfS5wbmdgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYWluR3JpZD5cbiAgICA8Lz5cbiAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9