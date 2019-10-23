---
title: swan.getBackgroundAudioManager
header: develop
nav: api
sidebar: swan.getBackgroundAudioManager
---




**解释**：获取全局唯一的背景音频管理器 `backgroundAudioManager`。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getBackgroundAudioManager.png"  class="demo-qrcode-image" />

**方法参数**：无

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法 |

* iOS

|错误码|说明|
|--|--|
|202  |解析失败，请检查参数是否正确|
|204|当前正在播放来源于其他小程序的音频，无权控制|
|1005|播放被打断|
|1006|加载音频失败|
|1007|seek失败，播放器尚未缓冲|

 
