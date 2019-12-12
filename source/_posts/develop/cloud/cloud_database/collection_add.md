---
title: collection.add
header: develop
nav: cloud
sidebar: collection_add
---

 

**解释**：新增数据库集合中的记录。


**参数说明**
该方法的传入参数为必填参数，参数类型为对象类型，如果传入如下所示的`success`、`fail`和`complete`的三者之一，则表示使用回调风格，否则将返回`Promise`。参数说明如下：


|字段|类型|必填|说明|
|---|---|---|---|
|data|Object|是|新增记录的定义|
|success|Function|否|接口调用成功的回调函数，返回的参数`res`包含查询的结果，定义见下方|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数|

`res`参数说明：

`success`回调的结果及`Promise resolve`的结果`res`是一个如下结构的对象：

|字段|	类型|   说明|
|---|---|---|
|_id| String/Number|新增记录的ID|

**代码示例**

`callback`风格：

```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('users')
    .add({
        data: {
            age: 25,
            address: 'beijing',
            tags: ['smartprogram']
        },
        success: res => console.log(res._id),
        fail: err => console.warn(err.errMsg)
    });
```

`Promise`风格：

```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('users')
    .add({
        data: {
            age: 25,
            address: 'beijing',
            tags: ['smartprogram']
        }
    })
    .then(res => {
        console.log(res._id);
    })
    .catch(err => {
        console.warn(err.errMsg);
    });
```

