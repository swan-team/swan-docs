---
title: onPullDownRefresh
header: develop
nav: api
sidebar:  pull_onPullDownRefresh
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/pullDownRefresh/pullDownRefresh
---


**解释**：页面的事件处理函数，监听用户下拉动作。

 

详情参见<a href="https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E9%A1%B5%E9%9D%A2%E7%9B%B8%E5%85%B3%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0/">页面相关事件处理函数</a>
## 示例

<a href="swanide://fragment/b047393e957357ccc3dc6d83aa99dca31575531088981" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_onPullDownRefresh.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onPullDownRefresh.gif">
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
<view class="container">
    <view class="card-area">
        <view class="page-info">下拉页面即可刷新</view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: { },
    onPullDownRefresh(){
        swan.showModal({
            title: 'success',
            content: '已触发页面刷新'
        });
    }
});
```