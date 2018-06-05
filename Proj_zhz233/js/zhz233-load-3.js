$(document).ready(function() {
	PInvlaModel = {//数据集合
			start_time: start_time.val(),
			end_time: end_time.val(),
			order_operate_type: null,
			startPage: 0,
			pageSize: 5
	}
	ShowInvlaInfo(PInvlaModel);
});
/**
 * id 集合
 */
var PInvlaModel = {};
var psonl_content = $("#psonl_content");

var start_time = $("#start_time");
start_time.change( function () {
	PInvlaModel = {//数据集合
			start_time: start_time.val(),
			end_time: end_time.val(),
			order_operate_type: "",
			startPage: 0,
			pageSize: 5
	}
	ShowInvlaInfo(PInvlaModel);
});
var end_time = $("#end_time");
end_time.change( function () {
	PInvlaModel = {//数据集合
			start_time: start_time.val(),
			end_time: end_time.val(),
			order_operate_type: "",
			startPage: 0,
			pageSize: 5
	}
	ShowInvlaInfo(PInvlaModel);
});
var all1 = $("#all1");
all1.bind("click",function () {
	PInvlaModel = {//数据集合
			start_time: start_time.val(),
			end_time: end_time.val(),
			order_operate_type: "",
			startPage: 0,
			pageSize: 5
	}
	ShowInvlaInfo(PInvlaModel);
});
var all2 = $("#all2");
all2.bind("click",function () {
	PInvlaModel = {//数据集合
			start_time: start_time.val(),
			end_time: end_time.val(),
			order_operate_type: 0,
			startPage: 0,
			pageSize: 5
	}
	ShowInvlaInfo(PInvlaModel);
});
var all3 = $("#all3");
all3.bind("click",function () {
	PInvlaModel = {//数据集合
			start_time: start_time.val(),
			end_time: end_time.val(),
			order_operate_type: 1,
			startPage: 0,
			pageSize: 5
	}
	ShowInvlaInfo(PInvlaModel);
});
var all4 = $("#all4");
all4.bind("click",function () {
	PInvlaModel = {//数据集合
			start_time: start_time.val(),
			end_time: end_time.val(),
			order_operate_type: 2,
			startPage: 0,
			pageSize: 5
	}
	ShowInvlaInfo(PInvlaModel);
});
var all5 = $("#all5");
all5.bind("click",function () {
	PInvlaModel = {//数据集合
			start_time: start_time.val(),
			end_time: end_time.val(),
			order_operate_type: 3,
			startPage: 0,
			pageSize: 5
	}
	ShowInvlaInfo(PInvlaModel);
});
var all6 = $("#all6");
all6.bind("click",function () {
	PInvlaModel = {//数据集合
			start_time: start_time.val(),
			end_time: end_time.val(),
			order_operate_type: 4,
			startPage: 0,
			pageSize: 5
	}
	ShowInvlaInfo(PInvlaModel);
});
var showContent = $("#showContent");;
/**
 * 获取资金信息
 * @returns
 */
function ShowInvlaInfo(temp){
	
	$.ajax({
		url: "dbfo/ShowInvlaInfo",//要请求的服务器url
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
            showContent.html("");
            if(res.code == 1022 && ires.code == 1024){//数据获取成功
            	var reMap = ires.reMap;
            	$.each(reMap,function(i,item){
            		if(i == "data_list"){
                    	var reList = reMap.data_list;
            			$.each(reList,function(i,item){
            				showContent.append("<div class='personal-a-1-1-2-4-2-1-1-3-2-0'>" 
	            				+ "<div class='personal-a-1-1-2-4-2-1-1-3-2-1 float-left'>"+dateFormat("Y-m-d H:i:s",item.update_time)+"</div>"
	            				+ "<div class='personal-a-1-1-2-4-2-1-1-3-2-2 float-left'>"+getitem(item.order_operate_type)+"</div>"
	            				+ "<div class='personal-a-1-1-2-4-2-1-1-3-2-3 float-left'>"
	            				+ "<div class='personal-a-1-1-2-4-2-1-1-3-2-3-1 float-left'>"
	            				+ "<div>订单号："+item.order_no+"</div>"
								+ "<div>交易类型："+getitem(item.order_operate_type)+"</div>"
								+ "<div>交易时间："+dateFormat("Y-m-d H:i:s",item.update_time)+"</div>"
								+ "<div>创建时间："+dateFormat("Y-m-d H:i:s",item.create_time)+"</div>"
								+ "<div>交易总额：￥"+item.order_amount+"</div>"
								+ "</div>"
								+ "</div>"
								+ "<div class='personal-a-1-1-2-4-2-1-1-3-2-4 float-left'>￥"+item.order_amount+"</div>"
								+ "</div>"
								+ "</div>");
            			});
            		}
            	});
            	{
        			showContent.append("<div class='personal-a-1-1-2-4-2-1-1-3-2-0-1'>"
        					+ "<div class='personal-a-1-1-2-4-2-1-1-3-2-0-1-1 float-left'>"
        					+ "<div class='float-left'>当前页码:第<span id='current_page'>"+reMap.current_page+1+"</span>页</div>"
        					+ "<div class='float-left'>每页条数:<span  id='each_page'>"+reMap.each_page+"</span>条</div>"
        					+ "<div class='float-left'>记录总数：共:<span id='total_count'>"+reMap.total_count+"</span>条</div>"
        					+ "</div>"
        					+ "</div>");
        		}
            }
        },
        error: function () {
        }
	});
}
function getitem(temp){
	var temStr = "";
	if(temp == 0){
		temStr = "支出";
	}else if(temp == 1){
		temStr = "收入";
	}else if(temp == 2){
		temStr = "充值";
	}else if(temp == 3){
		temStr = "提现";
	}else if(temp == 4){
		temStr = "冻结";
	}else{
		temStr = "其他";
	}
	return temStr;
}