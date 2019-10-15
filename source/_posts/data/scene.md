---
title: 场景值
header: data
nav: book
sidebar: scene
---

场景值用来描述用户进入小程序的路径。

开发者可以在 App 生命周期函数中 [onLaunch](/develop/framework/app_service_register/#onLaunch-Object-object) 或 [onShow](/develop/framework/app_service_register/#onShow-Object-object) 事件中的 scene 字段获取场景值。

App 多次触发 onShow 事件，获得的场景值可能有所不同。如，首先通过自然搜索打开小程序，然后切至后台，然后通过信息流打开小程序，两次 onShow 事件获取的场景值不同。

以下为各场景和scene值的对应关系。

## 自然搜索
|场景|	scene值| 图例|
|---|---|---|
|自然结果|	10810008|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-10810008.png"/></div></div>|
|阿拉丁|	10810009|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-10810009-1.png"/><img src="../../img/data/scene/scene-10810009-2.png"/><img src="../../img/data/scene/scene-10810009-3.png"/><img src="../../img/data/scene/scene-10810009-4.png"/></div></div>|
|搜索词推荐直达|	10810012|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-10810012.png"/></div></div>|
|语音直达|	10810013|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-10810013.png"/></div></div>|
|小程序单卡|	10810014|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-10810014-1.png"/><img src="../../img/data/scene/scene-10810014-2.png"/><img src="../../img/data/scene/scene-10810014-3.png"/><img src="../../img/data/scene/scene-10810014-4.png"/></div></div>|
|小程序 Tab|10810083|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-10810083.png"/></div></div>|
|购物 Tab| 10810022|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-shopping.png"/></div></div>|
|职位 Tab|10810023|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-job.png"/></div></div>|
|笔记 Tab|10810024|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-note.png"/></div></div>|

## 信息流	
|场景|	scene值| 图例|
|---|---|---|
|信息流直接推荐|	10910015|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-10910015.png"/></div></div>|
|落地页自动挂载	|10910016|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-10910016.png"/></div></div>|

## 号挂载 	
|场景|	scene值| 图例|
|---|---|---|
|号文章挂载	|11110029|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-11110029.png"/></div></div>|
|号动态挂载	|11110030<p>11110031<p>11110032|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-11110030.png"/></div></div>|

## 号个人主页	
|场景|	scene值| 图例|
|---|---|---|
|号个人主页	|11410033<p>11410034<p>11410035|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-11410034.png"/></div></div>|

## 我的	
|场景|	scene值| 图例|
|---|---|---|
|常用服务|	12010043|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-12010043.png"/></div></div>|
|顶部横划模块|	12010044|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-12010044.png"/></div></div>|
|历史|	12010045|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-12010045.png"/></div></div>|
|活动中心|	12010046|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-12010046.png"/></div></div>|

## 百度首页下拉（二楼）
|场景|	scene值| 图例|
|---|---|---|
|推荐|	12110047|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-12110047.png"/></div></div>|
|历史|	12110048|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-12110048.png"/></div></div>|

## 桌面快捷方式	 
|场景|	scene值| 图例|
|---|---|---|
|桌面快捷方式|	12300000|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/introduction/base/基础流量：快捷桌面.jpg"/><img src="../../img/introduction/base/基础流量：快捷桌面2.jpg"/></div></div>|

## 系统多任务	
|场景|	scene值| 图例|
|---|---|---|
|系统多任务|	12500000|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/introduction/base/基础流量：系统多任务.jpg"/></div></div>|

## 消息通知	
|场景|	scene值| 图例|
|---|---|---|
|服务消息|	11310021|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/introduction/base/基础流量：消息通知1-通知栏消息.jpg"/><img src="../../img/introduction/base/基础流量：消息通知-个人中心-消息-服务消息-表单消息.jpg"/><img src="../../img/introduction/base/基础流量：消息通知-个人中心-消息-服务消息-支付消息.jpg"/></div></div>|
|营销消息|	11310004|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/introduction/base/营销消息样例.jpg"/></div></div>|


## 分享	
|场景|	scene值| 图例|
|---|---|---|
|分享|	11600000|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/introduction/base/基础流量：分享.jpg"/></div></div>|

## 小程序	
|场景|	scene值| 图例|
|---|---|---|
|小程序打开小程序|11700000|<div>/</div>|

## 扫码	
|场景|	scene值| 图例|
|---|---|---|
|扫码|	11800000|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/introduction/base/二维码.jpg"/></div></div>|

## 贴吧小程序	
|场景|	scene值| 图例|
|---|---|---|
|各吧内挂载|	11910037|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-11910037.png"/></div></div>|
|贴吧内搜索结果|	11910038|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-11910038.png"/></div></div>|
|贴吧吧内分享|	11910039|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-11910039.jpg"/></div></div>|
|首页信息流|11910086|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-11910086.png"/></div></div>|

## 游戏中心	
|场景|	scene值| 图例|
|---|---|---|
|小程序游戏中心|12410094|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-12410094.jpg"/></div></div>|
|NA游戏中心|12410095|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-12410095.jpg"/></div></div>|
|好看内游戏中心|12410103|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-12410103.jpg"/></div></div>|
|全民内游戏中心|12410104|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-12410104.jpg"/></div></div>|
|Lite内游戏中心|12410004|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-12410004.jpg"/></div></div>|
|贴吧内游戏中心|12410005|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-12410005.jpg"/></div></div>|

## 游戏社区广场  
|场景|	scene值| 图例|
|---|---|---|
|侃侃小游戏社区首页|14010000|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-14010000.png"/></div></div>|
|游戏中心广场活动详情页|14010001|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-14010001.png"/></div></div>|
|游戏中心广场热帖|14010002|<div class="show-scene-container"><span class="show-scene-btn">查看</span><div class="img-container"><img src="../../img/data/scene/scene-14010002.png"/></div></div>|

## 其它	
|场景|scene值| 图例|
|---|---|---|
|百度爬虫抓取|WEB|<div>/</div>|
|默认|NA|<div>/</div>|

**说明**：
* 智能小程序会被百度爬虫自动抓取，这部分流量的场景值为 WEB 。
* 如果没有场景值来源，会默认为场景值赋值为 NA 。