<template>
		<view class="page">
		<view class="input">
			<input placeholder="搜索" v-model="value" />
			<view class="grace-iconfont icon-search" @tap="search()"></view>
		</view>
		
		<view class="refreshDmo" v-show="value == '土豆'">
			<view class="item" v-for="(item, index) in demoDate" :key="index">
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
		<view v-show="value != '土豆'" class="nodata">暂无数据</view>
	</view>
</template>

<script>
	import graceLoading from '../../graceUI/components/graceLoading.vue';
	var page = 1; //模拟一个页码
	var _self;
	
	export default{
		data(){
			return{
			value:'',
				demoDate: [{
				img:'../../static/img/tudou1.jpg',
				title:"新鲜小土豆农家自种",
				youxuan:true,
				arr:["包邮","准时发货","价格保障"],
				jiage:'22.8',
				danwei:'10斤',
				chengjiao:8,
				zuijin:1,
				place1:'山东省烟台市',
				place2:'福山区'
			},{
				img:'../../static/img/tudou2.jpg',
				title:"新鲜大土豆",
				youxuan:false,
				arr:["准时发货"],
				jiage:'2.00',
				danwei:'斤',
				chengjiao:22,
				zuijin:3,
				place1:'山东省青岛',
				place2:'崂山区'
			},
			{
				img:'../../static/img/tudou3.jpg',
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
				img:'../../static/img/tudou4.jpg',
				title:"农家自种土豆，非转基因",
				youxuan:true,
				arr:["包邮","准时发货","价格保障"],
				jiage:'2.50',
				danwei:'斤',
				chengjiao:56,
				zuijin:1,
				place1:'山东省济宁市',
				place2:'梁山'
			},{
				img:'../../static/img/tudou5.jpg',
				title:"大土豆新鲜，10斤包邮",
				youxuan:false,
				arr:["包邮","准时发货"],
				jiage:'20.00',
				danwei:'斤',
				chengjiao:78,
				zuijin:1,
				place1:'山东省潍坊市',
				place2:'寿光'
			},
			]
			}
		},
		onLoad(e) {
			var icon = plus.nativeObj.View.getViewById('icon');
			if (icon) {
				setTimeout(function() {
					icon.close();
				}, 250);
			}
			e = JSON.parse(e.serach);
			this.value = e.serach;
		},
				onReachBottom: function() {
				//避免多次触发
				if (this.loadingType == 1 || this.isEnd) {
					return;
				}
				this.loadMoreFunc();
			},
		methods:{
			search(){
					
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
			}
		}
		
	}
</script>

<style>
	.page {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.input {
		width: 80%;
		height: 80upx;
		background-color: #ffffff;
		border-radius: 15upx;
		padding: 0 20upx;
		margin-top: 50upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	input {
		width: 80%;
		height: 80upx;
	}
	.refreshDmo {
		
		width: 95%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		align-items: center;
		margin-top: 50upx;
		
	}
	.refreshDmo .item {
		background: #ffffff;
		margin: 0 auto;
		border-radius: 15upx;
		width: 100%;
		text-align: center;
		height: 280upx;
		margin: 10upx 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding:10upx 10upx
		
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
		.nodata{
			margin-top: 50upx;
			text-align:center;
			}
</style>
