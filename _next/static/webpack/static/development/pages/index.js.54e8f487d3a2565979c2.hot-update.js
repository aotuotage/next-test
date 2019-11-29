webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_less_reset_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/less/reset.less */ "./public/less/reset.less");
/* harmony import */ var _public_less_reset_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_less_reset_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_less_index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/less/index.less */ "./public/less/index.less");
/* harmony import */ var _public_less_index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_less_index_less__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_Automobile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Automobile */ "./components/Automobile.js");
/* harmony import */ var _components_House__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/House */ "./components/House.js");
/* harmony import */ var _components_Piecemeal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Piecemeal */ "./components/Piecemeal.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_17__);






var _jsxFileName = "/Users/mac/Desktop/next/next-test/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;













var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_17___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig; // 定义counter组件


var Counter =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Counter, _Component);

  function Counter(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Counter);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Counter).call(this, props));
    _this.state = {
      showlist: 1
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Counter, [{
    key: "taplist",
    value: function taplist(id) {
      this.setState({
        showlist: id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          value = _this$props.value,
          onIncreaseClick = _this$props.onIncreaseClick;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), __jsx("div", {
        className: "indexpage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("div", {
        className: "jackma",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("img", {
        className: "header_img",
        src: "images/jack-ma.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "\u9A6C\u4E91\u6A21\u62DF\u5668")), __jsx("div", {
        className: "mall",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "\u5546\u57CE\uFF1A"), __jsx("li", {
        className: this.state.showlist == 1 ? 'li_on' : '',
        onClick: function onClick() {
          return _this2.taplist(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u4EA4\u901A"), __jsx("li", {
        className: this.state.showlist == 2 ? 'li_on' : '',
        onClick: function onClick() {
          return _this2.taplist(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "\u623F\u4EA7"), __jsx("li", {
        className: this.state.showlist == 3 ? 'li_on' : '',
        onClick: function onClick() {
          return _this2.taplist(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u96F6\u788E"))), this.state.showlist == 1 ? __jsx(_components_Automobile__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })) : '', this.state.showlist == 2 ? __jsx(_components_House__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })) : '', this.state.showlist == 3 ? __jsx(_components_Piecemeal__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })) : ''));
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); //子组件传过来的值


var childrendata;
/*-----------具体通知描述及数据处理方法部分-------------*/
// Action通知及描述

var increaseAction = {
  type: 'reduce'
}; // Reducer计算  基于原有state根据action得到新的state

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    count: 279000000000
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var count = state.count;

  switch (action.type) {
    case 'reduce':
      //如果接到action为increase的通知执行
      return {
        count: childrendata
      };

    default:
      return state;
    //返回新的state
  }
}
/*-----------数据存储器部分-------------*/
// 根据reducer函数通过createStore()创建store(存储器)


var store = Object(redux__WEBPACK_IMPORTED_MODULE_15__["createStore"])(counter);
/*-----------映射方法及数据部分-------------*/
//  将state映射到Counter组件的props(数据)

function mapStateToProps(state) {
  return {
    value: state.count
  };
} //  将action映射到Counter组件的props(方法)


function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function onIncreaseClick(data) {
      childrendata = data;
      dispatch(increaseAction); //定义点击方法发送action
    }
  };
} // 传入上面两个函数参数，将Counter组件变为App组件


var App = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(mapStateToProps, mapDispatchToProps)(Counter);

var Home = function Home() {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_16__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(App, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.54e8f487d3a2565979c2.hot-update.js.map