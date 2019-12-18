---
title: command.or
header: develop
nav: cloud
siderbar: command_or
---
 
 

**解释**：数据库查询指令，用于连接多个筛选条件，各条件之间满足逻辑"或"的关系。或指令有两种用法，一是进行同一字段的"或"查询操作，二是可以进行不同字段直接的"或"查询操作。该指令接受数组类型的参数。

例如，筛选出数据表中age小于25或者大于50的用户

**代码示例**

级联查询写法：

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('users')
      .where({
          age: _.lt(25).or(_.gt(50))
      })
```

前置查询写法：

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('users')
      .where({
          age: _.or(_.lt(25), _.gt(50)) // or指令同时支持传入数组，_.or([_.lt(25), _.gt(50)])
      })
```

同时，或指令也支持跨字段的或操作，例如，筛选出数据表中age大于25或者address等于beijing的用户

**代码示例**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('users')
      .where(_.or([
          age: _.gt(25),
          address: _.eq('beijing')
      ]))
```

