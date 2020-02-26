---
title: video 视频
header: develop
nav: component
sidebar: media_video
webUrl: https://qft12m.smartapps.cn/subPackages/componentPackage/pages/video/video
---



**解释**：视频，v3.70.0 开始支持[同层渲染](https://smartprogram.baidu.com/docs/develop/component/native/)。

##  属性说明

|属性名 |类型  |默认值  | 必填 |说明|最低支持版本|Web 态说明|
|:---- | :---- | :---- |:---- |:---- |:---- |:---- |
|src|String|  | 是 |视频的资源地址，支持云文件ID。|3.120.2 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|不支持设置云文件 ID |
|title| String | | 否 | 视频标题，全屏时在视频顶部展示。|3.120.2 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a> |暂不支持，video 全屏模式无标题 |
|initial-time|Number|  | 否 |指定视频初始播放位置|-|-|
|controls|Boolean|true|否|是否显示默认播放控件（播放/暂停按钮、播放进度、时间）|-|-|
|autoplay|Boolean|false|否|是否自动播放|-| 存在浏览器兼容问题，详见下方小程序 Web 态 Tip |
|loop|Boolean|false|否|是否循环播放|-|-|
|muted|Boolean|false|否|是否静音播放|-|-|
|objectFit|String|contain|否|当视频大小与 video 容器大小不一致时，视频的表现形式。contain ：包含，fill ：填充，cover ：覆盖|-|-|
|poster|String|  |否|视频封面的图片网络资源地址，支持云文件ID。|3.120.2 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|-|
|page-gesture|  Boolean|    false|否|    在非全屏模式下，是否开启使用手势调节亮度与音量，兼容vslide-gesture属性。|-| 使用了降级支持，设置为true后，控制台有警告提示 |
|direction|Number|  |否|按设置的视频全屏方向进入全屏。不指定视频全屏方向时则根据设备方向判断全屏方向。0：正常竖向，90：屏幕顺时针90度，-90：屏幕逆时针90度。| 3.90.29<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|暂不支持|
|show-progress| Boolean|    true|否| 若不设置，宽度大于240时才会显示。|-|-|
|show-fullscreen-btn|   Boolean|    true|否| 是否显示全屏按钮|-|-|
|enable-progress-gesture|   Boolean |true|否|    是否开启使用手势控制进度|-|暂不支持，设置为 true 时，控制台有警告提示|
|danmu-list|    Array.&lt;object&gt;|       |否|弹幕列表|-|-|
|danmu-btn| Boolean|    false|否|    是否显示弹幕按钮，只在初始化时有效，不能动态变更。|-|暂不支持，设置为 true 时，控制台有警告提示|
|enable-danmu   |Boolean    |false  |否|是否展示弹幕，只在初始化时有效，不能动态变更。|-|-|
|show-play-btn| Boolean |true|否|    是否显示视频底部控制栏的播放按钮|-|-|
|show-center-play-btn|  Boolean |true   |否|是否显示视频中间的播放按钮|-|Web 态目前是矩形中间大按钮，暂不支持隐藏，设置为 false 时，控制台有警告提示|
|show-mute-btn|Boolean|false|否|是否显示静音按钮。|3.120.2 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|暂不支持|
|show-no-wifi-tip|Boolean|true|否|非wifi环境下是否显示继续播放浮层。| 3.100.4 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|暂不支持|
|vslide-gesture|Boolean|false|否|非全屏模式下，是否开启亮度与音量调节手势，兼容 page-gesture 属性 。| 3.120.2 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|暂不支持|
|vslide-gesture-in-fullscreen|Boolean|true|否|全屏模式下，是否开启亮度与音量调节手势。| 3.120.2<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|暂不支持|
|enable-play-gesture|Boolean|false|否|是否开启播放手势，即双击切换播放/暂停。|3.120.2<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|暂不支持|
|bindplay|EventHandle| |否|当开始播放时触发 play 事件|-|-|
|bindpause|EventHandle|  |否|当暂停播放时触发 pause 事件|-|-|
|bindended|EventHandle|  |否|当播放到末尾时触发 ended 事件|-|-|
|bindtimeupdate|EventHandle|  |否|播放进度变化时触发，event.detail = {currentTime, duration} 。|-|-|
|bindfullscreenchange|EventHandle|  |否|当视频进入和退出全屏时触发，event.detail = {fullscreen, direction}，direction 取为 vertical 或 horizontal|-|-|
|bindwaiting|   EventHandle| |否|        视频出现缓冲时触发|-|-|
|binderror| EventHandle | | 否 |视频播放出错时触发|-|Web 态目前触发 error 后直接展示默认错误信息，不执行开发者的 error 回调函数|

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


## 示例

<a href="swanide://fragment/510791e688e8d50ce5362bffb9d672501577360707477" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/video.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例

<div class="m-doc-custom-examples">
    </div>
</div>

###  代码示例1

<a href="swanide://fragment/cf193e3b46933a9c48cdf78994ca79cf1574845335256" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


:::codeTab
```swan
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



```js

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
:::

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

###  代码示例2 - controls

<a href="swanide://fragment/1d10a86e191b4738516ec73594f6cdd51574846726432" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>



:::codeTab
```swan
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



```js
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
:::
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

###  代码示例3 - title

<a href="swanide://fragment/687b1ab6bd713b0fa80553503515d6651574851958216" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>



:::codeTab
```swan
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
:::
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

###  代码示例4 - direction

<a href="swanide://fragment/5a3e88566c4579b2b373ea6b1f4f7a631574853407212" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>



:::codeTab
```swan
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
:::
### 图片示例

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

###  代码示例5 - show-progress

<a href="swanide://fragment/6d40cf6c497c6eecf9f044a4ff9ff0901574854124112" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>



:::codeTab
```swan
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
:::
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

###  代码示例6 - show-no-wifi-tip

<a href="swanide://fragment/f29d4f8d9d6884709607949f354aa7b91574854980912" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>



:::codeTab
```swan
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
:::

##  Bug & Tip
* Tip：相关API：[createVideoContex](https://smartprogram.baidu.com/docs/develop/api/media/videocontext_swan-createVideoContext/)
* Tip：`<video />` 默认宽度 300px、高度 225px。
* Tip：v3.70.0 起 video 支持同层渲染，更多请参考[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)。
* Tip：同一页面下的video标签不应太多，建议不超过5个，视频列表功能建议使用image列表，选中时替换为video。
* Tip：避免多个video同时播放，视频预览建议使用gif方案，使用video会降低性能和体验。

## 小程序 Web 态 Tip

### Tip：在部分浏览器下，视频无法自动播放（autoplay 属性无效）的解决方案
**案例分析：**
出于用户体验、节省流量等原因，iOS 的 Safari、版本号 66 及以上的 Chrome、以及大部分国产移动浏览器禁止视频在非静音状态下自动播放。因此，Web 态的 video 组件中 autoplay 属性无效。基于此背景，如果开发者同时设置了 “autoplay=true, controls=false”，会导致：视频未自动播放，且页面无播放按钮，用户无法触发视频的播放。

**解决方案：**
**方案一：** 请勿设置 controls=false ，且将 show-play-btn 属性设置为 true，以显示控制条以及控制条上的播放按钮，让用户可以使用 video 组件自带的播放控件控制播放和暂停。
**方案二：** 使用 cover-view/cover-image 自行实现播放/暂停按钮来控制视频的播放（通过监听用户点击容器的事件，来决定播放按钮是否展示；在用户点击播放按钮的时候，通过 VideoContext.play 和 VideoContext.pause 来控制视频的暂停和播放）。
**方案三：** 由于上述浏览器仅禁止了非静音状态的视频自动播放。因此开发者可以设置静音，以达到自动播放的目的；同时，提供一个可供用户取消静音的按钮以让用户手动打开声音。

### Tip：视频类资源地址必须有文件扩展名（即文件后缀）
由于浏览器无法解析资源格式。因此对于视频类资源，应在地址中通过后缀名显式声明资源格式，否则可能会导致视频无法正常播放：
* Web 态 video 组件目前支持 mp4、mov、m4v、ogg、m3u8 等格式。有些在小程序内支持的格式在 Web 态环境下不一定支持。
* Web 态 video 组件的 src 属性值如果没有文件扩展名，视频会被按照 mp4 格式来进行解码播放。

### Tip：在部分浏览器下，视频播放器会遮挡其他页面元素 / 小窗播放问题的解决方案
**案例分析：**
微信、手机百度、UC 等浏览器实现了自身的播放内核，劫持了默认内核提供的播放器样式和逻辑，从而使得基于 H5 video 实现的 Web 态 video 组件出现了以下问题：
* 在 Android 系统的微信平台、百度 APP 和 UC 浏览器等国产移动浏览器下，Video 组件的播放器层级会覆盖到其他页面内容之上，且无法通过 z-index 控制层级，从而导致一些交互失效（比如无法上下滑动触发切换视频）。
* 在 OPPO 手机下的手机百度，会出现小窗播放。

**解决方案：**
以上问题在 Web 态侧得到了解决（针对不同浏览器使用的不同内核来开启不同的播放模式）。由于浏览器内核种类众多，有可能存在我们暂未覆盖到的或者该浏览器不支持内核播放模式切换的情况，此时仍然会出现此类问题。如出现上述情况，请您将案例反馈给我们，我们将统一记录并反馈进展。