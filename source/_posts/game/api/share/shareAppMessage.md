---
title: swan.shareAppMessage()
layout: gamedoc
topic: share
categoryName: api
priority: 10-01
---


主动发起转发操作。

```js
swan.shareAppMessage(opts)
```

**参数值**：

|属性|类型|是否必填|描述|
|-|-|-|-|
|title|string|否|转发标题|
|imageUrl|string|否|转发显示图片的链接，只支持网络图片路径|
|query|string|否|查询字符串，从这条转发消息进入后，可通过 [`swan.getLaunchOptionsSync()`](/game/api/system/lifeCycle/#swan-getLaunchOptionsSync) 或 [`swan.onShow()`](/game/api/system/lifeCycle/#swan-onShow) 获取启动参数中的 query。必须是 key1=value1&key2=value2 的格式。|