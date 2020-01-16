---
title: swan.stopPullDownRefresh
header: develop
nav: api
sidebar: pull_swan-stopPullDownRefresh
---
 
**解释**： 停止当前页面下拉刷新。

 
## 方法参数 

无
## 示例

<a href="swanide://fragment/37955e937e5e221c983f1129861c38ae1569476821334" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pullDownRefresh.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/PullDownRefresh.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 




* 在 js 文件中

```js
Page({
    startPullDownRefresh() {
        swan.startPullDownRefresh();
    },
    stopPullDownRefresh() {
        swan.stopPullDownRefresh({
            success: res => {
                console.log('stopPullDownRefresh success');
            },
            fail: err => {
                console.log('stopPullDownRefresh fail', err);
            }
        });
    }
});
```



##  错误码
### Android

|错误码|说明|
|--|--|
|1001|执行失败   |

### iOS

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
