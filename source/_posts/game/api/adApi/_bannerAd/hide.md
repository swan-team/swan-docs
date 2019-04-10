### bannerAd.hide()

`hide()` 是 BannerAd 对象的方法，用来隐藏已展示的 banner 广告组件，该方法没有返回值。

```js
bannerAd.hide()
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
bannerAd.show()
.then(() => bannerAd.hide())
.catch(err => console.log(err));
```