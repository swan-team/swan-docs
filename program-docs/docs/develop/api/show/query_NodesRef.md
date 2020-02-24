---
title: NodesRef
header: develop
nav: api
sidebar: query_NodesRef
---

 

**解释**： 节点信息

 
## 示例

<a href="swanide://fragment/992de6cef7a351346c7bb1505dd012131574516295619" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_boundingClientRect.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/boundingClientRect.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



* 在 js 文件中

```js
Page({
    data: { },
    onReady() {
        swan.createSelectorQuery().select().boundingClientRect()
        .selectViewport().fields();
    }
});
```