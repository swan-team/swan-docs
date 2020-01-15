---
title: swan.getSystemRiskInfo
header: develop
nav: api
sidebar: swan-getSystemRiskInfo
---

 

**解释**： 获取用于得到风控信息的加密信息对象。更多小程序风控能力参见[风控服务](https://smartprogram.baidu.com/docs/develop/serverapi/open_risk_power/)。

 
## 方法参数 

Object object

### `object`参数说明 

|参数名|类型|必填|默认值|说明|
|----|----|----|----|----|
|success|Function|否| |接口调用成功的回调函数|
|fail|Function|否| |接口调用失败的回调函数|
|complete|Function|否| |接口调用结束的回调函数（调用成功、失败都会执行)|

### success返回参数说明 

|参数|类型|说明|
|----|----|----|
|content|Object|用于获取风控信息的加密信息对象。要获取风控信息，需要和[风控检测](/develop/serverapi/open_risk_power/#detectrisk/)接口联合使用，并作为[风控检测](/develop/serverapi/open_risk_power/#detectrisk/)接口的 xtoken 参数传入。格式：{"key":"xxxx","value":"xxxx"}|
## 示例

<a href="swanide://fragment/e8f8b341e79ae777f0e8c9fcd46395321561118230856" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_getSystemRiskInfo.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getSystemRiskInfo.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getSystemRiskInfo">getSystemRiskInfo</button>
</view>
```

* 在 js 文件中

```js
Page({
    getSystemRiskInfo() {
        swan.getSystemRiskInfo({
            success: res => {
                console.log('getSystemRiskInfo success', res);
                // res：{"key":"xxxx","value":"xxxx"}
            },
            fail: err => {
                console.log('getSystemRiskInfo fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```