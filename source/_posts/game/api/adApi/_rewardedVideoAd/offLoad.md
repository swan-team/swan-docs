### rewardedVideoAd.offLoad()

`offLoad()` 是 RewardedVideoAd 对象的方法，用于取消监听激励视频的加载事件。

```js
rewardedVideoAd.offLoad(callback)
```

**参数值**：

|参数|类型|是否必填|描述|
|-|-|-|-|-|-|
|callback|function|否|取消监听激励视频加载事件对应的回调函数(如果不传参数，则清除所有监听激励视频加载事件的回调函数)|


**示例**：

```js
let example = {
    adUnitId: '000000',
    appSid: '000000'
}

let onLoadFuc = function () {
    console.log('视频加载完成')
}

const rewardedVideoAd = swan.createRewardedVideoAd(example);
rewardedVideoAd.onLoad(onLoadFuc);
rewardedVideoAd.offLoad(onLoadFuc); //offLoad对应的函数将取消对应的监听事件

```