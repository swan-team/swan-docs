---
title: canvas 画布
header: develop
nav: component
sidebar: canvas
---

 

**解释**：画布。画布是一个矩形区域，开发者可以在页面上绘制图形。
canvas 拥有多种绘制路径、矩形、图形、字符以及添加图像的方法。
相关api：[swan.createCanvasContext](https://smartprogram.baidu.com/docs/develop/api/show/canvas/)
该组件是客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，使用时请注意相关限制。



**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/canvas.png"  class="demo-qrcode-image" />

**属性说明**：

|属性名 |类型  |默认值  | 必填 |说明|
|---- | ---- | ---- |---- |---- |
| canvas-id | String |  | 是 |canvas 组件的唯一标识符 |
| disable-scroll | Boolean  | false | 否 | 当在 canvas 中移动且有绑定手势事件时，禁止屏幕滚动以及下拉刷新 |
| bindtouchstart | EventHandle |  | 否 | 手指触摸动作开始 |
| bindtouchmove | EventHandle |  | 否 |手指触摸后移动 |
| bindtouchend | EventHandle |  | 否 |手指触摸动作结束 |
| bindtouchcancel | EventHandle |  | 否 |手指触摸动作被打断，如来电提醒，弹窗 |
| bindlongtap | EventHandle |  | 否 |手指长按 350ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 |
| binderror | EventHandle |  | 否 |当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'} |

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/canvas.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/6c7a47d907f45b2629884c6a9aed15541572509879120" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="canvas-view">
    <canvas 
        canvas-id="myCanvas" 
        disable-scroll="false" 
        class="canvas" 
        width="610"
        height="610">
    </canvas>
</view>

```

* 在 js 文件中

```javascript
Page({
    data: {},
    onReady() {
        this.point = {
            x: Math.random() * 305,
            y: Math.random() * 305,
            dx: Math.random() * 10,
            dy: Math.random() * 10,
            r: Math.round(Math.random() * 255 | 0),
            g: Math.round(Math.random() * 255 | 0),
            b: Math.round(Math.random() * 255 | 0)
        };

        this.interval = setInterval(this.draw.bind(this), 17);

        // 使用 swan.createContext 获取绘图上下文 context
        this.ctx = swan.createCanvasContext('myCanvas');
    },
    draw() {
        const { ctx } = this;
        ctx.setFillStyle('#FFF');
        ctx.fillRect(0, 0, 610, 610);

        ctx.beginPath();
        ctx.arc(this.point.x, this.point.y, 14, 0, 2 * Math.PI);
        ctx.setFillStyle('rgb(' + this.point.r + ', ' + this.point.g + ', ' + this.point.b + ')');
        ctx.fill();
        ctx.draw();

        this.point.x += this.point.dx;
        this.point.y += this.point.dy;
        if (this.point.x <= 10 || this.point.x >= 305) {
            this.point.dx = -this.point.dx;
            this.point.r = Math.round(Math.random() * 255 | 0);
            this.point.g = Math.round(Math.random() * 255 | 0);
            this.point.b = Math.round(Math.random() * 255 | 0);
        }

        if (this.point.y <= 10 || this.point.y >= 305) {
            this.point.dy = -this.point.dy;
            this.point.r = Math.round(Math.random() * 255 | 0);
            this.point.g = Math.round(Math.random() * 255 | 0);
            this.point.b = Math.round(Math.random() * 255 | 0);
        }
    }
});
```

* 在 css 文件中

```css
.canvas-view {
  display: flex;
  justify-content: center;
  background-color: rgba(235, 229, 229, 0.5);
}

.canvas {
  width: 610rpx;
  height: 610rpx;
  background-color: #fff;
}
```

**Bug & Tip**：

* canvas 组件不能使用动画进行控制。
* 组件默认宽度 300px、高度 225px。
* 基础库版本1.12.0开始支持事件捕获、冒泡。
