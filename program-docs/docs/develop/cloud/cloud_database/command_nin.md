---
title: command.nin
header: develop
nav: cloud
siderbar: command_nin
---
 
 

**解释**：数据库查询筛选指令，与command.in相反，表示查询字段的值需不在指定的数组中，传入的参数必须为Array类型。

例如，查询age不为25或者26的用户

**代码示例**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .where({
          age: _.nin([25, 26])
      })
      .get({
          success: users => console.log(users);
          fail: err => console.warn(err);
      });
```

