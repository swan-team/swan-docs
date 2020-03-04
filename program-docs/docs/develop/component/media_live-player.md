---
title: live-player 实时视频播放器
header: develop
nav: component
sidebar: media_live-player
webUrl: https://qft12m.smartapps.cn/component/live-player/live-player
---


**解释**：实时视频播放器（v3.140.1 起支持同层渲染）。只针对直播答题、直播服务类目开放。需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。


|一级类目|二级类目|
|:--|:--|
|娱乐|直播、直播答题|

##  属性说明

|属性名 |类型  |默认值  | 必填 |说明|Web 态说明|
|:---- | :---- |: ---- |:---- |:---- |:---- |
|id|String| | 是 |live-player 属性的唯一标志符|-|
|src|String|  | 是 |音视频地址。目前仅支持 m3u8 格式|-|
|autoplay|Boolean|false| 否 |自动播放|存在浏览器兼容问题，详见下方 Web 态 Tip1|
|muted|Boolean|false| 否 |是否静音|-|-|
|orientation|	String|	vertical| 否 |画面方向，有效值有 vertical，horizontal，目前仅支持安卓端使用该属性。|此属性对 Web 态不生效|
|object-fit|String|contain| 否 |填充模式，有效值:contain、fillCrop|-|-|
|background-mute|Boolean|false| 否 |进入后台时是否静音（已废弃，默认退台静音）|默认退台静音，设置为 false 后不生效 |
|min-cache|Number|1| 否 |最小缓冲区，单位s|此属性对 Web 态不生效|
|max-cache|Number|3| 否 |最大缓冲区，单位s|此属性对 Web 态不生效|
|bindstatechange|EventHandle|  | 否 |播放状态变化事件，参考下方状态码表格，detail = {code}|-|
|bindnetstatus|EventHandle|  | 否 |网络状态变化通知，参考下方网络状态数据表格，detail = {info}|
|bindfullscreenchange|	EventHandle	| |	否 |全屏变化事件，detail = {direction, fullscreen}。|-|

###  orientation 有效值

| 值 | 说明 |
| :---- | :---- |
| vertical | 垂直方向 |
| horizontal | 水平方向 |

###  object-fit 有效值

| 值 | 说明 |
| :---- | :---- |
| contain | 包含 |
| fillCrop | 填充 |

###  主流格式支持

|格式|	Android|	IOS|	Web 态|
|:--|:--|:--|:--|
|mp4|	是	|是|是|
|mov|	是	|是|是|
|m4v|	是	|是|是|
|3gp|	是	|是|否|
|avi|	是	|是|否|
|m3u8|	是	|是|是|
|webm|	是|	否|否|
|flv	|	是	|是|否|
|mkv|	是	|是|否|
|rmvb|是	|是|否|
|rm|	是	|是|否|
|ogg|	是	|是|是|

###  主流编码格式支持

|格式|	Android|	IOS|
|:--|:--|:--|
|H.263	|是|	是|
|H.264	|是|是|
|HEVC	|是|	是|
|MPEG-4	|是|	否|
|VP8|	是	|否|
|VP9|	是	|否|

###  状态码

|代码  |说明   |Web 态说明|
|:--|:--|
|2001|已经连接服务器|暂不支持|
|2002|已经连接服务器,开始拉流|-|
|2003|网络接收到首个视频数据包(IDR)|-|
|2004|视频播放开始|-|
|2005|视频播放进度|-|
|2006|视频播放结束|-|
|2007|视频播放Loading|-|
|2008|解码器启动|暂不支持|
|2009|视频分辨率改变|暂不支持|
|-2301|网络断连，且经多次重连抢救无效，更多重试请自行重启播放|-|
|-2302|获取加速拉流地址失败|暂不支持|
|2101|当前视频帧解码失败|-|
|2102|当前音频帧解码失败|暂不支持|
|2103|网络断连, 已启动自动重连|暂不支持|
|2104|网络来包不稳：可能是下行带宽不足，或由于主播端出流不均匀|-|
|2105|当前视频播放出现卡顿|-|
|2106|硬解启动失败，采用软解|暂不支持|
|2107|当前视频帧不连续，可能丢帧|暂不支持|
|2108|当前流硬解第一个I帧失败，SDK自动切软解|暂不支持|
|3001|RTMP -DNS解析失败|暂不支持|
|3002|RTMP服务器连接失败|暂不支持|
|3003|RTMP服务器握手失败|暂不支持|
|3005|RTMP 读/写失败|暂不支持|


