### bannerAd.offError()

`offError()` 是 BannerAd 对象的方法，用于取消监听 banner 广告的错误事件。

```js
bannerAd.offError(callback)
```

**参数值**：

|参数|类型|是否必填|描述|
|-|-|-|-|-|-|
|callback|function|否|取消监听 banner 广告错误事件对应的回调函数(如果不传参数，则清除所有监听 banner 广告错误事件的回调函数)|


**示例**：

```js
let example = {
    adUnitId: '000000',
    appSid: '000000',
    style: {
        top: 20,
        left: 100,
        width: 300
    }
}

let onErrorFuc = function () {
    console.log(' banner 出现错误');
}

const bannerAd = swan.createBannerAd(example);
bannerAd.onError(onErrorFuc);
bannerAd.offError(onErrorFuc); // offError 对应的函数将取消对应的监听事件

```