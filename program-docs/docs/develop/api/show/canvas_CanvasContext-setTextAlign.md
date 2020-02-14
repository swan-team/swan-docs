---
title: CanvasContext.setTextAlign
header: develop
nav: api
sidebar: canvas_CanvasContext-setTextAlign
---
 
**解释**：用于设置文字的对齐。
 
## 方法参数 

 
|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
| `align `|String|是|| 有效值 'left'、'center'、'right'。 |

## 示例
<a href="swanide://fragment/dcde4e6cd75f48eb2912d4c7bf321dd21573724302516" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

![图片](../../../../img/set-text-align.png)

### 代码示例 



```js
const canvasContext = swan.createCanvasContext('myCanvas');

canvasContext.setStrokeStyle('red');
canvasContext.moveTo(150, 20);
canvasContext.lineTo(150, 170);
canvasContext.stroke();

canvasContext.setFontSize(15);
canvasContext.setTextAlign('left');
canvasContext.fillText('textAlign=left', 150, 60);

canvasContext.setTextAlign('center');
canvasContext.fillText('textAlign=center', 150, 80);

canvasContext.setTextAlign('right');
canvasContext.fillText('textAlign=right', 150, 100);

canvasContext.draw();
```



