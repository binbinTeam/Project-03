/**
 * 页面加载数据
 * @returns
 */
$(document).ready(function() {
	//showInfo();
});
function showInfo() {
	var showGoodsKey = sessionStorage.getItem("showGoodsKey");
	if(showGoodsKey == null || showGoodsKey == ""){

	}else{
		//showAuto(showGoodsKey);
	}
}
var InfoTipModel = $("#InfoTipModel");
/**
 * ID
 */
var info01 = $("#info01");
var info02 = $("#info02");
var info03 = $("#info03");
var info04 = $("#info04");
var info05 = $("#info05");
var info06 = $("#info06");
var info07 = $("#info07");
var info08 = $("#info08");
var info09 = $("#info09");
var info10 = $("#info10");
var info11 = $("#info11");
var info12 = $("#info12");
var info13 = $("#info13");
var info14 = $("#info14");
var info15 = $("#info15");
var infoimg = $("#infoimg");
var infoimgT = $("#infoimgT");
var infoimgTP = $("#infoimgTP");

var RentModel = {
		Stime: "",
		Etime: "",
		Sdate: "",
		Edate: ""
};
var LeaseModel = {
		goods_no: "",
		start_time: "",
		end_time: ""
};
var Stime = $("#Stime");
var Etime = $("#Etime");
var Sdate = $("#Sdate");
var Edate = $("#Edate");
var btn_dt = $("#btn_dt");
btn_dt.bind("click",function(){
	RentModel.Stime = Stime.val();
	RentModel.Etime = Etime.val();
	RentModel.Sdate = Sdate.val();
	RentModel.Edate = Edate.val();
	PutRentInfo(RentModel);
	if(sessionStorage.getItem("showKey") != null){
		var GNo = sessionStorage.getItem("showKey");
		LeaseModel.goods_no = GNo;
		if(RentModel.Stime != null && RentModel.Sdate != null){
			LeaseModel.start_time = RentModel.Sdate + " " + RentModel.Stime;
		}else if(RentModel.Stime == null && RentModel.Sdate != null){
			LeaseModel.start_time = RentModel.Sdate + " " + "00:00:00";
		}else{
			LeaseModel.end_time = null;
		}
		if(RentModel.Etime != null && RentModel.Edate != null){
			LeaseModel.end_time = RentModel.Edate + " " + RentModel.Etime;
		}else if(RentModel.Etime == null && RentModel.Edate != null){
			LeaseModel.end_time = RentModel.Edate + " " + "00:00:00";
		}else{
			LeaseModel.end_time = null;
		}
		//console.log(LeaseModel);
		addRentOrder(LeaseModel);
	}else{

	}
});

/*function addRentOrder(temp) {
	$.ajax({
        url: "dbfo/AddLeaseOrder",//要请求的服务器url
        data: JSON.stringify(temp),//参数
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
            	var reMap = ires.reMap;
            	//$(location).attr("href", "pspg/psonl_pg4");
            }else{

            }
        },
        error: function () {
        }
	});
}*/
var if1 = $("#if1");
if1.bind("click",function(){
	ChangeDIV();
	if1.attr("Class","info-a-1-1-2-2-2 float-left");
	//
	/*showM(0);*/
});
var if2 = $("#if2");
if2.bind("click",function(){
	ChangeDIV();
	if2.attr("Class","info-a-1-1-2-2-2 float-left");
	/*showM(1);*/
});
var if3 = $("#if3");
if3.bind("click",function(){
	ChangeDIV();
	if3.attr("Class","info-a-1-1-2-2-2 float-left");
	/*showM(2);*/
});
var if4 = $("#if4");
if4.bind("click",function(){
	ChangeDIV();
	if4.attr("Class","info-a-1-1-2-2-2 float-left");
	/*showM(3);*/
});
function ChangeDIV(){
	if1.attr("Class","info-a-1-1-2-2-1 float-left");
	if2.attr("Class","info-a-1-1-2-2-1 float-left");
	if3.attr("Class","info-a-1-1-2-2-1 float-left");
	if4.attr("Class","info-a-1-1-2-2-1 float-left");
}
function PutRentInfo(temp){
	if(sessionStorage.getItem("RentInfo") != null){
		sessionStorage.removeItem("RentInfo");
	}
	sessionStorage.setItem("RentInfo",temp);
}
var goNow = $("#goNow");
goNow.bind("click",function(){
	$('#InfoTipModel').modal('show');
});
var goBH = $("#goBH");
goBH.bind("click",function(){
	$('#InfoTipModel').modal('show');
	
});
/**
 * 
 * @param temp
 * @returns
 */
