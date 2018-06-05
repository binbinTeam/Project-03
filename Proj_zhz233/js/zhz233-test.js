$(document).ready(function() {
	
});
/*
+ "<div class='taste-c-1-1-1 float-left'>"
                    			+ "<div class='taste-c-1-1-1-1'>"
                    			+ "<img class='img-fluid' src='img/tx_taste_cj_2.png' alt='cj_1.png'>"
                    			+ "</div>"
                    			+ "<div class='taste-c-1-1-1-2'>"
                    			+ "<div class='taste-c-1-1-1-2-1'>"
                    			+ "大吉大利，今晚吃鸡 <br>"
                    			+ "0.5元/小时"
                                + "</div>"
                                + "</div>"
                                + "</div>"
 * */



/*,function(XMLHttpRequest, textStatus){
	//alert(XMLHttpRequest.status);
	//alert(XMLHttpRequest.readyState);
	//alert(textStatus); 
	if(data.status == 302){
		window.location.href = "bspg/login";
	}else{
		alert(data.status);
	}
}*/
//获取列表数据
function showAutoInfo(){
	$.ajax({
        url: "info/showInfo",//要请求的服务器url
        data: {},  //参数
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        dataType: "json",   //服务器返回的数据是什么类型
        beforeSend: function(request) { 
        },
        success: function (data) {
        	var json = eval(data);
            var res = json.result;
            alert(res);
        },
        error: function () {
        }
	});
}