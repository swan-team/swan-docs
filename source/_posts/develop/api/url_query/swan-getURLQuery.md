---
title: swan.getURLQuery
header: develop
nav: api
sidebar: swan-getURLQuery
---
 


> 基础库 3.100.6 开始支持，低版本需做[兼容处理](/develop/swan/compatibility/)。

**解释：** 获取当前页面的 URL query 对象值。在当前页面的 URL Query 更新后，只能通过此 API 主动获取当前页面最新的 URL query。

**方法参数：** 无

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getURLQuery.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/7d33cd2f8a5f2b69bd6ec79437834bf11572856867852" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onLoad(query) {
        if(query.channel) {
            const newURLQuery = swan.getURLQuery()
            console.log(newURLQuery)
        }
    }
})
```