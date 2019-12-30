---
title: cloud.getSwanContext
header: develop
nav: cloud
sidebar: cloud_server_sdk_getSwanContext
---

**解释**
cloud.getSwanContext 获取云函数调用上下文

**返回值**

SwanContext：

|名称|类型|说明|
|---|---|---|
|USERID|String|智能小程序用户ID|
|APPID|String|智能小程序APPID|
|ENV|String|云开发环境|
|SOURCE|String|调用来源|

**代码示例**

``` js
exports.main = (event, context) => {
    cloud.init(context)

    const ctx = cloud.getSwanContext()

    return ctx.APPID
}
```