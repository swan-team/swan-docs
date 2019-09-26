---
title: cloud.init
header: develop
nav: cloud
sidebar: cloud_server_sdk_init
---

**解释**：初始化云开发SDK

**参数说明**

|名称|类型|必须|说明|
|---|---|---|---|
|context|FunctionContext|是|函数执行上下文|
|option|Object|否|初始化参数|
|option.env|String/Object|否|云开发环境|

当`env`传入参数为对象时，可以指定各个服务的默认环境，字段如下：

|字段|类型|必填|默认值|说明|
|---|---|---|---|---|
|database|String|是|当前所在环境|数据库默认环境配置|
|functions|String|是|当前所在环境|云函数默认环境配置|
|storage|String|是|当前所在环境|云存储默认环境配置|


使用示例：
``` js
const cloud = require("swan-server-sdk")
exports.main = (event, context) => {
    cloud.init(context)

    // ...
}
```