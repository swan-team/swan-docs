---
title: swan.reportAnalytics()
layout: doc
topic: reportAnalytics
categoryName: api
---

自定义分析数据上报接口。使用前，需要在[小游戏管理后台](https://smartprogram.baidu.com/developer/applist.html)-数据分析-使用分析-事件分析中新建事件，配置好事件名与字段(自定义名称请遵循填写时候提示的命名规范)。详情查看[自定义事件分析](/game/data/feature/custom/)。

```js
swan.reportAnalytics(eventName, data);
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|eventName|string||是|事件名|
|data|Object| |否|上报的自定义数据，key 为配置中的字段名，value 为上报的数据|

**示例：**

```js
swan.reportAnalytics('purchase', {
    price: 120,
    color: 'red'
})
```