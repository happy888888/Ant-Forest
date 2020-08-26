/*!
 * BUILD_ASSET_META_START {"type":"kylin-build","uniquename":"app/60000002","name":"60000002_ant-forest","hash":"d684ab843087ad1a19fc","chunk":"contentReward","time":1597914305298,"filename":"js/contentReward.d684ab8430.js","site":false,"fengdie":false} BUILD_ASSET_META_END
 */
webpackJsonp([10],{0:function(e,t,n){n(12),e.exports=n(262)},173:function(e,t,n){var a;n(547);var i=n(6)(n(312),n(233),null,null,a);t.__esModule=!0,t.default=i.exports},233:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reward-list",attrs:{"data-aspm":"c14331"}},[e._l(e.contentRewards,function(t,a){return[n("div",{key:a,staticClass:"reward-item"},[n("div",{staticClass:"item-left"},[n("div",{staticClass:"item-title af-ellipsis"},[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"item-energy"},[n("div",{staticClass:"energy-icon"}),e._v(" "),n("div",{staticClass:"energy-sum af-digital-fontface"},[e._v(e._s(e._f("parseEnergy")(t.rewardSum)))]),e._v(" "),n("div",{staticClass:"energy-time"},[e._v(e._s(e._f("parseContentTime")(t.createTime)))])])]),e._v(" "),n("div",{staticClass:"item-image",style:{backgroundImage:"url("+t.imageUrl+")"}})])]}),e._v(" "),e.loading?n("p",{staticClass:"list-more"},[e._v("加载中...")]):e.hasMore?n("p",{staticClass:"list-more",on:{click:e.onClickMore}},[e._v("点击加载更多")]):n("p",{staticClass:"list-more"},[e._v(e._s(e.contentRewards.length?"我是有底线的":"没有打赏信息"))])],2)},staticRenderFns:[]}},262:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(l.default?(0,l.default)(e,t):e.__proto__=t)}function s(e){window.AlipayJSBridge&&window.AlipayJSBridge.call?e():navigator.userAgent.indexOf("AlipayClient")>=0?document.addEventListener("AlipayJSBridgeReady",e,!0):e()}function u(){var e=function(e){function t(){return i(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.initOptions=function(){return{store:v.default,router:void 0}},t.prototype.render=function(e){return e(_.default)},t}(p.Page),t=new e("#app");return t._vue}var d=n(9),l=a(d),c=n(13),f=(a(c),n(292)),p=(a(f),n(4)),m=n(282),v=a(m),w=n(173),_=a(w);v.default&&s(function(){v.default.dispatch("pageBeforeRender")}),function(e){window.AlipayJSBridge&&window.AlipayJSBridge.call?setTimeout(e,0):navigator.userAgent.indexOf("AlipayClient")>=0?document.addEventListener("AlipayJSBridgeReady",e,!0):setTimeout(e,0)}(u)},272:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(){return r?r:r="undefined"!=typeof window&&window.Promise&&"function"==typeof window.Promise.resolve?window.Promise:n(1).default||n(1)}Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),s=a(o);t.default={state:{contentRewards:[],loading:!1,hasMore:!0,lastTimeStamp:0},mutations:{updateLoading:function(e,t){e.loading=t},updateHasMore:function(e,t){e.hasMore=t},updateLastTimeStamp:function(e,t){e.lastTimeStamp=t},appendRewards:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];(t=e.contentRewards).push.apply(t,n)}},actions:{pageBeforeRender:function(e){window.AF_STORE=e},queryData:function(e){return new(i())(function(t,n){var a,r,o;return a=e.commit,r=e.state,r.loading||!r.hasMore?t():(a("updateLoading",!0),i().resolve(s.default.rpc.queryRewardList(r.lastTimeStamp)).then(function(e){try{return o=e,o.success?(a("appendRewards",o.articleList),a("updateHasMore",o.hasMore),a("updateLastTimeStamp",o.lastTimestamp)):a("updateHasMore",!1),a("updateLoading",!1),t()}catch(e){return n(e)}}.bind(this),n))}.bind(this))}}}},282:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(272),r=a(i),o=n(4);r.default.strict=!1,r.default.plugins=[];var s=new o.Store(r.default);o.Store.setInstance?o.Store.setInstance(s):o.Store.getInstance=function(){try{console.warn(["Store.getInstance is deprecated, please use :",'import { Instance } from "@ali/kylin-framework";',"Instance.getStore();"].join("\n"))}catch(e){}return s},o.Instance&&o.Instance.setStore&&o.Instance.setStore(s),t.default=s},292:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}n(18);var i=n(2),r=a(i),o=n(3),s=a(o),u=n(19),d=a(u),l=function(){s.default.time.init(),r.default.drm.init(),s.default.html.setHTMLFontSize(),(0,d.default)(window.FastClick)};luna.ready(function(){l()})},312:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(4),r=n(3),o=a(r),s=n(17),u=a(s),d=n(27),l=a(d);l.default.filter("parseContentTime",u.default.socialTimeFormat);var c=i.Component.Object({mapStateToProps:{contentRewards:function(e){return e.contentRewards},loading:function(e){return e.loading},hasMore:function(e){return e.hasMore}}})(function(){var e={name:"IndexView",props:{contentRewards:Array,loading:Boolean,hasMore:Boolean},data:function(){return{}},mounted:function(){var e=this;this._loadMore(!0),window.onscroll=function(){o.default.html.isReachBottom()&&e._loadMore()}},methods:{onClickMore:function(){this._loadMore()},_loadMore:function(e){!this.loading&&this.hasMore&&this.$store.dispatch("queryData")}}};return e});t.default=c},547:function(e,t){}});