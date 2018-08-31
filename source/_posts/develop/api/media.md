---
title: 媒体
header: develop
nav: api
sidebar: media
---
### 媒体 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media_image/#previewImage">chooseImage</a>|从本地相册选择图片或使用相机拍照。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media_image/#previewImage">previewImage</a>|预览图片|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media_image/#getImageInfo">getImageInfo</a>|获取图片信息|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media_image/#saveImageToPhotosAlbum">saveImageToPhotosAlbum</a>|保存图片到系统相册，需要用户授权。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media_recorder/#getRecorderManager">getRecorderManager</a>|获取全局唯一的录音管理器recorderManager。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media_backgroundAudioManager/#getBackgroundAudioManager">getBackgroundAudioManager</a>|获取全局唯一的背景音频管理器 backgroundAudioManager。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media_createInnerAudioContext/#createInnerAudioContext">createInnerAudioContext</a>|创建并返回内部 audio 上下文 innerAudioContext 对象。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media_video/#chooseVideo">chooseVideo</a>|拍摄视频或从手机相册中选视频，返回视频的临时文件路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media_video/#saveVideoToPhotosAlbum">saveVideoToPhotosAlbum</a>|保存视频到系统相册。需要用户授权。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media_videoContext/#createVideoContext">createVideoContext</a>|创建并返回 video 上下文 videoContext 对象。通过 videoId 跟一个 video 组件绑定，通过它可以操作一个 video 组件|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media_livePlayerContext/#createLivePlayerContext">createLivePlayerContext</a>|操作对应的 <live-player/> 组件。 创建并返回 live-player 上下文 LivePlayerContext 对象。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/media_cameraContext/#createCameraContext">createCameraContext</a>|创建并返回 camera 上下文 cameraContext对象，cameraContext 与页面的 camera 组件绑定，一个页面只能有一个 camera，通过它可以操作对应的组件。|

<!--
图片
-----

### chooseImage

**解释：**从本地相册选择图片或使用相机拍照。

**参数：**Object

**Object参数说明：**

|参数 | 类型  |必填 | 说明|
|---- | ---- | ---- | ----|
|count  | Number | 否  | 最多可以选择的图片张数，默认 9|
|sizeType  |  String Array| 否  | original 原图，compressed 压缩图，默认二者都有|
|sourceType | String Array |否 |  album 从相册选图，camera 使用相机，默认二者都有|
|success |Function  |  是 | 成功则返回图片的本地文件路径列表 tempFilePaths|
|fail  |  Function |   否  | 接口调用失败的回调函数|
|complete   | Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**注意：文件的临时路径，在智能小程序本次启动期间可以正常使用，如需持久保存，需在主动调用 swan.saveFile，在智能小程序下次启动时才能访问得到。**


**success返回参数说明：**

|参数  |类型|  说明 |
|---- | ---- | ---- |
|tempFilePaths  | String Array |图片的本地文件路径列表 |
|tempFiles  | Object Array |图片的本地文件列表，每一项是一个 File 对象|

**tempFiles 对象结构如下:**

|字段 | 类型  |说明|
|---- | ---- | ---- |
|path  |  String  |本地文件路径|
|size   | Number | 本地文件大小（单位：B）|


**示例：**

```js
swan.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
        // 成功则返回图片的本地文件路径列表 tempFilePaths
        console.log(res.tempFilePaths);
        // 文件列表对象
        console.log(res.tempFiles);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});

```

### previewImage

**解释：**预览图片。

**参数：**Object

**Object参数说明：**

|参数 | 类型 | 必填  |说明|
|---- | ---- | ---- | ----|
|current |String | 否  | 当前显示图片的链接，不填则默认为 urls 的第一张|
|urls   | String Array |是 |  需要预览的图片链接列表|
|success| Function |   否  | 接口调用成功的回调函数|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|


**示例：**

```js
swan.previewImage({
    current: '', // 当前显示图片的http链接
    urls: [], // 需要预览的图片http链接列表
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```

**Bug & Tip**

1、bug: 开发者工具 1.8.0 current 参数为当前显示图片的索引值。
2、tip: 不支持预览本地文件。

### getImageInfo

**解释：**获取图片信息。

**参数：**Object

**Object参数说明：**

|参数  |类型|  必填 | 说明|
|---- | ---- | ---- | ----|
|src |String | 是  | 图片的路径，可以是相对路径、临时文件路径或存储文件路径,不支持网络图片|
|success| Function  |  否  | 接口调用成功的回调函数|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数  |类型 | 说明|
|---- | ---- | ---- |
|width |  Number | 图片宽度（单位：px）|
|height | Number | 图片高度（单位：px）|
|path  |  String | 返回图片的本地路径|


