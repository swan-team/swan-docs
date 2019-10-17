---
title: canvas 画布
header: develop
nav: component
sidebar: canvas
---

 

**解释**：画布，客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，使用时请注意相关限制。



**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/canvas.png"  class="demo-qrcode-image" />

**属性说明**：

|属性名 |类型  |默认值  | 必填 |说明|
|---- | ---- | ---- |---- |---- |
| canvas-id | String |  | 是 |canvas 组件的唯一标识符 |
| disable-scroll | Boolean  | false | 否 | 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新 |
| bindtouchstart | EventHandle |  | 否 | 手指触摸动作开始 |
| bindtouchmove | EventHandle |  | 否 |手指触摸后移动 |
| bindtouchend | EventHandle |  | 否 |手指触摸动作结束 |
| bindtouchcancel | EventHandle |  | 否 |手指触摸动作被打断，如来电提醒，弹窗 |
| bindlongtap | EventHandle |  | 否 |手指长按 350ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 |
| binderror | EventHandle |  | 否 |当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'} |

**示例**：
<a href="swanide://fragment/b1487cad6ea6a95940096c963e4726a21565503502706" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view s-if="canvasShow" class="canvas-wrap {{canvasOff}}">
        <canvas canvas-id="myCanvas" disable-scroll="false" class="canvas" bindtouchstart="touchstart" bindtouchend="touchend" bindtouchcancel="touchcancel" bindlongtap="longtap" bindtouchmove="mvcan"></canvas>
    </view>
    <button class="btn" type="primary" bind:tap="showcanvas">展示canvas</button>
    <button class="btn" type="primary" bind:tap="delcanvas">删除canvas</button>
    <button class="btn" type="primary" bind:tap="sendadraw">执行一条绘制指令</button>
</view>

```

* 在 js 文件中

```javascript
Page({
    data: {
        canvasShow: false,
        canvasOff: '',
        cur: 0,
        position: [
            78,
            108,
            138
        ]
    },
    onLoad() {
        console.log('onLoad');
    },

    canvas() {
        console.log('tap');
    },
    delcanvas() {
        this.setData('canvasShow', false);
    },
    showcanvas() {
        this.setData('canvasShow', true);
    },
    mvcan() {
        console.log('canvas-mvcan');
    },
    sendadraw() {
        const ctx = this.createCanvasContext('myCanvas');
        ctx.clearRect(0, 0, 500, 500);
        ctx.draw();
        let cur = this.getData('cur') % 3;
        let position = this.getData('position');
        this.setData('cur', cur + 1);
        ctx.setFontSize(16);
        ctx.textAlign = 'center';
        ctx.fillText('有事搜一搜，没事看一看', 80, position[cur]);
        ctx.stroke();
        ctx.draw();
    }
});
```

**Bug & Tip**：

* canvas 组件不能使用动画进行控制。
* 组件默认宽度 300px、高度 225px。
* 基础库版本1.12.0开始支持事件捕获、冒泡。
