---
title: swan.getBackgroundAudioManager
header: develop
nav: api
sidebar: backgroundaudiomanager_swan-getBackgroundAudioManager
---




**解释**：获取全局唯一的背景音频管理器 `backgroundAudioManager`。

 
## 方法参数 

无



## 示例

<a href="swanide://fragment/5beabcb45088a2a513f5eab9de2ef98a1573617055617" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_getBackgroundAudioManager.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getBackgroundAudioManager.gif">
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
    onShow() {
        swan.getBackgroundAudioManager();
    }
});

```
##  错误码

### Android

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法 |

### iOS

|错误码|说明|
|--|--|
|202  |解析失败，请检查参数是否正确|
|204|当前正在播放来源于其他小程序的音频，无权控制|
|1005|播放被打断|
|1006|加载音频失败|
|1007|seek失败，播放器尚未缓冲|

## Bug & Tip 
 
如需使用背景音频可在[配置 app.json 文件](https://smartprogram.baidu.com/docs/develop/tutorial/process/)中，对[requiredBackgroundModes](https://smartprogram.baidu.com/docs/develop/tutorial/process/#requiredBackgroundModes)进行设置。