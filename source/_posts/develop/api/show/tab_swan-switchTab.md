---
title: swan.switchTab
header: develop
nav: api
sidebar: tab_swan-switchTab
---

  

**解释**：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|url |String | 是  | -| 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数。|
|success |Function  |  否  |-|  接口调用成功的回调函数|
|fail   | Function |   否  |-|  接口调用失败的回调函数|
|complete |   Function |   否 |-|   接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/45278c71d4a12fb61433343139698da11569475457272" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
swan.switchTab({
    url: '/api/api',
    success: res => {
        console.log('switchTab success');
    },
    fail: err => {
        console.log('switchTab fail', err);
    }
});

```

