---
title: 开放能力
header: develop
nav: component
sidebar: open
---

open-data
-----


<text><text class="notice">解释:</text>用于展示手机百度 APP 开放的数据。</text><div></div><text class="notice">属性说明:</text>

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

web-view
-----

<div class="notice">解释： </div>web-view 组件是一个可以用来承载网页的容器，会自动铺满整个智能小程序页面。
<div></div>
<text class="notice">属性说明:</text>

| 属性名 | 类型     | 默认值  | 说明              |
| --- | ------ | ---- | --------------- |
| src | String |- | webview 指向网页的链接 |
|bindmessage|EventHandler|-|网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }|

<div class="notice">示例： </div>
```xml
<!-- swan -->
<!-- 首页的 web-view -->
<web-view src="https://m.baidu.com"></web-view>
```

### **相关接口 **
<web-view/>网页中可使用 JSSDK 提供的接口返回智能小程序页面。 支持的接口有：

| 接口名               | 说明         | 备注  |
| ----------------- | ---------- | --- |
| swan.webView.navigateTo   | 参数与智能小程序接口一致 | |
| swan.webView.navigateBack | 参数与智能小程序接口一致 | |
| swan.webView.switchTab    | 参数与智能小程序接口一致 | |
| swan.webView.reLaunch     | 参数与智能小程序接口一致 | |
| swan.webView.redirectTo   | 参数与智能小程序接口一致 | `` |
| swan.webView.getEnv   | 获取当前环境 | `` |

<div class="notice">示例： </div>
```xml
<!-- html -->
<script type="text/javascript" src="https://b.bdstatic.com/searchbox/icms/searchbox/js/swan.js"></script>
```

```javascript
// javascript
swan.webView.navigateTo({url: '/pages/detail/index'});
swan.webView.getEnv(function(res) { console.log(res.smartprogram) // true })
```

**Tips: **

1.&nbsp;<text class="notice">网页内 iframe 的域名也需要配置到域名白名单。</text>
2.&nbsp;每个页面只能有一个`<web-view/>`，`<web-view/>`会自动铺满整个页面，并覆盖其他组件。
3.&nbsp;网页与智能小程序之间不支持除 JSSDK 提供的接口之外的通信。
