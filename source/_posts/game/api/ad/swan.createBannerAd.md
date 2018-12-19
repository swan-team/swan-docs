---
title: swan.createBannerAd()
layout: gamedoc
topic: ad
categoryName: api
priority: 10-01
---


创建小游戏 banner 广告组件，createBannerAd 成功后会自动加载广告物料。

**示例：**

```js
const bannerAd = swan.createBannerAd(opts);
```
**opts 对象属性说明：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该方法时，要传入的对象参数|
|opts.adUnitId|string| |是|广告位 ID （开发者在 Mssp 平台建立的代码位的 ID 更多细节请访问[这里](/game/introduction/flow_open/guide/)）|
|opts.appSid|string| |是|应用 ID （开发者在 Mssp 平台建立的代码位所属应用的 ID 更多细节请访问[这里](/game/introduction/flow_open/guide/)）|
|opts.style|object| |是| banner 样式|

** opts.style 对象属性说明：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|style.top|number| |是| banner 广告左上角的纵坐标值|
|style.left|number| |是| banner 广告左上角的横坐标值|
|style.width|number| |是| banner 广告的宽度|
|style.height|number| |否| banner 广告的高度|

**备注：**

banner 广告组件的宽高比是固定值，所以开发者只需要传入 width 值即可。


**返回值：**

若接口调用成功，则返回小游戏的 banner 广告组件对象。

```js
BannerAd
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
```