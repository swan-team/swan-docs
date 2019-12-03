---
title: swan.cloud.init
header: develop
nav: cloud
sidebar: cloud_init
---
 

**解释**：使用智能小程序云开发API之前，必须调用该方法初始化云开发环境，该方法全局只需调用一次。如不进行初始化设置，将无法获取开发者当前的环境配置。


**参数说明：**
该方法的传入参数类型为对象类型，用来定义云开发的默认配置，该配置会作为之后调用其他所有云`API`的默认配置，参数说明如下：

|字段|类型|必填|默认值|说明|
|---|---|---|---|---|
|env|String/Object|是| |环境配置，传入字符串形式的环境`ID`可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境，见下方详细定义|

当`env`传入参数为对象时，可以指定各个服务的默认环境，字段如下：

|字段|类型|必填|默认值|说明|
|---|---|---|---|---|
|database|String|是| |数据库默认环境配置|
|functions|String|是| |云函数默认环境配置|
|storage|String|是| |云存储默认环境配置|

**代码示例1 **
```js
swan.cloud.init({
  env: 'test-env'
})
```

**代码示例2 **
```js
swan.cloud.init({
  env: {
      database: 'test-database',
      functions: 'test-functions',
      storage: 'test-storage'
  }
})
```
