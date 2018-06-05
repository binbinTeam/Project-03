$(document).ready(function() {
    loginLoading();
});
var codeFlag = 0; //在全局 定义验证码标识
var userFlag = 0; //在全局 定义User标识
var pwdFlag = 0;//在全局 定义Pwd标识
var userDBFlag = 0;//在全局 定义DB标识
var pwdDBFlag = 0;
function createCode(){
    code = "";
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
    }
    showCode(code);
}
function showCode(tempc){
    codeFlag = 0;
    $("#code_show").text(tempc);
}
//密码验证
function PwdToCheckOK(input_pwd) {//必须为字母或数字或下划线字符且长度不小于6位也不大于12位
    var uPn = /^[a-zA-Z0-9_]{6,12}$/;
    var str = input_pwd;
    var reg = new RegExp(uPn);
    if (reg.test(str)) {
        return true;
    } else {
        return false;
    }
}
//用户名验证
function UserToCheckOk(input_user) {//必须为字母或数字或下划线字符且长度不小于8位也不大于12位
    var uPn = /^[a-zA-Z0-9_]{8,12}$/;
    var str = input_user;
    var reg = new RegExp(uPn);
    if (reg.test(str)) {
        return true;
    } else {
        return false;
    }
}
//验证code
function checkCode() {
    var inputCode = $("#input_code").val().toUpperCase();
    var codeToUp=code.toUpperCase();
    if(inputCode.length <=0) {
        $("#code_tip").text("请输入验证码！");
        $("#code_tip").attr("class","assist-b-1-1-3-1-tip-2");
        codeFlag = 0;
        return false;
    }
    else if(inputCode != codeToUp ){
        $("#code_tip").text("输入的验证码有误！");
        $("#code_tip").attr("class","assist-b-1-1-3-1-tip-3");
        codeFlag = 0;
        return false;
    }
    else {
        $("#code_tip").text("验证码正确！");
        $("#code_tip").attr("class","assist-b-1-1-3-1-tip-4");
        if(userFlag<=0){
            $("#input_user").focus();
        }else if(userFlag>=0 && pwdFlag<=0){
            $("#input_pwd").focus();
        }
        codeFlag = 1;
        return true;
    }
}
function checkPwd() {
    var inputPwd = $("#input_pwd").val();
    var inputUser = $("#input_user").val();
    var PwdToCheck = PwdToCheckOK(inputPwd);
    if(inputPwd.length <=0) {
        $("#pwd_tip").text("请输入密码！");
        $("#pwd_tip").attr("class","assist-b-1-1-2-1-tip-2");
        pwdFlag = 0;
    }
    else if(!PwdToCheck){
        $("#pwd_tip").text("请重新输入密码！");
        $("#pwd_tip").attr("class","assist-b-1-1-2-1-tip-3");
        pwdFlag = 0;
    }
    else {
        if(userDBFlag > 0){
            checkDBAccPwd(inputUser,inputPwd);
        }else{
            $("#pwd_tip").text("请输入用户名！");
            $("#pwd_tip").attr("class","assist-b-1-1-2-1-tip-2");
            $("#input_user").focus();
        }
    }
}
function checkUser() {
    var inputUser = $("#input_user").val();
    var UserToCheck = UserToCheckOk(inputUser);
    if(inputUser.length <=0) {
        $("#user_tip").text("请输入用户名/手机号！");
        $("#user_tip").attr("class","assist-b-1-1-2-1-tip-2");
        userFlag = 0;
    }else if(!UserToCheck){
        $("#user_tip").text("请重新输入的用户名/手机号！");
        $("#user_tip").attr("class","assist-b-1-1-2-1-tip-3");
        userFlag = 0;
    }else{
        if(pwdDBFlag <= 0){
            checkDBUser(inputUser);
        }else{
            $("#input_pwd").val("");
            $("#input_pwd").focus();
        }
    }
}
function checkDBAccPwd(input_acc,input_pwd) {
    var acc = input_acc;
    var pwd = input_pwd;
    $.ajax({
        url: "logon/checkacpw",//要请求的服务器url
        data: {uacc: acc,upwd: pwd},  //这里的
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        dataType: "json",   //服务器返回的数据是什么类型
        success:function (data) {  //这个方法会在服务器执行成功是被调用 ，参数result就是服务器返回的值(现在是json类型)
            var json = eval(data);
            if(json.status == "000")
            {
                $("#pwd_tip").text("输入密码正确！");
                $("#pwd_tip").attr("class","assist-b-1-1-2-1-tip-4");
                if(userFlag>=0 && codeFlag<=0){
                    $("#input_code").focus();
                }
                pwdFlag = 1;
                pwdDBFlag = 1;
            }else{
                $("#user_tip").text("输入密码错误！");
                $("#user_tip").attr("class","assist-b-1-1-2-1-tip-3");
                $("#input_user").focus();
                pwdFlag = 0;
                pwdDBFlag = 0;
            }
        },
        error:function (status) {
            userDBFlag = 0;
        }
    });
}

