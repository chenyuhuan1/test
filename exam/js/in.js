
var bbb=location.href;
var data= url_get_params(bbb)
if (sessionStorage.kkk == undefined || sessionStorage.kkk == "undefined") {
    if(data.token != undefined && data.token != "undefined" ) {
        sessionStorage.kkk=data.token; //t
    }else {
        sessionStorage.kkk=data.bbb; //t
    }
}
if (sessionStorage.bbb == undefined || sessionStorage.bbb == "undefined") {
    if(data.uid != undefined && data.uid != "undefined" ) {
        sessionStorage.bbb=data.uid; //u
    }else {
        sessionStorage.bbb=data.aaa; //u
    }
}

function url_get_params(url_path){
    var url = url_path;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(url.indexOf("?")+1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
sessionStorage.$ip='http://test.api.lvdou66.com:8036/';
// sessionStorage.$ip="https://zhiboweb.ishuaji.cn/";    //正式服API


/* 封装ajax函数
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式
 * @param {string}opt.url 发送请求的url
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}opt.data 发送的参数，格式为对象类型
 * @param {function}opt.success ajax发送并接收成功调用的回调函数
 */
function ajax(opt) {
    opt = opt || {};
    opt.method = opt.type.toUpperCase() || 'POST';
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.dataType = opt.dataType || '';
    opt.success = opt.success || function () {};
    var xmlHttp = null;
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }var params = [];
    for (var key in opt.data){
        params.push(key + '=' + opt.data[key]);
    }
    var postData = params.join('&');
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xmlHttp.send(postData);
    }
    else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
        xmlHttp.send(null);
    } 
    xmlHttp.onreadystatechange = function () {
        var res;
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            res = xmlHttp.responseText;
            if(opt.dataType == 'json') {
            }
            opt.success(res);
        }
    };
}
