---
title: SelectorQuery
header: develop
nav: api
sidebar: query_SelectorQuery
webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/createSelectorQuery/createSelectorQuery
---
 
**解释**： 选择器

 
 `selectorQuery`对象的方法列表 ：

|方法 |参数  |说明|
|---- | ---- | ---- |
|in| Component component | 参考<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_SelectorQuery-in/">selectorQuery.in</a>详细介绍 |
|select   | selector | 参考<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_SelectorQuery-select/">selectorQuery.select</a>详细介绍 |
|selectAll  |  selector  | 参考<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_SelectorQuery-selectAll/">selectorQuery.selectAll</a>详细介绍 |
|selectViewport  |      | 参考<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_SelectorQuery-selectViewport/">selectorQuery.selectViewport</a>详细介绍 |
|exec  |  callback  | 参考<a href="https://smartprogram.baidu.com/docs/develop/api/show/query_SelectorQuery-exec/">selectorQuery.exec</a>详细介绍 |
## 示例

<a href="swanide://fragment/4e6bf886d48e2c25066535bdf9e8d9c81574311488897" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createSelectorQuery.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/createSelectorQuery.gif">
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
        const selectorQuery = swan.createSelectorQuery();
        this.selectorQuery = selectorQuery;
    },
    queryNodeInfo() {
        this.selectorQuery.select('.target').boundingClientRect()
        .in(this);
        .selectAll('.target').boundingClientRect();
        .selectViewport()
        .exec(res => { console.log(res) }
    });
});
```

