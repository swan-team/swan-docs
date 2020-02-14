---
title: command.in
header: develop
nav: cloud
siderbar: command_in
---



**解释**：数据库查询筛选指令，表示查询字段的值需在指定的数组中，传入的参数必须为Array类型。

例如，查询age为25或者26的用户

**代码示例**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .where({
          age: _.in([25, 26])
      })
      .get({
          success: users => console.log(users);
          fail: err => console.warn(err);
      });
```

