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
<a href="swanide://fragment/dd5f2caff98f590d42027517729532851569479416199" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript
Page({
    onReady() {
        let that = this;
        swan.onCompassChange(function (res) {
            that.setData({
                direction: parseInt(res.direction, 10)
            });
            that.updateProgress(res.direction);
        });
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

<a href="swanide://fragment/dd5f2caff98f590d42027517729532851569479416199" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    startCompass() {
        swan.startCompass({
            success: res => {
                console.log('startCompass success', res);
            },
            fail: err => {
                console.log('startCompass fail', err);
            }
        });
    }
});
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

<a href="swanide://fragment/dd5f2caff98f590d42027517729532851569479416199" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    onLoad() {
        swan.startCompass();
    },
    stopCompass() {
        swan.stopCompass({
            success: res => {
                console.log('stopCompass success', res);
            },
            fail: err => {
                console.log('stopCompass fail', err);
            }
        });
    }
});
```
