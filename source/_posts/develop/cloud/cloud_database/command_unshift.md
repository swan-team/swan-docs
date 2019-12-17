---
title: command.unshift
header: develop
nav: cloud
siderbar: command_unshift
---
 


**解释**：数据库更新指令，该指令需要操作一个类型为数组的字段，并向其头部插入一个或多个元素。传入参数类型需为数组类型。

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
          tags: _.unshift(['smartprogram'])
      })
```
