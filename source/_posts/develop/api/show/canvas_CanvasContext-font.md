---
title: CanvasContext.font
header: develop
nav: api
sidebar: canvas_CanvasContext-font
---

 

**解释**：设置当前字体样式的属性。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png"  class="demo-qrcode-image" />

**方法参数**：String value

**`value` 参数说明**：符合 CSS font 示例的 DOMString 字符串，至少需要提供字体大小和字体族名，有效值为 10px sans-serif 。 

**value 支持的属性有**：

| 属性 | 说明 |
|---- | ---- |
| style | 字体样式，有效值 italic, oblique, normal。 |
| weight | 字体粗细，有效值 normal, bold。 |
| size | 字体大小 |
| family | 字体族名，注意确认各平台所支持的字体 。|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/canvascontextfont.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>   
</div>

**代码示例**

<a href="swanide://fragment/7a4e07cf5d732bc485825f880c450dbe1574527882687" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onReady: function () {
        let canvasContext = swan.createCanvasContext('myCanvas');
        canvasContext.font = "40px Microsoft YaiHei";
        canvasContext.fillText('微软雅黑', 90, 90);
        
        canvasContext.font = "50px 楷体";
        canvasContext.fillText('楷体', 90, 200);
        canvasContext.draw();
    }
});
```


