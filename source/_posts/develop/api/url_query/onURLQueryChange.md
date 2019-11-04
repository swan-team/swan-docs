---
title: onURLQueryChange
header: develop
nav: api
sidebar: onURLQueryChange
---

> 百度小程序的页面与其 URL query 有对应关系，页面内容改变后，如有必要请调用 swan.setURLQuery，以便更好地被搜索引擎收录。



**解释**：在 Page 中定义 onURLQueryChange 处理函数，监听页面 URL query 改变。引起页面 URL query 更新的原因有：调用 [swan.setURLQuery](/develop/api/url_query/swan-setURLQuery/) 。
<!-- 带有 url-query-name 属性的 [tabs](/develop/component/nav/#tabs/) 切换 tab。 -->

**方法参数**：Object object

**Object参数说明**：

|字段 |类型  |说明 |
|---- | ---- | ---- |
|newURLQuery|Object| 改变后的 URL query |
|oldURLQuery|Object| 改变前的 URL query |


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onURLQueryChange.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：
 
<a href="swanide://fragment/862ac1772aabc0a8cf065093f7784d021572856346528" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onURLQueryChange({newURLQuery, oldURLQuery}) {
        console.log(newURLQuery, oldURLQuery);
        this.setData({
            content: `${oldURLQuery.channel || '电影'} To ${newURLQuery.channel}`
        })
    }
})
```
 
