---
title: swan.stopAccelerometer
header: develop
nav: api
sidebar: swan-stopAccelerometer
---





**解释**：停止监听加速度数据。

 
## 方法参数 

Object object

###  `object` 参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 | | 接口调用成功的回调函数|
|fail  |  Function |   否 | | 接口调用失败的回调函数|
|complete |   Function |   否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|
## 示例

<a href="swanide://fragment/0ed5fe5e4d0957055cd7669fd83612731569478872196" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getGravity.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>




### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/stopAccelerometer.gif">
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
    onLoad() {
        swan.startAccelerometer({
            interval: 'ui'
        });
    },
    stopAccelerometer() {
        swan.stopAccelerometer({
            success: res => {
                console.log('startAccelerometer success', res);
            },
            fail: err => {
                console.log('startAccelerometer fail', err);
            }
        });
    }
});
```
