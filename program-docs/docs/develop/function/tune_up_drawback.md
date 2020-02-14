---
title: 通知退款状态
header: develop
nav: function
sidebar: tune_up_drawback
---



### 使用场景 

百度收银台调用业务方的退款审核接口成功，且业务方返回允许退款后，平台会去做退款操作，当订单退款成功后，百度收银台会主动调用业务方的退款回调地址（开发者平台注册的退款回调地址）通知业务方该订单退款成功。

### 接口注意事项 

1. 幂等性：业务方接口需要具备幂等性[平台技术术语---幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)；

2. 超时时间：业务方接口的耗时要求小于2s（超过2s会触发平台的超时重试，重试间隔：2min/4min/10min/30min/1h...）；

3. 返回值判断：errno为0表示商户已经成功收到退款成功信息，并妥善处理。errno不为0将认为是同步退款结果信息失败，会发起重试（不限次数，重试间隔：2min/4min/10min/30min/1h...）；

4. 订单状态同步：商家收到通知退款状态回调切严格按照文档提示返回参数，后台订单状态才会同步且显示“已退款”；

>如未收到回调请求，请检查服务器网关是否有准入限制，如有限制参照[阿里云安全组设置](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/aliyun_v2.md)中的IP地址设置白名单。 

### 通知参数说明 

|参数|参数名称|类型（长度范围）|参数说明|是否可空|样例|
|---|---|---|---|---|---|
|userId|用户ID|Long|百度用户ID|	是|149235070|
|orderId|订单ID|Long|百度平台订单ID|否|1068881223|
|tpOrderId|业务方订单ID|string|业务方订单ID|是|11119800|
|refundBatchId|退款批次号|String|平台退款批次号【[幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)标识参数】(用于重入判断)|否|149235070|
|refundStatus|退款状态|Integer|1：退款成功，2：退款失败|否|1|
|rsaSign|参数签名|String	|平台生成的sign|	是|全部参数参与签名，详见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)|
备注：这里对全部参数签名是对平台的所有POST参数进行签名，如果商户URL里包含GET类型参数，不会参与签名。验签需要使用正确格式的平台公钥，可以在服务详情中查询，详见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)第8项内容。

### 返回参数说明 

|名称|类型|是否必须|示例值|描述|
|---|---|---|---|---|
|errno|	Integer|是|	0|返回码|
|msg|	String	|是|	success	|返回信息|
|data|	Object	|是|	{}	|返回数据|


### 通知触发条件 

退款成功后，平台会调用该接口，将退款成功消息通知到业务方。

### 业务方服务器通知参数获取 

1. 百度收银台是用POST方式发送通知信息，参数以URL param的方式返回。

    PHP服务推荐参数获取方式：$_POST['xxx']。

    Java服务推荐参数获取方式：@RequestParam(value="xxx")。

2. 百度收银台主动发起通知，该方式才会被启用。

3. 程序执行完后须同步返回符合要求的JSON字符串。如果商户返回给百度收银台的字符不是合法JSON或者解析出来的errno不为0，会再次重发。


### 业务方通知参数合法性验证 

当百度收银台通过调用接口同步退款信息给给业务方时，业务方获得这些数据后，必须进行如下处理:

1. 验证签名

    首先必需验证签名，然后验证是否是百度收银台发来的通知，请参见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)。

2. 业务数据处理注意事项

    业务方需要验证该通知数据中的orderId是否为业务方系统中记录的百度订单号，若未发现该订单，则表明本次通知是异常通知，务必忽略。在上述验证通过后业务方请处理退款成功消息，将处理结果返回。如果商户未正确处理业务通知，存在潜在的风险，业务方自行承担因此而产生的所有损失。


### DEMO 

* 入参(REQUEST) DEMO：

```
https:://xxx.tpbusiness.xxx/notifyRefundRes?orderId=800020199&refundBatchId=100058888&refundStatus=1&rsaSign=Gzu1RT2toJSDthcLPG1ZWROI3jzvxFtO7yCPUqMT3L7cmnARncm5IIIQ6x+7S/02zWxr5FC9945WFSurO9kepVbU7YS6Lh9SEVQhvTO0YKG7TlLFTpH3Ik7JeHQalAKXYe/jNREDpHmTF9Jrq/wABeZGYXJn1M75A37h9zUt+kw=
```

* 返回(RESPONSE) DEMO:

```
{"errno":0,"msg":"success","data":{}}
```

<br />

