---
title: 开放接口
header: develop
nav: component
sidebar: open
---


## open-data

<text><text class="notice">解释:</text>用于展示百度 App 开放的数据。</text><div></div><text class="notice">属性说明:</text>

| 属性名 | 类型     | 默认值  | 说明              |
| --- | ------ | ---- | --------------- |
| type | String | | 开放数据类型 |

<div class="notice">type 有效值:</div>


| 值 | 说明 |
|--- |----- |
| userNickName | 用户昵称 |
| userAvatarUrl | 用户头像 |
| userGender | 用户性别 |

<div class="notice">示例： </div>
```xml
<open-data type="userNickName"></open-data>
<open-data type="userAvatarUrl"></open-data>
<open-data type="userGender"></open-data>
```

## web-view
<div class="notice">解释： </div>web-view 组件是一个可以用来承载网页的容器，会自动铺满整个智能小程序页面。
<div></div>
<text class="notice">属性说明:</text>

| 属性名 | 类型     | 默认值  | 说明              | 最低版本              |
| --- | ------ | ---- | ---- |---- |
| src | String |- | webview 指向网页的链接 |-|
|bindmessage|EventHandler|-|网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }|1.12.0|

<div class="notice">示例： </div>
```xml
<!-- swan -->
<!-- 首页的 web-view -->
<web-view src="https://m.baidu.com"></web-view>
```

### **相关接口1 **
web-view 网页中可使用 JSSDK 提供的接口返回智能小程序页面。 支持的接口有：

| 接口名               | 说明         | 
| ----------------- | ---------- | 
| swan.webView.navigateTo   | 参数与智能小程序接口一致 | 
| swan.webView.navigateBack | 参数与智能小程序接口一致 | 
| swan.webView.switchTab    | 参数与智能小程序接口一致 |
| swan.webView.reLaunch     | 参数与智能小程序接口一致 | 
| swan.webView.redirectTo   | 参数与智能小程序接口一致 | 
| swan.webView.getEnv   | 获取当前环境 | 
| swan.webView.postMessage   | 向小程序发送消息 | 

> 旧版本 swan.xxxx,已更新为 swan.webView.xxxx。

<div class="notice">示例： </div>
```xml
<!-- html -->

<script type="text/javascript" src="https://b.bdstatic.com/searchbox/icms/searchbox/js/swan-2.0.2.js"></script>
```

```javascript
// javascript
swan.webView.navigateTo({url: '/pages/detail/index'});
swan.webView.postMessage({ data: 'foo' })
swan.webView.postMessage({ data: {foo: 'bar'} })
swan.webView.getEnv(function(res) { console.log(res.smartprogram) // true })
```


### **相关接口2 **

web-view 网页中支持的接口有：


| 接口模块               | 接口说明         | 具体接口  | 备注 |
| ----------------- | ---------- | --- |
|设备| 拨打电话| <a href="https://smartprogram.baidu.com/docs/develop/api/device_call/#makePhoneCall/">swan.makePhoneCall</a> |-|
|开放接口| 打开小程序| <a href="https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#navigateToSmartProgram/">swan.navigateToSmartProgram</a> |-|
|开放接口| 登录| <a href="https://smartprogram.baidu.com/docs/develop/api/open_log/#login/">swan.login</a> |-|
|剪贴板| 设置剪贴板| <a href="https://smartprogram.baidu.com/docs/develop/api/device_clipboard/#setClipboardData/">swan.setClipboardData</a> |-|
|设备| 获取网络类型| <a href="https://smartprogram.baidu.com/docs/develop/api/device_network/#getNetworkType/">swan.getNetworkType</a> |-|
|媒体| 预览图片| <a href="https://smartprogram.baidu.com/docs/develop/api/media_image/#previewImage/">swan.previewImage</a> |-|
|开放接口| 分享 | <a href="https://smartprogram.baidu.com/docs/develop/api/open_share/#openShare/">swan.openShare</a> |需传入当前要分享的小程序的appKey|
|地理位置|使用内置地图打开地点|<a href="https://smartprogram.baidu.com/docs/develop/api/location_open/">swan.openLocation</a>|-|
|地理位置|获取地理位置|<a href="https://smartprogram.baidu.com/docs/develop/api/location_get/#getLocation/">swan.getLocation<a>|-|
|图像接口|拍照或上传|<a href="https://smartprogram.baidu.com/docs/develop/api/media_image/#chooseImage/">swan.chooseImage</a>| -|





**说明: **

* 网页内 iframe 的域名也需要配置到域名白名单。
* 每个页面只能有一个 <`web-view/`> ，<`web-view/`> 会自动铺满整个页面，并覆盖其他组件。
* 网页与智能小程序之间不支持除 JSSDK 提供的接口之外的通信。
