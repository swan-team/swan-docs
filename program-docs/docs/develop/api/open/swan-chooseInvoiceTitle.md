---
title: swan.chooseInvoiceTitle
header: develop
nav: api
sidebar: swan-chooseInvoiceTitle
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/chooseInvoiceTitle/chooseInvoiceTitle
---
 

> 在工具和真机中的实现有区别，详见[API 实现差异](https://smartapp.baidu.com/docs/develop/devtools/diff/)。

**解释**： 选择用户的发票抬头，使用该 API 需通过[获取用户权限设置](https://smartprogram.baidu.com/docs/develop/api/open/authorize_set/)申请授权后方可对用户发起授权申请，可在[需授权接口列表](https://smartprogram.baidu.com/docs/develop/api/open/authorize_list/)中查看相关错误码信息。

 
## 方法参数 

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|success | Function |  否  | | 接口调用成功的回调函数|
|fail   | Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明 

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|type|    String|  抬头类型（0：单位，1：个人）|
|title|   String|  抬头名称|
|taxNumber|   String|  抬头税号|
|companyAddress|  String|  单位地址|
|telephone|   String|  手机号码|
|bankName|    String|  银行名称|
|bankAccount| String|  银行账号|
<!-- |errMsg|  String|  接口调用结果| -->
## 示例

<a href="swanide://fragment/cc76d7bff883f25aae817297814658931559043491920" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/chooseInvoiceTitle.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/chooseInvoiceTitle.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div> 


### 代码示例 



* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="chooseInvoiceTitle">chooseInvoiceTitle</button>
</view>
```

* 在 js 文件中

```js
page({
    chooseInvoiceTitle() {
        swan.chooseInvoiceTitle({
            success: res => {
                console.log('chooseInvoiceTitle success', res);
            },
            fail: err => {
                console.log('chooseInvoiceTitle fail', err);
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


## Bugs & Tips 

swan.chooseInvoiceTitle 自带前置登录  逻辑，不需要单独调用 swan.login 。


 
