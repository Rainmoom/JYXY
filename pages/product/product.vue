<template>
	<view class="page">
		<swiper class="grace-swiper" autoplay="true" indicator-dots indicator-color="rgba(255, 255, 255, 1)" indicator-active-color="#00B26A" style="height :290upx" interval="3000">
			<swiper-item v-for="(item, index) in product.imgs" :key="index">
				<navigator :url='item.path' :open-type="item.openType">
					<image :src='item.imgUrl' mode='widthFix'></image>
				</navigator>
			</swiper-item>
		</swiper>
		<view class="garce-padding grace-nowrap" style="background:#FFF; padding:30upx 2%;">
			<view class="grace-product-title">{{product.name}}</view>
			<view class="grace-product-share grace-iconfont icon-share3" @tap="share"></view>
		</view>
		<view class="grace-product-price garce-padding">
			￥{{product.price}}<text>￥{{product.priceMarket}}</text>
		</view>
		<view class="grace-product-desc">
			<text>运费 ￥0.00</text>
			<text>已售 21008 件</text>
			<text>浏览 36万次</text>
		</view>
		<view class="grace-product-menu">
			<view :class="[active == 1 ? 'active' : '']" @tap="showInfo">商品详情</view>
			<view :class="[active == 2 ? 'active' : '']" @tap="showComments">商品评论</view>
		</view>
		<!-- 详情 -->
		<view class="grace-product-info" :hidden="active == 2">
			<image :src="product.image" mode="widthFix"></image>
			
		</view>
		<!-- 评论 -->
		<view class="grace-product-info" :hidden="active == 1">
			<view class="grace-comment">
				<view class="grace-comment-list">
					<view class="grace-comment-face"></view>
					<view class="grace-comment-body">
						<view class="grace-comment-top">
							<text>用户1</text>
						</view>
						<view class="grace-comment-content">非常好的，速度很快！</view>
						<view class="grace-comment-date">
							<text>08/10 07:55</text>
						</view>
					</view>
				</view>
				<view class="grace-comment-list">
					<view class="grace-comment-face"></view>
					<view class="grace-comment-body">
						<view class="grace-comment-top">
							<text>客户002</text>
						</view>
						<view class="grace-comment-imgs">
							
						</view>
						<view class="grace-comment-content">非常好</view>
						<view class="grace-comment-date">
							<text>08/10 07:55</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height:60px;"></view>
		<!-- 底部 -->
		<view class="grace-footer">
			<view style="width:40%;" class="grace-nowrap">
				<view class="icons grace-iconfont icon-home" @tap="home"></view>
				<view class="icons grace-iconfont icon-star"></view>
			</view>
			<view class="grace-product-btn" style="background:#FFAA21;">加入购物车</view>
			<view class="grace-product-btn" @click="buyNow">立即购买</view>
		</view>
		<!-- 商品属性  start -->
		<view class="grace-mask" style="z-index:5;" v-if="attrIsShow">
			<view class="grace-product-attr" v-if="attrIsShow">
				<form @submit="attrSubmit" class="grace-form">
					<!-- 关闭按钮  -->
					<view class="grace-product-attr-close" @click="closeAttr">
						<text class="grace-iconfont icon-close2"></text>
					</view>
					<!-- 头部商品信息 -->
					<view class="grace-product-attr-info">
						<image src="../../static/imgs/logo.png" mode="widthFix"></image>
						<view class="title">
							{{product.name}}
							<text>\n库存 : 1999件</text>
						</view>
					</view>
					<!-- 属性列表区 -->
					<view style="height:calc(100% - 155px); overflow-y:auto;">
						<view class="grace-product-attr-list">
							<view class="title">品种</view>
							<view class="grace-select-tips">
								<radio-group @change="colorChange" name="color">
									<label v-for="(item, index) in colorTips" :key="index" :class="[item.checked ? 'grace-checked' : '']">
										<radio :value="item.value" :checked="item.checked"></radio> {{item.name}}
									</label>
								</radio-group>
							</view>
						</view>
						<view class="grace-product-attr-list">
							<view class="title">套餐类型</view>
							<view class="grace-select-tips">
								<radio-group @change="typeChange" name="type">
									<label v-for="(item, index) in typeTips" :key="index" :class="[item.checked ? 'grace-checked' : '']">
										<radio :value="item.value" :checked="item.checked"></radio> {{item.name}}
									</label>
								</radio-group>
							</view>
						</view>
						<view class="grace-items" style="margin-top:8px;">
							<view class="grace-label">购买数量</view>
							<!-- input 用于记录购买数量隐藏形式并参与表单提交 -->
							<input type="number" name="buynum" :value="buyNum" style="display:none;" />
							<graceNumberBox :value="buyNum" v-on:change="buyNumChange"></graceNumberBox>
						</view>
					</view>
					<view class="grace-product-attr-btn">
						<button type="warn" formType="submit">确定</button>
					</view>
				</form>
			</view>
		</view>
		<!-- 商品属性 end -->
	</view>
