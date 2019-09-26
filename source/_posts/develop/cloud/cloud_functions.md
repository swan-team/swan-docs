---
title:  swan.cloud.callFunction
header: develop
nav: cloud
sidebar: cloud_functions
---
 
**解释**：调用云函数。

**参数说明**
该方法的传入参数类型为对象类型，参数说明如下：

|字段|类型|必填|说明|
|---|---|---|---|
|name|String|是|云函数名称|
|data|Object|否|云函数参数|
|config|Object|否|局部覆盖`swan.cloud.init`中的全局配置|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数|

config 说明：

|字段|类型|说明|
|---|---|---|---|---|
|env|String|使用的环境ID，将覆盖`swan.cloud.init`指定的环境|

**`success`返回参数说明**

|字段|类型|说明|
|---|---|---|---|---|
|errMsg|String|调用成功的信息|
|result|String|云函数返回的结果|
|requestID|String|云函数执行ID，用于在云开发控制台中查找日志|

**`fail`返回参数说明**

|字段|类型|说明|
|---|---|---|---|---|
|errCode|Number|错误码|
|errMsg|String|错误信息|


**示例代码**
假设已存在一个云函数`add`：
```js
exports.add = (event, context, cb) => {
  return event.x + event.y
}
```
`callback`风格：

```js
swan.cloud.callFunction({
  // 要调用的云函数名称
  name: 'add',
  // 传递给云函数的参数
  data: {
    x: 1,
    y: 2,
  },
  success: res => {
    console.log('result=',res.result);
  },
  fail: err => {
    // ...
  },
  complete: () => {
    // ...
  }
});
```

`Promise`风格：
```js
swan.cloud.callFunction({
  // 要调用的云函数名称
  name: 'add',
  // 传递给云函数的参数
  data: {
    x: 1,
    y: 2,
  }
}).then(res = > {
  console.log('result=',res.result);
}).catch(err => {
  // ...
});
```


