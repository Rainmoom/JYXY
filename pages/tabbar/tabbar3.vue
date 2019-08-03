<template>
	<view class="view">
		<view class="caigou">
			<view class="input">
				<input placeholder="搜索" v-model="value" />
				<view class="grace-iconfont icon-search"></view>
			</view>

			<view class="list">
				<view class="item" v-for="(item,index) in dianData" :key="item" :data-item = 'index' @click="toShangPin">
					<view class="title">
						<text class="name">{{ item.name }}</text>
						<text class="guanzu" style="font-size:0.5rem;color: #888888;margin-left: 20upx;">{{ item.guanzu }}人关注</text>
					</view>
					<view class="img">
						<swiper class="swiper" indicator-dots="false" autoplay="true" :interval="item.interval" duration="1000" circular="true">
							<swiper-item><image src ="../../static/img/banner1.jpg"></image></swiper-item>
							<swiper-item><image src="../../static/img/banner2.jpg"></image></swiper-item>

						</swiper>
					</view>
					<view class="buttonview">
						<button type="primary" :data-index = 'index'  @tap.stop = "jiameng">加盟合作</button>
						<button type="warn" @tap.stop="guanzu()">关注</button>
					</view>
					<view class="jiameng" v-show="item.jiameng">
						<view>电话:{{item.phone}}</view>
						<view>地址:{{item.place}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
//54B421 13cd56
export default {
	data() {
		return {
			check: '1',
			dianData: [
				{
					name: '体验店1',
					guanzu: 2000,
					image: [],
					interval: 8000,
					phone:'15552123897',
					place:'山东省聊城市东昌府区',
					jiameng:false
				},
				{
					name: '体验店2',
					guanzu: 1200,
					image: [],
					interval: 5000,
					phone:'17852261511',
					place:'山东省济南市',
					jiameng:false
				},
				{
					name: '体验店3',
					guanzu: 800,
					image: [],
					interval: 6000,
					phone:'1506970825',
					place:'山东省青岛市',
					jiameng:false
				},
				{
					name: '体验店4',
					guanzu: 800,
					image: [],
					interval: 9000,
					phone:'1506970825',
					place:'山东省青岛市',
					jiameng:false
				},
				{
					name: '体验店5',
					guanzu: 800,
					image: [],
					interval: 4000,
					phone:'1506970825',
					place:'山东省青岛市'
				},
				{
					name: '体验店6',
					guanzu: 800,
					image: [],
					interval: 7000,
					phone:'1506970825',
					place:'山东省青岛市',
					jiameng:false
				}
			]
		};
	},
	methods: {
		jiameng(e)
		{
			var index = e.currentTarget.dataset.index;
			this.dianData[index].jiameng = !this.dianData[index].jiameng;
		},
		guanzu()
		{
			uni.showToast({
				title:'关注成功',
			})
		},
		toShangPin(e){
			console.log(e);
			var index = e.currentTarget.dataset.item;
			var data = JSON.stringify(this.dianData[index]);
			uni.navigateTo({
				url:"../waterfall/waterfall?data="+data
			})
		}
	}
};
</script>

<style>

button {
	width: 40%;
	height: 50upx;
	font-size: 0.6rem;
}
.jiameng{
		display:flex;
		margin:20upx auto;
		flex-direction:row;
		justify-content: space-between;
	}
.buttonview {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.swiper {
	width: 95%;
	height: 200upx;
	margin: 10upx auto;
	border-radius: 15upx;
}
image {
	height: 100%;
	width: 100%;
}
.list {
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 50upx;
}
.item {
	display: flex;
	flex-direction: column;
	padding: 10upx;
	border:3upx #E6E7E9 solid;
}
.title {
	display: flex;
	flex-direction: row;
	align-items: flex-end;
}
.mycontent {
	width: 100vw;
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
	border: 5upx rgb(230, 230, 230) solid;
}
input {
	width: 80%;
	height: 80upx;
}
.view {
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.caigou {
	width: 95vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50upx;
	background: #ffffff;
	border-radius: 15upx;
}
.title-view {
	width: 100%;
	margin: 10upx auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.title-text1 {
	display: block;
	padding: 10upx 80upx;
	border: 2upx #54b421 solid;
	border-right: none;
	border-top-left-radius: 10upx;
	border-bottom-left-radius: 10upx;
	color: #54b421;
}
.active {
	color: #ffffff;
	background-color: #54b421;
}
.title-text2 {
	display: block;
	padding: 10upx 80upx;
	border: 2upx #54b421 solid;
	border-left: none;
	border-top-right-radius: 10upx;
	border-bottom-right-radius: 10upx;
}
.msg-list {
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	margin-top: 20upx;
	background-color: #ffffff;
	border-radius: 15upx;
	padding: 10upx 20upx;
}
.msg-item {
	width: 90%;
	height: 100upx;
	margin-top: 20upx;
	display: flex;
	flex-direction: row;
}
.msg-item > image {
	width: 80upx;
	height: 80upx;
	margin-right: 20upx;
}
</style>