function DBlogin(input_acc,input_pwd) {
    var acc = $("#input_user").val();
    var pwd = $("#input_pwd").val();
    $.ajax({
        url: "logon/signin",//要请求的服务器url
        data: {uacc: acc,upwd: pwd},  //这里的
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        dataType: "json",   //服务器返回的数据是什么类型
        complete:function () {  //这个方法会在服务器执行成功是被调用 ，参数result就是服务器返回的值(现在是json类型)
            window.location.reload();
        }
    });
}

function checkDBUser(input_user) {
    var acc = input_user;
    $.ajax({
        url: "logon/checkacc",//要请求的服务器url
        data: {uacc: acc},  //这里的
        async: true,   //是否为异步请求
        cache: false,  //是否缓存结果
        type: "POST", //请求方式为POST
        dataType: "json",   //服务器返回的数据是什么类型
        success:function (data) {  //这个方法会在服务器执行成功是被调用 ，参数result就是服务器返回的值(现在是json类型)
            var json = eval(data);
            if(json.status == "000")
            {
                $("#user_tip").text("用户名/手机号正确！");
                $("#user_tip").attr("class","assist-b-1-1-2-1-tip-4");
                if(pwdFlag<=0){
                    $("#input_pwd").focus();
                }else if(pwdFlag>=0 && codeFlag<=0){
                    $("#input_code").focus();
                }
                userFlag = 1;
                userDBFlag = 1;
            }else{
                $("#user_tip").text("用户名/手机号不存在！");
                $("#user_tip").attr("class","assist-b-1-1-2-1-tip-3");
                $("#input_user").focus();
                userFlag = 0;
                userDBFlag = 0;
            }
        },
        error:function (status) {

            userDBFlag = 0;
        }
    });
}
function checkRememberMe(){
    //cookie 操作

    /*if(inputrem.is(":checked")){
        alert(temp);
    }*/

}
//加载JQ操作
function loginLoading() {
    createCode();
    $("#input_user").bind("blur",function(){
        $("#user_tip").text("用户名/手机号");
        $("#user_tip").attr("class","assist-b-1-1-2-1-tip-5");
        checkUser();
    });
    $("#input_user").bind("focus",function(){
        $("#user_tip").text("用户名/手机号");
        $("#user_tip").attr("class","assist-b-1-1-2-1-tip-5");
        $("#input_pwd").val("");
        $("#pwd_tip").text("");
    });
    $("#input_pwd").bind("blur",function () {
        $("#pwd_tip").text("密码");
        $("#pwd_tip").attr("class","assist-b-1-1-2-1-tip-5");
        checkPwd();
    });
    $("#input_pwd").bind("focus",function () {
        $("#pwd_tip").text("密码");
        $("#pwd_tip").attr("class","assist-b-1-1-2-1-tip-2");
        checkPwd();
    });
    $("#code_change").bind("click",function(){
        $("#input_code").attr("验证码");
        $("#input_code").val("");
        $("#input_code").focus();
        $("#code_tip").text("请输入验证码！");
        $("#code_tip").attr("class","assist-b-1-1-3-1-tip-5");
        createCode();
    });
    $("#code_show").bind("click",function(){
        $("#input_code").attr("placeholder","验证码");
        $("#input_code").val("");
        $("#input_code").focus();
        $("#code_tip").text("请输入验证码！");
        $("#code_tip").attr("class","assist-b-1-1-3-1-tip-5");
        createCode();
    });
    $("#input_code").bind("blur",function(){
        checkCode();
    });
    $("#btn_login").bind("click",function () {
        if(userFlag <= 0){
            checkUser();
            $("#input_user").focus();
        }
        if(pwdFlag <= 0 && userFlag > 0){
            checkPwd();
            $("#input_pwd").focus();
        }
        if(codeFlag <= 0 && pwdFlag > 0 && userFlag > 0){
            checkCode();
            $("#input_code").focus();
        }else if(codeFlag > 0 && pwdFlag > 0 && userFlag > 0){

            if(userDBFlag > 0 && pwdDBFlag > 0){
                DBlogin();
            }else{
                $("#login_tip").text("登录失败，请重新登录！");
                $("#login_tip").attr("class","assist-b-1-1-3-1-tip-3");
                $("#input_user").focus();
                codeFlag = 0;
                pwdFlag = 0;
                userFlag = 0;
                userDBFlag = 0;
                pwdDBFlag = 0;
            }
        }
    });
}