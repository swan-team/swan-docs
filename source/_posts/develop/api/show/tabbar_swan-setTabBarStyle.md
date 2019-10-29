---
title: swan.setTabBarStyle
header: develop
nav: api
sidebar: tabbar_swan-setTabBarStyle
---

 
**解释**：动态设置 tabBar 的整体样式

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|color |HexColor | 否| |tab 上的文字默认颜色|
|selectedColor |HexColor | 否| |tab 上的文字选中时的颜色|
|backgroundColor |HexColor | 否| | tab 的背景色|
|borderStyle |String |否 | | tabbar上边框的颜色， 有效值 black/white|
|success| Function | 否 | |  接口调用成功的回调函数|
|fail   | Function  | 否 | |接口调用失败的回调函数|
|complete  |  Function  |  否| |接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/8a0d64dcd0e68d1861cc116a2e8c1b891569469282679" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    setTabBarStyle() {
        swan.setTabBarStyle({
            color: '#38f',
            selectedColor: '#38f',
            backgroundColor: '#FFFFBD',
            borderStyle: 'black',
            success: res => {
                console.log('setTabBarStyle success');
            },
            fail: err => {
                console.log('setTabBarStyle fail', err);
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
|1001|当前页面不含tabbar  |
