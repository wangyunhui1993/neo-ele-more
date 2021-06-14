<template>
	<view class="container">
		<view>
			<user-info></user-info>
		</view>
		<view class="others">
			<u-cell-group>
				<button class="content" open-type="share">
					<u-cell-item icon="share" title="分享好友"></u-cell-item>
					</button>
					<button class="content" open-type="contact">
						<u-cell-item icon="server-fill" title="在线客服"></u-cell-item>
						</button>
				</u-cell-group>
		</view>
	</view>
</template>

<script>
	import userInfo from '@/components/userInfo.vue';
export default {
	components:{
		userInfo
	},
};
</script>

<style lang="scss">
.container {
	padding-bottom: 20rpx;
}
.content{
	background: transparent;
}
</style>
