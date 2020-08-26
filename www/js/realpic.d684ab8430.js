/*!
 * BUILD_ASSET_META_START {"type":"kylin-build","uniquename":"app/60000002","name":"60000002_ant-forest","hash":"d684ab843087ad1a19fc","chunk":"realpic","time":1597914305298,"filename":"js/realpic.d684ab8430.js","site":false,"fengdie":false} BUILD_ASSET_META_END
 */
webpackJsonp([4],{0:function(e,t,n){n(12),e.exports=n(270)},207:function(e,t,n){var i;i={},i.Swiper3=function(){var e=n(30);return e=e.Swiper3}(),i.SwiperSlide=function(){var e=n(30);return e=e.SwiperSlide}(),n(532);var o=n(6)(n(345),n(218),null,null,i);t.__esModule=!0,t.default=o.exports},218:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"realpic"},[e.infoList.length?n("swiper3",{ref:"swiper",attrs:{options:{initialSlide:e.initialSlide,loop:!1,speed:300,resistanceRatio:0,followFinger:!1,iOSEdgeSwipeDetection:!0,observer:!0,observeParents:!0,onSlideChangeStart:e.onSlideChangeStart,onSlideChangeEnd:e.onSlideChangeEnd},"wrapper-class":"wrapper swiper-wrapper"}},e._l(e.infoList,function(t){return n("swiper-slide",{key:t.type,class:["slide",t.djangoPicUrl?"":"slide-recommend"]},[t.djangoPicUrl?[n("div",{staticClass:"info"},[n("div",{staticClass:"time"},[n("span",{staticClass:"t1 af-digital-fontface"},[e._v(e._s(parseInt(t.picExtInfo.temperature))+"℃")]),e._v(" "),n("p",{staticClass:"t2"},[e._v(e._s(e._f("parseTimeToYMDHM")(t.picShootTime)))])]),e._v(" "),n("div",{staticClass:"detail"},[n("div",{staticClass:"pressure item"},[n("div",{staticClass:"item-title"},[e._v("压强")]),e._v(" "),n("div",{staticClass:"item-value"},[e._v(e._s(isNaN(t.picExtInfo.pressure)?"--":t.picExtInfo.pressure)+"hPa")])]),e._v(" "),n("div",{staticClass:"light item"},[n("div",{staticClass:"item-title"},[e._v("光强")]),e._v(" "),n("div",{staticClass:"item-value"},[e._v(e._s(isNaN(t.picExtInfo.illumination)?"--":t.picExtInfo.illumination)+"Lux")])]),e._v(" "),n("div",{staticClass:"humidity item"},[n("div",{staticClass:"item-title"},[e._v("湿度")]),e._v(" "),n("div",{staticClass:"item-value"},[e._v(e._s(t.picExtInfo.humidity||"--")+"%")])])])]),e._v(" "),n("div",{staticClass:"pic"},[n("div",{staticClass:"img-w needsclick",on:{click:function(n){e.onImageViewer(t)},touchstart:function(n){return e.touchstart(n,t)},touchend:e.clearLoop}},[n("img",{staticClass:"img",attrs:{src:e._f("fixDjangoPicUrl")(t.djangoPicUrl)}})]),e._v(" "),n("p",{staticClass:"content"},[e._v(e._s(t.extInfo.picDesc))])])]:[n("div",{staticClass:"recommend"},e._l(t,function(t,i){return n("div",{key:t.type,class:["block needsclick",i%2?"":"even"],on:{click:function(n){e.onRecommendReal(t)}}},[n("img",{staticClass:"recommend-pic needsclick",attrs:{src:e._f("fixDjangoPicUrl")(t.forestPicInfos[0].djangoPicUrl)}}),e._v(" "),n("div",{staticClass:"block-title needsclick"},[n("div",{staticClass:"t1"},[e._v("蚂蚁森林"+e._s(t.forestName.split("·")[0]))]),e._v(" "),n("div",{staticClass:"t2"},[e._v(e._s(t.forestName.split("·")[1]))])])])}))]],2)})):e._e()],1)},staticRenderFns:[]}},270:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(u.default?(0,u.default)(e,t):e.__proto__=t)}function s(e){window.AlipayJSBridge&&window.AlipayJSBridge.call?e():navigator.userAgent.indexOf("AlipayClient")>=0?document.addEventListener("AlipayJSBridgeReady",e,!0):e()}function c(){var e=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return a(t,e),t.prototype.initOptions=function(){return{store:m.default,router:void 0}},t.prototype.render=function(e){return e(w.default)},t}(p.Page),t=new e("#app");return t._vue}var l=n(9),u=i(l),d=n(13),f=(i(d),n(300)),p=(i(f),n(4)),v=n(290),m=i(v),_=n(207),w=i(_);m.default&&s(function(){m.default.dispatch("pageBeforeRender")}),function(e){window.AlipayJSBridge&&window.AlipayJSBridge.call?setTimeout(e,0):navigator.userAgent.indexOf("AlipayClient")>=0?document.addEventListener("AlipayJSBridgeReady",e,!0):setTimeout(e,0)}(c)},280:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){return r?r:r="undefined"!=typeof window&&window.Promise&&"function"==typeof window.Promise.resolve?window.Promise:n(1).default||n(1)}Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(2),s=i(a),c=luna.urlParam.get("forestId");t.default={state:{infoList:[]},mutations:{updateInfoList:function(e,t){e.infoList=t||[]},pushInfoList:function(e,t){e.infoList.push(t)}},actions:{pageBeforeRender:function(e){return new(o())(function(t,n){var i,r;return i=e.commit,o().resolve(s.default.rpc.queryForestAlbum({forestId:c})).then(function(e){try{return r=e,r.picInfoList&&r.picInfoList.length>0&&i("updateInfoList",r.picInfoList),t()}catch(e){return n(e)}}.bind(this),n)}.bind(this))}}}},290:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(280),r=i(o),a=n(4);r.default.strict=!1,r.default.plugins=[];var s=new a.Store(r.default);a.Store.setInstance?a.Store.setInstance(s):a.Store.getInstance=function(){try{console.warn(["Store.getInstance is deprecated, please use :",'import { Instance } from "@ali/kylin-framework";',"Instance.getStore();"].join("\n"))}catch(e){}return s},a.Instance&&a.Instance.setStore&&a.Instance.setStore(s),t.default=s},300:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}n(18);var o=n(3),r=i(o),a=n(19),s=i(a),c=function(){r.default.html.isFullScreen()&&document.body.classList.add("full-screen"),r.default.html.setHTMLFontSize(),(0,s.default)(window.FastClick)};luna.ready(function(){c()})},345:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){return r?r:r="undefined"!=typeof window&&window.Promise&&"function"==typeof window.Promise.resolve?window.Promise:n(1).default||n(1)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=n(4),s=n(2),c=i(s),l=n(5),u=i(l),d=!1,f=!1,p=luna.urlParam.get("initialSlide"),v=luna.urlParam.get("forestName"),m=v,_=a.Component.Object({mapStateToProps:{infoList:function(e){return e.infoList}}})(function(){var e={name:"IndexView",data:function(){return{initialSlide:p,ios:luna.deviceType.ios}},props:{infoList:Array},filters:{fixDjangoPicUrl:function(e){return e?e+"&zoom=375w_80q_1e_1c":""}},mounted:function(){u.default.call("setTitle",{title:v})},methods:{onSlideChangeStart:function(e){var t=this;f||(f=!0,e.activeIndex>e.previousIndex&&e.activeIndex>=e.slides.length-2&&!d?setTimeout(function(){return new(o())(function(e,n){var i,r;return i=luna.urlParam.get("forestId"),o().resolve(c.default.rpc.queryRealTreePicRecommend({forestId:i,pageSize:6})).then(function(i){try{return r=i,r.realPictureDatas&&r.realPictureDatas.length>0&&(d=!0,t.$store.commit("pushInfoList",r.realPictureDatas)),f=!1,e()}catch(e){return n(e)}}.bind(this),n)}.bind(this))},17):f=!1,Tracert.click("c26160.d49234"))},onSlideChangeEnd:function(e){if(d){var t="";t=e.activeIndex===e.slides.length-1?"推荐":v,t!==m&&(u.default.call("setTitle",{title:t}),m=t)}},onRecommendReal:function(e){location.href=""+location.origin+location.pathname+"?forestName="+e.forestName+"&forestId="+e.forestPicInfos[0].forestId+"&index=0"},onImageViewer:function(e){u.default.call("imageViewer",{images:[{u:decodeURIComponent(e.djangoPicUrl),t:decodeURIComponent(e.rawPicUrl)}],init:0},function(e){console.log(e)})},touchstart:function(e,t){return new(o())(function(e,n){return clearInterval(this.Loop),this.Loop=setTimeout(function(){u.default.call("saveImage",{src:decodeURIComponent(t.djangoPicUrl),showActionSheet:!0})},1e3),e()}.bind(this))},clearLoop:function(){clearInterval(this.Loop)}}};return e});t.default=_},532:function(e,t){}});