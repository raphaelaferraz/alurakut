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

  var usua = _ref2.usua;

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
      githubUser: githubUser
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9BbHVyYWt1dENvbW1vbnMuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJ2IiwiTGluayIsImhyZWYiLCJjaGlsZHJlbiIsInByb3BzIiwiQWx1cmFrdXRNZW51IiwidXN1YSIsIlJlYWN0IiwiaXNNZW51T3BlbiIsInNldE1lbnVTdGF0ZSIsImZsZXgiLCJuYW1lIiwic2x1ZyIsIm1hcCIsIm1lbnVJdGVtIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJnaXRodWJVc2VyIiwiV3JhcHBlciIsInN0eWxlZCIsIkxvZ28iLCJBbHVyYWt1dE1lbnVQcm9maWxlU2lkZWJhciIsInVzdWFyaW9BbGVhdG9yaW8iLCJib3JkZXJSYWRpdXMiLCJBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQiLCJPcmt1dE5vc3RhbGdpY0ljb25TZXQiLCJpY29uIiwiZ3JpZEFyZWEiLCJ0b3RhbCIsIl8iLCJpbmRleCIsImlzSGVhcnRBY3RpdmUiLCJtYXJnaW5SaWdodCIsIm9wYWNpdHkiLCJMaXN0IiwiQWx1cmFrdXRMb2dpblNjcmVlbiIsImNzcyIsIkFsdXJha3V0U3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsNkJBQWpCO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHLEdBQVY7O0FBR0EsU0FBU0MsSUFBVCxPQUE0QztBQUFBLE1BQTVCQyxJQUE0QixRQUE1QkEsSUFBNEI7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBVEMsS0FBUzs7QUFDMUMsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBVSxRQUFJLEVBQUVGLElBQWhCO0FBQXNCLFlBQVEsTUFBOUI7QUFBQSwyQkFDRSxtR0FBT0UsS0FBUDtBQUFBLGdCQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFB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RCxLQW5CQSxDQWxCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRDtNQTFDZVkscUI7QUEyQ2hCQSxxQkFBcUIsQ0FBQ1MsSUFBdEIsR0FBNkJmLG9FQUE3QjtBQUFBO0FBQUE7QUFBQSwwYyxDQWlDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTWdCLG1CQUFtQixHQUFHQyxzREFBSCw4cEVBQXpCLEMsQ0F1SUE7QUFDQTtBQUNBOztBQUNPLElBQU1DLGNBQWMsR0FBR0Qsc0RBQUgsK2JBd0N2QkQsbUJBeEN1QixDQUFwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOWEzNzgyNDg5ZWQxMDE3MTM5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2FsdXJha3V0LnZlcmNlbC5hcHAvJztcclxuY29uc3QgdiA9ICcxJztcclxuXHJcblxyXG5mdW5jdGlvbiBMaW5rKHsgaHJlZiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmPlxyXG4gICAgICA8YSB7Li4ucHJvcHN9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9hPlxyXG4gICAgPC9OZXh0TGluaz5cclxuICApXHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTWVudVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBBbHVyYWt1dE1lbnUoeyB1c3VhIH0pIHtcclxuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0TWVudVN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsdXJha3V0TWVudS5XcmFwcGVyIGlzTWVudU9wZW49e2lzTWVudU9wZW59PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxBbHVyYWt1dE1lbnUuTG9nbyBzcmM9e2Ake0JBU0VfVVJMfS9sb2dvLnN2Z2B9IC8+XHJcblxyXG4gICAgICAgIDxuYXYgc3R5bGU9e3sgZmxleDogMSB9fT5cclxuICAgICAgICAgIHtbeyBuYW1lOiAnSW5pY2lvJywgc2x1ZzogJy8nfSwge25hbWU6ICdBbWlnb3MnLCBzbHVnOiAnL2FtaWdvcyd9LCB7bmFtZTogJ0NvbXVuaWRhZGVzJywgc2x1ZzogJy9jb211bmlkYWRlcyd9XS5tYXAoKG1lbnVJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17YGtleV9fJHttZW51SXRlbS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCl9YH0gaHJlZj17YCR7bWVudUl0ZW0uc2x1Zy50b0xvY2FsZUxvd2VyQ2FzZSgpfWB9PlxyXG4gICAgICAgICAgICAgIHttZW51SXRlbS5uYW1lfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxhIGhyZWY9e2AvbG9nb3V0YH0+XHJcbiAgICAgICAgICAgIFNhaXJcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlBlc3F1aXNhciBubyBPcmt1dFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRNZW51U3RhdGUoIWlzTWVudU9wZW4pfT5cclxuICAgICAgICAgIHtpc01lbnVPcGVuICYmIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvbWVudS1vcGVuLnN2Zz92PSR7dn1gfSAvPn1cclxuICAgICAgICAgIHshaXNNZW51T3BlbiAmJiA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL21lbnUtY2xvc2VkLnN2Zz92PSR7dn1gfSAvPn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxBbHVyYWt1dE1lbnVQcm9maWxlU2lkZWJhciBnaXRodWJVc2VyPXtnaXRodWJVc2VyfSAvPlxyXG4gICAgPC9BbHVyYWt1dE1lbnUuV3JhcHBlcj5cclxuICApXHJcbn1cclxuQWx1cmFrdXRNZW51LldyYXBwZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDhCQzU7XHJcbiAgLmFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcGFkZGluZzogNDZweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNDhweDtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIHBvaW50ZXItZXZlbnRzOiAkeyh7IGlzTWVudU9wZW4gfSkgPT4gaXNNZW51T3BlbiA/ICdhbGwnIDogJ25vbmUnfTtcclxuICAgIG9wYWNpdHk6ICR7KHsgaXNNZW51T3BlbiB9KSA9PiBpc01lbnVPcGVuID8gJzEnIDogJzAnfTtcclxuICAgIHRyYW5zZm9ybTogJHsoeyBpc01lbnVPcGVuIH0pID0+IGlzTWVudU9wZW4gPyAndHJhbnNsYXRlWSgwKScgOiAndHJhbnNsYXRlWShjYWxjKC0xMDAlIC0gNDhweCkpJ307XHJcbiAgICBAbWVkaWEobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgPiBkaXYge1xyXG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmJveExpbmsge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjMkU3QkI0O1xyXG4gICAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG4gICAgaHIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNFQ0YyRkE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwOEJDNTtcclxuICAgIHBhZGRpbmc6IDdweCAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMTEwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTAxO1xyXG4gICAgQG1lZGlhKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIEBtZWRpYShtaW4td2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmF2IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MjkyQzE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZDogIzU1NzlBMTtcclxuICAgICAgcGFkZGluZzogMTBweCA0MnB4O1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2Ake0JBU0VfVVJMfS9pY29ucy9zZWFyY2guc3ZnYH0pO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNXB4IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgfVxyXG5gO1xyXG5BbHVyYWt1dE1lbnUuTG9nbyA9IHN0eWxlZC5pbWdgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiA5cHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gQWx1cmFrdXRNZW51UHJvZmlsZVNpZGViYXIoeyB1c3VhcmlvQWxlYXRvcmlvIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbHVyYWt1dE1lbnVQcm9maWxlU2lkZWJhclwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXN1YXJpb0FsZWF0b3Jpb30ucG5nYH0gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnOHB4JyB9fSAvPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYm94TGlua1wiIGhyZWY9e2AvdXNlci8ke3VzdWFyaW9BbGVhdG9yaW99YH0+XHJcbiAgICAgICAgICAgIEB7dXN1YXJpb0FsZWF0b3Jpb31cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgIDxBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQuV3JhcHBlcj5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy91c2VyLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgUGVyZmlsXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvYm9vay5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgIFJlY2Fkb3NcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9jYW1lcmEuc3ZnYH0gLz5cclxuICAgICAgICAgICAgICBGb3Rvc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL3N1bi5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgIERlcG9pbWVudG9zXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9wbHVzLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgR2l0SHViIFRyZW5kc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL2xvZ291dFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9Ly9pY29ucy9sb2dvdXQuc3ZnYH0gLz5cclxuICAgICAgICAgICAgICBTYWlyXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9BbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQuV3JhcHBlcj5cclxuICAgIClcclxuICB9XHJcbiAgQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0LldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICMyRTdCQjQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgO1xyXG4gIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBPcmt1dE5vc3RhbGdpY0ljb25TZXRcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIE9ya3V0Tm9zdGFsZ2ljSWNvblNldChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE9ya3V0Tm9zdGFsZ2ljSWNvblNldC5MaXN0PlxyXG4gICAgICAgIHtbXHJcbiAgICAgICAgICB7IG5hbWU6ICdSZWNhZG9zJywgc2x1ZzogJ3JlY2Fkb3MnLCBpY29uOiAnYm9vaycgfSxcclxuICAgICAgICAgIHsgbmFtZTogJ0ZvdG9zJywgc2x1ZzogJ2ZvdG9zJywgaWNvbjogJ2NhbWVyYScgfSxcclxuICAgICAgICAgIHsgbmFtZTogJ1ZpZGVvcycsIHNsdWc6ICd2aWRlb3MnLCBpY29uOiAndmlkZW8tY2FtZXJhJyB9LFxyXG4gICAgICAgICAgeyBuYW1lOiAnRsOjcycsIHNsdWc6ICdmYXMnLCBpY29uOiAnc3RhcicgfSxcclxuICAgICAgICAgIHsgbmFtZTogJ01lbnNhZ2VucycsIHNsdWc6ICdtZW5zYWdlbnMnLCBpY29uOiAnZW1haWwnIH0sXHJcbiAgICAgICAgXS5tYXAoKHsgbmFtZSwgc2x1ZywgaWNvbiB9KSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtgb3JrdXRfX2ljb25fc2V0X18ke3NsdWd9YH0+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGdyaWRBcmVhOiAndGl0bGUnIH19IGNsYXNzTmFtZT1cIk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJPcmt1dE5vc3RhbGdpY0ljb25TZXRfX251bWJlclwiIHN0eWxlPXt7IGdyaWRBcmVhOiAnbnVtYmVyJyB9fT5cclxuICAgICAgICAgICAgICA8aW1nIGtleT17YG9ya3V0X19pY29uX3NldF9fJHtzbHVnfV9pbWdgfSBjbGFzc05hbWU9XCJPcmt1dE5vc3RhbGdpY0ljb25TZXRfX2ljb25TYW1wbGVcIiBzcmM9e2BodHRwczovL2FsdXJha3V0LnZlcmNlbC5hcHAvaWNvbnMvJHtpY29ufS5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgIHtwcm9wc1tzbHVnXSA/IHByb3BzW3NsdWddIDogMn1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICB7W1xyXG4gICAgICAgICAgeyBuYW1lOiAnQ29uZmnDoXZlbCcsIHNsdWc6ICdjb25maWF2ZWwnLCBpY29uOiAnc21pbGUnIH0sXHJcbiAgICAgICAgICB7IG5hbWU6ICdMZWdhbCcsIHNsdWc6ICdsZWdhbCcsIGljb246ICdjb29sJyB9LFxyXG4gICAgICAgICAgeyBuYW1lOiAnU2V4eScsIHNsdWc6ICdzZXh5JywgaWNvbjogJ2hlYXJ0JyB9LFxyXG4gICAgICAgIF0ubWFwKCh7IG5hbWUsIHNsdWcsIGljb24gfSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG90YWwgPSBwcm9wc1tzbHVnXSA/IHByb3BzW3NsdWddIDogMztcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2Bvcmt1dF9faWNvbl9zZXRfXyR7c2x1Z31gfT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJPcmt1dE5vc3RhbGdpY0ljb25TZXRfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiT3JrdXROb3N0YWxnaWNJY29uU2V0X19pY29uQ29tcGxleFwiIGNsYXNzTmFtZT1cIk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9fbnVtYmVyXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICdudW1iZXInIH19PlxyXG4gICAgICAgICAgICAgICAge1swLCAxLCAyXS5tYXAoKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSGVhcnRBY3RpdmUgPSBpbmRleCA8PSAodG90YWwgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcga2V5PXtgb3JrdXRfX2ljb25fc2V0X18ke3NsdWd9X2ltZ18ke2luZGV4fWB9IHNyYz17YGh0dHBzOi8vYWx1cmFrdXQudmVyY2VsLmFwcC9pY29ucy8ke2ljb259LnN2Z2B9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMnB4Jywgb3BhY2l0eTogaXNIZWFydEFjdGl2ZSA/IDEgOiAnMC41JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9Pcmt1dE5vc3RhbGdpY0ljb25TZXQuTGlzdD5cclxuICAgIClcclxuICB9XHJcbiAgT3JrdXROb3N0YWxnaWNJY29uU2V0Lkxpc3QgPSBzdHlsZWQudWxgXHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBsaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM1QTVBNUE7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgXCJ0aXRsZSB0aXRsZVwiXHJcbiAgICAgICAgXCJudW1iZXIgbnVtYmVyXCI7IFxyXG4gICAgICBcclxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAuT3JrdXROb3N0YWxnaWNJY29uU2V0X190aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljOyBcclxuICAgICAgfVxyXG4gICAgICAuT3JrdXROb3N0YWxnaWNJY29uU2V0X19udW1iZXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIC5Pcmt1dE5vc3RhbGdpY0ljb25TZXRfX2ljb25TYW1wbGUge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYDtcclxuICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gTG9naW4gUGFnZVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBjb25zdCBBbHVyYWt1dExvZ2luU2NyZWVuID0gY3NzYFxyXG4gICAgOnJvb3Qge1xyXG4gICAgICAtLWJhY2tncm91bmRQcmltYXJ5OiAjRDlFNkY2O1xyXG4gICAgICAtLWJhY2tncm91bmRTZWNvbmRhcnk6ICNGMUY5RkU7XHJcbiAgICAgIC0tYmFja2dyb3VuZFRlcnRpYXJ5OiAjRkZGRkZGO1xyXG4gICAgICAtLWJhY2tncm91bmRRdWFydGVybmFyeTogI0JCQ0RFODtcclxuICAgICAgLS1jb2xvclByaW1hcnk6ICMyRTdCQjQ7XHJcbiAgICAgIC0tY29sb3JTZWNvbmRhcnk6ICMzODhCQjA7XHJcbiAgICAgIC0tY29sb3JUZXJ0aWFyeTogIzJGNEE3MTtcclxuICAgICAgLS1jb2xvclF1YXJ0ZXJuYXJ5OiAjRDgxRDk5O1xyXG4gICAgICAtLXRleHRQcmltYXJ5Q29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIC0tdGV4dFNlY29uZGFyeUNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAtLXRleHRUZXJ0aWFyeUNvbG9yOiAjNUE1QTVBO1xyXG4gICAgICAtLXRleHRRdWFydGVybmFyeUNvbG9yOiAjQzVDNkNBO1xyXG4gICAgICAtLWNvbW1vblJhZGl1czogOHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luU2NyZWVuIHtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMTEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIC0tZ2FwOiAxMnB4O1xyXG4gICAgICAtLWd1dHRlcjogMTZweDtcclxuICAgICAgZ3JpZC1nYXA6IHZhcigtLWdhcCk7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgICAgIFwibG9nb0FyZWFcIlxyXG4gICAgICAgIFwiZm9ybUFyZWFcIlxyXG4gICAgICAgIFwiZm9vdGVyQXJlYVwiO1xyXG4gICAgICBAbWVkaWEobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICAgICAgICAgIFwibG9nb0FyZWEgZm9ybUFyZWFcIlxyXG4gICAgICAgICAgICAgICAgXCJsb2dvQXJlYSBmb3JtQXJlYVwiXHJcbiAgICAgICAgICAgICAgICBcImZvb3RlckFyZWEgZm9vdGVyQXJlYVwiO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2dvQXJlYSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBsb2dvQXJlYTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kVGVydGlhcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbW1vblJhZGl1cyk7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tZ3V0dGVyKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI2M3B4O1xyXG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAzNjhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvclF1YXJ0ZXJuYXJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZm9ybUFyZWEge1xyXG4gICAgICAgIGdyaWQtYXJlYTogZm9ybUFyZWE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogdmFyKC0tZ3V0dGVyKTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kU2Vjb25kYXJ5KTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbW1vblJhZGl1cyk7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZ2FwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMjRweDtcclxuICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyODJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvclByaW1hcnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHRRdWFydGVybmFyeUNvbG9yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tbW9uUmFkaXVzKTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb21tb25SYWRpdXMpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvclByaW1hcnkpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dFNlY29uZGFyeUNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlckFyZWEge1xyXG4gICAgICAgIGdyaWQtYXJlYTogZm9vdGVyQXJlYTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kUXVhcnRlcm5hcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbW1vblJhZGl1cyk7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yUHJpbWFyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYDtcclxuICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gUmVzZXQgU3R5bGVzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGV4cG9ydCBjb25zdCBBbHVyYWt1dFN0eWxlcyA9IGNzc2BcclxuICAgICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgd2lkdGg6IDhweDtcclxuICAgIH1cclxuICAgICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTsgXHJcbiAgICB9XHJcbiAgICAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM4ODg7IFxyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNTU1OyBcclxuICAgIH1cclxuICAgIGEsXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgJjpob3ZlcixcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3BhY2l0eTogLjg7XHJcbiAgICAgIH1cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcixcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzMzMzMzMzU3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke0FsdXJha3V0TG9naW5TY3JlZW59YDsiXSwic291cmNlUm9vdCI6IiJ9