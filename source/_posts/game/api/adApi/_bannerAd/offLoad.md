### bannerAd.offLoad()

`offLoad()` 是 BannerAd 对象的方法，用于取消监听 banner 广告组件的加载事件。

```js
bannerAd.offLoad(callback)
```

**参数值**：

|参数|类型|是否必填|描述|
|-|-|-|-|-|-|
|callback|function|否|取消监听 banner 广告加载事件对应的回调函数(如果不传参数，则清除所有监听 banner 广告加载事件的回调函数)|


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

let onLoadFuc = function () {
    console.log(' banner 加载完成')
}

const bannerAd = swan.createBannerAd(example);
bannerAd.onLoad(onLoadFuc);
bannerAd.offLoad(onLoadFuc); // offLoad 对应的函数将取消对应的监听事件
```