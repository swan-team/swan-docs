### rewardedVideoAd.onLoad()

`onLoad()` 是 RewardedVideoAd 对象的方法，监听激励视频的加载事件。

```js
rewardedVideoAd.onLoad(callback)
```
**参数值**：

|参数|类型|是否必填|描述|
|-|-|-|-|-|-|
|callback|function|是|激励视频加载完成后的回调函数|


**示例**：

```js
let example = {
    adUnitId: '000000',
    appSid: '000000'
}
const rewardedVideoAd = swan.createRewardedVideoAd(example);
rewardedVideoAd.onLoad(() => {
    console.log('视频加载完成');
})

```