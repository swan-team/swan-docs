---
title: command.and
header: develop
nav: cloud
siderbar: command_and
---
 


**解释**：数据库查询指令，用于连接多个筛选条件，各条件之间满足逻辑"与"的关系，该指令可接受数组类型的参数。

例如，筛选出数据表中age大于25且小于50的用户

**代码示例**

级联查询写法：

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('users')
      .where({
          age: _.gt(25).and(_.lt(50))
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
          age: _.and(_.gt(25), _.lt(50)) // and指令同时支持传入数组，_.and([_.gt(25), _.lt(50)])
      })
```

