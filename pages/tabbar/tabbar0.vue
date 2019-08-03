<template>
	<view class="page">
		<view class="navigateBar">
			<view class="menu">
				<image class="menu-icno" src="../../static/img/menu.png"></image>
				<text>分类</text>
			</view>
			<view class="serach">
				<input class="serach-input" confirm-type="search" :placeholder="placeholder" v-model="search" />
				<view class="grace-iconfont icon-search" @tap="searchData()"></view>
			</view>
			<view class="notice">
				<view class="grace-iconfont icon-pinglun"></view>
				<text>通知</text>
			</view>
		</view>

		<view class="page-section-spacing">
			<swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="100" circular="true">
				<swiper-item><image src="../../static/img/banner1.jpg"></image></swiper-item>
				<swiper-item><image src="../../static/img/banner2.jpg"></image></swiper-item>
				<!-- <swiper-item><image src="../../static/img/banner3.png"></image></swiper-item> -->
			</swiper>
		</view>
		<view class="tuijian">
			<view class="title">农产品推荐</view>
			<view class="list">
				<view class="item" @tap="chaizhai()">
					<image src="../../static/img/caizhai.jpg"></image>
					<text>草莓</text>
				</view>
				<view class="item">
					<image src="../../static/img/zhixiao.jpg"></image>
					<text>苹果</text>
				</view>
				<view class="item">
					<image src="../../static/img/yushou.jpg"></image>
					<text>小麦</text>
				</view>
			</view>
		</view>

		<!-- <view class="zixun">
			<view class="titleView">
				<text class="title">最新资讯</text>
				<text>
					更多
					<text class="grace-iconfont icon-arrow-right"></text>
				</text>
			</view>
			<view class="list">
				<view class="item">
					<text class="text">2019年土豆多少钱一斤？土豆怎么做好吃？</text>
					<image src="../../static/img/tudou.jpg"></image>
				</view>
				<view class="item">
					<text class="text">2019年鸡肉多少钱一斤？鸡肉怎么做好吃？</text>
					<image src="../../static/img/jirou.jpg"></image>
				</view>
			</view>
		</view> -->
		<view class="title-view">
			<text class="title-text1" :class="check == '1'?'active':''" @tap="() => {this.check = '1'}">购买</text>
			<text class="title-text2" :class="check == '2'?'active':''" @tap="() => {this.check = '2'}">出售</text>
		</view>
		<view class="refreshDmo" v-show="check == '1'">
			<view class="item" v-for="(item, index) in demoDate" :key="index" :data-index = 'item' @tap="details">
				<view>
					<image :src="item.img" style="width: 180upx;height:180upx;border-radius: 10upx;margin-left: 10upx;"></image>
				</view>
				<view class="info" style="width: 500upx;display: flex;flex-direction: column;align-items: flex-start;">
					<text style="text-align: left;font-size: 1rem;font-weight: 600;"><text v-show="item.youxuan" style="color:#FFFFFF;background-color: #FF0036;border-radius: 20upx;font-size: 0.8rem;margin: 10upx;padding:2upx 10upx;">优选</text>
					{{item.title}}</text>
					<view style="margin: 10upx;" >
						<text v-for="i in item.arr" :key = "i" style="background:#FFFFFF;color:#E2231A;padding: 2upx 10upx;border:1px #E2231A solid;margin: 10upx;border-radius: 10upx;">{{i}}</text>
					</view>
					<view style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
						
						<text style="font-size: 1.3rem; color: #FF0036;display: block; margin: 0 10upx;">{{item.jiage}}</text><text style="color: #FF0036; margin: 0 10upx;">元/{{item.danwei}}</text>
						<text style="color: #888888; margin: 0 10upx;">已成交{{item.chengjiao}}单</text><text style="color: #888888; margin: 0 10upx;">{{item.zuijin}}小时前</text>
					</view>
					<view style="color: #888888;display: flex;flex-direction: row;justify-content: flex-end;">
						<text style="margin: 0 15upx;margin-left: 200upx;">{{item.place1}}</text><text>{{item.place2}}</text>
					</view>
				</view>
			</view>
		</view>
		<view v-show="check == '2'">
			<view class="title">
				<text>采购需求</text>
			</view>
			<view   class="check">
				<view  v-for="(i,index) in checkData" :key = 'i' :data-index = 'i.index' @click="change">
					<text  :class="i.checkitem?'checkitem2':'checkitem1'">{{i.text}}</text>
				</view>
			</view>
			
			<view  class="list">
				<view class="item" v-for="i in data" :key = 'i' style="border-bottom: 5upx rgb(230,230,230) solid;">
					<view class="title" style="text-align: left;">{{i.name}}</view>
					<view style="display: flex;flex-direction: row;margin-left: 10upx;">
						<text v-for="j in i.tips" :key = 'j' style="background:#FFFFFF;color:#E2231A;padding: 2upx 10upx;border:1px #E2231A solid;margin: 10upx;border-radius: 10upx;">{{j}}</text>
					</view>
					<view style="margin: 10upx 20upx; color:#5E5E5E ;">期望货源地：{{i.huoyuan}}</view>
					<view style="margin: 10upx 20upx; color:#5E5E5E ;">采购收货地：{{i.shouhuo}}</view>
					<view style="display: flex;flex-direction: row;align-items: center;justify-content: space-between;">
						<text style="font-size: 1.2rem; color: #E2231A;margin-left: 20upx;margin-bottom: 20upx;">{{i.shuliang}}</text>
						<text  style=" border-radius: 50upx; border:1upx #E2231A solid;background-color:#FFFFFF; font-size: 0.9rem; color: #E2231A;margin-right: 50upx;margin-bottom: 20upx;padding:10upx 20upx;">详谈</text>
					</view>
				</view>
			</view>
		</view>
			<graceLoading :loadingType="loadingType"></graceLoading>
	</view>
