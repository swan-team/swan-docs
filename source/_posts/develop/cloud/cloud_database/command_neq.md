---
title: command.neq
header: develop
nav: cloud
siderbar: command_neq
---
 
 

**解释**：数据库查询指令，与command.eq指令相反，表示查询的字段不等于某个值。

**代码示例**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .where({
          address: _.neq('beijing')
      })
```

