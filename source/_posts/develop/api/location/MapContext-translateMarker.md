---
title:  MapContext.translateMarker
header: develop
nav: api
sidebar:  MapContext-translateMarker
---


**解释**：平移 marker，带动画 。

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |默认值 |必填|说明|
|---- | ---- | ---- |---- |---|
|markerId  |Number  |   |是  |指定 marker |
|destination  |Object  |   | 是 |指定marker移动到的目标点|
|autoRotate   | Boolean   |   |是 |移动过程中是否自动旋转 marker|
|rotate  |Number  |   |是  |marker 的旋转角度 |
|duration  |Number   | 1000ms  | 否 |动画持续时长，平移与旋转分别计算。 |
|animationEnd|Function||否|动画结束时回调函数|
|success|	function|	|	否|	接口调用成功的回调函数|
|fail   | Function   |  |否 | 接口调用失败的回调函数|
|complete|Function  |  |否 | 接口调用结束的回调函数（调用成功、失败都会执行）|
