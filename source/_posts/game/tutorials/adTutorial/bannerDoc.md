
---
title: Banner 广告
layout: gamedoc
categoryName: tutorials
topic: ad
priority: 10-01
---

**注意：目前广告调试只能使用手百真机包就行调试，IDE 不支持广告调试。**

小游戏 Banner 广告组件在小游戏最上层渲染。

开发者调用 [swan.createBannerAd()](/game/api/adApi/swan.createBannerAd/) 创建 Banner 广告组件。Banner 广告组件会在创建时自动拉取广告物料，开发者调用 Banner 广告组件的 [show()](/game/api/adApi/bannerDoc/#bannerAd-show) 方法来显示。


```js
let banner = swan.createBannerAd({
  adUnitId: 'xxxx',
  appSid: '1111'
  style: {
    left: 10,
    top: 10,
    width: 350
  }
})

banner.onLoad(() => {
    banner.show()
})

```

创建 Banner 广告组件时，style 里的 left、top、width 为必传属性，小游戏 Banner 广告组件目前宽高比是固定值， 所以 height 不需要开发者创建时传入。

广告组件的大小会根据开发者传入的 style.width 进行等比缩放，范围为 300 到 屏幕宽度。屏幕宽度可以通过 [swan.getSystemInfoSync()](/game/api/system/systemInfo/#swan-getSystemInfoSync) 获取，若开发者传入的值小于 300，Banner 组件会取 300 为宽，超过屏幕宽度则会取屏幕宽度为 Banner 组件宽度。

### 显示与隐藏

Banner 广告组件分别调用 [hide()](/game/api/adApi/bannerDoc/#bannerAd-hide) 和 [show()](/game/api/adApi/bannerDoc/#bannerAd-show) 方法进行展示和隐藏。

hide() 方法没有返回值，会立即隐藏掉当前的 Banner 广告组件。

show() 方法会返回一个 promise 对象。成功时返回一个 resolved Promise， 失败时返回一个 rejected Promise。

```js
banner.show()
.then(() => console.log('banner 广告显示'))
.catch(err => console.log(err))

```


### 广告填充

Banner 广告组件在创建时会去自动请求广告数据，请求成功后触发注册在 [banner.onLoad()](/game/api/adApi/bannerDoc/#bannerAd-onLoad) 里的回调函数， 请求失败会触发注册在 [banner.onError()](/game/api/adApi/bannerDoc/#bannerAd-onError) 里的回调函数。


```js
banner.onError(err => {
  console.log(err)
})


```

onError 里回调函数的参数是错误的错误码以及错误信息。具体错误信息请看[这里](/game/api/adApi/bannerDoc/#bannerAd-onError)


```js
banner.onLoad(() => {
  console.log('banner 广告加载成功')
})


```

onLoad里回调函数没有参数。

### onResize

开发者可以在创建完 Banner 广告组件后修改组件的大小以及展示的位置。

```js
banner.style.width = 360;
banner.style.left = 50;

```

当 Banner 组件的大小变化时，会触发开发者注册在 [bannerAd.onResize()](/game/api/adApi/bannerDoc/#bannerAd-onResize) 里的回调函数，回调函数的参数为缩放后 Banner 组件的宽和高的对象。

```js
banner.onResize(res => {
  console.log(res.width, res.height)
})

```

### Banner 广告的销毁与更新

开发者可以在一个小游戏中创建多个 Banner 广告组件，并且每一个组件都是独立的对象。但每个 Banner 广告组件创建后只会请求一次广告物料。所以如果需要更新 Banner 广告。开发者需要重新创建一个新的 Banner 广告组件。对于不需要的旧的 Banner 广告组件要进行销毁，防止因为过多无用的 Banner 广告组件影响小游戏性能。

```js
banner.destroy()
let newBanner = swan.createBannerAd({
  // ...
})

```

destroy() 方法没有返回值。