</template>

<script>
import graceLoading from '../../graceUI/components/graceLoading.vue';
var bitmap1 = null;
var page = 1; //模拟一个页码
var _self;

export default {
	data() {
		return {
			placeholder:'土豆',
			search: '',
			loadingType: 0,
			isEnd: false,
			loading: '',
			check:'1',
			demoDate: [{
				img:'../../static/img/pingguo1.jpg',
				title:"好看又好吃的烟台苹果5.0斤一箱",
				youxuan:true,
				arr:["包邮","准时发货","价格保障"],
				jiage:'39.5',
				danwei:'箱',
				chengjiao:8,
				zuijin:1,
				place1:'山东省烟台市',
				place2:'福山区'
			},{
				img:'../../static/img/tuji.jpg',
				title:"放养土鸡，绿色无公害养殖！",
				youxuan:false,
				arr:["准时发货"],
				jiage:'56',
				danwei:'只',
				chengjiao:22,
				zuijin:3,
				place1:'山东省青岛',
				place2:'崂山区'
			},
			{
				img:'../../static/img/tudou2.jpg',
				title:"今年新上市土豆.....量大从优",
				youxuan:false,
				arr:["包邮","价格保障"],
				jiage:'1.00',
				danwei:'斤',
				chengjiao:3,
				zuijin:10,
				place1:'山东省济南',
				place2:'长清区'
			},{
				img:'../../static/img/pingguo2.jpg',
				title:"特价包邮正宗红富士苹果",
				youxuan:true,
				arr:["包邮","准时发货","价格保障"],
				jiage:'5.00',
				danwei:'斤',
				chengjiao:56,
				zuijin:1,
				place1:'山东省济宁市',
				place2:'梁山'
			},{
				img:'../../static/img/lajiao.jpg',
				title:"超辣干辣椒，5斤包邮",
				youxuan:false,
				arr:["包邮","准时发货"],
				jiage:'12.00',
				danwei:'斤',
				chengjiao:78,
				zuijin:1,
				place1:'山东省潍坊市',
				place2:'寿光'
			},
			],
			checkData:[
					{
						index:0,
						text:'辣椒',
						checkitem:false
					},
					{
						index:1,
						text:'苹果',
						checkitem:false
					},
					{
						index:2,
						text:'鸡',
						checkitem:false
					},
					{
						index:3,
						text:'羊',
						checkitem:false
					},
					{
						index:4,
						text:'土豆',
						checkitem:false
					},
					{
						index:5,
						text:'草莓',
						checkitem:false
					},
					{
						index:6,
						text:'柑橘',
						checkitem:false
					},
					{
						index:7,
						text:'大豆',
						checkitem:false
					}
				],
				data:[{
					name:'辣椒',
					tips:['单次采购','认证'],
					huoyuan:'全国',
					shouhuo:'山东省聊城市东昌府区',
					shuliang:'8000斤',
					
				},{
					name:'辣椒',
					tips:['每天采购','认证'],
					huoyuan:'全国',
					shouhuo:'山东省济南市天桥区',
					shuliang:'1000斤',
					
				},{
					name:'土豆',
					tips:['按月采购','认证'],
					huoyuan:'山东省',
					shouhuo:'山东省济宁市邹城区',
					shuliang:'1200斤',
					
				},{
					name:'大豆',
					tips:['单次采购','认证'],
					huoyuan:'全国',
					shouhuo:'山东省聊城市东昌府区',
					shuliang:'1000斤',
					
				},{
					name:'鸡',
					tips:['单次采购','认证'],
					huoyuan:'全国',
					shouhuo:'山东省聊城市东昌府区',
					shuliang:'600只',
					
				},
				{
					name:'草莓',
					tips:['单次采购','认证'],
					huoyuan:'全国',
					shouhuo:'山东省聊城市东昌府区',
					shuliang:'4000斤',
					
				},
				{
					name:'草莓',
					tips:['单次采购','认证'],
					huoyuan:'全国',
					shouhuo:'山东省聊城市东昌府区',
					shuliang:'8000斤',
					
				},
				{
					name:'柑橘',
					tips:['单次采购','认证'],
					huoyuan:'全国',
					shouhuo:'山东省聊城市东昌府区',
					shuliang:'8000斤',
					
				},
				{
					name:'羊',
					tips:['单次采购','认证'],
					huoyuan:'全国',
					shouhuo:'山东省聊城市东昌府区',
					shuliang:'200头',
					
				}],
				
			
		};
	},
	onShow() {
		page = 1;
		this.loading = false;
		this.loadingType = 0;
		this.isEnd = false;
	},
	onReachBottom: function() {
		//避免多次触发
		if (this.loadingType == 1 || this.isEnd) {
			return;
		}
		this.loadMoreFunc();
	},
	onLoad() {
		var loginflag = uni.getStorageSync("LOGIN_FLAG");
		if(loginflag.length == 0)
		{
				uni.navigateTo({
					url:'../login/login' 
				})
		}
	},
/* 	onShow: function(options) {
		
		bitmap1 = new plus.nativeObj.Bitmap('bmp1');
		bitmap1.load('static/img/plus.png', function() {
		});
		this.createtab();
	}, */
	components: { 
		graceLoading
	},
	methods: {
		details:function(e)
		{
			var data = e.currentTarget.dataset.index;
			
			var index = JSON.stringify(data);
			
			uni.navigateTo({
				url:"../product/product?data="+ index
			})
		},
		searchData(){
			if(this.search.length != 0)
			{
				console.log(this.search)
				var e = {
					serach:this.search
				}
				e = JSON.stringify(e)
				
						uni.navigateTo({
							url:'../serach/serach?serach=' + e
						})
				
				
				
			}
			else{
				var search = this.placeholder;
				var e = {
					serach:search
				}
				e = JSON.stringify(e)
						var icon = plus.nativeObj.View.getViewById('icon');
				
						uni.navigateTo({
							url:'../serach/serach?serach=' + e
						})
				
				
			}
		},
		chaizhai(){
			 
					uni.navigateTo({
						url:'../chaizhai/chaizhai'
					})
			
			
			
		},
		//加载更多时执行的函数
		loadMoreFunc() {
			//如果page > 2 代表加载了全部数据
			if (page > 1) {
				this.isEnd = true;
				this.loadingType = 2;
				return;
			}
			//展示loading
			this.loadingType = 1;
			//追加数据(延迟1秒 模拟网络请求)
			var that = this;
			setTimeout(function() {
				that.loading = false;
				var newData = that.getArrRandomly(that.demoDate);
				that.demoDate = that.demoDate.concat(newData);
				//累加页码
				page++;
				that.loadingType = 0;
			}, 1000);
		},
		getArrRandomly(arr) {
			var len = arr.length;
			for (var i = 0; i < len; i++) {
				var randomIndex = Math.floor(Math.random() * (len - i));
				var itemAtIndex = arr[randomIndex];
				arr[randomIndex] = arr[i];
				arr[i] = itemAtIndex;
			}
			return arr;
		},  
		change:function(e)
		{
			this.checkData.forEach(e =>{
				e.checkitem = false;
			})
			var a =e.currentTarget.dataset.index;
			this.checkData[a].checkitem = true;
		}
		/* createtab: function() {
			
			var leftPos = Math.ceil((plus.screen.resolutionWidth - 60) / 2);
			var view = new plus.nativeObj.View('icon', {
				bottom: '11px',
				left: leftPos + 'px',
				width: '60px',
				height: '60px'
			});
			view.drawBitmap(bitmap1, {
				tag: 'font',
				id: 'icon',
				src: '../../static/img/logo.png',
				position: {
					top: '0px',
					left: '5px',
					width: '50px',
					height: '100%'
				}
			});
			view.addEventListener(
				'click',
				function(e) {
					uni.switchTab({
						url: './tabbar2'
					});
				},
				false
			);
			view.show();
		} */
	}
};
</script>

