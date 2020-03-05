---
title: CanvasContext.strokeText
header: develop
nav: api
sidebar: canvas_CanvasContext-strokeText
---
 

**解释**：给定的 (x, y) 位置绘制文本描边的方法。
 
## 方法参数 

 
|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
| `text`|String|是||要绘制的文本|
| `x`|Number|是||文本起始点的 x 轴坐标|
| `y`|Number|是||文本起始点的 y 轴坐标|
| `maxWidth`|Number|是||需要绘制的最大宽度，可选。|
## 示例

<a href="swanide://fragment/198f840b68c30fd3160e8a3bd11457df1574503509981" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/strokeText.png">
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

``` swan
<canvas canvas-id="myCanvas" class="myCanvas"/>
```

 

```js
Page({
    onReady: function () {
        const canvasContext = swan.createCanvasContext('myCanvas');
        canvasContext.setFontSize(50);
        canvasContext.fillText('50', 90, 90);
        canvasContext.strokeText('默认字样', 50, 50, 90);
        canvasContext.draw();
    }
});
```
:::
