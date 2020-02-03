---
title: swan.navigateBack
header: develop
nav: api
sidebar: tab_swan-navigateBack
---

 
**解释**：关闭当前页面，返回上一页面或多级页面。

 

## 方法参数 

Object object

###  `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|delta  | Number | 否  |1|  返回的页面数，如果 delta 大于现有页面数，则返回到首页1。|
|success|	function|		否| | 	接口调用成功的回调函数|	
|fail|	function|		否|	-| 接口调用失败的回调函数|	
|complete|	function|		否| | 	接口调用结束的回调函数（调用成功、失败都会执行）|

## 示例

 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_navigateTo.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/navigeto.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 1
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

###   代码示例2 - 从小程序原生页面返回到 H5 页面，并需要刷新： 
<a href="swanide://fragment/285b2bcaa6e473ea04d92ae23f2f73ff1575878402143" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 detail.swan 文件中

```html
<web-view src="{{url}}"></web-view>
```

* 在 detail.js 文件中

```js
Page({
    data: {
        src: ''
    },
   //接收H5页传过来的参数
    onLoad(options) {
        this.setData({'src': options.webViewUrl})
    },
    onShow(){
        this.onLoad()
    }
});
```

* 在 index.js 文件中

```js
Page({
    data: { },
    navigateTo(e) {
        swan.navigateTo({
            url: "/detail/detail?webViewUrl=https://smartprogram.baidu.com&Math.radom()"
        });
    }
});
```


