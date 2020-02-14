---
title: swan.addPhoneContact
header: develop
nav: api
sidebar: swan-addPhoneContact
---

 

**解释**：调用后，用户可以选择将联系人数据以“新增联系人”或“添加到已有联系人”的方式，写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加。

## 方法参数 

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|photoFilePath |String | 否  | | 头像本地文件路径|
|nickName |String | 否  | |昵称|
|lastName |String | 否  | |姓氏|
|middleName |String | 否  | | 中间名|
|firstName |String | 是  | | 名字|
|remark|String|否| |备注|
|mobilePhoneNumber |String | 否  | | 手机号|
|weChatNumber |String | 否  | |微信号|
|addressCountry |String | 否  | | 联系地址国家|
|addressState |String | 否  | |联系地址省份|
|addressCity |String | 否  | |联系地址城市|
|addressStreet |String | 否  | | 联系地址街道|
|addressPostalCode |String | 否  | |联系地址邮政编码|
|organization |String | 否  | |公司|
|title |String | 否  | |职位|
|workFaxNumber |String | 否  | |工作传真|
|workPhoneNumber |String | 否  | |工作电话|
|hostNumber |String | 否  | |公司电话|
|email |String | 否  | | 电子邮件|
|url |String | 否  | |网站|
|workAddressCountry |String | 否  | | 工作地址国家|
|workAddressState |String | 否  | | 工作地址省份|
|workAddressCity |String | 否  | | 工作地址城市|
|workAddressStreet |String | 否  | | 工作地址街道|
|workAddressPostalCode |String | 否  | | 工作地址邮政编码|
|homeFaxNumber |String | 否  | | 住宅传真|
|homePhoneNumber |String | 否  | |住宅电话|
|homeAddressCountry |String | 否  | | 住宅地址国家|
|homeAddressState |String | 否  | | 住宅地址省份|
|homeAddressCity |String | 否  | | 住宅地址城市|
|homeAddressStreet |String | 否  | |住宅地址街道|
|homeAddressPostalCode |String | 否  | | 住宅地址邮政编码|
|success| Function  |  否  | |接口调用成功的回调|
|fail  |  Function  |  否 | |  接口调用失败的回调函数|
|complete  |  Function |   否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

## 示例

<a href="swanide://fragment/453112cac6fd6392b45fac632ebe00c81569483938431" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/offAppHide.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


### 图片示例


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/addPhoneContact.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 




* 在 js 文件中

```js
Page({
    addPhoneContact() {
        swan.addPhoneContact({
            firstName: 'white',
            middleName: '',
            photoFilePath: '',
            nickName: '',
            lastName: '',
            middleName: '',
            remark: '',
            mobilePhoneNumber: '',
            weChatNumber: '',
            addressCountry: '',
            addressState: '',
            addressCity: '',
            addressStreet: '',
            addressPostalCode: '',
            organization: '',
            title: '',
            workFaxNumber: '',
            workPhoneNumber: '',
            hostNumber: '',
            email: '',
            url: '',
            workAddressCountry: '',
            workAddressState: '',
            workAddressCity: '',
            workAddressStreet: '',
            workAddressPostalCode: '',
            homeFaxNumber: '',
            homePhoneNumber: '',
            homeAddressCountry: '',
            homeAddressState: '',
            homeAddressCity: '',
            homeAddressStreet: '',
            homeAddressPostalCode: '',
            success: res => {
                console.log('vibrateLong success', res);
            },
            fail: err => {
                console.log('vibrateLong fail', err);
            }
        });
    }
});
```


 
##  错误码
###  Android

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
|1001|执行失败|

###  iOS

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
