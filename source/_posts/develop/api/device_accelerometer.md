---
title: 加速度计
header: develop
nav: api
sidebar: device_accelerometer
---


## swan.onAccelerometerChange

**解释**：监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 swan.stopAccelerometer 停止监听。

**方法参数**：Function callback

**`callback`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|x |Number |是|-|X 轴|
|y |Number |是|-|Y 轴|
|z |Number |是|-|Z 轴|

**示例**：
<a href="swanide://fragment/8bdfb91cf02e7f883aeb075ad6029b6f1560168666817" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 swan 文件中

```xml
<view class="wrap">
    <view class="page-top">
        <view class="page-top-text">{{title}}</view>
        <view class="page-top-line"></view>
    </view>
    <view class="page-body-canvas">
        <image src="../images/gravity.png" class="page-body-ball"></image>
        <canvas class="page-body-ball" show="{{true}}" canvas-id="small-ball"></canvas>
    </view>
    <view class="page-body-xyz">
        <text class="page-body-title">X: {{x}}</text>
        <text class="page-body-title">Y: {{y}}</text>
        <text class="page-body-title">Z: {{z}}</text>
    </view>
    <view class="page-body-btn">
        <view class="middle-btn {{!iswatch ? '' : 'disabled'}}" bind:tap="startWatch">开始监听</view>
        <view class="middle-btn {{!iswatch ? 'disabled' : ''}}" bind:tap="stopWatch">停止监听</view >
    </view>
</view>
```
* 在 js 文件中

```javascript
Page({
    data: {
        title: '倾斜手机即可移动下方小球',
        iswatch: true,
        x: 0,
        y: 0,
        z: 0
    },
    onReady() {
        this.position = {
            x: 151,
            y: 151,
            vx: 0,
            vy: 0,
            ax: 0,
            ay: 0
        };
        let self = this;
        swan.onAccelerometerChange(function (res) {
            self.setData({
                x: res.x.toFixed(2),
                y: res.y.toFixed(2),
                z: res.z.toFixed(2)
            });
            self.position.ax = Math.sin(res.x * Math.PI / 2);
            self.position.ay = -Math.sin(res.y * Math.PI / 2);

        });
        this.interval = setInterval(function () {
            self.drawSmallBall();
        }, 20);

    },
    onShow() {
        let watch = this.getData('iswatch');
        if (watch) {
            swan.startAccelerometer();
        } else {
            swan.stopAccelerometer();
        }
    },
    drawSmallBall() {
        let p = this.position;
        p.x = p.x + p.vx;
        p.y = p.y + p.vy;
        p.vx = p.vx + p.ax;
        p.vy = p.vy + p.ay;

        if (Math.sqrt(Math.pow(Math.abs(p.x) - 151, 2) + Math.pow(Math.abs(p.y) - 151, 2)) >= 115) {
            if (p.x > 151 && p.vx > 0) {
                p.vx = 0;
            }
            if (p.x < 151 && p.vx < 0) {
                p.vx = 0;
            }
            if (p.y > 151 && p.vy > 0) {
                p.vy = 0;
            }
            if (p.y < 151 && p.vy < 0) {
                p.vy = 0;
            }
        }
        let stx = this.createCanvasContext('small-ball');
        stx.beginPath(0);
        stx.arc(p.x, p.y, 15, 0, Math.PI * 2);
        stx.setFillStyle('#3388FF');
        stx.fill();
        stx.draw();
    },
    startWatch() {
        let self = this;
        self.setData('iswatch', true);
        swan.startAccelerometer();
    },
    stopWatch() {
        this.setData('iswatch', false);
        swan.stopAccelerometer();

    },
    onUnload() {
        clearInterval(this.interval);
    }

});
```

* 在 css 文件中

```css
html,
body {
    background-color: #fff;
}
.wrap {
    font-size: .15rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.page-body-xyz {
    display: flex;
    justify-content: space-between;
    width: 3rem;
    text-align: center;
    padding-top: .56rem;
    color: #333;
}
.page-body-btn {
    display: flex;
    justify-content: space-around;
    width: 2.4rem;
    text-align: center;
    padding-top: .51rem;
}
.middle-btn {
    margin: 0 auto .15rem;
    width: 1.07rem;
    height: .44rem;
    line-height: .44rem;
    font-size: .15rem;
    color: #333;
    position: relative;
    border-radius: .1rem;
}
.middle-btn:before {
    content: "";
    pointer-events: none;
    box-sizing: border-box;
    position: absolute;
    width: 200%;
    height: 200%;
    left: 0;
    top: 0;
    border: 1px solid #333;
    transform: scale(0.5);
    transform-origin: 0 0;
    border-radius: .1rem;
}
.disabled {
    opacity: .3 !important;
}
/*canvas 端上支持渲染为px*/
.page-body-canvas {
    margin-top: .59rem;
    width: 302px;
    height: 302px;
    position: relative;

}
.page-body-ball {
    position: absolute;
    top: 0;
    left: 0;
    width: 302px;
    height: 302px;
}
```

## swan.startAccelerometer

**解释**：开始监听加速度数据。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|interval|String |否 |normal|监听加速度数据回调函数的执行频率|
|success |Function  |  否 |-|  接口调用成功的回调函数|
|fail  |  Function |   否 | -| 接口调用失败的回调函数|
|complete |   Function |   否  | -|接口调用结束的回调函数（调用成功、失败都会执行）|

**interval 的合法值**

根据机型性能、当前 CPU 与内存的占用情况，interval 的设置与实际 swan.onAccelerometerChange() 回调函数的执行频率会有一些出入。

|值 |说明|
|---- | ---- |
|game |适用于更新游戏的回调频率，在 20ms/次 左右|
|ui |适用于更新 UI 的回调频率，在 60ms/次 左右|
|normal |普通的回调频率，在 200ms/次 左右|

**示例**：

<a href="swanide://fragment/a501faa11f55af692129a4255d8cb4901557731276197" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="startAccelerometer">startAccelerometer</button>
</view>
```

* 在 js 文件中

```js
Page({
    startAccelerometer() {
        swan.startAccelerometer({
            interval: 'ui',
            success: function (res) {
                console.log('startAccelerometer success', res);
            },
            fail: function (err) {
                console.log('startAccelerometer fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```

## swan.stopAccelerometer

**解释**：停止监听加速度数据。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 | -| 接口调用成功的回调函数|
|fail  |  Function |   否 | -| 接口调用失败的回调函数|
|complete |   Function |   否  |-| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/20b393338d791fd53cc7ec673c0b086f1557731347532" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="stopAccelerometer">stopAccelerometer</button>
</view>
```

* 在 js 文件中

```js
Page({
    onLoad() {
        swan.startAccelerometer({
            interval: 'ui'
        });
    },
    stopAccelerometer() {
        swan.stopAccelerometer({
            success: function (res) {
                console.log('startAccelerometer success', res);
            },
            fail: function (err) {
                console.log('startAccelerometer fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
