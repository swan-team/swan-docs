---
title: 风控
header: develop
nav: api
sidebar: open_riskInfo
---

## swan.getSystemRiskInfo

**解释**： 获取用于得到风控信息的加密信息对象。

**方法参数**：Object object

**`object`参数说明**：

|参数名|类型|必填|默认值|说明|
|----|----|----|----|----|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行)|

**success返回参数说明**：

|参数|类型|说明|
|----|----|----|
|content|Object|用于获取风控信息的加密信息对象，content 使用方式详见 [风控检测说明](/develop/serverapi/open_risk_power/#detectrisk/)|

**示例**：

<a href="swanide://fragment/e8f8b341e79ae777f0e8c9fcd46395321561118230856" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getSystemRiskInfo">getSystemRiskInfo</button>
</view>
```

* 在 js 文件中

```js
Page({
    getSystemRiskInfo() {
        swan.getSystemRiskInfo({
            success: function (res) {
                console.log('getSystemRiskInfo success', res);
            },
            fail: function (err) {
                console.log('getSystemRiskInfo fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```