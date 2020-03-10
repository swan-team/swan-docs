---
title: CanvasContext.draw
header: develop
nav: api
sidebar: canvas_CanvasContext-draw
---
 


**解释**：将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。

 
## 方法参数 

 
|参数名|属性|必填|默认值|说明|
|----|----|----|---|---|
| `reserve`|Boolean|否|false|本次绘制是否接着上一次绘制，即 reserve 参数为 false，则在本次调用 drawCanvas 绘制之前 native 层应先清空画布再继续绘制；若 reserver 参数为 true，则保留当前画布上的内容，本次调用 drawCanvas 绘制的内容覆盖在上面。|
| `callback`|Functio|是|| 绘制完成后回调 |
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
![图片](../../../../img/api/canvas/draw1.png)

###  代码示例1 - reserve为false ：

<a href="swanide://fragment/408aa17bb845b0a6d87ee5b5a13dc26e1574532413473" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab
```js
const canvasContext = swan.createCanvasContext('myCanvas');
canvasContext.setFillStyle('blue');
canvasContext.fillRect(10, 10, 150, 100);
canvasContext.draw();
canvasContext.setFillStyle('red');
canvasContext.fillRect(30, 30, 150, 100);
canvasContext.draw();
```
::: 
###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/draw.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>


###  代码示例2 - reserve为true ：

<a href="swanide://fragment/c644a427f48dbe93e232dabea0b3bc701574933246460" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab
```js
Page({
    onReady: function () {
        const canvasContext = swan.createCanvasContext('myCanvas');
        canvasContext.setFillStyle('blue');
        canvasContext.fillRect(10, 10, 150, 100);
        canvasContext.draw();
        canvasContext.setFillStyle('red');
        canvasContext.fillRect(30, 30, 150, 100);
        canvasContext.draw(true);
    }
});
```
:::

##  错误码
###  Android

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|

###  iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |

