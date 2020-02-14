---
title: swan.hideTabBarRedDot
header: develop
nav: api
sidebar:  tabbar_swan-hideTabBarRedDot
---
 
**解释**：隐藏 tabBar 某一项的右上角的红点

 
## 方法参数

Object object

###  `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|index |Number  |是| |tabBar的哪一项，从左边算起|
|success |Function  |  否  | | 接口调用成功的回调函数|
|fail   | Function |   否  | |接口调用失败的回调函数|
|complete |   Function |   否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|
## 示例

<a href="swanide://fragment/c0cd5b823043904c1690f5e2b51fe2591574137456000" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_tabBar.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/tabbarreddot.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="showTabBarRedDot">showTabBarRedDot</button>
    <button type="primary" bindtap="hideTabBarRedDot">hideTabBarRedDot</button>
</view>
```

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
            success: function () {
                console.log('hideTabBarRedDot success');
            },
            fail: function (err) {
                console.log('hideTabBarRedDot fail', err);
            }
        });
    }
});
```

##  错误码
### Android

|错误码|说明|
|:--|:--|
|1001|执行失败   |


### iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确|
|1001|当前页面不含tabbar|
