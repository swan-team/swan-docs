---
title: 获取发票抬头
header: develop
nav: api
sidebar: open_chooseinvoicetitle
---
## swan.chooseInvoiceTitle

**解释：** 选择用户的发票抬头，需要用户授权 scope.invoiceTitle。

**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success | Function |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

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

**示例：**
```js
swan.chooseInvoiceTitle({
    success: function (res) {
        console.log(res.type);
        console.log(res.title);
        console.log(res.taxNumber);
        console.log(res.companyAddress);
        console.log(res.telephone);
        console.log(res.bankName);
        console.log(res.bankAccount);
    }
})
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|1001|执行失败|
|1002|取消选择状态码|
|1003|选择失败状态码|

**iOS**

|错误码|说明|
|--|--|
|1001|解析失败，请检查参数是否正确。|
|1002|取消获取发票|
|1003|获取发票失败| -->