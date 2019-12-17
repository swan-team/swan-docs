---
title: swan.showLoading
header: develop
nav: api
sidebar:  toast_swan-showLoading
---

**解释**：显示 loading 提示框, 需主动调用 hideLoading 才能关闭提示框。



**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_Loading.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title  | String | 是  | | 提示的内容|
|mask | Boolean| 否 |false|  是否显示透明蒙层，防止触摸穿透。|
|success |Function  |  否 | |  接口调用成功的回调函数|
|fail  |  Function   | 否 | |   接口调用失败的回调函数|
|complete  |  Function |   否 | |   接口调用结束的回调函数（调用成功、失败都会执行）|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/loading.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**
<a href="swanide://fragment/6960611628839f267d8df02ca3521a241574135233401" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <button bindtap="showLoading" type="primary" hover-stop-propagation="true">swan.showLoading</button> 
        <button bindtap="hideLoading" type="primary" hover-stop-propagation="true">swan.hideLoading</button>   
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: { },
    showLoading() {
        swan.showLoading({
            title: '正在加载...',
            mask: false, // 一般设置这个值为false
            success: res => {
                console.log('showLoading success', res);
            },
            fail: err => {
                console.log('showLoading fail', err);
            }
        });
    },
    hideLoading() {
        swan.hideLoading();
    }
});
```

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|1001|执行失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

