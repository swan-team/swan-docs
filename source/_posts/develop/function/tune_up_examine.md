---
title: 请求业务方退款审核
header: develop
nav: function
sidebar: tune_up_examine
---
 



### 使用场景 

当用户的某个订单申请了退款后，百度收银台会主动调用业务方的退款审核地址（开发者平台注册的退款审核地址）询问订单是否可退。




### 接口注意事项 

1. 幂等性：业务方接口需要具备幂等性[平台技术术语---幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)；

2. 超时时间：业务方接口的耗时要求小于2s（超过2s会触发平台的超时重试，重试间隔：2min/4min/10min/30min/1h...）；

3. 返回值判断：errno为0表示业务方已经成功收到该订单的退款审核信息，errno不为0将认为是请求业务方退款审核接口失败，会发起重试（不限次数，重试间隔：2min/4min/10min/30min/1h...）。

4. 异常退款：由于支付回调不成功导致的异常退款也会请求业务方退款审核。

#### 请求参数说明 

|参数|参数名称|类型（长度范围）|参数说明|是否必需|样例|
|---|---|---|---|---|---|
|orderId|订单ID|Long|百度平台订单ID|是|1068881223|
|userId|用户ID|Long	|百度用户ID|	是|149235070|
|tpOrderId|业务方订单ID|string|业务方订单ID|是|11119800|
|refundBatchId|退款批次号|String	|百度平台退款批次号【[幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)标识参数】(用于重入判断)|	是|149235070|
|rsaSign|参数签名|String	|平台生成的sign|	是|全部参数参与签名，详见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)|

<br />

> 这里对全部参数签名是对平台的所有POST参数进行签名，如果商户URL里包含GET类型参数，不会参与签名。验签需要使用正确格式的平台公钥，可以在服务详情中查询，详见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)第8项内容。

####  返回参数说明 



|名称|类型|是否必须|示例值|描述|
|---|---|---|---|---|
|errno|	Integer|是|	0|返回码|
|msg|	String	|是|	success	|返回信息|
|data|	Object	|是|	{"auditStatus":1,"calculateRes":{"refundPayMoney":100}}	|返回数据|

<br />

data字段为json格式，参数如下：

|名称|类型|是否必须|示例值|描述|
|---|---|---|---|---|
|auditStatus|Integer|是|0|退款审核状态|
|calculateRes|Object|是|{"refundPayMoney":100}|全额退和部分退均要填写订单实际退款金额，单位：分。不论审核成功还是失败都需要填写本字段。|

>refundPayMoney的值是以分为单位的整数。 
<br />

auditStatus枚举值说明如下：

|auditStatus枚举值|枚举说明|
|---|---|
|1|审核通过可退款|
|2|审核不通过，不能退款|
|3|审核结果不确定，待重试|

<br />



**auditStatus重要性：**为必传参数（不传会认为接口返回出错），用来标识第三方的退款审核结果，平台根据审核结果执行退款或置为不可退款，若auditStatus=3，百度收银台会视为审核结果不确定，会继续重试（重试频率：每5min一次），目前重试次数&重试期限不做限制（直到业务方返回审核通过或不通过等审核终态才结束重试）。
>业务方返回auditStatus=3，退款审核结果不确定，收银台不会给用户退款，可能会影响用户退款体验。


### 通知触发条件 

当订单发起退款时，经平台初步校验认为可以退款的，会通过此接口向业务方请求退款审核。


### 业务方服务器参数获取 

1. 百度收银台是用POST方式发送通知信息，因此该页面中获取参数的方式，如：request.Form(“orderId”)、$_POST[‘orderId’]；

2. 百度收银台主动发起通知，该方式才会被启用；

3. 服务器间的交互，不像页面跳转同步通知可以在页面上显示出来，这种交互方式是不可见的；

4. 程序执行完后必须打印输出符合要求的JSON字符串。如果商户反馈给百度收银台的字符不是合法json或者解析出来的errno不为0会对此次请求发起重试；

5. cookies、session等在此页面会失效，即无法获取这些数据；

6. 该方式的调试与运行必须在服务器上，即互联网上能访问。


### 业务方通知参数合法性验证 

当百度收银台通过调用接口请求业务方订单退款审核时，业务方获得这些数据后，必须进行如下处理:

1. 验证签名

    首先必需验证签名，然后验证是否是平台发来的通知，请参见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)。

2. 业务数据处理注意事项

    业务方需要验证该通知数据中的orderId是否为业务方系统中创建的订单号，若非业务方订单，则表明本次通知是异常通知，务必忽略。在上述验证通过后业务方请审核判断该订单是否可以退款，将审核结果返回（若业务方返回可退款，平台会执行退款任务，退款成功后该笔订单不参与业务方的核销结算）。如果商户未正确处理业务通知，存在潜在的风险，商户自行承担因此而产生的所有损失。


### DEMO 

* 入参(REQUEST) DEMO：

```
http://xxx.tpbusiness.xxx/refundAudit?orderId=800020199&refundBatchId=100003588&rsaSign=Gzu1RT2toJSDthcLPG1ZWROI3jzvxFtO7yCPUqMT3L7cmnARncm5IIIQ6x+7S/02zWxr5FC9945WFSurO9kepVbU7YS6Lh9SEVQhvTO0YKG7TlLFTpH3Ik7JeHQalAKXYe/jNREDpHmTF9Jrq/wABeZGYXJn1M75A37h9zUt+kw=
```

* 返回(RESPONSE) DEMO:

```
{"errno":0,"msg":"success","data":{"auditStatus":1, "calculateRes":{"refundPayMoney":100}}}
```

<br />

>refundPayMoney的值是以分为单位的整数，如不严格按照文档提示操作，会导致退款审核失败。 
<br />
