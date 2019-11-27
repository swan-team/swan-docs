---
title: web-view 网页容器
header: develop
nav: component
sidebar: open_web-view
---




**解释**：web-view 组件是一个可以用来承载网页的容器，会自动铺满整个智能小程序页面。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/webview.png"  class="demo-qrcode-image" />
**属性说明:**

| 属性名 | 类型     | 默认值  |必填| 说明 | 最低版本              |
| --- | ------ | ---- | ---- |---- |---- |
| src | String |  | 是 |webview 指向网页的链接 | |
|bindmessage|EventHandler| | 否 |网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }|1.12.0|


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/web-view.jpeg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/a72d09c94460f8960e5003020b7ba9fc1565510747924" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中：

```xml
<view>
    <web-view src="{{src}}"></web-view>
</view>

```
* 在 js 文件中：

```js
Page({
    data: {
        src: 'https://smartprogram.baidu.com'
    },
   //接收H5页传过来的参数
    onShareAppMessage(options) {
        console.log(options.webViewUrl);
    }
});
```

### **相关接口1 **

web-view 网页中可使用 JSSDK 提供的接口返回智能小程序页面。 支持的接口有：

> 旧版本 swan.xxxx,已更新为 swan.webView.xxxx。

| 接口名               | 说明         | 最低版本 |
| ----------------- | ---------- | 
| swan.webView.navigateTo   | 参数与智能小程序接口一致 | - |
| swan.webView.navigateBack | 参数与智能小程序接口一致 | - |
| swan.webView.switchTab    | 参数与智能小程序接口一致 | - |
| swan.webView.reLaunch     | 参数与智能小程序接口一致 | - |
| swan.webView.redirectTo   | 参数与智能小程序接口一致 | - |
| swan.webView.getEnv   | 获取当前环境 | - |
| swan.webView.postMessage   | 向小程序发送消息 | - |

**代码示例**：

```xml
<!-- html -->
<script type="text/javascript" src="https://b.bdstatic.com/searchbox/icms/searchbox/js/swan-2.0.18.js"></script>
```

```javascript
// javascript
swan.webView.navigateTo({url: '/pages/detail/index'});
swan.webView.postMessage({data: 'foo'})
swan.webView.postMessage({data: {foo: 'bar'} })
swan.webView.getEnv(function(res) {console.log(res.smartprogram) // true })
```


### **相关接口2 **

web-view 网页中支持的接口有：


| 接口模块               | 接口说明         | 具体接口  | 备注 | 最低版本 |
| ----------------- | ---------- | --- |
|设备| 拨打电话| <a href="https://smartprogram.baidu.com/docs/develop/api/device_call/#makePhoneCall/">swan.makePhoneCall</a> | | - |
|开放接口| 打开小程序| <a href="https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#navigateToSmartProgram/">swan.navigateToSmartProgram</a> |2.0.18版本开始，支持使用envVersion打开不同版本的小程序| 1.1.0 |
|开放接口| 登录| <a href="https://smartprogram.baidu.com/docs/develop/api/open_log/#login/">swan.login</a> | | 1.1.0|
|剪贴板| 设置剪贴板| <a href="https://smartprogram.baidu.com/docs/develop/api/device_clipboard/#setClipboardData/">swan.setClipboardData</a> | | 1.1.0|
|设备| 获取网络类型| <a href="https://smartprogram.baidu.com/docs/develop/api/device_network/#getNetworkType/">swan.getNetworkType</a> | | 1.1.0|
|媒体| 预览图片| <a href="https://smartprogram.baidu.com/docs/develop/api/media_image/#previewImage/">swan.previewImage</a> | |1.1.0 |
|开放接口| 分享 | <a href="https://smartprogram.baidu.com/docs/develop/api/open_share/#openShare/">swan.openShare</a> |需传入当前要分享的小程序的appKey| 1.2.0|
|地理位置|使用内置地图打开地点|<a href="https://smartprogram.baidu.com/docs/develop/api/location_open/">swan.openLocation</a>| | 1.6.1|
|地理位置|获取地理位置|<a href="https://smartprogram.baidu.com/docs/develop/api/location_get/#getLocation/">swan.getLocation<a>| |1.6.1 |
|图像接口|拍照或上传|<a href="https://smartprogram.baidu.com/docs/develop/api/media_image/#chooseImage/">swan.chooseImage</a>| |1.6.1 |

### **相关接口3 **

用户分享时可获取当前web-view的URL，即在onShareAppMessage回调中返回webViewUrl参数。

代码示例：

```javascript
Page({
    onShareAppMessage(options) {
        console.log(options.webViewUrl);
    }
})
```



### 使用 web-view 打开限定域名内的网页

进入<a href="https://smartprogram.baidu.com/developer/index.html">智能小程序开发者平台</a>，单击“设置->开发设置”，即可在业务域名中下载、配置校验文件并配置业务域名。


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="../../../img/component/webview.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>

**Bug & Tip:**

* 网页内 iframe 的域名也需要配置到域名白名单。
* 每个页面只能有一个 <`web-view/`>，<`web-view/`> 会自动铺满整个页面，并覆盖其他组件。
* 网页与智能小程序之间不支持除 JSSDK 提供的接口之外的通信。
* 避免在链接中带有中文字符，在 iOS 中会有打开白屏的问题，建议加一下 encodeURIComponent。
* 如果使用了 JSSDK 提供的接口，需要引入 `swanjs`。
* H5 运行时，通过 window.navigator.userAgent 获取浏览器 userAgent。当 userAgent 字符串中包含小程序标识：‘swan/’时，则说明当前环境为小程序 web-view。
