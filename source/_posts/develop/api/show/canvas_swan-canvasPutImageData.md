---
title: swan.canvasPutImageData
header: develop
nav: api
sidebar: canvas_swan-canvasPutImageData
---
 

**解释**：将像素数据绘制到画布的方法。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 `<canvas>` 组件。

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|canvasId	| String | 是  | | 画布标识，传入 `<canvas> `组件的 canvas-id 属性。|
|x	| Number | 是  | |将要被提取的图像数据矩形区域的左上角横坐标 |
|y	| Number | 是  | |将要被提取的图像数据矩形区域的左上角纵坐标 |
|width	| Number | 是  | | 将要被提取的图像数据矩形区域的宽度|
|height	| Number | 是  | | 将要被提取的图像数据矩形区域的高度 |
|data	| Uint8ClampedArray | 是  | | 图像像素点数据，一维数组，每四项表示一个像素点的 rgba |
|success	| Function | 否  | | 接口调用成功的回调函数 |
|fail	| Function | 否  | | 接口调用失败的回调函数 |
|complete	| Function | 否  | |接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/8a3f848b498ceb702128591867e00d631558353320644" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <canvas canvas-id="canvas1"></canvas>
    <canvas canvas-id="canvas2"></canvas>
    <button type="primary" bindtap="canvasPutImageData">canvasPutImageData</button>
</view>
```

* 在 js 文件中

```js
Page({
    onReady() {
        const CanvasContext = swan.createCanvasContext('canvas1');
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
    canvasPutImageData() {
        swan.canvasGetImageData({
            canvasId: 'canvas1',
            x: 0,
            y: 0,
            width: 200,
            height: 200,
            success: res => {
                swan.canvasPutImageData({
                    canvasId: 'canvas2',
                    x: 0,
                    y: 0,
                    width: 200,
                    height: 200,
                    data: res.data,
                    success: res => {
                        console.log('canvasPutImageData success', res);
                    },
                    fail: err => {
                        console.log('canvasPutImageData fail', err);
                    }
                })
            },
            fail: err => {
                console.log('canvasGetImageData fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```


#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