/*function showAuto(temp){
	$.ajax({
        url: "info/showAutoInfo",//要请求的服务器url
        data: {GoodsNo:temp},  //参数
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
            if(res.code == 1026 && ires.code == 1028){//数据获取成功
            	var reMap = ires.reMap;
            	var reList = reMap.showInfo;
            	infoimgT.html("<img src='img/"+getImgT(reList.games_name)+".png' alt='info.png'>");
            	infoimgTP.html("<img src='img/"+getImgT(reList.games_name)+".png' alt='info.png'>");
            	info01.html("【"+reList.account_no+"】"+reList.goods_theme+"");
            	info02.html("最低"+reList.goods_short_time+"小时");
            	info03.html("￥"+reList.goods_hour+"");
            	info04.html("￥"+reList.goods_night+"");
            	info05.html("￥"+reList.goods_day+"");
            	info06.html("￥"+reList.goods_week+"");
            	info07.html(gethtml(reList.goods_recomm));
            	info08.html("游戏名称："+reList.games_name+"");
            	info09.html("游戏区服："+reList.servers_name+"/"+reList.areas_name+"");
            	info10.html(getLogon(reList.goods_logon_style));
            	info11.html("担保押金：￥"+reList.goods_compensate+"（<span>不得使用外挂等第三方软件，违反将会永久进入黑名单。</span>）");
            	info12.html("<li>角色名："+reList.goods_lol_role+"</li><li>英雄：无/有</li><li>皮肤：无/有</li>");
            	info13.html("<li>等级："+reList.goods_lol_grade+"</li><li>段位："+reList.goods_lol_rank+"</li><li>框："+getYN(reList.goods_lol_case)+"</li>");
            	info14.html("<li>排位："+getNY(reList.goods_lol_access)+"</li><li>延时不下线："+getNY(reList.goods_delay)+"</li>");
            	info15.html("<li>最短租用时间："+reList.goods_short_time+"小时</li><li>最低用户等级："+getLevel(reList.goods_credit_level)+"</li><li>保险金：￥"+reList.goods_compensate+"</li>");
            	infoimg.html("<img class='img-fluid' src='img/"+getImg(reList.games_name)+".png' alt='show_.png'>");
            }
            $('#showinfo_tab li:eq(0) a').tab('show');
        },
        error: function () {
        }
	});
}*/
function getImg(temp){
	if(temp == "英雄联盟") return "sh_info_show_4";
	//绝地求生
	else return "sh_info_show_2";
}
function getImgT(temp){
	if(temp == "英雄联盟") return "sh_info_show_3";
	//绝地求生
	else return "sh_info_show_1";
}
function getLevel(temp){
	if(temp == 0) return "青铜用户";
	else if(temp == 1) return "白银用户";
	else if(temp == 2) return "黄金用户";
	else if(temp == 3) return "钻石用户";
	else if(temp == 4) return "大师用户";
	else if(temp == 5) return "王者用户";
}
function getNY(temp){
	if(temp == 0) return "不允许";
	else return "允许";
}
function getYN(temp){
	if(temp == 0) return "无";
	else return "有";
}
function getLogon(temp){
	if(temp == 0) return "账号密码";
	else return "上号器";
}
function gethtml(temp){
	if(temp <= 0) return "<div class='info-a-1-1-2-3-1 float-left'>个人认证</div>";
	else if(temp == 1) return "<div class='info-a-1-1-2-3-1 float-left'>个人认证</div>" +
	"<div class='info-a-1-1-2-3-1 float-left'>商家认证</div>";
	else if(temp == 2) return "<div class='info-a-1-1-2-3-1 float-left'>个人认证</div>" +
	"<div class='info-a-1-1-2-3-1 float-left'>商家认证</div>";
	else if(temp >= 3) return "<div class='info-a-1-1-2-3-1 float-left'>个人认证</div>" +
	"<div class='info-a-1-1-2-3-1 float-left'>商家认证</div>" +
	"<div class='info-a-1-1-2-3-1 float-left'>特价商品</div>";
}