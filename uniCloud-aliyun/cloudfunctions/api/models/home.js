const db = uniCloud.database();

var home = {
    tabs: () => {
		let tabs = db.collection('tab').where({isDelete:0}).orderBy("sort", "asc").get();
		console.log('tabs',tabs)
		return tabs
	},
	coupons: () => {
		let coupons = db.collection('coupon').where({isDelete:0}).orderBy("sort", "asc").get();
		return coupons
	},
}

module.exports = home;