###  网络状态数据

|键名  | 说明 |
|:--|:--|
|videoBitrate|当前视频编/码器输出的比特率，单位 kbps|
|audioBitrate|当前音频编/码器输出的比特率，单位 kbps|
|videoFPS|当前视频帧率|
|videoGOP|当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s (安卓不支持该键名)|
|netSpeed|当前的发送/接收速度|
|netStatus|网络状态：-1为未知;0为网络不可用;1为无线广域网连接;2为WiFi连接 。(安卓不支持该键名)|
|videoWidth|视频画面的宽度|
|videoHeight|视频画面的高度|

## 示例

<a href="swanide://fragment/e457afb81d7a2a3dd33cf5a9f35670551577364196871" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/live-player.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>



###  代码示例


<a href="swanide://fragment/6edf51acedfd01e651364c04f64329651565503516666" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


:::codeTab
```swan
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
:::


##  Bug & Tip
* Tip：live-player 默认宽度 300px、高度 225px；
* Tip：从基础库版本1.12.0开始支持事件捕获、冒泡。

## Web 态 Tip

### Tip1：在部分浏览器下，视频资源无法自动播放的解决方案
**案例分析：**
出于用户体验、节省流量等原因，iOS 的 Safari、版本号 66 及以上的 Chrome、以及大部分国产移动浏览器禁止视频在非静音状态下自动播放。因此，Web 态**针对 live-player 组件中 autoplay 属性设置为 true 后**做了如下处理：
* 对于 QQ、Android 微信、 QQ 浏览器等基于 X5 内核的平台，Web 态下设置的 autoplay = true 不生效，页面进入时，播放器上显示播放按钮供用户主动点击触发播放。
* 对于其他非 X5 内核的平台，为保证页面进入时可自动播放，会默认关闭声音播放，并显示“取消静音”按钮，供用户主动开启声音。

由于浏览器种类众多，如出现自动播放相关新问题，请将案例反馈给我们，我们将统一记录并反馈进展。

### Tip2：视频类资源地址必须有文件扩展名（即文件后缀）
由于浏览器无法解析资源格式。因此对于视频类资源，应在地址中通过后缀名显式声明资源格式，否则可能会导致视频无法正常播放：
* Web 态 live-player 组件目前支持 mp4、mov、m4v、ogg、m3u8 等格式，参见上述“主流格式支持”小节。
* 当 live-player 组件的 **src 属性值没有文件扩展名，视频资源会被按照 mp4 格式来进行解码播放**。

### Tip3：在部分浏览器下，实时视频播放器会遮挡其他页面元素 / 小窗播放问题的解决方案
**案例分析：**
微信、百度 APP、UC 等浏览器实现了自身的播放器控件，劫持了默认内核提供的播放器样式和逻辑，从而使得基于 H5 video 实现的 Web 态 live-player 组件出现了以下问题：
* 在 Android 系统的微信平台、百度 APP 和 UC 等国产移动浏览器下，live-player 组件的播放器会覆盖到页面其他内容之上，且无法通过 z-index 控制层级，从而导致一些交互失效（比如无法上下滑动触发切换视频）。
* 在 OPPO 手机下的百度 APP，会出现小窗播放。

**解决方案：**
Web 态针对不同浏览器做了尽可能的修复，以解决此问题。已修复的包括 QQ、Android 微信、QQ 浏览器等基于 X5 内核的平台，百度 APP。但由于浏览器种类众多，有可能存在我们暂未覆盖到的情况。如仍遇到上述问题，请您将案例反馈给我们，我们将统一记录并反馈进展。
