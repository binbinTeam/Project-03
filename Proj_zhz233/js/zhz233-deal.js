/**
 * 查询参数集合
 */
var TotalPagesInfo = {
    currentPage:1,//当前页码
    totalPage:1//总页码
};
var SearchGoodsInfo ={
    gamesName:"",//游戏名称
	gamesServer:"",//游戏服务器
	gamesArea:"",//游戏大区
	searchKey:"",//查询关键字
	priceRange:1000,//价格范围
	authenticate:1,//认证类型
	goodsType:1,//商品类型
	goodsSort:0,//排序方式
	currentPage:0//当前页码
};
    /**

 * 页面加载数据
 * @returns
 */
$(document).ready(function() {
	getDealAutoInfo();
});

/**
 * ID
 * @returns
 */
var searchContent = $("#searchContent");
var search_price_1 = $("#search_price_1");
search_price_1.bind("click",function(){
	SearchGoodsInfo.priceRange = 1;
	ChangeBordorClass2();
	search_price_1.addClass("deal-a-1-1-4-2-1-1-2");
    getSearchGoodsInfo(SearchGoodsInfo);
});
var search_price_2 = $("#search_price_2");
search_price_2.bind("click",function(){
    SearchGoodsInfo.priceRange = 2;
	ChangeBordorClass2();
	search_price_2.addClass("deal-a-1-1-4-2-1-1-2");
    getSearchGoodsInfo(SearchGoodsInfo);
});
var search_price_3 = $("#search_price_3");
search_price_3.bind("click",function(){
	SearchGoodsInfo.priceRange = 5;
	ChangeBordorClass2();
	search_price_3.addClass("deal-a-1-1-4-2-1-1-2");
    getSearchGoodsInfo(SearchGoodsInfo);
});
var search_price_4 = $("#search_price_4");
search_price_4.bind("click",function(){
	SearchGoodsInfo.priceRange = 10;
	ChangeBordorClass2();
	search_price_4.addClass("deal-a-1-1-4-2-1-1-2");
    getSearchGoodsInfo(SearchGoodsInfo);
});
var search_price_5 = $("#search_price_5");
search_price_5.bind("click",function(){
    SearchGoodsInfo.priceRange = 100;
	ChangeBordorClass2();
	search_price_5.addClass("deal-a-1-1-4-2-1-1-2");
    getSearchGoodsInfo(SearchGoodsInfo);
});
var search_price_6 = $("#search_price_6");
search_price_6.bind("click",function(){
	SearchGoodsInfo.priceRange = 1000;
	ChangeBordorClass2();
	search_price_6.addClass("deal-a-1-1-4-2-1-1-2");
    getSearchGoodsInfo(SearchGoodsInfo);
});
var search_price_7 = $("#search_price_7");
search_price_7.bind("click",function(){
    SearchGoodsInfo.priceRange = 9999;
	ChangeBordorClass2();
	search_price_7.addClass("deal-a-1-1-4-2-1-1-2");
    getSearchGoodsInfo(SearchGoodsInfo);
});
var search_price_8 = $("#search_price_8");
search_price_8.bind("click",function(){
    SearchGoodsInfo.priceRange = 1000;
	ChangeBordorClass2();
	search_price_8.addClass("deal-a-1-1-4-2-1-1-2");
    getSearchGoodsInfo(SearchGoodsInfo);
});
var search_auth_1 = $("#search_auth_1");
search_auth_1.bind("click",function(){
    SearchGoodsInfo.authenticate = 1;
    getSearchGoodsInfo(SearchGoodsInfo);
	ChangeBordorClass1();
	search_auth_1.addClass("deal-a-1-1-5-2-1-1-2");
});
var search_auth_2 = $("#search_auth_2");
search_auth_2.bind("click",function(){
    SearchGoodsInfo.authenticate = 2;
    getSearchGoodsInfo(SearchGoodsInfo);
	ChangeBordorClass1();
	search_auth_2.addClass("deal-a-1-1-5-2-1-1-2");
});
var search_auth_3 = $("#search_auth_3");
search_auth_3.bind("click",function(){
    SearchGoodsInfo.authenticate = 1;
    getSearchGoodsInfo(SearchGoodsInfo);
	ChangeBordorClass1();
	search_auth_3.addClass("deal-a-1-1-5-2-1-1-2");
});
var sortAuto = $("#sortAuto");
sortAuto.bind("click",function(){
    SearchGoodsInfo.goodsSort = 0;
    getSearchGoodsInfo(SearchGoodsInfo);
	ChangeDIV();
	sortAuto.find("div").addClass("deal-b-1-1-1-2-1");
});
var sortPUL = $("#sortPUL");
sortPUL.bind("click",function(){
    //价格 高 - 底 排序方式
    SearchGoodsInfo.goodsSort = 1;
    getSearchGoodsInfo(SearchGoodsInfo);
	ChangeDIV();
    sortPUL.find("div").addClass("deal-b-1-1-1-2-1");
});
var sortPLU = $("#sortPLU");
sortPLU.bind("click",function(){
    SearchGoodsInfo.goodsSort = 2;
    getSearchGoodsInfo(SearchGoodsInfo);
    ChangeDIV();
    sortPLU.find("div").addClass("deal-b-1-1-1-2-1");
});
var sortAUL = $("#sortAUL");
sortAUL.bind("click",function(){
    SearchGoodsInfo.goodsSort = 3;
    getSearchGoodsInfo(SearchGoodsInfo);
    ChangeDIV();
    sortAUL.find("div").addClass("deal-b-1-1-1-2-1");
});
var sortALU = $("#sortALU");
sortALU.bind("click",function(){
    SearchGoodsInfo.goodsSort = 4;
    getSearchGoodsInfo(SearchGoodsInfo);
    ChangeDIV();
    sortALU.find("div").addClass("deal-b-1-1-1-2-1");
});
var sortDUL = $("#sortDUL");
sortDUL.bind("click",function(){
    SearchGoodsInfo.goodsSort = 5;
    getSearchGoodsInfo(SearchGoodsInfo);
    ChangeDIV();
    sortDUL.find("div").addClass("deal-b-1-1-1-2-1");
});
var sortDLU = $("#sortDLU");
sortDLU.bind("click",function(){
    SearchGoodsInfo.goodsSort = 6;
    getSearchGoodsInfo(SearchGoodsInfo);
    ChangeDIV();
    sortDLU.find("div").addClass("deal-b-1-1-1-2-1");
});

