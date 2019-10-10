---
title: Database.document
header: develop
nav: cloud
sidebar:  Document
---

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

