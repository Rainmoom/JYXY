<template>
	<view class="page">
		<view class="input">
			<input placeholder="搜索" v-model="value" />
			<view class="grace-iconfont icon-search" @tap="search()"></view>
		</view>
		<view class="list" v-show = 'listShow'>
			<view class="item" v-for="i in listData" :key = "i">
				<image :src="i.icon" mode=""></image>
				<view class="text">
					<text style = "font-siza:0.6rem">{{i.name}}</text>
						<text class="grace-iconfont icon-position"><text>{{i.place}}</text></text>
						<text style = "font-siza:0.6rem">预售期：{{i.time1}}</text>
						<text style = "font-siza:0.6rem">采摘期：{{i.time2}}</text>
				</view>
			</view>
		</view>
		<view v-show = '!listShow' class="nodata">暂无数据</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: '草莓',
			listShow:'true',
			listData: [
			{ icon: '../../static/img/caomei1.jpg', name: '**采摘园', place: '山东省聊城市东昌府区',time1:'2019年5月11日' ,time2:'2019年6月1日'},
			{ icon: '../../static/img/caomei2.jpg', name: '***采摘园', place: '山东省济南市长清区',time1:'2019年5月21日' ,time2:'2019年6月11日' }, 
			{ icon: '../../static/img/caomei3.jpg', name: '**采摘园', place: '山东省青岛市黄岛区',time1:'2019年6月17日' ,time2:'2019年6月30日' }, 
			{ icon: '../../static/img/caomei4.jpg', name: '**采摘园', place: '山东省聊城市阳谷县' ,time1:'2019年6月10日' ,time2:'2019年6月15日'},
			{ icon: '../../static/img/caomei5.jpg', name: '**采摘园', place: '山东省聊城市东昌府区' ,time1:'2019年5月13日' ,time2:'2019年5月21日'},
			{ icon: '../../static/img/caomei6.jpg', name: '**采摘园', place: '山东省青岛市黄岛区',time1:'2019年5月18日' ,time2:'2019年6月1日' }, 
			{ icon: '../../static/img/caomei2.jpg', name: '***采摘园', place: '山东省济南市长清区',time1:'2019年5月17日' ,time2:'2019年5月21日' },
			{ icon: '../../static/img/caomei1.jpg', name: '**采摘园', place: '山东省聊城市阳谷县',time1:'2019年5月19日' ,time2:'2019年5月28日' }]
		};
	},
	onLoad() {
		var icon = plus.nativeObj.View.getViewById('icon');
		if (icon) {
			setTimeout(function() {
				icon.close(); 
			}, 250);
		}
	},
	methods: {
		search() {
			if(this.value == '草莓')
			{
				this.listShow = true;
			}
			else{
				this.listShow = false;
			}
		}
	}
};
</script>

<style>
.page {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.grace-iconfont{
	font-size: 0.6rem;
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
.list {
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	padding: 20upx;
	margin-top: 50upx;
}
.item{
	width: 320upx;
	height: 350upx;

	margin: 20upx;
	display: flex;
	flex-direction:column;
	align-items: center;
}
image{
	width: 310upx;
	height: 220upx;
	background-color:#000000;
	border-radius: 10upx;
	
}
.text{
	display: flex;
	flex-direction:column;
	
}
.nodata{
	margin-top: 50upx;
	text-align:center;
	}
</style>
