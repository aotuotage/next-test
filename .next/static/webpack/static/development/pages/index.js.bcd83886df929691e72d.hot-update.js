webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Automobile.js":
/*!**********************************!*\
  !*** ./components/Automobile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Automobile; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/mac/Desktop/next/next-test/components/Automobile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var Automobile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Automobile, _Component);

  function Automobile(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Automobile);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Automobile).call(this, props));
    _this.state = {
      list: [],
      value: _this.props.value
    };
    _this.addcar = _this.addcar.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    var onIncreaseClick = _this.props.onIncreaseClick;
    _this.onIncreaseClick = onIncreaseClick;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Automobile, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // let _this = this;
      // const promise =new Promise((resolve)=>{
      //     axios('../automobile/list.json').then(
      //         (res)=>{
      //             resolve(res.data)
      //         }
      //     )
      // })
      // promise.then(function(res){
      //     let newarr = res.map(function(item){
      //         return {...item,addnum: 0}
      //     })
      //     _this.setState({
      //         list: newarr 
      //     })
      // })
      this.setState({
        list: [{
          "img": "images/lafa.jpg",
          "name": "拉法",
          "number": "22500000"
        }, {
          "img": "images/s10071_200.jpg",
          "name": "法拉利488",
          "number": "4500000"
        }, {
          "img": "images/s8809_200.jpg",
          "name": "法拉利f12",
          "number": "5200000"
        }, {
          "img": "images/s2782_200.jpg",
          "name": "法拉利812",
          "number": "4500000"
        }, {
          "img": "images/s10632_200.jpg",
          "name": "兰博基尼大牛",
          "number": "7500000"
        }, {
          "img": "images/s9830_200.jpg",
          "name": "兰博基尼urus",
          "number": "3000000"
        }, {
          "img": "images/5680fe189983b.jpg",
          "name": "科尼赛克-Agera",
          "number": "26500000"
        }]
      });
    }
  }, {
    key: "addcar",
    value: function addcar(i) {
      var newaddnum = this.state.list[i].addnum += 1;
      var newmoney = this.state.list[i].number;
      var newprodata = this.state.value - newaddnum * newmoney;
      this.onIncreaseClick(newprodata);

      var newlist = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()([], this.state.list);

      this.setState({
        list: newlist
      });
    }
  }, {
    key: "reducecar",
    value: function reducecar(i) {
      if (this.state.list[i].addnum > 0) {
        this.state.list[i].addnum -= 1;

        var newlist = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()([], this.state.list);

        this.setState({
          list: newlist
        });
      }

      return false;
    }
  }, {
    key: "addlist",
    value: function addlist() {
      var _this2 = this;

      var arr;

      if (this.state.list.length) {
        arr = this.state.list.map(function (item, i) {
          return __jsx("div", {
            className: "auto_list",
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, __jsx("img", {
            src: item.img,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }), __jsx("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }, item.name, __jsx("span", {
            className: "price",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }, "\uFFE5", item.number)), __jsx("div", {
            className: "add_button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, __jsx("div", {
            className: "control",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, __jsx("div", {
            className: "subtraction",
            onClick: function onClick() {
              return _this2.reducecar(i);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, "-"), __jsx("div", {
            className: "addnum",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          }, item.addnum), __jsx("div", {
            className: "addition",
            onClick: function onClick() {
              return _this2.addcar(i);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }, "+")), __jsx("button", {
            className: "increase",
            onClick: function onClick() {
              return _this2.addcar(i);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          }, "\u52A0\u5165\u8D2D\u7269\u8F66")));
        });
      }

      return arr;
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, this.addlist()));
    }
  }]);

  return Automobile;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false

})
//# sourceMappingURL=index.js.bcd83886df929691e72d.hot-update.js.map