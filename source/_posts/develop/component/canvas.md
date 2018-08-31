---
title: 画布
header: develop
nav: component
sidebar: canvas
---

canvas
-----

**解释：**画布

**属性说明：**

|属性名 |类型  |默认值  |说明|
|---- | ---- | ---- |---- |
| canvas-id | String |  | canvas 组件的唯一标识符 |
| disable-scroll | Boolean  | false | 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新 |
| bindtouchstart | EventHandle |  | 手指触摸动作开始 |
| bindtouchmove | EventHandle |  | 手指触摸后移动 |
| bindtouchend | EventHandle |  | 手指触摸动作结束 |
| bindtouchcancel | EventHandle |  | 手指触摸动作被打断，如来电提醒，弹窗 |
| bindlongtap | EventHandle |  | 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动 |
| binderror | EventHandle |  | 当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'} |
**说明**
1、 canvas 组件默认宽度 300px、高度 225px；
2、 基础库版本1.12.0开始支持事件捕获、冒泡。
**示例：**

```xml
<canvas canvas-id="myCanvas" class="canvas-testing" bindtouchend="canvas" bindtouchmove="mvcan">
</canvas>
```

```javascript
// canvas.js
Page({
    canvasIdErrorCallback: function (e) {
        console.error(e.detail.errMsg);
    },
    onReady: function (e) {
        const ctx = this.createCanvasContext('myCanvas');
        // 或swan.createCanvasContext('myCanvas');
        ctx.setFillStyle('#0f0f0f');
        ctx.arc(100, 100, 50, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.setStrokeStyle('#0000ff');
        ctx.moveTo(90, 70);
        ctx.lineTo(70, 80);
        ctx.lineTo(90, 80);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.setStrokeStyle('#0000ff');
        ctx.moveTo(130, 70);
        ctx.lineTo(110, 80);
        ctx.lineTo(130, 80);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.setFillStyle('#00ff00');
        ctx.arc(100, 100, 20, 0, 1 * Math.PI);
        ctx.fill();
        ctx.setFillStyle('#00ff00');
        ctx.setFontSize(12);
        ctx.fillText('haha', 165, 78);
        ctx.moveTo(100, 50);
        ctx.setStrokeStyle('#00ff00');
        ctx.bezierCurveTo(100, 25, 75, 25, 50, 50);
        ctx.stroke();
        ctx.moveTo(100, 50);
        ctx.quadraticCurveTo(75, 25, 50, 50);
        ctx.stroke();
        ctx.draw();
    };
});
```

**Bug & Tip：**
1、canvas 组件是原生组件；
2、canvas 组件不能使用动画进行控制；
