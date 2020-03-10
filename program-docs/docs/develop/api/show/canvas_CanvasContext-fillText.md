---
title: CanvasContext.fillText
header: develop
nav: api
sidebar:  canvas_CanvasContext-fillText
---

 

**解释**：在画布上绘制被填充的文本。

 
## 方法参数 

 
|参数名|属性|必填|默认值|说明|
|----|----|----|---|---|
| `text`|String|是||在画布上输出的文本。|
| `x`|Number|是|| 绘制文本的左上角 x 坐标位置。|
| `y`|Number|是||  绘制文本的左上角 y 坐标位置。|
| `maxWidth` |Number|否||  需要绘制的最大宽度（可选 ）。|
## 示例

<a href="swanide://fragment/111d313d772997c85709aaa679ddb9e81573724209338" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/fillText.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 


:::codeTab
 
```js
const canvasContext = swan.createCanvasContext('myCanvas');

canvasContext.setFontSize(20);
canvasContext.fillText('Hello', 20, 20);
canvasContext.fillText('World', 100, 100);

canvasContext.draw();
```
:::
