---
title: swan.showTabBar
header: develop
nav: api
sidebar: tabbar_swan-showTabBar
---
 
**解释**：显示 tabBar
 
## 方法参数 

Object object

### `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|animation | Boolean | 否 |无| 是否需要动画效果。|
|success| Function |   否 | | 接口调用成功的回调函数|
|fail   | Function  |  否  | |接口调用失败的回调函数|
|complete  |  Function  |  否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|
## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_tabBar.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/showtabbar.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例1  

<a href="swanide://fragment/c45f4a5af785986752460c8d6e3a56801575210342255" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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

### 代码示例2 - animation为true时，建议在真机上看效果，工具暂不支持  

<a href="swanide://fragment/653c2822a74192e84d5f53edd3cc8a231575210413682" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
##  错误码

### Android 

|错误码|说明|
|:--|:--|
|1001|执行失败 |

### iOS 

|错误码|说明|
|:--|:--|
|1001|当前页面不含tabbar|

