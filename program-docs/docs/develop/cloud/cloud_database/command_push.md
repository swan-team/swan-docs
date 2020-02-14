---
title: command.push
header: develop
nav: cloud
siderbar: command_push
---
 
 
**解释**：数据库更新指令，该指令需要操作一个类型为数组的字段，并在数组尾部增加一个或多个值。传入参数的类型需为数组类型。

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
          tags: _.push(['smartprogram'])
      })
```

