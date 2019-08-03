<template>
	<view class="grace-padding" style="padding: 0 40upx;">
	
		<view class="grace-form" style="margin-top:50upx;">
			
			<form @submit="loginNow">
				<view class="inputView">
					
				
				<view class="grace-items  item-border">
					<view class="grace-label">
						<picker :value="pnpre" @change="changePre" :range="pnpres" name="pn_pre">
							<text>+{{pnpre}}</text>
						</picker>
					</view>
					<input type="number" name="pn" class="input" v-model="phoneno" placeholder="请输入手机号"></input>
				</view>
					<view class="grace-space-between" >
					<view class="grace-items" style="width:90%;">
						<view class="grace-label grace-center">密码</view>
						<m-input v-model="password1" type="password" displayable class="is-input1"  name="yzm" placeholder="请输入密码" />
					</view>
					
				</view >
				</view>
				<button form-type='submit' type='primary' style='background:#00C777; margin-top:100px;'>
					登录 <text class="grace-iconfont icon-arrow-right"></text>
				</button>
			</form>
		</view>
		<view class="grace-center" style="margin-top:20upx; line-height:50upx;" @tap="reg">
			还没有账号？点击注册
		</view>
		<!-- 第三方登录 -->
		 <view class="grace-title" style="margin-top:300px;">
			<view class="grace-h5 grace-blod grace-center" style='color:#00C777'>第三方登录</view>
		</view>
		<view class="grace-login-three" style="margin-top:8px;">
			<view class="grace-iconfont icon-weixin"></view>
			<view class="grace-iconfont icon-qq"></view>
			<view class="grace-iconfont icon-weibo"></view>
		</view>
	</view>
</template>
<script>
	import mInput from '../../components/m-input.vue';
var graceChecker = require("../../graceUI/graceChecker.js");
export default {
	data() {
		return {
			pnpre : '86',
			pnpres : ['86', '01', '11', '26', '520'],
			phoneno : '',
			password1:''
			
		}
	},
		components: {
	    mInput
	},

	onShow() {
	
	},
	methods:{
		changePre : function(e){
			this.pnpre = this.pnpres[e.detail.value];
		},
		loginNow : function(e){
			var myreg=/^[1][1,2,3,4,5,7,8,9][0-9]{9}$/;
			if (!myreg.test(this.phoneno)){
				uni.showToast({ title: '请正确填写手机号码', icon : "none"});
			    return false;
			}
			if(this.password1.length == 0){
				uni.showToast({
					title: '请输入密码',
					icon:"none",
					duration: 1500
				});
				return;
			}
			// 表单验证
			var rule = [
				{ name: "pn", checkType: "phoneno", errorMsg: "请填写正确的手机号" },
			
			];
			var formData = e.detail.value;
			var checkRes = graceChecker.check(formData, rule);
			// 验证通过
			if (checkRes) {
				var user = uni.getStorageSync("USER_INFO");
				if(this.password1 == user.password){
					uni.setStorageSync("LOGIN_FLAG",'true');
					uni.showToast({
						title: '登录成功',
						icon:'success',
						duration: 1500
					});
					setTimeout(function(){
						var user = uni.getStorageSync("USER_INFO");
						if(user.identity.length != 0)
						{
							uni.switchTab({ 
								url: '../tabbar/tabbar0'
							});
						}
						else{
							uni.navigateTo({
								url:'../checkId/checkId'
							})
						}
					},1500);
				}
				else{
					uni.showToast({
						title: '密码错误',
						icon:'none',
						duration: 1500
					});
					}
			} else {
				uni.showToast({ title: graceChecker.error, icon: "none" });
				return;
			}
		},
		reg : function(){
			uni.navigateTo({
				url:'../register/register'
			})
		}
	}
}
</script>
<style>
	.inputView{
		background-color: #FFFFFF;
		padding: 10upx 20upx;
		border-radius: 15upx;
	}
.item-border{border-bottom: 1px solid #E0E0E0 !important;}
.login-sendmsg-btn{border:1px solid #00C777 !important; background:none !important; color:#00C777 !important; width:100%; height:70upx; line-height:70upx; margin-top:6px; font-size:30upx !important;}
.grace-login-three{display:flex; justify-content:center; flex-wrap:nowrap;}
.grace-login-three view{width:50px; height:50px; line-height:50px; font-size:46px; color:#00C777; text-align:center; margin:8px 15px;}
</style>