---
title: command.eq
header: develop
nav: cloud
siderbar: command_eq
---

 
**解释**：数据库查询指令，用于查询字段等于某个值，该指令接受一个参数，可以是`number`，`string`，`object`，`boolean`，`array`。

**代码示例**

例如，查询一条标题为'smartprogram'的新闻时，可以有以下两种查询方式：

**传入值的方式**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('news')
      .where({
            title: 'smartprogram'
        })
```

**查询指令方式**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('news')
      .where({
            title: _.eq('smartprogram')
        })
```

