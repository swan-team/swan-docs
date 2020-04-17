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
            // 将age更新为26
            age: _.set(26)
        })
```

与update的区别，更新一个字段值为另一个对象

**代码示例**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
        .doc('docId')
        // 更新 style.name 字段为 'SWAN' 
        .update({
            data: {
                style: {
                    name: 'SWAN'
                }
            },
            success: function(res) {
                console.log(res.data)
            }
        })
```

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
            // 把 style 字段更新为 { name: 'SWAN' } 对象
            data: {
                style: _.set({
                    name: 'SWAN'
                })
            },
            success: function(res) {
                console.log(res.data)
            }
        })
```

