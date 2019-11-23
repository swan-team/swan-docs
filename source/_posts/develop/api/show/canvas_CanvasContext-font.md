---
title: CanvasContext.font
header: develop
nav: api
sidebar: canvas_CanvasContext_font
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

**代码示例**：

<a href="swanide://fragment/111d313d772997c85709aaa679ddb9e81573724209338" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onReady: function () {
        const canvasContext = swan.createCanvasContext('myCanvas');
        canvasContext.setFontSize(50);
        canvasContext.fillText('50', 90, 90);
        canvasContext.font = "40px oblique normal";
        canvasContext.draw();
    }
});
```


