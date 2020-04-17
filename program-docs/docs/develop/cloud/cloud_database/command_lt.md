---
title: command.lt
header: develop
nav: cloud
siderbar: command_lt
---
 

 

**解释**：数据库查询指令，表示查询的字段小于某个值。

**代码示例**

例如，查询数据表中age小于25的所有用户

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .where({
          age: _.lt(25)
      })
      .get({
          success: users => console.log(users);
          fail: err => console.warn(err);
      });
```

