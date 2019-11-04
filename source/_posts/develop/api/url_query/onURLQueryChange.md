---
title: onURLQueryChange
header: develop
nav: api
sidebar: onURLQueryChange
---

> 百度小程序的页面与其 URL query 有对应关系，页面内容改变后，如有必要请调用 swan.setURLQuery，以便更好地被搜索引擎收录。



详情参见<a href="/develop/framework/app_service_pagefunction/">页面相关事件处理函数</a>。

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
 
