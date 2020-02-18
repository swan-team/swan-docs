---
title: swan.getAvailableAudioSources
header: develop
nav: api
sidebar: recorder_swan-getAvailableAudioSources
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/getAvailableAudioSources/getAvailableAudioSources
---




> 基础库3.80.2开始支持，低版本需做兼容处理

**解释**：获取当前支持的音频输入源
 
## 方法参数
Object object
### `object` 参数说明  

|参数名 |类型  |是否必填  |默认值|说明|
|---- | ---- | ---- |--|---- |
|success |Function  |  否 |   | 接口调用成功的回调|
|fail   | Function |   否  |  | 接口调用失败的回调函数|
|complete  |  Function |   否 |   | 接口调用结束的回调函数（调用成功、失败都会执行）|

### success回调函数 

 
|参数名 |类型  |说明|
|---- | ---- |---- |
|audioSources |Array| 支持的音频输入源列表，可在 RecorderManager.start() 接口中使用 |

### res.audioSources有效值 

|返回值|说明  |
|---- | ---- |
|auto |自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用|
|buildInMic |手机麦克风，仅限 iOS|
|headsetMic |耳机麦克风，仅限 iOS|
|mic |麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android|
|camcorder |同 mic，适用于录制音视频内容，仅限 Android|
|voice_communication |同 mic，适用于实时沟通，仅限 Android|
|voice_recognition |同 mic，适用于语音识别，仅限 Android|


## 示例

<a href="swanide://fragment/ff191a79517d7333e2d0c0e452fdd84a1569392252816" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getAvailableAudioSources.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 

### 代码示例 




* 在 js 文件中

```js
Page({
    getAvailableAudioSources() {
        swan.getAvailableAudioSources({
            success: res => {
                console.log('当前支持的音频输入源:', res.audioSources);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
})
```