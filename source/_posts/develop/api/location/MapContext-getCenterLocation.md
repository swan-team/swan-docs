---
title: MapContext.getCenterLocation
header: develop
nav: api
sidebar: MapContext-getCenterLocation
---


**解释**：获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 swan.openLocation。

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 |默认值 |说明|
|---- | ---- | ---- |---- |--|
|success   |Function  |  否  | |接口调用成功的回调函数 。|
|fail  |Function  |  否 |  |接口调用失败的回调函数|
|complete   | Function   | 否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数 | 类型 |说明|
|---- | ---- | ---- |
|longitude|Number|经度|
|latitude|Number|纬度|