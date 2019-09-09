---
title: swan.cloud.init
header: develop
nav: cloud
sidebar: cloud_init
---

> 云开发自 安卓 11.13.5 及 IOS 11.13.0 开始支持

## swan.cloud.init

在调用云开发API前，需先调用此方法初始化一次。全局只需一次，多次调用时只有第一次生效。

**参数说明：**
该方法的传入参数类型为对象类型，用来定义云开发的默认配置，该配置会作为之后调用其他所有云`API`的默认配置，参数说明如下：

|字段|类型|必填|默认值|说明|
|---|---|---|---|---|
|env|String/Object|是|-|环境配置，传入字符串形式的环境`ID`可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境，见下方详细定义|

当`env`传入参数为对象时，可以指定各个服务的默认环境，字段如下：

|字段|类型|必填|默认值|说明|
|---|---|---|---|---|
|database|String|是|-|数据库默认环境配置|
|functions|String|是|-|云函数默认环境配置|
|storage|String|是|-|云存储默认环境配置|

**示例代码1 **
```js
swan.cloud.init({
  env: 'test-env'
})
```

**示例代码2 **
```js
swan.cloud.init({
  env: {
      database: 'test-database',
      functions: 'test-functions',
      storage: 'test-storage'
  }
})
```
