/*=================================
说明:
2020.8.17完成跳过弹出广告红包,弹出体力红包，限时红包,打卡，签到,在线时长奖励。

#Qx最强答人
http:\/\/zqdr-api\.lwfjmj\.com\/(v2\/check_point\/get_strength_by_video?|v2\/check_point\/get_pop_reward?|v2\/limit_red\/status?|v2\/limit_red\/reward?|v2\/wallet\/sign?|v2\/online_info?|v2\/online_award?|v2\/task_list?|v2\/new_sign\/task_reward?|v2\/get_task_award?|v2\/luck_turntable\/play?) url script-request-header liuyandaxiong.js

http:\/\/zqdr-api\.lwfjmj\.com\/(v2\/check_point\/answer?|v2\/online_info?|v2\/task_list?) url script-response-body liuyandaxiong.js



mit=zqdr-api.lwfjmj.com
*/
//====================================





//====================================
const $iosrule = iosrule();

const log=1;//设置0关闭日志,1开启日志

//++++++++++++++++++++++++++++++++-


const dati="最强达人APP";
const get_strengthckname="get_strengthckname";
const get_popckname="get_popckname";
const get_limit_redstatusckname="get_limit_redstatusckname";
const get_limit_redckname="get_limit_redckname";
const get_walletsignckname2="get_walletsignckname2";

const get_walletsignckname="get_walletsignckname";
const get_online_infockname="get_online_infockname";
const get_online_awardckname="get_online_awardckname";
const get_dailyckname="get_dailyckname";
const get_achievementckname="get_achievementckname";
const get_sign_rewardckname="get_sign_rewardckname";
const get_luck_turntableckname="get_luck_turntableckname";

//每日任务和成就任务领取
const task_ad_achievementckname="task_ad_achievementckname";

const task_match_achievementckname="task_match_achievementckname";

const task_checkpoint_achievementckname="task_checkpoint_achievementckname";

const task_team_achievementckname="task_team_achievementckname";


const task_match_dailyckname="task_match_dailyckname";
const task_checkpoint_dailyckname="task_checkpoint_dailyckname";

const task_ad_dailyckname="task_ad_dailyckname";

const task_lottery_dailyckname="task_lottery_dailyckname";

const task_strength_dailyckname="task_strength_dailyckname";
//++++++++++++++++++++++++++++++++














//++++++++++++++++++++++++++++++++++++
//4.基础模板



if ($iosrule.isRequest) {

 
  dati_getck()
  dati_respon();

  
  $iosrule.end()
} else {
  main();

  $iosrule.end()
}




function main()
{
  dati_walletsign();
  dati_luck_turntable();
}
 