var goPage =  $("#goPage");
var pageInfo = $("#pageInfo");

function goPages(temp){
    if(temp == 1){
        SearchGoodsInfo.currentPage = 0;
    }else if(temp == 2){
        if(TotalPagesInfo.currentPage > 1){
            SearchGoodsInfo.currentPage = TotalPagesInfo.currentPage - 2;
        }
    }else if(temp == 3){
        var tem = goPage.val();
        if(tem>1 && tem <= TotalPagesInfo.totalPage){
            SearchGoodsInfo.currentPage = tem - 1;
        }
    }else if(temp == 4){
        if(TotalPagesInfo.currentPage < TotalPagesInfo.totalPage){
            SearchGoodsInfo.currentPage = TotalPagesInfo.currentPage;
        }
    }else if(temp == 5){
        SearchGoodsInfo.currentPage = TotalPagesInfo.totalPage - 1;
    }else {
        SearchGoodsInfo.currentPage = 0;
    }
    //商品 信息 筛选条件
    getSearchGoodsInfo(SearchGoodsInfo);
}

function ChangeDIV(){
    sortAuto.find("div").removeClass("deal-b-1-1-1-2-1");
    sortPUL.find("div").removeClass("deal-b-1-1-1-2-1");
    sortPLU.find("div").removeClass("deal-b-1-1-1-2-1");
    sortAUL.find("div").removeClass("deal-b-1-1-1-2-1");
    sortALU.find("div").removeClass("deal-b-1-1-1-2-1");
    sortDUL.find("div").removeClass("deal-b-1-1-1-2-1");
    sortDLU.find("div").removeClass("deal-b-1-1-1-2-1");
}
function ChangeBordorClass1() {
	search_auth_1.removeClass("deal-a-1-1-5-2-1-1-2");
	search_auth_2.removeClass("deal-a-1-1-5-2-1-1-2");
	search_auth_3.removeClass("deal-a-1-1-5-2-1-1-2");
}
function ChangeBordorClass2() {
	search_price_8.removeClass("deal-a-1-1-4-2-1-1-2");
	search_price_7.removeClass("deal-a-1-1-4-2-1-1-2");
	search_price_6.removeClass("deal-a-1-1-4-2-1-1-2");
	search_price_5.removeClass("deal-a-1-1-4-2-1-1-2");
	search_price_4.removeClass("deal-a-1-1-4-2-1-1-2");
	search_price_3.removeClass("deal-a-1-1-4-2-1-1-2");
	search_price_2.removeClass("deal-a-1-1-4-2-1-1-2");
	search_price_1.removeClass("deal-a-1-1-4-2-1-1-2");
}

