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
    }).then(function (response) {
      return response.json();
    }).then(function (respostaCompleta) {
      var comunidadesDoDato = respostaCompleta.data.allCommunities;
      console.log(comunidadesDoDato);
      setComunidades(comunidadesDoDato);
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
      lineNumber: 113,
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "title",
            children: "Bem vindo (a)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__.OrkutNostalgicIconSet, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
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
              }).then(async(response));
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
                lineNumber: 161,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Coloque aqui a URL da capa de sua comunidade",
                name: "image",
                "aria-label": "Coloque aqui a URL da capa de sua comunidade"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Coloque aqui, o link da sua comunidade",
                name: "link",
                "aria-label": "Coloque aqui, o link da sua comunidade"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "submit",
              children: "Criar comunidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
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
          lineNumber: 193,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileRelationsBox, {
          title: "Seguindo",
          items: seguindo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Minhas comunidades (", comunidades.length, ") "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
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
                    lineNumber: 206,
                    columnNumber: 22
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 21
                }, _this)
              }, itemAtual.id, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Pessoas favoritas (", pessoasFavoritas.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
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
                    lineNumber: 228,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 23
                  }, _this)]
                }, itemAtual, true, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 21
                }, _this)
              }, itemAtual, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGViYXIiLCJwcm9wcmllZGFkZXMiLCJ1c3VhcmlvQWxlYXRvcmlvIiwiYm9yZGVyUmFkaXVzIiwiUHJvZmlsZVJlbGF0aW9uc0JveCIsInRpdGxlIiwiaXRlbXMiLCJsZW5ndGgiLCJIb21lIiwiUmVhY3QiLCJjb211bmlkYWRlcyIsInNldENvbXVuaWRhZGVzIiwiY29uc29sZSIsImxvZyIsInBlc3NvYXNGYXZvcml0YXMiLCJzZWd1aWRvcmVzIiwic2V0U2VndWlkb3JlcyIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhRG9TZXJ2aWRvciIsImpzb24iLCJyZXNwb3N0YUNvbXBsZXRhIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJjb211bmlkYWRlc0RvRGF0byIsImRhdGEiLCJhbGxDb21tdW5pdGllcyIsInNlZ3VpbmRvIiwic2V0U2VndWluZG8iLCJncmlkQXJlYSIsImhhbmRsZUNyaWFyY29tdW5pZGFkZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhZG9zRG9Gb3JtdWxhcmlvIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJnZXQiLCJjb211bmlkYWRlIiwiaW1hZ2VVcmwiLCJjb21tdW5pdHlVcmwiLCJhc3luYyIsImNvbXVuaWRhZGVzQXR1YWxpemFkYXMiLCJtYXAiLCJpdGVtQXR1YWwiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLFlBQXhCLEVBQXNDO0FBQ3BDLHNCQUNFLDhEQUFDLHlEQUFEO0FBQUssYUFBUyxNQUFkO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUF1QixTQUFHLCtCQUF3QkEsWUFBWSxDQUFDQyxnQkFBckMsU0FBMUI7QUFBdUYs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Y2svcGFnZXMvaW5kZXguNDhmNDJjY2ZlOGUxZDFhNWU1OGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFpbkdyaWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudGVzL01haW5HcmlkJ1xuaW1wb3J0IEJveCBmcm9tICcuLi9zcmMvY29tcG9uZW50ZXMvQm94J1xuaW1wb3J0ICB7IEFsdXJha3V0TWVudSwgQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0LCBPcmt1dE5vc3RhbGdpY0ljb25TZXQgfSAgZnJvbSAnLi4vc3JjL2xpYi9BbHVyYWt1dENvbW1vbnMnO1xuaW1wb3J0IHsgUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50ZXMvUHJvZmlsZVJlbGF0aW9ucyc7XG5cbmZ1bmN0aW9uIFByb2ZpbGVTaWRlYmFyKHByb3ByaWVkYWRlcykge1xuICByZXR1cm4gKCBcbiAgICA8Qm94IGNsYXNzTmFtZT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtwcm9wcmllZGFkZXMudXN1YXJpb0FsZWF0b3Jpb30ucG5nYH0gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnOHB4J319Lz5cblxuICAgICAgPGhyIC8+IFxuXG4gICAgICA8cD4gXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJveExpbmtcIiBocmVmID17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb3ByaWVkYWRlcy51c3VhcmlvQWxlYXRvcmlvfWB9PlxuICAgICAgICAgIEB7cHJvcHJpZWRhZGVzLnVzdWFyaW9BbGVhdG9yaW99XG4gICAgICAgIDwvYT5cblxuICAgICAgPC9wPlxuICAgICAgPGhyIC8+IFxuICAgICAgPEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdCAvPlxuICAgIDwvQm94PlxuICBcbiAgIFxuICBcbiAgXG4gIClcbn1cblxuZnVuY3Rpb24gUHJvZmlsZVJlbGF0aW9uc0JveChwcm9wcmllZGFkZXMpe1xuICByZXR1cm4gKFxuICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XG4gICAgICAgICAgIHtwcm9wcmllZGFkZXMudGl0bGV9ICAgKHsgcHJvcHJpZWRhZGVzLml0ZW1zLmxlbmd0aCB9KSA8L2gyPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgeyAvKiBzZWd1aWRvcmVzLm1hcCgoaXRlbUF0dWFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbH0gPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aXRlbUF0dWFsfS5wbmdgfT5cbiAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtQXR1YWwuaW1hZ2V9IC8+IFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWwudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9ICovfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPiBcbiAgKX1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHVzdWFyaW9BbGVhdG9yaW8gPSAncmFwaGFlbGFmZXJyYXonXG4gIGNvbnN0IFtjb211bmlkYWRlcywgc2V0Q29tdW5pZGFkZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG4gIGNvbnNvbGUubG9nKGNvbXVuaWRhZGVzKTtcbiAgLy9jb25zdCBjb211bmlkYWRlcyA9IFsnQWx1cmFrdXQnXVxuICBjb25zdCBwZXNzb2FzRmF2b3JpdGFzID0gW1xuICAgICdWaWN0b3JHTTAxJyxcbiAgICAnanV1bmVncmVpcm9zJyxcbiAgICAnb21hcmlvc291dG8nLFxuICAgICdwZWFzJyxcbiAgICAnZmlsaXBlZGVzY2hhbXBzJ1xuICBdXG4gIFxuY29uc3QgW3NlZ3VpZG9yZXMsIHNldFNlZ3VpZG9yZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBcblJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvcmFwaGFlbGFmZXJyYXovZm9sbG93ZXJzJylcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3Bvc3RhRG9TZXJ2aWRvcikge1xuICAgIHJldHVybiByZXNwb3N0YURvU2Vydmlkb3IuanNvbigpO1xuICB9KVxuICAudGhlbihmdW5jdGlvbiAocmVzcG9zdGFDb21wbGV0YSl7XG4gICAgc2V0U2VndWlkb3JlcyhyZXNwb3N0YUNvbXBsZXRhKTtcbiAgfSlcbiBcblxuICAvL0FQSSBHcmFwaFFMXG4gICAgZmV0Y2goJ2h0dHBzOi8vZ3JhcGhxbC5kYXRvY21zLmNvbS8nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnNWY5ZjY0MTZkMmNkYmUzOTA4NzYwMjhjMjEzZDI4JyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XCJxdWVyeVwiOiBgcXVlcnkge1xuICAgICAgICBhbGxDb21tdW5pdGllcyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBpbWFnZVVybFxuICAgICAgICAgIGNvbW11bml0eVVybFxuICAgICAgICB9XG4gICAgICB9YCAgfSlcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuICgocmVzcG9zdGFDb21wbGV0YSkgPT4ge1xuICAgICAgY29uc3QgY29tdW5pZGFkZXNEb0RhdG89cmVzcG9zdGFDb21wbGV0YS5kYXRhLmFsbENvbW11bml0aWVzO1xuICAgICAgY29uc29sZS5sb2coY29tdW5pZGFkZXNEb0RhdG8pXG4gICAgICBzZXRDb211bmlkYWRlcyhjb211bmlkYWRlc0RvRGF0bylcbiAgICB9KVxufSwgW10pXG5cbmNvbnN0IFtzZWd1aW5kbywgc2V0U2VndWluZG9dID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG5SZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3JhcGhhZWxhZmVycmF6L2ZvbGxvd2luZycpXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb3N0YURvU2Vydmlkb3IpIHtcbiAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZpZG9yLmpzb24oKTtcbiAgfSlcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3Bvc3RhQ29tcGxldGEpe1xuICAgIHNldFNlZ3VpbmRvKHJlc3Bvc3RhQ29tcGxldGEpO1xuICB9KVxufSwgW10pXG5cbiAgcmV0dXJuICggXG4gICAgPD5cbiAgICA8QWx1cmFrdXRNZW51IHVzdWFyaW9BbGVhdG9yaW89e3VzdWFyaW9BbGVhdG9yaW99Lz4gXG4gICAgICBcbiAgICA8TWFpbkdyaWQ+IFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQXJlYVwiIHN0eWxlID0ge3sgZ3JpZEFyZWE6ICdwcm9maWxlQXJlYScgfX0+IFxuICAgICAgIDxQcm9maWxlU2lkZWJhciB1c3VhcmlvQWxlYXRvcmlvPXt1c3VhcmlvQWxlYXRvcmlvfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lQXJlYVwiIHN0eWxlID0ge3sgZ3JpZEFyZWE6ICd3ZWxjb21lQXJlYScgfX0+XG4gICAgICAgIFxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPiBcbiAgICAgICAgICAgIEJlbSB2aW5kbyAoYSlcbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPE9ya3V0Tm9zdGFsZ2ljSWNvblNldCAvPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94PiBcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViVGl0bGVcIj4gTyBxdWUgdm9jw6ogZGVzZWphIGZhemVyPzwvaDI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Z1bmN0aW9uIGhhbmRsZUNyaWFyY29tdW5pZGFkZShlKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNvbnN0IGRhZG9zRG9Gb3JtdWxhcmlvID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvOiAnLCBkYWRvc0RvRm9ybXVsYXJpby5nZXQoJ3RpdGxlJykpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FtcG86ICcsIGRhZG9zRG9Gb3JtdWxhcmlvLmdldCgnaW1hZ2UnKSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wbzogJywgZGFkb3NEb0Zvcm11bGFyaW8uZ2V0KCdsaW5rJykpXG5cbiAgICAgICAgICAgICAgY29uc3QgY29tdW5pZGFkZSA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogZGFkb3NEb0Zvcm11bGFyaW8uZ2V0KCd0aXRsZScpLFxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBkYWRvc0RvRm9ybXVsYXJpby5nZXQoJ2ltYWdlJyksXG4gICAgICAgICAgICAgICAgY29tbXVuaXR5VXJsOiBkYWRvc0RvRm9ybXVsYXJpby5nZXQoJ2xpbmsnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBmZXRjaCgnYXBpL2NvbXVuaWRhZGVzJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbXVuaWRhZGUpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKGFzeW5jKHJlc3BvbnNlKSlcbiAgICAgICAgICAgICAgY29uc3QgY29tdW5pZGFkZXNBdHVhbGl6YWRhcyA9IFsuLi5jb211bmlkYWRlcywgY29tdW5pZGFkZV1cblxuICAgICAgICAgICAgICBzZXRDb211bmlkYWRlcyhjb211bmlkYWRlc0F0dWFsaXphZGFzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlF1YWwgdmFpIHNlciBvIG5vbWUgZGEgY29tdW5pZGFkZT9cIiBuYW1lPVwidGl0bGVcIiBcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlF1YWwgdmFpIHNlciBvIG5vbWUgZGEgY29tdW5pZGFkZT9cIiBcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJDb2xvcXVlIGFxdWkgYSBVUkwgZGEgY2FwYSBkZSBzdWEgY29tdW5pZGFkZVwiIG5hbWU9XCJpbWFnZVwiIFxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ29sb3F1ZSBhcXVpIGEgVVJMIGRhIGNhcGEgZGUgc3VhIGNvbXVuaWRhZGVcIiBcbiAgICAgICAgICAgICAgLz4gXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29sb3F1ZSBhcXVpLCBvIGxpbmsgZGEgc3VhIGNvbXVuaWRhZGVcIlxuICAgICAgICAgICAgICBuYW1lPVwibGlua1wiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDb2xvcXVlIGFxdWksIG8gbGluayBkYSBzdWEgY29tdW5pZGFkZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgQ3JpYXIgY29tdW5pZGFkZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8L0JveD5cblxuICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVJlbGF0aW9uc0FyZWFcIiBzdHlsZSA9IHt7IGdyaWRBcmVhOiAncHJvZmlsZVJlbGF0aW9uc0FyZWEnIH19PlxuICAgICAgPFByb2ZpbGVSZWxhdGlvbnNCb3ggdGl0bGU9XCJTZWd1aWRvcmVzXCIgaXRlbXM9e3NlZ3VpZG9yZXN9Lz5cblxuICAgICAgPFByb2ZpbGVSZWxhdGlvbnNCb3ggdGl0bGU9J1NlZ3VpbmRvJyBpdGVtcz17c2VndWluZG99IC8+XG4gICAgICBcbiAgICAgIFxuICAgICAgPFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInNtYWxsVGl0bGVcIj5cbiAgICAgICAgICAgICAgTWluaGFzIGNvbXVuaWRhZGVzICh7IGNvbXVuaWRhZGVzLmxlbmd0aCB9KSA8L2gyPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2NvbXVuaWRhZGVzLm1hcCgoaXRlbUF0dWFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbC5pZH0gPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtQXR1YWwuY29tbXVuaXR5VXJsfT5cbiAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtQXR1YWwuaW1hZ2VVcmx9IC8+IFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWwudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic21hbGxUaXRsZVwiPiBcbiAgICAgICAgICAgIFBlc3NvYXMgZmF2b3JpdGFzICh7cGVzc29hc0Zhdm9yaXRhcy5sZW5ndGh9KSBcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIFxuXG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7cGVzc29hc0Zhdm9yaXRhcy5tYXAoKGl0ZW1BdHVhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtQXR1YWx9PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL3VzZXJzLyR7aXRlbUF0dWFsfWB9IGtleT17aXRlbUF0dWFsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2l0ZW1BdHVhbH0ucG5nYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbUF0dWFsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTWFpbkdyaWQ+XG4gICAgPC8+XG4gIClcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==