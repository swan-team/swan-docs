---
title: 申请退款
header: develop
nav: function
sidebar: tune_up_applyorderrefund
---
 

 


### 特别说明

防止资金池金额小于退款金额时退款失败的情况，建议根据业务退款情况，在“管理中心——支付服务设置——我的服务——服务——财务设置”设置“每日退款上限(元)”和“打款预留(元)”。

* 每日退款上限(元) ：设置每日退款上限。当日退款达到设置金额时，当日新发起的退款都会失败。

* 打款预留(元)：结款日资金池预留的不打款的金额，保证资金池有金额退款。

>发起部分退款时，订单必须是核销状态。 


<br />

### 申请退款接口
```
nuomi.cashier.applyorderrefund
```

####  请求地址 

|环境|HTTPS请求地址|
|---|---|
|正式环境|https://nop.nuomi.com/nop/server/rest|

#### 请求参数说明 

|名称|类型|是否必须|示例值|描述
|---|---|---|---|---|
|method|String|是|nuomi.cashier.applyorderrefund|API接口名称|
|orderId|Long|是|800200451|百度平台订单ID|
|userId|Long|是|2250333905|百度用户ID|
|refundType|Integer|是|1|退款类型：1：用户发起退款；2：业务方客服退款；3：业务方服务异常退款|
|refundReason|String|是|“充值未到账”|业务方发起退款的原因|
|tpOrderId|String|是|10000234|业务方唯一订单号|
|appKey|String|是|MMM4hG	|appKey|
|rsaSign|String|是| |rsa签名,所有参数参与签名，详见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)|
|applyRefundMoney|Integer|否|100|退款金额，单位：分，发起部分退款时必传|
|bizRefundBatchId|String|否|12132434546634535|业务方退款批次id，退款业务流水唯一编号，发起部分退款时必传|

<br />

>发送请求时需要对可能包含中文及特殊字符的字段进行UrlEncode操作，对于除中文及特殊字符的参数不需要进行UrlEncode。


#### 返回说明 

|名称|类型|是否必须|示例值|描述|
|---|---|---|---|---|
|errno|	Integer|是|	0|返回码|
|msg|	String	|是|	success	|返回信息|
|data|	Object	|是|	[]	|返回数据|

####  返回示例 
```
{
    "errno": 0,
    "msg": "success",
    "data": {
        "refundBatchId": "152713835",//平台退款批次号
        "refundPayMoney": "9800" //平台可退退款金额【分为单位】
    }
}
```

<br />


