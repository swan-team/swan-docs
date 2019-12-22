---
title: Collection.add
header: develop
nav: cloud
sidebar: collection
---




 
在对应集合上新增文档


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|data|Object|是|新增文档数据|


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|requestID|String|请求ID|
|_id|String|新增文档ID|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**代码示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()

  try {
    return await db.collection('articles').add({
        title: 'baidu cbd tutorial',
        status: 0,
        visits: 0,
        createDate: new Date(),
    })
  } catch(err) {
    console.log(err)
  }
}
```

## Collection.count
获取集合内符合查询条件的文档数量


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|total|Number|结果数量|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**代码示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()

  return await db.collection('articles').where({
      title: 'baidu cbd tutorial',
  }).count()
}
```

## Collection.doc
获取集合内对应ID的文档对象


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|id|String|是|文档ID|


返回值：Document


**代码示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()
  const doc = db.collection('articles').doc('some-doc-id')
}

```

## Collection.field
指定获取文档数据返回字段结构


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|projection|Object|是|文档返回字段结构|


返回值：Collection


**代码示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()

  try {
    return await db.collection('articles').field({
      title: true,
      status: true,
    }).get()
  } catch(err) {
    console.log(err)
  }
}
```

## Collection.get
获取集合内符合查询条件的文档数据


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|requestID|String|请求ID|
|data|Array|文件数据列表|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**代码示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()
  const cmd = db.command

  try {
    return await db.collection('articles').where({
      visits: cmd.gt(100)
    }).get()
  } catch(err) {
      console.log(err)
  }
}
```

## Collection.limit
设置查询条件中的文档匹配数量限制，可以配合skip，实现分页功能


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|num|Number|是|文档匹配最大数量|


返回值：Collection


**代码示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()

  try {
    return = await db.collection('articles').limit(50).get()
  } catch(err) {
    console.log(err)
  }
}
```

## Collection.orderBy
设置查询条件中的排序条件


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|field|Number|是|排序字段|
|order|String|是|排序方式 asc：升序，desc: 降序|


返回值：Collection


**代码示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()
  try {
    return await db.collection('articles').orderBy('createDate', 'desc').get()
  } catch(err) {
    console.log(err)
  }
}
```

## Collection.remove
删除集合内符合查询条件的文档


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|deleted|Number|删除文档数量|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**代码示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()

  try {
    return await db.collection('articles').where({
      status: 1
    }).remove()
  } catch(err) {
    console.log(err)
  }
}
```

## Collection.skip
设置查询条件中的文档跳过匹配数量，可以配合limit，实现分页功能


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|num|Number|是|跳过匹配数量|


返回值：Collection


**代码示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()

  try {
    return = await db.collection('articles').skip(50).get()
  } catch(err) {
    console.log(err)
  }
}
```

## Collection.update
更新集合内符合查询条件的文档


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|updated|Number|更新文档数量|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**代码示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()
  const cmd = db.command

  try {
    return await db.collection('articles').where({
      status: 0
    }).update({
      visits: cmd.inc(1)
    })
  } catch(err) {
    console.log(err)
  }
}
```

## Collection.where
设置查询条件中的文档筛选条件


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|condition|Object|是|文档筛选条件|


返回值：Collection


**代码示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()
  const cmd = db.command

  try {
    return await db.collection('articles').where({
      status: 0
      visits: cmd.gt(100)
    }).get()
  } catch(err) {
    console.log(err)
  }
}
```