</template>
<script>
	import graceNumberBox from "../../graceUI/components/graceNumberBox.vue";
	export default {
		data() {
			return {
				product : {
					name: "",
					logo : "../../static/logo.png",
					imgs : [
						{imgUrl : '../../static/img/banner1.jpg'},
						{imgUrl : '../../static/img/banner2.jpg'},
						{imgUrl : '../../static/img/banner3.jpg'}
					],
					price : 3188,
					priceMarket : 3200,
					image:''
				},
				active:1,
				//属性
				attrIsShow : false, //属性界面是否隐藏
				attrData : null, // attrdata用于记录用户选择的属性
				colorTips : [
					{ name: '品种1', value: '灰色', checked: false },
					{ name: '品种2', value: '银色', checked: false}
				],
				typeTips : [
					{ name: '10斤', value: '10斤', checked: false },
					{ name: '20斤', value: '20斤', checked: false},
					{ name: '30斤', value: '30斤', checked: false}
				],
				buyNum : 1
			};
		},
		onLoad(e){
			var data = JSON.parse(e.data);
			console.log(data);
			this.product.name = data.title;
			this.product.price = data.jiage;
			this.product.image = data.img;
		},
		methods:{
			share: function () {
				uni.showToast({
					title: '分享',
					icon: "none"
				})
			},
			showComments : function(){
				this.active = 2;
			},
			showInfo: function () {
				this.active = 1;
			},
			home : function(){
				uni.switchTab({
					url:'../index/index'
				})
			},
			buyNow : function(){
				//打开属性视图
				this.attrIsShow = true;
			},
			//属性
			attrSubmit : function(e){
				//记录用户选择的属性
				this.attrData = e.detail.value;
				console.log(this.attrData);
				//关闭
				this.attrIsShow = false;
				//后续操作
				uni.showToast({
					title:"购买",
					icon:"none"
				})
			},
			closeAttr : function(){
				this.attrIsShow = false;
			},
			colorChange: function (e) {
				var checkVal = e.detail.value;
				for (var i = 0; i < this.colorTips.length; i++) {
					if (checkVal.indexOf(this.colorTips[i].value + '') != -1) {
						this.colorTips[i].checked = true;
					} else {
						this.colorTips[i].checked = false;
					}
				}
				this.colorTips = this.colorTips;
			},
			typeChange: function (e) {
				var checkVal = e.detail.value;
				for (var i = 0; i < this.typeTips.length; i++) {
					if (checkVal.indexOf(this.typeTips[i].value + '') != -1) {
						this.typeTips[i].checked = true;
					} else {
						this.typeTips[i].checked = false;
					}
				}
				this.typeTips = this.typeTips;
			},
			buyNumChange : function(e){
				this.buyNum = e[0];
			}
		},
		components:{
			graceNumberBox
		}
	}
</script>
<style>
	.page{
		width:100vw;
	}
page{background:#F2F3F4;}
</style>