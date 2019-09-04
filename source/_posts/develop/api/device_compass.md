---
title: 罗盘
header: develop
nav: api
sidebar: device_compass
---


## swan.onCompassChange

> 工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)


**解释**：监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用swan.stopCompass停止监听。

**方法参数**：Function callback

**`callback`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|direction |Number |是|-|面对的方向度数|

**示例**：
<a href="swanide://fragment/c457120719b177994b252c199afa78ce1560168902382" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="wrap">
    <view class="page-top">
        <view class="page-top-text">{{title}}</view>
        <view class="page-top-line"></view>
    </view>

    <view class="direction">
        <view class="bg-compass-line"></view>
        <view class="bg-compass" style="transform: rotate(-{{direction}}deg)">
            <view class="num num0" style="transform: rotate({{direction}}deg)">0</view>
            <view class="num num90" style="transform: rotate({{direction}}deg)">90</view>
            <view class="num num180" style="transform: rotate({{direction}}deg)">180</view>
            <view class="num num270" style="transform: rotate({{direction}}deg)">270</view>
        </view>
        <div class="cg-wrap">
            <div class="circle-left-wrap"><div class="circle-left" style="transform:rotate({{leftdeg}}deg);transform-origin:50% 50%"></div></div>
            <div class="circle-right-wrap"><div class="circle-right" style="transform:rotate({{rightdeg}}deg);transform-origin:50% 50%"></div></div>
            <div class="mask">
                <view class="direction-num">
                    <text>{{direction}}</text>
                    <text class="direction-degree"></text>
                </view>
            </div>
        </div>
    </view>
    <view class="page-body-btn">
        <view class="middle-btn {{!iswatch ? '' : 'disabled'}}" bind:tap="startWatch">开始监听</view>
        <view class="middle-btn {{!iswatch ? 'disabled' : ''}}" bind:tap="stopWatch">停止监听</view >
    </view>
    <view>{{res}}<view>
</view>
```

* 在 js 文件中

```javascript
Page({
    data: {
        title: '旋转手机即可以获取方位信息',
        direction: 0,
        iswatch: true,
        leftdeg: 0,
        rightdeg: 0
    },
    onReady() {
        let that = this;
        swan.onCompassChange(function (res) {
            that.setData({
                direction: parseInt(res.direction, 10)
            });
            that.updateProgress(res.direction);
        });
    },
    onShow() {
        let watch = this.getData('iswatch');
        if (watch) {
            swan.startCompass();
        } else {
            swan.stopCompass();
        }
    },
    startWatch() {
        this.setData('iswatch', true);
        swan.startCompass();
    },
    stopWatch() {
        this.setData('iswatch', false);
        swan.stopCompass();
    },
    updateProgress(direction) {
        let leftdeg;
        let rightdeg;
        let deg = +direction;
        if (deg > 180) {
            leftdeg = 180;
            rightdeg = 180 - deg;
        } else {
            leftdeg = -deg;
            rightdeg = 0;
        }
        this.setData({
            leftdeg: leftdeg,
            rightdeg: rightdeg
        });
    }
});

```

* 在 css 文件中
 
```css
html,
body {
    background-color: #fff;
}
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
.direction {
    position: relative;
    margin-top: .6rem;
    width: 3.15rem;
    height: 3.15rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.num {
    position: absolute;
    color: #999;
    font-size: .13rem;
}
.num0 {
    top: -0.15rem;
    left: 49%;
}
.num90 {
    top: 46.5%;
    right: -0.2rem;
}
.num180 {
    bottom: -0.2rem;
    left: 46.5%;
}
.num270 {
    left: -0.2rem;
    top: 46.5%;
}
.bg-compass {
    position: relative;
    width: 3.15rem;
    height: 3.15rem;
    background: url(../images/compass.png) no-repeat center;
    background-size: contain;
}
.bg-compass-line {
    position: absolute;
    left: 1.56rem;
    top: -.05rem;
    width: .03rem;
    height: .4rem;
    background: url(../images/blue-bar.png) no-repeat center;
    background-size: contain;
    z-index: 1;
}
.direction-value {
    position: absolute;
}
.direction-num {
    position: relative;
    color: #333;
    line-height: 1;
    font-size: .93rem;
    z-index: 2;
}
.direction-degree {
    position: absolute;
    top: 0;
    right: -.1rem;
    width: .15rem;
    height: .15rem;
    border: .04rem solid #333;
    border-radius: 50% 50%;
}
.page-body-xyz {
    display: flex;
    justify-content: space-between;
    width: 3rem;
    text-align: center;
    padding-top: .41rem;
    color: #333;
}
.page-body-btn {
    display: flex;
    justify-content: space-around;
    width: 2.4rem;;
    text-align: center;
    padding-top: .85rem;
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
.cg-wrap {
    position: absolute;
    top: .15rem;
    left: .15rem;
    width: 2.86rem;
    height: 2.86rem;
    border-radius: 50%;
    background: #38f;
}

.circle-left-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.43rem;
    height: 2.86rem;
    overflow: hidden;
}
.circle-right-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.43rem;
    height: 2.86rem;
    overflow: hidden;
}
.circle-right-wrap {
    left: 1.43rem;
}

.circle-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.86rem;
    height: 2.86rem;
    border-radius: 50%;
    box-shadow: 0 0 .01rem .01rem #efefef inset;
    background: #f8f8f8;
}
.circle-right {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.86rem;
    height: 2.86rem;
    border-radius: 50%;
    box-shadow: 0 0 .01rem .01rem #efefef inset;
    background: #f8f8f8;
}
.circle-right {
    left: -1.43rem;
}

.circle-left {
    clip: rect(0, 1.43rem, auto, 0);
}
.circle-right {
    clip: rect(0, auto, auto, 1.43rem);
}
.mask {
    position: absolute;
    top: .17rem;
    left: .17rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: #f8f8f8;
    color: #59d;
    display: flex;
    justify-content: center;
    align-items: center;
}
```


#### 错误码
* Andriod

|错误码|说明|
|--|--|
|1001|执行失败    |

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|1001|设备不支持  |

## swan.startCompass

**解释**：开始监听罗盘数据。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 |-|  接口调用成功的回调函数|
|fail  |  Function |   否 |-|  接口调用失败的回调函数|
|complete |   Function |   否  |-| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/82b6da5b4ce6509369cc848f6bdf33601557731425444" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="startCompass">startCompass</button>
</view>
```

* 在 js 文件中

```js
Page({
    startCompass() {
        swan.startCompass({
            success: function (res) {
                console.log('startCompass success', res);
            },
            fail: function (err) {
                console.log('startCompass fail', err);
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

## swan.stopCompass

**解释**：停止监听罗盘数据。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 |-|  接口调用成功的回调函数|
|fail  |  Function |   否 |-|  接口调用失败的回调函数|
|complete |   Function |   否  |-| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/f63b7abb5f18b2d596d934c3213e3d8f1557731481133" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="stopCompass">stopCompass</button>
</view>
```

* 在 js 文件中

```js
Page({
    onLoad() {
        swan.startCompass();
    },
    stopCompass() {
        swan.stopCompass({
            success: function (res) {
                console.log('stopCompass success', res);
            },
            fail: function (err) {
                console.log('stopCompass fail', err);
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