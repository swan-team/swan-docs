---
title: video 视频
header: develop
nav: component
sidebar: media_video
---
 


**解释**：视频，客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，不支持嵌套在其它组件中使用。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/video.png"  class="demo-qrcode-image" />


**属性说明**：

|属性名 |类型  |默认值  | 必填 |说明|
|---- | ---- | ---- |---- |---- |
|src|String|  | 是 |视频的资源地址|
|initial-time|Number|  | 否 |指定视频初始播放位置|
|controls|Boolean|true|否|是否显示默认播放控件（播放/暂停按钮、播放进度、时间）|
|autoplay|Boolean|false|否|是否自动播放|
|loop|Boolean|false|否|是否循环播放|
|muted|Boolean|false|否|是否静音播放|
|objectFit|String|contain|否|当视频大小与 video 容器大小不一致时，视频的表现形式。contain ：包含，fill ：填充，cover ：覆盖|
|poster|String|  |否|视频封面的图片网络资源地址|
|page-gesture|	Boolean|	false|否|	在非全屏模式下，是否开启使用手势调节亮度与音量。|
|direction|Number|	|否|按设置的视频全屏方向进入全屏。不指定视频全屏方向时则根据设备方向判断全屏方向。0：正常竖向，90：屏幕顺时针90度，-90：屏幕逆时针90度 <font color="#4183c4">百度 APP 11.12 以上</font>|
|show-progress|	Boolean|	true|否|	若不设置，宽度大于240时才会显示。|
|show-fullscreen-btn|	Boolean|	true|否|	是否显示全屏按钮|
|enable-progress-gesture|	Boolean	|true|否|	是否开启使用手势控制进度|
|danmu-list|	` Array.<object> `|	 	|否|弹幕列表|
|danmu-btn|	Boolean|	false|否|	是否显示弹幕按钮，只在初始化时有效，不能动态变更。|
|enable-danmu	|Boolean	|false	|否|是否展示弹幕，只在初始化时有效，不能动态变更。|
|show-play-btn|	Boolean	|true|否|	是否显示视频底部控制栏的播放按钮|
|show-center-play-btn|	Boolean	|true	|否|是否显示视频中间的播放按钮|
|show-no-wifi-tip|Boolean|true|否|非wifi环境下是否显示继续播放浮层 <font color="#4183c4">基础库 3.100.4 以上</font>|
|bindplay|EventHandle| |否|当开始播放时触发 play 事件|
|bindpause|EventHandle|  |否|当暂停播放时触发 pause 事件|
|bindended|EventHandle|  |否|当播放到末尾时触发 ended 事件|
|bindtimeupdate|EventHandle|  |否|播放进度变化时触发，event.detail = {currentTime, duration} 。|
|bindfullscreenchange|EventHandle|  |否|当视频进入和退出全屏是触发，event.detail = {fullscreen, direction}，direction 取为 vertical 或 horizontal|
|bindwaiting|	EventHandle| |否|		视频出现缓冲时触发|
|binderror|	EventHandle	| | 否 |视频播放出错时触发|

**objectFit 有效值**:

| 值 | 说明 |
| ---- | ---- |
| contain | 包含 |
| fill | 填充 |
| cover | 覆盖 |

**direction 有效值**:

| 值 | 说明 |
| ---- | ---- |
| 0 | 正常竖向 |
| 90 | 屏幕顺时针90度 |
| -90 | 屏幕逆时针90度 |

**主流格式支持**：

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

**主流编码格式支持**：

|格式|	Android|	IOS|
|--|--|--|
|H.263	|是|	是|
|H.264	|是|是|
|HEVC	|是|	是|
|MPEG-4	|是|	否|
|VP8|	是	|否|
|VP9|	是	|否|



**示例**：
<a href="swanide://fragment/b4de2816258292dec183838859e8c57f1566389828332" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="video-wrap">
        <video style="width: 100%;"
               id="myVideo"
               src="{{src}}"
               initial-time="0"
               duration="48"
               controls='true'
               autoplay="{{autoplay}}"
               loop="false"
               muted="false"
               objectFit="fill"
               poster="{{posterSrc}}"
               page-gesture='true'
               direction='0'
               show-progress="true"
               show-fullscreen-btn="true"
               enable-progress-gesture="true"
               show-no-wifi-tip="true"
               danmu-list="{{danmuList}}"
               danmu-btn="true"
               enable-danmu="true"
               show-play-btn="true"
               show-center-play-btn="true"
               bindplay="play"
               bindpause="pause"
               bindended="ended" 
               bindfullscreenchange="fullscreen" 
               bindwaiting="waiting"
               binderror="error"
               >
        </video>
    </view>
    <form bindreset="cleanInput">
        <view class="swan-cells">
            <view class="swan-cell swan-cell_input">
            <view class="swan-cell__hd">
                <view class="swan-label">弹幕内容</view>
            </view>
            <view class="swan-cell__bd">
                <input bindinput="bindInput" class="swan-input" type="text" placeholder="在此处输入弹幕内容" />
            </view>
            </view>
        </view>
        <view class="btn-area">
            <button class="page-body-button" type="primary" formType="reset">发送弹幕</button>
            <button class="btn" bindtap="next" type="primary">切换视频地址</button>
        </view>
    </form>
</view>
```

* 在 js 文件中

```javascript
Page({
    data: {
        current: 0,
        srcList: ['https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4', 'https://vd3.bdstatic.com/mda-ib0u8x1bvaf00qa8/mda-ib0u8x1bvaf00qa8.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D'],
        src: 'https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4',
        loop: false,
        autoplay: false,
        posterSrc: "",
        danmuList:[{
            text: '第 1s 出现的弹幕',
            color: '#ff0000',
            time: 1
            }, {
            text: '第 3s 出现的弹幕',
            color: '#ff00ff',
            time: 3
        }],
        sendInfo: '',
        userMessage: ''
    },
    onReady() {
        this.videoContext = swan.createVideoContext('myVideo')
    },
    play: function (e) {
        console.log('play!');
    },
    pause: function (e) {
        console.log('pause');
    },
    fullscreen: function (e) {
        console.log('fullscreenchange!! 参数是' + JSON.stringify(e));
    },
    ended: function (e) {
        console.log('ended');
        this.next();
    },
    next: function (e) {
        let list = this.getData('srcList');
        let current = (this.getData('current') + 1) % list.length;
        this.setData('src', list[current]);
        this.setData('current', current);
    },
    waiting: function (e) {
        console.log('waiting');
    },
    error: function (e) {
        console.log('error');
    },
    setloop: function (e) {
        this.setData('loop', !this.getData('loop'));
    },
    setautoplay: function (e) {
        let autoplay = this.getData('autoplay');
        this.setData('autoplay', !autoplay);
    },
    bindInput(e) {
        this.setData({
            userMessage: e.detail.value
        })
    },
    cleanInput() {
        this.videoContext.sendDanmu({
            text: this.getData('userMessage')
        })
    },
    
});
```


**Bug & Tip**：
* 相关API：[createVideoContex](https://smartprogram.baidu.com/docs/develop/api/media/videocontext_swan-createVideoContext/)
* `<video />` 默认宽度 300px、高度 225px。
