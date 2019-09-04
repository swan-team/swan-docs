---
title: 网络状态
header: develop
nav: api
sidebar: device_network
---

## swan.getNetworkType

**解释**：获取网络类型

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否  |-| 接口调用成功，返回网络类型 networkType|
|fail | Function  |  否  |-| 接口调用失败的回调函数|
|complete  |  Function  |  否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数  |类型|说明 |
|---- | ---- |---|
|networkType |String|网络类型，值有 wifi/2g/3g/4g/unknown (Android 下不常见的网络类型)/none (无网络)。|

**示例**：
<a href="swanide://fragment/33d64ae36aaded38bb0fe1d67da68a831560168350301" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <view class="title">当前网络状态</view>
        <view class="page-info">{{networkType}}</view>
        <button class="btn" bind:tap="getNetworkType" type="primary" hover-stop-propagation="true">点击获取网络状态</button>
        <button bind:tap="clearClick" hover-stop-propagation="true">清空</button>
    </view>
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">{{title}}</view>
    </view>
</view>
```
* 在 js 稳重

```js
Page({
    data: {
        title: 'getNetworkType',
        networkType: '未获取'
    },

    getNetworkType() {
        swan.getNetworkType({
            success: res => {
                this.setData('networkType', res.networkType);
            },
            fail: err => {
                swan.showToast({
                    title: '获取网络状态失败'
                });
            }
        });
    },

    clearClick(e) {
        this.setData('networkType', '未获取');
    }
});
```

 
#### 错误码
* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

## swan.onNetworkStatusChange

> 工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)

**解释**：监听网络状态变化。

**方法参数**：Function callback

**`callback`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|isConnected |Boolean |是|-|当前是否有网络连接|
|networkType| String |是|-| 网络类型|

**networkType 有效值**：

|值   |说明|
|---- | ---- |
|wifi   | wifi 网络|
|2g  |2g 网络|
|3g | 3g 网络|
|4g | 4g 网络|
|none  |  无网络|
|unknown |Android 下不常见的网络类型|

**示例**：
<a href="swanide://fragment/2a22d045874fb13e60e7e17efc3ad1061560168528969" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <view class="title">当前网络状态</view>
        <view class="page-info">{{networkType}}</view>
    </view>
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">{{title}}</view>
    </view>
</view>
```

* 在 js 文件中
```js
Page({
    data: {
        title: 'onNetworkStatusChange',
        networkType: '未获取'
    },

    onLoad() {
        let self = this;
        swan.getNetworkType({
            success: res => {
                self.setData('networkType', res.networkType);
            }
        });
        swan.onNetworkStatusChange(function (res) {
            self.setData('networkType', res.networkType);
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