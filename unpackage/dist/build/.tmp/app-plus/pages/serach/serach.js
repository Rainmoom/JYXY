(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/serach/serach"],{1660:function(e,t,a){"use strict";var i=a("f420"),n=a.n(i);n.a},2304:function(e,t,a){"use strict";a.r(t);var i=a("cf45"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);t["default"]=n.a},8616:function(e,t,a){"use strict";a("64b0");var i=r(a("b0ce")),n=r(a("cbf5"));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},c7ae:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"page"},[a("view",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{placeholder:"搜索",eventid:"3062bc86-0"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),a("view",{staticClass:"grace-iconfont icon-search",attrs:{eventid:"3062bc86-1"},on:{tap:function(t){e.search()}}})]),a("view",{directives:[{name:"show",rawName:"v-show",value:"土豆"==e.value,expression:"value == '土豆'"}],staticClass:"refreshDmo"},e._l(e.demoDate,function(t,i){return a("view",{key:i,staticClass:"item"},[a("view",[a("image",{staticStyle:{width:"180rpx",height:"180rpx","border-radius":"10rpx","margin-left":"10rpx"},attrs:{src:t.img}})]),a("view",{staticClass:"info",staticStyle:{width:"500rpx",display:"flex","flex-direction":"column","align-items":"flex-start"}},[a("text",{staticStyle:{"text-align":"left","font-size":"1rem","font-weight":"600"}},[a("text",{directives:[{name:"show",rawName:"v-show",value:t.youxuan,expression:"item.youxuan"}],staticStyle:{color:"#FFFFFF","background-color":"#FF0036","border-radius":"20rpx","font-size":"0.8rem",margin:"10rpx",padding:"2rpx 10rpx"}},[e._v("优选")]),e._v(e._s(t.title))]),a("view",{staticStyle:{margin:"10rpx"}},e._l(t.arr,function(t,i){return a("text",{key:t,staticStyle:{background:"#FFFFFF",color:"#E2231A",padding:"2rpx 10rpx",border:"1rpx #E2231A solid",margin:"10rpx","border-radius":"10rpx"}},[e._v(e._s(t))])})),a("view",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-between","align-items":"center"}},[a("text",{staticStyle:{"font-size":"1.3rem",color:"#FF0036",display:"block",margin:"0 10rpx"}},[e._v(e._s(t.jiage))]),a("text",{staticStyle:{color:"#FF0036",margin:"0 10rpx"}},[e._v("元/"+e._s(t.danwei))]),a("text",{staticStyle:{color:"#888888",margin:"0 10rpx"}},[e._v("已成交"+e._s(t.chengjiao)+"单")]),a("text",{staticStyle:{color:"#888888",margin:"0 10rpx"}},[e._v(e._s(t.zuijin)+"小时前")])]),a("view",{staticStyle:{color:"#888888",display:"flex","flex-direction":"row","justify-content":"flex-end"}},[a("text",{staticStyle:{margin:"0 15rpx","margin-left":"200rpx"}},[e._v(e._s(t.place1))]),a("text",[e._v(e._s(t.place2))])])])])})),a("view",{directives:[{name:"show",rawName:"v-show",value:"土豆"!=e.value,expression:"value != '土豆'"}],staticClass:"nodata"},[e._v("暂无数据")])])},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},cbf5:function(e,t,a){"use strict";a.r(t);var i=a("c7ae"),n=a("2304");for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);a("1660");var o=a("2877"),c=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports},cf45:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(a("096b"));function i(e){return e&&e.__esModule?e:{default:e}}var n=1,r={data:function(){return{value:"",demoDate:[{img:"../../static/img/tudou1.jpg",title:"新鲜小土豆农家自种",youxuan:!0,arr:["包邮","准时发货","价格保障"],jiage:"22.8",danwei:"10斤",chengjiao:8,zuijin:1,place1:"山东省烟台市",place2:"福山区"},{img:"../../static/img/tudou2.jpg",title:"新鲜大土豆",youxuan:!1,arr:["准时发货"],jiage:"2.00",danwei:"斤",chengjiao:22,zuijin:3,place1:"山东省青岛",place2:"崂山区"},{img:"../../static/img/tudou3.jpg",title:"今年新上市土豆.....量大从优",youxuan:!1,arr:["包邮","价格保障"],jiage:"1.00",danwei:"斤",chengjiao:3,zuijin:10,place1:"山东省济南",place2:"长清区"},{img:"../../static/img/tudou4.jpg",title:"农家自种土豆，非转基因",youxuan:!0,arr:["包邮","准时发货","价格保障"],jiage:"2.50",danwei:"斤",chengjiao:56,zuijin:1,place1:"山东省济宁市",place2:"梁山"},{img:"../../static/img/tudou5.jpg",title:"大土豆新鲜，10斤包邮",youxuan:!1,arr:["包邮","准时发货"],jiage:"20.00",danwei:"斤",chengjiao:78,zuijin:1,place1:"山东省潍坊市",place2:"寿光"}]}},onLoad:function(e){var t=plus.nativeObj.View.getViewById("icon");t&&setTimeout(function(){t.close()},250),e=JSON.parse(e.serach),this.value=e.serach},onReachBottom:function(){1==this.loadingType||this.isEnd||this.loadMoreFunc()},methods:{search:function(){},loadMoreFunc:function(){if(n>1)return this.isEnd=!0,void(this.loadingType=2);this.loadingType=1;var e=this;setTimeout(function(){e.loading=!1;var t=e.getArrRandomly(e.demoDate);e.demoDate=e.demoDate.concat(t),n++,e.loadingType=0},1e3)},getArrRandomly:function(e){for(var t=e.length,a=0;a<t;a++){var i=Math.floor(Math.random()*(t-a)),n=e[i];e[i]=e[a],e[a]=n}return e}}};t.default=r},f420:function(e,t,a){}},[["8616","common/runtime","common/vendor"]]]);