<style>
	page{
		display: flex;
		flex-direction:column;
		align-items: center;
	}
.page {
	
}
.navigateBar {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin: 0 auto;
	background-color: rgb(245, 245, 245);
	border-bottom: 1upx rgb(200, 200, 200) solid;

	padding-top: 70upx;
	padding-bottom: 20upx;
}
.refreshDmo {
	width: 95%;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	align-items: center;
	
}
.refreshDmo .item {
	background: #ffffff;
	margin: 0 auto;
	border-radius: 15upx;
	width: 100%;
	text-align: center;
	height: 300upx;
	margin: 10upx 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	
}
.zixun .list .item .text {
	display: block;
	width: 500upx;
	height: 120upx;
}
.zixun .list .item image {
	width: 100upx;
	height: 100upx;
	border-radius: 15upx;
	margin-top: -40upx;
}
.zixun .list .item {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 20upx;
}
.zixun .list {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20upx;
}
.zixun .titleView {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}
.zixun .title {
	font-size: 1.3rem;
	font-weight: 600;
	padding: 0 10upx;
	color: #e2231a;
}
.zixun {
	width: 93%;
	height: 300upx;
	margin: 20upx auto;
	border-radius: 15upx;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 10upx;
	margin-top: 10upx;
	padding: 10upx;
}
.tuijian {
	width: 93%;
	height: 300upx;
	margin: 10upx auto;
	border-radius: 15upx;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 10upx;
	margin-top: 10upx;
	padding: 0 10upx;
}
.tuijian .title {
	font-size: 1.5rem;
	font-weight: 600;
	margin-left: 10upx;
	color: #e2231a;
}
.tuijian .list {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	
}
.tuijian .list .item {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}
.tuijian .list .item image {
	width: 150upx;
	height: 130upx;
	border-radius: 10upx;
	margin: 10upx;
}
.swiper {
	width: 95%;
	height: 300upx;
	margin: 10upx auto;
	border-radius: 15upx;
}
.swiper image {
	height: 100%;
	width: 100%;
	border-radius: 15upx;
}
.menu {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100upx;
	height: 100upx;
	font-size: 0.6rem;
}
.menu-icno {
	width: 80upx;
	height: 80upx;
}
.notice {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100upx;
	height: 90upx;
	margin-top: 10upx;
	text-align: center;
	font-size: 0.6rem;
}
.grace-iconfont {
	font-size: 1.1rem;
}
.serach {
	width: 520upx;
	height: 80upx;
	background-color: rgb(239, 234, 238);
	border-radius: 40upx;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 0 20upx;
	margin-top: -10upx;
}

