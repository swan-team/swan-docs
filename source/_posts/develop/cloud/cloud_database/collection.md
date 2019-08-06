---
title: collection
header: develop
nav: cloud
sidebar: cloud_database_collection
---

## collection

获取集合的引用。

该方法接受一个必填name参数，表示需引用的集合名称。

**示例代码**

```js
const db = swan.cloud.database();
const testCollection = db.collection('users');
```



## collection.doc

获取记录的引用。

需引用的记录`ID`。


**示例代码**

```js
const doc = db.collection('users').doc('docId');
```

## collection.get

**解释：**获取集合数据。如果没有指定`skip`，则默认从第0条数据开始取。

**方法参数：**Object object

#### **object 参数说明：**
`object`是可选参数，如果传入如下所示的`success`、`fail`和`complete`的三者之一，则表示使用回调风格，否则将返回`Promise`。

|参数名|	类型|	必填|   说明|
|---|---|---|---|
|success| Function| 否| 接口调用成功的回调函数，返回的参数`res`包含查询的结果，定义见下方|
|fail| Function| 否| 接口调用失败的回调函数|
|complete| Function| 否| 接口调用结束的回调函数|

**Result 参数说明：**

`success`回调的结果及`Promise resolve`的结果`res`是一个如下结构的对象：

|参数名|	类型|   说明|
|---|---|---|
|data| Array|查询的结果数组，数据的每个元素是一个Object，代表一条记录|

**示例代码**

回调风格

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
      })
```

Promise风格

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
      })
```

## collection.add

**解释：**在集合上新增记录。


**方法参数：**Object object

#### **object 参数说明：**
`object`是必填参数，如果传入如下所示的`success`、`fail`和`complete`的三者之一，则表示使用回调风格，否则将返回`Promise`。

|参数名|	类型|	必填|   说明|
|---|---|---|---|
|data|Object|是|新增记录的定义|
|success| Function| 否| 接口调用成功的回调函数，返回的参数`res`包含查询的结果，定义见下方|
|fail| Function| 否| 接口调用失败的回调函数|
|complete| Function| 否| 接口调用结束的回调函数|

**Result 参数说明：**

`success`回调的结果及`Promise resolve`的结果`res`是一个如下结构的对象：

|参数名|	类型|   说明|
|---|---|---|
|_id| String/Number|新增记录的ID|

**示例代码**

回调风格

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
      })
```

Promise风格

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
      })
```

## collection.count

**解释：**统计集合记录数，与集合权限设置有关，一个用户仅能统计其有读权限的记录数。


**方法参数：**Object object

#### **object 参数说明：**
`object`是可选参数，如果传入如下所示的`success`、`fail`和`complete`的三者之一，则表示使用回调风格，否则将返回`Promise`。

|参数名|	类型|	必填|   说明|
|---|---|---|---|
|data|Object|是|新增记录的定义|
|success| Function| 否| 接口调用成功的回调函数，返回的参数`res`包含查询的结果，定义见下方|
|fail| Function| 否| 接口调用失败的回调函数|
|complete| Function| 否| 接口调用结束的回调函数|

**Result 参数说明：**

`success`回调的结果及`Promise resolve`的结果`res`是一个如下结构的对象：

|参数名|	类型|   说明|
|---|---|---|
|total| Number|结果数量|

**示例代码**

回调风格

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
      })
```

Promise风格

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
      })
```

## collection.where

**解释：**指定筛选条件。


**方法参数：**Object rule

#### **rule 参数说明：**
`rule`是必填参数。


**示例代码**

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
      })
```


## collection.orderBy

**解释：**指定查询排序条件。


**方法参数：**fieldName, order
**fieldName 参数说明：**需要排序的字段。
**order 参数说明：**排序顺序，能取`asc`或`desc`。

如果需要对嵌套字段排序，需要用 "点表示法" 连接嵌套字段，比如`style.color`表示字段`style`里的嵌套字段`color`。
同时也支持按多个字段排序，多次调用`orderBy`即可，多字段排序时的顺序会按照`orderBy`调用顺序先后对多个字段排序。

**示例代码**

按照age降序排列用户：

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
      })
```

## collection.limit

**解释：**指定查询结果集数量上限。


**方法参数：**Number max

**max 参数说明：**`max`是必填参数，定义最大结果集返回数量。


**示例代码**

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
      })
```

## collection.skip

**解释：**指定查询返回结果时从指定序列后的结果开始返回，常用于分页。


**方法参数：**Number offset

**offset 参数说明：**`offset`是必填参数，指定查询返回结果开始的序列。


**示例代码**

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
      })
```

## collection.field 

**解释：**指定返回结果中记录需返回的字段。


**方法参数：**Object definition

**max 参数说明：**`max`是必填参数，指定需返回的字段。


**示例代码**

返回age，address，tags三个字段：

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
      })
```