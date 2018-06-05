$(document).ready(function() {
	ShowRentInfo();
});
/**
 * id 集合
 */
var psonl_content = $("#psonl_content");
var g_theme = $("#g_theme");
var g_content = $("#g_content");
var g_hour = $("#g_hour");
var g_night = $("#g_night");
var g_day = $("#g_day");
var g_week = $("#g_week");
var g_beforehand = $("#g_beforehand");
var g_delay = $("#g_delay");
var g_short_time = $("#g_short_time");
var g_credit_level = $("#g_credit_level");
var g_access = $("#g_access");
var g_password = $("#g_password");
var g_style = $("#g_style");
var g_game_name = $("#g_game_name");
var g_role = $("#g_role");
var g_area = $("#g_area");
var g_server = $("#g_server");
var g_grade = $("#g_grade");
var g_rank = $("#g_rank");
var g_case = $("#g_case");
var g_aces = $("#g_aces");
var g_compensate = $("#g_compensate");

var subRentInfo = $("#subRentInfo");
subRentInfo.bind("click",function () {
	/*g_theme.val()
	g_content.val()
	g_game_name.val()
	g_hour.val()
	g_night.val()
	g_day.val()
	g_week.val()
	g_access.val()
	g_password.val()
	g_style.val()
	g_compensate.val()
	g_beforehand.val()
	g_delay.val()
	g_short_time.val()
	g_credit_level.val()
	g_role.val()
	g_area.val()
	g_server.val()
	g_grade.val()
	g_rank.val()
	g_case.val()
	g_aces.val()*/
	AddLOLRentAccessInfo();
});
/**
 * 获取页面资源
 * @returns
 */
function ShowRentInfo() {
	$.ajax({
        url: "dbfo/ShowRentInfo",//要请求的服务器url
        data: JSON.stringify(rentModel),  //参数
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        //contentType: "application/json",
        dataType: "json",   //服务器返回的数据是什么类型
        beforeSend: function(request) { 
        },
        success: function (data) {
        	var json = eval(data);
            var res = json.result;
            var ires = json.iResult;
            if(res.code == 1022 && ires.code == 1024){//数据获取成功
            }
        },
        error: function () {
        	
        }
	});
}
/**
 * 添加rentinfo
 * @returns
 */
function AddLOLRentAccessInfo() {
	var rentModel = {//数据集合
			goods_theme: g_theme.val(),
			goods_content: g_content.val(),
			goods_game: g_game_name.val(),
			goods_hour: g_hour.val(),
			goods_night: g_night.val(),
			goods_day: g_day.val(),
			goods_week: g_week.val(),
			goods_access: g_access.val(),
			goods_password: g_password.val(),
			goods_logon_style: g_style.val(),
			goods_compensate: g_compensate.val(),
			goods_beforehand: g_beforehand.val(),
			goods_delay: g_delay.val(),
			goods_short_time: g_short_time.val(),
			goods_credit_level: g_credit_level.val(),
			goods_lol_role: g_role.val(),
			goods_lol_area: g_area.val(),
			goods_lol_server: g_server.val(),
			goods_lol_grade: g_grade.val(),
			goods_lol_rank: g_rank.val(),
			goods_lol_case: g_case.val(),
			goods_lol_access: g_aces.val()};
	//获取设置表单数据
	$.ajax({
        url: "dbfo/AddLOLRentAccessInfo",//要请求的服务器url
        data: JSON.stringify(rentModel),  //参数
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        contentType: "application/json",
        dataType: "json",   //服务器返回的数据是什么类型
        beforeSend: function(request) { 
        },
        success: function (data) {
        	var json = eval(data);
            var res = json.result;
            var ires = json.iResult;
            if(res.code == 1022 && ires.code == 1024){//数据获取成功
            	/*psonl_content.html("");*/
            	alert("发布成功！");
            	psonl_content.load("pspg/psonl_pg2");
            }
        },
        error: function () {
        	
        }
	});
}