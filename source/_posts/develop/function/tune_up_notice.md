---
title: 通知支付状态
header: develop
nav: function
sidebar: tune_up_notice
---
 

### 使用场景

业务方智能小程序跳转至百度收银台，输入正确的交易密码之后，即订单支付成功后，百度收银台会主动调用业务方的的支付回调地址（开发者平台注册的支付回调地址）通知业务方该订单支付成功。 

### 接口注意事项 

1. 幂等性：业务方接口需要具备幂等性[平台技术术语---幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)；

2. 超时时间：业务方接口的耗时要求小于2s（超过2s会触发平台的超时重试，每2分钟/次，共计200次，回调失败订单会保持“已付款”状态，无法核销，导致订单金额无法顺利进入企业资产）；

3. 返回值判断：errno为0表示商户已经成功收到支付信息，并妥善处理，errno不为0将认为是同步支付信息失败，当同步支付信息失败时，平台会发起重试，每2分钟/次，共计200次，订单会锁定“已付款”状态，无法核销，导致订单金额无法顺利进入企业资产；

4. 回调地址服务器部署：如果回调接口部署在阿里云或有网关准入限制，请参考文档[阿里云安全组设置](http://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/aliyun_v2.md)中的IP地址设置白名单。<br />


> * 回调地址配置后要确认服务审核是“审核通过”状态，审核中会导致无法收到回调地址,详见[服务审核注意事项](http://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_4_rule/appauditrule_v2.md)。
> * 服务器调用开发者回调接口不成功或开发者返回参数有误，平台会发起重试，每2分钟/次，共计200次，如重试后仍旧无法回调，订单会锁定“已付款”状态，无法核销，导致订单金额无法顺利进入企业资产。还请开发者仔细根据文档操作。如有无法核销的“已付款订单，请开发者提供appId、orderId、服务名称、公司名称、问题描述发送至问题反馈邮箱:jiaoyi-ask@baidu.com


#### 通知参数说明 

|参数|参数名称|类型|说明|示例|
|---|---|---|---|---|
|userId             |用户ID|Long|百度用户ID|	149235070|
|orderId            |订单ID|Long|百度平台订单ID【[幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)标识参数】(用于重入判断)|800020199|
|unitPrice          |单价|Integer|单位：分|800|
|count              |数量|Integer|数量|2|
|totalMoney         |总金额|Integer|订单的实际金额，单位：分|1600|
|payMoney           |实付金额|Integer|扣除各种优惠后用户还需要支付的金额，单位：分|1200|
|promoMoney         |营销金额|Integer|营销优惠金额|100|
|hbMoney            |红包支付金额|Integer|红包支付金额|100|
|hbBalanceMoney     |余额支付金额|Integer|余额支付金额|100|
|giftCardMoney      |抵用券金额|Integer|抵用券金额|100|
|dealId             |百度收银台凭证|Long|百度收银台的财务结算凭证|7423328|
|payTime            |支付时间|Integer|支付完成时间，时间戳|1463037529|
|promoDetail        |促销详情|Object|订单参与的促销优惠的详细信息| |
|payType            |支付渠道|Integer|支付渠道值|9101|
|partnerId          |支付平台|Integer|支付平台标识值|1000000003|
|status             |订单支付状态|Integer|1：未支付；2：已支付；-1：订单取消|2|
|tpOrderId          |业务方订单号|String|业务方唯一订单号|33330020199|
|returnData         |业务方透传数据|Object|业务方下单时传入的数据| |
|rsaSign            |rsa签名|String|rsa签名字符串|全部参数参与签名，详见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)	|


>这里对全部参数签名是对收到的平台回调的所有POST参数进行签名（这里所指的参数不包含rsasign，故不需要参与签名），空值参数同样需要参与签名，建议格式：key=&key2=value2，如没有对回调中收到的所有参数签名，会导致验签不通过，如果商户URL里包含GET类型参数，不会参与签名。注意：验签需要使用正确的平台公钥，可以在服务详情中查询，详见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)第8项内容。 

#### 返回参数说明 


|名称|类型|是否必须|示例值|描述|
|---|---|---|---|---|
|errno  |Integer        |是  |0          |返回码|
|msg	|String	    |是  |success    |返回信息|
|data   |Object	|是  |{"isConsumed":0}	|返回数据|