var hot_div = $("#hot_div");
var search_game = $("#search_game");
search_game.focus(function(){
    var temp = search_game.find("option:selected").val();
    getServerList(temp);
});
search_game.change(function(){
    var temp = search_game.find("option:selected").val();
    getServerList(temp);
});
var search_server = $("#search_server");
search_server.focus(function(){
    var temp1 = search_game.find("option:selected").val();
    var temp2 = search_server.find("option:selected").val();
    getAreaList(temp1,temp2);
});
search_server.change(function(){
    var temp1 = search_game.find("option:selected").val();
    var temp2 = search_server.find("option:selected").val();
    getAreaList(temp1,temp2);
});
var search_area = $("#search_area");
var search_key_2 = $("#search_key_2");
var search_value = $("#search_value");
search_value.bind("click",function(){
	var temp1 = search_game.find("option:selected").val();
	var temp2 = search_server.find("option:selected").val();
    var temp3 = search_area.find("option:selected").val();
	var temp4 = search_key_2.val();
	//SearchGoodsInfo
    SearchGoodsInfo.gamesName = temp1;
    SearchGoodsInfo.gamesServer = temp2;
    SearchGoodsInfo.gamesArea = temp3;
    SearchGoodsInfo.searchKey = temp4;
	//商品 信息 筛选条件
    getSearchGoodsInfo(SearchGoodsInfo);
});
function getSearchGoodsInfo(temp){
    $.ajax({
        url: "http://127.0.0.1:8080/zlb/getDealSearchInfo",//要请求的服务器url
        data: JSON.stringify(temp),  //参数
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        contentType: "application/json",
        dataType: "json",   //服务器返回的数据是什么类型
        beforeSend: function (request) {
        },
        success: function (data) {
            var json = eval(data);
            var status = json.status;
            if (status == 0) {//数据获取成功
                var reMap = json.reMap;
                var goodsPageResult = reMap.goodsPageResult;
                var rentResultList = reMap.rentResultList;
                searchContent.html("");
                if(rentResultList == "" || goodsPageResult==""){
                    searchContent.html("<div class='deal-b-1-1-1-2-2'>查询结果为空，请重试...</div>");
                }else{
                    $.each(rentResultList,function(i,item){
                        searchContent.append("<div class='deal-b-1-1-2-1 float-left' onclick=showInfo('"+item.goods_no+"')>"
                            + "<div class='deal-b-1-1-2-1-1'>"
                            + "<img class='img-fluid' src='img/"+getImg(item.goods_game)+".png' alt='jdqs.png'>"
                            + "</div>"
                            + "<div class='deal-b-1-1-2-1-2'>"
                            + "<div class='deal-b-1-1-2-1-2-1'>"
                            + "<div class='deal-b-1-1-2-1-2-1-1 float-left'>"
                            + "<span>"+item.goods_amount+"元/小时</span>"
                            + "</div>"
                            + "<div class='deal-b-1-1-2-1-2-1-2 float-right'>"
                            + ""+getLevel(item.goods_credit_level)+""
                            + "</div>"
                            + "</div>"
                            + "<div class='deal-b-1-1-2-1-2-2'>"
                            + "<div class='deal-b-1-1-2-1-2-2-1 float-left'>"
                            + "押金：<span>"+item.goods_compensate+"</span>元"
                            + "</div>"
                            + "<div class='deal-b-1-1-2-1-2-2-2 float-right'>"
                            + "最低<span>"+item.goods_short_time+"</span>小时"
                            + "</div>"
                            + "</div>"
                            + "<div class='deal-b-1-1-2-1-2-3'>"
                            + "<div class='deal-b-1-1-2-1-2-3-1'>"
                            + "<span>["+item.account+"]</span>"+item.goods_theme+""
                            + "</div>"
                            + "</div>"
                            + "<div class='deal-b-1-1-2-1-2-4'>"
                            + ""+gethtml(item.goods_recomm)+""
                            + "</div>"
                            + "</div>"
                            + "</div>");
                    });
                    //页码信息设置
                    pageInfo.html("");
                    pageInfo.append("<div class='float-right'>总记录数：[<span>"+goodsPageResult.totalCount+"</span>]条记录</div>" +
                        "<div class='float-right'>总页数:[<span>"+goodsPageResult.totalPage+"</span>]页 </div>" +
                        "<div class='float-right'>每页显示：[<span>"+goodsPageResult.pageSize+"</span>]条记录 </div>" +
                        "<div class='float-right'>当前页：第[<span>"+goodsPageResult.currentPage+"</span>]页 </div>");
                    TotalPagesInfo.currentPage = goodsPageResult.currentPage;
                    TotalPagesInfo.totalPage = goodsPageResult.totalPage;
                }
            }
        }
    });
}
function getType(temp){
	return ++temp;
	/*if(temp == 0){
		return "端游";
	}else if(temp == 1){
		return "手游";
	}else if(temp == 2){
		return "页游";
	}else if(temp == 3){
		return "加速器";
	}else{
		return "";
	}*/
}
function getGame(temp){
	if(temp == 0){
		return "英雄联盟";
	}else if(temp == 1){
		return "绝地求生";
	}else{
		return "";
	}
}
function getServer(temp){
	if(temp == 0){
		return "电信";
	}else if(temp == 1){
		return "网通";
	}else{
		return "其他";
	}
}
/**
 * 函数
 * @returns
 */
