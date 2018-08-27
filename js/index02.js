$(function() {
	$.ajax({
		type: "post",
		url: 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1',
		async: true,
		dataType: 'json',
		cache: false,
		error: function(error) {
			console.log(error);
		},
		success: function(data) {
			console.log(JSON.stringify(data))
			var responseData = {};
			responseData.list=data.result;//responseData.list中的list命名需要和{{if list}}，{{each list as value index}}中的list变量命名保持一致
			var dataHtml = template('dataList', responseData);//dataList需要和index02.html中的模板（指的是最后的script地id）的id相同
			$('#toData').html(dataHtml);//toData需要和index02.html中的tbody的id相同
		}
	})
})