<br />

data字段为JSON格式，参数如下：

|名称|类型|是否必须|示例值|描述|
|---|---|---|---|---|
|isConsumed|Integer|是|2|是否标记核销|
|isErrorOrder|Integer|否|1|是否异常订单（如需主动发起异常退款，需将此字段设置为1）|

<br />

isConsumed字段参数枚举值如下：

|取值|描述|
|---|---|
|1|未消费|
|2|已消费|

<br />



#### **isConsumed重要性：**为必传参数（不传会触发异常退款），用来标记该订单是否已消费。

> 小程序接入为支付成功即消费场景，该字段需设置为2。（字段不设置为2订单不会变更为“已消费”）如isConsumed值不返回2，“已付款”状态的订单金额不能顺利进入企业余额。 

#### 通知触发条件 

用户支付成功，通过了各项支付后校验之后，会调用此接口，将支付信息同步给业务方。<br />
> 如未收到回调请求，请检查服务器网关是否有准入限制，如有限制参照[阿里云安全组设置](http://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/aliyun_v2.md)中的IP地址设置白名单；业务方接口的耗时要求小于2s。（超过2s会触发平台的超时重试，每2分钟/次，共计200次，回调失败订单会保持“已付款”状态，无法核销，导致订单金额无法顺利进入企业资产）。  <br />

#### 业务方服务器通知参数获取 

1. 百度收银台是用POST方式发送通知信息，参数以URL param的方式返回

PHP服务推荐参数获取方式：$_POST['xxx']

Java服务推荐参数获取方式：@RequestParam(value="xxx")

2. 百度收银台主动发起通知，该方式才会被启用

3. 程序执行完后须同步返回符合要求的JSON字符串。如果商户返回给百度收银台的字符不是合法JSON或者解析出来的errno不为0，会对订单发起异常退款（所付款项及资产将全数退还给用户）


#### 业务方通知参数合法性验证 

当百度收银台通过调用接口同步支付信息给给业务方时，业务方获得这些数据时，必须进行如下处理:

1. 验证签名

    首先必需验证签名，然后验证是否是百度收银台发来的通知，请参见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)。

2. 业务数据处理注意事项

    业务方需要验证该通知数据中的tpOrderId是否为业务方系统中创建的订单号，并判断totalMoney是否确实为该订单的实际金额（即商户订单创建时的金额），上述有任何一个验证不通过，则表明本次通知是异常通知，务必忽略。在上述验证通过后业务方必须根据百度收银台不同类型的业务通知，正确的进行不同的业务处理，并且过滤重复的通知结果数据。如果商户需要对同步返回的数据做验签，必须通过服务端的签名验签代码逻辑来实现。如果商户未正确处理业务通知，存在潜在的风险，商户自行承担因此而产生的所有损失。


#### DEMO 

* 入参(REQUEST) DEMO：

```
http://xxx.tpbusiness.xxx/SyncPayInfo?userId=149235070&orderId=800020199&unitPrice=800&count=2&totalMoney=1600&payMoney=1200&promoMoney=100&hbMoney=100&hbBalanceMoney=100&giftCardMoney=100&dealId=7423328&payTime=1463037529&promoDetail=&payType=9101&partnerId=1000000003&status=2&tpOrderId=33330020199&returnData=&rsaSign=Gzu1RT2toJSDthcLPG1ZWROI3jzvxFtO7yCPUqMT3L7cmnARncm5IIIQ6x+7S/02zWxr5FC9945WFSurO9kepVbU7YS6Lh9SEVQhvTO0YKG7TlLFTpH3Ik7JeHQalAKXYe/jNREDpHmTF9Jrq/wABeZGYXJn1M75A37h9zUt+kw=
```

<br />

* 返回(RESPONSE) DEMO:

```
{"errno":0,"msg":"success","data":{"isConsumed":2}}
```

如处理支付回调的过程中开发者端参数异常、其他异常，返回以下参数进行异常退款:

```
{"errno": 0,"msg": "success","data": {"isErrorOrder": 1,"isConsumed": 2}
```

<br />



 小程序场景isConsumed返回值一定要为2，（字段不设置为2订单不会变更为“已消费”）不按照要求值返回参数，用户已付款金额不能顺利进入企业余额。 
