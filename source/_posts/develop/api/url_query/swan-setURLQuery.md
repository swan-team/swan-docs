---
title: swan.setURLQuery
header: develop
nav: api
sidebar: swan-setURLQuery
---

 

> 基础库 3.100.6 开始支持，低版本需做[兼容处理](/develop/swan/compatibility/)。

**解释：** 设置当前页面的 URL query。
<!-- 如果调用 swan.setURLQuery 导致 URL query 更新，则会同步地调用当前页面的 onURLQueryChange，并引起带有 url-query-name 属性的 [tabs](/develop/component/nav/#tabs/) 组件更新视图。 -->

**方法参数：** Object object

**`newURLquery`参数说明**：

newURLQuery 必须是值为字符串的对象，否则调用 setURLQuery 会抛错。新设置的 URL query 会与当前的 URL query 融合。

**示例代码**：

<a href="swanide://fragment/5bb1ffbf3d23686cf27bf5ba40329d491567219843686" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onURLQueryChange({newURLQuery, oldURLQuery}) {
        console.log(newURLQuery, oldURLQuery) //  输出结果为 {channel: 'movie'} {}
    },
    onLoad(query) {
        if(!query.channel) {
            swan.setURLQuery({channel: 'movie'})
        }
    }
})
```