.serach-input {
	width: 90%;
	height: 100%;
	text-align: center;
}

.icon-search {
	color: rgb(200, 200, 200);
}

.title-view{
	width: 100%;
	margin: 10upx auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.title-text1{
	display:block;
	padding: 10upx 150upx;
	border:2upx #0FAEFF solid;
	border-right: none;
	border-top-left-radius: 10upx;
	border-bottom-left-radius: 10upx;
	color: #0FAEFF;
}
.active{
	color:#FFFFFF;
	background-color:#0FAEFF;
	
}
.title-text2{
	display:block;
	padding: 10upx 150upx;
	border:2upx #0FAEFF solid;
	border-left: none;
	border-top-right-radius: 10upx;
	border-bottom-right-radius: 10upx;
}
.list{
		width: 100%;
		display: flex;
		flex-direction:column;
		
	}
	.item{
		width: 100%;
		display: flex;
		flex-direction:column;
		justify-content: flex-start;
		margin-top: 20upx;
	}
	.check{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	.checkitem1{
		padding: 10upx 30upx;
		margin: 20upx;
		font-size: 0.8rem;
		border-radius:25upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(230,230,230);
	}
	.checkitem2{
		padding: 10upx 30upx;
		margin: 20upx;
		font-size: 0.8rem;
		border-radius:25upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color:#2FBF79;
		color: #FFFFFF;
	}
.caigou{
	width: 95vw;
	display: flex;
	flex-direction:column;
	align-items: center;
	margin-top: 50upx;
	background: #FFFFFF;
	border-radius: 15upx;
}
.title{
	width: 100%;
	font-size: 1rem;
	font-weight: 700;
	align-items: center;
	padding-top:30upx;
	padding-left: 20upx;
}
</style>
