---
title: swan.setInnerAudioOption
header: develop
nav: api
sidebar: swan.setInnerAudioOption
---




> 基础库 3.10.4 版本开始支持。

**解释**： 对`innerAudioContext`进行小程序内部的全局设置。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|mixWithOther |Boolean | 否 | false |设置是否与其他音频混播。 11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|success  | Function |否 | -| 接口调用成功的回调函数| 
|fail  | Function |否 |  -|接口调用失败的回调函数| 
|complete  | Function |否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|  




**示例**：

<a href="swanide://fragment/e62fbe5e8485bfb6dc130933ada570781556535988468" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="play">play</button>
    <button type="primary" bindtap="stop">stop</button>
    <button type="primary" bindtap="setInnerAudioOption">setInnerAudioOption</button>
</view>
```
* 在 js 文件中

```javascript
Page({
    onLoad() {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
        innerAudioContext.autoplay = false;

        innerAudioContext.onPlay(() => {
            swan.showToast({
                title: 'play',
                icon: 'none'
            });
        });

        this.innerAudioContext = innerAudioContext;
    },
    play() {
        this.innerAudioContext.play();
    },
    stop() {
        this.innerAudioContext.stop();
    },
    setInnerAudioOption() {
        swan.setInnerAudioOption({
            mixWithOther: true,
            success: res => {
                swan.showToast({
                    title: 'success',
                    icon: 'none'
                });
                console.log('setInnerAudioOption success', res);
            },
            fail: err => {
                swan.showToast({
                    title: 'fail',
                    icon: 'none'
                });
                console.log('setInnerAudioOption fail', err);
            }
        });
    }
});
```

* 在 css 文件中

``` css
.wrap {
    padding: 50rpx 30rpx;
}

.wrap button {
    margin-bottom: 50rpx;
}

```

#### 错误码

* Andriod

|错误码|说明|
|--|--|
|1001|执行失败  |

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |