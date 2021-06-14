<template>
	  <view :style="{'font-size':size+'rpx'}">
	    <open-data type="userNickName"></open-data>
	  </view>
</template>

<script>
	export default{
		props:{
			size:{
				default(){
					return 32;
				}
			}
		}
	}
</script>
