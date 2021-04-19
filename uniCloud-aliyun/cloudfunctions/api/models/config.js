const db = uniCloud.database();

var config = () => {
	var info = db.collection('config').get();
		return info
	}

module.exports = config;