function dati_getck() {

  if ($request.headers) {
var result="";
 var urlval = $request.url;


if(urlval.indexOf("v2/check_point/get_pop_reward?")>=0)
{var sk= $iosrule.write(urlval,get_popckname);
if (sk==true) 
 papa(dati,"[获取get_pop_reward]成功","✌🏻成功");}
else 
if(urlval.indexOf("check_point/get_strength_by_video?")>=0)
{var sk= $iosrule.write(urlval,get_strengthckname);
if (sk==true) 
 papa(dati,"[获取增加体力get_strength_by_video成功","✌🏻成功");}
else 
if(urlval.indexOf("v2/limit_red/reward?")>=0)
{var sk= $iosrule.write(urlval,get_limit_redckname);
if (sk==true) 
 papa(dati,"[获取开限时红包🔴limit_red/reward成功","✌🏻成功");}
else 
if(urlval.indexOf("v2/limit_red/status?")>=0)
{var sk= $iosrule.write(urlval,get_limit_redstatusckname);
if (sk==true) 
 papa(dati,"[获取查询限时红包🍵limit_red/reward成功","✌🏻成功");}



else 
if(urlval.indexOf("v2/wallet/sign?")>=0&&urlval.indexOf("index=2")>=0)
{var sk= $iosrule.write(urlval,get_walletsignckname);
if (sk==true) 
 papa(dati,"[获取签到🎈🍵数据成功","✌🏻成功");}
else 
if(urlval.indexOf("v2/wallet/sign?")>=0&&urlval.indexOf("index=3")>=0)
{var sk= $iosrule.write(urlval,get_walletsignckname2);
if (sk==true) 
 papa(dati,"[获取打卡💪🏻成功","✌🏻成功");}

//在线时长
else 
if(urlval.indexOf("v2/online_info?")>=0)
{var sk= $iosrule.write(urlval,get_online_infockname);
if (sk==true) 
 papa(dati,"[获取查询在线时长数据成功","✌🏻成功");}
else 
if(urlval.indexOf("v2/online_award?")>=0)
{var sk= $iosrule.write(urlval,get_online_awardckname);
if (sk==true) 
 papa(dati,"[获取在线时长奖励😯","✌🏻成功");}

//每日任务

else 
if(urlval.indexOf("v2/task_list?")>=0&&urlval.indexOf("task_type=daily")>=0)
{var sk= $iosrule.write(urlval,get_dailyckname);
if (sk==true) 
 papa(dati,"[获取每日任务数据成功","✌🏻成功");}

else if(urlval.indexOf("v2/task_list?")>=0&&urlval.indexOf("task_type=achievement")>=0)
{var sk= $iosrule.write(urlval,get_achievementckname);
if (sk==true) 
 papa(dati,"[获取成就任务😯","✌🏻成功");}

else if(urlval.indexOf("v2/new_sign/task_reward?")>=0)
{var sk= $iosrule.write(urlval,get_sign_rewardckname);
if (sk==true) 
 papa(dati,"[获取签到奖励数据✔️😯","✌🏻成功");}

else if(urlval.indexOf("v2/luck_turntable/play?")>=0)
{var sk= $iosrule.write(urlval,get_luck_turntableckname);
if (sk==true) 
 papa(dati,"[大转盘数据✔️😯","✌🏻成功");}


//每日任务和成就任务
else if(urlval.indexOf("v2/get_task_award?")>=0&&urlval.indexOf("task_code=ad&task_type=daily")>=0)
{var sk= $iosrule.write(urlval,task_ad_dailyckname);
if (sk==true) 
 papa(dati,"[1获取每日任务task_code=ad&task_type=daily✔️😯","✌🏻成功");}

else if(urlval.indexOf("v2/get_task_award?")>=0&&urlval.indexOf("task_code=checkpoint&task_type=daily")>=0)
{var sk= $iosrule.write(urlval,task_checkpoint_dailyckname);
if (sk==true) 
 papa(dati,"[2获取每日任务task_code=checkpoint&task_type=daily✔️😯","✌🏻成功");}

else if(urlval.indexOf("v2/get_task_award?")>=0&&urlval.indexOf("task_code=match&task_type=daily")>=0)
{var sk= $iosrule.write(urlval,task_match_dailyckname);
if (sk==true) 
 papa(dati,"[3获取每日任务task_code=match&task_type=daily✔️😯","✌🏻成功");}

else if(urlval.indexOf("v2/get_task_award?")>=0&&urlval.indexOf("task_code=lottery&task_type=daily")>=0)
{var sk= $iosrule.write(urlval,task_lottery_dailyckname);
if (sk==true) 
 papa(dati,"[4获取每日任务task_code=lottery&task_type=daily✔️😯","✌🏻成功");}
else if(urlval.indexOf("v2/get_task_award?")>=0&&urlval.indexOf("task_code=strength&task_type=daily")>=0)
{var sk= $iosrule.write(urlval,task_strength_dailyckname);
if (sk==true) 
 papa(dati,"[5获取每日任务task_code=strength&task_type=daily✔️😯","✌🏻成功");}


//成就任务
else if(urlval.indexOf("v2/get_task_award?")>=0&&urlval.indexOf("task_code=match&task_type=achievement")>=0)
{var sk= $iosrule.write(urlval,task_match_achievementckname);
if (sk==true) 
 papa(dati,"[1获取成就任务task_code=match&task_type=achievement✔️😯","✌🏻成功");}

else if(urlval.indexOf("v2/get_task_award?")>=0&&urlval.indexOf("task_code=checkpoint&task_type=achievement")>=0)
{var sk= $iosrule.write(urlval,task_checkpoint_achievementckname);
if (sk==true) 
 papa(dati,"[2获取成就任务task_code=checkpoint&task_type=achievement✔️😯","✌🏻成功");}


else if(urlval.indexOf("v2/get_task_award?")>=0&&urlval.indexOf("task_code=ad&task_type=achievement")>=0)
{var sk= $iosrule.write(urlval,task_ad_achievementckname);
if (sk==true) 
 papa(dati,"[3获取成就任务task_code=ad&task_type=achievement✔️😯","✌🏻成功");}

else if(urlval.indexOf("v2/get_task_award?")>=0&&urlval.indexOf("task_code=team&task_type=achievement")>=0)
{var sk= $iosrule.write(urlval,task_team_achievementckname);
if (sk==true) 
 papa(dati,"[4获取成就任务task_code=team&task_type=achievement✔️😯","✌🏻成功");}



}}




