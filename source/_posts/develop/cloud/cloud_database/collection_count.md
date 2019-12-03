---
title: collection.count
header: develop
nav: cloud
sidebar: collection_count
---
 

  

**解释**：根据查询条件获取集合记录数，该方法的查询权限与当前开发者的集合权限有关，一个用户仅能统计其有读权限的记录数。



**参数说明**
该方法的传入参数为可选参数，参数类型为对象类型，如果传入如下所示的`success`、`fail`和`complete`的三者之一，则表示使用回调风格，否则将返回`Promise`。参数说明如下：

|参数名|类型|必填|说明|
|---|---|---|---|
|success|Function|否|接口调用成功的回调函数，返回的参数`res`包含查询的结果，定义见下方|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数|

`res`参数说明：

`success`回调的结果及`Promise resolve`的结果`res`是一个如下结构的对象：

|参数名|类型|说明|
|---|---|---|
|total|Number|结果数量|

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
    .count({
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
    .count()
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.errMsg);
    });
```

