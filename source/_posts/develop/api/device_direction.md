---
title: 设备方向
header: develop
nav: api
sidebar: device_direction
---


## swan.onDeviceMotionChange

> 基础库 3.30.2 开始支持，低版本需做兼容处理。

**解释：**监听设备方向变化事件。频率根据 swan.startDeviceMotionListening() 的 interval 参数。可以使用 swan.stopDeviceMotionListening() 停止监听。

**方法参数：**Function callback

**`callback`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|alpha |Number |是|-|当手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。|
|beta |Number |是|-|当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。|
|gamma |Number |是|-|当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。|

**示例：**

<a href="swanide://fragment/0cbcd6927a69de03076fd28110c987e21557731615850" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    onDeviceMotionChange
</view>
```

* 在 js 文件中

```js
Page({
    onLoad() {
        swan.onDeviceMotionChange(function (res) {
            console.log('onDeviceMotionChange', res);
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

## swan.startDeviceMotionListening

> 基础库 3.30.2 开始支持，低版本需做兼容处理。  

**解释：**开始监听设备方向的变化。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|interval |String  | 否 | normal| 监听设备方向的变化回调函数的执行频率|
|success |Function  | 否 |-|  接口调用成功的回调函数|
|fail  |  Function |  否 |-|  接口调用失败的回调函数|
|complete |   Function  | 否  | -|接口调用结束的回调函数（调用成功、失败都会执行）|

**interval 的合法值**

根据机型性能、当前 CPU 与内存的占用情况，interval 的设置与实际 swan.onAccelerometerChange() 回调函数的执行频率会有一些出入。

|值 |说明|
|---- | ---- |
|game |适用于更新游戏的回调频率，在 20ms/次 左右|
|ui |适用于更新 UI 的回调频率，在 60ms/次 左右|
|normal |普通的回调频率，在 200ms/次 左右|

**示例：**

<a href="swanide://fragment/419eaaa0083d3956c3b32f632388750f1557731685135" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="startDeviceMotionListening">startDeviceMotionListening</button>
</view>
```

* 在 js 文件中

```js
Page({
    startDeviceMotionListening() {
        swan.startDeviceMotionListening({
            interval: 'ui',
            success: function (res) {
                console.log('startDeviceMotionListening success', res);
            },
            fail: function (err) {
                console.log('startDeviceMotionListening fail', err);
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



## swan.stopDeviceMotionListening

> 基础库 3.30.2 开始支持，低版本需做兼容处理。  

**解释：**停止监听设备方向的变化。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 |-|  接口调用成功的回调函数|
|fail  |  Function |   否 |-|  接口调用失败的回调函数|
|complete |   Function |   否  | -|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

<a href="swanide://fragment/f211d7a7f1fb3b9aac48856b3fe463bb1557731761885" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="stopDeviceMotionListening">stopDeviceMotionListening</button>
</view>
```

* 在 js 文件中

```js
Page({
    onLoad() {
        swan.startDeviceMotionListening({
            interval: 'ui'
        });
    },
    stopDeviceMotionListening() {
        swan.stopDeviceMotionListening({
            success: function (res) {
                console.log('stopDeviceMotionListening success', res);
            },
            fail: function (err) {
                console.log('stopDeviceMotionListening fail', err);
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
