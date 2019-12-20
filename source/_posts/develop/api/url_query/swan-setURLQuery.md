---
title: swan.setURLQuery
header: develop
nav: api
sidebar: swan-setURLQuery
---

 

> 基础库 3.100.6 开始支持，低版本需做[兼容处理](/develop/swan/compatibility/)。

**解释**：   设置当前页面的 URL query。
<!-- 如果调用 swan.setURLQuery 导致 URL query 更新，则会同步地调用当前页面的 onURLQueryChange，并引起带有 url-query-name 属性的 [tabs](/develop/component/nav/#tabs/) 组件更新视图。 -->


##  方法参数

Object object

  `newURLquery`参数说明  ：

newURLQuery 必须是值为字符串的对象，否则调用 setURLQuery 会抛错。新设置的 URL query 会与当前的 URL query 融合。

## 代码示例

<a href="swanide://fragment/dd565f21448c3e95a9471b7f953fed7b1573991326390" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/setURLQuery.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/setURLQuery.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例  
 
<a href="swanide://fragment/3a389c6476a58e0418b7aa40427f7e381573991590910" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中
```html
<tabs url-query-name="channel">
    <tab-item s-for="tab in tabs" name="{{tab.name}}" label="{{tab.label}}" />
</tabs>
```

* 在 js 文件中
```js
Page({
    data: {
        tabs: [
            {name: 'movie', label: '电影'},
            {name: 'food', label: '美食'},
            {name: 'sports', label: '体育'}
        ]
    },

    onLoad(query) {
        swan.setURLQuery({channel: 'movie'});
    },

    onURLQueryChange({newURLQuery, oldURLQuery}) {
        console.log(newURLQuery, oldURLQuery);
    }
});

```

##  Bug & Tip  

调用 swan.setURLQuery 则会触发 onURLQueryChange 页面函数。
