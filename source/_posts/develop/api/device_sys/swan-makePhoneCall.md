---
title: swan.makePhoneCall
header: develop
nav: api
sidebar: swan-makePhoneCall
---

 

> 在工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**解释**：拨打电话

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/makePhoneCall.png"  class="demo-qrcode-image" />



**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|phoneNumber |String | 是  | | 需要拨打的电话号码|
|success| Function  |  否  | | 接口调用成功的回调|
|fail  |  Function  |  否 | | 接口调用失败的回调函数|
|complete  |  Function |   否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：
<a href="swanide://fragment/9cf5e060c76b0c2d9160335b815d2ccf1569484502200" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
makePhoneCall(e) {
    swan.makePhoneCall({
        'xxxxx',
        success: res => {
            console.log('makePhoneCall success', res);
        },
        fail: err => {
            swan.showModal({
                title: '拨打失败',
                content: '请检查是否输入了正确的电话号码',
                showCancel: false
            });
        }
    });
}

``` 
 
#### 错误码

* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
|302|找不到调起协议对应端能力方法|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
