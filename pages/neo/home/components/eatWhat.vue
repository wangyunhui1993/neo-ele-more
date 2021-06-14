<template>
	<view class="content">
		<image class="eat" src="/static/common/img/csm.png" mode="widthFix"></image>
		<view class="virBtn" @click="eatBtn"></view>
		<view class="showFont">
			<view class="foods" v-if="show">
				· {{list[currentIndex]}} ·
			</view>
		</view>
	</view>
</template>

<script>
	import util from "@/common/util.js"
	export default{
		data(){
			return {
				list:[
					'麻辣烫',
					'烧烤',
					'海底捞',
					'火锅',
					'奶茶',
					'肯德基',
					'麦当劳',
					'炒饭',
					'粥',
					'沙县小吃',
					'小龙虾',
					'炸鸡'
				],
				currentIndex:0,
				show:false
			}
		},
		methods:{
			eatBtn(){
				this.show = false;
				this.currentIndex = util.getRandom(0,this.list.length-1);
				this.show = true;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		position: relative;
		.eat{
			width: 100%;
		}
		.virBtn{
			position: absolute;
			bottom: 30rpx;
			height: 100rpx;
			width: 60%;
			left: 50%;
			transform: translate(-50%,0);
			border-radius: 50rpx;
		}
		.showFont{
			position: absolute;
			height: 100rpx;
			width: 100%;
			top: 60rpx;
			left: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			.foods{
				width: 90%;
				height: 110rpx;
				border: 2px solid #333;
				border-radius: 10rpx;
				background-color: #FFFFFF;
				text-align: center;
				line-height: 110rpx;
				transition: width 3s;
				overflow: hidden;
			}
			
			
		}
	}
</style>
