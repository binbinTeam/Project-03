/**
 * 页面加载数据
 * @returns
 */
$(document).ready(function() {
	showAutoTasteInfo();
});
/**
 * 数据盒子
 * @returns
 */
var taste_1 = $("#taste_1");
var taste_2 = $("#taste_2");
var taste_3 = $("#taste_3");
var taste_4 = $("#taste_4");
var tastecontent = $("#tastecontent");
//数据查询
function showSearchInfo(temp){
	$(location).attr('href', 'deal.html');
}
function showGoodsInfo(temp){
    if(sessionStorage.getItem("showGoodsKey") != null){
        sessionStorage.removeItem("showGoodsKey");
    }
    sessionStorage.setItem("showGoodsKey", temp);
    $(location).attr("href", "showinfo.html");
}
function getimg(temp){
	if(temp == "英雄联盟"){
		return "img/tx_taste_cj_1.png";
	}else if(temp == "绝地求生"){
		return "img/tx_taste_cj_2.png";
	}else{
		return "img/tx_taste_cj_1.png";
	}
}
//获取列表数据
function showAutoTasteInfo(){
	$.ajax({
        url: "http://127.0.0.1:8080/zlb/getTasteAutoInfo",//要请求的服务器url
        data: {},  //参数
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
            	var HOTgamesResultList = reMap.HOTgamesResultList;
            	var DYgamesResultList = reMap.DYgamesResultList;
                var YYgamesResultList = reMap.YYgamesResultList;
                var SYgamesResultList = reMap.SYgamesResultList;
                var goodsResultList = reMap.goodsResultList;
				taste_1.html("");
				taste_1.append("<div class='taste-a-1-1-2-1-1'><span>体验租</span><span>热门游戏</span></div>");
				$.each(HOTgamesResultList,function(i,item){
					if(i == 0){
						taste_1.append("<div class='btn taste-a-1-1-2-1-2 taste-a-1-1-2-1-2-1' data-toggle='tooltip' title='"+item.games_name+"' onclick=showSearchInfo('"+item.games_name+"')>"+item.games_name+"</div>");
					}else{
						taste_1.append("<div class='btn taste-a-1-1-2-1-2' data-toggle='tooltip' title='"+item.games_name+"' onclick=showSearchInfo('"+item.games_name+"')>"+item.games_name+"</div>");
					}
				});
				taste_2.html("");
				taste_2.append("<div class='taste-a-1-1-2-1-1'><span>体验租</span><span>端游专区</span></div>");
				$.each(DYgamesResultList,function(i,item){
					taste_2.append("<div class='btn taste-a-1-1-2-1-3' data-toggle='tooltip' title='"+item.games_name+"' onclick=showSearchInfo('"+item.games_name+"')>"+item.games_name+"</div>");
				});
				taste_3.html("");
				taste_3.append("<div class='taste-a-1-1-2-1-1'><span>体验租</span><span>手游专区</span></div>");
				$.each(SYgamesResultList,function(i,item){
					taste_3.append("<div class='btn taste-a-1-1-2-1-3' data-toggle='tooltip' title='"+item.games_name+"' onclick=showSearchInfo('"+item.games_name+"')>"+item.games_name+"</div>");
				});
				taste_4.html("");
				taste_4.append("<div class='taste-a-1-1-2-1-1'><span>体验租</span><span>页游专区</span></div>");
				$.each(YYgamesResultList,function(i,item){
					taste_4.append("<div class='btn taste-a-1-1-2-1-3' data-toggle='tooltip' title='"+item.games_name+"' onclick=showSearchInfo('"+item.games_name+"')>"+item.games_name+"</div>");
				});

                tastecontent.html("");
                for(var a = 0;a < 2;a++){
                    tastecontent.append("<div class='taste-c-1-1' id='taste_special_"+a+"'></div>");
                }
                var taste_special_0 = $("#taste_special_0");
                var taste_special_1 = $("#taste_special_1");
                taste_special_0.append("<div class='taste-c-1-1-1 float-left' onclick=showGoodsInfo('"+goodsResultList[0].goods_no+"')>"
                    + "<div class='taste-c-1-1-1-1'>"
                    + "<img class='img-fluid' src='"+getimg(goodsResultList[0].goods_game)+"' alt='cj_1.png'>"
                    + "</div>"
                    + "<div class='taste-c-1-1-1-2'>"
                    + "<div class='taste-c-1-1-1-2-1 auto-a-0'>"
                    + ""+goodsResultList[0].goods_theme+"<br>"
                    + ""+goodsResultList[0].goods_amount+"元/小时"
                    + "</div>"
                    + "</div>"
                    + "</div>");
                for(var b = 1;b<5;b++){
                    taste_special_0.append("<div class='taste-c-1-1-2 float-left' onclick=showGoodsInfo('"+goodsResultList[b].goods_no+"')>"
                        + "<div class='taste-c-1-1-1-1'>"
                        + "<img class='img-fluid' src='"+getimg(goodsResultList[b].goods_game)+"' alt='cj_1.png'>"
                        + "</div>"
                        + "<div class='taste-c-1-1-1-2'>"
                        + "<div class='taste-c-1-1-1-2-1 auto-a-0'>"
                        + ""+goodsResultList[b].goods_theme+"<br>"
                        + ""+goodsResultList[b].goods_amount+"元/小时"
                        + "</div>"
                        + "</div>"
                        + "</div>");
                }
                taste_special_1.append("<div class='taste-c-1-1-1 float-left' onclick=showGoodsInfo('"+goodsResultList[5].goods_no+"')>"
                    + "<div class='taste-c-1-1-1-1'>"
                    + "<img class='img-fluid' src='"+getimg(goodsResultList[5].goods_game)+"' alt='cj_1.png'>"
                    + "</div>"
                    + "<div class='taste-c-1-1-1-2'>"
                    + "<div class='taste-c-1-1-1-2-1 auto-a-0'>"
                    + ""+goodsResultList[5].goods_theme+"<br>"
                    + ""+goodsResultList[5].goods_amount+"元/小时"
                    + "</div>"
                    + "</div>"
                    + "</div>");
                for(var b = 6;b<10;b++){
                    taste_special_1.append("<div class='taste-c-1-1-2 float-left' onclick=showGoodsInfo('"+goodsResultList[b].goods_no+"')>"
                        + "<div class='taste-c-1-1-1-1'>"
                        + "<img class='img-fluid' src='"+getimg(goodsResultList[b].goods_game)+"' alt='cj_1.png'>"
                        + "</div>"
                        + "<div class='taste-c-1-1-1-2'>"
                        + "<div class='taste-c-1-1-1-2-1 auto-a-0'>"
                        + ""+goodsResultList[b].goods_theme+"<br>"
                        + ""+goodsResultList[b].goods_amount+"元/小时"
                        + "</div>"
                        + "</div>"
                        + "</div>");
                }
            }
            //加载提示
            $("[data-toggle='tooltip']").tooltip();
        },
        error: function () {
        	//$(location).attr('href', 'bspg/home');
        }
	});
}