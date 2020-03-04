---
title: collection.skip
header: develop
nav: cloud
sidebar: collection_skip
---

**解释**：查询返回结果时从指定序列后的结果开始返回，可用于分页。

**参数说明**

该方法的传入参数为必填参数，参数类型为数字类型，用来指定查询返回结果开始的序列。

**代码示例1**

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
获取第二页的用户信息，假设一页 10 条，现在要取第 2 页，则可以指定 skip 10 条记录

**代码示例2**

```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('users')
    .skip(10)  // 跳过结果集中的前 10 条，从第 11 条开始返回
    .limit(10) // 限制返回数量为 10 条
    .get()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.warn(err);
    });
```

下面是在云函数端获取一个集合所有记录的例子，因为有最多一次取 100 条的限制，因此很可能一个请求无法取出所有数据，需要分批次取：

**代码示例3**

```js
const cloud = require('swan-server-sdk')
cloud.init()
const db = cloud.database()
const MAX_LIMIT = 100
exports.main = async (event, context) => {
  // 先取出集合记录总数
  const countResult = await db.collection('users').count()
  const total = countResult.total
  // 计算分几次取
  const batchTimes = Math.ceil(total / 100)
  // 所有读操作的 promise 的数组
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = db.collection('todos').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks.push(promise)
  }
  // 等待所有数据被取出
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })
}
```
