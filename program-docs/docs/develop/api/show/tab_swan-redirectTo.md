---
title: swan.redirectTo
header: develop
nav: api
sidebar: tab_swan-redirectTo
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/navigateTo/navigateTo
---
 
 
**解释**：关闭当前页面，跳转到应用内的某个页面。

 
## 方法参数 

Object object

###  `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|url |String | 是  | | 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 ‘path?key=value&key2=value2’。|
|success| Function |   否  | |  接口调用成功的回调函数|
|fail   | Function |   否  | |  接口调用失败的回调函数|
|complete  |  Function  |  否 | |   接口调用结束的回调函数（调用成功、失败都会执行）|

## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_navigateTo.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 

###  代码示例 1 

<a href="swanide://fragment/441e13e266a3072d50cfe2e1b896f9451574139717336" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button bind:tap="redirectTo" type="primary" hover-stop-propagation="true">在当前页面打开</button>
</view>
```

* 在 js 文件中

```js
Page({
    data: { },
    redirectTo(e) {
        swan.redirectTo({
            url: '/detail/detail?id=当前页',
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

###  代码示例 2 - 多级页面的跳转 

<a href="swanide://fragment/c24dc8fd5e6e10fcc02f8615b5e09e341575404434832" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

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


