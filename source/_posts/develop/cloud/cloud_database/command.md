---
title: 数据库指令
header: develop
nav: cloud
siderbar: cloud_database_command
---

## db.command

数据库相关查询及更新指令。

**示例代码**

```js
    const _ = db.command
```

## command.eq

数据库查询指令，用于查询字段等于某个值，该指令接受一个参数，可以是`number`，`string`，`object`，`boolean`，`array`。

**示例代码**

例如，查询一条标题为'smartprogram'的新闻时，可以有以下两种查询方式：

**传入值的方式**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('news')
      .where({
            title: 'smartprogram'
        })
```

**查询指令方式**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('news')
      .where({
            title: _.eq('smartprogram')
        })
```

## command.neq

数据库查询指令，与command.eq指令相反，表示查询的字段不等于某个值。

**示例代码**

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

## command.lt

数据库查询指令，表示查询的字段小于某个值。

**示例代码**

例如，查询数据表中age小于25的所有用户

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .where({
          age: _.lt(25)
      })
      .get({
          success: users => console.log(users);
          fail: err => console.warn(err);
      });
```

## command.lte

数据库查询指令，表示查询的字段小于或等于某个值。

**示例代码**

例如，查询数据表中age小于或等于25的所有用户

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .where({
          age: _.lte(25)
      })
      .get({
          success: users => console.log(users);
          fail: err => console.warn(err);
      });
```

## command.gt

数据库查询指令，表示查询的字段大于某个值。

**示例代码**

例如，查询数据表中age大于25的所有用户

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .where({
          age: _.gt(25)
      })
      .get({
          success: users => console.log(users);
          fail: err => console.warn(err);
      });
```

## command.gte

数据库查询指令，表示查询的字段大于或等于某个值。

**示例代码**

例如，查询数据表中age大于或等于25的所有用户

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .where({
          age: _.gte(25)
      })
      .get({
          success: users => console.log(users);
          fail: err => console.warn(err);
      });
```

## command.in

数据库查询筛选指令，表示查询字段的值需在指定的数组中，传入的参数必须为Array类型。

例如，查询age为25或者26的用户

**示例代码**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .where({
          age: _.in([25, 26])
      })
      .get({
          success: users => console.log(users);
          fail: err => console.warn(err);
      });
```

## command.nin

数据库查询筛选指令，与command.in相反，表示查询字段的值需不在指定的数组中，传入的参数必须为Array类型。

例如，查询age不为25或者26的用户

**示例代码**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .where({
          age: _.nin([25, 26])
      })
      .get({
          success: users => console.log(users);
          fail: err => console.warn(err);
      });
```

## command.and

数据库查询指令，用于连接多个筛选条件，各条件之间满足逻辑"与"的关系，该指令可接受数组类型的参数。

例如，筛选出数据表中age大于25且小于50的用户

**示例代码**

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

## command.or

数据库查询指令，用于连接多个筛选条件，各条件之间满足逻辑"或"的关系。或指令有两种用法，一是进行同一字段的"或"查询操作，二是可以进行不同字段直接的"或"查询操作。该指令接受数组类型的参数。

例如，筛选出数据表中age小于25或者大于50的用户

**示例代码**

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

**示例代码**

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

## command.set

数据库更新指令，用于将某一字段设置为指定值。

**示例代码**

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

## command.remove

数据库更新指令，用于删除记录中的某个字段。

**示例代码**

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

## command.inc

数据库更新指令，用于将记录中的某个字段自增加指定的值。

**示例代码**

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

## command.mul

数据库更新指令，用于将记录中的某个字段自乘指定的值。

**示例代码**

将age的值乘以2：

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .doc('docId')
      .update({
          age: _.mul(2)
      })
```

## command.push

数据库更新指令，该指令需要操作一个类型为数组的字段，并在数组尾部增加一个或多个值。传入参数的类型需为数组类型。

**示例代码**

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

## command.pop

数据库更新指令，该指令需要操作一个类型为数组的字段，并删除其最后一个元素。

**示例代码**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .doc('docId')
      .update({
          tags: _.pop()
      })
```

## command.shift

数据库更新指令，该指令需要操作一个类型为数组的字段，并删除其第一个元素。

**示例代码**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .doc('docId')
      .update({
          tags: _.shift()
      })
```

## command.unshift

数据库更新指令，该指令需要操作一个类型为数组的字段，并向其头部插入一个或多个元素。传入参数类型需为数组类型。

**示例代码**

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
