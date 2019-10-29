---
title: swan.showModal
header: develop
nav: api
sidebar: toast_swan-showModal
---
 

**解释**：显示模态弹窗

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/modal.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title  | String|  是 | | 提示的标题|
|content |String | 是 | |  提示的内容|
|showCancel | Boolean|否  | true| 是否显示取消按钮 。|
|cancelText  |String | 否  |取消|取消按钮的文字，最多 4 个字符。|
|cancelColor |HexColor|    否  |#000000| 取消按钮的文字颜色。|
|confirmText |String | 否 | 确定| 确定按钮的文字，最多 4 个字符。|
|confirmColor |   HexColor  |  否 |#3c76ff|  确定按钮的文字颜色。|
|success| Function|    否  | | 接口调用成功的回调函数|
|fail   | Function  |  否  | |接口调用失败的回调函数|
|complete   | Function  |  否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|confirm |Boolean |为 true 时，表示用户点击了确定按钮 。 |
|cancel | Boolean |为 true 时，表示用户点击了取消。|

**示例**：
<a href="swanide://fragment/35d07dce512008b2cd12cc231e86b0f41569463801299" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.showModal({
    title: '标题',
    content: '提示内容、告知状态、信息和解决方法，描述尽量控制在两行内',
    showCancel: false
});

showModalNotitle() {
    swan.showModal({
        content: '提示内容、告知状态、信息和解决方法，描述尽量控制在两行内',
        confirmText: '确定',
        confirmColor: '色值',
        cancelText: '取消',
        cancelColor	: '确定',
    });
}
```

            


                                      
#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |


