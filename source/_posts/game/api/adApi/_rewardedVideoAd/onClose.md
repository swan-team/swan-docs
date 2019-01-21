### rewardedVideoAd.onClose()

`onClose()` 是 RewardedVideoAd 对象的方法，监听用户点击关闭广告按钮的事件。

```js
rewardedVideoAd.onClose(callback)
```

**参数值：**

|参数|类型|是否必填|描述|
|-|-|-|-|-|-|
|callback|function|是|用户点击关闭广告按钮后的回调函数|


**回调函数参数值：**

|参数|类型|描述|
|-|-|-|-|-|-|
|res|Object|回调函数的参数|
|res.isEnded|boolean|用户是否在视频播放完成后关闭广告|


**示例：**

```js
let example = {
    adUnitId: '000000',
    appSid: '000000'
}
const rewardedVideoAd = swan.createRewardedVideoAd(example);
rewardedVideoAd.onClose((res) => {
    console.log('激励视频关闭');
})

```