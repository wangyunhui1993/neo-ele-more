<template>
	<view class="content">
		<view class="left" @click="mt">
			<view>美团红包</view>
			<image src="/static/common/img/mt.png" mode="widthFix"></image>
		</view>
		<view class="right" @click="elm">
			<view>饿了么红包</view>
			<image src="/static/common/img/elm.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			mt(){
				this.$u.route({
					url: '/pages/neo/coupon/mt',
				})
			},
			elm(){
				this.$u.route({
					url: '/pages/neo/coupon/elm',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		display: flex;
		image{
			width: 150rpx;
			padding: 15rpx 0;
		}
		.left{
			flex: 1;
			text-align: center;
			
		}
		.right{
			flex: 1;
			text-align: center;
		}
	}
</style>
