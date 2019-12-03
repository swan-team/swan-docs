---
title: cloud.database
header: develop
nav: cloud
sidebar:  database
---

 
获取云开发的云数据库对象


**返回值**
Database实例


**使用示例**
``` js
const cloud = require('swan-server-sdk')

exports.main = (event, context) => {
  cloud.init(context)
  const db = cloud.database()
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

