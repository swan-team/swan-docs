---
title: live-player 实时视频播放器
header: develop
nav: component
sidebar: media_live-player
---


**解释**：实时视频播放器，客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，使用时请注意相关限制。只针对直播答题、直播服务类目开放。需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。


|一级类目|二级类目|
|--|--|
|娱乐|直播、直播答题|

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/live-player.png"  class="demo-qrcode-image" />

## **属性说明**

|属性名 |类型  |默认值  | 必填 |说明|
|---- | ---- | ---- |---- |---- |
|id|String| | 是 |live-player 属性的唯一标志符|
|src|String|  | 是 |音视频地址。目前仅支持 m3u8 格式|
|autoplay|Boolean|false| 否 |自动播放|
|muted|Boolean|false| 否 |是否静音|
|orientation|	String|	vertical| 否 |画面方向，有效值有 vertical，horizontal，目前仅支持安卓端使用该属性。|
|object-fit|String|contain| 否 |填充模式，有效值:contain、fillCrop|
|background-mute|Boolean|false| 否 |进入后台时是否静音|
|min-cache|Number|1| 否 |最小缓冲区，单位s|
|max-cache|Number|3| 否 |最大缓冲区，单位s|
|bindstatechange|EventHandle|  | 否 |播放状态变化事件，参考下方状态码表格，detail = {code}|
|bindnetstatus|EventHandle|  | 否 |网络状态变化通知，参考下方网络状态数据表格，detail = {info}|
|bindfullscreenchange|	EventHandle	| |	否 |全屏变化事件，detail = {direction, fullScreen}。|

### **orientation 有效值**:

| 值 | 说明 |
| ---- | ---- |
| vertical | 垂直方向 |
| horizontal | 水平方向 |

### **object-fit 有效值**:

| 值 | 说明 |
| ---- | ---- |
| contain | 包含 |
| fillCrop | 填充 |

### **主流格式支持**：

|格式|	Android|	IOS|
|--|--|--|
|mp4|	是	|是|
|mov|	是	|是|
|m4v|	是	|是|
|3gp|	是	|是|
|avi|	是	|是|
|m3u8|	是	|是|
|webm|	是|	否|
|flv	|	是	|是|
|mkv|	是	|是|
|rmvb|是	|是|
|rm|	是	|是|
|ogg|	是	|是|

### **主流编码格式支持**：

|格式|	Android|	IOS|
|--|--|--|
|H.263	|是|	是|
|H.264	|是|是|
|HEVC	|是|	是|
|MPEG-4	|是|	否|
|VP8|	是	|否|
|VP9|	是	|否|

### **状态码**：

|代码  |说明   |
| --- | --- |
|2001|已经连接服务器|
|2002|已经连接服务器,开始拉流|
|2003|网络接收到首个视频数据包(IDR)|
|2004|视频播放开始|
|2005|视频播放进度|
|2006|视频播放结束|
|2007|视频播放Loading|
|2008|解码器启动|
|2009|视频分辨率改变|
|-2301|网络断连，且经多次重连抢救无效，更多重试请自行重启播放|
|-2302|获取加速拉流地址失败|
|2101|当前视频帧解码失败|
|2102|当前音频帧解码失败|
|2103|网络断连, 已启动自动重连|
|2104|网络来包不稳：可能是下行带宽不足，或由于主播端出流不均匀|
|2105|当前视频播放出现卡顿|
|2106|硬解启动失败，采用软解|
|2107|当前视频帧不连续，可能丢帧|
|2108|当前流硬解第一个I帧失败，SDK自动切软解|
|3001|RTMP -DNS解析失败|
|3002|RTMP服务器连接失败|
|3003|RTMP服务器握手失败|
|3005|RTMP 读/写失败|


### **网络状态数据**：

|键名  | 说明 |
| --- | --- |
|videoBitrate|当前视频编/码器输出的比特率，单位 kbps|
|audioBitrate|当前音频编/码器输出的比特率，单位 kbps|
|videoFPS|当前视频帧率|
|videoGOP|当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s (安卓不支持该键名)|
|netSpeed|当前的发送/接收速度|
|netStatus|网络状态：-1为未知;0为网络不可用;1为无线广域网连接;2为WiFi连接 。(安卓不支持该键名)|
|videoWidth|视频画面的宽度|
|videoHeight|视频画面的高度|

## 示例
### **图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/live-player.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### **代码示例**


<a href="swanide://fragment/6edf51acedfd01e651364c04f64329651565503516666" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="live-play">
    <live-player id="myLive" 
                 src="{{src}}" 
                 autoplay="{{autoplay}}"
                 muted="{{muted}}"
                 orientation="vertical"
                 object-fit="{{objectFit}}" 
                 background-mute="{{backgroundMute}}" 
                 min-cache="{{minCache}}" 
                 max-cache="{{maxCache}}"
                 bind:statechange="statechange" 
                 bind:netstatus="netstatus"
                 bindfullscreenchange>
    </live-player>
    <div class="section">
        <button type="primary" bind:tap="livePlay">开始播放 play</button>
        <button type="primary" bind:tap="liveStop">停止播放 stop</button>
        <button type="primary" bind:tap="liveMute">{{muted? '': '不'}}静音</button>
        <button type="primary" bind:tap="backgroundMute">进入后台静音</button>
        <button type="primary" bind:tap="objectFit">object-fit改变为{{objectFit}}</button>
    </div>
</view>
```
* 在 js 文件中
```js
Page({
    data: {
        cur: 0,
        autoplay: false,
        src: 'https://vd3.bdstatic.com/mda-ia8e6q3g23py8qdh/hd/mda-ia8e6q3g23py8qdh.mp4?playlist=%5B%22hd%22%5D&auth_key=1521549485-0-0-d5d042ba3555b2d23909d16a82916ebc&bcevod_channel=searchbox_feed&pd=share',
        srcList: [
            'https://vd3.bdstatic.com/mda-ia8e6q3g23py8qdh/hd/mda-ia8e6q3g23py8qdh.mp4?playlist=%5B%22hd%22%5D&auth_key=1521549485-0-0-d5d042ba3555b2d23909d16a82916ebc&bcevod_channel=searchbox_feed&pd=share',
            'https://vd3.bdstatic.com/mda-ib0u8x1bvaf00qa8/mda-ib0u8x1bvaf00qa8.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D'
        ],
        objectFit: 'contain',
        orientation: 'vertical',
        minCache: 1,
        maxCache: 3,
        muted: false,
        backgroundMute: false
    },
    onReady(e) {
        this.ctx = swan.createLivePlayerContext('myLive');
    },
    statechange(e) {
        console.log('播放状态变化 statechange' + JSON.stringify(e))
    },
    netstatus(e) {
        console.log('网络状态变化 netstatus' + JSON.stringify(e))
    },
    livePlay(e) {
        this.ctx.play();
    },
    objectFit(e) {
        this.setData('objectFit', this.getData('objectFit') === 'contain' ? 'fillCrop' : 'contain');
    },
    liveStop(e) {
        this.ctx.stop();
    },
    liveMute(e) {
        this.setData({
            muted: true
        });
    },
    changeSrc(e) {
        let srcList = this.getData('srcList');
        let cur = (this.getData('cur') + 1) % srcList.length;
        this.setData('src', srcList[cur]);
        this.setData('cur', cur);
    },
    backgroundMute(e) {
        this.setData({
            'backgroundMute': true
        });
    },
});
```

 
## **Bug & Tip**
* Tip：live-player 默认宽度 300px、高度 225px；
* Tip：从基础库版本1.12.0开始支持事件捕获、冒泡。
