
// 环境ID（接口前缀）
const envId = 'https://307f9b8e-fc82-474f-86e9-d3daf4af7e90.bspapp.com'
// 分享显示的主图
var shareImg = '/static/coupon/share.png'
// 分享跳转的路由
var shareUrl = "/pages/index/index"
const messages = [{
				title: '吃了这么多年外卖，你知道这个秘密吗？',
				path: shareImg,
				imageUrl : shareImg
			},{
				title: '这样点外卖，一年省下一个亿',
				path: shareImg,
				imageUrl : shareImg
			},{
				title: '点外卖前先领券，吃霸王餐',
				path: shareImg,
				imageUrl : shareImg
			},{
				title: '美团饿了么内部优惠券，手慢无',
				path: shareImg,
				imageUrl : shareImg
			},{
				title: '点外卖不用优惠券，你就out了',
				path: shareImg,
				imageUrl : shareImg
			},{
				title: '外卖不为人知的秘密，点这解密',
				path: shareImg,
				imageUrl : shareImg
			},{
				title: '震惊！小伙点外卖竟然花了1分钱',
				path: shareImg,
				imageUrl : shareImg
			},{
				title: '从这点外卖，你也可以吃霸王餐',
				path: shareImg,
				imageUrl : shareImg
			}];
export default {
	api: {
		home: `${envId}/http/api/home`,
		openid: `${envId}/http/api/openid`,
	},
	subscribe: `${envId}/http/subscribe`,
	messages
}