---
title: swan.showActionSheet
header: develop
nav: api
sidebar: toast_swan-showActionSheet
---

 

**解释**：​显示操作菜单

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/showActionSheet.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|itemList |   Array.&lt;string&gt;  |  是 | |  按钮的文字数组，数组长度最大为6个。|
|itemColor |  HexColor|    否   |#3c76ff|按钮的文字颜色。|
|success| Function  |  否  | | 接口调用成功的回调函数，详见返回参数说明。|
|fail  |  Function |   否  | |  接口调用失败的回调函数|
|complete   | Function |   否 | |   接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|tapIndex |   Number | 用户点击的按钮，从上到下的顺序，从0开始。|


**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/showAction.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**
<a href="swanide://fragment/c96f91497b4edc0c93df37756919a2001574135826789" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button bind:tap="showActionSheet" class="button" type="primary" hover-stop-propagation="true">弹出action sheet</button> 
</view>
```

* 在 js 文件中

```js
Page({
    showActionSheet() {
        swan.showActionSheet({
            itemList: ['选项一', '选项二', '选项三', '选项四'],
            itemColor: '#333',
            success: res => {
                console.log('用户点击了第' + (res.tapIndex + 1) + '个按钮');
            },
            fail: err => {
                console.log('showActionSheet fail', err);
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