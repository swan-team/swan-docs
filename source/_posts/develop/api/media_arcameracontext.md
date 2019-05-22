---
title: AR 相机组件控制
header: develop
nav: api
sidebar: media_arcameracontext
---

## swan.createARCameraContext

> 基础库 3.15.104 开始支持，低版本需做兼容处理。**目前只针对百度 APP 开放使用。**

**解释**：创建并返回 ar-camera 上下文 `ARCameraContext`对象，ARCameraContext 与页面的 <a href='https://smartprogram.baidu.com/docs/develop/component/media/#ar-camera/'>ar-camera</a> 组件绑定，一个页面只能有一个 ar-camera，通过它可以操作对应的组件。

<!-- docs/develop/component/media/#ar-camera/ -->
**方法参数**：无

**返回值**：ARCameraContext

## ARCameraContext

**`ARCameraContext`对象的方法列表**：

|方法 | 参数  |说明|
|---- | ---- | ---- |
|takePhoto |  Object|  拍照，成功则返回图片。|
|reset | Object |重置相机|
|startRecord |Object  |开始录像|
|stopRecord | Object | 结束录像，成功则返回视频。|

**takePhoto 的 Object 参数列表**：

|参数  |类型 | 必填 | 说明|
|---- | ---- | ---- |---- |
|success| Function |   否  | 接口调用成功的回调函数，res = { tempImagePath }|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete |   Function  |  否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**reset 的 Object 参数列表**：

|参数  |类型 | 必填 | 说明|
|---- | ---- | ---- |---- |
|success| Function |   否  | 接口调用成功的回调函数|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete |   Function  |  否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**startRecord 的 Object 参数列表**：

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- |---- |
|progress|Function|否|录制进度更新的回调函数，res = { progress }|
|timeout|Function|否|超过 10s 或页面 onHide 时会结束录像，res = { tempVideoPath }|
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否  | 接口调用失败的回调函数|
|complete   | Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|


**stopRecord 的 Object 参数列表**：

|参数 | 类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function   | 否  | 接口调用成功的回调函数 ，res = { tempVideoPath }。|
|fail |   Function |   否  | 接口调用失败的回调函数|
|complete   | Function   | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例代码**：

```js
const ctx = swan.createARCameraContext();

ctx.takePhoto();

ctx.startRecord({
    progress(res) {
        console.log('进度更新了', res.progress);
    },
    timeout(res) {
        console.log('超时/onHide', res.tempVideoPath);
    }
});
```

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|
|200101|相机权限-用户拒绝|
|200102|相机权限-系统权限拒绝|
|200201|录音权限-用户拒绝|
|200201|录音权限-系统权限拒绝|

**iOS**

|错误码|说明|
|--|--|
|202 |解析失败，请检查参数是否正确|
|10003|用户拒绝
|200101|授权失败，用户拒绝service下发的权限|
|200102|授权失败，用户拒绝手白系统访问相机权限|
|200103|相机被抢占打断|
|200201|录音权限，用户拒绝小程序service下发的权限|
|200202|录音权限，用户拒绝系统录音权限| -->