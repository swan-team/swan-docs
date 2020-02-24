---
title: swan.chooseAddress
header: develop
nav: api
sidebar: chooseaddress_swan-chooseAddress
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/chooseAddress/chooseAddress
---
 

**解释**： 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，使用该 API 需通过[获取用户权限设置](https://smartprogram.baidu.com/docs/develop/api/open/authorize_set/)申请授权后方可对用户发起授权申请，可在[需授权接口列表](https://smartprogram.baidu.com/docs/develop/api/open/authorize_list/)中查看相关错误码信息。

 
## 方法参数 

Object object

###  `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|success | Function |  否 || 返回用户选择的收货地址信息|
|fail   | Function  |  否 || 接口调用失败的回调函数|
|complete  |  Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

 success返回参数说明 ：

|参数名 |类型 | 说明|最低版本
|---- | ---- | ---- |---- |
|userName|String |  收货人姓名| |
|postalCode  |String|  邮编| |
|provinceCode|	String|	国标收货地址第一级地址国家码|最低支持版本 3.90.4 |
|provinceName|    String|  国标收货地址第一级地址| |
|cityCode|	String|	国标收货地址第二级地址国家码|最低支持版本 3.90.4|
|cityName|    String|  国标收货地址第二级地址| |
|countyCode|	String|	国标收货地址第三级地址国家码|最低支持版本 3.90.4 |
|countyName|  String|  国标收货地址第三级地址| |
|townCode	|String	|国标收货地址第四级地址国家码	|最低支持版本 3.90.4 |
|townName|	String|	国标收货地址第四级地址	|最低支持版本 3.90.4 |
|detailInfo|  String|  详细收货地址信息| |
|telNumber|   String|  收货人手机号码| |
|nationalCode|	String	|收货地址国家码| ||
## 示例

###  扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/chooseAddress.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###   图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/chooseAddress.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div> 

###   代码示例1 - 用户允许授权情况下 ：

<a href="swanide://fragment/5d1a82023678a73b86f305e73aad9ebe1558336758577" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="chooseAddress">chooseAddress</button>
</view>
```

* 在 js 文件中

```js
Page({
    chooseAddress() {
        swan.chooseAddress({
            success: res => {
                console.log('chooseAddress success', res);
            },
            fail: err => {
                console.log('chooseAddress fail', err);
            }
        });
    }
});
```

###  代码示例2 - 用户在拒绝了一次授权情况下，仍可访问此api ：

<a href="swanide://fragment/5d1a82023678a73b86f305e73aad9ebe1558336758577" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="chooseAddress">chooseAddress</button>
</view>
```

* 在 js 文件中

```js
Page({
    chooseAddress() {
        swan.chooseAddress({
            success: res => {
                console.log('chooseAddress success', res);
            },
            fail: err => {
                if(errCode == 10003){
                    swan.openSetting({});
                }
                console.log('chooseAddress fail', err);
            }
        });
    }
});
```
 
