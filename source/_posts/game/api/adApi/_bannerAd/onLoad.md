### bannerAd.onLoad()

`onLoad()` 是 BannerAd 对象的方法，监听 banner 广告组件的加载事件。

```js
bannerAd.onLoad(callback)
```
**参数值**：

|参数|类型|是否必填|描述|
|-|-|-|-|-|-|
|callback|function|是| banner 广告加载完成后的回调函数|


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
const bannerAd = swan.createBannerAd(example);
bannerAd.onLoad(() => {
    console.log(' banner 加载完成');
})

```