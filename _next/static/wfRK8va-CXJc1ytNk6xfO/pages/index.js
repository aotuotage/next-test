(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var u=a(n("q1tI")),o=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,u=t.hasQuery;return n||a&&(void 0!==u&&u)}e.isInAmpMode=i,e.useAmp=function(){return i(u.default.useContext(o.AmpStateContext))}},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),a=n("hfKm"),u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};a(e,"__esModule",{value:!0});var o=u(n("q1tI")),i=u(n("Xuae")),c=n("lwAK"),f=n("FYa8"),l=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce(function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)},[])):t.concat(e)}e.defaultHead=s;var p=["name","httpEquiv","charSet","itemProp"];function v(t,e){return t.reduce(function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)},[]).reduce(d,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,a={};return function(u){if(u.key&&"number"!==typeof u.key&&0===u.key.indexOf(".$"))return!t.has(u.key)&&(t.add(u.key),!0);if(t.has(".$".concat(u.key)))return!1;switch(u.type){case"title":case"base":if(e.has(u.type))return!1;e.add(u.type);break;case"meta":for(var o=0,i=p.length;o<i;o++){var c=p[o];if(u.props.hasOwnProperty(c))if("charSet"===c){if(n.has(c))return!1;n.add(c)}else{var f=u.props[c],l=a[c]||new r;if(l.has(f))return!1;l.add(f),a[c]=l}}}return!0}}()).reverse().map(function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})})}var h=i.default();function m(t){var e=t.children;return o.default.createElement(c.AmpStateContext.Consumer,null,function(t){return o.default.createElement(f.HeadManagerContext.Consumer,null,function(n){return o.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:l.isInAmpMode(t)},e)})})}m.rewind=h.rewind,e.default=m},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),a=n("n3ko");t.exports=n("raTm")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(a(this,"Set"),t=0===t?0:t,t)}},r)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),a=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,a(0,n)):t[e]=n}},PQJW:function(t,e,n){var r=n("d04V"),a=n("yLu3");t.exports=function(t){if(a(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},RNiq:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),u=(n("YFqc"),n("nOHt")),o=n.n(u),i=(n("lV0a"),n("ec2i"),n("8Kt/")),c=n.n(i),f=(n("kqKd"),a.a.createElement);var l=function(){return f(a.a.Fragment,null,f(c.a,null,f("title",null,"\u9a6c\u4e91\u6a21\u62df\u5668"),f("meta",{charSet:"utf-8"})),f("div",{className:"navclass"},f("h3",null,"\u4f59\u989d\uff1a279,000,000,000"),f("button",{type:"button"},"\u8d2d\u7269\u8f66")))},s=n("yLiY"),d=n.n(s),p=a.a.createElement,v=d()().publicRuntimeConfig;o.a.events.on("routeChangeStart",function(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];(t=console).log.apply(t,["1.routeChangeStart->\u8def\u7531\u5f00\u59cb\u53d8\u5316,\u53c2\u6570\u4e3a:"].concat(n))});e.default=function(){return p(a.a.Fragment,null,p(l,null),p("div",{className:"indexpage"},p("div",{className:"jackma"},p("img",{src:"".concat(v.staticFolder,"/jack-ma.jpg")}),p("div",{className:"header_img"}))))}},TbGu:function(t,e,n){var r=n("fGSI"),a=n("PQJW"),u=n("2PDY");t.exports=function(t){return r(t)||a(t)||u()}},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),u=n("JB68"),o=n("sNwI"),i=n("NwJ3"),c=n("tEej"),f=n("IP1Z"),l=n("fNZA");a(a.S+a.F*!n("TuGD")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,a,s,d=u(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,w=l(d);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==w||p==Array&&i(w))for(n=new p(e=c(d.length));e>y;y++)f(n,y,m?h(d[y],y):d[y]);else for(s=w.call(d),n=new p;!(a=s.next()).done;y++)f(n,y,m?o(s,h,[a.value,y],!0):a.value);return n.length=y,n}})},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),a=n("ZDA2"),u=n("/+P4"),o=n("K47E"),i=n("WaGi"),c=n("N9n2"),f=n("TbGu"),l=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var s=n("q1tI"),d=!1;e.default=function(){var t,e=new l;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(f){function l(t){var i;return r(this,l),i=a(this,u(l).call(this,t)),d&&(e.add(o(i)),n(o(i))),i}return c(l,f),i(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(s.Component)}},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var u=a(n("q1tI"));e.AmpStateContext=u.createContext({})},ttDY:function(t,e,n){t.exports=n("+iuc")},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xvv9:function(t,e,n){n("cHUd")("Set")},yLiY:function(t,e,n){"use strict";var r;n("hfKm")(e,"__esModule",{value:!0}),e.default=function(){return r},e.setConfig=function(t){r=t}}},[["vlRD",0,1,2]]]);