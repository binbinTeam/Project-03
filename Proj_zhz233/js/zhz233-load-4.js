
/**

 * 数据加载
 * @returns
 */
$(document).ready(function() {
	
	RentOrderModle.s_time = "";
	RentOrderModle.e_time = "";
	RentOrderModle.s_type = -1;
	ShowRentOrderInfo(RentOrderModle);
});

/**
 * ID 集合
 */
 
var s_time = $("#s_time");
var e_time = $("#e_time");
var RentOrderModle = {
		s_time: s_time.val(),
		e_time: e_time.val(),
		s_type: -1
};
var s_a0 = $("#s_a0");
s_a0.bind("click",function () {
	RentOrderModle.s_time = s_time.val();
	RentOrderModle.e_time = e_time.val();
	RentOrderModle.s_type = -1;
	ShowRentOrderInfo(RentOrderModle);
});
var s_a1 = $("#s_a1");
s_a1.bind("click",function () {
	RentOrderModle.s_time = s_time.val();
	RentOrderModle.e_time = e_time.val();
	RentOrderModle.s_type = 0;
	ShowRentOrderInfo(RentOrderModle);
});
var s_a2 = $("#s_a2");
s_a2.bind("click",function () {
	RentOrderModle.s_time = s_time.val();
	RentOrderModle.e_time = e_time.val();
	RentOrderModle.s_type = 1;
	ShowRentOrderInfo(RentOrderModle);
});
var s_a3 = $("#s_a3");
s_a3.bind("click",function () {
	RentOrderModle.s_time = s_time.val();
	RentOrderModle.e_time = e_time.val();
	RentOrderModle.s_type = 2;
	ShowRentOrderInfo(RentOrderModle);
});
var s_a4 = $("#s_a4");
s_a4.bind("click",function () {
	RentOrderModle.s_time = s_time.val();
	RentOrderModle.e_time = e_time.val();
	RentOrderModle.s_type = 3;
	ShowRentOrderInfo(RentOrderModle);
});
var leaseContent = $("#leaseContent");
/**
 * 获取资金信息
 * @returns
 */
function ShowRentOrderInfo(temp){
	
	$.ajax({
		url: "dbfo/ShowRentOrderInfo",//要请求的服务器url
        data: JSON.stringify(temp),  //参数
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
            	leaseContent.html("");
            	var reMap = ires.reMap;
            	var reList = reMap.leaseList;
            	$.each(reList,function(i,item){
            		leaseContent.append("<div class='personal-a-1-1-2-5-3-2-0'>" +
            				"<div class='personal-a-1-1-2-5-3-2-1 float-left'>" +
            				"<span>"+dateFormat("Y-m-d H:i:s",item.create_time)+"</span>" +
            				"</div>" +
            				"<div class='personal-a-1-1-2-5-3-2-2 float-left'>" +
            				"<span>"+getType(item.order_state)+"</span>" +
            				"</div>" +
            				"<div class='personal-a-1-1-2-5-3-2-3 float-left'>" +
            				"<div>订单编号：" +
            				"<span>"+item.order_no+"</span>" +
            				"</div>" +
            				"<div>商家编号：" +
            				"<span>"+item.sale_no+"</span>" +
            				"</div>" +
            				"<div>商品编号：" +
            				"<span>"+item.goods_no+"</span>" +
            				"</div>" +
            				"<div>有效时间：" +
            				" <span>"+dateFormat("Y-m-d H:i:s",item.order_start_time)+"</span>至<span>"+dateFormat("Y-m-d H:i:s",item.order_end_time)+"</span>" +
            				"</div>" +
            				"<div>订单总额：" +
            				"￥<span>"+item.order_amount+"</span>元" +
            				"</div>" +
            				"</div>" +
            				"<div class='personal-a-1-1-2-5-3-2-4 float-left'>" +
            				"<div class='personal-a-1-1-2-5-3-2-4-1'>立即付款</div>" +
            				"<div class='personal-a-1-1-2-5-3-2-4-1'>取消订单</div>" +
            				" </div>" +
            				" </div>" +
            				"");
            	});
            }
        },
        error: function () {
        }
	});
}
function getType(temp){
	if(temp == 0) return "等待付款";
	else if(temp == 1) return "租赁中";
	else if(temp == 2) return "已失效";
	else if(temp == 3) return "已成功";
	else return "其他";
}