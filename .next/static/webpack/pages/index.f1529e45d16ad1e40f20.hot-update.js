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
      usuarioAleatorio: githubUser
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9BbHVyYWt1dENvbW1vbnMuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJ2IiwiTGluayIsImhyZWYiLCJjaGlsZHJlbiIsInByb3BzIiwiQWx1cmFrdXRNZW51IiwidXN1YXJpb0FsZWF0b3JpbyIsIlJlYWN0IiwiaXNNZW51T3BlbiIsInNldE1lbnVTdGF0ZSIsImZsZXgiLCJuYW1lIiwic2x1ZyIsIm1hcCIsIm1lbnVJdGVtIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJnaXRodWJVc2VyIiwiV3JhcHBlciIsInN0eWxlZCIsIkxvZ28iLCJBbHVyYWt1dE1lbnVQcm9maWxlU2lkZWJhciIsImJvcmRlclJhZGl1cyIsIkFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdCIsIk9ya3V0Tm9zdGFsZ2ljSWNvblNldCIsImljb24iLCJncmlkQXJlYSIsInRvdGFsIiwiXyIsImluZGV4IiwiaXNIZWFydEFjdGl2ZSIsIm1hcmdpblJpZ2h0Iiwib3BhY2l0eSIsIkxpc3QiLCJBbHVyYWt1dExvZ2luU2NyZWVuIiwiY3NzIiwiQWx1cmFrdXRTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyw2QkFBakI7QUFDQSxJQUFNQyxDQUFDLEdBQUcsR0FBVjs7QUFHQSxTQUFTQyxJQUFULE9BQTRDO0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFUQyxLQUFTOztBQUMxQyxzQkFDRSw4REFBQyxrREFBRDtBQUFVLFFBQUksRUFBRUYsSUFBaEI7QUFBc0IsWUFBUSxNQUE5QjtBQUFBLDJCQUNFLG1HQUFPRSxLQUFQO0FBQUEsZ0JBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9ELEMsQ0FFRDtBQUNBO0FBQ0E7OztLQVpTRixJO0FBYUYsU0FBU0ksWUFBVCxRQUE0QztBQUFBOztBQUFBOztBQUFBLE1BQXBCQyxnQkFBb0IsU0FBcEJBLGdCQUFvQjs7QUFBQSx3QkFDZEMscURBQUEsQ0FBZSxLQUFmLENBRGM7QUFBQTtBQUFBLE1BQzFDQyxVQUQwQztBQUFBLE1BQzlCQyxZQUQ4Qjs7QUFFakQsc0JBQ0UsOERBQUMsWUFBRCxDQUFjLE9BQWQ7QUFBc0IsY0FBVSxFQUFFRCxVQUFsQztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDRSw4REFBQyxZQUFELENBQWMsSUFBZDtBQUFtQixXQUFHLFlBQUtULFFBQUw7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBSyxhQUFLLEVBQUU7QUFBRVcsY0FBSSxFQUFFO0FBQVIsU0FBWjtBQUFBLGtCQUNHLENBQUM7QUFBRUMsY0FBSSxFQUFFLFFBQVI7QUFBa0JDLGNBQUksRUFBRTtBQUF4QixTQUFELEVBQStCO0FBQUNELGNBQUksRUFBRSxRQUFQO0FBQWlCQyxjQUFJLEVBQUU7QUFBdkIsU0FBL0IsRUFBa0U7QUFBQ0QsY0FBSSxFQUFFLGFBQVA7QUFBc0JDLGNBQUksRUFBRTtBQUE1QixTQUFsRSxFQUErR0MsR0FBL0csQ0FBbUgsVUFBQ0MsUUFBRDtBQUFBLDhCQUNsSCw4REFBQyxJQUFEO0FBQXdELGdCQUFJLFlBQUtBLFFBQVEsQ0FBQ0YsSUFBVCxDQUFjRyxpQkFBZCxFQUFMLENBQTVEO0FBQUEsc0JBQ0dELFFBQVEsQ0FBQ0g7QUFEWiw0QkFBbUJHLFFBQVEsQ0FBQ0gsSUFBVCxDQUFjSSxpQkFBZCxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURrSDtBQUFBLFNBQW5IO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBV0U7QUFBQSxnQ0FDRTtBQUFHLGNBQUksV0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUEsaUNBQ0U7QUFBTyx1QkFBVyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBb0JFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1OLFlBQVksQ0FBQyxDQUFDRCxVQUFGLENBQWxCO0FBQUEsU0FBakI7QUFBQSxtQkFDR0EsVUFBVSxpQkFBSTtBQUFLLGFBQUcsWUFBS1QsUUFBTCxvQ0FBdUNDLENBQXZDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEakIsRUFFRyxDQUFDUSxVQUFELGlCQUFlO0FBQUssYUFBRyxZQUFLVCxRQUFMLHNDQUF5Q0MsQ0FBekM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUEwQkUsOERBQUMsMEJBQUQ7QUFBNEIsc0JBQWdCLEVBQUVnQjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEOztHQWhDZVgsWTs7TUFBQUEsWTtBQWlDaEJBLFlBQVksQ0FBQ1ksT0FBYixHQUF1QkMsd0VBQXZCO0FBQUE7QUFBQTtBQUFBLG0wQ0Fhc0I7QUFBQSxNQUFHVixVQUFILFNBQUdBLFVBQUg7QUFBQSxTQUFvQkEsVUFBVSxHQUFHLEtBQUgsR0FBVyxNQUF6QztBQUFBLENBYnRCLEVBY2U7QUFBQSxNQUFHQSxVQUFILFNBQUdBLFVBQUg7QUFBQSxTQUFvQkEsVUFBVSxHQUFHLEdBQUgsR0FBUyxHQUF2QztBQUFBLENBZGYsRUFlaUI7QUFBQSxNQUFHQSxVQUFILFNBQUdBLFVBQUg7QUFBQSxTQUFvQkEsVUFBVSxHQUFHLGVBQUgsR0FBcUIsZ0NBQW5EO0FBQUEsQ0FmakIsWUEyRmlDVCxRQTNGakM7QUF1R0FNLFlBQVksQ0FBQ2MsSUFBYixHQUFvQkQscUVBQXBCO0FBQUE7QUFBQTtBQUFBOztBQU9BLFNBQVNFLDBCQUFULFFBQTBEO0FBQUEsTUFBcEJkLGdCQUFvQixTQUFwQkEsZ0JBQW9CO0FBQ3hELHNCQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRTtBQUFLLFdBQUcsK0JBQXdCQSxnQkFBeEIsU0FBUjtBQUF3RCxhQUFLLEVBQUU7QUFBRWUsc0JBQVksRUFBRTtBQUFoQjtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxTQUFiO0FBQXVCLGNBQUksa0JBQVdmLGdCQUFYLENBQTNCO0FBQUEsMEJBQ0lBLGdCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVVFLDhEQUFDLGlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O01BakJRYywwQjtBQWtCRixTQUFTRSxpQ0FBVCxHQUE2QztBQUNoRCxzQkFDRSw4REFBQyxpQ0FBRCxDQUFtQyxPQUFuQztBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBLGdDQUNFO0FBQUssYUFBRyxZQUFLdkIsUUFBTDtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLFlBQUtBLFFBQUw7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBU0U7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBLGdDQUNFO0FBQUssYUFBRyxZQUFLQSxRQUFMO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQWFFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsWUFBS0EsUUFBTDtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRixlQW9CRTtBQUFBLDhCQUNFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsWUFBS0EsUUFBTDtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFHLFlBQUksRUFBQyxTQUFSO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLFlBQUtBLFFBQUw7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlDRDtNQWxDYXVCLGlDO0FBbUNkQSxpQ0FBaUMsQ0FBQ0wsT0FBbEMsR0FBNENDLHFFQUE1QztBQUFBO0FBQUE7QUFBQSx5TCxDQWlCQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0sscUJBQVQsQ0FBK0JuQixLQUEvQixFQUFzQztBQUFBOztBQUMzQyxzQkFDRSw4REFBQyxxQkFBRCxDQUF1QixJQUF2QjtBQUFBLGVBQ0csQ0FDQztBQUFFTyxVQUFJLEVBQUUsU0FBUjtBQUFtQkMsVUFBSSxFQUFFLFNBQXpCO0FBQW9DWSxVQUFJLEVBQUU7QUFBMUMsS0FERCxFQUVDO0FBQUViLFVBQUksRUFBRSxPQUFSO0FBQWlCQyxVQUFJLEVBQUUsT0FBdkI7QUFBZ0NZLFVBQUksRUFBRTtBQUF0QyxLQUZELEVBR0M7QUFBRWIsVUFBSSxFQUFFLFFBQVI7QUFBa0JDLFVBQUksRUFBRSxRQUF4QjtBQUFrQ1ksVUFBSSxFQUFFO0FBQXhDLEtBSEQsRUFJQztBQUFFYixVQUFJLEVBQUUsS0FBUjtBQUFlQyxVQUFJLEVBQUUsS0FBckI7QUFBNEJZLFVBQUksRUFBRTtBQUFsQyxLQUpELEVBS0M7QUFBRWIsVUFBSSxFQUFFLFdBQVI7QUFBcUJDLFVBQUksRUFBRSxXQUEzQjtBQUF3Q1ksVUFBSSxFQUFFO0FBQTlDLEtBTEQsRUFNQ1gsR0FORCxDQU1LO0FBQUEsVUFBR0YsSUFBSCxTQUFHQSxJQUFIO0FBQUEsVUFBU0MsSUFBVCxTQUFTQSxJQUFUO0FBQUEsVUFBZVksSUFBZixTQUFlQSxJQUFmO0FBQUEsMEJBQ0o7QUFBQSxnQ0FDRTtBQUFNLGVBQUssRUFBRTtBQUFFQyxvQkFBUSxFQUFFO0FBQVosV0FBYjtBQUFvQyxtQkFBUyxFQUFDLDhCQUE5QztBQUFBLG9CQUNHZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFNLG1CQUFTLEVBQUMsK0JBQWhCO0FBQWdELGVBQUssRUFBRTtBQUFFYyxvQkFBUSxFQUFFO0FBQVosV0FBdkQ7QUFBQSxrQ0FDRTtBQUEwQyxxQkFBUyxFQUFDLG1DQUFwRDtBQUF3RixlQUFHLDhDQUF1Q0QsSUFBdkM7QUFBM0Ysd0NBQThCWixJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUdSLEtBQUssQ0FBQ1EsSUFBRCxDQUFMLEdBQWNSLEtBQUssQ0FBQ1EsSUFBRCxDQUFuQixHQUE0QixDQUYvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQSxvQ0FBNkJBLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREk7QUFBQSxLQU5MLENBREgsRUFrQkcsQ0FDQztBQUFFRCxVQUFJLEVBQUUsV0FBUjtBQUFxQkMsVUFBSSxFQUFFLFdBQTNCO0FBQXdDWSxVQUFJLEVBQUU7QUFBOUMsS0FERCxFQUVDO0FBQUViLFVBQUksRUFBRSxPQUFSO0FBQWlCQyxVQUFJLEVBQUUsT0FBdkI7QUFBZ0NZLFVBQUksRUFBRTtBQUF0QyxLQUZELEVBR0M7QUFBRWIsVUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFVBQUksRUFBRSxNQUF0QjtBQUE4QlksVUFBSSxFQUFFO0FBQXBDLEtBSEQsRUFJQ1gsR0FKRCxDQUlLLGlCQUEwQjtBQUFBOztBQUFBLFVBQXZCRixJQUF1QixTQUF2QkEsSUFBdUI7QUFBQSxVQUFqQkMsSUFBaUIsU0FBakJBLElBQWlCO0FBQUEsVUFBWFksSUFBVyxTQUFYQSxJQUFXO0FBQzlCLFVBQU1FLEtBQUssR0FBR3RCLEtBQUssQ0FBQ1EsSUFBRCxDQUFMLEdBQWNSLEtBQUssQ0FBQ1EsSUFBRCxDQUFuQixHQUE0QixDQUExQztBQUNBLDBCQUNFO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFDLDhCQUFoQjtBQUFBLG9CQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFNLG1CQUFTLEVBQUM7QUFBaEIsb0tBQStELCtCQUEvRCx3SkFBc0c7QUFBRWMsa0JBQVEsRUFBRTtBQUFaLFNBQXRHLDJKQUNHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVVaLEdBQVYsQ0FBYyxVQUFDYyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUMzQixjQUFNQyxhQUFhLEdBQUdELEtBQUssSUFBS0YsS0FBSyxHQUFHLENBQXhDO0FBQ0EsOEJBQU87QUFBbUQsZUFBRyw4Q0FBdUNGLElBQXZDLFNBQXREO0FBQXlHLGlCQUFLLEVBQUU7QUFBRU0seUJBQVcsRUFBRSxLQUFmO0FBQXNCQyxxQkFBTyxFQUFFRixhQUFhLEdBQUcsQ0FBSCxHQUFPO0FBQW5EO0FBQWhILHdDQUE4QmpCLElBQTlCLGtCQUEwQ2dCLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDRCxTQUhBLENBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBLG9DQUE2QmhCLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFhRCxLQW5CQSxDQWxCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRDtNQTFDZVcscUI7QUEyQ2hCQSxxQkFBcUIsQ0FBQ1MsSUFBdEIsR0FBNkJkLG9FQUE3QjtBQUFBO0FBQUE7QUFBQSwwYyxDQWlDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTWUsbUJBQW1CLEdBQUdDLHNEQUFILDhwRUFBekIsQyxDQXVJQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsY0FBYyxHQUFHRCxzREFBSCwrYkF3Q3ZCRCxtQkF4Q3VCLENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYxNTI5ZTQ1ZDE2YWQxZTQwZjIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vYWx1cmFrdXQudmVyY2VsLmFwcC8nO1xyXG5jb25zdCB2ID0gJzEnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIExpbmsoeyBocmVmLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0gcGFzc0hyZWY+XHJcbiAgICAgIDxhIHsuLi5wcm9wc30+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gIClcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBNZW51XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIEFsdXJha3V0TWVudSh7IHVzdWFyaW9BbGVhdG9yaW8gfSkge1xyXG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRNZW51U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWx1cmFrdXRNZW51LldyYXBwZXIgaXNNZW51T3Blbj17aXNNZW51T3Blbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPEFsdXJha3V0TWVudS5Mb2dvIHNyYz17YCR7QkFTRV9VUkx9L2xvZ28uc3ZnYH0gLz5cclxuXHJcbiAgICAgICAgPG5hdiBzdHlsZT17eyBmbGV4OiAxIH19PlxyXG4gICAgICAgICAge1t7IG5hbWU6ICdJbmljaW8nLCBzbHVnOiAnLyd9LCB7bmFtZTogJ0FtaWdvcycsIHNsdWc6ICcvYW1pZ29zJ30sIHtuYW1lOiAnQ29tdW5pZGFkZXMnLCBzbHVnOiAnL2NvbXVuaWRhZGVzJ31dLm1hcCgobWVudUl0ZW0pID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtga2V5X18ke21lbnVJdGVtLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKX1gfSBocmVmPXtgJHttZW51SXRlbS5zbHVnLnRvTG9jYWxlTG93ZXJDYXNlKCl9YH0+XHJcbiAgICAgICAgICAgICAge21lbnVJdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPGEgaHJlZj17YC9sb2dvdXRgfT5cclxuICAgICAgICAgICAgU2FpclxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUGVzcXVpc2FyIG5vIE9ya3V0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE1lbnVTdGF0ZSghaXNNZW51T3Blbil9PlxyXG4gICAgICAgICAge2lzTWVudU9wZW4gJiYgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9tZW51LW9wZW4uc3ZnP3Y9JHt2fWB9IC8+fVxyXG4gICAgICAgICAgeyFpc01lbnVPcGVuICYmIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvbWVudS1jbG9zZWQuc3ZnP3Y9JHt2fWB9IC8+fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyIHVzdWFyaW9BbGVhdG9yaW89e2dpdGh1YlVzZXJ9IC8+XHJcbiAgICA8L0FsdXJha3V0TWVudS5XcmFwcGVyPlxyXG4gIClcclxufVxyXG5BbHVyYWt1dE1lbnUuV3JhcHBlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOEJDNTtcclxuICAuYWx1cmFrdXRNZW51UHJvZmlsZVNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwYWRkaW5nOiA0NnB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA0OHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgcG9pbnRlci1ldmVudHM6ICR7KHsgaXNNZW51T3BlbiB9KSA9PiBpc01lbnVPcGVuID8gJ2FsbCcgOiAnbm9uZSd9O1xyXG4gICAgb3BhY2l0eTogJHsoeyBpc01lbnVPcGVuIH0pID0+IGlzTWVudU9wZW4gPyAnMScgOiAnMCd9O1xyXG4gICAgdHJhbnNmb3JtOiAkeyh7IGlzTWVudU9wZW4gfSkgPT4gaXNNZW51T3BlbiA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKGNhbGMoLTEwMCUgLSA0OHB4KSknfTtcclxuICAgIEBtZWRpYShtaW4td2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuYm94TGluayB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICMyRTdCQjQ7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbiAgICBociB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0VDRjJGQTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4QkM1O1xyXG4gICAgcGFkZGluZzogN3B4IDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDExMTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDE7XHJcbiAgICBAbWVkaWEobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBuYXYge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBAbWVkaWEobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyOTJDMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNTU3OUExO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDQycHg7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YCR7QkFTRV9VUkx9L2ljb25zL3NlYXJjaC5zdmdgfSk7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1cHggY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfSBcclxuICB9XHJcbmA7XHJcbkFsdXJha3V0TWVudS5Mb2dvID0gc3R5bGVkLmltZ2BcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDlweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBbHVyYWt1dE1lbnVQcm9maWxlU2lkZWJhcih7IHVzdWFyaW9BbGVhdG9yaW8gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c3VhcmlvQWxlYXRvcmlvfS5wbmdgfSBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc4cHgnIH19IC8+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJib3hMaW5rXCIgaHJlZj17YC91c2VyLyR7dXN1YXJpb0FsZWF0b3Jpb31gfT5cclxuICAgICAgICAgICAgQHt1c3VhcmlvQWxlYXRvcmlvfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgPEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdC5XcmFwcGVyPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL3VzZXIuc3ZnYH0gLz5cclxuICAgICAgICAgICAgICBQZXJmaWxcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9ib29rLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgUmVjYWRvc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL2NhbWVyYS5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgIEZvdG9zXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvc3VuLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgRGVwb2ltZW50b3NcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL3BsdXMuc3ZnYH0gLz5cclxuICAgICAgICAgICAgICBHaXRIdWIgVHJlbmRzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvbG9nb3V0XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vL2ljb25zL2xvZ291dC5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgIFNhaXJcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L0FsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdC5XcmFwcGVyPlxyXG4gICAgKVxyXG4gIH1cclxuICBBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQuV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBhIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzJFN0JCNDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4OyBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGA7XHJcbiAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIE9ya3V0Tm9zdGFsZ2ljSWNvblNldFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBleHBvcnQgZnVuY3Rpb24gT3JrdXROb3N0YWxnaWNJY29uU2V0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8T3JrdXROb3N0YWxnaWNJY29uU2V0Lkxpc3Q+XHJcbiAgICAgICAge1tcclxuICAgICAgICAgIHsgbmFtZTogJ1JlY2Fkb3MnLCBzbHVnOiAncmVjYWRvcycsIGljb246ICdib29rJyB9LFxyXG4gICAgICAgICAgeyBuYW1lOiAnRm90b3MnLCBzbHVnOiAnZm90b3MnLCBpY29uOiAnY2FtZXJhJyB9LFxyXG4gICAgICAgICAgeyBuYW1lOiAnVmlkZW9zJywgc2x1ZzogJ3ZpZGVvcycsIGljb246ICd2aWRlby1jYW1lcmEnIH0sXHJcbiAgICAgICAgICB7IG5hbWU6ICdGw6NzJywgc2x1ZzogJ2ZhcycsIGljb246ICdzdGFyJyB9LFxyXG4gICAgICAgICAgeyBuYW1lOiAnTWVuc2FnZW5zJywgc2x1ZzogJ21lbnNhZ2VucycsIGljb246ICdlbWFpbCcgfSxcclxuICAgICAgICBdLm1hcCgoeyBuYW1lLCBzbHVnLCBpY29uIH0pID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2Bvcmt1dF9faWNvbl9zZXRfXyR7c2x1Z31gfT5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZ3JpZEFyZWE6ICd0aXRsZScgfX0gY2xhc3NOYW1lPVwiT3JrdXROb3N0YWxnaWNJY29uU2V0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9fbnVtYmVyXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICdudW1iZXInIH19PlxyXG4gICAgICAgICAgICAgIDxpbWcga2V5PXtgb3JrdXRfX2ljb25fc2V0X18ke3NsdWd9X2ltZ2B9IGNsYXNzTmFtZT1cIk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9faWNvblNhbXBsZVwiIHNyYz17YGh0dHBzOi8vYWx1cmFrdXQudmVyY2VsLmFwcC9pY29ucy8ke2ljb259LnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAge3Byb3BzW3NsdWddID8gcHJvcHNbc2x1Z10gOiAyfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHtbXHJcbiAgICAgICAgICB7IG5hbWU6ICdDb25macOhdmVsJywgc2x1ZzogJ2NvbmZpYXZlbCcsIGljb246ICdzbWlsZScgfSxcclxuICAgICAgICAgIHsgbmFtZTogJ0xlZ2FsJywgc2x1ZzogJ2xlZ2FsJywgaWNvbjogJ2Nvb2wnIH0sXHJcbiAgICAgICAgICB7IG5hbWU6ICdTZXh5Jywgc2x1ZzogJ3NleHknLCBpY29uOiAnaGVhcnQnIH0sXHJcbiAgICAgICAgXS5tYXAoKHsgbmFtZSwgc2x1ZywgaWNvbiB9KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0b3RhbCA9IHByb3BzW3NsdWddID8gcHJvcHNbc2x1Z10gOiAzO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGtleT17YG9ya3V0X19pY29uX3NldF9fJHtzbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJPcmt1dE5vc3RhbGdpY0ljb25TZXRfX2ljb25Db21wbGV4XCIgY2xhc3NOYW1lPVwiT3JrdXROb3N0YWxnaWNJY29uU2V0X19udW1iZXJcIiBzdHlsZT17eyBncmlkQXJlYTogJ251bWJlcicgfX0+XHJcbiAgICAgICAgICAgICAgICB7WzAsIDEsIDJdLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgaXNIZWFydEFjdGl2ZSA9IGluZGV4IDw9ICh0b3RhbCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBrZXk9e2Bvcmt1dF9faWNvbl9zZXRfXyR7c2x1Z31faW1nXyR7aW5kZXh9YH0gc3JjPXtgaHR0cHM6Ly9hbHVyYWt1dC52ZXJjZWwuYXBwL2ljb25zLyR7aWNvbn0uc3ZnYH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcycHgnLCBvcGFjaXR5OiBpc0hlYXJ0QWN0aXZlID8gMSA6ICcwLjUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L09ya3V0Tm9zdGFsZ2ljSWNvblNldC5MaXN0PlxyXG4gICAgKVxyXG4gIH1cclxuICBPcmt1dE5vc3RhbGdpY0ljb25TZXQuTGlzdCA9IHN0eWxlZC51bGBcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGxpIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzVBNUE1QTtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICBcInRpdGxlIHRpdGxlXCJcclxuICAgICAgICBcIm51bWJlciBudW1iZXJcIjsgXHJcbiAgICAgIFxyXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5Pcmt1dE5vc3RhbGdpY0ljb25TZXRfX3RpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7IFxyXG4gICAgICB9XHJcbiAgICAgIC5Pcmt1dE5vc3RhbGdpY0ljb25TZXRfX251bWJlciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgLk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9faWNvblNhbXBsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgO1xyXG4gIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBMb2dpbiBQYWdlXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGNvbnN0IEFsdXJha3V0TG9naW5TY3JlZW4gPSBjc3NgXHJcbiAgICA6cm9vdCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZFByaW1hcnk6ICNEOUU2RjY7XHJcbiAgICAgIC0tYmFja2dyb3VuZFNlY29uZGFyeTogI0YxRjlGRTtcclxuICAgICAgLS1iYWNrZ3JvdW5kVGVydGlhcnk6ICNGRkZGRkY7XHJcbiAgICAgIC0tYmFja2dyb3VuZFF1YXJ0ZXJuYXJ5OiAjQkJDREU4O1xyXG4gICAgICAtLWNvbG9yUHJpbWFyeTogIzJFN0JCNDtcclxuICAgICAgLS1jb2xvclNlY29uZGFyeTogIzM4OEJCMDtcclxuICAgICAgLS1jb2xvclRlcnRpYXJ5OiAjMkY0QTcxO1xyXG4gICAgICAtLWNvbG9yUXVhcnRlcm5hcnk6ICNEODFEOTk7XHJcbiAgICAgIC0tdGV4dFByaW1hcnlDb2xvcjogIzMzMzMzMztcclxuICAgICAgLS10ZXh0U2Vjb25kYXJ5Q29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIC0tdGV4dFRlcnRpYXJ5Q29sb3I6ICM1QTVBNUE7XHJcbiAgICAgIC0tdGV4dFF1YXJ0ZXJuYXJ5Q29sb3I6ICNDNUM2Q0E7XHJcbiAgICAgIC0tY29tbW9uUmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcbiAgICAubG9naW5TY3JlZW4ge1xyXG4gICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDExMTBweDtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgLS1nYXA6IDEycHg7XHJcbiAgICAgIC0tZ3V0dGVyOiAxNnB4O1xyXG4gICAgICBncmlkLWdhcDogdmFyKC0tZ2FwKTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICAgICAgXCJsb2dvQXJlYVwiXHJcbiAgICAgICAgXCJmb3JtQXJlYVwiXHJcbiAgICAgICAgXCJmb290ZXJBcmVhXCI7XHJcbiAgICAgIEBtZWRpYShtaW4td2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgICAgICAgICAgICAgXCJsb2dvQXJlYSBmb3JtQXJlYVwiXHJcbiAgICAgICAgICAgICAgICBcImxvZ29BcmVhIGZvcm1BcmVhXCJcclxuICAgICAgICAgICAgICAgIFwiZm9vdGVyQXJlYSBmb290ZXJBcmVhXCI7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ29BcmVhIHtcclxuICAgICAgICBncmlkLWFyZWE6IGxvZ29BcmVhO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRUZXJ0aWFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tbW9uUmFkaXVzKTtcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1ndXR0ZXIpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjYzcHg7XHJcbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDM2OHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yUXVhcnRlcm5hcnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtQXJlYSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBmb3JtQXJlYTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1ndXR0ZXIpO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRTZWNvbmRhcnkpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tbW9uUmFkaXVzKTtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1nYXApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIyNHB4O1xyXG4gICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4MnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yUHJpbWFyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dFF1YXJ0ZXJuYXJ5Q29sb3IpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kVGVydGlhcnkpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb21tb25SYWRpdXMpO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbW1vblJhZGl1cyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yUHJpbWFyeSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0U2Vjb25kYXJ5Q29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyQXJlYSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBmb290ZXJBcmVhO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRRdWFydGVybmFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tbW9uUmFkaXVzKTtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JQcmltYXJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgO1xyXG4gIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBSZXNldCBTdHlsZXNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgZXhwb3J0IGNvbnN0IEFsdXJha3V0U3R5bGVzID0gY3NzYFxyXG4gICAgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICB3aWR0aDogOHB4O1xyXG4gICAgfVxyXG4gICAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxuICAgIH1cclxuICAgICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgYmFja2dyb3VuZDogIzg4ODsgXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1NTU7IFxyXG4gICAgfVxyXG4gICAgYSxcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAmOmhvdmVyLFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgfVxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyLFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjMzMzMzMzNTc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7QWx1cmFrdXRMb2dpblNjcmVlbn1gOyJdLCJzb3VyY2VSb290IjoiIn0=