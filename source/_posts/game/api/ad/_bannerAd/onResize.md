### bannerAd.onResize()

`onResize()` 是 BannerAd 对象的方法，监听 banner 广告位尺寸变化的事件。

```js
bannerAd.onResize(callback)
```

**参数值：**

|参数|类型|是否必填|描述|
|-|-|-|-|-|-|
|callback|function|是|开发者改变 banner 广告位尺寸后的回调函数|


**回调函数参数值：**

|参数|类型|描述|
|-|-|-|-|-|-|
|res|Object|回调函数的参数|
|res.width|number|改变后 banner 广告位的宽度|
|res.height|number|改变后 banner 广告位的高度|


**示例：**

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
const bannerAd = swan.createBannerAd(example);
rewardedVideoAd.onResize((res) => {
    console.log(' banner 广告位宽度变化');
})
bannerAd.style.width = 350;

```