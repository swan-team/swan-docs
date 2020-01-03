---
title: collection.get
header: develop
nav: cloud
sidebar: collection_get
---


**解释**：根据查询条件获取集合数据。如果没有指定`skip`，则默认从第0条数据开始取。如果没有指定`limit`，默认最多取20条记录。

**参数说明**
该方法的传入参数为可选参数，参数类型为对象类型，如果传入如下所示的`success`、`fail`和`complete`的三者之一，则表示使用回调风格，否则将返回`Promise`。参数说明如下：

|字段|类型|必填|说明|
|---|---|---|---|
|success|Function|否|接口调用成功的回调函数，返回的参数`res`包含查询的结果，定义见下方|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数|

`res`参数说明：

`success`回调的结果及`Promise resolve`的结果`res`是一个如下结构的对象：

|字段|类型|说明|
|---|---|---|
|data| Array|查询的结果数组，数据的每个元素是一个Object，代表一条记录|

**代码示例**

`callback`风格：
```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('users')
    .where({
        _id: 'my-id'
    })
    .get({
        success: res => console.log(res.data),
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
    .where({
        _id: 'my-id'
    })
    .get()
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.errMsg);
    });
```

