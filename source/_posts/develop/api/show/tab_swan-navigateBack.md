---
title: swan.navigateBack
header: develop
nav: api
sidebar: tab_swan-navigateBack
---

 
**解释**：关闭当前页面，返回上一页面或多级页面。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/navigateTo.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|delta  | Number | 否  |1|  返回的页面数，如果 delta 大于现有页面数，则返回到首页1。|
|success|	function|		否|-| 	接口调用成功的回调函数|	
|fail|	function|		否|	-| 接口调用失败的回调函数|	
|complete|	function|		否|-| 	接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：

<a href="swanide://fragment/45278c71d4a12fb61433343139698da11569475457272" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 component.swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="navigateTo">navigateTo</button>
</view>
```

* 在 api.swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="navigateBack">navigateBack</button>
</view>
```

* 在 component.js 文件中

```js
Page({
    navigateTo() {
        swan.navigateTo({
            url: '/api/api?key=value',
            success: res => {
                console.log('navigateTo success');
            },
            fail: err => {
                console.log('navigateTo fail', err);
            }
        });
    }
});
```
* 在 api.js 文件中

```js
Page({
    onLoad(options) {
        console.log('onLoad', options);
    },
    navigateBack() {
        swan.navigateBack({
            success: res => {
                console.log('navigateBack success');
            },
            fail: err => {
                console.log('navigateBack fail', err);
            }
        });
    }
});
```