**示例：**


```js
swan.getImageInfo({
    src: '/xxx/xxx.jpg',
    success: function (res) {
        // 成功则返回图片高，宽，本地路径
        console.log(res.width);
        console.log(res.height);
        console.log(res.path);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});

```

### saveImageToPhotosAlbum

**解释：**保存图片到系统相册。需要用户授权

**参数：**Object

**Object参数说明：**

|参数名| 类型 | 必填 | 说明|
|---- | ---- | ---- |---- |
|filePath  |  String  |是 |  图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径|
|success |Function |   否  | 接口调用成功的回调函数|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明：**

|参数名| 类型|  说明|
|---- | ---- | ---- |
|errMsg  |String | 调用结果|


**示例：**

```js
swan.saveImageToPhotosAlbum({
    'filePath': '/xxx/xxx.jpg',
    success: function (res) {
        // 成功则返回图片本地路径
        console.log(res.filePath);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```

录音管理
-----

### getRecorderManager

**解释：**获取全局唯一的录音管理器`recorderManager`。

**参数：**无

**recorderManager 对象的方法列表：**

|方法 | 参数 | 说明 |
|---- | ---- | ---- |
|start | options | 开始录音 |
|pause | | 暂停录音 |
|resume | | 继续录音 |
|stop | | 停止录音 |
|onStart | callback | 录音开始事件 |
|onPause | callback | 录音暂停事件 |
|onStop | callback | 录音停止事件，会回调文件地址 |
|onError | callback | 录音错误事件, 会回调错误信息 |

**start(options) 说明：**

|属性 | 类型 | 必填 | 说明 |
|---- | ---- | ---- | ---- |
|duration |Number | 否 | 指定录音的时长，（单位：ms） ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）|
|sampleRate |Number |否 | 采样率，有效值 8000/16000/44100 |
|numberOfChannels |Number |否 | 录音通道数，有效值 1/2 |
|encodeBitRate |Number |否 | 编码码率，有效值见下表格 |
|format |String |否 | 音频格式，有效值 aac/pcm |

**其中，采样率和码率有一定要求，具体有效值如下：**

|采样率 | 编码码率 |
|---- | ---- |
|8000 | 16000 ~ 48000|
|16000| 24000 ~ 96000|
|44100| 64000 ~ 320000|

**onStop(callback) 回调结果说明：**

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|tempFilePath |String | 录音文件的临时路径 |

**onError(callback) 回调结果说明：**

|属性 | 类型 | 说明 |
|---- | ---- | ---- |
|errMsg |String | 错误信息 |

**示例：**

```javascript
const recorderManager = swan.getRecorderManager()

recorderManager.onStart(function() {
    // 开始录音事件
    console.log('recorder start')
});
recorderManager.onPause(function() {
    // 暂停录音事件
    console.log('recorder pause')
});
recorderManager.onStop(function() {
    // 停止录音事件
    console.log('recorder stop', res)
    const { tempFilePath } = res
});

const options = {
    duration: 10000,
    sampleRate: 44100,
    numberOfChannels: 1,
    encodeBitRate: 96000,
    format: 'aac'
};

recorderManager.start(options);

```

背景音频管理播放
-----

### getBackgroundAudioManager

**解释：**获取全局唯一的背景音频管理器 `backgroundAudioManager`。

**参数：**无

**backgroundAudioManager 对象的属性列表：**

|属性 | 类型 | 说明 | 只读 |
|---- | ---- | ---- | ---- |
|src |String | 音频的数据链接，用于直接播放。| 否 |
|startTime |Number | 开始播放的位置（单位：s），默认 0 | 否 |
|autoplay |Boolean| 是否自动开始播放，默认 false | 否 |
|loop |Boolean |是否循环播放，默认 false | 否 |
|duration |Number |当前音频的长度（单位：s），只有在当前有合法的 src 时返回 | 是 |
|currentTime |Number |当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位 | 是 |
|paused |Boolean |当前是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放 | 是 |
|buffered |Number |音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。 | 是 |
|title |String |音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。 | 否 |
|epname |String |专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 | 否 |
|singer |String |歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 | 否 |
|coverImgUrl |String |封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。 | 否 |

**backgroundAudioManager 对象的方法列表：**

