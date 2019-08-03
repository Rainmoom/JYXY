<template>
	<view class="view">
		<view class="caigou">
			<view class="title">
				<text>农场监控</text>
			</view>
			<view>
				<image src="../../static/img/jiankong1.jpg" style="width: 680upx;height: 350upx;margin: 20upx;border-radius: 15upx;"></image>
			</view>
			<view class="title">
				<text>农场1</text>
			</view>
			<view>
				<video 
						src="http://szpaasalihlsgw.lechange.cn:9001/LCO/5F015DBPAG8D8C2/0/0/20190801164101/dev_20190801164101_imm60ql48404e345.m3u8" 
						poster="https://resource-public.oss-cn-hangzhou.aliyuncs.com/open/develop/source_1474275114783.png" 
						  style="width: 680upx; height: 345upx;"
						></video>
			</view>
			<view class="title">
				<text>农场2</text>
			</view>
			<view>
				<video 
						src="http://szpaasalihlsgw.lechange.cn:9001/LCO/5F015DBPAG8D8C2/0/0/20190801164101/dev_20190801164101_imm60ql48404e345.m3u8" 
						poster="https://resource-public.oss-cn-hangzhou.aliyuncs.com/open/develop/source_1474275114783.png" 
						  style="width: 680upx; height: 345upx;"
						></video>
			</view>
			<view class="title">
				<text>农场3</text>
			</view>
			<view>
				<video 
						src="http://szpaasalihlsgw.lechange.cn:9001/LCO/5F015DBPAG8D8C2/0/0/20190801164101/dev_20190801164101_imm60ql48404e345.m3u8" 
						poster="https://resource-public.oss-cn-hangzhou.aliyuncs.com/open/develop/source_1474275114783.png" 
						  style="width: 680upx; height: 345upx;"
						></video>
			</view>
			<view class="title">
				<text>农场4</text>
			</view>
			<view>
				<video 
						src="http://szpaasalihlsgw.lechange.cn:9001/LCO/5F015DBPAG8D8C2/0/0/20190801164101/dev_20190801164101_imm60ql48404e345.m3u8" 
						poster="https://resource-public.oss-cn-hangzhou.aliyuncs.com/open/develop/source_1474275114783.png" 
						  style="width: 680upx; height: 345upx;"
						></video>
			</view>
			<!-- <view class="title">
				<text>采购需求</text>
			</view>
			<view class="check">
				<view  v-for="i in checkData" :key = 'i' :data-index = 'i.index' @click="change">
					<text  :class="i.checkitem?'checkitem2':'checkitem1'">{{i.text}}</text>
				</view>
			</view>
			
			<view class="input">
				<input placeholder="搜索" v-model="value" />
				<view class="grace-iconfont icon-search"></view>
			</view>
			<view class="list">
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
			</view> -->
			
		</view>
	</view>
</template>

<script>
    export default {
		data(){
				return{
				
					/* checkData:['辣椒','苹果','羊','土豆','鸡','草莓','柑橘','大豆'], */
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
					
				}
		},
		onShow() {
		},
		methods:{
			statechange(e){
            console.log('live-player code:', e.detail.code)
			},
			error(e){
				console.error('live-player error:', e.detail.errMsg)
			},
			change:function(e)
			{
				this.checkData.forEach(e =>{
					e.checkitem = false;
				})
				var a =e.currentTarget.dataset.index;
				this.checkData[a].checkitem = true;
			}
		}
    }
</script>

<style>
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
		border: 5upx rgb(230,230,230) solid;
		
		
	}
	input {
		width: 80%;
		height: 80upx;
	}
	.view{
		width: 100vw;
		display: flex;
		flex-direction:column;
		align-items: center;
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
