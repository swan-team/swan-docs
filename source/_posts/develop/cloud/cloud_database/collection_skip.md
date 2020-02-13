---
title: collection.skip
header: develop
nav: cloud
sidebar: collection_skip
---

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

