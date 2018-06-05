/**
 * 属性获取
 */
var token = "";
/**
 * 数据加载
 * @returns
 */
$(document).ready(function() {
	chkusr();
});
//通用属性
var lab_user = $("#lab_user");

var btn_login = $("#btn_login");
var btn_register = $("#btn_register");
btn_login.bind("click",function () {
    $(location).attr('href', "login.html");
});
btn_register.bind("click",function () {
    $(location).attr('href', "register.html");
});
var llogin = $("#llogin");
//检查登录状态
function chkusr() {
	$.ajax({
        url: "http://127.0.0.1:8080/zlb/userBean/getUserInfo",//要请求的服务器url
        data: {uid:sessionStorage.getItem("uid")},  //参数
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        dataType: "json",   //服务器返回的数据是什么类型
        beforeSend: function(request) { 
        },
        success: function (data) {
        	var json = eval(data);
            var status = json.status;
            if(status == 0){//数据获取成功
                var reMap = json.reMap;
                lab_user.html("欢迎"+reMap.userName+"访问!");
            }else{
            	lab_user.html("老铁，欢迎访问租号站233交易平台!");
            }
        },
        error: function () {
        	//$(location).attr('href', 'login.html');
        }
	});
}
var btn_index = $("#btn_index");
btn_index.bind("click",function () {
    $(location).attr('href', "index.html");
});
var btn_user = $("#btn_user");
btn_user.bind("click",function () {
    $(location).attr('href', "personallinfo.html");
});
var btn_services = $("#btn_services");
btn_services.bind("click",function () {
    $(location).attr('href', "help.html");
});
var btn_join = $("#btn_join");
btn_join.bind("click",function () {
    $(location).attr('href', "help.html");
});

var img_logo = $("#img_logo");
img_logo.bind("click",function () {
    $(location).attr('href', "index.html");
});
var search_key = $("#search_key");
search_key.bind("click",function () {
    $(location).attr('href', "deal.html");
});
var btn_search = $("#btn_search");
btn_search.bind("click",function () {
    $(location).attr('href', "deal.html");
});

var btn_home = $("#btn_home");
btn_home.bind("click",function () {
	$(location).attr('href', "index.html");
});
var btn_taste = $("#btn_taste");
btn_taste.bind("click",function () {
	$(location).attr('href', "taste.html");
});
var btn_deal = $("#btn_deal");
btn_deal.bind("click",function () {
	$(location).attr('href', "deal.html");
});
var btn_store = $("#btn_store");
btn_store.bind("click",function () {
	$(location).attr('href', "store.html");
});
var btn_download = $("#btn_download");
btn_download.bind("click",function () {
	$(location).attr('href', "download.html");
});
var btn_help = $("#btn_help");
btn_help.bind("click",function () {
	$(location).attr('href', "help.html");
});