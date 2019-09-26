---
title: 位置
header: develop
nav: api
sidebar: show_pagescrollto
---

## swan.pageScrollTo


**解释**：将页面滚动到目标位置（可以设置滚动动画时长）。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|scrollTop |Number | 是|  - | 滚动到页面的目标位置（单位 px） |
|duration |Number | 否| 300 | 滚动动画的时长，（单位 ms） |
|success |Function  |  否 |-| 接口调用成功的回调函数 | 
|fail  |  Function |   否  |-| 接口调用失败的回调函数|  
|complete   | Function  |  否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）| 

**示例**：

<a href="swanide://fragment/692556b3f94d4194e7f932460121faf61569476076182" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    pageScrollTo() {
        swan.pageScrollTo({
            scrollTop: 0,
            duration: 300,
            success: res => {
                console.log('pageScrollTo success', res);
            },
            fail: err => {
                console.log('pageScrollTo fail', err);
            }
        });
    }
});
```
