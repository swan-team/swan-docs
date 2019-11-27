---
title: 数据库
header: develop
nav: cloud
sidebar: cloud_database
---

## swan.cloud.database

**解释**：获取数据库的引用。

**参数说明**
该方法的传入参数为可选参数，参数类型为对象类型，用来定义数据库的默认配置，参数说明如下：

|字段|类型|必填|默认值|说明|
|---|---|---|---|---|
|env|String|否| |环境ID|

当`env`传入参数为对象时，可以指定各个服务的默认环境，字段如下：

|字段|类型|必填|默认值|说明|
|---|---|---|---|---|
|database|String|是| |数据库默认环境配置|
|functions|String|是| |云函数默认环境配置|
|storage|String|是| |云存储默认环境配置|

**代码示例1**
获取默认环境数据库：
```js
const db = swan.cloud.database();
```

**代码示例2**
获取指定环境'test-1'的数据库：
```js
swan.cloud.database({
  env: 'test-1'
})
```
