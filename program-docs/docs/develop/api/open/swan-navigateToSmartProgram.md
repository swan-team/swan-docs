---
title: swan.navigateToSmartProgram
header: develop
nav: api
sidebar: swan-navigateToSmartProgram
---

 

> 基础库 1.10.8 版本开始支持。在工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**解释**： 打开另一个小程序。
 
## 方法参数 

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|appKey | String | 是 | | 要打开的小程序App Key（使用线上版appkey和envVersion配合使用）|
|path | String | 否 | | 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 App.onLaunch、App.onShow 和 Page.onLoad 的回调函数中可以获取到 query 数据。|
|extraData | Object | 否 | | 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。|
|success | Function |  否  | | 接口调用成功的回调函数|
|fail   | Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|
|envVersion	|String	|否|release|	要打开的小程序版本（develop 开发版，trial 体验版）|
## 示例

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_navigateToSmartProgram.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/navigateToSmartProgram.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>


###  代码示例1: 打开正式版小程序 ：

<a href="swanide://fragment/dabf74367a3e2de2b4a43bf251368a371575358057825" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="navigateToSmartProgram">navigateToSmartProgram</button>
</view>
```

* 在 js 文件中

```js
Page({
    navigateToSmartProgram() {
        swan.navigateToSmartProgram({
            appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', // 要打开的小程序 App Key
            path: 'pages/openShare/openShare', // 打开的页面路径，如果为空则打开首页
            success: res => {
                console.log('navigateToSmartProgram success', res);
            },
            fail: err => {
                console.log('navigateToSmartProgram fail', err);
            }
        });
    }
});
```

###  代码示例2: 打开开发版小程序（携带参数） ：

<a href="swanide://fragment/03ed9b0a7c5afe2c856bd37d3ec73cf21575358502435" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="navigateToSmartProgram">navigateToSmartProgram</button>
</view>
```

* 在 js 文件中

```js
Page({
    navigateToSmartProgram() {
        swan.navigateToSmartProgram({
            appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c_dev15736', // 要打开的小程序 App Key，开发版appkey可在开发者工具中预览获取
            path: 'pages/openShare/openShare?k=v', // 打开的页面路径，如果为空则打开首页
            extraData: {
                foo: 'baidu'
            },
            success: res => {
                console.log('navigateToSmartProgram success', res);
            },
            fail: err => {
                console.log('navigateToSmartProgram fail', err);
            }
        });
    }
});
```
##  错误码
###  Android

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
|402|安全性检查：访问控制校验失败|
|501|网络错误|
|1001|执行失败|

###  iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
|402|访问控制校验失败|

