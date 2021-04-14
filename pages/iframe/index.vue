<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
				
			}
		},
		onLoad(option){
			var url = uni.getStorageSync('url');;
			console.log('url',url)
			if(url){
				this.url = url;
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
