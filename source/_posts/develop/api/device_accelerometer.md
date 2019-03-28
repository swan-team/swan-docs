---
title: 加速度计
header: develop
nav: api
sidebar: device_accelerometer
---


## onAccelerometerChange

**解释：**监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 swan.stopAccelerometer 停止监听。
**参数：**CALLBACK

**CALLBACK返回参数：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|x |Number |X 轴|
|y |Number |Y 轴|
|z |Number |Z 轴|

**示例：**
<a href="swanide://fragment/0408f2415879e6fda656fd9f627e2ed81540399039" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>


```javascript
swan.onAccelerometerChange(function (res) {
    console.log(res.x);
    console.log(res.y);
    console.log(res.z);
});
```
<!-- 
#### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|设备不支持否正确| -->
## startAccelerometer

**解释：**开始监听加速度数据。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|interval|String |否 |监听加速度数据回调函数的执行频率|
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**interval 的合法值**

根据机型性能、当前 CPU 与内存的占用情况，interval 的设置与实际 swan.onAccelerometerChange() 回调函数的执行频率会有一些出入。

|值 |说明|
|---- | ---- |
|game |适用于更新游戏的回调频率，在 20ms/次 左右|
|ui |适用于更新 UI 的回调频率，在 60ms/次 左右|
|normal |普通的回调频率，在 200ms/次 左右|

**示例：**

```javascript
swan.startAccelerometer({
    interval: 'ui'
});
```

## stopAccelerometer

**解释：**停止监听加速度数据。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```javascript
swan.stopAccelerometer();
```
