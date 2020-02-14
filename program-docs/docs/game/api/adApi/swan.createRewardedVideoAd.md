---
title: swan.createRewardedVideoAd()
layout: gamedoc
topic: ad
categoryName: api
priority: 07-03
---


创建小游戏激励视频广告组件，createRewardedVideoAd 成功后会自动加载第一次的广告物料。

**示例：**

```js
const rewardedVideoAd = swan.createRewardedVideoAd(opts);
```
**opts 对象属性说明**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该方法时，要传入的对象参数|
|opts.adUnitId|string| |是|广告位 ID （开发者在 Mssp 平台建立的代码位的 ID 更多细节请访问[这里](/game/introduction/flow_open/guide/)）|
|opts.appSid|string| |是|应用 ID （开发者在 Mssp 平台建立的代码位所属应用的 ID 更多细节请访问[这里](/game/introduction/flow_open/guide/)）|


**返回值：**

若接口调用成功，则返回小游戏的激励视频广告组件对象。

```js
RewardedVideoAd
```


**示例：**

```js
let example = {
    adUnitId: '000000',
    appSid: '000000'
}
const rewardedVideoAd = swan.createRewardedVideoAd(example);
```