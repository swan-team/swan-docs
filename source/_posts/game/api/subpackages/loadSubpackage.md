---
title: swan.loadSubpackage
layout: gamedoc
topic: subpackages
categoryName: api
---

### swan.loadSubpackage()

加载一个分包。

```js
swan.loadSubpackage(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|name|function|是|分包的名字|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值：**

[LoadSubpackageTask](/api/subpackages/loadSubpackageTask/) 实例。
