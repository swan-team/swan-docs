---
title: command.remove
header: develop
nav: cloud
siderbar: command_remove
---
 

 

**解释**：数据库更新指令，用于删除记录中的某个字段。

**代码示例**

删除age字段：

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .doc('docId')
      .update({
          age: _.remove()
      })
```

