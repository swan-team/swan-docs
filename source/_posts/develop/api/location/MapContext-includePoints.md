---
title: MapContext.includePoints
header: develop
nav: api
sidebar: MapContext-includePoints
---


**解释**：缩放视野展示所有经纬度。

**方法参数**：Object object


**`object`参数说明**：

|参数名 |类型  |必填  |默认值|说明|
|---- | ---- | ---- |---- |---|
|points  |Array  |  是  | |要显示在可视区域内的坐标点列表。|
|padding  |Array  |  否 |  |坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的 padding 一致。开发者工具暂不支持 padding 参数。|
|success|	function|		否||	接口调用成功的回调函数|
|fail	|function	|	否||	接口调用失败的回调函数|
|complete|	function|		否||	接口调用结束的回调函数（调用成功、失败都会执行）|


**points返回参数说明**：

|参数 | 类型 |说明|
|---- | ---- | ---- |
|longitude|String|经度|
|latitude|String|纬度|