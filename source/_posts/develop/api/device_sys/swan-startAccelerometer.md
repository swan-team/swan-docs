---
title: swan.startAccelerometer
header: develop
nav: api
sidebar: swan-startAccelerometer
---

 
**解释**：开始监听加速度数据。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|interval|String |否 |normal|监听加速度数据回调函数的执行频率|
|success |Function  |  否 | |  接口调用成功的回调函数|
|fail  |  Function |   否 | | 接口调用失败的回调函数|
|complete |   Function |   否  | |接口调用结束的回调函数（调用成功、失败都会执行）|

**interval 的有效值**

根据机型性能、当前 CPU 与内存的占用情况，interval 的设置与实际 swan.onAccelerometerChange() 回调函数的执行频率会有一些出入。

|值 |说明|
|---- | ---- |
|game |适用于更新游戏的回调频率，在 20ms/次 左右|
|ui |适用于更新 UI 的回调频率，在 60ms/次 左右|
|normal |普通的回调频率，在 200ms/次 左右|

**示例**：

<a href="swanide://fragment/0ed5fe5e4d0957055cd7669fd83612731569478872196" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    startAccelerometer() {
        swan.startAccelerometer({
            interval: 'ui',
            success: res => {
                console.log('startAccelerometer success', res);
            },
            fail: err => {
                console.log('startAccelerometer fail', err);
            }
        });
    }
});
```

