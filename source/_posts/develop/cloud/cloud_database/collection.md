---
title: collection
header: develop
nav: cloud
sidebar: collection
---



**解释**：获取数据库集合的引用。

**参数说明** 
该方法传入一个`name`参数，参数类型为字符串类型，指定需引用的集合名称。


**代码示例**

```js
const db = swan.cloud.database();
const testCollection = db.collection('users');
```




