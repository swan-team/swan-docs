### bannerAd.show()

`show()` 是 BannerAd 对象的方法，用于展示 banner 广告组件，返回一个 promise 对象。

```js
bannerAd.show()
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
bannerAd.onLoad(() => {
    bannerAd.show()
    .then()
    .catch(err => console.log(err));
})

```