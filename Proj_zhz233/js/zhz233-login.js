/*
 * 页面加载数据
 */
//获取 用户登录信息
$(document).ready(function() {
    //创建html
    createhtml();
});
$(document).ready(function() {
	//创建code
    createCode();
});

function createhtml(){
    if(sessionStorage.getItem("uid")){
        getUserInfo();
    }
}
function getUserInfo() {
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
                $(location).attr('href', 'personallinfo.html');
            }
        },
        error: function () {
            $(location).attr('href', 'login.html');
        }
    });
}
/**
 *
 * @type {*|jQuery|HTMLElement}
 */
//usr
var input_user = $("#input_user");
var user_tip = $("#user_tip");
//pwd
var input_pwd= $("#input_pwd");
var pwd_tip = $("#pwd_tip");
//code
var input_code = $("#input_code");
var code_tip = $("#code_tip");
var code_show = $("#code_show");
var code_change = $("#code_change");
//login
var btn_login = $("#btn_login");
var login_tip = $("#login_tip");
//model
var loginTipModel = $('#loginTipModel');
//btnback
var btn_back = $('#btn_back');
//标识
var usrFlag = false;
var pwdFlag = false;
var codeFlag = false;
//临时变量
var temp0;
var temp1;
//临时储存变量
/**
 * 组件方法
 */
