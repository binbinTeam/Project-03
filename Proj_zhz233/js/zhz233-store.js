/*var json = eval(data);
$.each(json,function(item,value){
	alert(item);
});
var res = json.result;
var res_lab_user = json.lab_user;
if(res.code == 300){
	//设置lab_user
    lab_user.text(res_lab_user);
}
if(res.code == 301){
	alert("数据失败！");
}
*/
$(document).ready(function() {
	
	//localStorage.setItem("key","1QEWqwe3qweEWE4eQEQw6");//   key是保存数据的变量，value是保存的数据

	var key = localStorage.getItem("token");      //     读取之前存储的数据
	
	console.log(key);
	
});