function dati_respon()

{ 
 var urlval = $request.url;
var result1="";var result2="";
console.log(urlval)


  if(urlval.indexOf("v2/check_point/answer?")>=0)
  {console.log("conlog测响应")
    var md_rbd=$response.body;
    console.log(md_rbd);
    var obj=JSON.parse(md_rbd);
    
      

  if(obj.code=="ok")
   {
    if(obj.data.is_pop==true)
    {var red="🔴✔️"+obj.data.pop_reward_amount+"💰";dati_get_pop_reward()}
    else var red="";
          if(obj.data.current_strength==0)
 dati_get_strength_by_video();
          
     result2=obj.message+"当前题目数"+obj.data.current_check_point+"体力"+obj.data.current_strength+"剩余次数"+obj.data.remain_time+"#今日答题"+obj.data.today_check_point+"次";
result1+="红包收益"
+obj.data.red_balance+red;
console.log("答题结果"+result2)

papa(dati,result1,result2);
}
 
else if(obj.code=="answer_wrong")
   {
      if(obj.data.is_pop==true)
      {var red="🔴✔️"+obj.data.pop_reward_amount+"💰";dati_get_pop_reward()}
      else var red="";
}      
      if(obj.data.current_strength==0)
      dati_get_strength_by_video();
   result2="当前题目数"+obj.data.current_check_point+"当前体力"+obj.data.current_strength+"剩余次数"+obj.data.remain_time+"今日答题"+obj.data.today_check_point+"次";
 result1+="红包收益"
      +obj.data.red_balance+"正确数✔️"+obj.data.red_balance+red;
     papa(dati,result1,result2);
     //完成✅剩余任务

     dati_limit_red_reward();
     
     
     }
  
  else if(urlval.indexOf("v2/task_list?")>=0&&urlval.indexOf("task_type=daily")>=0)
  {console.log("每日红包")
    dati_online_info();
   dati_limit_red_reward();
   dati_task_red();
  }
  
  
  
  
}

function dati_get_pop_reward()
{
   var result1="[弹跳广告红包]";var result2="";
   var dati_get_pop_reward_url=$iosrule.read(get_popckname);
    const llUrl1 = {url:dati_get_pop_reward_url};
        $iosrule.get(llUrl1, function(error, response, data) {
console.log(result1+data);
    var obj=JSON.parse(data)
    if(obj.code=="ok")
 result2="🔴红包"+obj.data.pop_reward_amount+" ✅红包总收益"+obj.data.pop_balance;
    papa(dati,result1,result2);})
}


function dati_get_strength_by_video()
{
   var result1="[看视频增加体力]";var result2="";
   var dati_get_strength_by_video_url=$iosrule.read(get_strengthckname);
    const llUrl1 = {url:dati_get_strength_by_video_url};
        $iosrule.get(llUrl1, function(error, response, data) {
console.log(result1+data);
    var obj=JSON.parse(data)
    if(obj.code=="ok")
 result2="✅剩余视频频"+obj.data.remain_video+"个, 红包收益"+obj.data.balance;
else
result2=obj.message+"❎"

    papa(dati,result1,result2);})
}
function dati_online_info()
{
   var result1="[在线时长查询]";var result2="";
   var dati_online_info_url=$iosrule.read(get_online_infockname);
    const llUrl1 = {url:dati_online_info_url};
        $iosrule.get(llUrl1, function(error, response, data) {
console.log(result1+data);
    var obj=JSON.parse(data)
  
    if(obj.code=="ok")
 result2="在线时长"+obj.data.online_award_time+"✅"+"预计奖励"+obj.data.award_total+"已收到"+obj.data.get_award_total+"未收"+obj.data.waiting_award_total+"在线列表+\n";
for(var i=0 in obj.data.list)
{
  if(obj.data.list[i].status=="done")
  var sta="✅";
  else var sta="❎";
  result2+="["+obj.data.list[i].time_type/60+"分]"+"-"+obj.data.list[i].award_rmb+"元"+"..."+sta+"\n";
}
 dati_online_award(result1+"\n"+result2);


})
}

