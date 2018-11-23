---
title: 屏幕亮度
header: develop
nav: api
sidebar: device_screen
---

setScreenBrightness
---
**解释：**设置屏幕亮度。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|value |Number | 是  | 屏幕亮度值，范围 0~1，0 最暗，1 最亮。|
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

getScreenBrightness
---
**解释：**获取屏幕亮度。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|value   | Number | 屏幕亮度值，范围 0~1，0 最暗，1 最亮。|

setKeepScreenOn
---
**解释：**设置是否保持常亮状态。仅在当前智能小程序生效，离开智能小程序后设置失效。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|keepScreenOn |Boolean | 是  | 是否保持屏幕常亮|
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|


<!-- onUserCaptureScreen
---
**解释：**监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。
**参数：**CALLBACK

**CALLBACK返回参数：**
无
**示例：**

```js
swan.onUserCaptureScreen(function() {
    console.log('用户截屏了')
});
``` -->
