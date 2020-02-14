---
title: swan.ai.getVoiceRecognizer
header: develop
nav: api
sidebar: voice_swan-ai-getVoiceRecognizer
---




**解释**：获取全局唯一的语音识别器`voiceRecognizer`。其在工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

 

## 方法参数 
无

### 返回值

voiceRecognizer

## 示例

 
<a href="swanide://fragment/2e32098e4419e91a5bf1173f190369021573999089554" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_getVoiceRecognizer.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getVoiceRecognizer2.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getVoiceRecognizer3.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getVoiceRecognizer.gif">
    </div>     
</div>

### 代码示例 



```js
// AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误
let host = swan.getSystemInfoSync().host;
if (host === 'baiduboxapp') {
    const voiceRecognizer = swan.ai.getVoiceRecognizer();
}
else {
    swan.showToast({
        title: '此api目前仅可在百度App上使用',
        icon: 'none'
    });
}
```