---
title: swan.setBackgroundColor
header: develop
nav: api
sidebar: background_swan-setBackgroundColor
---

 

> 基础库 3.10.4 版本开始支持。

**解释**：设置窗口的背景颜色。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_setBackgroundColor.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|backgroundColor |String | 否| | 需设置的背景窗口颜色，支持十六进制颜色值。11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|backgroundColorTop |String | 否| - | 需设置的顶部背景窗口颜色，支持十六进制颜色值，仅ios有效。 11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|backgroundColorBottom |String  |  否| - |需设置的底部背景窗口颜色，支持十六进制颜色值，仅ios有效。11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|success  |  Function |   否  | | 接口调用成功的回调函数| 
|fail  |  Function |   否  | | 接口调用失败的回调函数| 
|complete   | Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|  

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/setBackgroundColor.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1 - backgroundColor：#000000**：

<a href="swanide://fragment/66f332965704ae69bbdcaefe3db158fa1575139212532" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```js
<view class="container">
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>设置窗口的背景颜色</view>
            <view>色值为: #000000</view>
        </view>
            <button type="primary" bindtap="setBackgroundColor">setBackgroundColor</button>
    </view>
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">setBackgroundColor</view>
    </view>
</view>
```


* 在 js 文件中

```js
Page({
    setBackgroundColor() {
        swan.setBackgroundColor({
            backgroundColor: '#000000',
            success: function () {
                console.log('setBackgroundColor success');
            },
            fail: function (err) {
                console.log('setBackgroundColor fail', err);
            }
        });
    }
});
```
**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/backgroundColorTop.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例2 - backgroundColorTop：#FFC0CB**：

<a href="swanide://fragment/78fa2cb4a9f355eb08b78ce9ad2cf41d1575139455048" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    setBackgroundColor() {
        swan.setBackgroundColor({
            backgroundColorTop: '#FFC0CB',
            success: function () {
                console.log('setBackgroundColor success');
            },
            fail: function (err) {
                console.log('setBackgroundColor fail', err);
            }
        });
    }
});
```
**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/backgroundColorBottom.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例3 - backgroundColorBottom：#7B68EE**：

<a href="swanide://fragment/b748d492aae0dcbcd9fe4aa8b0dea4251575139563423" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    setBackgroundColor() {
        swan.setBackgroundColor({
            backgroundColorBottom: '#7B68EE',
            success: function () {
                console.log('setBackgroundColor success');
            },
            fail: function (err) {
                console.log('setBackgroundColor fail', err);
            }
        });
    }
});
```

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
