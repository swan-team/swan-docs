---
title: swan.getURLQuery
header: develop
nav: api
sidebar: swan-getURLQuery
---
 


> 基础库 3.100.6 开始支持，低版本需做[兼容处理](/develop/swan/compatibility/)。

**解释：** 获取当前页面的 URL query 对象值。在当前页面的 URL Query 更新后，只能通过此 API 主动获取当前页面最新的 URL query。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getURLQuery.png"  class="demo-qrcode-image" />

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

<a href="swanide://fragment/dd565f21448c3e95a9471b7f953fed7b1573991326390" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<tabs url-query-name="channel">
    <tab-item s-for="tab in tabs" name="{{tab.name}}" label="{{tab.label}}" />
</tabs>

<button type="primary" class="btn">
	<navigator class="nav" url="/index/index?channel=sports" hover-class="other-navigator-hover">打开默认是体育的当前页</navigator>
</button>
```

* 在 js 文件中
```js
Page({
    data: {
        tabs: [
            {name: 'movie', label: '电影'},
            {name: 'food', label: '美食'},
            {name: 'sports', label: '体育'}
        ],
        content: ''
    },
    onLoad(query) {
        if (query.channel) {
            const newURLQuery = swan.getURLQuery();
            console.log(newURLQuery); // {channel: "sports"}
        }
    }
});
```