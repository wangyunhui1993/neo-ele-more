<template>
	<view class="content" @click="openMyCenter">
		<my-center></my-center>
		<view class="center-font">个人中心</view>
		<u-icon name="arrow-right"></u-icon>
	</view>
</template>

<script>
	import myCenter from "@/components/getAvatar.vue"
	export default {
		components: {
			myCenter
		},
		methods: {
			openMyCenter() {
				this.$u.route({
					url: '/pages/neo/myCenter/index',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		align-items: center;
		padding: 20rpx 0;

		.center-font {
			flex: 1;
			font-size: 40rpx;
			font-weight: blod;
			padding-left: 20rpx;

		}

	}
</style>
