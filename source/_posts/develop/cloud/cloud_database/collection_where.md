---
title: collection.where
header: develop
nav: cloud
sidebar: collection_where
---
 



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


