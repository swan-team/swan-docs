---
title: 查看位置
header: develop
nav: api
sidebar: location_open
---
## swan.openLocation

**解释**：使用宿主 App 内置地图查看位置。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|latitude   | Float |  是  | -| 纬度，范围为 -90~90，负数表示南纬。|
|longitude  | Float  | 是  | -| 经度，范围为 -180~180，负数表示西经。|
|scale  | INT |否 | -|  缩放比例，范围 5~18，默认为18。|
|name  | String |否 | -| 位置名|
|address  | String |否 | -| 地址的详细说明|
|success  | Function |否 | -| 接口调用成功的回调函数|
|fail  | Function |否 | -| 接口调用失败的回调函数|
|complete  | Function |否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：
<a href="swanide://fragment/871fe815f19378bd3e236b906660af671560167014840" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <view class="item">
            <view class="label">经度</view>
            <view class="value">116°27′</view>
        </view>
        <view class="item">
            <view class="label">纬度</view>
            <view class="value">40°04′</view>
        </view>
        <view class="item">
            <view class="label">位置名称</view>
            <view class="value">{{locationInfo.name}}</view>
        </view>
        <view class="item">
            <view class="label">详细位置</view>
            <view class="value">{{locationInfo.address}}</view>
        </view>
        <button class="button" bind:tap="openLocation" type="primary" loading="{{loading}}" hover-stop-propagation="true">查看位置</button>
    </view>
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">{{title}}</view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        title: 'openLocation',
        loading: false,
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
            scale: 18,
            name: locationInfo.name,
            address: locationInfo.address,
            success: res => {
                console.log('success', res);
            },
            fail : function (err) {
                swan.showToast({
                    title: '检查位置权限',
                    icon: 'none'
                })
                console.log('fail msg', err);
            }
        });
    }
});
```
 