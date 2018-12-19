---
title: 激励视频
layout: gamedoc
categoryName: tutorials

topic: ad
priority: 08-02
---

小游戏激励视频广告组件在小游戏最上层渲染。视频的宽高比有 16：9 及 9：16 两种。

开发者可以在百度的 mssp 平台申请广告位 id--adUnitId 和小游戏在 mssp 平台的应用 id—-appSid。 在小游戏开发中调 [swan.createRewardedVideoAd()](/game/api/ad/swan.createRewardedVideoAd/) 创建激励视频广告组件，该方法返回的激励视频广告组件对象是一个全局单例。使用方式如下：

```js
let videoAd1 = swan.createRewardedVideoAd({ adUnitId: '123', appSid: ‘app1’ })
let videoAd2 = swan.createRewardedVideoAd({ adUnitId: '456', appSid: ‘app2’ })
console.log(videoAd1 === videoAd2)
// true
console.log(videoAd1.adUnitId === ‘123’)
// true

```

激励视频广告组件创建后是隐藏的，创建成功后会自动拉取一次广告物料。

### 播放/隐藏

开发者可以通过调用激励视频广告组件对象的 [show()](/game/api/ad/rewardedVideoAd/#rewardedVideoAd-show) 方法来播放激励视频：

```js
videoAd1.show()

```

show() 返回的是一个 promise 对象，会根据播放是否成功的结果来返回一个 resolved Promise 或一个 rejected Promise。rejected Promise 会携带错误信息的对象作为参数。所以可以如下调用 show()：

```js
videoAd1.show()
.then(() => console.log(‘播放成功’))
.catch(err => console.log(err))

```

当用户点击右上角关闭广告按钮后，激励视频广告会关闭并恢复到隐藏状态，开发者无法控制激励视频广告的关闭。

### 广告拉取

激励视频广告组件会在开发者创建完成后和用户点击关闭广告按钮后自动拉取广告物料。也可以通过开发者调用 [load()](/game/api/ad/rewardedVideoAd/#rewardedVideoAd-load) 方法手动拉取。


```js
videoAd1.load()

```

load 方法同样返回 promise 对象，成功返回一个 resolved Promise，失败返回一个 rejected Promise 并携带错误信息的对象作为参数。

```js
videoAd1.load()
.then(() => console.log(‘拉取广告成功’))
.catch(err => console.log(err))

```

如果开发者已经拉取成功广告物料但还未播放，此时调用 load() 会直接返回 resolve Promise，而不会重新拉取广告物料。

### 拉取或播放失败，重新拉取广告

如果拉取广告或者播放视频失败，开发者在 [onError()](/game/api/ad/rewardedVideoAd/#rewardedVideoAd-onError) 里注册的函数会执行：

```js
videoAd1.onError(err => {
  console.log(err)
})

```

如果播放视频时没有成功拉取到广告物料，[show()](/game/api/ad/rewardedVideoAd/#rewardedVideoAd-show) 会返回 rejected Promise。这时可以调用 [load()](/game/api/ad/rewardedVideoAd/#rewardedVideoAd-load) 去重新拉取广告：

```js
videoAd1.show()
.catch(err => {
    videoAd1.load()
    .then(() => videoAd1.show())
})

```

如果视频正在播放时调用 [load()](/game/api/ad/rewardedVideoAd/#rewardedVideoAd-load) 拉取广告会失败，返回 rejected Promise。

### 用户关闭广告事件

只有用户点击关闭广告按钮，激励视频才会关闭。

![](/img/game/ad/rewardedVideo.png)

开发者可以调用 [onClose()](/game/api/ad/rewardedVideoAd/#rewardedVideoAd-onClose) 以监听此事件。注册的回调函数会传入一个对象作为参数。对象会有 isEnded 属性，为 true 表示视频是在完整播放的情况下被关闭的，为 false 表示用户在视频播放中关闭了视频。

```js
Video.onClose(res => {
    if (res.isEnded) {
        console.log(‘激励视频完整播放后关闭’)
    } else {
        console.log(‘激励视频中途被关闭’)
    }
})

```

