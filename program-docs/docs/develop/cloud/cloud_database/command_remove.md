---
title: command.remove
header: develop
nav: cloud
siderbar: command_remove
---
 

 

**解释**：数据库更新指令，用于删除记录中的某个字段。

删除age字段：

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
            age: _.remove()
        })
```

删除多条记录：

**代码示例**

```js
// 需在 Server 端进行操作（云函数），通过 where 语句选取多条记录执行删除，
// 使用 async await 语法
const cloud = require('swan-server-sdk')
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
    try {
        return await db.collection('todos').where({
            done: true
        }).remove()
    } catch(e) {
        console.error(e)
    }
}
```

用户只能操作自己的数据（自己的Todo），不能操作其他人的数据（其他人的待办事项），需要引入权限控制。


