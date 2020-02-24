---
title: 取消核销
header: develop
nav: function
sidebar: tune_up_rest
---


 
取消核销接口，已经支付核销过的订单不允许直接退款，想要发起退款时，需要先调用此接口进行取消核销

###  请求地址 

|环境|HTTPS请求地址|
|---|---|
|正式环境|https://nop.nuomi.com/nop/server/rest|

###  请求参数说明 

|名称|类型|是否必须|示例值|描述
|---|---|---|---|---|
|method|String|是|固定值：nuomi.cashier.syncorderstatus|API接口名称|
|orderId|Integer|是|2636635856|百度平台订单ID|
|userId|Integer|是|4188819900|百度用户ID，支付回调中返回| 
|type|integer|是|固定值：3|标识使用该接口取消订单核销状态|
|appKey|string|是|MMMzaA	|appKey|
|rsaSign|string|是| |rsa签名,所有参数参与签名，详见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)。|

<br />


> 发送请求时需要对可能包含中文及特殊字符的字段进行 UrlEncode 操作，对于除中文及特殊字符的参数不需要进行 UrlEncode。 

###  返回说明 

|名称|类型|是否必须|示例值|描述|
|---|---|---|---|---|
|errno|	Integer|是|	0|返回码|
|msg|	String	|是|	success	|返回信息|
|data|	Object	|是|	[]	|返回数据|

>"企业余额"金额小于退款金额时会导致取消核销失败，返回10003错误；如取消核销请求参数的orderID、userID填写错误，会提示10002错误，返回自查是否和系统支付回调时回传的参数一致，如一致，请反馈问题至客服邮箱 ` jiaoyi-ask@baidu.com `。 

###  返回示例 

```
{
    "errno": 0,
    "msg": "success",
    "data": []
}
```

<br />
