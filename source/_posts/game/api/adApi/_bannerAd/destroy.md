### bannerAd.destroy()

`destroy()` 是 BannerAd 对象的方法，用于销毁 banner 广告组件，该方法没有返回值。

```js
bannerAd.destroy()
```

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
bannerAd.destroy();
```