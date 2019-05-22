### rewardedVideoAd.load()

`load()` 是 RewardedVideoAd 对象的方法，返回一个 promise 对象。

```js
rewardedVideoAd.load()
```

**示例**：

```js
let example = {
    adUnitId: '000000',
    appSid: '000000'
}
const rewardedVideoAd = swan.createRewardedVideoAd(example);
rewardedVideoAd.load()
.then()
.catch(err => console.log(err));
```