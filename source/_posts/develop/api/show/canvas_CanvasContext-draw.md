---
title: CanvasContext.draw
header: develop
nav: api
sidebar: canvas_CanvasContext-draw
---
 


**解释**：将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

**方法参数**：Boolean reserve, Function callback

**`reserve`参数说明**： 非必填。本次绘制是否接着上一次绘制，即 reserve 参数为 false，则在本次调用 drawCanvas 绘制之前 native 层应先清空画布再继续绘制；若 reserver 参数为 true，则保留当前画布上的内容，本次调用 drawCanvas 绘制的内容覆盖在上面，默认 false。

**`callback`参数说明**：绘制完成后回调 

**图片示例**：

![图片](../../../../img/api/canvas/draw1.png)

**代码示例**：

<a href="swanide://fragment/b39a66dd09566477c1abddd6ffa146111573725210935" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.setFillStyle('blue');
canvasContext.fillRect(10, 10, 150, 100);
canvasContext.draw();
canvasContext.fillRect(30, 30, 150, 100);
canvasContext.draw();
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

