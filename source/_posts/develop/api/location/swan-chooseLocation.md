---
title: swan.chooseLocation
header: develop
nav: api
sidebar: swan-chooseLocation
---



 

**解释**： 打开地图选择位置。需要用户授权 scope.userLocation。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/chooseLocation.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success  | Function |否 | | 接口调用成功的回调函数|
|fail  | Function |否 | | 接口调用失败的回调函数|
|complete  | Function |否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数  |说明  |
|---- | ---- |
|name   | 位置名称|
|address |  详细地址|
|latitude  | 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系，[查询指定地点的经纬度方法](/develop/faq/apifaq/)。|
|longitude  |  经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系，[查询指定地点的经纬度方法](/develop/faq/apifaq/)。|

**代码示例**：

<a href="swanide://fragment/ebaf0022546dcefd6de64c062af9b6481569570163901" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    onReady() {
        swan.authorize({
            scope: 'scope.userLocation',
            success: res => {
                console.log(res);
            },
            fail: function () {
                console.log('授权失败');
            }
        });
    },
    chooseLocation() {
        swan.chooseLocation({
            success: res => {
                console.log('chooseLocation success', res);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
```

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|1002|用户取消错误码                                |
|1003|没有获取位置的权限|
|1007|地图服务异常|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确       |
|1002|用户取消操作错误码|
|1003|没有获取位置的权限|
|1007|地图服务异常|