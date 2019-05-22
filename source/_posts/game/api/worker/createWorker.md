---
title: swan.createWorker
layout: gamedoc
topic: worker
categoryName: api
priority: 18-01
---

 > 从 [基础库 1.6.1](/game/tutorials/version/releaseLog) 开始支持

 创建一个 [Worker 线程](/game/tutorials/worker/worker)。目前限制最多只能创建一个 Worker，创建下一个 Worker 前请先调用 [Worker.terminate](/game/api/worker/workerObj/#terminate)

 ```js
swan.createWorker(path)
```

 **参数值**：

 |属性|类型|是否必填|描述|
|-|-|-|-|
|path|string|是|入口文件绝对路径|

 **返回值**：

 [Worker 对象](/game/api/worker/workerObj/)