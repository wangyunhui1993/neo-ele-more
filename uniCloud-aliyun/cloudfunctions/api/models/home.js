const db = uniCloud.database();

var home = {
    tabs: () => {
		let tabs = db.collection('tab').orderBy("sort", "asc").where({isDelete:0}).get();
		return tabs
	},
	coupons: () => {
		let coupons = db.collection('coupon').orderBy("sort", "asc").where({isDelete:0}).get();
		return coupons
	},
}

module.exports = home;
