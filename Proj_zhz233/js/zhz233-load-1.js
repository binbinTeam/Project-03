$(document).ready(function() {
	showPsonlUserInfo();
	ShowInvlaInfo();
});
/**
 * id 集合
 */
var psonl_content = $("#psonl_content");
var usrName = $("#usrName");
var usr1 = $("#usr1");
var usr2 = $("#usr2");
var sc01 = $("#sc01");
var sc02 = $("#sc02");
var sc03 = $("#sc03");
var sc04 = $("#sc04");
/**
 * 获取基础信息
 * @returns
 */
function showPsonlUserInfo() {
	$.ajax({
        url: "dbfo/showBasicUserInfo",//要请求的服务器url
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
            var ires = json.iResult;
            if(res.code == 1022 && ires.code == 1024){//数据获取成功
            	var reMap = ires.reMap;
            	//清空数据
            	usrName.html("");
            	usr1.html("");
            	usr2.html("");
            	sc01.html("");
            	sc02.html("");
            	sc03.html("");
            	sc04.html("");
            	$.each(reMap,function(i,item){
            		if(i == "userName"){
        				usrName.append(item);
        			}
            		if(i == "ubasic"){
            			usr1.append("￥"+item.available);
            			usr2.append("￥"+item.frozen);
            		}
            		if(i == "SC1"){
            			sc01.append("￥"+item.sum);
            			sc02.append(item.count);
            		}
            		if(i == "SC2"){
            			sc03.append("￥"+item.sum);
            			sc04.append(item.count);
            		}
            		
            	});
            }
        },
        error: function () {
        	//$(location).attr('href', 'bspg/home');
        }
	});
}