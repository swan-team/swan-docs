---
title: CanvasContext.draw
header: develop
nav: api
sidebar: canvas_CanvasContext-draw
---
 


**解释**：将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。

**方法参数**：Boolean reserve, Function callback

**`reserve`参数说明**： 非必填。本次绘制是否接着上一次绘制，即 reserve 参数为 false，则在本次调用 drawCanvas 绘制之前 native 层应先清空画布再继续绘制；若 reserver 参数为 true，则保留当前画布上的内容，本次调用 drawCanvas 绘制的内容覆盖在上面，默认 false。

**`callback`参数说明**：绘制完成后回调 


**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas');
CanvasContext.setFillStyle('blue');
CanvasContext.fillRect(10, 10, 150, 100);
CanvasContext.draw();
CanvasContext.fillRect(30, 30, 150, 100);
CanvasContext.draw();
```

![图片](../../../../img/api/canvas/draw1.png)

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

