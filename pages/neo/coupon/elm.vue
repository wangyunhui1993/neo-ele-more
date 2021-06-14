<template>
	<view class="content">
		<view class="logo">
			<image src="/static/common/img/elm-ban.png" mode="widthFix"></image>
		</view>
		<view class="step">
			<view class="step-item">
				<view class="icon">
					<u-icon name="coupon"></u-icon>
				</view> 
				<view class="icon-title">领红包</view>
			</view>
			<view class="step-item">
				<u-icon name="arrow-rightward"></u-icon>
			</view>
			<view class="step-item">
				<view class="icon">
					<u-icon name="shopping-cart"></u-icon>
				</view>
				<view class="icon-title">点外卖</view>
			</view>
			<view class="step-item">
				<u-icon name="arrow-rightward"></u-icon>
			</view>
			<view class="step-item">
				<view class="icon">
					<u-icon name="rmb"></u-icon>
				</view>
				<view class="icon-title">省钱</view>
			</view>
		</view>
		<view class="coupon">
			<view class="coupon-item" @click="openCoupon('elmwm')">
				<view class="logo">
					<image src="/static/common/img/饿了么.png" mode="widthFix"></image>
				</view>
				<view class="title">饿了么外卖红包</view>
				<view class="getBtn">
					立即领取
				</view>
			</view>
			<view class="coupon-item" @click="openCoupon('elmsc')">
				<view class="logo">
					<image src="/static/common/img/饿了么.png" mode="widthFix"></image>
				</view>
				<view class="title">生鲜商超红包</view>
				<view class="getBtn">
					立即领取
				</view>
			</view>
		</view>
		<view class="myCenter">
			<my-center></my-center>
		</view>
		<view class="bottom-btn">
			<view span="6" class="item active" @click="openAnother">
				<image src="/static/common/img/美团外卖.png" mode="widthFix"></image>美团红包
			</view>
			<view span="6" class="item">
				<button class="functionBtn" open-type="share">
					<u-icon name="share"  size="40" style="margin-right: 10rpx;"></u-icon>分享好友
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	import myCenter from '@/components/myCenter.vue';
	import util from "@/common/util.js"
	export default {
		components: {
			myCenter
		},
		methods:{
			openCoupon(type){
				var list = getApp().globalData.configList;
				console.log('list',list);
				var info = null;
				for(var item of list){
					if(item.type === type){
						info = item.minapp;
						break;
					}
				}
				if(info){
					this.openMiniPro(info);
				}
			},
			openAnother(){
				this.$u.route({
					type:"reLaunch",
					url: '/pages/neo/coupon/mt',
				})
			},
			openMiniPro(info){
				wx.navigateToMiniProgram({
					appId: info.appid,
					path: info.path,
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
	$main-color: #3f8bd1;

	.content {
		height: 100vh;
		width: 100vw;
		background: $main-color;
		padding: 0 20rpx;
		padding-bottom: 120rpx;

		.logo {
			image {
				width: 45%;
			}
		}

		.step {
			margin: 20rpx 0;
			padding: 20rpx;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #777777;

			.step-item {
				flex: 1;
				text-align: center;

				.icon {
					font-size: 40rpx;
					border-radius: 50%;
					width: 80rpx;
					height: 80rpx;
					background-color: $main-color;
					line-height: 80rpx;
					margin: 0 auto;
					color: #FFFFFF;
				}

				.icon-title {
					font-size: 24rpx;
					margin-top: 10rpx;
				}
			}
		}

		.coupon {
			display: flex;
			justify-content: space-between;

			.coupon-item {
				width: 49%;
				background: #FFFFFF;
				padding: 30rpx;
				text-align: center;
				border-radius: 10rpx;

				.logo {
					text-align: center;

					image {
						width: 100rpx;
					}
				}

				.title {
					font-size: 36rpx;
					font-weight: bold;
					margin: 60rpx 0;
				}

				.getBtn {
					font-size: 32rpx;
					height: 60rpx;
					line-height: 60rpx;
					border-radius: 30rpx;
					border: 4rpx solid #333;
					box-sizing: content-box;
				}
			}

		}

		.myCenter {
			background: #FFFFFF;
			margin-top: 20rpx;
			border-radius: 10rpx;
			padding: 10rpx;
		}

		.bottom-btn {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 120rpx;
			background: #FFFFFF;
			display: flex;
			.item {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;

				image {
					width: 40rpx;
					margin-right: 10rpx;
				}
			}
		}
		.functionBtn{
			width: 100%;
			background: #FFFFFF;
			height: 100%;
			line-height: 120rpx;
			font-size: 32rpx;
			color: #333;
		}
		.functionBtn::after{
			border: none;
		}

	}
</style>
