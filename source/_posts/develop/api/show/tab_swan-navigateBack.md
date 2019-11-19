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

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|delta  | Number | 否  |1|  返回的页面数，如果 delta 大于现有页面数，则返回到首页1。|
|success|	function|		否| | 	接口调用成功的回调函数|	
|fail|	function|		否|	-| 接口调用失败的回调函数|	
|complete|	function|		否| | 	接口调用结束的回调函数（调用成功、失败都会执行）|


**代码示例**：

<a href="swanide://fragment/e42d209071bcae91b9b3c04888763cfd1574139008383" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 index.swan 文件中

```html
<view class="wrap">
    <button bind:tap="navigateTo" type="primary" hover-stop-propagation="true">跳转新页面</button>
</view>
```

* 在 detail.swan 文件中

```html
<view class="wrap">
    <view class="page-top">
        <view class="page-top-text">{{id}}</view>
    </view>
    <button bind:tap="navigateBack" type="primary" hover-stop-propagation="true">返回上一页</button> 
</view> 
```

* 在 index.js 文件中

```js
Page({
    data: { },
    navigateTo(e) {
        swan.navigateTo({
            url: '/detail/detail?id=新页面'
        });
    }
});
```
* 在 detail.js 文件中

```js
Page({
    data: {
        id: 'detail'
    },
    onLoad(options) {
        this.setData({
            'id': options.id
        });
    },
    navigateBack(e) {
        swan.navigateBack({
            delta: 2
        });
    }
});
```


