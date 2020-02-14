---
title: CanvasContext.setTransform
header: develop
nav: api
sidebar: canvas_CanvasContext-setTransform
---

 
**解释**：使用矩阵重新设置（覆盖）当前变换的方法。
 
## 方法参数 

 
|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
| `scaleX`|Number|是|| 水平缩放  | 
| `scaleY`|Number|是||  垂直缩放| 
|  `skewX`|Number|是||  水平倾斜  |  
| `skewY`|Number|是|| 垂直倾斜  | 
| `translateX`|Number|是|| 水平移动  | 
| `translateY`|Number|是|| 垂直移动  | 
## 示例

<a href="swanide://fragment/09aed2f95717be5b27b1f6970a5fc5811574530265118" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/setTransform.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



```js
Page({
    onReady: function () {
        const canvasContext = this.createCanvasContext('myCanvas');
        canvasContext.setFillStyle('blue');
        canvasContext.fillRect(30, 30, 150, 75);
        canvasContext.setTransform(1, 0.5, -0.5, 1, 30, 10);
        canvasContext.setFillStyle('red');
        canvasContext.fillRect(30, 30, 150, 75);
        canvasContext.setTransform(1, 0.5, -0.5, 1, 30, 10);
        //此方法与transform()方法的唯一区别是setTransform()方法会重置前面的矩阵，然后再绘制出一个新的矩阵；transform()方法则不会重置前面的矩阵，而是在前面的基础上继续进行缩放、位移或者旋转。放开注释，则会看到两个蓝色矩形
        // canvasContext.setFillStyle('blue');
        // canvasContext.fillRect(30, 30, 150, 75);
        canvasContext.draw();
    }
});
```
