---
title: command.set
header: develop
nav: cloud
siderbar: command_set
---
 
 

**解释**：数据库更新指令，用于将某一字段设置为指定值。

**代码示例**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .doc('docId')
      .update({
          age: _.set(26)
      })
```

