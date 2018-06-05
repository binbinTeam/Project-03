/**
 * 准备页面数据
 * @returns
 */
$(document).ready(function() {
	showAutoInfo();
});
/**
 * 属性获取
 */

var btn_search_yxlm = $("#btn_search_yxlm");
btn_search_yxlm.bind("click",function () {
    $(location).attr('href', "bspg/search");
});
var btn_search_blzy = $("#btn_search_blzy");
var btn_search_jdqs = $("#btn_search_jdqs");
var btn_search_sy = $("#btn_search_sy");
var btn_search_dy = $("#btn_search_dy");
var btn_search_yy = $("#btn_search_yy");
var btn_search_all = $("#btn_search_all");

var banner_1 = $("#banner_1");
var banner_2 = $("#banner_2");
var banner_3 = $("#banner_3");
var banner_4 = $("#banner_4");

var btn_login2 = $("#btn_login2");
var btn_register2 = $("#btn_register2");
btn_login2.bind("click",function () {
    $(location).attr('href', "login.html");
});
btn_register2.bind("click",function () {
    $(location).attr('href', "register.html");
});
var llogin2 = $("#llogin2");
//数据盒子
var notice = $("#notice");
var newbie = $("#newbie");
var upsite = $("#upsite");


var btn_down = $("#btn_down");

var feature_1 = $("#feature_1");
var feature_2 = $("#feature_2");
var feature_3 = $("#feature_3");

var ad = $("#ad");

var news = $("#news");//最新租号信息
var black = $("#black");//最新黑名单信息

//获取列表数据
function showAutoInfo(){
	$.ajax({
        url: "http://127.0.0.1:8080/zlb/getIndexAutoInfo",//要请求的服务器url
        data: {},  //参数
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        dataType: "json",   //服务器返回的数据是什么类型
        beforeSend: function(request) { 
        },
        success: function (data) {
        	var json = eval(data);
            if(json.status == 0){//数据获取成功
            	var res = json.reMap;
                $.each(res,function(i,item) {
                    if (i == "noticeList") {
                        console.log(res);
                        notice.html("");
                        $.each(res.noticeList, function (i, item) {
                            notice.append("<p><a href='bspg/help?n_no=" + item.notice_no + "'>【公告】" + item.notice_theme + "</a></p>");
                        });
                    }
                    if (i == "newbieList") {
                        newbie.html("");
                        $.each(res.newbieList, function (i, item) {
                            newbie.append("<p><a href='bspg/help?n_no=" + item.notice_no + "'>【入门须知】" + item.notice_theme + "</a></p>");
                        });
                    }
                    if (i == "updateList") {
                        upsite.html("");
                        $.each(res.updateList, function (i, item) {
                            upsite.append("<p><a href='bspg/help?n_no=" + item.notice_no + "'>【网站更新】" + item.notice_theme + "</a></p>");
                        });
                    }
                    if(i == "leaseList"){
                        news.html("");
                        $.each(res.leaseList, function (i, item) {
                            news.append("<div class='common-h-2-1-1-0'>" +
                                "<div class='common-h-2-1-1-1 float-left'>【体验租号】"+item.account+"</div>" +
								"<div class='common-h-2-1-1-2 float-left'>"+item.order_time+"小时</div>" +
								"<div class='common-h-2-1-1-3 float-left'>"+item.buyer+"</div>" +
								"</div>");
                        });
					}
                    if(i == "blackList"){
                        black.html("");
                        $.each(res.blackList, function (i, item) {
                            black.append("<div class='common-h-2-1-2-0'>" +
								"<div class='common-h-2-1-2-1 float-left'>【黑名单】</div>" +
								"<div class='common-h-2-1-2-2 float-left'>"+item.link_account+"</div>" +
								"<div class='common-h-2-1-2-3 float-left'>"+item.blacklist_reasons+"</div>" +
								"</div>");
                        });
					}
                });
            }else{//错误数据加载
				notice.html("<p>数据加载错误...</p>");
			}
            //加载数据
            $('#notice_tab li:eq(0) a').tab('show');
        },
        error: function () {
        	//$(location).attr('href', 'bspg/home');
        }
	});
}