---
title: RecorderManager
header: develop
nav: api
sidebar: recorder_RecorderManager
---




**解释**：swan.getRecorderManager 的返回值。

 
## 示例

<a href="swanide://fragment/70d4f42e90d9ad149e2dc0226bd82d2c1573410962037" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_RecorderManager.png" class="demo-qrcode-image" />
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



 在 js 文件中 

```javascript
Page({
    onShow() {
        const recorderManager = swan.getRecorderManager()
        console.log(recorderManager)
        recorderManager.onStart(function() {
            // 开始录音事件
            console.log('recorder start')
        });
        recorderManager.onPause(function() {
            // 暂停录音事件
            console.log('recorder pause')
        });
        recorderManager.onStop(function(res) {
            // 停止录音事件
            console.log('recorder stop', res)
            const { tempFilePath } = res
        });
        recorderManager.onResume(function() {
            // 继续录音事件
            console.log('recorder resume')
        });
        recorderManager.onInterruptionBegin(function() {
            // 终端录音开始事件
            console.log('recorder interruptionBegin')
        });
        recorderManager.onInterruptionEnd(function() {
            // 终端录音结束事件
            console.log('recorder interruptionEnd')
        });

        const options = {
            duration: 10000,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 96000,
            format: 'aac'
        };

        recorderManager.start(options);
        // recorderManager.stop();
        // recorderManager.resume();
        // recorderManager.pause();
        this.recorderManager = recorderManager;
    }
});
```
##   错误码

> 权限相关的错误码参见[授权接口通用错误码](https://smartprogram.baidu.com/docs/develop/api/open/authorize_list/)

|错误码|说明|
|--|--|
|202|  解析失败，请检查参数是否正确|
|2002|start fail: init fail 执行start错误，录音初始化失败|
|2003|  录音机控制状态方法调用时机错误,具体错误信息如下:<br> start fail: recorder is recording   执行start错误,正在录音    <br>  start fail: recorder is paused   执行start错误，录音是暂停状态    <br>  pause fail: recorder is not recording  执行pause错误    <br> resume fail: recorder is not paused   执行resume错误    <br>  stop fail: recorder is not started  执行stop错误 |  


