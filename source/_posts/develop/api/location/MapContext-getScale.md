---
title: MapContext.getScale	
header: develop
nav: api
sidebar: MapContext-getScale	
---



**解释**：获取当前地图的缩放级别。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_MapContextGetScale.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |默认值 |必填|说明|
|---- | ---- | ---- |---- |---|
|success   |Function  |   |否  |接口调用成功的回调函数。|
|fail  |Function  |   | 否 |接口调用失败的回调函数|
|complete   | Function   |  | 否 |接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明**：

|参数 | 类型 |说明|
|---- | ---- | ---- |
|scale|Number|地图的缩放级别 |
 

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getScale.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/9f39f67280da838ca99d8be3e100008e1573557670114" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: { },
    onReady() {
        this.mapContext = swan.createMapContext('myMap');
    },
    getScale: function () {
        this.mapContext.getScale({
            success: function (res) {
                swan.showModal({
                    title: '缩放级别',
                    content: JSON.stringify(res.scale)
                });
            }
        })
    }
});

```

