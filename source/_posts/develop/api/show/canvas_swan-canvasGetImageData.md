---
title: swan.canvasGetImageData
header: develop
nav: api
sidebar: canvas_swan-canvasGetImageData
---


 


**解释**：返回一个数组，用来描述 canvas 区域隐含的像素数据。在自定义组件下，操作组件内 `<canvas>` 组件。

 百度APP中扫码体验： 

<img src=""  class="demo-qrcode-image" />

## 方法参数 

Object object

###  `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|canvasId	| String | 是  | | 画布标识，传入 `<canvas>` 组件的 canvas-id 属性。|
|x	| Number | 是  |  |将要被提取的图像数据矩形区域的左上角横坐标 |
|y	| Number | 是  | | 将要被提取的图像数据矩形区域的左上角纵坐标 |
|width	| Number | 是  | | 将要被提取的图像数据矩形区域的宽度|
|height	| Number | 是  | | 将要被提取的图像数据矩形区域的高度 |
|success	| Function | 否  | |接口调用成功的回调函数 |
|fail	| Function | 否  | | 接口调用失败的回调函数 |
|complete	| Function | 否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

###  success返回参数说明  

|参数  |类型|说明 |
|---- | ---- |---- |
|width|number|图像数据矩形的宽度|
|height|number|图像数据矩形的高度|
|data|Uint8ClampedArray|图像像素点数据，一维数组，每四项表示一个像素点的rgba|
## 示例

<a href="swanide://fragment/b0967f7f06b396397157bb1fa217e4ee1574498382441" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_canvasGetImageData.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/canvasGetImageData.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



* 在 swan 文件中

```html
<view class="wrap">
    <canvas canvas-id="canvas"></canvas>
    <button type="primary" bindtap="canvasGetImageData">canvasGetImageData</button>
</view>
```

* 在 js 文件中

```js
Page({
    onReady() {
        const CanvasContext = swan.createCanvasContext('canvas');
        CanvasContext.setFillStyle('#0f0f0f');
        CanvasContext.arc(100, 100, 50, 0, 2 * Math.PI);
        CanvasContext.fill();
        CanvasContext.beginPath();
        CanvasContext.setStrokeStyle('#0000ff');
        CanvasContext.moveTo(90, 70);
        CanvasContext.lineTo(70, 80);
        CanvasContext.lineTo(90, 80);
        CanvasContext.closePath();
        CanvasContext.stroke();
        CanvasContext.beginPath();
        CanvasContext.setStrokeStyle('#0000ff');
        CanvasContext.moveTo(130, 70);
        CanvasContext.lineTo(110, 80);
        CanvasContext.lineTo(130, 80);
        CanvasContext.closePath();
        CanvasContext.stroke();
        CanvasContext.beginPath();
        CanvasContext.setFillStyle('#00ff00');
        CanvasContext.arc(100, 100, 20, 0, 1 * Math.PI);
        CanvasContext.fill();
        CanvasContext.setFillStyle('#00ff00');
        CanvasContext.setFontSize(12);
        CanvasContext.fillText('haha', 165, 78);
        CanvasContext.moveTo(100, 50);
        CanvasContext.setStrokeStyle('#00ff00');
        CanvasContext.bezierCurveTo(100, 25, 75, 25, 50, 50);
        CanvasContext.stroke();
        CanvasContext.moveTo(100, 50);
        CanvasContext.quadraticCurveTo(75, 25, 50, 50);
        CanvasContext.stroke();
        CanvasContext.draw();
    },
    canvasGetImageData() {
        swan.canvasGetImageData({
            canvasId: 'canvas',
            x: 0,
           y: 0,
            width: 100,
            height: 100,
            success: res => {
                console.log('canvasGetImageData success', res);
            },
            fail: err => {
                console.log('canvasGetImageData fail', err);
            }
        });
    }
});
```

## 错误码
###  Android

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|

###  iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
