(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-product"],{"0022":function(t,e,i){"use strict";var a=i("151e"),n=i.n(a);n.a},"0239":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"graceNumberBox",props:{disabled:{type:Boolean,default:!1},value:{type:Number,default:0},index:{type:Number,default:0},maxNum:{type:Number,default:20},minNum:{type:Number,default:1}},data:function(){return{inputNumber:this.value}},watch:{value:function(t){this.inputNumber=t},inputNumber:function(t){t>this.maxNum&&(t=this.maxNum,this.inputNumber=t),t<this.minNum&&(t=this.minNum,this.inputNumber=t,console.log(11)),this.$emit("change",[t,this.index])}},methods:{add:function(){var t=this.inputNumber+1;this.inputNumber=Number(t)},reduce:function(){var t=this.inputNumber-1;this.inputNumber=t},blur:function(t){this.inputNumber=Number(t.detail.value)}}};e.default=a},"151e":function(t,e,i){var a=i("35de");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3d337f48",a,!0,{sourceMap:!1,shadowMode:!1})},1781:function(t,e,i){"use strict";i.r(e);var a=i("a626"),n=i("8454");for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);i("0022");var s=i("2877"),u=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"45a8d7ca",null);e["default"]=u.exports},"35c5":function(t,e,i){"use strict";i.r(e);var a=i("992b"),n=i("e22a");for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);i("5ccd");var s=i("2877"),u=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"042865fa",null);e["default"]=u.exports},"35de":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".page[data-v-45a8d7ca]{width:100vw}uni-page-body[data-v-45a8d7ca]{background:#f2f3f4}body.?%PAGE?%[data-v-45a8d7ca]{background:#f2f3f4}",""])},"4b89":function(t,e,i){var a=i("d8dd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("e8f81cf4",a,!0,{sourceMap:!1,shadowMode:!1})},"5ccd":function(t,e,i){"use strict";var a=i("4b89"),n=i.n(a);n.a},8454:function(t,e,i){"use strict";i.r(e);var a=i("9522"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);e["default"]=n.a},9522:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("35c5"));function n(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{product:{name:"",logo:"../../static/logo.png",imgs:[{imgUrl:"../../static/img/banner1.jpg"},{imgUrl:"../../static/img/banner2.jpg"},{imgUrl:"../../static/img/banner3.jpg"}],price:3188,priceMarket:3200,image:""},active:1,attrIsShow:!1,attrData:null,colorTips:[{name:"品种1",value:"灰色",checked:!1},{name:"品种2",value:"银色",checked:!1}],typeTips:[{name:"10斤",value:"10斤",checked:!1},{name:"20斤",value:"20斤",checked:!1},{name:"30斤",value:"30斤",checked:!1}],buyNum:1}},onLoad:function(t){var e=JSON.parse(t.data);console.log(e),this.product.name=e.title,this.product.price=e.jiage,this.product.image=e.img},methods:{share:function(){uni.showToast({title:"分享",icon:"none"})},showComments:function(){this.active=2},showInfo:function(){this.active=1},home:function(){uni.switchTab({url:"../index/index"})},buyNow:function(){this.attrIsShow=!0},attrSubmit:function(t){this.attrData=t.detail.value,console.log(this.attrData),this.attrIsShow=!1,uni.showToast({title:"购买",icon:"none"})},closeAttr:function(){this.attrIsShow=!1},colorChange:function(t){for(var e=t.detail.value,i=0;i<this.colorTips.length;i++)-1!=e.indexOf(this.colorTips[i].value+"")?this.colorTips[i].checked=!0:this.colorTips[i].checked=!1;this.colorTips=this.colorTips},typeChange:function(t){for(var e=t.detail.value,i=0;i<this.typeTips.length;i++)-1!=e.indexOf(this.typeTips[i].value+"")?this.typeTips[i].checked=!0:this.typeTips[i].checked=!1;this.typeTips=this.typeTips},buyNumChange:function(t){this.buyNum=t[0]}},components:{graceNumberBox:a.default}};e.default=c},"992b":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"grace-number-box"},[i("v-uni-view",{staticClass:"doBtn",on:{click:function(e){e=t.$handleEvent(e),t.reduce(e)}}},[t._v("-")]),i("v-uni-input",{attrs:{type:"number",value:t.inputNumber,disabled:t.disabled},on:{blur:function(e){e=t.$handleEvent(e),t.blur(e)}}}),i("v-uni-view",{staticClass:"doBtn",on:{click:function(e){e=t.$handleEvent(e),t.add(e)}}},[t._v("+")])],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},a626:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-swiper",{staticClass:"grace-swiper",staticStyle:{height:"290upx"},attrs:{autoplay:"true","indicator-dots":"","indicator-color":"rgba(255, 255, 255, 1)","indicator-active-color":"#00B26A",interval:"3000"}},t._l(t.product.imgs,function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-navigator",{attrs:{url:t.path,"open-type":t.openType}},[i("v-uni-image",{attrs:{src:t.imgUrl,mode:"widthFix"}})],1)],1)}),1),i("v-uni-view",{staticClass:"garce-padding grace-nowrap",staticStyle:{background:"#FFF",padding:"30upx 2%"}},[i("v-uni-view",{staticClass:"grace-product-title"},[t._v(t._s(t.product.name))]),i("v-uni-view",{staticClass:"grace-product-share grace-iconfont icon-share3",on:{click:function(e){e=t.$handleEvent(e),t.share(e)}}})],1),i("v-uni-view",{staticClass:"grace-product-price garce-padding"},[t._v("￥"+t._s(t.product.price)),i("v-uni-text",[t._v("￥"+t._s(t.product.priceMarket))])],1),i("v-uni-view",{staticClass:"grace-product-desc"},[i("v-uni-text",[t._v("运费 ￥0.00")]),i("v-uni-text",[t._v("已售 21008 件")]),i("v-uni-text",[t._v("浏览 36万次")])],1),i("v-uni-view",{staticClass:"grace-product-menu"},[i("v-uni-view",{class:[1==t.active?"active":""],on:{click:function(e){e=t.$handleEvent(e),t.showInfo(e)}}},[t._v("商品详情")]),i("v-uni-view",{class:[2==t.active?"active":""],on:{click:function(e){e=t.$handleEvent(e),t.showComments(e)}}},[t._v("商品评论")])],1),i("v-uni-view",{staticClass:"grace-product-info",attrs:{hidden:2==t.active}},[i("v-uni-image",{attrs:{src:t.product.image,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"grace-product-info",attrs:{hidden:1==t.active}},[i("v-uni-view",{staticClass:"grace-comment"},[i("v-uni-view",{staticClass:"grace-comment-list"},[i("v-uni-view",{staticClass:"grace-comment-face"}),i("v-uni-view",{staticClass:"grace-comment-body"},[i("v-uni-view",{staticClass:"grace-comment-top"},[i("v-uni-text",[t._v("用户1")])],1),i("v-uni-view",{staticClass:"grace-comment-content"},[t._v("非常好的，速度很快！")]),i("v-uni-view",{staticClass:"grace-comment-date"},[i("v-uni-text",[t._v("08/10 07:55")])],1)],1)],1),i("v-uni-view",{staticClass:"grace-comment-list"},[i("v-uni-view",{staticClass:"grace-comment-face"}),i("v-uni-view",{staticClass:"grace-comment-body"},[i("v-uni-view",{staticClass:"grace-comment-top"},[i("v-uni-text",[t._v("客户002")])],1),i("v-uni-view",{staticClass:"grace-comment-imgs"}),i("v-uni-view",{staticClass:"grace-comment-content"},[t._v("非常好")]),i("v-uni-view",{staticClass:"grace-comment-date"},[i("v-uni-text",[t._v("08/10 07:55")])],1)],1)],1)],1)],1),i("v-uni-view",{staticStyle:{height:"60px"}}),i("v-uni-view",{staticClass:"grace-footer"},[i("v-uni-view",{staticClass:"grace-nowrap",staticStyle:{width:"40%"}},[i("v-uni-view",{staticClass:"icons grace-iconfont icon-home",on:{click:function(e){e=t.$handleEvent(e),t.home(e)}}}),i("v-uni-view",{staticClass:"icons grace-iconfont icon-star"})],1),i("v-uni-view",{staticClass:"grace-product-btn",staticStyle:{background:"#FFAA21"}},[t._v("加入购物车")]),i("v-uni-view",{staticClass:"grace-product-btn",on:{click:function(e){e=t.$handleEvent(e),t.buyNow(e)}}},[t._v("立即购买")])],1),t.attrIsShow?i("v-uni-view",{staticClass:"grace-mask",staticStyle:{"z-index":"5"}},[t.attrIsShow?i("v-uni-view",{staticClass:"grace-product-attr"},[i("v-uni-form",{staticClass:"grace-form",on:{submit:function(e){e=t.$handleEvent(e),t.attrSubmit(e)}}},[i("v-uni-view",{staticClass:"grace-product-attr-close",on:{click:function(e){e=t.$handleEvent(e),t.closeAttr(e)}}},[i("v-uni-text",{staticClass:"grace-iconfont icon-close2"})],1),i("v-uni-view",{staticClass:"grace-product-attr-info"},[i("v-uni-image",{attrs:{src:"../../static/imgs/logo.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.product.name)),i("v-uni-text",[t._v("\\n库存 : 1999件")])],1)],1),i("v-uni-view",{staticStyle:{height:"calc(100% - 155px)","overflow-y":"auto"}},[i("v-uni-view",{staticClass:"grace-product-attr-list"},[i("v-uni-view",{staticClass:"title"},[t._v("品种")]),i("v-uni-view",{staticClass:"grace-select-tips"},[i("v-uni-radio-group",{attrs:{name:"color"},on:{change:function(e){e=t.$handleEvent(e),t.colorChange(e)}}},t._l(t.colorTips,function(e,a){return i("v-uni-label",{key:a,class:[e.checked?"grace-checked":""]},[i("v-uni-radio",{attrs:{value:e.value,checked:e.checked}}),t._v(t._s(e.name))],1)}),1)],1)],1),i("v-uni-view",{staticClass:"grace-product-attr-list"},[i("v-uni-view",{staticClass:"title"},[t._v("套餐类型")]),i("v-uni-view",{staticClass:"grace-select-tips"},[i("v-uni-radio-group",{attrs:{name:"type"},on:{change:function(e){e=t.$handleEvent(e),t.typeChange(e)}}},t._l(t.typeTips,function(e,a){return i("v-uni-label",{key:a,class:[e.checked?"grace-checked":""]},[i("v-uni-radio",{attrs:{value:e.value,checked:e.checked}}),t._v(t._s(e.name))],1)}),1)],1)],1),i("v-uni-view",{staticClass:"grace-items",staticStyle:{"margin-top":"8px"}},[i("v-uni-view",{staticClass:"grace-label"},[t._v("购买数量")]),i("v-uni-input",{staticStyle:{display:"none"},attrs:{type:"number",name:"buynum",value:t.buyNum}}),i("graceNumberBox",{attrs:{value:t.buyNum},on:{change:function(e){e=t.$handleEvent(e),t.buyNumChange(e)}}})],1)],1),i("v-uni-view",{staticClass:"grace-product-attr-btn"},[i("v-uni-button",{attrs:{type:"warn",formType:"submit"}},[t._v("确定")])],1)],1)],1):t._e()],1):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},d8dd:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".grace-number-box[data-v-042865fa]{width:%?220?%;height:%?65?%;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;overflow:hidden;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.grace-number-box .doBtn[data-v-042865fa]{width:%?65?%;line-height:%?60?%;height:%?65?%;text-align:center;font-size:%?50?%;color:#333}.grace-number-box uni-input[data-v-042865fa]{display:block;width:%?90?%!important;height:%?35?%!important;line-height:%?35?%!important;color:#333;padding:%?15?% 0!important;background:#f3f4f5;text-align:center!important}",""])},e22a:function(t,e,i){"use strict";i.r(e);var a=i("0239"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);e["default"]=n.a}}]);