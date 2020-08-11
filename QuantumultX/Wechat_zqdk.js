/*
 @𝐗𝐢𝐝𝐍
//++++++++++++++++++++++++++++++++-
微信小程序打卡 获得健康币 建议1到2分钟运行一下
以免黑号 
打开小程序获取ck




surge:本地
早起打卡小程序 = type=http-request,pattern=^https:\/\/xx\.cqxygzs\.cn\/*,requires-body=1,max-size=0,script-path=zqdk.js


圈x:本地
^https:\/\/xx\.cqxygzs\.cn\/* url script-request-header zqdk.js


loon:本地
http-request ^https:\/\/xx\.cqxygzs\.cn\/* script-path=zqdk.js, requires-body=true, timeout=10, tag=早起打卡小程序



MITM= xx.cqxygzs.cn






*/











const $XidN = XidN();//声明必须



const  zaoqidaka="早起打卡小程序";



const zqdk_signckname="zqdk_signckname";




//++++++++++++++++++++++++++++++++-


if ($XidN.isRequest)
{

zqdk_writeck();
  
  }
$XidN.end()
  
  
function zqdk_writeck() {

if ($request.headers) {

 var urlval = $request.url;

var md_header=$request.headers;
var md_bd=$request.body;
var tt=zaoqidaka;
console.log(urlval)
if(urlval.indexOf("app/index.php?")>=0)
{
var zqdk_signck=urlval.substr(urlval.indexOf("token="),38);




 var so= $XidN.write(zqdk_signck,zqdk_signckname);

 

if (so==true) 

  papa(tt,"[打卡ck]","获取" + tt + "数据成功⭕️");}


}
}





//可以增加模块



function papa(x,y,z){
 $XidN.notify(x,y,z);}




function XidN() {
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
    }
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.get(options, callback)
    }
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.post(options, callback)
    }
    const end = () => {
        if (isQuanX) isRequest ? $done({}) : ""
        if (isSurge) isRequest ? $done({}) : $done()
    }
    return { isRequest, isQuanX, isSurge, notify, write, read, get, post, end }
};
