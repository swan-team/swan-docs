---
title: swan.getURLQuery
header: develop
nav: api
sidebar: swan-getURLQuery
---
 


> 基础库 3.100.6 开始支持，低版本需做[兼容处理](/develop/swan/compatibility/)。

**解释：** 获取当前页面的 URL query 对象值。在当前页面的 URL Query 更新后，只能通过此 API 主动获取当前页面最新的 URL query。

**方法参数：** 无

**示例代码**
<a href="swanide://fragment/5bb1ffbf3d23686cf27bf5ba40329d491567219843686" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onLoad(query) {
        if(!query.channel) {
            swan.setURLQuery({channel: 'movie'})
            const newURLQuery = swan.getURLQuery()
            console.log(query.channel === undefined && newURLQuery.channel === 'movie') // true
        }
    }
})
```