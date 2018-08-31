---
title: 加速度计
header: develop
nav: api
sidebar: device_accelerometer
---


onAccelerometerChange
---
**解释：**监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 swan.stopAccelerometer 停止监听。
**参数：**CALLBACK

**CALLBACK返回参数：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|x |Number |X 轴|
|y |Number |Y 轴|
|z |Number |Z 轴|

****示例：****

```javascript
swan.onAccelerometerChange(function (res) {
  console.log(res.x);
  console.log(res.y);
  console.log(res.z);
});
```
startAccelerometer
---
**解释：**开始监听加速度数据。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

****示例：****

```javascript
swan.startAccelerometer();
```

stopAccelerometer
---
**解释：**停止监听加速度数据。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

****示例：****

```javascript
swan.stopAccelerometer();
```
