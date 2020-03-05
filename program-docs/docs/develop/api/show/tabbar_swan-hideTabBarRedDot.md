---
title: swan.hideTabBarRedDot
header: develop
nav: api
sidebar:  tabbar_swan-hideTabBarRedDot
webUrl: https://qft12m.smartapps.cn/swan-api/tab-bar/tab-bar
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

### 代码示例 

 

:::codeTab

```js
Page({
    onTabItemTap(item) {
        console.log(item.index);
        if(item.index !== 2){
            swan.hideTabBarRedDot({
                index: item.index,
                success: function () {
                    console.log('hideTabBarRedDot success');
                },
                fail: function (err) {
                    console.log('hideTabBarRedDot fail', err);
                }
            });
        }
        console.log(item.pagePath);
        console.log(item.text);
    }
});
```
:::
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
