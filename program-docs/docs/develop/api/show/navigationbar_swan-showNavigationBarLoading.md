---
title: swan.showNavigationBarLoading
header: develop
nav: api
sidebar: navigationbar_swan-showNavigationBarLoading
webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/navigationBarLoading/navigationBarLoading
---
 
 

**解释**： 该方法在当前页面显示导航条加载动画。

 
 ## 方法参数 

无

## 示例

<a href="swanide://fragment/072bca954324649b05962f16c9d69de61574136587133" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/navigationBarLoading.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 
###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/navigationbarloading.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



 

:::codeTab
```swan
<view class="wrap">
    <button bind:tap="showNavigationBarLoading" type="primary" hover-stop-propagation="true">显示加载动画</button>

    <button bind:tap="hideNavigationBarLoading" type="primary" hover-stop-propagation="true">隐藏加载动画</button>
</view>
```

 

```js
Page({
    data: { },
    showNavigationBarLoading(e) {
        swan.showNavigationBarLoading();
    },

    hideNavigationBarLoading(e) {
        swan.hideNavigationBarLoading();
    }
});
```
:::
##  错误码

### Android 

|错误码|说明|
|:--|:--|
|1001|执行失败   |

