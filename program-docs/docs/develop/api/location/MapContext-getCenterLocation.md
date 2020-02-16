---
title: MapContext.getCenterLocation
header: develop
nav: api
sidebar: MapContext-getCenterLocation
---


**解释**：获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 swan.openLocation。

 

## 方法参数 
 
 Object object

### `object`参数说明 

|属性名 |类型  |默认值 |必填|说明|
|---- | ---- | ---- |---- |--|
|success   |Function  |  | 否  |接口调用成功的回调函数 。|
|fail  |Function  |    |否 |接口调用失败的回调函数|
|complete   | Function   | |  否 |接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明 

|参数 | 类型 |说明|
|---- | ---- | ---- |
|longitude|Number|经度|
|latitude|Number|纬度|


## 示例

 <a href="swanide://fragment/b3313255208a24cb637265f42ea157391573550085624" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_MapContextGetCenterLocation.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getCenterLocation.gif">
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
        this.mapContext = swan.createMapContext('myMap');
    },
    getCenterLocation: function () {
        this.mapContext.getCenterLocation({
            success: function (res) {
                swan.showModal({
                    title: '位置信息',
                    content: (res.longitude).toFixed(2) + '/' + (res.latitude).toFixed(2)
                });
                console.log("经度", res.longitude);
                console.log("纬度", res.latitude);
            }
        })
    }
});

```