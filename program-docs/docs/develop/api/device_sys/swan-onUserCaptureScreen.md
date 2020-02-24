---
title: swan.onUserCaptureScreen
header: develop
nav: api
sidebar: swan-onUserCaptureScreen
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/onUserCaptureScreen/onUserCaptureScreen
---


 

> 在工具和真机中的实现有区别，详见[API 实现差异](https://smartapp.baidu.com/docs/develop/devtools/diff/)

**解释**：监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。

 
## 方法参数 

Function callback

### `callback`参数说明 
 无
## 示例

<a href="swanide://fragment/0ef6b9cc220c17e255b866a422339bfd1574220849773" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/onUserCaptureScreen.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onUserCaptureScreen.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>
 

###  代码示例 



* 在 swan 文件中

```html
<view class="display-area">
    <view class="use-tips">请截屏（使用系统截屏按键）</view>
    <view s-if="count === 0" class="no-use">截屏事件监听中</view>
    <view s-else class="use-count">截屏事件已触发{{count}}次</view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        count: 0
    },
    onLoad() {
        swan.onUserCaptureScreen(res => {
            const count = this.getData('count');
            this.setData('count', count + 1);
        });
    }
});
```
