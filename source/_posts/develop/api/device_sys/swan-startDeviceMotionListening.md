---
title: swan.startDeviceMotionListening
header: develop
nav: api
sidebar: swan-startDeviceMotionListening
---

 
 
> 基础库 3.30.2 开始支持，低版本需做兼容处理。  

**解释**：开始监听设备方向的变化。

 
## 方法参数 

Object object

###  `object` 参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|interval |String  | 否 | normal| 监听设备方向的变化回调函数的执行频率|
|success |Function  | 否 | |  接口调用成功的回调函数|
|fail  |  Function |  否 | |  接口调用失败的回调函数|
|complete |   Function  | 否  | |接口调用结束的回调函数（调用成功、失败都会执行）|

###   interval 的有效值 

根据机型性能、当前 CPU 与内存的占用情况，interval 的设置与实际 swan.onAccelerometerChange() 回调函数的执行频率会有一些出入。

|值 |说明|
|---- | ---- |
|game |适用于更新游戏的回调频率，在 20ms/次 左右|
|ui |适用于更新 UI 的回调频率，在 60ms/次 左右|
|normal |普通的回调频率，在 200ms/次 左右|
## 示例
 
### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_deviceMotion.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>




### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/startDeviceMotionListening.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例1 - interval为ui ：

<a href="swanide://fragment/23ea056d902c300fbb5fa59b7dcd2ef31569483021022" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    startDeviceMotionListening() {
        swan.startDeviceMotionListening({
            interval: 'ui',
            success: res => {
                console.log('startDeviceMotionListening success', res);
            },
            fail: err => {
                console.log('startDeviceMotionListening fail', err);
            }
        });
    }
});
```

###  代码示例2 - interval为game ：

<a href="swanide://fragment/e38daaa48f251db2de1d6d23b44b40001575204704761" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    startDeviceMotionListening() {
        swan.startDeviceMotionListening({
            interval: 'game',
            success: res => {
                console.log('startDeviceMotionListening success', res);
            },
            fail: err => {
                console.log('startDeviceMotionListening fail', err);
            }
        });
    }
});
```

###  代码示例3 - interval为normal ：

<a href="swanide://fragment/c507dc5b0171c208542233113f54f04e1575204732536" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    startDeviceMotionListening() {
        swan.startDeviceMotionListening({
            interval: 'normal',
            success: res => {
                console.log('startDeviceMotionListening success', res);
            },
            fail: err => {
                console.log('startDeviceMotionListening fail', err);
            }
        });
    }
});
```


