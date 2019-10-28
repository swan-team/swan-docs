---
title: swan.showToast
header: develop
nav: api
sidebar:  toast_swan-showToast
---
 

**解释**：显示消息提示框

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/toast.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title  | String | 是  |-| 提示的内容 |
|icon | String | 否  | success|图标，有效值` "success"、"loading"、"none"`。 |
|image  |  String | 否 | -| 自定义图标的本地路径，image 的优先级高于 icon |
|duration  |  Number | 否 |  2000| 提示的延迟时间，单位毫秒。 |
|success| Function |   否 | -| 接口调用成功的回调函数 |
|fail  |  Function |   否  |-| 接口调用失败的回调函数 |
|complete   | Function |   否| -|  接口调用结束的回调函数（调用成功、失败都会执行）|
|mask|Boolean|否|false|是否显示透明蒙层，防止触摸穿透。|

**icon有效值**：

|有效值 |说明  |
|---- | ---- |
|success | 显示成功图标，此时 title 文本最多显示 7 个汉字长度。默认值 |
|loading |显示加载图标，此时 title 文本最多显示 7 个汉字长度。|
|none |不显示图标，此时 title 文本最多可显示两行。  |

**示例**：
<a href="swanide://fragment/5050e3a31e5a3d2ecc1843df6fcb19511569462991855" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.showToast({
    title: 'success',
    icon: 'success',
    duration: 5000,
    mask: true,
    success: res => {
        console.log('showToast success');
    },
    fail: err => {
        console.log('showToast fail', err);
    }
});
```
 
#### 错误码
* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|302|找不到调起协议对应端能力方法|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |


   
