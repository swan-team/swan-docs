---
title: video 视频
header: develop
nav: component
sidebar: media_video
---
 


**解释**：视频，客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，不支持嵌套在其它组件中使用。



## 代码示例

<a href="swanide://fragment/6ff331dd200c341caea6ed1fe3ba85811576152071098" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/video.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>



###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/controls.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例1 - controls  

<a href="swanide://fragment/1d10a86e191b4738516ec73594f6cdd51574846726432" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="video-wrap">
        <video style="width: 100%;"
               id="myVideo"
               src="{{src}}"
               controls="{{controls}}"
               >
        </video>
    </view>
    <button hover-class="hover" type="primary" bindtap="controls">显示默认播放控件</button>   
</view>
```

* 在 js 文件中

```javascript
Page({
    data: {
        src: 'https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4',
        controls: true
    },
    controls() {
        this.setData({
            controls: !this.data.controls
        });
    }
})
```

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/video-title.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div> 
</div>

###  代码示例2 - title  

<a href="swanide://fragment/687b1ab6bd713b0fa80553503515d6651574851958216" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="video-wrap">
        <video style="width: 100%;"
               id="myVideo"
               src="https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4"
               title="全屏title">
        </video>
    </view>
</view>
```

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/direction.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div> 
</div>

###  代码示例3 - direction  

<a href="swanide://fragment/5a3e88566c4579b2b373ea6b1f4f7a631574853407212" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="video-wrap">
        <video style="width: 100%;"
               id="myVideo"
               src="{{src}}"
               direction="{{direction}}"
               >
        </video>
    </view>
    <button data-direction='0' type="primary" bindtap="changeFullScreen">正常竖向</button>
     <button data-direction='90' type="primary" bindtap="changeFullScreen">屏幕顺时针90度</button>
      <button data-direction='-90' type="primary" bindtap="changeFullScreen" >屏幕逆时针90度</button>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        src: 'https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4',
        direction: 0
    },
    changeFullScreen(e) {
        this.setData('direction', +e.target.dataset.direction);
    }
});
```
###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/showProgress.jpeg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例4 - show-progress  

<a href="swanide://fragment/6d40cf6c497c6eecf9f044a4ff9ff0901574854124112" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="video-wrap">
        <video style="width: 100%;"
               id="myVideo"
               src="https://b.bdstatic.com/swan-temp/940fe716b0eaad38f47b209d61657490.mp4"
               show-progress="{{true}}">
        </video>
    </view>
</view>
```

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/showNoWIfiTip.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例5 - show-no-wifi-tip  

<a href="swanide://fragment/f29d4f8d9d6884709607949f354aa7b91574854980912" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="video-wrap">
        <video style="width: 100%;"
               id="myVideo"
               src="{{src}}"
               show-no-wifi-tip="{{true}}"
               >
        </video>
    </view>
</view>
```

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/video1.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/video2.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  整体代码示例  

<a href="swanide://fragment/cf193e3b46933a9c48cdf78994ca79cf1574845335256" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="video-wrap">
        <video style="width: 100%;"
               id="myVideo"
               src="{{src}}"
               initial-time="{{initialTime}}"
               duration="48"
               controls="{{controls}}"
               autoplay="{{false}}"
               loop="{{false}}"
               muted="{{voice}}"
               objectFit="{{objectFit}}"
               poster="{{posterSrc}}"
               page-gesture="{{pageGesture}}"
               direction='{{0}}'
               show-progress="{{progressGesture}}"
               show-fullscreen-btn="{{fullscreenBtn}}"
               enable-progress-gesture="{{false}}"
               danmu-list="{{danmuList}}"
               danmu-btn="{{true}}"
               enable-danmu="{{true}}"
               show-play-btn="{{playBtn}}"
               show-center-play-btn="{{centerPlayBtn}}"
               show-no-wifi-tip="{{noWifiTip}}"
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
                    <input bindinput="bindInput" class="swan-input" type="text" value="baidu" placeholder="在此处输入弹幕内容" />
                </view>
            </view>
        </view>
        <view class="btn-area">
        <button class="page-body-button" type="primary" formType="reset">发送弹幕</button>

            <view class="page-section-btns bottom-border">
                <view hover-class="hover" bindtap="initialTime">指定初始播放位置为20</view>
                <view hover-class="hover" bindtap="controls">显示默认播放控件</view>
                <view hover-class="hover" bindtap="loop">设置循环播放</view>
            </view>
            
            <view class="page-section-btns bottom-border">
                <view hover-class="hover" bindtap="voice">点击{{voice ? '有音':'无音'}}</view>
                <view hover-class="hover" data-set="contain" bindtap="objectFit">包含容器</view>
                <view hover-class="hover" data-set="fill" bindtap="objectFit">填充容器</view>
            </view>

            <view class="page-section-btns bottom-border">
                <view hover-class="hover" data-set="cover" bindtap="objectFit">覆盖容器</view>
                <view hover-class="hover" bindtap="pageGesture">开启手势调节亮度与音量</view>
                <view hover-class="hover" bindtap="fullscreenBtn">{{fullscreenBtn?'不显示':'显示'}}全屏按钮</view>
            </view>
               
            <view class="page-section-btns bottom-border">
                <view hover-class="hover" bindtap="progressGesture">去掉全屏播放时手势控制进度</view>
                <view hover-class="hover" bindtap="playBtn">{{playBtn ? '': '不'}}显示视频底部控制栏的播放按钮</view>
                <view hover-class="hover" bindtap="centerPlayBtn">{{centerPlayBtn ? '': '不'}}显示视频中间的播放按钮</view>
            </view>

            <view class="page-section-btns bottom-border">
                <view hover-class="hover" bindtap="noWifiTip">wifi/4g浮层</view>
                <view hover-class="hover" bindtap="nextVideo">切换视频地址</view>
            </view>
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
        voice: false,
        posterSrc: "",
        initialTime: '0',
        objectFit: '',
        pageGesture: 'false',
        fullscreenBtn: 'true',
        playBtn: 'true',
        centerPlayBtn: 'true',
        noWifiTip: 'true',
        danmuList: [{
            text: '第 1s 出现的弹幕',
            color: '#6895FF',
            time: 1
        }, {
            text: '第 3s 出现的弹幕',
            color: '#6895FF',
            time: 3
        }],
        sendInfo: '',
        userMessage: ''
    },
    initialTime() {
        this.setData({
            initialTime: '20'
        });
    },
    controls() {
        this.setData({
            controls: !this.data.controls
        });
    },
    loop() {
        this.setData({
            loop: true
        });
        swan.showToast({
            title: '设置循环播放成功',
            icon: 'none'
        });
    },
    voice() {
        this.setData({
            voice: !this.data.voice
        });
    },
    objectFit (e) {
        this.setData({
            objectFit: e.currentTarget.dataset.set
        });
        console.log('a', e.currentTarget.dataset.set);
    },
    pageGesture() {
        this.setData({
            pageGesture: true
        });
    },
    fullscreenBtn() {
        this.setData({
            fullscreenBtn: !this.data.fullscreenBtn
        });
    },
    playBtn() {
        this.setData({
            playBtn: !this.data.playBtn
        });
    },
    centerPlayBtn(){
        this.setData({
            centerPlayBtn: !this.data.centerPlayBtn
        });
    },

    noWifiTip() {
        this.setData({
            noWifiTip: !this.data.noWifiTip
        });
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
    nextVideo: function (e) {
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
        });
    },
    cleanInput() {
        this.videoContext.sendDanmu({
            text: this.getData('userMessage')
        });
    }
});
```
##  属性说明 

|属性名 |类型  |默认值  | 必填 |说明|最低支持版本|
|:---- | :---- | :---- |:---- |:---- |:---- |
|src|String|  | 是 |视频的资源地址，支持云文件ID。|3.120.2 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|title| String | | 否 | 视频标题，全屏时在视频顶部展示。|3.120.2 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a> |
|initial-time|Number|  | 否 |指定视频初始播放位置|-|
|controls|Boolean|true|否|是否显示默认播放控件（播放/暂停按钮、播放进度、时间）|-|
|autoplay|Boolean|false|否|是否自动播放|-|
|loop|Boolean|false|否|是否循环播放|-|
|muted|Boolean|false|否|是否静音播放|-|
|objectFit|String|contain|否|当视频大小与 video 容器大小不一致时，视频的表现形式。contain ：包含，fill ：填充，cover ：覆盖|-|
|poster|String|  |否|视频封面的图片网络资源地址，支持云文件ID。|3.120.2 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|page-gesture|  Boolean|    false|否|    在非全屏模式下，是否开启使用手势调节亮度与音量，兼容vslide-gesture属性。|-|
|direction|Number|  |否|按设置的视频全屏方向进入全屏。不指定视频全屏方向时则根据设备方向判断全屏方向。0：正常竖向，90：屏幕顺时针90度，-90：屏幕逆时针90度。| 3.90.29<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|show-progress| Boolean|    true|否| 若不设置，宽度大于240时才会显示。|-|
|show-fullscreen-btn|   Boolean|    true|否| 是否显示全屏按钮|-|
|enable-progress-gesture|   Boolean |true|否|    是否开启使用手势控制进度|-|
|danmu-list|    Array.&lt;object&gt;|       |否|弹幕列表|-|
|danmu-btn| Boolean|    false|否|    是否显示弹幕按钮，只在初始化时有效，不能动态变更。|-|
|enable-danmu   |Boolean    |false  |否|是否展示弹幕，只在初始化时有效，不能动态变更。|-|
|show-play-btn| Boolean |true|否|    是否显示视频底部控制栏的播放按钮|-|
|show-center-play-btn|  Boolean |true   |否|是否显示视频中间的播放按钮|-|
|show-mute-btn|Boolean|false|否|是否显示静音按钮。|3.120.2 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|show-no-wifi-tip|Boolean|true|否|非wifi环境下是否显示继续播放浮层。| 3.100.4 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|vslide-gesture|Boolean|false|否|非全屏模式下，是否开启亮度与音量调节手势，兼容 page-gesture 属性 。| 3.120.2 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|vslide-gesture-in-fullscreen|Boolean|true|否|全屏模式下，是否开启亮度与音量调节手势。| 3.120.2<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|enable-play-gesture|Boolean|false|否|是否开启播放手势，即双击切换播放/暂停。|3.120.2<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|bindplay|EventHandle| |否|当开始播放时触发 play 事件|-|
|bindpause|EventHandle|  |否|当暂停播放时触发 pause 事件|-|
|bindended|EventHandle|  |否|当播放到末尾时触发 ended 事件|-|
|bindtimeupdate|EventHandle|  |否|播放进度变化时触发，event.detail = {currentTime, duration} 。|-|
|bindfullscreenchange|EventHandle|  |否|当视频进入和退出全屏时触发，event.detail = {fullscreen, direction}，direction 取为 vertical 或 horizontal|-|
|bindwaiting|   EventHandle| |否|        视频出现缓冲时触发|-|
|binderror| EventHandle | | 否 |视频播放出错时触发|-|

###  objectFit 有效值 

| 值 | 说明 |
| :---- | :---- |
| contain | 包含 |
| fill | 填充 |
| cover | 覆盖 |

###  direction 有效值 

| 值 | 说明 |
| :---- | :---- |
| 0 | 正常竖向 |
| 90 | 屏幕顺时针90度 |
| -90 | 屏幕逆时针90度 |

###  主流格式支持  

|格式|    Android|    IOS|
| :---- | :---- |:---|
|mp4|   是   |是|
|mov|   是   |是|
|m4v|   是   |是|
|3gp|   是   |是|
|avi|   是   |是|
|m3u8|  是   |是|
|webm|  是|  否|
|flv    |   是   |是|
|mkv|   是   |是|
|rmvb|是 |是|
|rm|    是   |是|
|ogg|   是   |是|

###  主流编码格式支持 

|格式|    Android|    IOS|
| :---- | :---- |:---|
|H.263  |是| 是|
|H.264  |是|是|
|HEVC   |是| 是|
|MPEG-4 |是| 否|
|VP8|   是   |否|
|VP9|   是   |否|


##  Bug & Tip 
* Tip：相关API：[createVideoContex](https://smartprogram.baidu.com/docs/develop/api/media/videocontext_swan-createVideoContext/)
* Tip：`<video />` 默认宽度 300px、高度 225px。


