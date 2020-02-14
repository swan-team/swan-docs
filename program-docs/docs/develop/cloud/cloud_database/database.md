---
title: database
header: develop
nav: cloud
sidebar: cloud_database_database
---



**解释**：获取数据库的引用。

**参数说明** 
该方法传入一个可选参数，参数类型为对象类型，指定引用的数据库的环境ID。如果该方法中未传入指定环境ID，则默认使用`swan.cloud.init`方法中传入的环境ID作为获取数据库引用的环境ID。

**代码示例**

获取默认环境的数据库引用：

```js
    const db = swan.cloud.database();
```

获取指定环境的数据库引用：

```js
    const db = swan.cloud.database({
        env: 'test-envid'
    });
```
