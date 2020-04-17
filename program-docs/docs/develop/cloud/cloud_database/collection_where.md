---
title: collection.where
header: develop
nav: cloud
sidebar: collection_where
---
 



**解释**：指定数据库集合的筛选条件。

**参数说明**
该方法的传入参数为必填参数，参数类型为对象类型，用来定义筛选条件。

**代码示例1**

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

**代码示例2**

在查询条件中我们也可以指定匹配一个嵌套字段的值，比如找出自己的地址所在的街道：

```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('users')
    .where({
        address: {
            street: 'xueqingRoad'
        },
        done: false
    })
    .get({
        success: res => console.log(res.data),
        fail: err => console.warn(err.errMsg)
    });
```
**代码示例3**

也可以用 "点表示法" 表示嵌套字段：

```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('users')
    .where({
        'address.street': 'xueqingRoad'
    })
    .get()
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.errMsg);
    });
```

**代码示例4**

匹配数组第 n 项元素

```js
{
  "numbers": [10, 20, 30]
}
```

```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('todos')
    .where({
        'numbers.1': 20
    })
    .get()
```

**代码示例5**

更新数组中第一个匹配到的元素, 让所有 numbers 中的第一个 20 的元素更新为 25：

```js
{
    "id": "_one",
    "numbers": [10, 20, 30]
}
{
    "id": "_two",
    "numbers": [20, 20, 40]
}
```

```js
// 注意：批量更新需在云函数中进行
const _ = db.command
db.collection('todos').where({
        numbers: 20
    }).update({
    data: {
        'numbers.$': 25
    }
})
```
**代码示例6**

更新数组中所有匹配的元素, 让 numbers.math 字段所有数字加 10：

```js
{
    "id": "_one",
    "numbers": {
        "math": [10, 20, 30]
    }
}
```

```js
// 注意：批量更新需在云函数中进行
const _ = db.command
db.collection('todos').doc('_one').update({
    data: {
        'numbers.math.$[]': _.inc(10)
    }
})
```
