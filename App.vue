<script>
import util from "static/util.js"
const updateManager = uni.getUpdateManager();
export default {
	onLaunch: function() {
		console.log('App Launch');
		updateManager.onUpdateReady(function (res) {
		  uni.showModal({
		    title: '更新提示',
		    content: '新版本已经准备好，是否重启应用？',
		    success(res) {
		      if (res.confirm) {
		        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
		        updateManager.applyUpdate();
		      }
		    }
		  });
		
		});
		const userInfo = uni.getStorageSync('userInfo');
		if(userInfo){
			this.globalData.userInfo = userInfo
		}
	},
	onShow: function() {
		console.log('App Show');
		this.getConfigList();
	},
	onHide: function() {
		console.log('App Hide');
	},
	globalData: {
		api: util.api,
		subscribe: util.subscribe,
		openid: '',
		userInfo: '',
		configList:[],
		deployDate:util.deployDate,
	},
	methods: {
		shareConfig(){
			var messages = util.messages;
			return messages[Math.floor(Math.random()*messages.length)];
		},
		// 获取config
		getConfigList(){
			uni.request({
			    url: this.globalData.api.config,
			    success: (res) => {
					this.globalData.configList = res.data.data;
			    }
			});
		},
		getConfig(type){
			for(var item of this.globalData.configList){
				if(item.type === type){
					return item.value;
				}
			}
		},
	}
};
</script>

<style>

</style>
