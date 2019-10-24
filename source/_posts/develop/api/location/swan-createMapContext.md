---
title: swan.createMapContext
header: develop
nav: api
sidebar: swan-createMapContext
---

**解释**：创建并返回 map 上下文 mapContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 `<map/>` 组件。mapContext 通过 mapId 跟一个 <map/> 组件绑定，通过它可以操作对应的 <map/> 组件。

**方法参数**：String mapId

**`mapId`参数说明**：要获取 map 组件的 id。

**返回值**：mapContext

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|1001||
|2000|地图lib包加载失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
