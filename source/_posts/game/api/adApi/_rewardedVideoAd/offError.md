### rewardedVideoAd.offError()

`offError()` 是 RewardedVideoAd 对象的方法，用于取消监听激励视频的错误事件。

```js
rewardedVideoAd.offError(callback)
```

**参数值：**

|参数|类型|是否必填|描述|
|-|-|-|-|-|-|
|callback|function|否|取消监听激励视频错误事件对应的回调函数(如果不传参数，则清除所有监听激励视频错误事件的回调函数)|


**示例：**

```js
let example = {
    adUnitId: '000000',
    appSid: '000000'
}

let onErrorFuc = function () {
    console.log('视频出现错误');
}

const rewardedVideoAd = swan.createRewardedVideoAd(example);
rewardedVideoAd.onError(onErrorFuc);
rewardedVideoAd.offError(onErrorFuc); //offError对应的函数将取消对应的监听事件

```