---
title: swan.getScreenBrightness
header: develop
nav: api
sidebar: swan-getScreenBrightness
---



**解释**：获取屏幕亮度。

 
## 方法参数 

Object object

###  `object` 参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|success| Function  |  否  | |接口调用成功的回调|
|fail  |  Function  |  否 | | 接口调用失败的回调函数|
|complete  |  Function |   否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明 ：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|value   | Number | 屏幕亮度值，范围 0~1，0 最暗，1 最亮。|
## 示例

<a href="swanide://fragment/2cb53087761bf7f222f520e4780402d61569483519150" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/screenBrightness.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>




### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getScreenBrightness.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 




* 在 js 文件中

```js
Page({
    getScreenBrightness() {
        swan.getScreenBrightness({
            success: res => {
                console.log('屏幕亮度值', res.value);
            },
            fail: err => {
                console.log('scanCode fail', err);
            }
        });
    }
});
```

##  错误码
###  Android

|错误码|说明|
|:--|:--|
|1001|执行失败  |
