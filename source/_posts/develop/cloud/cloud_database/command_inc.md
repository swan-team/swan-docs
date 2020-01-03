---
title: command.inc
header: develop
nav: cloud
siderbar: command_inc
---
 


**解释**：数据库更新指令，用于将记录中的某个字段自增加指定的值。

**代码示例**

将age的值自增加1：

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .doc('docId')
      .update({
          age: _.inc(1)
      })
```