//btn_back
btn_back.bind("click",function () {
	$(location).attr('href', 'bkpg/back1');
});
code_show.bind("click",function () {
    createCode();
});
code_change.bind("click",function () {
   createCode();
});
input_code.bind("blur",function () {
    temp0 = input_code.val().trim().toString();
    temp1 = code_show.text().trim().toString();
    checkCode(temp0,temp1);
});
input_code.bind("focus",function () {
    code_tip.text("请输入验证码！");
    code_tip.attr("class","assist-b-1-1-3-1-tip-1");
});
input_pwd.bind("blur",function () {
    temp0 = input_pwd.val().trim().toString();
    checkPwd(temp0);
});
input_pwd.bind("focus",function () {
    pwd_tip.text("请输入密码！");
    pwd_tip.attr("class","assist-b-1-1-2-1-tip-1");
});
input_user.bind("blur",function () {
    temp0 = input_user.val().trim().toString();
    checkUsr(temp0);
});
input_user.bind("focus",function () {
    user_tip.text("请输入用户名！");
    user_tip.attr("class","assist-b-1-1-2-1-tip-1");
});
btn_login.bind("click",function () {
    temp0 = input_user.val().trim().toString();
    temp1 = input_pwd.val().trim().toString();
    temp2 = input_code.val().trim().toString();
    checkAP(temp0,temp1,temp2);
});
//check ap
function checkAP(temp0,temp1,temp2) {
    var temp3 = temp0;
    var temp4 = temp1;
    var temp5 = temp2;
    var temp6 = code_show.text().trim().toString();
    checkUsr(temp3);
    checkPwd(temp4);
    checkCode(temp5,temp6);
    if(usrFlag&&pwdFlag&&codeFlag){
    	checkUserInfo(temp3,temp4);
    }else{
        if(!usrFlag){
            input_user.focus();
        }else if(!pwdFlag){
            input_pwd.focus();
        }else{
            input_code.focus();
        }
    }
}
var tip_info = $("#tip_info");
//checkuserinfo
function checkUserInfo(temp0,temp1){
    var UserInfo={
        username:temp0,
        password:temp1
    };
	$.ajax({
        url: "http://127.0.0.1:8080/zlb/userBean/login",//要请求的服务器url
        data: JSON.stringify(UserInfo),//参数
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        contentType: "application/json",
        dataType: "json",   //服务器返回的数据是什么类型
        beforeSend: function(request) { 
        },
        success: function (data) {
        	var json = eval(data);
            var status = json.status;
            var message = json.message;
            if(status == 0) {//数据获取成功
                var reMap=json.reMap;
                if(sessionStorage.getItem("uid")){
                    sessionStorage.removeItem("uid")
                }
                sessionStorage.setItem("uid",reMap.uid);
                $(location).attr('href', 'personallinfo.html');
            }else{
                tip_info.html(message);
                $('#loginTipModel').modal('show');
            }
        },
        error: function () {
            $(location).attr('href', 'login.html');
        }
	});
}
//验证格式
function checkUsrOk(temp0) {
    var str = temp0;
    var uPn = /^[a-zA-Z0-9_]{8,12}$/;
    var reg = new RegExp(uPn);
    if (reg.test(str)) {
        return true;
    } else {
        return false;
    }
}
//验证用户名
function checkUsr(temp0) {
    var temp2 = temp0;
    var temp3 = checkUsrOk(temp2);
    //usrFlag = false;
    if(temp2.length <= 7){
        user_tip.text("请重新输入(8~12位长度)用户名！");
        user_tip.attr("class","assist-b-1-1-2-1-tip-2");
    }else if(!temp3){
        user_tip.text("用户名格式错误！");
        user_tip.attr("class","assist-b-1-1-2-1-tip-3");
    }else {
    	checkUserName(temp2);
    }
}
//验证usr  name
function checkUserName(temp0){//home usr
	$.ajax({
        url: "http://127.0.0.1:8080/zlb/userBean/checkUserName",//要请求的服务器url
        data: {username:temp0},  //参数
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        dataType: "json",   //服务器返回的数据是什么类型
        beforeSend: function(request) { 
        },
        success: function (data) {
        	var json = eval(data);
            var status = json.status;
            var message = json.message;
            if(status == 1 && "用户名已注册！" == message){
            	user_tip.text("用户名正确！");
            	user_tip.attr("class","assist-d-1-1-2-1-1-tip-4");
            	usrFlag = true;
            }else{
            	user_tip.text("用户名不存在！");
            	user_tip.attr("class","assist-d-1-1-2-1-1-tip-3");
            }
        },
        error: function () {
            $(location).attr('href', 'login.html');
        }
	});
}
//验证密码格式
function checkPwdOk(temp0) {
    var str = temp0;
    var uPn = /^[a-zA-Z0-9_]{6,12}$/;
    var reg = new RegExp(uPn);
    if (reg.test(str)) {
        return true;
    } else {
        return false;
    }
}
//验证密码
function checkPwd(temp0) {
    var temp2 = temp0;
    var temp3 = checkPwdOk(temp2);
    pwdFlag = false;
    if(temp2.length <= 5){
        pwd_tip.text("请重新输入(6~12位长度)密码！");
        pwd_tip.attr("class","assist-b-1-1-2-1-tip-2");
    }else if(!temp3){
        pwd_tip.text("密码格式错误！");
        pwd_tip.attr("class","assist-b-1-1-2-1-tip-3");
    }else {
        pwd_tip.text("输入成功！");
        pwd_tip.attr("class","assist-b-1-1-2-1-tip-4");
        pwdFlag = true;
    }
}
//验证code
function checkCode(temp0,temp1) {
    var temp2 = temp0.toUpperCase();
    var temp3 = temp1.toUpperCase();
    codeFlag = false;
    if(temp2.length <= 0){
        code_tip.text("请输入验证码！");
        code_tip.attr("class","assist-b-1-1-3-1-tip-2");
    }else if(temp2 !== temp3){
        code_tip.text("验证码错误！");
        code_tip.attr("class","assist-b-1-1-3-1-tip-3");
    }else {
        code_tip.text("验证码正确！");
        code_tip.attr("class","assist-b-1-1-3-1-tip-4");
        codeFlag = true;
    }
}
/**
 * 获取验证码
 */
function createCode(){
    var code = "";
    var codeLength = 4;//验证码的长度
    var selectChar = new Array(
        1,2,3,4,5,6,7,8,9,
        'a','b','c','d','e','f','g','h',
        'j','k','l','m','n','p','q','r',
        's','t','u','v','w','x','y','z',
        'A','B','C','D','E','F','G','H',
        'J','K','L','M','N','P','Q','R',
        'S','T','U','V','W','X','Y','Z');
    for(var i=0;i<codeLength;i++) {
        var charIndex = Math.floor(Math.random()*60);
        code +=selectChar[charIndex];
    }
    if(code.length != codeLength){
        createCode();
    }else{
        code_show.text(code);
    }
}