function showInfo(temp) {
    if(sessionStorage.getItem("showGoodsKey") != null){
        sessionStorage.removeItem("showGoodsKey");
    }
    sessionStorage.setItem("showGoodsKey", temp);
    $(location).attr("href", "showinfo.html");
}
function getAreaList(temp1,temp2) {
    $.ajax({
        url: "http://127.0.0.1:8080/zlb/getGamesArea",//要请求的服务器url
        data: {gamesName:temp1,serverName:temp2},  //参数JSON.stringify(temp)
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        //contentType: "application/json",
        dataType: "json",   //服务器返回的数据是什么类型
        beforeSend: function(request) {
        },
        success: function (data) {
            var json = eval(data);
            var status = json.status;
            if(status == 0) {//数据获取成功
                var reMap = json.reMap;
                var areaStringList = reMap.areaStringList;
                search_area.html("");
                if(areaStringList == ""){
                    search_area.append("<option value=''>全区（服）</option>");
				}else{
                    $.each(areaStringList,function(i,item){
                        search_area.append("<option value='"+item+"'>"+item+"</option>")
                    });
				}
            }
        },
        error: function () {

        }
    });
}
function getServerList(temp) {
    $.ajax({
        url: "http://127.0.0.1:8080/zlb/getGamesServer",//要请求的服务器url
        data: {gamesName:temp},  //参数JSON.stringify(temp)
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        //contentType: "application/json",
        dataType: "json",   //服务器返回的数据是什么类型
        beforeSend: function(request) {
        },
        success: function (data) {
            var json = eval(data);
            var status = json.status;
            if(status == 0) {//数据获取成功
                var reMap = json.reMap;
                var serverStringList = reMap.serverStringList;
                search_server.html("");
                search_area.html("<option value=''>全区（服）</option>");
                if(serverStringList == null){
                    search_server.append("<option value=''>全区（服）</option>");
				}else{
                    $.each(serverStringList,function(i,item){
                        search_server.append("<option value='"+item+"'>"+item+"</option>")
                    });
				}
            }
        },
        error: function () {

        }
    });
}
//getDealAutoInfo
function getDealAutoInfo(temp){
	$.ajax({
		url: "http://127.0.0.1:8080/zlb/getDealAutoInfo",//要请求的服务器url
        data: {},  //参数JSON.stringify(temp)
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        //contentType: "application/json",
        dataType: "json",   //服务器返回的数据是什么类型
        beforeSend: function(request) { 
        },
        success: function (data) {
        	var json = eval(data);
        	var status = json.status;
            if(status == 0){//数据获取成功
                var reMap = json.reMap;
                var HOTgamesResultList = reMap.HOTgamesResultList;
                var gamesStringList = reMap.gamesStringList;
                var goodsPageResult = reMap.goodsPageResult;
                var rentResultList = reMap.rentResultList;
                hot_div.html("");
                $.each(HOTgamesResultList,function (i,item) {
                    if(i == 0){
                        hot_div.append("<div class='btn deal-a-1-1-2-2-1 float-left' data-toggle='tooltip' title='"+item.games_name+"'>"+item.games_name+"</div>");
                    }else{
                        hot_div.append("<div class='btn deal-a-1-1-2-2-2 float-left' data-toggle='tooltip' title='"+item.games_name+"'>"+item.games_name+"</div>");
					}
                });
                search_game.html("");
                $.each(gamesStringList,function(i,item){
                    search_game.append("<option value='"+item+"'>"+item+"</option>")
				});
                searchContent.html("");
                if(rentResultList == "" || goodsPageResult==""){
                    searchContent.html("<div class='deal-b-1-1-1-2-2'>查询结果为空，请重试...</div>");
                }else{
                    $.each(rentResultList,function(i,item){
                        searchContent.append("<div class='deal-b-1-1-2-1 float-left' onclick=showInfo('"+item.goods_no+"')>"
                            + "<div class='deal-b-1-1-2-1-1'>"
                            + "<img class='img-fluid' src='img/"+getImg(item.goods_game)+".png' alt='jdqs.png'>"
                            + "</div>"
                            + "<div class='deal-b-1-1-2-1-2'>"
                            + "<div class='deal-b-1-1-2-1-2-1'>"
                            + "<div class='deal-b-1-1-2-1-2-1-1 float-left'>"
                            + "<span>"+item.goods_amount+"元/小时</span>"
                            + "</div>"
                            + "<div class='deal-b-1-1-2-1-2-1-2 float-right'>"
                            + ""+getLevel(item.goods_credit_level)+""
                            + "</div>"
                            + "</div>"
                            + "<div class='deal-b-1-1-2-1-2-2'>"
                            + "<div class='deal-b-1-1-2-1-2-2-1 float-left'>"
                            + "押金：<span>"+item.goods_compensate+"</span>元"
                            + "</div>"
                            + "<div class='deal-b-1-1-2-1-2-2-2 float-right'>"
                            + "最低<span>"+item.goods_short_time+"</span>小时"
                            + "</div>"
                            + "</div>"
                            + "<div class='deal-b-1-1-2-1-2-3'>"
                            + "<div class='deal-b-1-1-2-1-2-3-1'>"
                            + "<span>["+item.account+"]</span>"+item.goods_theme+""
                            + "</div>"
                            + "</div>"
                            + "<div class='deal-b-1-1-2-1-2-4'>"
                            + ""+gethtml(item.goods_recomm)+""
                            + "</div>"
                            + "</div>"
                            + "</div>");
                    });
                    //页码信息设置
                    pageInfo.html("");
                    pageInfo.append("<div class='float-right'>总记录数：[<span>"+goodsPageResult.totalCount+"</span>]条记录</div>" +
                        "<div class='float-right'>总页数:[<span>"+goodsPageResult.totalPage+"</span>]页 </div>" +
                        "<div class='float-right'>每页显示：[<span>"+goodsPageResult.pageSize+"</span>]条记录 </div>" +
                        "<div class='float-right'>当前页：第[<span>"+goodsPageResult.currentPage+"</span>]页 </div>");
                    TotalPagesInfo.currentPage = goodsPageResult.currentPage;
                    TotalPagesInfo.totalPage = goodsPageResult.totalPage;
                }
            }
        },
        error: function () {
        	searchContent.html("<div class='deal-b-1-1-1-2-2'>查询结果为空，请重试...</div>");
        }
	});
}
function gethtml(temp){
	if(temp == 0) return "<div class='deal-b-1-1-2-1-2-4-1 float-left'><span>个人认证</span></div>";
	else if(temp == 1) return "<div class='deal-b-1-1-2-1-2-4-1 float-left'><span>个人认证</span></div>" +
	"<div class='deal-b-1-1-2-1-2-4-1 float-left'><span>商家认证</span></div>";
	else if(temp == 2) return "<div class='deal-b-1-1-2-1-2-4-1 float-left'><span>个人认证</span></div>" +
	"<div class='deal-b-1-1-2-1-2-4-1 float-left'><span>商家认证</span></div>";
	else if(temp == 3) return "<div class='deal-b-1-1-2-1-2-4-1 float-left'><span>个人认证</span></div>" +
	"<div class='deal-b-1-1-2-1-2-4-1 float-left'><span>商家认证</span></div>" +
	"<div class='deal-b-1-1-2-1-2-4-1 float-left'><span>特价商品</span></div>";
}
function getLevel(temp){
	if(temp == 0) return "青铜用户";
	else if(temp == 1) return "白银用户";
	else if(temp == 2) return "黄金用户";
	else if(temp == 3) return "钻石用户";
	else if(temp == 4) return "大师用户";
	else if(temp == 5) return "王者用户";
}
function getImg(temp){
	if(temp == "英雄联盟") return "tx_taste_cj_1";//绝地求生
	else return "tx_taste_cj_2";
}
