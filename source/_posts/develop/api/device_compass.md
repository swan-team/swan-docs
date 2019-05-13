---
title: 罗盘
header: develop
nav: api
sidebar: device_compass
---


## swan.onCompassChange

**解释：**监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用swan.stopCompass停止监听。

**方法参数：**Function callback

**`callback`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|direction |Number |是|-|面对的方向度数|

**示例：**
<a href="swanide://fragment/1e98ee9687ed0c6b0f9cb4c747af8b7c1540398490" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

```javascript
swan.onCompassChange(function (res) {
    console.log(res.direction);
});

```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|设备不支持| -->

## swan.startCompass

**解释：**开始监听罗盘数据。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 |-|  接口调用成功的回调函数|
|fail  |  Function |   否 |-|  接口调用失败的回调函数|
|complete |   Function |   否  |-| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

<a href="swanide://fragment/82b6da5b4ce6509369cc848f6bdf33601557731425444" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="startCompass">startCompass</button>
</view>
```

* 在 js 文件中

```js
Page({
    startCompass() {
        swan.startCompass({
            success: function (res) {
                console.log('startCompass success', res);
            },
            fail: function (err) {
                console.log('startCompass fail', err);
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

## swan.stopCompass

**解释：**停止监听罗盘数据。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 |-|  接口调用成功的回调函数|
|fail  |  Function |   否 |-|  接口调用失败的回调函数|
|complete |   Function |   否  |-| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

<a href="swanide://fragment/f63b7abb5f18b2d596d934c3213e3d8f1557731481133" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="stopCompass">stopCompass</button>
</view>
```

* 在 js 文件中

```js
Page({
    onLoad() {
        swan.startCompass();
    },
    stopCompass() {
        swan.stopCompass({
            success: function (res) {
                console.log('stopCompass success', res);
            },
            fail: function (err) {
                console.log('stopCompass fail', err);
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