$(document).ready(function() {
	
});
/**
 * id 集合
 */
var psonl_content = $("#psonl_content");
var psonl_pg1 = $("#psonl_pg1");
psonl_pg1.bind("click",function () {
	tempPage = "pspg/home";
	showPsonlPage(tempPage);
});
var psonl_pg2 = $("#psonl_pg2");
psonl_pg2.bind("click",function () {
	tempPage = "pspg/psonl_pg2";
	showPsonlPage(tempPage);
});
var psonl_pg3 = $("#psonl_pg3");
psonl_pg3.bind("click",function () {
	tempPage = "pspg/psonl_pg3";
	showPsonlPage(tempPage);
});
var psonl_pg4 = $("#psonl_pg4");
psonl_pg4.bind("click",function () {
	tempPage = "pspg/psonl_pg4";
	showPsonlPage(tempPage);
});
/**
 * 临时变量
 */
var tempPage;
/**
 * 获取页面
 * @param temp
 * @returns
 */
function showPsonlPage(temp) {
	$(location).attr('href', temp);
}