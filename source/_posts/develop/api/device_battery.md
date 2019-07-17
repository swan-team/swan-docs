---
title: 设备方向
header: develop
nav: api
sidebar: device_battery
---

## swan.getBatteryInfo
> 基础库 3.30.2 开始支持，低版本需做兼容处理。

**解释**：支持在小程序内获取当前设备电量。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 | -| 接口调用成功的回调|
|fail   | Function |   否  | -|接口调用失败的回调函数|
|complete  |  Function |   否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**回调参数说明**：

success回调函数参数：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|level |string | 设备电量， 范围为1-100|
|isCharging  | boolean | 设备是否正在充电|

**示例**：

<a href="swanide://fragment/cb6297a52344d70cb6550b4b64b6bf641557731832995" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getBatteryInfo">getBatteryInfo</button>
</view>
```

* 在 js 文件中

```js
Page({
    getBatteryInfo() {
        swan.getBatteryInfo({
            success(res) {
                console.log('当前设备电量值：', res.level);
                console.log('当前设备是否正在充电：', res.isCharging);
            },
            fail(err) {
                console.log('getBatteryInfo fail', err);
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

## swan.getBatteryInfoSync
> 基础库 3.30.2 开始支持，低版本需做兼容处理。

**解释**： 获取当前设备电量同步接口，ios系统不可用。
**方法参数**：无

**返回值说明**：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|level |string | 设备电量， 范围为1-100|
|isCharging  | boolean | 设备是否正在充电|

**示例**：

<a href="swanide://fragment/9e460b922c49f43567359b50f84488b21557732035056" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getBatteryInfoSync">getBatteryInfoSync</button>
</view>
```

* 在 js 文件中

```js
Page({
    getBatteryInfoSync() {
        try {
            const batteryInfo = swan.getBatteryInfoSync();
            console.log('当前设备电量值：', batteryInfo.level);
            console.log('当前设备是否正在充电：', batteryInfo.isCharging);
        } catch (err) {
            console.log('getBatteryInfoSync fail', err);
        }
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
**Bug&tips**:
* iOS 不可用会 mock 返回值 level为100， isCharging 为true。