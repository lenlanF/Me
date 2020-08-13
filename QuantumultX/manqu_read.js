/*=================================
关注微信公众号iosrule和Q2群320560160
邀请码 ENARIR
下载地址:https://apps.apple.com/cn/app/id1474215729
2020.8.13更新签到

#Qx 我爱阅读App签到
http:\/\/open\.vd01\.cn\/remain\/report-reward url script-request-body manqu_read2.js

#定时
0 2,13,25,45,55 0-23 * * ? manqu_read.js, tag=我爱阅读, enabled=false

mit=open.vd01.cn

//====================================

#loon 我爱阅读App签到
http-request http:\/\/open\.vd01\.cn\/remain\/report-reward script-path=manqu_read2.js, requires-body=true, timeout=30, tag=我爱阅读

mit=open.vd01.cn

//阅读进度圆圈完成获取cookie.
*/

//====================================
const $iosrule = iosrule();
const log=1;//设置0关闭日志,1开启日志
const TT=3;//运行多少次提示
const closemsg=0;//1,彻底关闭通知
//++++++++++++++++++++++++++++++++-











const manqu="我爱阅读APP";
const manqubdname="manqubdname";
var manqubd=$iosrule.read(manqubdname);
var manqu_gold=0;
var manqu_num=0;
var manqu_res="";
var myhttpdns="http://open.vd01.cn"
//++++++++++++++++++++++++++++++++


function main()
{  manqu_begin();
}

function manqu_begin()
{

manqu_sign();

}
















function manqu_sign()
  {
   var result1="[签到]";
   var result2="";
var code=JSON.parse(manqubd);
var BTA="token="+code.token;
const llUrl1={url:myhttpdns+"/user/sign",headers: {"Content-Type":"application/json"},body:manqubd}
const llUrl2={url:myhttpdns+"/welfare/bind-packet?"+iosint()+BTA}
const llUrl3={url:myhttpdns+"/user/center",headers: {"Content-Type":"application/json"},body:manqubd}
  $iosrule.post(llUrl1,function(error, response, data) {
    if(log==0)console.log(data)
    var obj=JSON.parse(data);
    if(obj.code==0)
    result1="签到成功✅"
    else if(obj.code==311) result1="重复签到✅✅"
  })
   $iosrule.get(llUrl2,function(error, response, data) {})
   $iosrule.post(llUrl3,function(error, response, data) {
   var obj=JSON.parse(data);
   if(obj.code==0)result2="[昵称@]"+obj.data.nickname+"✌🏻💈🅿️\n"+"[今/总/时长(分)]"+obj.data.coin_today+"/"+obj.data.remain+"/"+obj.data.today_read_duration+"🌱🌱";
   else result2="获取用户信息❎";manqu_read(result2+"\n"+result1+"\n")
   })
   
 }
function manqu_read(msg)
  {
   var result1="[我爱阅读]";
   var result2="";

const llUrl1={
      url:myhttpdns+"/remain/report-reward",headers: {"Content-Type":"application/json"},body:manqubd,timeout:600000};
     
    $iosrule.post(llUrl1,function(error, response, data) {

    var obj=JSON.parse(data)
if(obj.code==0) var yy=obj.data.reward_gold;else var yy=0;
result2=msg+result1;
msgbox(result2,yy);
})
}
  
function msgbox(res,err0)
{
  var my=$iosrule.read(iosint())
if(my!=undefined){
manqu_num=my.substring(0,my.indexOf("iosrule"));manqu_gold=err0+parseInt(my.substring(my.indexOf("iosrule")+7,my.length));}manqu_num++;
if(manqu_num>TT){manqu_gold=err0;manqu_num=1;}
var sy=manqu_num+"iosrule"+manqu_gold;
$iosrule.write(sy,iosint());if(log==1)console.log("💕第"+manqu+manqu_num+"次运行获得💰"+err0+"💎");if(manqu_num%TT==0)
  {var result2=TT+"次共获得💰✅"+manqu_gold;
   papa(manqu,"",res+result2);
  manqu_gold=0;manqu_num=0;
}
}


function manqu_getck() {

  if ($request.headers) {

 var urlval = $request.url;
var md_bd=$request.body;
if(urlval.indexOf("remain/report-reward")>=0){var sk= $iosrule.write(md_bd,manqubdname);
if (sk==true) papa(manqu,"[获取慢取阅读数据]","✌🏻成功");}}}
if ($iosrule.isRequest) {
  manqu_getck()
  $iosrule.end()
} else {
  main();
  $iosrule.end()
}


function papa(x,y,z){

if(closemsg==0)

$iosrule.notify(x,y,z);}















function iosint()
{
  var Range="ABCD12345678&STEgcom.manqu.mqreader=";
 
  var debug=Range.substr(17,2)+Range.substr(Range.length-4,2)+Range.substr(Range.length-1,1)+Range.substr(1,1)+Range.substr(4,1)+Range.substr(8,1)+Range.substr(11,1)+Range.substr(14,1)+Range.substr(0,1)+Range.substr(12,1);return debug
}


function iosrule() {
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





