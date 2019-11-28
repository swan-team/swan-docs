---
title: collection
header: develop
nav: cloud
sidebar: cloud_database_collection
---



**解释**：获取数据库集合的引用。

**参数说明** 
该方法传入一个`name`参数，参数类型为字符串类型，指定需引用的集合名称。


**代码示例**

```js
const db = swan.cloud.database();
const testCollection = db.collection('users');
```



## collection.doc

**解释**：获取数据库集合中记录的引用。

**参数说明**
该方法传入一个`ID`参数，参数类型为字符串类型，指定需引用的记录`ID`。



**代码示例**

```js
const doc = db.collection('users').doc('docId');
```

## collection.get

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

## collection.add

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

## collection.count

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

## collection.where

**解释**：指定数据库集合的筛选条件。

**参数说明**
该方法的传入参数为必填参数，参数类型为对象类型，用来定义筛选条件。

**代码示例**

找出address的值为'beijing'的用户：

```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('users')
    .where({
        address: 'beijing'
    })
    .get()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.warn(err);
    });
```


## collection.orderBy

**解释**：指定数据库集合的查询排序条件。

**参数说明**
该方法传入参数分别是fieldName和order，参数类型都是字符串类型，fieldName为需要排序的字段，order为排序顺序，能取`asc`或`desc`。
如果需要对嵌套字段排序，需要用 "点表示法" 连接嵌套字段，比如`style.color`表示字段`style`里的嵌套字段`color`。
同时也支持按多个字段排序，多次调用`orderBy`即可，多字段排序时的顺序会按照`orderBy`调用顺序先后对多个字段排序。

**代码示例**

```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('users')
    .orderBy('age', 'desc')
    .get()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.warn(err);
    });
```

## collection.limit

**解释**：指定查询结果集数量上限。


**参数说明**
该方法的传入参数为必填参数，参数类型为数字类型，用来定义最大结果集返回数量，最大为20。

**代码示例**

```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('users')
    .limit(10) // 获取10条记录
    .get()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.warn(err);
    });
```

## collection.skip

**解释**：查询返回结果时从指定序列后的结果开始返回，可用于分页。

**参数说明**
该方法的传入参数为必填参数，参数类型为数字类型，用来指定查询返回结果开始的序列。

**代码示例**

```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('users')
    .skip(10)
    .get()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.warn(err);
    });
```

## collection.field 

**解释**：指定返回结果中记录需返回的字段。

**参数说明**
该方法的传入参数为必填参数，参数类型为对象类型，用来指定需返回的字段。


**代码示例**

```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('users')
    .field({
        age: true,
        address: true,
        tags: true
    })
    .get()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.warn(err);
    });

```