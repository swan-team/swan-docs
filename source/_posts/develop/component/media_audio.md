---
title: audio 音频
header: develop
nav: component
sidebar: media_audio
---


 

**解释**：音频

##  属性说明 


|属性名 |类型  |默认值  | 必填 |说明|
|:---- |: ---- |: ---- |:---- |:---- |
|id|String||否|audio 组件的唯一标识符|
|src|String||否|要播放音频的资源地址|
|loop|Boolean|false|否|是否循环播放|
|controls|Boolean|false|否|是否显示默认控件|
|poster|String||否|默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效|
|name|String|未知音频|否|默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效|
|author|String|未知作者|否|默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效|
|binderror|EventHandle||否|当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}|
|bindplay|EventHandle||否|当开始/继续播放时触发play事件，detail = {duration}|
|bindpause|EventHandle||否|当暂停播放时触发 pause 事件，detail = {duration}|
|bindtimeupdate|EventHandle||否| 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}|
|bindended|EventHandle||否|当播放到末尾时触发 ended 事件，detail = {duration}|


###  MediaError.code 

|返回错误码|描述|
|:---- |:---- |
|1|获取资源过程被用户终止|
|2|网络错误|
|3|当解码时发生错误|
|4|不支持音频|

## 示例

<a href="swanide://fragment/8f35dc200c7257726ff144f9fca9f6b91577360450660" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/audio.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/images/audio.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 

<a href="swanide://fragment/cef8f1aa7935d28b4621c35df1f6e2c61565503498770" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<audio poster="{{poster}}" 
    name="{{name}}" 
    loop="false" 
    author="{{author}}" 
    src="{{src}}" 
    id="myAudio" 
    controls 
    bind:error="error" 
    bind:play="audioPlay" 
    bind:pause="audioPause" 
    bind:timeupdate="timeupdate" 
    bind:ended="audioEnded"
>
</audio>
```

* 在 js 文件中

```javascript
Page({
    data: {
        poster: 'https://c.hiphotos.baidu.com/super/pic/item/8b13632762d0f703e34c0f6304fa513d2797c597.jpg',
        name: '演员',
        author: '薛之谦',
        src: 'https://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3'
    },
    error: function (e) {
        console.log('audio error:', e);
        swan.showToast({
            title: '加载音频资源出错',
            duration: 1000
        });
    },
    audioPlay: function (e) {
        console.log('audio play');
        swan.showToast({
            title: '音频开始播放',
            duration: 1000
        });
    },
    audioPause: function (e) {
        console.log('audio pause');
        swan.showToast({
            title: '音频暂停',
            duration: 1000
        });
    },
    audioEnded: function () {
        console.log('audio ended');
        swan.showToast({
            title: '音频播放完',
            duration: 1000
        });
    },
    timeupdate: function () {
        console.log('audio update');
    }
});
```

