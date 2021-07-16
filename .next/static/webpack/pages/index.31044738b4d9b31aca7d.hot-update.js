self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/lib/AlurakutCommons.js":
/*!************************************!*\
  !*** ./src/lib/AlurakutCommons.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlurakutMenu": function() { return /* binding */ AlurakutMenu; },
/* harmony export */   "AlurakutProfileSidebarMenuDefault": function() { return /* binding */ AlurakutProfileSidebarMenuDefault; },
/* harmony export */   "OrkutNostalgicIconSet": function() { return /* binding */ OrkutNostalgicIconSet; },
/* harmony export */   "AlurakutStyles": function() { return /* binding */ AlurakutStyles; }
/* harmony export */ });
/* harmony import */ var C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\EPS\\Documents\\RAPHAELA\\DEV\\src\\lib\\AlurakutCommons.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var BASE_URL = 'http://alurakut.vercel.app/';
var v = '1';

function Link(_ref) {
  var href = _ref.href,
      children = _ref.children,
      props = (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref, ["href", "children"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: href,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
} // ================================================================================================================
// Menu
// ================================================================================================================


_c = Link;
function AlurakutMenu(_ref2) {
  _s();

  var _this = this;

  var usuarioAleatorio = _ref2.usuarioAleatorio;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false),
      _React$useState2 = (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      isMenuOpen = _React$useState2[0],
      setMenuState = _React$useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutMenu.Wrapper, {
    isMenuOpen: isMenuOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutMenu.Logo, {
        src: "".concat(BASE_URL, "/logo.svg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
        style: {
          flex: 1
        },
        children: [{
          name: 'Inicio',
          slug: '/'
        }, {
          name: 'Amigos',
          slug: '/amigos'
        }, {
          name: 'Comunidades',
          slug: '/comunidades'
        }].map(function (menuItem) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {
            href: "".concat(menuItem.slug.toLocaleLowerCase()),
            children: menuItem.name
          }, "key__".concat(menuItem.name.toLocaleLowerCase()), false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: "/logout",
          children: "Sair"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
            placeholder: "Pesquisar no Orkut"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: function onClick() {
          return setMenuState(!isMenuOpen);
        },
        children: [isMenuOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/menu-open.svg?v=").concat(v)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 26
        }, this), !isMenuOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/menu-closed.svg?v=").concat(v)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 27
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutMenuProfileSidebar, {
      usuarioAleatorio: usuarioAleatorio
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(AlurakutMenu, "RQAUz5wknpCAe4Aflmp8yMbnXOU=");

_c2 = AlurakutMenu;
AlurakutMenu.Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.header.withConfig({
  displayName: "AlurakutCommons__Wrapper",
  componentId: "sc-sd6wiu-0"
})(["width:100%;background-color:#308BC5;.alurakutMenuProfileSidebar{background:white;position:fixed;z-index:100;padding:46px;bottom:0;left:0;right:0;top:48px;transition:.3s;pointer-events:", ";opacity:", ";transform:", ";@media(min-width:860px){display:none;}> div{max-width:400px;margin:auto;}a{font-size:18px;}.boxLink{font-size:18px;color:#2E7BB4;-webkit-text-decoration:none;text-decoration:none;font-weight:800;}hr{margin-top:12px;margin-bottom:8px;border-color:transparent;border-bottom-color:#ECF2FA;}}.container{background-color:#308BC5;padding:7px 16px;max-width:1110px;margin:auto;display:flex;justify-content:space-between;position:relative;z-index:101;@media(min-width:860px){justify-content:flex-start;}button{border:0;background:transparent;align-self:center;display:inline-block;@media(min-width:860px){display:none;}}nav{display:none;@media(min-width:860px){display:flex;}a{font-size:12px;color:white;padding:10px 16px;position:relative;text-decoration:none;&:after{content:\" \";background-color:#5292C1;display:block;position:absolute;width:1px;height:12px;margin:auto;left:0;top:0;bottom:0;}}}input{color:#ffffff;background:#5579A1;padding:10px 42px;border:0;background-image:url(", ");background-position:15px center;background-repeat:no-repeat;border-radius:1000px;font-size:12px;::placeholder{color:#ffffff;opacity:1;}}}"], function (_ref3) {
  var isMenuOpen = _ref3.isMenuOpen;
  return isMenuOpen ? 'all' : 'none';
}, function (_ref4) {
  var isMenuOpen = _ref4.isMenuOpen;
  return isMenuOpen ? '1' : '0';
}, function (_ref5) {
  var isMenuOpen = _ref5.isMenuOpen;
  return isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 48px))';
}, "".concat(BASE_URL, "/icons/search.svg"));
AlurakutMenu.Logo = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.img.withConfig({
  displayName: "AlurakutCommons__Logo",
  componentId: "sc-sd6wiu-1"
})(["background-color:#ffffff;padding:9px 14px;border-radius:1000px;height:34px;"]);

function AlurakutMenuProfileSidebar(_ref6) {
  var usuarioAleatorio = _ref6.usuarioAleatorio;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "alurakutMenuProfileSidebar",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "https://github.com/".concat(usuarioAleatorio, ".png"),
        style: {
          borderRadius: '8px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          className: "boxLink",
          href: "/user/".concat(usuarioAleatorio),
          children: ["@", usuarioAleatorio]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutProfileSidebarMenuDefault, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 5
  }, this);
}

_c3 = AlurakutMenuProfileSidebar;
function AlurakutProfileSidebarMenuDefault() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutProfileSidebarMenuDefault.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/user.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 13
        }, this), "Perfil"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/book.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 13
        }, this), "Recados"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/camera.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }, this), "Fotos"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/sun.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 13
        }, this), "Depoimentos"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/plus.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 13
        }, this), "GitHub Trends"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/logout",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "//icons/logout.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 13
        }, this), "Sair"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 7
  }, this);
}
_c4 = AlurakutProfileSidebarMenuDefault;
AlurakutProfileSidebarMenuDefault.Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "AlurakutCommons__Wrapper",
  componentId: "sc-sd6wiu-2"
})(["a{font-size:12px;color:#2E7BB4;margin-bottom:16px;display:flex;align-items:center;justify-content:flex-start;text-decoration:none;img{width:16px;height:16px;margin-right:5px;}}"]); // ================================================================================================================
// OrkutNostalgicIconSet
// ================================================================================================================

function OrkutNostalgicIconSet(props) {
  var _this2 = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(OrkutNostalgicIconSet.List, {
    children: [[{
      name: 'Recados',
      slug: 'recados',
      icon: 'book'
    }, {
      name: 'Fotos',
      slug: 'fotos',
      icon: 'camera'
    }, {
      name: 'Videos',
      slug: 'videos',
      icon: 'video-camera'
    }, {
      name: 'Fãs',
      slug: 'fas',
      icon: 'star'
    }, {
      name: 'Mensagens',
      slug: 'mensagens',
      icon: 'email'
    }].map(function (_ref7) {
      var name = _ref7.name,
          slug = _ref7.slug,
          icon = _ref7.icon;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          style: {
            gridArea: 'title'
          },
          className: "OrkutNostalgicIconSet__title",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 13
        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "OrkutNostalgicIconSet__number",
          style: {
            gridArea: 'number'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            className: "OrkutNostalgicIconSet__iconSample",
            src: "https://alurakut.vercel.app/icons/".concat(icon, ".svg")
          }, "orkut__icon_set__".concat(slug, "_img"), false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 15
          }, _this2), props[slug] ? props[slug] : 2]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 13
        }, _this2)]
      }, "orkut__icon_set__".concat(slug), true, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 11
      }, _this2);
    }), [{
      name: 'Confiável',
      slug: 'confiavel',
      icon: 'smile'
    }, {
      name: 'Legal',
      slug: 'legal',
      icon: 'cool'
    }, {
      name: 'Sexy',
      slug: 'sexy',
      icon: 'heart'
    }].map(function (_ref8) {
      var _jsxDEV2;

      var name = _ref8.name,
          slug = _ref8.slug,
          icon = _ref8.icon;
      var total = props[slug] ? props[slug] : 3;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "OrkutNostalgicIconSet__title",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 15
        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", (_jsxDEV2 = {
          className: "OrkutNostalgicIconSet__iconComplex"
        }, (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "OrkutNostalgicIconSet__number"), (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "style", {
          gridArea: 'number'
        }), (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "children", [0, 1, 2].map(function (_, index) {
          var isHeartActive = index <= total - 1;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            src: "https://alurakut.vercel.app/icons/".concat(icon, ".svg"),
            style: {
              marginRight: '2px',
              opacity: isHeartActive ? 1 : '0.5'
            }
          }, "orkut__icon_set__".concat(slug, "_img_").concat(index), false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 26
          }, _this2);
        })), _jsxDEV2), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 15
        }, _this2)]
      }, "orkut__icon_set__".concat(slug), true, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 13
      }, _this2);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 240,
    columnNumber: 7
  }, this);
}
_c5 = OrkutNostalgicIconSet;
OrkutNostalgicIconSet.List = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.ul.withConfig({
  displayName: "AlurakutCommons__List",
  componentId: "sc-sd6wiu-3"
})(["margin-top:32px;list-style:none;display:flex;justify-content:space-between;flex-wrap:wrap;li{font-size:12px;color:#5A5A5A;display:grid;grid-template-areas:\"title title\" \"number number\";&:not(:last-child){margin-right:5px;}.OrkutNostalgicIconSet__title{display:block;font-style:italic;}.OrkutNostalgicIconSet__number{min-width:15px;display:flex;align-items:center;justify-content:flex-start;.OrkutNostalgicIconSet__iconSample{margin-right:7px;}}}"]); // ================================================================================================================
// Login Page
// ================================================================================================================

