



## RecorderManager.pause


**解释**： 暂停录音

**方法参数**：无


## RecorderManager.resume

**解释**： 继续录音

**方法参数**：无


## RecorderManager.stop 

**解释**： 停止录音

**方法参数**：无

## RecorderManager.onStart


**解释**： 录音开始事件

**方法参数**：Function callback


## RecorderManager.onPause

**解释**： 监听录音暂停事件

**方法参数**：Function callback

## RecorderManager.onStop

**解释**： 录音停止事件，会回调文件地址。

**方法参数**：Function callback

**callback 回调结果说明**：

|参数名| 类型 | 说明 |
|---- | ---- | ---- |
|tempFilePath |String | 录音文件的临时路径 |

## RecorderManager.onError


**解释**： 录音错误事件, 会回调错误信息 。

**方法参数**：Function callback


**callback 回调结果说明**：

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|errMsg |String | 错误信息 |
|errCode|Number|错误码信息|

## swan.getAvailableAudioSources
> 基础库3.80.2开始支持，低版本需做兼容处理

**解释**：获取当前支持的音频输入源

**方法参数**：Object data
**`data` 参数说明**：

|参数名 |类型  |是否必填  |默认值|说明|
|---- | ---- | ---- |--|---- |
|success |Function  |  否 |   | 接口调用成功的回调|
|fail   | Function |   否  |  | 接口调用失败的回调函数|
|complete  |  Function |   否 |   | 接口调用结束的回调函数（调用成功、失败都会执行）|

**data.success回调函数**
**方法参数**：Object res

|参数名 |类型  |说明|
|---- | ---- |---- |
|audioSources |Array| 支持的音频输入源列表，可在 RecorderManager.start() 接口中使用 |

**res.audioSources合法值**

|返回值|说明  |
|---- | ---- |
|auto |自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用|
|buildInMic |手机麦克风，仅限 iOS|
|headsetMic |耳机麦克风，仅限 iOS|
|mic |麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android|
|camcorder |同 mic，适用于录制音视频内容，仅限 Android|
|voice_communication |同 mic，适用于实时沟通，仅限 Android|
|voice_recognition |同 mic，适用于语音识别，仅限 Android|



**示例**：
<a href="swanide://fragment/ff191a79517d7333e2d0c0e452fdd84a1569392252816" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


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
});
```




