const db = uniCloud.database();

var home = () => {
		let coupons = db.collection('coupon').where({isDelete:0}).get();
		return coupons
	}

module.exports = home;
