---
title: swan.setScreenBrightness
header: develop
nav: api
sidebar: swan-setScreenBrightness
---

 

**解释**：设置屏幕亮度。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/screenBrightness.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|value |Number | 是  | -|屏幕亮度值，范围 0~1，0 最暗，1 最亮。|
|success| Function  |  否  | -|接口调用成功的回调|
|fail  |  Function  |  否 | -| 接口调用失败的回调函数|
|complete  |  Function |   否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/2cb53087761bf7f222f520e4780402d61569483519150" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    setScreenBrightness() {
        swan.setScreenBrightness({
            value: 1,
            success: res => {
                console.log('setScreenBrightness success', res);
            },
            fail: err => {
                console.log('scanCode fail', err);
            }
        });
    }
});
```

 
#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

 