---
title: MapContext.getRegion
header: develop
nav: api
sidebar: MapContext-getRegion
---


**解释**：获取当前地图的视野范围。

**方法参数**：Object object


**`object`参数说明**：

|参数名 |类型  |必填  |默认值|说明|
|---- | ---- | ---- |---- |---|
|success   |Function  |  否  | |接口调用成功的回调函数，res = {southwest, northeast}，西南角与东北角的经纬度。 |
|fail  |Function  |  否 |  |接口调用失败的回调函数|
|complete   | Function   | 否 |  |接口调用结束的回调函数（调用成功、失败都会执行）|
