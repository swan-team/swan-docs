---
title: collection.field 
header: develop
nav: cloud
sidebar: collection_field 
---

 

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