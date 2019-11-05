---
title: swan.setDocumentTitle
header: develop
nav: api
sidebar: swan-setDocumentTitle
---
 

> 不推荐使用。

**解释**：动态设置当前页面的标题。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title   |String|  是 | | 页面中 title 标签中的内容 |
|success |Function |   否 | |  接口调用成功的回调函数|
|fail   | Function|    否 | |  接口调用失败的回调函数|
|complete   | Function   | 否 || 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/17ee1728dd17b02eb2454886a8e7d77e1558342572018" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


**在 js 文件中**

```js
Page({
    onShow() {
        swan.setDocumentTitle({
            title: '我是页面标题',
            success: res => {
                console.log('setDocumentTitle success', res);
            },
            fail: err => {
                console.log('setDocumentTitle fail', err);
            }
        });
    }
});
```