var AlurakutLoginScreen = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)([":root{--backgroundPrimary:#D9E6F6;--backgroundSecondary:#F1F9FE;--backgroundTertiary:#FFFFFF;--backgroundQuarternary:#BBCDE8;--colorPrimary:#2E7BB4;--colorSecondary:#388BB0;--colorTertiary:#2F4A71;--colorQuarternary:#D81D99;--textPrimaryColor:#333333;--textSecondaryColor:#FFFFFF;--textTertiaryColor:#5A5A5A;--textQuarternaryColor:#C5C6CA;--commonRadius:8px;}.loginScreen{padding:16px;max-width:1110px;display:grid;--gap:12px;--gutter:16px;grid-gap:var(--gap);grid-template-areas:\"logoArea\" \"formArea\" \"footerArea\";@media(min-width:860px){grid-template-columns:2fr 1fr;grid-template-areas:\"logoArea formArea\" \"logoArea formArea\" \"footerArea footerArea\";}.logoArea{grid-area:logoArea;background-color:var(--backgroundTertiary);border-radius:var(--commonRadius);padding:var(--gutter);text-align:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center;min-height:263px;@media(min-width:860px){min-height:368px;}p{font-size:12px;line-height:1.2;&:not(:last-child){margin-bottom:12px;}strong{color:var(--colorQuarternary);}}img{max-height:45px;margin-bottom:36px;}}.formArea{grid-area:formArea;display:flex;flex-wrap:wrap;flex-direction:column;.box{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:var(--gutter);padding-left:50px;padding-right:50px;background-color:var(--backgroundSecondary);border-radius:var(--commonRadius);flex:1;&:not(:last-child){margin-bottom:var(--gap);}&:first-child{min-height:224px;@media(min-width:860px){min-height:282px;}}p{font-size:14px;}a{text-decoration:none;color:var(--colorPrimary);}input{width:100%;display:block;border:1px solid var(--textQuarternaryColor);padding:12px;background-color:var(--backgroundTertiary);border-radius:var(--commonRadius);margin-top:24px;margin-bottom:16px;}button{width:100%;display:block;border:0;padding:12px;border-radius:var(--commonRadius);background-color:var(--colorPrimary);color:var(--textSecondaryColor);}}}.footerArea{grid-area:footerArea;background-color:var(--backgroundQuarternary);border-radius:var(--commonRadius);padding:8px;p{font-size:12px;text-align:center;a{text-decoration:none;color:var(--colorPrimary);}}}}"]); // ================================================================================================================
// Reset Styles
// ================================================================================================================

var AlurakutStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)(["*::-webkit-scrollbar{width:8px;}*::-webkit-scrollbar-track{background:#f1f1f1;}*::-webkit-scrollbar-thumb{background:#888;border-radius:10px;}*::-webkit-scrollbar-thumb:hover{background:#555;}a,button{cursor:pointer;transition:.3s;outline:0;&:hover,&:focus{opacity:.8;}&:disabled{cursor:not-allowed;opacity:.5;}}input{transition:.3s;outline:0;&:disabled{cursor:not-allowed;opacity:.5;}&:hover,&:focus{box-shadow:0px 0px 5px #33333357;}}", ""], AlurakutLoginScreen);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Link");
$RefreshReg$(_c2, "AlurakutMenu");
$RefreshReg$(_c3, "AlurakutMenuProfileSidebar");
$RefreshReg$(_c4, "AlurakutProfileSidebarMenuDefault");
$RefreshReg$(_c5, "OrkutNostalgicIconSet");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9BbHVyYWt1dENvbW1vbnMuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJ2IiwiTGluayIsImhyZWYiLCJjaGlsZHJlbiIsInByb3BzIiwiQWx1cmFrdXRNZW51IiwidXN1YXJpb0FsZWF0b3JpbyIsIlJlYWN0IiwiaXNNZW51T3BlbiIsInNldE1lbnVTdGF0ZSIsImZsZXgiLCJuYW1lIiwic2x1ZyIsIm1hcCIsIm1lbnVJdGVtIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJXcmFwcGVyIiwic3R5bGVkIiwiTG9nbyIsIkFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyIiwiYm9yZGVyUmFkaXVzIiwiQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0IiwiT3JrdXROb3N0YWxnaWNJY29uU2V0IiwiaWNvbiIsImdyaWRBcmVhIiwidG90YWwiLCJfIiwiaW5kZXgiLCJpc0hlYXJ0QWN0aXZlIiwibWFyZ2luUmlnaHQiLCJvcGFjaXR5IiwiTGlzdCIsIkFsdXJha3V0TG9naW5TY3JlZW4iLCJjc3MiLCJBbHVyYWt1dFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLDZCQUFqQjtBQUNBLElBQU1DLENBQUMsR0FBRyxHQUFWOztBQUdBLFNBQVNDLElBQVQsT0FBNEM7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVRDLEtBQVM7O0FBQzFDLHNCQUNFLDhEQUFDLGtEQUFEO0FBQVUsUUFBSSxFQUFFRixJQUFoQjtBQUFzQixZQUFRLE1BQTlCO0FBQUEsMkJBQ0UsbUdBQU9FLEtBQVA7QUFBQSxnQkFDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QsQyxD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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUNEO01BMUNlVSxxQjtBQTJDaEJBLHFCQUFxQixDQUFDUyxJQUF0QixHQUE2QmQsb0VBQTdCO0FBQUE7QUFBQTtBQUFBLDBjLENBaUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNZSxtQkFBbUIsR0FBR0Msc0RBQUgsOHBFQUF6QixDLENBdUlBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxjQUFjLEdBQUdELHNEQUFILCtiQXdDdkJELG1CQXhDdUIsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzEwNDQ3MzhiNGQ5YjMxYWNhN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly9hbHVyYWt1dC52ZXJjZWwuYXBwLyc7XHJcbmNvbnN0IHYgPSAnMSc7XHJcblxyXG5cclxuZnVuY3Rpb24gTGluayh7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0TGluayBocmVmPXtocmVmfSBwYXNzSHJlZj5cclxuICAgICAgPGEgey4uLnByb3BzfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTmV4dExpbms+XHJcbiAgKVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE1lbnVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gQWx1cmFrdXRNZW51KHsgdXN1YXJpb0FsZWF0b3JpbyB9KSB7XHJcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldE1lbnVTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbHVyYWt1dE1lbnUuV3JhcHBlciBpc01lbnVPcGVuPXtpc01lbnVPcGVufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8QWx1cmFrdXRNZW51LkxvZ28gc3JjPXtgJHtCQVNFX1VSTH0vbG9nby5zdmdgfSAvPlxyXG5cclxuICAgICAgICA8bmF2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XHJcbiAgICAgICAgICB7W3sgbmFtZTogJ0luaWNpbycsIHNsdWc6ICcvJ30sIHtuYW1lOiAnQW1pZ29zJywgc2x1ZzogJy9hbWlnb3MnfSwge25hbWU6ICdDb211bmlkYWRlcycsIHNsdWc6ICcvY29tdW5pZGFkZXMnfV0ubWFwKChtZW51SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2BrZXlfXyR7bWVudUl0ZW0ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpfWB9IGhyZWY9e2Ake21lbnVJdGVtLnNsdWcudG9Mb2NhbGVMb3dlckNhc2UoKX1gfT5cclxuICAgICAgICAgICAgICB7bWVudUl0ZW0ubmFtZX1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8YSBocmVmPXtgL2xvZ291dGB9PlxyXG4gICAgICAgICAgICBTYWlyXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJQZXNxdWlzYXIgbm8gT3JrdXRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TWVudVN0YXRlKCFpc01lbnVPcGVuKX0+XHJcbiAgICAgICAgICB7aXNNZW51T3BlbiAmJiA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL21lbnUtb3Blbi5zdmc/dj0ke3Z9YH0gLz59XHJcbiAgICAgICAgICB7IWlzTWVudU9wZW4gJiYgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9tZW51LWNsb3NlZC5zdmc/dj0ke3Z9YH0gLz59XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QWx1cmFrdXRNZW51UHJvZmlsZVNpZGViYXIgdXN1YXJpb0FsZWF0b3Jpbz17dXN1YXJpb0FsZWF0b3Jpb30gLz5cclxuICAgIDwvQWx1cmFrdXRNZW51LldyYXBwZXI+XHJcbiAgKVxyXG59XHJcbkFsdXJha3V0TWVudS5XcmFwcGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4QkM1O1xyXG4gIC5hbHVyYWt1dE1lbnVQcm9maWxlU2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBhZGRpbmc6IDQ2cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDQ4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICBwb2ludGVyLWV2ZW50czogJHsoeyBpc01lbnVPcGVuIH0pID0+IGlzTWVudU9wZW4gPyAnYWxsJyA6ICdub25lJ307XHJcbiAgICBvcGFjaXR5OiAkeyh7IGlzTWVudU9wZW4gfSkgPT4gaXNNZW51T3BlbiA/ICcxJyA6ICcwJ307XHJcbiAgICB0cmFuc2Zvcm06ICR7KHsgaXNNZW51T3BlbiB9KSA9PiBpc01lbnVPcGVuID8gJ3RyYW5zbGF0ZVkoMCknIDogJ3RyYW5zbGF0ZVkoY2FsYygtMTAwJSAtIDQ4cHgpKSd9O1xyXG4gICAgQG1lZGlhKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgID4gZGl2IHtcclxuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5ib3hMaW5rIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogIzJFN0JCNDtcclxuICAgICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuICAgIGhyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjRUNGMkZBO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDhCQzU7XHJcbiAgICBwYWRkaW5nOiA3cHggMTZweDtcclxuICAgIG1heC13aWR0aDogMTExMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMTtcclxuICAgIEBtZWRpYShtaW4td2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBAbWVkaWEobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIEBtZWRpYShtaW4td2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI5MkMxO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0IHtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1NTc5QTE7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggNDJweDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtgJHtCQVNFX1VSTH0vaWNvbnMvc2VhcmNoLnN2Z2B9KTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gIH1cclxuYDtcclxuQWx1cmFrdXRNZW51LkxvZ28gPSBzdHlsZWQuaW1nYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogOXB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIEFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyKHsgdXN1YXJpb0FsZWF0b3JpbyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWx1cmFrdXRNZW51UHJvZmlsZVNpZGViYXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzdWFyaW9BbGVhdG9yaW99LnBuZ2B9IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzhweCcgfX0gLz5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJveExpbmtcIiBocmVmPXtgL3VzZXIvJHt1c3VhcmlvQWxlYXRvcmlvfWB9PlxyXG4gICAgICAgICAgICBAe3VzdWFyaW9BbGVhdG9yaW99XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICA8QWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0LldyYXBwZXI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvdXNlci5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgIFBlcmZpbFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL2Jvb2suc3ZnYH0gLz5cclxuICAgICAgICAgICAgICBSZWNhZG9zXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvY2FtZXJhLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgRm90b3NcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9zdW4uc3ZnYH0gLz5cclxuICAgICAgICAgICAgICBEZXBvaW1lbnRvc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvcGx1cy5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgIEdpdEh1YiBUcmVuZHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9sb2dvdXRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS8vaWNvbnMvbG9nb3V0LnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgU2FpclxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0LldyYXBwZXI+XHJcbiAgICApXHJcbiAgfVxyXG4gIEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdC5XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjMkU3QkI0O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYDtcclxuICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gT3JrdXROb3N0YWxnaWNJY29uU2V0XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBPcmt1dE5vc3RhbGdpY0ljb25TZXQocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxPcmt1dE5vc3RhbGdpY0ljb25TZXQuTGlzdD5cclxuICAgICAgICB7W1xyXG4gICAgICAgICAgeyBuYW1lOiAnUmVjYWRvcycsIHNsdWc6ICdyZWNhZG9zJywgaWNvbjogJ2Jvb2snIH0sXHJcbiAgICAgICAgICB7IG5hbWU6ICdGb3RvcycsIHNsdWc6ICdmb3RvcycsIGljb246ICdjYW1lcmEnIH0sXHJcbiAgICAgICAgICB7IG5hbWU6ICdWaWRlb3MnLCBzbHVnOiAndmlkZW9zJywgaWNvbjogJ3ZpZGVvLWNhbWVyYScgfSxcclxuICAgICAgICAgIHsgbmFtZTogJ0bDo3MnLCBzbHVnOiAnZmFzJywgaWNvbjogJ3N0YXInIH0sXHJcbiAgICAgICAgICB7IG5hbWU6ICdNZW5zYWdlbnMnLCBzbHVnOiAnbWVuc2FnZW5zJywgaWNvbjogJ2VtYWlsJyB9LFxyXG4gICAgICAgIF0ubWFwKCh7IG5hbWUsIHNsdWcsIGljb24gfSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17YG9ya3V0X19pY29uX3NldF9fJHtzbHVnfWB9PlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBncmlkQXJlYTogJ3RpdGxlJyB9fSBjbGFzc05hbWU9XCJPcmt1dE5vc3RhbGdpY0ljb25TZXRfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiT3JrdXROb3N0YWxnaWNJY29uU2V0X19udW1iZXJcIiBzdHlsZT17eyBncmlkQXJlYTogJ251bWJlcicgfX0+XHJcbiAgICAgICAgICAgICAgPGltZyBrZXk9e2Bvcmt1dF9faWNvbl9zZXRfXyR7c2x1Z31faW1nYH0gY2xhc3NOYW1lPVwiT3JrdXROb3N0YWxnaWNJY29uU2V0X19pY29uU2FtcGxlXCIgc3JjPXtgaHR0cHM6Ly9hbHVyYWt1dC52ZXJjZWwuYXBwL2ljb25zLyR7aWNvbn0uc3ZnYH0gLz5cclxuICAgICAgICAgICAgICB7cHJvcHNbc2x1Z10gPyBwcm9wc1tzbHVnXSA6IDJ9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge1tcclxuICAgICAgICAgIHsgbmFtZTogJ0NvbmZpw6F2ZWwnLCBzbHVnOiAnY29uZmlhdmVsJywgaWNvbjogJ3NtaWxlJyB9LFxyXG4gICAgICAgICAgeyBuYW1lOiAnTGVnYWwnLCBzbHVnOiAnbGVnYWwnLCBpY29uOiAnY29vbCcgfSxcclxuICAgICAgICAgIHsgbmFtZTogJ1NleHknLCBzbHVnOiAnc2V4eScsIGljb246ICdoZWFydCcgfSxcclxuICAgICAgICBdLm1hcCgoeyBuYW1lLCBzbHVnLCBpY29uIH0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRvdGFsID0gcHJvcHNbc2x1Z10gPyBwcm9wc1tzbHVnXSA6IDM7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtgb3JrdXRfX2ljb25fc2V0X18ke3NsdWd9YH0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiT3JrdXROb3N0YWxnaWNJY29uU2V0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9faWNvbkNvbXBsZXhcIiBjbGFzc05hbWU9XCJPcmt1dE5vc3RhbGdpY0ljb25TZXRfX251bWJlclwiIHN0eWxlPXt7IGdyaWRBcmVhOiAnbnVtYmVyJyB9fT5cclxuICAgICAgICAgICAgICAgIHtbMCwgMSwgMl0ubWFwKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBpc0hlYXJ0QWN0aXZlID0gaW5kZXggPD0gKHRvdGFsIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGtleT17YG9ya3V0X19pY29uX3NldF9fJHtzbHVnfV9pbWdfJHtpbmRleH1gfSBzcmM9e2BodHRwczovL2FsdXJha3V0LnZlcmNlbC5hcHAvaWNvbnMvJHtpY29ufS5zdmdgfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzJweCcsIG9wYWNpdHk6IGlzSGVhcnRBY3RpdmUgPyAxIDogJzAuNScgfX0gLz5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvT3JrdXROb3N0YWxnaWNJY29uU2V0Lkxpc3Q+XHJcbiAgICApXHJcbiAgfVxyXG4gIE9ya3V0Tm9zdGFsZ2ljSWNvblNldC5MaXN0ID0gc3R5bGVkLnVsYFxyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbGkge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjNUE1QTVBO1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgIFwidGl0bGUgdGl0bGVcIlxyXG4gICAgICAgIFwibnVtYmVyIG51bWJlclwiOyBcclxuICAgICAgXHJcbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9fdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgXHJcbiAgICAgIH1cclxuICAgICAgLk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9fbnVtYmVyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAuT3JrdXROb3N0YWxnaWNJY29uU2V0X19pY29uU2FtcGxlIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGA7XHJcbiAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIExvZ2luIFBhZ2VcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgY29uc3QgQWx1cmFrdXRMb2dpblNjcmVlbiA9IGNzc2BcclxuICAgIDpyb290IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kUHJpbWFyeTogI0Q5RTZGNjtcclxuICAgICAgLS1iYWNrZ3JvdW5kU2Vjb25kYXJ5OiAjRjFGOUZFO1xyXG4gICAgICAtLWJhY2tncm91bmRUZXJ0aWFyeTogI0ZGRkZGRjtcclxuICAgICAgLS1iYWNrZ3JvdW5kUXVhcnRlcm5hcnk6ICNCQkNERTg7XHJcbiAgICAgIC0tY29sb3JQcmltYXJ5OiAjMkU3QkI0O1xyXG4gICAgICAtLWNvbG9yU2Vjb25kYXJ5OiAjMzg4QkIwO1xyXG4gICAgICAtLWNvbG9yVGVydGlhcnk6ICMyRjRBNzE7XHJcbiAgICAgIC0tY29sb3JRdWFydGVybmFyeTogI0Q4MUQ5OTtcclxuICAgICAgLS10ZXh0UHJpbWFyeUNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAtLXRleHRTZWNvbmRhcnlDb2xvcjogI0ZGRkZGRjtcclxuICAgICAgLS10ZXh0VGVydGlhcnlDb2xvcjogIzVBNUE1QTtcclxuICAgICAgLS10ZXh0UXVhcnRlcm5hcnlDb2xvcjogI0M1QzZDQTtcclxuICAgICAgLS1jb21tb25SYWRpdXM6IDhweDtcclxuICAgIH1cclxuICAgIC5sb2dpblNjcmVlbiB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIG1heC13aWR0aDogMTExMHB4O1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAtLWdhcDogMTJweDtcclxuICAgICAgLS1ndXR0ZXI6IDE2cHg7XHJcbiAgICAgIGdyaWQtZ2FwOiB2YXIoLS1nYXApO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICBcImxvZ29BcmVhXCJcclxuICAgICAgICBcImZvcm1BcmVhXCJcclxuICAgICAgICBcImZvb3RlckFyZWFcIjtcclxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICAgICAgICAgICAgICBcImxvZ29BcmVhIGZvcm1BcmVhXCJcclxuICAgICAgICAgICAgICAgIFwibG9nb0FyZWEgZm9ybUFyZWFcIlxyXG4gICAgICAgICAgICAgICAgXCJmb290ZXJBcmVhIGZvb3RlckFyZWFcIjtcclxuICAgICAgfVxyXG4gICAgICAubG9nb0FyZWEge1xyXG4gICAgICAgIGdyaWQtYXJlYTogbG9nb0FyZWE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFRlcnRpYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb21tb25SYWRpdXMpO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWd1dHRlcik7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyNjNweDtcclxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMzY4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JRdWFydGVybmFyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm1BcmVhIHtcclxuICAgICAgICBncmlkLWFyZWE6IGZvcm1BcmVhO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWd1dHRlcik7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFNlY29uZGFyeSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb21tb25SYWRpdXMpO1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWdhcCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjI0cHg7XHJcbiAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMjgycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0UXVhcnRlcm5hcnlDb2xvcik7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRUZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbW1vblJhZGl1cyk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tbW9uUmFkaXVzKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRTZWNvbmRhcnlDb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXJBcmVhIHtcclxuICAgICAgICBncmlkLWFyZWE6IGZvb3RlckFyZWE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFF1YXJ0ZXJuYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb21tb25SYWRpdXMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvclByaW1hcnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGA7XHJcbiAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFJlc2V0IFN0eWxlc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBleHBvcnQgY29uc3QgQWx1cmFrdXRTdHlsZXMgPSBjc3NgXHJcbiAgICAqOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICB9XHJcbiAgICAqOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7IFxyXG4gICAgfVxyXG4gICAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjODg4OyBcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzU1NTsgXHJcbiAgICB9XHJcbiAgICBhLFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICY6aG92ZXIsXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICB9XHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0IHtcclxuICAgICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIsXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICMzMzMzMzM1NztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtBbHVyYWt1dExvZ2luU2NyZWVufWA7Il0sInNvdXJjZVJvb3QiOiIifQ==