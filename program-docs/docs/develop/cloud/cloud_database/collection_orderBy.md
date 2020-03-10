---
title: collection.orderBy
header: develop
nav: cloud
sidebar: collection_orderBy
---



**解释**：指定数据库集合的查询排序条件。

**参数说明**
该方法传入参数分别是fieldName和order，参数类型都是字符串类型，fieldName为需要排序的字段，order为排序顺序，能取`asc`或`desc`。
如果需要对嵌套字段排序，需要用 "点表示法" 连接嵌套字段，比如`style.color`表示字段`style`里的嵌套字段`color`。
同时也支持按多个字段排序，多次调用`orderBy`即可，多字段排序时的顺序会按照`orderBy`调用顺序先后对多个字段排序。

**代码示例1 - 按一个字段排序**

按年龄降序排列用户

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

**代码示例1 - 按多个字段排序**

先按年龄降序，再按收入升序排列用户

```js
swan.cloud.init({
    env: 'envId'
});
const db = swan.cloud.database();
db.collection('users')
    .orderBy('age', 'desc')
    .orderBy('income', 'asc')
    .get()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.warn(err);
    });
```