function dati_online_award(r)
{
   var result1="[在线时长领取奖励]";var result2="";
   var dati_online_award_url=$iosrule.read(get_online_awardckname);
    const llUrl1 = {url:dati_online_award_url};
        $iosrule.get(llUrl1, function(error, response, data) {
console.log(result1+data);
    var obj=JSON.parse(data)
    if(obj.code=="ok")
 result2="红包奖励"+obj.data.award+"✅"+"红包收益"+obj.data.red_balance;
else result2="❎"+obj.message;

 console.log(result2)
papa(dati,result1,r+"\n"+result1+"\n"+result2);



})
}
function dati_limit_red_reward()
{

   var dati_limit_redstatus_url=$iosrule.read(get_limit_redstatusckname);
    const llUrl1 = {url:dati_limit_redstatus_url};
        $iosrule.get(llUrl1, function(error, response, data) {
var obj=JSON.parse(data)
if(obj.code=="ok"&&obj.data.remain_time==0)
sub_limit_red_reward();
})
}


function sub_limit_red_reward()
{
   var result1="[答题限时红包]";var result2="";
   var dati_limit_red_reward_url=$iosrule.read(get_limit_redckname);
    const llUrl1 = {url:dati_limit_red_reward_url};
        $iosrule.get(llUrl1, function(error, response, data) {
console.log(result1+data);
    var obj=JSON.parse(data)
    if(obj.code=="ok")
 result2="💄👜💰"+obj.data.amount+", 红包收益"+obj.data.balance;
    papa(dati,result1,result2);})
}



function dati_walletsign()
{
   var result1="[答题签到]";var result2="";
   var dati_walletsign_url=$iosrule.read(get_walletsignckname);
    const llUrl1 = {url:dati_walletsign_url};
        $iosrule.get(llUrl1, function(error, response, data) {
console.log(result1+data);
    var obj=JSON.parse(data)
    if(obj.code=="ok")
 result2="成功✅";
else if(obj.code=="Fail:TodayDone")
 result2="重复✅✅";
else result2=obj.message;

setTimeout(function(){
dati_walletsign2(result1+result2);
       }, 5* 1000);
})  
}

function dati_walletsign2(r)
{
   var result1="[答题打卡]";var result2="";
   var dati_walletsign_url2=$iosrule.read(get_walletsignckname2);
    const llUrl1 = {url:dati_walletsign_url2};
        $iosrule.get(llUrl1, function(error, response, data) {
console.log(result1+data);
    var obj=JSON.parse(data)
    if(obj.code=="ok")
 result2="成功✅";
else if(obj.code=="Fail:TodayDone")
 result2="重复✅✅";
else result2=obj.message;
    dati_task_reward_sign(r+"\n"+result1+"\n"+result2)
})}

function dati_task_reward_sign(r)
{
   var result1="[签到奖励]";var result2="";
   var dati_get_sign_reward_url=$iosrule.read(get_sign_rewardckname);
    const llUrl1 = {url:dati_get_sign_reward_url};
        $iosrule.get(llUrl1, function(error, response, data) {
console.log(result1+data);
    var obj=JSON.parse(data)
    if(obj.code=="ok")
 result2=result1+"\n"+
"成功✅💰"+obj.data.amount+"/"+obj.data.balance+"签到"+obj.data.day+"天";
else result2=obj.message;
papa(dati,"[签到🔥打卡]",r+"\n"+result2)
})  
}






