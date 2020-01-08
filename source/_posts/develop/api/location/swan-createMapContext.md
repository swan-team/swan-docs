---
title: swan.createMapContext
header: develop
nav: api
sidebar: swan-createMapContext
---

**解释**：创建并返回 map 上下文 mapContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 `<map/>` 组件。mapContext 通过 mapId 跟一个 <map/> 组件绑定，通过它可以操作对应的 <map/> 组件。

 
## 方法参数 

String mapId

### `mapId`参数说明 ：要获取 map 组件的 id。

### 返回值 ：mapContext


## 示例

<a href="swanide://fragment/f65cf95759e65c9d01bcf3ce0d70f7981573558407387" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_createMapContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/createMapContext.gif">
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
    onShow() {
        swan.createMapContext('myMap');
    }
})

```

##  错误码
### Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|1001||
|2000|地图lib包加载失败|

### iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
