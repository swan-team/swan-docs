---
title: 数据库指令
header: develop
nav: cloud
siderbar: cloud_database_collection_doc
---

## doc.get

**解释**：获取指定ID的记录数据

**参数说明**

该方法的传入参数为可选参数，参数类型为对象类型，参数格式如下，如传入`success`、`fail`、`complete`三者之一，则表示存在回调函数，否则返回promise。

| 字段 | 类型 | 必填 | 默认值 | 说明 |
|----- |----- |------ |----- |----- |
|success| Function | 否 | - | 成功回调，回调函数的入参为查询结果，查询结果定义如下 |
|fail | Function | 否 | - | 失败回调，回调函数的入参为错误信息，错误信息定义如下 |
|complete | Function | 否 | - | 调用结束时的回调函数，无论成功还是失败都会调用该方法 |


**返回值说明**

`success`或`Promise resolve`的回调结果结构如下：

|字段 |类型 |说明 |
|---- |---- |----- |
|data |Object |记录数据 |

`fail`或`Promise reject`的回调结果结构如下：

|字段 |类型 |说明 |
|----- |------ |----- |
|errCode |Number |错误码 |
|errMsg |String | 错误信息 |


**示例代码**

回调风格

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('users')
      .doc('docId')
      .get({
          success: res => console.log(res.data),
          fail: err => console.warn(err.errMsg)
      })
```

Promise风格

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('users')
      .doc('docId')
      .get()
      .then(res => {
          console.log(res.data);
      })
      .catch(err => {
          console.log(err.errMsg);
      })
```



## doc.update

**解释**：更新指定记录的数据

**参数说明**

该方法的传入参数为必填参数，参数类型为对象类型，参数格式如下，如传入`success`、`fail`、`complete`三者之一，则表示存在回调函数，否则返回promise。

| 字段 | 类型 | 必填 | 默认值 | 说明 |
|----- |----- |------ |----- |----- |
|data |Object |是 | - | 更新数据 |
|success| Function | 否 | - | 成功回调，回调函数的入参为查询结果，查询结果定义如下 |
|fail | Function | 否 | - | 失败回调，回调函数的入参为错误信息，错误信息定义如下 |
|complete | Function | 否 | - | 调用结束时的回调函数，无论成功还是失败都会调用该方法 |


**返回值说明**

`success`或`Promise resolve`的回调结果结构如下：

|字段 |类型 |说明 |
|-----|------|-----|
|stats |Object |更新记录结果的统计，stats定义如下 |

`stats`对象结构如下：

|字段 |类型 |说明 |
|----- |----- |----- |
|updated |Number |成功更新的记录的数量，值为0或1 |

`fail`或`Promise reject`的回调结果结构如下：

|字段 |类型 |说明 |
|----- |----- |----- |
|errCode |Number |错误码 |
|errMsg |String | 错误信息 |


**示例代码**

回调风格

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('users')
      .doc('docId')
      .update({
          data: {
              // 将age字段的值设置为26
              age: 26
          },
          success: res => console.log(res.data),
          fail: err => console.warn(err.errMsg)
      })
```

Promise风格

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('users')
      .doc('docId')
      .update({
          data: {
              // 将age字段的值设置为26
              age: 26
          }
      })
      .then(res => {
          console.log(res.data);
      })
      .catch(err => {
          console.log(err.errMsg);
      })
```


## doc.set

**解释**：替换更新指定记录的数据

**参数说明**

该方法的传入参数为必填参数，参数类型为对象类型，参数格式如下，如传入`success`、`fail`、`complete`三者之一，则表示存在回调函数，否则返回promise。

| 字段 | 类型 | 必填 | 默认值 | 说明 |
|----- |----- |------ |----- |----- |
|data |Object |是 | - | 更新数据 |
|success| Function | 否 | - | 成功回调，回调函数的入参为查询结果，查询结果定义如下 |
|fail | Function | 否 | - | 失败回调，回调函数的入参为错误信息，错误信息定义如下 |
|complete | Function | 否 | - | 调用结束时的回调函数，无论成功还是失败都会调用该方法 |


**返回值说明**

`success`或`Promise resolve`的回调结果结构如下：

|字段 |类型 |说明 |
|----- |----- |----- |
|_id |String/Number |记录ID |
|stats |Object |更新结果的统计，stats定义如下 |

`stats`对象结构如下：

|字段 |类型 |说明 |
|----- |------ |----- |
|updated |Number |成功更新的记录的数量，若指定_id存在，则为1，否则为0 |
|created |Number |成功更新的记录的数量，若指定_id不存在，则为1，否则为0|

`fail`或`Promise reject`的回调结果结构如下：

|字段 |类型 |说明 |
|----- |----- |----- |
|errCode |Number |错误码 |
|errMsg |String | 错误信息 |


**示例代码**

回调风格

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('users')
      .doc('docId')
      .set({
          data: {
              age: 26,
              tags: ['smartprogram'],
              address: 'shanghai'
          },
          success: res => console.log(res.data),
          fail: err => console.warn(err.errMsg)
      })
```

Promise风格

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('users')
      .doc('docId')
      .set({
          data: {
              age: 26,
              tags: ['smartprogram'],
              address: 'shanghai'
          }
      })
      .then(res => {
          console.log(res.data);
      })
      .catch(err => {
          console.log(err.errMsg);
      })
```

## doc.remove

**解释**：删除指定ID的记录

**参数说明**

该方法的传入参数为可选参数，参数类型为对象类型，参数格式如下，如传入`success`、`fail`、`complete`三者之一，则表示存在回调函数，否则返回promise。

| 字段 | 类型 | 必填 | 默认值 | 说明 |
|----- |----- |------ |----- |----- |
|success| Function | 否 | - | 成功回调，回调函数的入参为查询结果，查询结果定义如下 |
|fail | Function | 否 | - | 失败回调，回调函数的入参为错误信息，错误信息定义如下 |
|complete | Function | 否 | - | 调用结束时的回调函数，无论成功还是失败都会调用该方法 |


**返回值说明**

`success`或`Promise resolve`的回调结果结构如下：

|字段 |类型 |说明 |
|----- |----- |----- |
|data |Object |记录数据 |

`fail`或`Promise reject`的回调结果结构如下：

|字段 |类型 |说明 |
|----- |----- |----- |
|errCode |Number |错误码 |
|errMsg |String | 错误信息 |


**示例代码**

回调风格

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('users')
      .doc('docId')
      .remove({
          success: res => console.log(res.data),
          fail: err => console.warn(err.errMsg)
      })
```

Promise风格

```js
    swan.cloud.init({
        env: 'envId'
    });
    const db = swan.cloud.database();
    db.collection('users')
      .doc('docId')
      .remove()
      .then(res => {
          console.log(res.data);
      })
      .catch(err => {
          console.log(err.errMsg);
      })
```


