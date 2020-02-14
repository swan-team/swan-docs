---
title: swan.getUpdateManager()
layout: gamedoc
topic: update
categoryName: api
priority: 16-01
---

获取全局唯一对更新进行管理的对象，建议开发者将对象的获取以及事件回调的监听写在 `onShow` 周期当中。

**示例：**

```js
const updateManager = swan.getUpdateManager();
```