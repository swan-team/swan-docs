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