<template>
	<view class="list">
		<view class="input" >
			<input v-model="name" placeholder="输入昵称" />
		</view>
		<view data-index = '0' :class="active[0] ? 'active' : 'item'" @tap="change">
			<image src="../../static/img/yonghu.png"></image>
			<text>普通用户</text>
		</view>
		<view  data-index = '1' :class="active[1] ? 'active' : 'item'" @tap="change">
			<image src="../../static/img/nongmin.png"></image>
			<text>农民</text>
		</view>
		<view  data-index = '2' :class="active[2] ? 'active' : 'item'" @tap="change">
			<image src="../../static/img/shop.png"></image>
			<text>经销商</text>
		</view>
		<view><button type="primary" @click="submit">确定</button></view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			active: [false,false,false],
			index:null,
			identity:['普通用户','农民','经销商'],
			name:''
		}
	},
	methods:{
		change:function(e){
			var index = e.currentTarget.dataset.index;
			this.active = [false,false,false];
			this.active[index] = true;
			this.index = index;
		},
		submit:function(){
			if(this.index == null){
				uni.showToast({
					title: '请选择用户',
					icon:'none',
					duration: 1500
				});
			}
			else{
				var user = uni.getStorageSync('USER_INFO');
				user.identity = this.identity[this.index];
				user.name = this.name;
				console.log(JSON.stringify(user));
				uni.setStorageSync("USER_INFO",user);
				uni.switchTab({
					url:'../tabbar/tabbar0'
				})
			}
		}
	}
};
</script>

<style>
.list {
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;

	margin-top: 80upx;
}
.item {
	width: 70%;
	height: 200upx;
	background-color: #ffffff;
	border-radius: 20upx;
	margin-top: 40upx;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 30upx;
	padding-right: 100upx;
	text-align: center;
}
.active {
	width: 70%;
	height: 200upx;
	background-color: #ffffff;
	border-radius: 20upx;
	margin-top: 40upx;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 30upx;
	padding-right: 100upx;
	text-align: center;
	background-color: #10aeff;
	color: #ffffff;
}
.input{
	width: 75%;
	height: 80upx;
	background-color: #FFFFFF;
	border-radius: 15upx;
	padding: 0 20upx;
	display: flex;
	flex-direction: row;
	align-items: center;
	}
input{
	width: 100%;
}
image {
	width: 100upx;
	height: 100upx;
}
text {
	width: 300upx;
	font-size: 1.2rem;
	font-weight: 800;
}
button{
	width: 500upx;
	margin-top: 100upx;
}
</style>
