---
title: swan.reLaunch
header: develop
nav: api
sidebar: tab_swan-reLaunch
webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/navigateTo/navigateTo
---
 
 

**解释**：关闭所有页面，打开到应用内的某个页面。

 
## 方法参数 

Object object

###  `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|url |String | 是  ||需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用=相连，不同参数用 & 分隔；如 ‘path?key=value&key2=value2’，如果跳转的页面路径是 tabBar 页面则不能带参数。|
|success| Function |   否 | |  接口调用成功的回调函数|
|fail   | Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_navigateTo.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 
###  代码示例1 - 关闭所有页面，打开到应用内的某个页面 

<a href="swanide://fragment/846aafb088c8a69de62456103660db2f1574139934370" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

:::codeTab
```swan
<view class="wrap">
    <button bind:tap="reLaunch" type="primary" hover-stop-propagation="true">关闭所有页面并跳转到detail页</button>
</view>
```
 

```js
Page({
    reLaunch() {
        swan.reLaunch({
            url: '/detail/detail?key=value',
            success: res => {
                console.log('reLaunch success', res);
            },
            fail: err => {
                console.log('reLaunch fail', err);
            }
        })
    }
});
```
:::
### 代码示例 2 - 多级页面的跳转 

<a href="swanide://fragment/4936d6e83b8de1c04966e9b8f744e48a1575404793406" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

:::codeTab
```js
Page({
    data: { },
    redirectTo(e) {
        swan.redirectTo({
            url: '/detail/detail',
            success: res => {
                console.log('redirectTo success');
            },
            fail: err => {
                console.log('redirectTo fail', err);
            }
        });
    }
});
```
:::