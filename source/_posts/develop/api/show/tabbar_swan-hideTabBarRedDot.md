---
title: swan.hideTabBarRedDot
header: develop
nav: api
sidebar:  tabbar_swan-hideTabBarRedDot
---
 
**解释**：隐藏 tabBar 某一项的右上角的红点

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|index |Number  |是| |tabBar的哪一项，从左边算起|
|success |Function  |  否  | | 接口调用成功的回调函数|
|fail   | Function |   否  | |接口调用失败的回调函数|
|complete |   Function |   否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

**代码示例**：

<a href="swanide://fragment/616a15df8959503ae3c8fa0d3191020b1569467482291" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    showTabBarRedDot() {
        swan.showTabBarRedDot({
            index: 0
        });
    },
    hideTabBarRedDot() {
        swan.hideTabBarRedDot({
            index: 0,
            success: res => {
                console.log('hideTabBarRedDot success');
            },
            fail: err => {
                console.log('hideTabBarRedDot fail', err);
            }
        });
    }
});
```

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|1001|执行失败   |


* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确|
|1001|当前页面不含tabbar|
