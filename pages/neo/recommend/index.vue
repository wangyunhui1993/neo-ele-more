<template>
	<view class="content">
		<view class="neo-title">
			{{detail.title}}
		</view>
		
		<view class="neo-quote">
			{{detail.quote}}
		</view>
		<view><image :src="detail.image" mode="aspectFit" style="width: 100%;"></image></view>
		<view class="neo-main-material">
			<view class="neo-alitter-title">主要食材</view>
			<view>{{detail.mainMaterial}}</view>
		</view>
		<view>
			<view class="neo-alitter-title">步骤</view>
			<view class="neo-time-line">
				<u-time-line>
					<u-time-line-item node-top="2" v-for="(item,index) in detail.content" :key="index">
						<template v-slot:node>
							<view class="content-title">
								{{index+1}}
							</view>
						</template>
						<template v-slot:content>
							<view>{{item}}</view>
						</template>
					</u-time-line-item>
				</u-time-line>
			</view>
		</view>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				detail: {}
			}
		},
		created() {
			this.detail = uni.getStorageSync('recommendDetail') || {};
			
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 20rpx;

		.neo-title {
			text-align: center;
			font-size: 40rpx;
			padding: 20rpx 0;
		}

		.neo-time-line {
			padding-left: 10rpx;
		}

		.content-title {
			width: 44rpx;
			height: 44rpx;
			border-radius: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #d0d0d0;

		}
		.neo-alitter-title{
			font-size: 32rpx;
			font-weight: bold;
		}
		.neo-main-material{
			margin: 20rpx 0;
		}
	}
</style>
