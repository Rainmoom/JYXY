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
					<view class="grace-space-between" >
						<view class="grace-items" style="width:90%;">
							<view class="grace-label grace-center">确认密码</view>
							<m-input v-model="password2" type="password" displayable class="is-input1" name="yzm" placeholder="请再次输入密码" />
						</view>
						
					</view >
				</view>
				<button form-type='submit' type='primary' style='background:#00C777; margin-top:100px;'>
					注册 <text class="grace-iconfont icon-arrow-right"></text>
				</button>
			</form>
		</view>
		
		
	</view>
</template>
<script>
var graceChecker = require("../../graceUI/graceChecker.js");
import mInput from '../../components/m-input.vue';
export default {
	data() {
		return {
			pnpre : '86',
			pnpres : ['86', '01', '11', '26', '520'],
			phoneno : '',
			password1:'',
			password2:''
		}
	},
	components: {
	    mInput
	},
	onLoad() {
		
	},
	methods:{
		loginWithWx : function(){
			uni.showToast({
				title:"请完善登录功能", icon:"none"
			})
		},
		changePre : function(e){
			this.pnpre = this.pnpres[e.detail.value];
		},
		loginNow : function(e){
			var myreg=/^[1][1,2,3,4,5,7,8,9][0-9]{9}$/;
			if (!myreg.test(this.phoneno)){
				uni.showToast({ title: '请正确填写手机号码', icon : "none"});
			    return false;
			}
			// 表单验证
			var rule = [
				{ name: "pn", checkType: "phoneno", errorMsg: "请填写正确的手机号" },
				
			];
			var formData = e.detail.value;
			var checkRes = graceChecker.check(formData, rule);
			// 验证通过
			if(this.password1.length == 0 || this.password2 == 0 )
			{
				uni.showToast({
					title: '请输入密码',
					icon:'none',
					duration: 1500
				});
				return;
			}
			if(this.password1 != this.password2)
			{
				uni.showToast({
					title: '两次密码不一致',
					icon:"none",
					duration: 1500
				});
				return;
			}
			this.reg();
			
		},
		getVCode : function(){
			
			// 手机号码为 :  this.phoneno
			// vcodeBtnName 可以阻止按钮被多次点击 多次发送 return 会终止函数继续运行
			if (this.vcodeBtnName != '获取验证码' && this.vcodeBtnName != '重新发送'){return ;}
			this.vcodeBtnName =  "发送中...";
			// 与后端 api 交互，发送验证码 【自己写的具体业务代码】
			// 假设发送成功，给用户提示
			uni.showToast({ title: '短信已发送，请注意查收', icon : "none"});
			// 倒计时
			this.countNum = 120;
			this.countDownTimer = setInterval(function(){this.countDown();}.bind(this), 1000);
		},
		countDown : function(){
			if (this.countNum < 1){
			  clearInterval(this.countDownTimer);
			  this.vcodeBtnName = "重新发送";
			  return ;
			}
			this.countNum--;
			this.vcodeBtnName =  this.countNum + '秒重发';
		},
		reg : function(){
			var user = {
				phone:this.phoneno,
				password:this.password1,
				userId:0
			}
			uni.setStorageSync("LOGIN_FLAG",'true');
			uni.setStorageSync("USER_INFO",user);
			uni.navigateTo({
				url:'../checkId/checkId'
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