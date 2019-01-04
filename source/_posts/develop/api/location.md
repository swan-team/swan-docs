---
title: 位置
header: develop
nav: api
sidebar: location
---

### 位置 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location_get/#getLocation">getLocation</a>|获取当前的地理位置、速度。当用户离开智能小程序后，此接口无法调用。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location_get/#chooseLocation">chooseLocation</a>|打开地图选择位置。需要用户授权 scope.userLocation。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location_open/#openLocation">openLocation</a>|使用百度 App 内置地图查看位置。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/location_map/#createMapContext">createMapContext</a>|创建并返回 map 上下文 mapContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 <map/> 组件。mapContext 通过 mapId 跟一个 组件绑定，通过它可以操作对应的组件。|