|方法 | 参数 | 说明 |
|---- | ---- | ---- |
|play | 无 | 播放 |
|pause | 无 | 暂停 |
|stop | 无 | 停止 |
|seek | position | 跳转到指定位置（单位：s） |
|onCanplay | callback | 音频进入可以播放状态，但不保证后面可以流畅播放 |
|onPlay | callback | 音频播放事件 |
|onPause | callback | 音频暂停事件 |
|onStop | callback | 音频停止事件 |
|onEnded | callback | 音频自然播放结束事件 |
|onTimeUpdate | callback | 音频进度更新事件 |
|onError | callback | 音频播放错误事件 |
|onPrev | callback | 用户在系统音乐播放面板点击上一曲事件（iOS only） |
|onNext | callback | 用户在系统音乐播放面板点击下一曲事件（iOS only）|
|onWaiting | callback | 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 |

**示例：**

```javascript

const backgroundAudioManager = swan.getBackgroundAudioManager();

backgroundAudioManager.title = '此时此刻';
backgroundAudioManager.epname = '此时此刻';
backgroundAudioManager.singer = '许巍';
backgroundAudioManager.coverImgUrl = 'xxx';
backgroundAudioManager.src = 'xxx';

```

音频组件控制
-----

### createInnerAudioContext

**解释：**创建并返回内部 audio 上下文 `innerAudioContext` 对象。

**参数：**无

**innerAudioContext 对象的属性列表：**

|方法 | 参数 | 说明 | 只读 |
|---- | ---- | ---- | ---- |
|src |String | 音频的数据链接，用于直接播放。| 否 |
|startTime |Number | 开始播放的位置（单位：s），默认 0 | 否 |
|autoplay |Boolean| 是否自动开始播放，默认 false | 否 |
|loop |Boolean |是否循环播放，默认 false | 否 |
|duration |Number |当前音频的长度（单位：s），只有在当前有合法的 src 时返回 | 是 |
|currentTime |Number |当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位 | 是 |
|paused |Boolean |当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放 | 是 |
|buffered |Number |音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。 | 是 |
|volume |Number |音量。范围 0~1。 | 否 |

**innerAudioContext 对象的方法列表：**

|方法 | 参数 | 说明 |
|---- | ---- | ---- |
|play | 无 | 播放 |
|pause | 无 | 暂停 |
|stop | 无 | 停止 |
|seek | position | 跳转到指定位置（单位：s）|
|destroy | 无 | 销毁当前实例 |
|onCanplay | callback | 音频进入可以播放状态，但不保证后面可以流畅播放 |
|onPlay | callback | 音频播放事件 |
|onPause | callback | 音频暂停事件 |
|onStop | callback | 音频停止事件 |
|onEnded | callback | 音频自然播放结束事件 |
|onTimeUpdate | callback | 音频进度更新事件 |
|onError | callback | 音频播放错误事件 |
|onWaiting | callback | 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 |
|onSeeking | callback | 音频进行 seek 操作事件 |
|onSeeked | callback | 音频完成 seek 操作事件 |
|offCanplay | callback | 取消监听 onCanplay 事件 |
|offPlay | callback | 取消监听 onPlay 事件 |
|offPause | callback | 取消监听 onPause 事件 |
|offStop | callback | 取消监听 onStop 事件 |
|offEnded | callback | 取消监听 onEnded 事件 |
|offTimeUpdate | callback | 取消监听 onTimeUpdate 事件 |
|offError | callback | 取消监听 onError 事件 |
|offWaiting | callback | 取消监听 onWaiting 事件 |
|offSeeking | callback | 取消监听 onSeeking 事件 |
|offSeeked | callback | 取消监听 onSeeked 事件 |

**示例：**

```javascript

const innerAudioContext = swan.createInnerAudioContext();
innerAudioContext.src = 'xxx';
innerAudioContext.autoplay = true;
innerAudioContext.seek({
    position: 10
});
innerAudioContext.onPlay(function (res) {
    console.log('开始播放')
});

```

视频
-----

### chooseVideo

**解释：**拍摄视频或从手机相册中选视频，返回视频的临时文件路径。

**参数：**Object

**Object参数说明：**

|参数 | 类型  |必填 | 说明|
|---- | ---- | ---- | ----|
|sourceType | String Array |否 |  album 从相册选图，camera 使用相机，默认二者都有|
|compressed  | Boolean | 否  | 是否压缩所选的视频源文件，默认值为true，需要压缩|
|maxDuration  | Number | 否  | 拍摄视频最长拍摄时间，（单位：s）。最长支持 60 秒|
|success |Function  |  是 | 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明|
|fail  |  Function |   否  | 接口调用失败的回调函数|
|complete   | Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**


|参数  |  说明 |
|---- | ---- |
|tempFilePath | 选定视频的临时文件路径 |
|duration | 选定视频的时间长度 (单位：s)|
|size | 选定视频的数据量大小（单位：B）|
|height | 返回选定视频的长 |
|width | 返回选定视频的宽 |

