<template>
	<view style="width: 100vw;">
		<view class="header">
			<view class="userinfo">
				<view class="face"><image class="userFace" src="../../static/img/user.png"></image></view>
				<view  class="info">
					<view v-show="haslogin" class="username">{{ userinfo.phone }}</view>
					<view v-show="haslogin" class="username">{{ userinfo.name }}</view>
					<view v-show="haslogin" class="username">{{ userinfo.identity }}</view>
				</view>
				<view class="login-view">
					<button v-show="!haslogin" class="login" @tap="login()" style="background-color: #2FBF79;">登录</button>
					<button  v-show="!haslogin" class="login" @tap="register()">注册</button>
				</view>
			</view>
			<view class="setting"><image src="../../../static/wode/setting.png"></image></view>
		</view>
		<view class="orders">
			<view class="box">
				<view class="label" v-for="(row, index) in orderTypeLise" :key="row.name" hover-class="hover" @tap="toOrderType(index)">
					<view class="icon">
						<view class="badge" v-if="row.badge > 0">{{ row.badge }}</view>
						<image :src="'../../static/wode/' + row.icon"></image>
					</view>
					{{ row.name }}
				</view>
			</view>
		</view>
		<view class="list" v-for="(list, list_i) in severList" :key="list_i">
			<view class="li" v-for="(li, li_i) in list" @tap="toPage(list_i, li_i)" v-bind:class="{ noborder: li_i == list.length - 1 }" hover-class="hover" :key="li.name">
				<view class="icon"><image :src="'../../static/wode/sever/' + li.icon"></image></view>
				<view class="text">{{ li.name }}</view>
				<image class="to" src="../../../static/wode/to.png"></image>
			</view>
		</view>
		<view style="width: 70%;margin: 60upx auto;"><button type="warn" @tap="exit()">退出登录</button></view>
	</view>
</template>
<script>
	var bitmap1 = null;
