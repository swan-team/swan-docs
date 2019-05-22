### bannerAd.onError()

`onError()` 是 BannerAd 对象的方法，监听 banner 广告的错误事件。

```js
bannerAd.onError(callback)
```

**参数值**：

|参数|类型|是否必填|描述|
|-|-|-|-|-|-|
|callback|function|是| banner 广告出现错误的回调函数|


**回调函数参数值**：

|属性|类型|描述|
|-|-|-|-|-|-|
|err|Object|回调函数的参数|
|err.errCode|number|错误码|
|err.errMsg|string|错误信息|


** errCode 与对应的错误信息**

|错误码|错误描述|
|-|-|-|-|-|-|
|103010|appSid 缺失|
|103011|appSid 错误，MSSP 未收录|
|103012|appSid 无效，MSSP 上未生效|
|103020|appSid 无效，渠道 ID 信息错误|
|107000|adUnitId 缺失|
|107001|adUnitId 未收录|
|107002|adUnitId 未启用|
|107003|adUnitId 与 appSid 不匹配|
|200000|无广告返回|
|201000|无广告数据|
|3010000|广告组件挂载失败|
|3010002|广告请求失败|
|3010003|网络连接错误|
|3010004|没有可以展示的广告|
|3010005|广告正在拉取中，不能重复请求|
|3010006|广告正在展示中，不能请求广告|
|3010007|广告请求参数为空|
|3010010|没有可以展示的 banner 广告|
|else|其余错误码均为内部错误|


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
bannerAd.onError((err) => {
    console.log(' banner 广告错误');
})

```