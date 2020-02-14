---
title: CanvasContext
header: develop
nav: api
sidebar: canvas_CanvasContext
---

 

**解释**： 绘图上下文。


 
## 示例

<a href="swanide://fragment/34667d95c36661c19e338fd95ef83bfd1558353421258" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_createCanvasContext.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/createCanvasContext.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>


### 代码示例 



* 在 swan 文件中

```html
<view class="wrap">
    <view class="page-body">
    <view class="page-section">
      <canvas class="canvas-element" canvas-id="canvas"></canvas>
      <scroll-view class="canvas-buttons" scroll-y="true">
        <block s-for="item in methods">
          <button class="canvas-button" bindtap="{{item}}">{{item}}</button>
        </block>
        <button class="canvas-button" bindtap="toTempFilePath" type="primary">toTempFilePath</button>
      </scroll-view>
    </view>
  </view>
</view>
```

* 在 js 文件中

```js
const canvas = require('./canvas.js');

Page({
    data: {
        methods: []
    },
    onReady() {
        this.CanvasContext = swan.createCanvasContext('canvas');
        const methods = Object.keys(canvas);
        this.setData({
            methods
        });

        const that = this;
        methods.forEach(function (method) {
            that[method] = function () {
                canvas[method](that.CanvasContext);
                that.CanvasContext.draw();
            }
        })
    },
    toTempFilePath() {
        swan.canvasToTempFilePath({
            canvasId: 'canvas',
            success: res => {
                console.log('canvasToTempFilePath success', res);
            },
            fail: err => {
                console.log('canvasToTempFilePath fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding-top: 50rpx;
}

.canvas-element-wrapper {
    display: block;
    margin-bottom: 100rpx;
}
.canvas-element {
    width: 100%;
    height: 500rpx;
    background-color: #fff;
}
.canvas-buttons {
    padding: 30rpx 50rpx 10rpx;
    width: 100%;
    height: 360rpx;
    box-sizing: border-box;
}
.canvas-button {
    float: left;
    line-height: 2;
    width: 300rpx;
    margin: 15rpx 12rpx;
}
  
```
* 在 canvas.js 文件中
```js
const canvas = {};

canvas.rotate = function (context) {
    context.beginPath();
    context.rotate(10 * Math.PI / 180);
    context.rect(225, 75, 20, 10);
    context.fill();
};

canvas.scale = function (context) {
    context.beginPath();
    context.rect(25, 25, 50, 50);
    context.stroke();

    context.scale(2, 2);

    context.beginPath();
    context.rect(25, 25, 50, 50);
    context.stroke();
};

canvas.reset = function (context) {
    context.beginPath();

    context.setFillStyle('#000000');
    context.setStrokeStyle('#000000');
    context.setFontSize(10);

    context.setShadow(0, 0, 0, 'rgba(0, 0, 0, 0)');

    context.setLineCap('butt');
    context.setLineJoin('miter');
    context.setLineWidth(1);
    context.setMiterLimit(10);
};

canvas.translate = function (context) {
    context.beginPath();
    context.rect(10, 10, 100, 50);
    context.fill();

    context.translate(70, 70);

    context.beginPath();
    context.fill();
};

canvas.save = function (context) {
    context.beginPath();
    context.setStrokeStyle('#00ff00');
    context.save();

    context.scale(2, 2);
    context.setStrokeStyle('#ff0000');
    context.rect(0, 0, 100, 100);
    context.stroke();
    context.restore();

    context.rect(0, 0, 50, 50);
    context.stroke();
};

canvas.restore = function (context) {
    [3, 2, 1].forEach(function (item) {
        context.beginPath();
        context.save();
        context.scale(item, item);
        context.rect(10, 10, 100, 100);
        context.stroke();
        context.restore();
    });
};

canvas.drawImage = function (context) {
    context.drawImage('/images/api_logo.png', 0, 0);
};

canvas.fillText = function (context) {
    context.setStrokeStyle('#ff0000');

    context.beginPath();
    context.moveTo(0, 10);
    context.lineTo(300, 10);
    context.stroke();

    context.setFontSize(10);
    context.fillText('Hello World', 0, 30);
    context.setFontSize(20);
    context.fillText('Hello World', 100, 30);

    context.beginPath();
    context.moveTo(0, 30);
    context.lineTo(300, 30);
    context.stroke();
};

canvas.fill = function (context) {
    context.beginPath();
    context.rect(20, 20, 150, 100);
    context.setStrokeStyle('#00ff00');
    context.fill();
};

canvas.stroke = function (context) {
    context.beginPath();
    context.moveTo(20, 20);
    context.lineTo(20, 100);
    context.lineTo(70, 100);
    context.setStrokeStyle('#00ff00');
    context.stroke();
};

canvas.clearRect = function (context) {
    context.setFillStyle('#ff0000');
    context.beginPath();
    context.rect(0, 0, 300, 150);
    context.fill();
    context.clearRect(20, 20, 100, 50);
};

canvas.beginPath = function (context) {
    context.beginPath();
    context.setLineWidth(5);
    context.setStrokeStyle('#ff0000');
    context.moveTo(0, 75);
    context.lineTo(250, 75);
    context.stroke();

    context.beginPath();
    context.setStrokeStyle('#0000ff');
    context.moveTo(50, 0);
    context.lineTo(150, 130);
    context.stroke();
};

canvas.closePath = function (context) {
    context.beginPath();
    context.moveTo(20, 20);
    context.lineTo(20, 100);
    context.lineTo(70, 100);
    context.closePath();
    context.stroke();
};

canvas.moveTo = function (context) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(300, 150);
    context.stroke();
};

canvas.lineTo = function (context) {
    context.beginPath();
    context.moveTo(20, 20);
    context.lineTo(20, 100);
    context.lineTo(70, 100);
    context.stroke();
};

canvas.rect = function (context) {
    context.beginPath();
    context.rect(20, 20, 150, 100);
    context.stroke();
};

canvas.arc = function (context) {
    context.beginPath();
    context.arc(75, 75, 50, 0, Math.PI * 2, true);
    context.moveTo(110, 75);
    context.arc(75, 75, 35, 0, Math.PI, false);
    context.moveTo(65, 65);
    context.arc(60, 65, 5, 0, Math.PI * 2, true);
    context.moveTo(95, 65);
    context.arc(90, 65, 5, 0, Math.PI * 2, true);
    context.stroke();
};

canvas.quadraticCurveTo = function (context) {
    context.beginPath();
    context.moveTo(20, 20);
    context.quadraticCurveTo(20, 100, 200, 20);
    context.stroke();
};

canvas.bezierCurveTo = function (context) {
    context.beginPath();
    context.moveTo(20, 20);
    context.bezierCurveTo(20, 100, 200, 100, 200, 20);
    context.stroke();
};

canvas.setFillStyle = function (context) {
    ['#fef957', 'rgb(242,159,63)', 'rgb(242,117,63)', '#e87e51'].forEach(function (item, index) {
        context.setFillStyle(item);
        context.beginPath();
        context.rect(0 + 75 * index, 0, 50, 50);
        context.fill();
    });
};

canvas.setStrokeStyle = function (context) {
    ['#fef957', 'rgb(242,159,63)', 'rgb(242,117,63)', '#e87e51'].forEach(function (item, index) {
        context.setStrokeStyle(item);
        context.beginPath();
        context.rect(0 + 75 * index, 0, 50, 50);
        context.stroke();
    });
};

canvas.setGlobalAlpha = function (context) {
    context.setFillStyle('#000000');
    [1, 0.5, 0.1].forEach(function (item, index) {
        context.setGlobalAlpha(item);
        context.beginPath();
        context.rect(0 + 75 * index, 0, 50, 50);
        context.fill();
    });
};

canvas.setShadow = function (context) {
    context.beginPath();
    context.setShadow(10, 10, 10, 'rgba(0, 0, 0, 199)');
    context.rect(10, 10, 100, 100);
    context.fill();
};

canvas.setFontSize = function (context) {
    [10, 20, 30, 40].forEach(function (item, index) {
        context.setFontSize(item);
        context.fillText('Hello, world', 20, 20 + 40 * index);
    });
};

canvas.setLineCap = function (context) {
    context.setLineWidth(10);
    ['butt', 'round', 'square'].forEach(function (item, index) {
        context.beginPath();
        context.setLineCap(item);
        context.moveTo(20, 20 + 20 * index);
        context.lineTo(100, 20 + 20 * index);
        context.stroke();
    });
};

canvas.setLineJoin = function (context) {
    context.setLineWidth(10);
    ['bevel', 'round', 'miter'].forEach(function (item, index) {
        context.beginPath();

        context.setLineJoin(item);
        context.moveTo(20 + 80 * index, 20);
        context.lineTo(100 + 80 * index, 50);
        context.lineTo(20 + 80 * index, 100);
        context.stroke();
    });
};

canvas.setLineWidth = function (context) {
    [2, 4, 6, 8, 10].forEach(function (item, index) {
        context.beginPath();
        context.setLineWidth(item);
        context.moveTo(20, 20 + 20 * index);
        context.lineTo(100, 20 + 20 * index);
        context.stroke();
    });
};

canvas.setMiterLimit = function (context) {
    context.setLineWidth(4);;

    [2, 4, 6, 8, 10].forEach(function (item, index) {
        context.beginPath();
        context.setMiterLimit(item);
        context.moveTo(20 + 80 * index, 20);
        context.lineTo(100 + 80 * index, 50);
        context.lineTo(20 + 80 * index, 100);
        context.stroke();
    });
};

module.exports = canvas;

```

