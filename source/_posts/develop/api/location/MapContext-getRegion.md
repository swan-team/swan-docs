---
title: MapContext.getRegion
header: develop
nav: api
sidebar: MapContext-getRegion
---


**解释**：获取当前地图的视野范围。

**方法参数**：Object object


**`object`参数说明**：

|属性名 |类型  |默认值 |必填|说明|
|---- | ---- | ---- |---- |---|
|success   |Function  |   |否  |接口调用成功的回调函数，西南角与东北角的经纬度。 |
|fail  |Function  |    |否 |接口调用失败的回调函数|
|complete   | Function   |  |否 | 接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明**：

|参数 | 类型 |说明|
|---- | ---- | ---- |
|southwest|Object|西南角方向的经纬度|
|northeast|Object|东北角方向的经纬度|

**示例**：

<a href="swanide://fragment/2f38e37ec2f6adf2e9a20025ec886b761573553896758" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
   data: { },
    onReady() {
        this.mapContext = swan.createMapContext('myMap');
    },
    getRegion: function () {
        this.mapContext.getRegion({
            success: function (res) {
                swan.showModal({
                    title: '视野范围',
                    content: 'northeast: ' + JSON.stringify(
                       res.northeast) + '/' + "southwest: " + JSON.stringify(res.southwest)
                });
                console.log("视野范围", res);
            }
        })
    }
});

```