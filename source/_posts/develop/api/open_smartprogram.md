---
title: 打开智能小程序
header: develop
nav: api
sidebar: open_smartprogram
---

## swan.navigateToSmartProgram

> 基础库 1.10.8 版本开始支持。在工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**解释**： 打开另一个小程序。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|appKey | String | 是 | -| 要打开的小程序App Key 。|
|path | String | 否 | -| 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 App.onLaunch、App.onShow 和 Page.onLoad 的回调函数中可以获取到 query 数据。|
|extraData | Object | 否 | -| 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。|
|success | Function |  否  | -| 接口调用成功的回调函数|
|fail   | Function  |  否  | -| 接口调用失败的回调函数|
|complete  |  Function  |  否 | -|  接口调用结束的回调函数（调用成功、失败都会执行）|
|envVersion	|String	|否|release|	要打开的小程序版本（develop 开发版，trial 体验版）|

**示例**：

<a href="swanide://fragment/08bcf5aff52ed378f39c8112eb3d4a051559044193460" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
            path: 'pages/openShare/openShare?k=v', // 打开的页面路径，如果为空则打开首页
            extraData: {
                foo: 'baidu'
            },
            success: function (res) {
                console.log('navigateToSmartProgram success', res);
            },
            fail: function (err) {
                console.log('navigateToSmartProgram fail', err);
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

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
|402|安全性检查：访问控制校验失败|
|501|网络错误|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|402|访问控制校验失败|

## swan.navigateBackSmartProgram

>  基础库 1.10.8 版本开始支持。在工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**解释**： 返回到上一个小程序。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|extraData | Object | 否 | -| 需要返回给上一个小程序的数据，上一个小程序可在 [App.onLaunch()，App.onShow()](http://smartprogram.baidu.com/docs/develop/framework/app_service_register/) 中获取到这份数据。|
|success | Function |  否  | -| 接口调用成功的回调函数|
|fail   | Function  |  否  | -| 接口调用失败的回调函数|
|complete  |  Function  |  否 | -|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：
<a href="swanide://fragment/df2bcb7ca1229b466e859bc1a40c21091559044133015" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="navigateBackSmartProgram">navigateBackSmartProgram</button>
</view>
```

* 在 js 文件中

```js
Page({
    navigateBackSmartProgram() {
        swan.navigateBackSmartProgram({
            extraData: {
                foo: 'baidu'
            },
            success: function (res) {
                console.log('navigateBackSmartProgram success', res);
            },
            fail: function (err) {
                console.log('navigateBackSmartProgram fail', err);
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

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

