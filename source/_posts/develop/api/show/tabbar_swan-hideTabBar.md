---
title: swan.hideTabBar
header: develop
nav: api
sidebar: show_tabbar_swan-hideTabBar
---
 
**解释**：隐藏 tabBar

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|animation | Boolean | 否 | false | 是否需要动画效果。|
|success| Function |   否 | | 接口调用成功的回调函数|
|fail   | Function  |  否  | |接口调用失败的回调函数|
|complete  |  Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|


**代码示例**：

<a href="swanide://fragment/5aa2f4593413e51fd723d5effc62d8221574138247912" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">      
    <button type="primary" bindtap="showTabBar">showTabBar</button>
    <button type="primary" bindtap="hideTabBar">hideTabBar</button>
</view>
```

* 在 js 文件中

```js
Page({
    onLoad() {
        swan.hideTabBar();
    },
    showTabBar() {
        swan.showTabBar({
            animation: true,
            success: function () {
                console.log('showTabBar success');
            },
            fail: function (err) {
                console.log('showTabBar fail', err);
            }
        });
    },
    hideTabBar() {
        swan.hideTabBar({
            animation: true,
            success: function () {
                console.log('hideTabBar success');
            },
            fail: function (err) {
                console.log('hideTabBar fail', err);
            }
        });
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

