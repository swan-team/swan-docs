---
title: swan.openLocation
header: develop
nav: api
sidebar: swan-openLocation
---

**解释**：使用宿主 App 内置地图查看位置。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/openLocation.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|latitude   | Float |  是  | | 纬度，范围为 -90~90，负数表示南纬。|
|longitude  | Float  | 是  | | 经度，范围为 -180~180，负数表示西经。|
|scale  | INT |否 | |  缩放比例，范围 5~18，默认为18。|
|name  | String |否 | | 位置名|
|address  | String |否 | | 地址的详细说明|
|success  | Function |否 | | 接口调用成功的回调函数|
|fail  | Function |否 | | 接口调用失败的回调函数|
|complete  | Function |否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：
<a href="swanide://fragment/c85dc8f8f87366dcde740c908c21e79f1569429868373" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    data: {
        locationInfo: {
            latitude: 40.04,
            longitude: 116.27,
            scale: 18,
            name: '百度科技园',
            address: '北京市海淀区西北旺东路10号院'
        }
    },
    openLocation () {
        let locationInfo = this.data.locationInfo;
        swan.openLocation({
            latitude: locationInfo.latitude,
            longitude: locationInfo.longitude,
            scale: locationInfo.scale,
            name: locationInfo.name,
            address: locationInfo.address,
            success: res => {
                console.log('openLocation success', res);
            },
            fail : function (err) {
                console.log('openLocation fail', err);
            }
        });
    }
});
```
 #### 错误码

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |