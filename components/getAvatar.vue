<template>
	  <view class="userinfo-avatar"  :style="{width:size+'rpx',height:size+'rpx'}">
	    <open-data type="userAvatarUrl"></open-data>
	  </view>
</template>

<script>
	export default{
		props:{
			size:{
				default(){
					return 80;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.userinfo-avatar {  
	  overflow:hidden;  
	  display: block;   
	  border-radius: 50%;  
	}  
</style>
