---
title: swan.hideTabBar
header: develop
nav: api
sidebar: show_tabbar_swan-hideTabBar
---
 
**解释**：隐藏 tabBar

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|animation | Boolean | 否 | false | 是否需要动画效果。|
|success| Function |   否 | -| 接口调用成功的回调函数|
|fail   | Function  |  否  | -|接口调用失败的回调函数|
|complete  |  Function  |  否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：

<a href="swanide://fragment/c6924169544d35cf75f404fdb41e88801569469634696" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.hideTabBar({
    animation: true,
    success: res => {
        console.log('hideTabBar success');
    },
    fail: err => {
        console.log('hideTabBar fail', err);
    }
});
```

#### hideTabBar

* Andriod

|错误码|说明|
|--|--|
|1001|执行失败   |

* iOS

|错误码|说明|
|--|--|
|1001|当前页面不含tabbar  |