export default {
	data() {
		return {
			haslogin: false,
			userinfo: {},
			orderTypeLise: [
				//name-标题 icon-图标 badge-角标
				{ name: '待付款', icon: 'l1.png', badge: 0 },
				{ name: '待发货', icon: 'l2.png', badge: 0 },
				{ name: '待收货', icon: 'l3.png', badge: 0 },
				{ name: '待评价', icon: 'l4.png', badge: 0 },
				{ name: '我的认养', icon: 'l5.png', badge: 0 }
			],
			severList: [
				[{ name: '账户积分', icon: 'quan.png' }, { name: '我的认养', icon: 'renw.png' }, { name: '我的收藏', icon: 'point.png' }],
				[
					{ name: '意见反馈', icon: 'mingxi.png' },
					{ name: '申诉', icon: 'choujiang.png' },
					{ name: '收货地址', icon: 'addr.png' },
					{ name: '银行卡', icon: 'bank.png' },
					{ name: '设置', icon: 'security.png' },
					{ name: '在线客服', icon: 'kefu.png' }
				]
			]
		}
	},
	onShow() {
		/* var icon = plus.nativeObj.View.getViewById("icon");
		if (icon) {
			setTimeout(function(){
				icon.show();
			},250)
		} */
		var loginflag = uni.getStorageSync('LOGIN_FLAG');
		if (loginflag.length != 0) {
			var user = uni.getStorageSync('USER_INFO');
			this.userinfo = user;
			this.haslogin = true;
		} else {
			this.haslogin = false;
		}
	},
/* 		onShow: function(options) {
		
		bitmap1 = new plus.nativeObj.Bitmap('bmp1');
		bitmap1.load('static/img/plus.png', function() {
		});
		this.createtab();
	}, */
	methods: {
		init() {
			//用户信息
			/*
			this.userinfo={
				face:'../../../static/wode/face.jpeg',
				username:"VIP会员10240",
				integral:"1435"
			}		
			*/
		},
		//用户点击订单类型
		toOrderType(index){
			uni.showToast({title: this.orderTypeLise[index].name});
		},
		//用户点击列表项
		toPage(list_i,li_i){
			uni.showToast({title: this.severList[list_i][li_i].name});
		},
		login() {
			/* var icon = plus.nativeObj.View.getViewById("icon");
			if (icon) {
				setTimeout(function(){
					icon.close(); */
					uni.navigateTo({
						url: '../login/login'
					});
				/* },250)
			} */
			
		},
		register() {
			/* var icon = plus.nativeObj.View.getViewById("icon");
			if (icon) {
				setTimeout(function(){
					icon.close(); */
					uni.navigateTo({
						url: '../register/register'
					});
			/* 	},250)
			}
			 */
		},
		exit() {
			/* uni.removeStorageSync('LOGIN_FLAG');
			var icon = plus.nativeObj.View.getViewById("icon");
			if (icon) {
				setTimeout(function(){
					icon.close(); */
					uni.navigateTo({
						url: '../login/login'
					});
				/* },250)
			} */
			
		},
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

<style lang="scss">
page {
	background-color: #fff;
}
.header {
	background-color: #0faeff;
	width: 96%;
	height: 30vw;
	padding: 0 4%;
	display: flex;
	align-items: center;
	.userinfo {
		width: 90%;
		display: flex;
		.face {
			flex-shrink: 0;
			width: 15vw;
			height: 15vw;
			image {
				margin-top: 20upx;
				width: 100%;
				height: 100%;
				border-radius: 100%;
				background-color: honeydew;
			}
		}
		.login-view {
			display: flex;
			flex-direction: row;
		}

		.info {
			margin-top:-20upx;
			display: flex;
			flex-flow: wrap;
			height: 150upx;
			padding-left: 30upx;
			.username {
				width: 100%;
				color: #fff;
				font-size: 40upx;
			}
			.integral {
				display: flex;
				align-items: center;
				padding: 0 20upx;
				height: 30upx;
				color: #fff;
				background-color: rgba(0, 0, 0, 0.1);
				border-radius: 20upx;
				font-size: 24upx;
			}
		}
	}
	.setting {
		flex-shrink: 0;
		width: 6vw;
		height: 6vw;
		image {
			width: 100%;
			height: 100%;
		}
	}
}
.hover {
	background-color: eee;
}
.orders {
	background-color: #0faeff;
	width: 96%;
	height: 11vw;
	padding: 0 4%;
	margin-bottom: calc(11vw + 40upx);
	display: flex;
	align-items: flex-start;
	border-radius: 0 0 100% 100%;
	margin-top: -3upx;
	.box {
		width: 98%;
		padding: 0 1%;
		height: 22vw;
		background-color: #fefefe;
		border-radius: 24upx;
		box-shadow: 0 0 20upx rgba(0, 0, 0, 0.15);
		margin-bottom: 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
		.label {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-flow: wrap;
			width: 100%;
			height: 16vw;
			color: #666666;
			font-size: 26upx;
			.icon {
				position: relative;
				width: 7vw;
				height: 7vw;
				margin: 0 1vw;
				.badge {
					position: absolute;
					width: 4vw;
					height: 4vw;
					background-color: #ec6d2c;
					top: -1vw;
					right: -1vw;
					border-radius: 100%;
					font-size: 20upx;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					z-index: 10;
				}
				image {
					width: 7vw;
					height: 7vw;
					z-index: 9;
				}
			}
		}
	}
}
.list {
	width: 100%;
	border-bottom: solid 26upx #f1f1f1;
	.li {
		width: 92%;
		height: 100upx;
		padding: 0 4%;
		border-bottom: solid 1upx #e7e7e7;
		display: flex;
		align-items: center;
		&.noborder {
			border-bottom: 0;
		}
		.icon {
			flex-shrink: 0;
			width: 50upx;
			height: 50upx;
			image {
				width: 50upx;
				height: 50upx;
			}
		}
		.text {
			padding-left: 20upx;
			width: 100%;
			color: #666;
		}
		.to {
			flex-shrink: 0;
			width: 40upx;
			height: 40upx;
		}
	}
}
.login {
	padding: 5upx 50upx;
	margin: 20upx;
}
</style>