**注：文件的临时路径，在智能小程序本次启动期间可以正常使用，如需持久保存，需在主动调用 swan.saveFile，在智能小程序下次启动时才能访问得到。**

**示例：**

```html
<button bind:tap="chooseVideo" type="primary">点击选择视频</button>
<video src="{{src}}" controls></video>
```

```javascript
Page({
    data: {
        sourceType: ['album', 'camera'],
        compressed: false,
        maxDuration: 60,
        src: ''
    },

    chooseVideo() {
        let self = this;
        swan.chooseVideo({
            sourceType: this.getData('sourceType'),
            compressed: this.getData('compressed'),
            maxDuration: this.getData('maxDuration'),
            success: function (res) {
                // 成功返回选定视频的临时文件路径
                self.setData('src', res.tempFilePath);
            },
            fail: function (err) {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```

### saveVideoToPhotosAlbum

**解释：**保存视频到系统相册。需要用户授权。

**参数：**Object

**Object参数说明：**

|参数名| 类型 | 必填 | 说明|
|---- | ---- | ---- |---- |
|filePath  |  String  |是 |  视频文件路径，可以是临时文件路径也可以是永久文件路径|
|success |Function |   否  | 接口调用成功的回调函数|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名| 类型|  说明|
|---- | ---- | ---- |
|filePath  |String | 调用结果,返回视频文件路径|


**示例：**

```js
swan.saveVideoToPhotosAlbum({
    'filePath': 'bdfile://xxx',
    success: function (res) {
        // 成功返回视频文件路径
        console.log(res.filePath);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```

视频组件控制
-----

### createVideoContext

**解释：**创建并返回 video 上下文 `videoContext` 对象。通过 videoId 跟一个 video 组件绑定，通过它可以操作一个 video 组件。

**参数：**videoId

**videoContext 对象的方法列表：**

|方法 | 参数 | 说明 |
|---- | ---- | ---- |
|play  |  无 |  播放  |
|pause |  无  | 暂停  |
|seek  |  position   | 跳转到指定位置（单位：s）    |
|sendDanmu |  danmu  | 发送弹幕，danmu 包含两个属性 text、color。  |
|requestFullScreen  | 无  | 进入全屏  |
|exitFullScreen | 无 |  退出全屏|

**示例：**

```html
<view>
    <video id="myVideo" src="https://example.baidu.com/xxxx"></video>
</view>
```
```js
const myVideo = swan.createVideoContext('myVideo');
myVideo.play();
```
直播组件控制
-----

### createLivePlayerContext

**解释：**操作对应的 `<live-player/>` 组件。 创建并返回 live-player 上下文 LivePlayerContext 对象。

**参数：**domId

**livePlayerContext 对象的方法列表：**

|方法 | 参数 | 说明|
|---- | ---- | ---- |
|play |Object | 播放  |
|stop |Object | 停止  |
|mute |Object| 静音 |
|requestFullScreen | Object |进入全屏|
|exitFullScreen| Object | 退出全屏|

**requestFullScreen 的 Object 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|direction |Number  |  是  | 有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）|
|success   |Function  |  否  | 接口调用成功的回调函数|
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**其他方法的 Object 参数列表：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success   |Function  |  否  | 接口调用成功的回调函数|
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

相机组件控制
-----

### createCameraContext

**解释：**创建并返回 camera 上下文 `cameraContext`对象，cameraContext 与页面的 camera 组件绑定，一个页面只能有一个 camera，通过它可以操作对应的组件

**参数：**无

**cameraContext 对象的方法列表：**

|方法 | 参数  |说明|
|---- | ---- | ---- |
|takePhoto |  Object|  拍照，可指定质量，成功则返回图片|
|startRecord |Object  |开始录像|
|stopRecord | Object | 结束录像，成功则返回封面与视频|


**takePhoto 的 Object 参数列表：**

|参数  |类型 | 必填 | 说明|
|---- | ---- | ---- |---- |
|quality |String  |否  | 成像质量，值为high, normal, low，默认normal|
|success| Function |   否  | 接口调用成功的回调函数 ，res = { tempImagePath }|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete |   Function  |  否  | 接口调用结束的回调函数（调用成功、失败都会执行）|


**startRecord 的 Object 参数列表：**

|参数 | 类型 | 必填 | 说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否  | 接口调用失败的回调函数|
|complete   | Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|


**stopRecord 的 Object 参数列表：**

|参数 | 类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function   | 否  | 接口调用成功的回调函数 ，res = { tempThumbPath, tempVideoPath }|
|fail |   Function |   否  | 接口调用失败的回调函数|
|complete   | Function   | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）| -->
