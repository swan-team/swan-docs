---
title: swan.getLocation
header: develop
nav: api
sidebar: swan-getLocation
webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/getLocation/getLocation
---
 

> 在工具和真机中的实现有区别，详见[API 实现差异](/develop/devtools/diff/)。

**解释**： 获取当前的地理位置、速度。当用户离开智能小程序后，此接口无法调用。使用该 API 需通过[获取用户权限设置](https://smartprogram.baidu.com/docs/develop/api/open/authorize_set/)申请授权后方可对用户发起授权申请，可在[需授权接口列表](https://smartprogram.baidu.com/docs/develop/api/open/authorize_list/)中查看相关错误码信息。

 
## 方法参数 
 
 Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|type   | String | 否  |wgs84 |   返回 gps 坐标，可选 gcj02 。wgs84 返回 gps 坐标，gcj02 返回火星坐标，gcj02 比 wgs84更为精确,所以返回可用于传入 swan.openLocation 的坐标|
|altitude   | Boolean | 否  | | 传入 true 会返回高度信息，获取高度需要较高精度且需要打开 gps， 会很耗时 ，默认没有用 gps。|
|success |Function  |  否 | |  接口调用成功的回调函数，返回内容详见返回参数说明。|
|fail  |  Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function |   否 || 接口调用结束的回调函数（调用成功、失败都会执行）|

### success 返回参数说明 ：

|参数  |说明  |
|---- | ---- |
|latitude   | 纬度，浮点数，范围为-90~90，负数表示南纬。|
|longitude |  经度，浮点数，范围为-180~180，负数表示西经。|
|speed  | 速度，浮点数，单位m/s。|
|accuracy  |  位置的精确度|
|altitude  |  高度，单位 m 。|
|verticalAccuracy  |  垂直精度，单位 m（Android 无法获取，返回 0） 。|
|horizontalAccuracy  |水平精度，单位 m 。 |
|street|街道名称|
|cityCode|城市编码|
|city|城市名称|
|country|国家|
|countryCode|国家代码|
|province|省份|
|streetNumber|街道号码|
|district|区|


## 示例

 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getLocation.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 

### 代码示例1  

<a href="swanide://fragment/4f8aa57e40c45c5e6cd624fbc86a0d261569429223720" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    getLocation() {
        swan.getLocation({
            type: 'wgs84',
            altitude: true,
            success: res => {
                console.log('getLocation success', res)
            },
            fail: err => {
                console.log('getLocation fail', err)
            }
        });
    }
});
```

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        同一位置下type属性为wgs84：
        <img src="https://b.bdstatic.com/miniapp/images/wgs84.jpeg">
    </div>
    <div class="m-doc-custom-examples-correct">
        同一位置下type属性为gcj02：
        <img src="https://b.bdstatic.com/miniapp/images/gcj02.jpeg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例2 - 图示可知type属性为gcj02的位置更为精准，建议与swan.openLocation连用 ：

<a href="swanide://fragment/f1d54cb8696efd08c210dc36c9ec09a91575112912482" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    getLocation(e) {
        swan.getLocation({
            type: 'gcj02', 
            altitude: true,
            success: res => {
                console.log('success', res);
                swan.openLocation({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    success: res => {
                        console.log('openLocation success', res);
                    },
                    fail : function (err) {
                        console.log('openLocation fail', err);
                    }
                });
            },
            fail: err => {
                swan.showToast({title: '获取失败'});
            },
            complete: () => {
                this.setData('loading', false);
            }
        });
    },
});
```




