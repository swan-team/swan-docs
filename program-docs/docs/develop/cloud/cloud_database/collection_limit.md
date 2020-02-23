---
title: collection.limit
header: develop
nav: cloud
sidebar: collection_limit
---
 



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

