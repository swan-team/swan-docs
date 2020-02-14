---
title: collection.doc
header: develop
nav: cloud
sidebar: collection_doc
---


**解释**：获取数据库集合中记录的引用。

**参数说明**
该方法传入一个`ID`参数，参数类型为字符串类型，指定需引用的记录`ID`。



**代码示例**

```js
const doc = db.collection('users').doc('docId');
```
