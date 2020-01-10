---
title: SelectorQuery.in 
header: develop
nav: api
sidebar:  query_SelectorQuery-in 
---
 
**解释**： 将选择器的选取范围更改为自定义组件 component 内（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）。

 百度APP中扫码体验： 

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_SelectorQueryIn.png"  class="demo-qrcode-image" />

 方法参数 ：Component component
## 示例

<a href="swanide://fragment/dcaee8cc80556c6096c0f550d3292da41573018260749" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/abortDownloadFile.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/SelectorQueryIn.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
</div>

### 代码示例 

<a href="swanide://fragment/89bb87e51057a582a1b9a8826ce393f31575004072494" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// 自定义组件逻辑 (custom.js)
Component({
    properties: {
        // 定义了name属性，可以在使用组件时，由外部传入。此变量可以直接在组件模板中使用
        name: {
            type: String,
            value: 'swan',
        }
    },
    data: {
        age: 1
    },
    methods: {
        queryMultipleNodes: function(){
            var SelectorQuery = swan.createSelectorQuery().in(this)
            SelectorQuery.select('.name').boundingClientRect(function(res){
                swan.showModal({
                    title: '节点信息为',
                    content: JSON.stringify(res)
                });
            }).exec()
        }
    }
});
```

