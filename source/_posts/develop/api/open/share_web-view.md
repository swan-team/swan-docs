---
title: web-view中的分享 
header: develop
nav: api
sidebar:  share_web-view
---
 

当使用 web-view 组件时，用户从 A(h5) 页面跳转到了 B(h5) 页面。此时，用户在 B 页面发起分享，更可能的预期是分享 B 页面。但是，默认行为将打开 A 页面。此时，开发者可以做以下处理，让分享后打开 B 页面。

* 针对小程序框架调起的分享

```xml
// swan 文件
<web-view s-if="webViewUrl" src="{{webViewUrl}}"></web-view>
```
```js
// js 文件
Page({
    data: {
        webViewUrl: ''
    },
    
    onLoad({webViewUrl}) {
        webViewUrl && this.setData({webViewUrl});
    },

    onShareAppMessage({webViewUrl}) {
        return {
            title: '分享回流示例',
            content: '默认会回到分享时的 url',
            path: `/pages/openShare/openShare?webViewUrl=${encodeURIComponent(webViewUrl)}`
        };
    }
});
```

* 针对 H5 页面通过 openShare API 调起的分享

```js
const webViewUrl = location.href;
swan.openShare({
    title: '智能小程序示例',
	content: '世界很复杂，百度更懂你',
    appKey: 'y3dTfnWfkx2OXttMEMWlGHoB1KzMogm7', // 可通过 开发者平台 -> 设置 -> 开发设置 中查看
    path: `/pages/openShare/openShare?webViewUrl=${encodeURIComponent(webViewUrl)}`
});
```
