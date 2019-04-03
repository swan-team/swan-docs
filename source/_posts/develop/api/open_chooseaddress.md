---
title: 选择收货地址
header: develop
nav: api
sidebar: open_chooseaddress
---
## swan.chooseAddress

**解释：** 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，需要用户授权 scope.address。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success | Function |  否  |  -|返回用户选择的收货地址信息|
|fail   | Function  |  否  |  -|接口调用失败的回调函数|
|complete  |  Function  |  否 | -|  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|userName|String |  收货人姓名|
|postalCode  |String|  邮编|
|provinceName|    String|  国标收货地址第一级地址|
|cityName|    String|  国标收货地址第二级地址|
|countyName|  String|  国标收货地址第三级地址|
|detailInfo|  String|  详细收货地址信息|
|telNumber|   String|  收货人手机号码|
|nationalCode|	String	|收货地址国家码|

**示例：**
```js
swan.chooseAddress({
    success: function (res) {
        console.log(res.userName);
        console.log(res.postalCode);
        console.log(res.provinceName);
        console.log(res.cityName);
        console.log(res.countyName);
        console.log(res.detailInfo);
        console.log(res.telNumber);
    }
});
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|202|解析失败，请检查参数是否正确。|
|1001|执行失败|
|1002|用户取消操作错误码|
|1003|选择失败状态码|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|10001|内部错误|
|10002|网络请求失败|
|10004|用户拒绝(user not login)| -->
