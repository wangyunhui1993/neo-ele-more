module.exports = {
	onLoad() {
		// 设置默认的转发参数
		this.$u.mpShare = {
			title: '饿了么、美团外卖红包天天领！', // 默认为小程序名称
			path: 'pages/neo/home/index', // 默认为当前页面路径
			imageUrl: '/static/common/img/share.png' // 默认为当前页面的截图
		}
	},
	onShareAppMessage() {
		return this.$u.mpShare
	},
	// #ifdef MP-WEIXIN
	onShareTimeline() {
		return this.$u.mpShare
	}
	// #endif
}
