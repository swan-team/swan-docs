---
title: H5页面调起小程序协议
header: develop
nav: api
sidebar: protocol


---
### 协议说明
使用本协议，使用者可在H5页面（如百度APP搜索页）中，直接打开您所开发的小程序。

**协议写法示例：**
```js
baiduboxapp:
//swan/{{appkey}}/pages/home/home/?a='aa'&b='bb'
&_baiduboxapp=encodeURIComponent(JSON.stringify({from: '1001', ext: {}}))
&callback=_bdbox_js_xxx&upgrade=0
```

**字段说明：**

|字段|解释|
|----|----|
|baiduboxapp://|协议类型，固定不变。|
|swan|命名空间表识，固定不变。|
|appkey|appkey为要调起的小程序key，可在<a href="https://smartprogram.baidu.com/mappconsole/main/admin?appId=11182003">小程序首页</a>左侧导航栏单击“设置-<a href="https://smartprogram.baidu.com/mappconsole/main/set?appId=11182003&tabCur=1">开发者设置</a>”中查询|
|path|业务方（？）打开的页面URL，如示例中的‘/pages/home/home/’，如果不设置path将直接跳到小程序首页（？）|
|query|业务方页面的参数，需要拼在path后面，中间用? 连接，query之间用&连接 ；query中的value值(就是a=’aa’中的’aa’)，如果有中文，需要encode ；query 参数可以在 path 对应页面的onLoad事件获取。|
|_baiduboxapp|--|
|callback|--|
|upgrade|<p>**·** upgrade=0时，下发高版本调起协议到低版本时不会提示升级，默认为0；<p>**·** upgrade=1时，下发高版本调起协议到低版本时会提示升级。|
