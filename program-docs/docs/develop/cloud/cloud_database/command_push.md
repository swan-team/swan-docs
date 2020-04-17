---
title: command.push
header: develop
nav: cloud
siderbar: command_push
---
 
 
**解释**：数据库更新指令，该指令需要操作一个类型为数组的字段，并在数组尾部增加一个或多个值。传入参数的类型需为数组类型。

**代码示例1 - 尾部添加元素**

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

**代码示例2 - 从第二个位置开始插入**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .doc('docId')
      .update({
          tags: _.push({
                each: ['smartprogram', 'cloud'],
                position: 1,
            })
        })
```

**代码示例3 - 插入后对整个数组进行排序**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .doc('docId')
      .update({
          tags: _.push({
                each: ['smartprogram', 'cloud'],
                sort: 1,
            })
        })
```

**代码示例4 - 不插入，只对数组做排序**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .doc('docId')
      .update({
          tags: _.push({
                each: [],
                sort: 1,
            })
        })
```

**代码示例5 - 如果字段是对象数组，可以如下根据元素对象里的字段进行排序：**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .doc('docId')
      .update({
          tags: _.push({
                each: [
                    { name: 'miniprogram', weight: 8 },
                    { name: 'cloud', weight: 6 },
                ],
                sort: {
                    weight: 1,
                },
            })
        })
```

**代码示例6 - 截断保留，插入后只保留后 2 个元素：**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .doc('docId')
      .update({
          tags: _.push({
                each: ['mini-program'],
                slice: -2,
            })
        })
```

**代码示例7 - 在指定位置插入、然后排序、最后只保留前 2 个元素：**

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    const _ = db.command;
    db.collection('users')
      .doc('docId')
      .update({
          tags: _.push({
                each: ['mini-program'],
                position: 1,
                slice: 2,
                sort: 1,
            })
        })
```

