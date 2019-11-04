---
title: cloud.callFunction
header: develop
nav: cloud
sidebar:  function
---

 

调用云函数。


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|name|String|是|云函数名|
|data|Object|否|传递给云函数的参数|


**返回值 Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|requestID|String|请求ID|
|result|String|云函数返回结果|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**使用示例**

云函数 sum：
``` js
exports.main = (event, context) => {
    let sum = 0;
    for (let i = 0; i < event['numbers'].length; i++) {
        let n = parseInt(event['numbers'][i], 10);
        sum += n;
    }
    return sum
}
```

在另一云函数中调用 sum：
``` js
const cloud = require('swan-server-sdk')
exports.main = async (event, context) => {
  cloud.init(context)

  const res = await cloud.callFunction({
    name: 'sum',
    data: {
      numbers: [1, 2, 3, 4, 5]
    }
  })
  return res.result
}
```

