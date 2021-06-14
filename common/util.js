module.exports = {
	/**
	 * 日期格式化
	 */
	dateFormat(date, format) {
		format = format || 'yyyy-MM-dd hh:mm:ss';
		if (date !== 'Invalid Date') {
			let o = {
				"M+": date.getMonth() + 1, //month
				"d+": date.getDate(), //day
				"h+": date.getHours(), //hour
				"m+": date.getMinutes(), //minute
				"s+": date.getSeconds(), //second
				"q+": Math.floor((date.getMonth() + 3) / 3), //quarter
				"S": date.getMilliseconds() //millisecond
			}
			if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
				(date.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (let k in o)
				if (new RegExp("(" + k + ")").test(format))
					format = format.replace(RegExp.$1,
						RegExp.$1.length === 1 ? o[k] :
						("00" + o[k]).substr(("" + o[k]).length));
			return format;
		}
		return '';
	},
	getWeek(){
		var mydate=new Date();
		  var myddy=mydate.getDay();//获取存储当前日期
		var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		return weekday[myddy];
	},
	getRandom(min,max){
		return Math.floor(Math.random() * (max - min + 1));
	},
	shareConfig(){
		
	},

}
