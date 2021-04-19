<template>
	<view class="neo-top-con">
		  <view class="neo-top">
		      <image class="item-photo" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-307f9b8e-fc82-474f-86e9-d3daf4af7e90/3f8e7ba5-b12a-4a7e-a2bf-7edd3c235cfb.png" mode="aspectFit"></image>
		    <view class="item-font">关注公众号享更多优惠</view>
		    <view class="item-fl"  @click="getFL">领取福利</view>
		  </view>
		  <view class="neo-btns">
		    <!-- <view class="neo-btn" type="default"  @click="addBtn">添加小程序</view> -->
			<button class="neo-btn" @click="addBtn">
				添加小程序
			</button>
		    <!-- <view class="neo-btn" type="default" open-type="share">分享给好友</view> -->
			<button class="neo-btn" open-type="share">
				分享好友
			</button>
		  </view>
		    <view v-if="showAddTip" class="neo-add-mini">
		      <text>点击“添加到我的小程序”，领红包不迷路</text>
		    </view>
	</view>
</template>

<script>
	var setTip = null;
	export default {
		name:"v-top",
		data() {
			return {
				showAddTip:false,
			};
		},
		methods:{
			addBtn(){
				clearTimeout(setTip);
				    this.showAddTip = true;
				    setTip = setTimeout(()=>{
				      this.showAddTip = false;
				    },2000)
			},
			onShareAppMessage(res) {
				return getApp().shareConfig()
			},
			getFL(){
				var url = getApp().getConfig('gz_addr');
				uni.setStorageSync('url', url);
				uni.navigateTo({
				    url: `/pages/iframe/index`
				});
			},
		}
	}
</script>

<style>
	.neo-top-con{
		background: #FFFFFf;
	}
.neo-top{
  display: flex;
  align-items: center;
  vertical-align: middle;
  padding: 10rpx;
  
}
.neo-top .item-photo{
  width:80rpx;
  height: 80rpx;
  border-radius: 20rpx;
}
.neo-top .item-font{
  flex: 1;
  text-align: center;
  font-weight: 600;
}
.neo-top .item-fl{
  width: 180rpx;
  background: orange;
  text-align: center;
  line-height: 2;
  border-radius: 30rpx;
  color: #fff;
}

.neo-btns{
  display: flex;
  padding: 10rpx;
  justify-content:space-around
}
.neo-btns .neo-btn{
	  font-size: 28rpx;
	  width: 40%;
	  line-height: 70rpx;
	  height: 70rpx;
      color: #06ae56;
          background-color: #f2f2f2;
		  
}


.neo-ele-top{
  height: 116rpx;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.neo-ele-top .left{
  height: 116rpx;
    width: 500rpx;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.neo-ele-top .left .content{
  width: 100%;
}
.neo-ele-top .left .icon{
  display: inline-block;
    vertical-align: bottom;
    width: 52rpx;
    height: 52rpx;
}
.neo-ele-top .left .text{
  width: 150rpx;
    height: 38rpx;
    line-height: 38rpx;
    text-align: center;
    font-size: 24rpx;
    color: #61300e;
    background: -webkit-linear-gradient(left, #f9db8d, #f8d98a);
    background: linear-gradient(90deg, #f9db8d, #f8d98a);
    border-radius: 6rpx;
}
.neo-ele-top .left .name{
  text-align: left;
    display: inline-block;
    vertical-align: bottom;
    font-size: 34rpx;
    color: #000;
    line-height: 50rpx;
    font-weight: bold;
    margin-left: 15rpx;
}
.neo-ele-top .right{
  width: 170rpx;
    height: 60rpx;
    border-radius: 30rpx;
    background: -webkit-linear-gradient(left, #ec6f43, #ea4a36);
    background: linear-gradient(90deg, #ec6f43, #ea4a36);
    color: #fff;
    font-size: 28rpx;
    line-height: 60rpx;
    text-align: center;
}
.neo-ele .bottom{
  height: auto;
    width: 100%;
}
.neo-ele .bottom image{
  display: block;
  width: 100%;
  height: auto;
}

.neo-add-mini{
  position: absolute;
  top: 20rpx;
  right: 5%;
  line-height: 2;
  border-radius: 20rpx;
  background: -webkit-linear-gradient(left, #ec6f43, #ea4a36);
    background: linear-gradient(90deg, #ec6f43, #ea4a36);
    padding: 0 20rpx;
    font-size: 24rpx;
    color: #fff;
}
.neo-add-mini::after{
  content: " ";
    border-width: 15rpx;
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-bottom-color: #ea4a36;
    top: -28rpx;
    right:25%;
}
</style>
