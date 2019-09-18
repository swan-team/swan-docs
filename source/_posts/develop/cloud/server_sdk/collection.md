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


**使用示例**
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


**使用示例**
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


**使用示例**
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


**使用示例**
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


**使用示例**
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


**使用示例**
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


**使用示例**
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


**使用示例**
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


**使用示例**
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


**使用示例**
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


**使用示例**
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

## Database.collection
获取云数据库指定名称的集合对象


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|name|String|是|集合名称|


返回值：Collection


**使用示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()
  const coll = db.collection('articles')
}
```

## Database.command
云数据库操作指令对象，包含相关数据库文档操作指令构造方法


**指令列表**

|名称|类型|说明|
|---|---|---|
|set|赋值操作||
|inc|数值操作|自增|
|mul|数值操作|自乘|
|eq|逻辑运算|等于|
|neq|逻辑运算|不等于|
|gt|逻辑运算|大于|
|gte|逻辑运算|大于|
|lt|逻辑运算|大于|
|lte|逻辑运算|大于|
|and|逻辑运算|逻辑与|
|or|逻辑运算|逻辑或|
|in|逻辑运算|包含于|
|nin|逻辑运算|不包含于|
|pop|数组操作|移出数组尾部元素|
|push|数组操作|插入到数组尾部|
|shift|数组操作|移出数组首部元素|
|unshift|数组操作|插入到数组首部|
|geoIntersects|地理运算|地理区域相交|
|geoNear|地理运算|地理区域相邻|
|geoWithin|地理运算|地理区域包含|


**使用示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()
  const cmd = db.command
  try {
    return await db.collection('userList').where({
      age: cmd.gt(18)
    })
  } catch(err) {
      console.log(err)
  }
}
```

## Database.createCollection
在云数据库中新增集合

**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|name|String|是|集合名称|


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|requestID|String|请求ID|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**使用示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()
  try {
    await db.createCollection('articles')
  } catch(err) {
    console.log(err)
  }
}
```

## Database.Geo
云数据库地理对象，包含相关地理位置信息构造接口


**类型列表**

|名称|说明|
|---|---|
|Point|点|
|MultiPoint|点集合|
|Linestring|线段|
|MultiLinestring|线集合|
|Polygon|多边形|
|MultiPolygon|多边形集合|


**使用示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()
  const Geo = db.Geo
  try {
    return await db.collection('poiList').add({
        name: '天安门',
        location: Geo.Point(116.4074, 39.9042)
    })
  } catch(err) {
      console.log(err)
  }
}
```

## Database.serverDate
创建云数据库的服务端时间对象


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|option|Object|是||
|option.offset|Number|否|相对当前时间偏移，单位：毫秒|

**返回值**
ServerDate


**使用示例**
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
        createDate: new Date({
            offset: 1000
        }),
    })
  } catch(err) {
    console.log(err)
  }
}
```

## Database.RegExp

创建云数据库的相关指令所需的正则表达式对象

**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|data|Object|是||
|data.regexp|String|是|正则表达式|
|data.options|String|否|正则表达式flags: i, m, s|


**返回值**

RegExp

**使用示例**

``` js
const cloud = require('swan-server-sdk')
exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()
  try {
      return await db.collection('articles').where({
        title: new db.RegExp({
            regexp: '^baidu',
            options: 'i',
        }),
    })
  } catch(err) {
    console.log(err)
  }
}
```

## Document.get
获取对应文档数据


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|requestID|String|请求ID|
|data|Object|文件数据|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**使用示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()

  try {
    return await db.collection('articles').doc('some-doc-id').get()
  } catch(err) {
    console.log(err)
  }
}
```

## Document.remove
删除对应文档


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|requestID|String|请求ID|
|removed|Object|删除成功为1，否则为0|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**使用示例**
``` js
const cloud = require('swan-server-sdk')
exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()

  try {
    return await db.collection('articles').doc('some-doc-id').remove()
  } catch(err) {
    console.log(err)
  }
}
```

## Document.set
替换对应文档数据，如果对应文档不存在则直接新增文档

**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|data|Object|是|替换文档数据|


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|requestID|String|请求ID|
|updated|Number|替换文档数量，如果对应文档存在则为：1，否则为：0|
|created|Number|新增文档数量，如果对应文档不存在则为：1，否则为：0|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**使用示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()

  try {
    return await db.collection('articles').doc('some-doc-id').set({
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

## Document.update
更新对应文档


**参数**

|名称|类型|必须|说明|
|---|---|---|---|
|data|Object|是|更新文档数据，可以包含文档操作指令|


**返回值Promise**

resolve 结果：

|名称|类型|说明|
|---|---|---|
|requestID|String|请求ID|
|updated|Number|更新文档数量，成功为：1，否则为：0|

reject 结果：

|名称|类型|说明|
|---|---|---|
|code|String|错误码|
|message|String|错误信息|


**使用示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = async (event, context) => {
  cloud.init(context)
  const db = cloud.database()
  const cmd = db.command
  try {
    return await db.collection('articles').doc('some-doc-id').update({
      visits: cmd.inc(1)
    })
  } catch(err) {
    console.log(err)
  }
}
```

