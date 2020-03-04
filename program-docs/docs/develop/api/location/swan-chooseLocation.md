---
title: swan.chooseLocation
header: develop
nav: api
sidebar: swan-chooseLocation
# webUrl: https://qft12m.smartapps.cn/swan-api/chooseLocation/chooseLocation
---



 

**解释**： 打开地图选择位置。需要用户授权 scope.userLocation。使用该 API 需通过[获取用户权限设置](https://smartprogram.baidu.com/docs/develop/api/open/authorize_set/)申请授权后方可对用户发起授权申请，可在[需授权接口列表](https://smartprogram.baidu.com/docs/develop/api/open/authorize_list/)中查看相关错误码信息。
 
## 方法参数 
 
 Object object

### `object`参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|success  | Function |否 | | 接口调用成功的回调函数|
|fail  | Function |否 | | 接口调用失败的回调函数|
|complete  | Function |否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

### success 返回参数说明  

|参数  |说明  |
|---- | ---- |
|name   | 位置名称|
|address |  详细地址|
|latitude  | 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系，[查询指定地点的经纬度方法](/develop/faq/apifaq/)。|
|longitude  |  经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系，[查询指定地点的经纬度方法](/develop/faq/apifaq/)。|

## 示例

<a href="swanide://fragment/8d260b725527f894f3e42571fcb9b57e1573635756219" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/chooseLocation.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/chooseLocation.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div> 

### 代码示例  


* 在 js 文件中

```js
Page({
    chooseLocation() {
         swan.authorize({
            scope: 'scope.userLocation',
            success: res => {
                console.log(res);
            },
            fail: function () {
                swan.openSetting({})
            }
        });
        let that = this;
        swan.chooseLocation({
            success: res => {
                console.log('success', res);
                let longitude = 'E:' + that.formatLocation(res.longitude) + '′';
                let latitude =  'N:' + that.formatLocation(res.latitude) + '′';
                that.setData({
                    'name': res.name,
                    'address': res.address,
                    'longitude': longitude,
                    'latitude': latitude
                });
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    },
    formatLocation(data) {
        return data.toFixed(2).replace('.', '°');
    }
})
```


