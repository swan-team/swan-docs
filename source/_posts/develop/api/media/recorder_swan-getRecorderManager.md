---
title: swan.getRecorderManager
header: develop
nav: api
sidebar: recorder_swan-getRecorderManager
---



**解释**： 获取全局唯一的录音管理器`recorderManager`。使用该 API 需通过[获取用户权限设置](https://smartprogram.baidu.com/docs/develop/api/open/authorize_set/)申请授权后方可对用户发起授权申请，可在[需授权接口列表](https://smartprogram.baidu.com/docs/develop/api/open/authorize_list/)中查看相关错误码信息。
 
## 方法参数 

 无

### 返回值 

recorderManager



## 示例

<a href="swanide://fragment/7c14ca3d4e36f07aed3f68185333b6d91569392187260" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_getRecorderManager.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/RecorderManager.gif">
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
    onShow() {
        swan.getRecorderManager()
    }
});
```


