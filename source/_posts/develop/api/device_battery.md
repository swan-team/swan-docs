---
title: 设备方向
header: develop
nav: api
sidebar: device_battery
---

## swan.getBatteryInfo
> 基础库 3.30.2 开始支持，低版本需做兼容处理。

**解释**：支持在小程序内获取当前设备电量。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|


|success |Function  |  否 |  接口调用成功的回调|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**回调参数说明：**

success回调函数参数：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|level |string | 设备电量， 范围为1-100|
|isCharging  | boolean | 设备是否正在充电|
**示例代码：**

```javascript
swan.getBatteryInfo({
    success(res) {
        console.log('当前设备电量值：'，res.level);
    },
    fail(err) {
        console.log('获取电量值失败：', err);
    }
})
```

## swan.getBatteryInfoSync
> 基础库 3.30.2 开始支持，低版本需做兼容处理。

**解释**： 获取当前设备电量同步接口，ios系统不可用。

**返回值说明：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|level |string | 设备电量， 范围为1-100|
|isCharging  | boolean | 设备是否正在充电|
**示例代码：**

```javascript
const batteryInfo = swan.getBatteryInfoSync();
swan.showModal({
	title: '获取设备电量'，
	content: JSON.stringify(batteryInfo)
});
```
**Bug&tips**:
* iOS 不可用会 mock 返回值 level为100， isCharging 为true。