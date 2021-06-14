<template>
	<view class="content">
		<view class="user">
			<template>
				<!-- <image class="user-item user-img" :src="avatar" mode="aspectFit"></image> -->
				<get-avatar size="100"></get-avatar>
				<view class="user-item user-name">
					<view>
						<get-name size="50"></get-name>
					</view>
					<view class="user-tap">
						再忙也要记得吃饭哦(*￣︶￣)
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import getAvatar from "./getAvatar"
	import getName from "./getName"
	export default{
		components:{
			getAvatar,
			getName
		},
		data(){
			return{
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 20rpx;
		.user{
			display: flex;
			align-items: center;
			.user-item{
				
				
			}
			.user-img{
				border-radius: 50rpx;
			}
			.user-name{
				font-size: 40rpx;
				font-weight: bold;
				padding-left: 20rpx;
				flex: 1;
			}
			.user-tap{
				font-size: 24rpx;
				color: #333;
			}
			image{
				width: 100rpx;
				height: 100rpx;
			}
		}
	}
	
</style>
