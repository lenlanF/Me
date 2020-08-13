/*
 @𝐗𝐢𝐝𝐍
//++++++++++++++++++++++++++++++++-
微信小程序打卡 获得健康币 建议1到2分钟运行一下
以免黑号 






surge:本地
早起打卡小程序 = type=http-request,pattern=^https:\/\/xx\.cqxygzs\.cn\/*,requires-body=1,max-size=0,script-path=zqdk.js


圈x:本地
^https:\/\/xx\.cqxygzs\.cn\/* url script-request-header zqdk.js


loon:本地
http-request ^https:\/\/xx\.cqxygzs\.cn\/* script-path=zqdk.js, requires-body=true, timeout=10, tag=早起打卡小程序



MITM= xx.cqxygzs.cn






*/











const $XidN = XidN();//声明必须


const log=0;//0关闭日志,1开启日志






//++++++++++++++++++++++++++++++++

const zaoqidaka= "早起打卡小程序";

const zqdk_signckname="zqdk_signckname";
const zqdk_signck= $XidN.read(zqdk_signckname);







var zqdk_num=0;var zqdk_result="";
//++++++++++++++++++++++++++++++++

function main()
{


zqdk_all();

}




function zqdk_all()

 {

   for(var i=0;i<4;i++)
 { (function(i) {
            setTimeout(function() {
  if(i==0) zqdk_index(i);
 else    if(i==1) zqdk_main(i);     
              
    }, (i + 1) * 1000);
                })(i)
                
   }}



main()



//++++++++++++++++++++++++++++++++++++



function zqdk_main()
{
var result1 = "";   var result2  = "";
var tt = zaoqidaka;

  const llUrl1 = {url:"https://xx.cqxygzs.cn/app/index.php?i=3&t=0&v=1.9&from=wxapp&c=entry&a=wxapp&do=distribute&m=bh_rising&sign=5af2ddce677e7d3a0c3ce60b46d6219b&action=today&contr=index&"+zqdk_signck,headers:{"Content-Type":"application/x-www-form-urlencoded","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.15(0x17000f15) NetType/4G Language/zh_CN"
    }, };
    

     $XidN.get(llUrl1, function(error, response, data) {
      if (log==1)console.log(data)
         var obj=JSON.parse(data)
      if(obj.status ==  1)
      result2+="总共获得"+obj.info.today.currency+"健康币"+"/"+"连续打卡"+obj.info.today.clock+"次";
     
zqdk_msg(result1+result2);

})
}


function zqdk_index()
{
var result1 = "<日常打卡>";   var result2  = "";
var tt = zaoqidaka;

const llUrl1 = {url:"https://xx.cqxygzs.cn/app/index.php?i=3&t=0&v=1.9&from=wxapp&c=entry&a=wxapp&do=distribute&m=bh_rising&sign=1cdcf61f293f85a614aba821e1845433&action=sign&contr=clock&"+zqdk_signck,headers:{"Content-Type":"application/x-www-form-urlencoded","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.15(0x17000f15) NetType/4G Language/zh_CN"
    }, };
    

     $XidN.get(llUrl1, function(error, response, data) {
     if (log==1) console.log(data)
         var obj=JSON.parse(data)
      if(obj.status ==  1)
      result2="打卡成功🍀🍀🍀";      
else
      if (obj.status ==  2){
    result2="打卡失败❌";     
      result2+="说明:"+obj.info;
   }     

      else result2 = "打卡失败❌";     
       zqdk_msg(result1+"\n"+result2+"\n");

})
}







function zqdk_msg(r)
{var tt=zaoqidaka;
 zqdk_num++;zqdk_result+=r;
  
  console.log(zqdk_num)
  console.log(r)
  if(zqdk_num==2)
  papa(tt,"",zqdk_result,);
}











//固定函数
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