function dati_task_red()
{
   dati_luck_turntable();
   dati_walletsign();
   var result1="";var result2="";
   
   var dati_achievement_url=$iosrule.read(get_achievementckname);
var dati_daily_url=$iosrule.read(get_dailyckname);
const llUrl2={url:dati_achievement_url};
const llUrl1 = {url:dati_daily_url};

        $iosrule.get(llUrl1, function(error, response, data) {
    var obj=JSON.parse(data)

    if(obj.code=="ok")
{
 result2="[日常任务]"+"\n"+"[累计观看广告10次]🎁"+obj.data.ad.user_cnt+"/"+obj.data.ad.cnt+"-"+obj.data.ad.status+"\n"+"[每日幸运转盘抽奖10次]🎁"+obj.data.lottery.user_cnt+"/"+obj.data.lottery.cnt+"-"+obj.data.lottery.status+"\n[每日闯关答20题]🎁"+obj.data.checkpoint.user_cnt+"/"+obj.data.checkpoint.cnt+"-"+obj.data.checkpoint.status+"\n[观看视频补充体力5次]🎁"+obj.data.strength.user_cnt+"/"+obj.data.strength.cnt+"-"+obj.data.strength.status+"\n[参与个人挑战赛1次]🎁"+obj.data.match.user_cnt+"/"+obj.data.match.cnt+"-"+obj.data.match.status+"\n";

if(obj.data.lottery.status=="un_reach")
dati_luck_turntable();
else 
if(obj.data.lottery.status=="waiting")
dati_task_reward_all(task_lottery_dailyckname)
if(obj.data.ad.status=="waiting")
dati_task_reward_all(task_ad_dailyckname)

if(obj.data.checkpoint.status=="waiting")
dati_task_reward_all(task_checkpoint_dailyckname)

if(obj.data.strength.status=="waiting")
dati_task_reward_all(task_strength_dailyckname)


if(obj.data.match.status=="waiting")
dati_task_reward_all(task_match_dailyckname)


}


        $iosrule.get(llUrl2, function(error, response, data) {
    var obj=JSON.parse(data)
    if(obj.code=="ok")
{
result2+="[成就任务]"+"\n"+"[累计观看广告100次]🎁"+obj.data.ad.user_cnt+"/"+obj.data.ad.cnt+"-"+obj.data.ad.status+"\n"+"[累计闯关答题500]🎁"+obj.data.checkpoint.user_cnt+"/"+obj.data.checkpoint.cnt+"-"+obj.data.checkpoint.status+"\n[累计参与3场个人挑战赛]🎁"+obj.data.match.user_cnt+"/"+obj.data.match.cnt+"-"+obj.data.match.status+"\n[累计参与3场组队挑战赛]🎁"+obj.data.team.user_cnt+"/"+obj.data.team.cnt+"-"+obj.data.team.status;


if(obj.data.ad.status=="waiting")
dati_task_reward_all(task_ad_achievementckname)
if(obj.data.match.status=="waiting")
dati_task_reward_all(task_match_achievementckname)
if(obj.data.checkpoint.status=="waiting")
dati_task_reward_all(task_checkpoint_achievementckname)
if(obj.data.team.status=="waiting")
dati_task_reward_all(task_team_achievementckname)



}
papa(dati,"[每日任务界面红包🔴]",result2);

})})

 
}


function dati_task_reward_all(flag)
{
   var result1="[每日任务和任务成就奖励]"+flag;var result2="";
   var xurl=$iosrule.read(flag);
    const llUrl1 = {url:xurl};
        $iosrule.get(llUrl1, function(error, response, data) {
console.log(result1+data);
    var obj=JSON.parse(data)
    if(obj.code=="ok")
 result2="✅"
else result2=obj.message;
papa(dati,result1,result2)
})  
}


function dati_luck_turntable()
{
   var result1="[转盘奖励]";var result2="";
   var luck_turntable_url=$iosrule.read(get_luck_turntableckname);
    const llUrl1 = {url:luck_turntable_url};
        $iosrule.get(llUrl1, function(error, response, data) {
console.log(result1+data);
    var obj=JSON.parse(data)
    if(obj.code=="ok")
 {result2="第"+obj.data.index+"次✅奖励"+obj.data.reward_amount+",💰剩余"+
obj.data.remain+"次"+",红包总收益"+obj.data.balance;
papa(dati,result1,result2);
if(obj.data.remain>0)
{setTimeout(function(){
dati_luck_turntable();
       }, 1* 1000);}

}
else result2=obj.message;
papa(dati,result1,result2)


})  
}


function papa(x,y,z){

$iosrule.notify(x,y,z);}
function getRandom(start, end, fixed = 0) {
  let differ = end - start
  let random = Math.random()
  return (start + differ * random).toFixed(fixed)
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





