(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar0"],{"1f7b":function(t,e,i){},3194:function(t,e,i){"use strict";i.r(e);var a=i("4d7e"),n=i("f784");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("3e01");var r=i("2877"),c=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"3e01":function(t,e,i){"use strict";var a=i("1f7b"),n=i.n(a);n.a},"4d7e":function(t,e,i){"use strict";var a=function(){var t=this,e=this,i=e.$createElement,a=e._self._c||i;return a("view",{staticClass:"page"},[a("view",{staticClass:"navigateBar"},[e._m(0),a("view",{staticClass:"serach"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"serach-input",attrs:{"confirm-type":"search",placeholder:e.placeholder,eventid:"62ece513-0"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),a("view",{staticClass:"grace-iconfont icon-search",attrs:{eventid:"62ece513-1"},on:{tap:function(t){e.searchData()}}})]),e._m(1)]),a("view",{staticClass:"page-section-spacing"},[a("swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true",autoplay:"true",interval:"3000",duration:"100",circular:"true"}},[a("swiper-item",{attrs:{mpcomid:"62ece513-0"}},[a("image",{attrs:{src:"../../static/img/banner1.jpg"}})]),a("swiper-item",{attrs:{mpcomid:"62ece513-1"}},[a("image",{attrs:{src:"../../static/img/banner2.jpg"}})])],1)],1),a("view",{staticClass:"tuijian"},[a("view",{staticClass:"title"},[e._v("农产品推荐")]),a("view",{staticClass:"list"},[a("view",{staticClass:"item",attrs:{eventid:"62ece513-2"},on:{tap:function(t){e.chaizhai()}}},[a("image",{attrs:{src:"../../static/img/caizhai.jpg"}}),a("text",[e._v("草莓")])]),e._m(2),e._m(3)])]),a("view",{staticClass:"title-view"},[a("text",{staticClass:"title-text1",class:"1"==e.check?"active":"",attrs:{eventid:"62ece513-3"},on:{tap:function(){t.check="1"}}},[e._v("购买")]),a("text",{staticClass:"title-text2",class:"2"==e.check?"active":"",attrs:{eventid:"62ece513-4"},on:{tap:function(){t.check="2"}}},[e._v("出售")])]),a("view",{directives:[{name:"show",rawName:"v-show",value:"1"==e.check,expression:"check == '1'"}],staticClass:"refreshDmo"},e._l(e.demoDate,function(t,i){return a("view",{key:i,staticClass:"item",attrs:{"data-index":t,eventid:"62ece513-5-"+i},on:{tap:e.details}},[a("view",[a("image",{staticStyle:{width:"180rpx",height:"180rpx","border-radius":"10rpx","margin-left":"10rpx"},attrs:{src:t.img}})]),a("view",{staticClass:"info",staticStyle:{width:"500rpx",display:"flex","flex-direction":"column","align-items":"flex-start"}},[a("text",{staticStyle:{"text-align":"left","font-size":"1rem","font-weight":"600"}},[a("text",{directives:[{name:"show",rawName:"v-show",value:t.youxuan,expression:"item.youxuan"}],staticStyle:{color:"#FFFFFF","background-color":"#FF0036","border-radius":"20rpx","font-size":"0.8rem",margin:"10rpx",padding:"2rpx 10rpx"}},[e._v("优选")]),e._v(e._s(t.title))]),a("view",{staticStyle:{margin:"10rpx"}},e._l(t.arr,function(t,i){return a("text",{key:t,staticStyle:{background:"#FFFFFF",color:"#E2231A",padding:"2rpx 10rpx",border:"1rpx #E2231A solid",margin:"10rpx","border-radius":"10rpx"}},[e._v(e._s(t))])})),a("view",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center"}},[a("text",{staticStyle:{"font-size":"1.3rem",color:"#FF0036",display:"block",margin:"0 10rpx"}},[e._v(e._s(t.jiage))]),a("text",{staticStyle:{color:"#FF0036",margin:"0 10rpx"}},[e._v("元/"+e._s(t.danwei))]),a("text",{staticStyle:{color:"#888888",margin:"0 10rpx"}},[e._v("已成交"+e._s(t.chengjiao)+"单")]),a("text",{staticStyle:{color:"#888888",margin:"0 10rpx"}},[e._v(e._s(t.zuijin)+"小时前")])]),a("view",{staticStyle:{color:"#888888",display:"flex","flex-direction":"row","justify-content":"flex-end"}},[a("text",{staticStyle:{margin:"0 15rpx","margin-left":"200rpx"}},[e._v(e._s(t.place1))]),a("text",[e._v(e._s(t.place2))])])])])})),a("view",{directives:[{name:"show",rawName:"v-show",value:"2"==e.check,expression:"check == '2'"}]},[e._m(4),a("view",{staticClass:"check"},e._l(e.checkData,function(t,i){return a("view",{key:t,attrs:{"data-index":t.index,eventid:"62ece513-6-"+i},on:{click:e.change}},[a("text",{class:t.checkitem?"checkitem2":"checkitem1"},[e._v(e._s(t.text))])])})),a("view",{staticClass:"list"},e._l(e.data,function(t,i){return a("view",{key:t,staticClass:"item",staticStyle:{"border-bottom":"5rpx rgb(230,230,230) solid"}},[a("view",{staticClass:"title",staticStyle:{"text-align":"left"}},[e._v(e._s(t.name))]),a("view",{staticStyle:{display:"flex","flex-direction":"row","margin-left":"10rpx"}},e._l(t.tips,function(t,i){return a("text",{key:t,staticStyle:{background:"#FFFFFF",color:"#E2231A",padding:"2rpx 10rpx",border:"1rpx #E2231A solid",margin:"10rpx","border-radius":"10rpx"}},[e._v(e._s(t))])})),a("view",{staticStyle:{margin:"10rpx 20rpx",color:"#5E5E5E"}},[e._v("期望货源地："+e._s(t.huoyuan))]),a("view",{staticStyle:{margin:"10rpx 20rpx",color:"#5E5E5E"}},[e._v("采购收货地："+e._s(t.shouhuo))]),a("view",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},[a("text",{staticStyle:{"font-size":"1.2rem",color:"#E2231A","margin-left":"20rpx","margin-bottom":"20rpx"}},[e._v(e._s(t.shuliang))]),a("text",{staticStyle:{"border-radius":"50rpx",border:"1rpx #E2231A solid","background-color":"#FFFFFF","font-size":"0.9rem",color:"#E2231A","margin-right":"50rpx","margin-bottom":"20rpx",padding:"10rpx 20rpx"}},[e._v("详谈")])])])}))]),a("graceLoading",{attrs:{loadingType:e.loadingType,mpcomid:"62ece513-2"}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"menu"},[i("image",{staticClass:"menu-icno",attrs:{src:"../../static/img/menu.png"}}),i("text",[t._v("分类")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"notice"},[i("view",{staticClass:"grace-iconfont icon-pinglun"}),i("text",[t._v("通知")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"item"},[i("image",{attrs:{src:"../../static/img/zhixiao.jpg"}}),i("text",[t._v("苹果")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"item"},[i("image",{attrs:{src:"../../static/img/yushou.jpg"}}),i("text",[t._v("小麦")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"title"},[i("text",[t._v("采购需求")])])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},d37a:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("096b"));function n(t){return t&&t.__esModule?t:{default:t}}var s=1,r={data:function(){return{placeholder:"土豆",search:"",loadingType:0,isEnd:!1,loading:"",check:"1",demoDate:[{img:"../../static/img/pingguo1.jpg",title:"好看又好吃的烟台苹果5.0斤一箱",youxuan:!0,arr:["包邮","准时发货","价格保障"],jiage:"39.5",danwei:"箱",chengjiao:8,zuijin:1,place1:"山东省烟台市",place2:"福山区"},{img:"../../static/img/tuji.jpg",title:"放养土鸡，绿色无公害养殖！",youxuan:!1,arr:["准时发货"],jiage:"56",danwei:"只",chengjiao:22,zuijin:3,place1:"山东省青岛",place2:"崂山区"},{img:"../../static/img/tudou2.jpg",title:"今年新上市土豆.....量大从优",youxuan:!1,arr:["包邮","价格保障"],jiage:"1.00",danwei:"斤",chengjiao:3,zuijin:10,place1:"山东省济南",place2:"长清区"},{img:"../../static/img/pingguo2.jpg",title:"特价包邮正宗红富士苹果",youxuan:!0,arr:["包邮","准时发货","价格保障"],jiage:"5.00",danwei:"斤",chengjiao:56,zuijin:1,place1:"山东省济宁市",place2:"梁山"},{img:"../../static/img/lajiao.jpg",title:"超辣干辣椒，5斤包邮",youxuan:!1,arr:["包邮","准时发货"],jiage:"12.00",danwei:"斤",chengjiao:78,zuijin:1,place1:"山东省潍坊市",place2:"寿光"}],checkData:[{index:0,text:"辣椒",checkitem:!1},{index:1,text:"苹果",checkitem:!1},{index:2,text:"鸡",checkitem:!1},{index:3,text:"羊",checkitem:!1},{index:4,text:"土豆",checkitem:!1},{index:5,text:"草莓",checkitem:!1},{index:6,text:"柑橘",checkitem:!1},{index:7,text:"大豆",checkitem:!1}],data:[{name:"辣椒",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"辣椒",tips:["每天采购","认证"],huoyuan:"全国",shouhuo:"山东省济南市天桥区",shuliang:"1000斤"},{name:"土豆",tips:["按月采购","认证"],huoyuan:"山东省",shouhuo:"山东省济宁市邹城区",shuliang:"1200斤"},{name:"大豆",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"1000斤"},{name:"鸡",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"600只"},{name:"草莓",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"4000斤"},{name:"草莓",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"柑橘",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"8000斤"},{name:"羊",tips:["单次采购","认证"],huoyuan:"全国",shouhuo:"山东省聊城市东昌府区",shuliang:"200头"}]}},onShow:function(){s=1,this.loading=!1,this.loadingType=0,this.isEnd=!1},onReachBottom:function(){1==this.loadingType||this.isEnd||this.loadMoreFunc()},onLoad:function(){var e=t.getStorageSync("LOGIN_FLAG");0==e.length&&t.navigateTo({url:"../login/login"})},components:{graceLoading:a.default},methods:{details:function(e){var i=e.currentTarget.dataset.index,a=JSON.stringify(i);t.navigateTo({url:"../product/product?data="+a})},searchData:function(){if(0!=this.search.length){console.log(this.search);var e={serach:this.search};e=JSON.stringify(e),t.navigateTo({url:"../serach/serach?serach="+e})}else{var i=this.placeholder;e={serach:i};e=JSON.stringify(e);plus.nativeObj.View.getViewById("icon");t.navigateTo({url:"../serach/serach?serach="+e})}},chaizhai:function(){t.navigateTo({url:"../chaizhai/chaizhai"})},loadMoreFunc:function(){if(s>1)return this.isEnd=!0,void(this.loadingType=2);this.loadingType=1;var t=this;setTimeout(function(){t.loading=!1;var e=t.getArrRandomly(t.demoDate);t.demoDate=t.demoDate.concat(e),s++,t.loadingType=0},1e3)},getArrRandomly:function(t){for(var e=t.length,i=0;i<e;i++){var a=Math.floor(Math.random()*(e-i)),n=t[a];t[a]=t[i],t[i]=n}return t},change:function(t){this.checkData.forEach(function(t){t.checkitem=!1});var e=t.currentTarget.dataset.index;this.checkData[e].checkitem=!0}}};e.default=r}).call(this,i("6e42")["default"])},f003:function(t,e,i){"use strict";i("64b0");var a=s(i("b0ce")),n=s(i("3194"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},f784:function(t,e,i){"use strict";i.r(e);var a=i("d37a"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a}},[["f003","common/runtime","common/vendor"]]]);