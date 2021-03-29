<script>
import util from "static/util.js"
export default {
	onLaunch: function() {
		console.log('App Launch');
		const userInfo = uni.getStorageSync('userInfo');
		if(userInfo){
			this.globalData.userInfo = userInfo
		}
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	globalData: {
		api: util.api,
		subscribe: util.subscribe,
		openid: '',
		userInfo: '',
	},
	methods: {
		shareConfig(){
			var messages = util.messages;
			return messages[Math.floor(Math.random()*messages.length)];
		}
	}
};
</script>

<style>

</style>
