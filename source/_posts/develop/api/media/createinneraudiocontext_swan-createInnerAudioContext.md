---
title: swan.createInnerAudioContext
header: develop
nav: api
sidebar: createinneraudiocontext_swan-createInnerAudioContext
---



> 在工具和真机中的实现有区别，详见[API 实现差异](https://smartapp.baidu.com/docs/develop/devtools/diff/)。


**解释**： 创建并返回内部 audio 上下文 `innerAudioContext` 对象。

 
## 方法参数
 无

### 返回值 

InnerAudioContext



## 示例

<a href="swanide://fragment/6e677e1f5a5cf14b7a4d56369ae6d49b1569417414184" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_createInnerAudioContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 
 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/createInnerAudioContext.gif">
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

```javascript
Page({
    onLoad() {
        const innerAudioContext = swan.createInnerAudioContext();
    }
});
```

##  错误码

### Android

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确 |
|1001|执行失败|

### iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确     |