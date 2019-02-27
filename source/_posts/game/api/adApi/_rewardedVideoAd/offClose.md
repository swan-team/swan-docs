### rewardedVideoAd.offClose()

`offClose()` 是 RewardedVideoAd 对象的方法，用于取消监听点击关闭广告按钮的事件。

```js
rewardedVideoAd.offClose(callback)
```

**参数值：**

|参数|类型|是否必填|描述|
|-|-|-|-|-|-|
|callback|function|否|取消监听点击关闭广告按钮事件对应的回调函数(如果不传参数，则清除所有监听用户点击关闭广告按钮事件的回调函数)|


**示例：**

```js
let example = {
    adUnitId: '000000',
    appSid: '000000'
}

let onCloseFuc = function () {
    console.log('视频出现错误');
}

const rewardedVideoAd = swan.createRewardedVideoAd(example);
rewardedVideoAd.onClose(onCloseFuc);
rewardedVideoAd.offClose(onCloseFuc); //offClose对应的函数将取消对应的监听事件

```