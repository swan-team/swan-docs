---
title: animation-video 透明视频动画
header: develop
nav: component
sidebar: animation-video
# webUrl: https://qft12m.smartapps.cn/subPackages/componentPackage/pages/animation-video/animation-video
---



**解释**：animation-video 属于前端组件，为智能小程序提供了将特定视频资源渲染为透明背景动效的能力，可以帮助开发者低成本实现更为沉浸，丰富的动画效果。动画资源设计方法详见[透明视频AFX](https://smartprogram.baidu.com/docs/design/resource/animationVideo/)。animation-video 组件还提供丰富的 api 来控制动画的播放，暂停，跳到指定位置等，详见[swan.createAnimationVideo](https://smartprogram.baidu.com/docs/develop/api/media/animationvideo_swan-createAnimationVideo/)。

##  属性说明

|属性名 |类型  |默认值  |必填 |说明|最低版本|
|:---- |: ---- | :--- | :---- |:---- | :---|
|resource-width | Number  | 800 |是 |组件使用的video视频资源的宽度，单位px| 3.130.10 |
|resource-height| Number | 400 |是 |组件使用的video视频资源的高度，单位px| 3.130.10 |
|canvas-style| String | 'width:400px;height:400px' |是 |用于设置动画画布的css样式| 3.130.10 |
|path| String |  |是 |动画资源地址，支持相对路径以及远程地址| 3.130.10 |
|loop| Boolean | false |否 |动画是否循环播放| 3.130.10 |
|autoplay| Boolean | false |否 |动画是否自动播放| 3.130.10 |
|bindstarted| EventHandle |  |否|动画开始播放的回调| 3.130.10 |
|bindended| EventHandle |  |否|当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及暂停动画不会触发。）| 3.130.10 |


## 示例

<a href="swanide://fragment/ab0b71caf387bc59ae9a4190d6a750261578455636683" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/animation-video.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


 

###  代码示例


* 在 swan 文件中

```html
<view class="wrap">
    <view class="card-area">
        <view class="video-area">
            <animation-video
                id ="myAnimationVideo"
                path="{{path}}"
                loop="{{loop}}"
                resource-width="800"
                resource-height="400"
                canvas-style="width:200px;height:200px"
                autoplay="{{autoplay}}"
                bindstarted="started"
                bindended="ended"
            ></animation-video>
        </view>
        <button class="btn" type="primary" bindtap="changeStatus">{{status}}动画</button>
        <button class="btn" type="primary" bindtap="seek">跳转到动画2S处</button>
    </view>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {
        loop: true,
        path: 'https://efe-h2.cdn.bcebos.com/ceug/resource/res/2020-1/1577964961344/003e2f0dcd81.mp4',
        status: '暂停',
        autoplay: true
    },
    onLoad() {
        // 创建动画组件实例
        this.myAnimationVideo = swan.createAnimationVideo('myAnimationVideo');
    },
    changeStatus() {
        let action = this.data.status;
        let status = action  === '暂停' ? '播放' : '暂停';
        status === '暂停' ? this.myAnimationVideo.play() : this.myAnimationVideo.pause();
        this.setData({status});
    },
    seek() {
        this.myAnimationVideo.seek(2);
    },
    started() {
        console.log('动画开始播放');
    },
    ended() {
        console.log('动画结束播放');
    }
});
```

* 在 css 文件中
```css
.video-area {
    height: 2.18rem;
    background: #343434;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


##  Bug & Tip

* Tip：resource-height 和 resource-width 指的是视频资源的高度和宽度，单位px，与动画组件的宽高没有必然联系。动画组件的宽度和高度是通过css来控制的，为避免出现画面被拉伸的情况，建议将 animation-video 组件的宽高比设置的与动画本身宽高比一致。例如，resource-width是 800px，resource-height是400px，那么我们认为动画的宽和高比例为 （800/2）/400 = 1，此时设置组件的高宽比只要等于 1 效果最佳。
* Tip：因为最终动画渲染在页面上实际上是一个 canvas，可通过 canvas-style 控制它的 css 样式，例如，支持响应式可以设置 canvas-style ="width:100%;"。
* Tip：path可以写本地相对路径，也可以写远程路径，如果是远程路径，注意 response header 里面需要设置 Access-Control-Allow-Origin 防止跨域问题。
* Tip：如果视频资源过大，用户网络状态差的情况下，可以通过API [swan.downloadFile](https://smartprogram.baidu.com/docs/develop/api/net/downloadFile/) 将文件下载到本地，提前将视频资源缓存起来。
