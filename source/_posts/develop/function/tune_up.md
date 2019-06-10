---
title: 调起百度收银台
header: develop
nav: function
sidebar: tune_up
---


## 调起百度收银台

> 基础库 1.8.5 版本开始支持。使用工具调试时为模拟支付，使用真机调试时可查看真实支付结果。

**解释**： 百度收银台，聚合了主流的百度钱包、微信、支付宝、网银等多种支付方式，方便开发者一站式快速接入多种支付渠道，让百度用户能在智能小程序场景下，直接完成支付、交易闭环，提升用户支付体验的同时，提高智能小程序的订单转化率。

为了帮助开发者调用收银台接口，我们提供了Go语言版本封装了签名&验签、HTTP接口请求等基础功能，详见[下载小程序支付demo](https://github.com/baidu-smart-app)。


了解更多信息，请查看[百度收银台支付开通指引](https://smartprogram.baidu.com/docs/introduction/pay/)、[支付功能开发](http://smartprogram.baidu.com/docs/develop/function/invoke_process/)。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|orderInfo| Object | 是 | -|订单信息|
|bannedChannels| StringArray | 否 | -| 需要隐藏的支付方式|
|success |Function  |  否  | -| 接口调用成功的回调函数|
|fail   | Function  |  否  | -| 接口调用失败的回调函数|
|complete  |  Function  |  否 |  -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**orderInfo 参数说明**：

|参数| 必填|说明|
|----|   ----|---|
|dealId| 是|跳转百度收银台支付必带参数之一，是百度收银台的财务结算凭证，与账号绑定的结算协议一一对应，每笔交易将结算到dealId对应的协议主体。详见<a href="http://smartprogram.baidu.com/docs/develop/function/parameter/">核心参数获取与组装与组装</a>。|
|appKey| 是|支付能力开通后分配的支付appKey，用以表示应用身份的唯一ID，在应用审核通过后进行分配，一经分配后不会发生更改，来唯一确定一个应用。详见<a href="http://smartprogram.baidu.com/docs/develop/function/parameter/)。">核心参数获取与组装</a>。|
|totalAmount|  是|订单金额，单位为人民币分。|
|tpOrderId| 是|商户平台自己记录的订单ID，当支付状态发生变化时，会通过此订单ID通知商户。|
| dealTitle| 是|订单的名称|
| signFieldsRange| 是|固定值1|
|rsaSign| 是|对`appKey+dealId+tpOrderId+totalAmount`进行RSA加密后的签名，防止订单被伪造。签名过程见 [签名与验签](http://smartprogram.baidu.com/docs/develop/function/sign_v2/)。|
|bizInfo|  是|订单详细信息，需要是一个可解析为JSON Object的字符串。字段内容见： [bizInfo组装](http://smartprogram.baidu.com/docs/develop/function/parameter/)。|

 

**bannedChannels 参数说明**：

|channel|说明 |
|----| ---- |
| Alipay | 支付宝 |
| BDWallet | 百度钱包 |
| WeChat | 微信支付|

**示例**：
<a href="swanide://fragment/6a8036afe85cc399b5ab4bd478100f771558341867863" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>


```js
swan.requestPolymerPayment({
    orderInfo: {
        "dealId": "470193086",
        "appKey": "MMMabc",
        "totalAmount": "1",
        "tpOrderId": "3028903626",
        "dealTitle": "智能小程序Demo支付测试",
        "signFieldsRange": "1",
        "rsaSign": '',
        "bizInfo": ''
    },
    success: function (res) {
        swan.showToast({
            title: '支付成功',
            icon: 'success'
        });
    },
    fail: function (err) {
        swan.showToast({
            title: JSON.stringify(err)
        });
        console.log('pay fail', err);
    }
});
```

**说明**：

> * 服务审核未通过会导致调起失败“商品不存在”等错误，需要移步“开发者平台-支付管理”查看服务审核状态；
* 整个orderInfo 是个 json 对象； 
* bizInfo  这个键值是一个以字符串形式存放的json对象； 
* 在调起收银台过程中，如开发者在任何一个环节没有严格按照文档要求操作均会导致此“签名错误”，请认真阅读文档。

## 通知支付状态
#### 使用场景

业务方智能小程序跳转至百度收银台，输入正确的交易密码之后，即订单支付成功后，百度收银台会主动调用业务方的的支付回调地址（开发者平台注册的支付回调地址）通知业务方该订单支付成功。

###  接口注意事项 

* **幂等性：**业务方接口需要具备幂等性[平台技术术语---幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)；

* **超时时间：**业务方接口的耗时要求小于2s（超过2s会触发平台的超时重试，为保障体验，重试只有三次，回调失败订单会保持“已付款”状态，无法核销，导致订单金额无法顺利进入企业资产）；

* **返回值判断：**errno 为 0 表示商户已经成功收到支付信息，并妥善处理，errno 不为 0 将认为是同步支付信息失败，连续三次，订单会锁定“已付款”状态，无法核销，导致订单金额无法顺利进入企业资产；

* **回调地址服务器部署：**如果回调接口部署在阿里云或有网关准入限制，请参考文档[阿里云安全组设置](http://smartprogram.baidu.com/docs/develop/function/aliyun_v2/)中的IP地址设置白名单。<br />


回调地址配置后要确认服务审核是“审核通过”状态，审核中会导致无法收到回调地址,详见[服务审核注意事项](http://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_4_rule/appauditrule_v2.md)。

服务器调用开发者回调接口不成功或开发者返回参数有误连续三次，订单会锁定“已付款”状态，无法核销，导致订单金额无法顺利进入企业资产。还请开发者仔细根据文档操作。如有无法核销的“已付款订单，请开发者提供appId、orderId、服务名称、公司名称、问题描述发送至问题反馈邮箱，` jiaoyi-ask@baidu.com `。
 

###  通知参数说明 

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
|rsaSign            |rsa签名|String|rsa签名字符串|全部参数参与签名，详见[签名与验签](http://smartprogram.baidu.com/docs/develop/function/sign_v2/)。	|


 这里对全部参数签名是对收到的平台回调的所有POST参数进行签名（这里所指的参数不包含rsasign，故不需要参与签名），空值参数不会发送且不需要参与签名，如没有对回调中收到的所有参数签名，会导致验签不通过，如果商户URL里包含GET类型参数，不会参与签名。 

###  返回参数说明 


|名称|类型|是否必须|示例值|描述|
|---|---|---|---|---|
|errno  |Integer        |是  |0          |返回码|
|msg	|String	    |是  |success    |返回信息|
|data   |Object	|是  |{"isConsumed":0}	|返回数据|



data字段为JSON格式，参数如下：

|名称|类型|是否必须|示例值|描述|
|---|---|---|---|---|
|isConsumed|Integer|是|2|是否标记核销|
|isErrorOrder|Integer|否|1|是否异常订单（如需主动发起异常退款，需将此字段设置为1）|



isConsumed字段参数枚举值如下：

|取值|描述|
|---|---|
|1|未消费|
|2|已消费|



**注意:**

**isConsumed重要性：**为必传参数（不传会触发异常退款），用来标记该订单是否已消费。
小程序接入为支付成功即消费场景，该字段需设置为 2。（字段不设置为 2 订单同样会变更为“已消费”）如 isConsumed 值不返回 2，“已消费”状态的订单金额不能顺利进入企业余额。 

### 通知触发条件 

用户支付成功，通过了各项支付后校验之后，会调用此接口，将支付信息同步给业务方。 
如未收到回调请求，请检查服务器网关是否有准入限制，如有限制参照[阿里云安全组设置](http://smartprogram.baidu.com/docs/develop/function/aliyun_v2/)中的IP地址设置白名单；业务方接口的耗时要求小于 2s
（超过 2s 会触发平台的超时重试，为保障体验，重试只有三次，回调失败订单会保持“已付款”状态，无法核销，导致订单金额无法顺利进入企业资产）。 

###  业务方服务器通知参数获取 

1、百度收银台是用 POST 方式发送通知信息，参数以 URL param 的方式返回。

PHP服务推荐参数获取方式：$_POST['xxx']

Java服务推荐参数获取方式：@RequestParam(value="xxx")

2、百度收银台主动发起通知，该方式才会被启用。

3、程序执行完后须同步返回符合要求的 JSON 字符串。如果商户返回给百度收银台的字符不是合法 JSON 或者解析出来的 errno不为0，会对订单发起异常退款（所付款项及资产将全数退还给用户）。


###  业务方通知参数合法性验证 

当百度收银台通过调用接口同步支付信息给给业务方时，业务方获得这些数据时，必须进行如下处理:

1、验证签名

首先必需验证签名，然后验证是否是百度收银台发来的通知，请参见[签名与验签](http://smartprogram.baidu.com/docs/develop/function/sign_v2/)。

2、业务数据处理注意事项

业务方需要验证该通知数据中的 tpOrderId 是否为业务方系统中创建的订单号，并判断 totalMoney 是否确实为该订单的实际金额（即商户订单创建时的金额），上述有任何一个验证不通过，则表明本次通知是异常通知，务必忽略。在上述验证通过后业务方必须根据百度收银台不同类型的业务通知，正确的进行不同的业务处理，并且过滤重复的通知结果数据。如果商户需要对同步返回的数据做验签，必须通过服务端的签名验签代码逻辑来实现。如果商户未正确处理业务通知，存在潜在的风险，商户自行承担因此而产生的所有损失。


###  DEMO 

入参(REQUEST) DEMO：

```
http://xxx.tpbusiness.xxx/SyncPayInfo?userId=149235070&orderId=800020199&unitPrice=800&count=2&totalMoney=1600&payMoney=1200&promoMoney=100&hbMoney=100&hbBalanceMoney=100&giftCardMoney=100&dealId=7423328&payTime=1463037529&promoDetail=&payType=9101&partnerId=1000000003&status=2&tpOrderId=33330020199&returnData=&rsaSign=Gzu1RT2toJSDthcLPG1ZWROI3jzvxFtO7yCPUqMT3L7cmnARncm5IIIQ6x+7S/02zWxr5FC9945WFSurO9kepVbU7YS6Lh9SEVQhvTO0YKG7TlLFTpH3Ik7JeHQalAKXYe/jNREDpHmTF9Jrq/wABeZGYXJn1M75A37h9zUt+kw=
```

 

返回(RESPONSE) DEMO:

```
{"errno":0,"msg":"success","data":{"isConsumed":2}}
```

如处理支付回调的过程中开发者端参数异常、其他异常，返回以下参数进行异常退款:

```
{"errno": 0,"msg": "success","data": {"isErrorOrder": 1,"isConsumed": 2}
```

 

小程序场景 isConsumed 返回值一定要为 2，（字段不设置为2订单不会变更为“已消费”）不按照要求值返回参数，用户已付款金额不能顺利进入企业余额。

## 支付状态查询

###  请求Url 

|环境|URL地址|
|---|---|
|正式环境|https://dianshang.baidu.com/platform/entity/openapi/queryorderdetail|


> 必须是走收银台的订单

###  请求参数说明 

**参数介绍**

|参数名称|类型|是否必须|描述|
|---|---|---|---|
|appId| Long |是|10026，指应用ID，在用户应用申请通过后，开发者进入管理中心查看应用的APP ID|
|appKey|String|是|MMM4oc,第三方应用在百度电商开放平台的唯一标识|
|orderId|Long|是|1920891312,百度平台订单ID|
|siteId|Long|是|	百度用户ID(通过支付成功回调给业务的userId)，如：2250333905|
|sign|String|是|RSA签名，基于appKey/appId/orderId/siteId，参数计算，详见[签名与验签](http://smartprogram.baidu.com/docs/develop/function/sign_v2/)。|

<br />

**数据请求Demo**

```javascript

https://dianshang.baidu.com/platform/entity/openapi/queryorderdetail?appKey=MMM4oc&appId=10026&siteId=3747777038&orderId=1920891312&sign=TR%2FITwQxgJ7ZWfHOmhdijEMvOxcuzR5Z7SrcOtaFmNo%2FTVBachkwPP7jMnp5vPga9p3FCVGzzDLhdTrrDz%2BT0IMDd00YW4Uc1UobCE0q3roKpE2Yz05gt%2FJmNgvjghr%2FP9pv12PWg2BL2F5voxLj%2BHclo42tggRY1CaBGmJ41iE%3D

```

<br />

**数据返回 Demo**

```javascript
{
    "errno": 0,
    "errmsg": "成功",
    "msg": "成功",
    "data": {
        "data": {
            "payStatus": {
                "statusNum": 1, //-1未支付,1支付成功
                "statusDesc": "支付成功"
            },
            "refundStatus": {
                "statusNum": -1, //-1未退费,1退费中,2退费成功,9退费失败
                "statusDesc": "未退费"
            },
            "verification":{
               "statusNum": -1, //-1未核销,1已核销
               "statusDesc": "无核销数据"
           }
        }
    },
    "timestamp": 1482735200,
    "cached": 0,
    "serverlogid": "3200820823"
}


```

## 取消核销

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
|rsaSign|string|是| |rsa签名,所有参数参与签名，详见[签名与验签](http://smartprogram.baidu.com/docs/develop/function/sign_v2/)。|

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



## 申请退款

> 业务方可以通过该接口申请订单退款，仅限在百度电商开放平台支付的订单。

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
|rsaSign|String|是| |rsa签名,所有参数参与签名，详见[签名与验签](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/sign.md)|
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




<!-- #### 使用场景 

百度收银台调用业务方的退款审核接口成功，且业务方返回允许退款后，平台会去做退款操作，当订单退款成功后，百度收银台会主动调用业务方的退款回调地址（开发者平台注册的退款回调地址）通知业务方该订单退款成功。

###  接口注意事项 

* **幂等性：**业务方接口需要具备幂等性[平台技术术语---幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)；

* **超时时间：**业务方接口的耗时要求小于2s（超过2s会触发平台的超时重试，重试间隔：2min/4min/10min/30min/1h...）；

* **返回值判断：**errno为0表示商户已经成功收到退款成功信息，并妥善处理。errno不为0将认为是同步退款结果信息失败，会发起重试（不限次数，重试间隔：2min/4min/10min/30min/1h...）；

* **订单状态同步：**商家收到通知退款状态回调切严格按照文档提示返回参数，后台订单状态才会同步且显示“已退款”；

>如未收到回调请求，请检查服务器网关是否有准入限制，如有限制参照[阿里云安全组设置](http://smartprogram.baidu.com/docs/develop/function/aliyun_v2/)中的IP地址设置白名单。

###  通知参数说明 

|参数|参数名称|类型（长度范围）|参数说明|是否可空|样例|
|---|---|---|---|---|---|
|userId|用户ID|Long|百度用户ID|	是|149235070|
|orderId|订单ID|Long|百度平台订单ID|否|1068881223|
|tpOrderId|业务方订单ID|string|业务方订单ID|是|11119800|
|refundBatchId|退款批次号|String|平台退款批次号【[幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)标识参数】(用于重入判断)|否|149235070|
|refundStatus|退款状态|Integer|1：退款成功，2：退款失败|否|1|
|rsaSign|参数签名|String	|平台生成的sign|	是|全部参数参与签名，详见[签名与验签](http://smartprogram.baidu.com/docs/develop/function/sign_v2/)|
备注：这里对全部参数签名是对平台的所有POST参数进行签名，如果商户URL里包含GET类型参数，不会参与签名。

###  返回参数说明 

|名称|类型|是否必须|示例值|描述|
|---|---|---|---|---|
|errno|	Integer|是|	0|返回码|
|msg|	String	|是|	success	|返回信息|
|data|	Object	|是|	{}	|返回数据|


###  通知触发条件 

退款成功后，平台会调用该接口，将退款成功消息通知到业务方。

###  业务方服务器通知参数获取 

1.百度收银台是用POST方式发送通知信息，参数以URL param的方式返回

  PHP服务推荐参数获取方式：$_POST['xxx']

  Java服务推荐参数获取方式：@RequestParam(value="xxx") 

2.百度收银台主动发起通知，该方式才会被启用

3.程序执行完后须同步返回符合要求的JSON字符串。如果商户返回给百度收银台的字符不是合法JSON或者解析出来的errno不为0，会再次重发


###  业务方通知参数合法性验证 

当百度收银台通过调用接口同步退款信息给给业务方时，业务方获得这些数据后，必须进行如下处理:

1.验证签名

首先必需验证签名，然后验证是否是百度收银台发来的通知，请参见[签名与验签](http://smartprogram.baidu.com/docs/develop/function/sign_v2/)。

2.业务数据处理注意事项

业务方需要验证该通知数据中的orderId是否为业务方系统中记录的百度订单号，若未发现该订单，则表明本次通知是异常通知，务必忽略。在上述验证通过后业务方请处理退款成功消息，将处理结果返回。如果商户未正确处理业务通知，存在潜在的风险，业务方自行承担因此而产生的所有损失。


### DEMO 

入参(REQUEST) DEMO：

```
http://xxx.tpbusiness.xxx/notifyRefundRes?orderId=800020199&refundBatchId=100058888&refundStatus=1&rsaSign=Gzu1RT2toJSDthcLPG1ZWROI3jzvxFtO7yCPUqMT3L7cmnARncm5IIIQ6x+7S/02zWxr5FC9945WFSurO9kepVbU7YS6Lh9SEVQhvTO0YKG7TlLFTpH3Ik7JeHQalAKXYe/jNREDpHmTF9Jrq/wABeZGYXJn1M75A37h9zUt+kw=
```

返回(RESPONSE) DEMO:

```
{"errno":0,"msg":"success","data":{}}
```

<br /> -->



## 请求业务方退款审核

#### 使用场景 

* 当用户的某个订单申请了退款后，百度收银台会主动调用业务方的退款审核地址（开发者平台注册的退款审核地址）询问订单是否可退。

* 用户支付成功后，百度收银台通过通知业务方支付成功接口通知业务方，业务方反馈给百度收银台的字符不是合法json或者解析出来的errno不为0时，系统会自动发起退款，此时百度收银台也会调用业务方的退款审核接口询问业务方订单是否可以退款。


### 接口注意事项 

* **幂等性：**业务方接口需要具备幂等性[平台技术术语---幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)；

* **超时时间：**业务方接口的耗时要求小于2s（超过2s会触发平台的超时重试，重试间隔：2min/4min/10min/30min/1h...）；

* **返回值判断：**errno为0表示业务方已经成功收到该订单的退款审核信息，errno不为0将认为是请求业务方退款审核接口失败，会发起重试（不限次数，重试间隔：2min/4min/10min/30min/1h...）。

* **异常退款：**由于支付回调不成功导致的异常退款也会请求业务方退款审核；

### 请求参数说明 

|参数|参数名称|类型（长度范围）|参数说明|是否必需|样例|
|---|---|---|---|---|---|
|orderId|订单ID|Long|百度平台订单ID|是|1068881223|
|userId|用户ID|Long	|百度用户ID|	是|149235070|
|tpOrderId|业务方订单ID|string|业务方订单ID|是|11119800|
|refundBatchId|退款批次号|String	|百度平台退款批次号【[幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)标识参数】(用于重入判断)|	是|149235070|
|rsaSign|参数签名|String	|平台生成的sign|	是|全部参数参与签名，详见[签名与验签](http://smartprogram.baidu.com/docs/develop/function/sign_v2/)|

<br />

备注：这里对全部参数签名是对平台的所有POST参数进行签名，如果商户URL里包含GET类型参数，不会参与签名。

###  返回参数说明 



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
|calculateRes|Object|是|{"refundPayMoney":100}|退款金额（默认全退即下单时的payMoney金额，暂不支持部分退)，不论审核成功还是失败都需要填写本字段|

 >refundPayMoney的值是以分为单位的整数。 

auditStatus枚举值说明如下：

|auditStatus枚举值|枚举说明|
|---|---|
|1|审核通过可退款|
|2|审核不通过，不能退款|
|3|审核结果不确定，待重试|

<br />

#### **注意:**

**auditStatus重要性：**为必传参数（不传会认为接口返回出错），用来标识第三方的退款审核结果，平台根据审核结果执行退款或置为不可退款，若auditStatus=3，百度收银台会视为审核结果不确定，会继续重试（重试频率：每5min一次），目前重试次数&重试期限不做限制（直到业务方返回审核通过或不通过等审核终态才结束重试），注意：业务方返回auditStatus=3，退款审核结果不确定，收银台不会给用户退款，可能会影响用户退款体验。


### **通知触发条件**

当订单发起退款时，经平台初步校验认为可以退款的，会通过此接口向业务方请求退款审核。


### **业务方服务器参数获取**

1、百度收银台是用POST方式发送通知信息，因此该页面中获取参数的方式，如：request.Form(“orderId”)、$_POST[‘orderId’]；

2、百度收银台主动发起通知，该方式才会被启用；

3、服务器间的交互，不像页面跳转同步通知可以在页面上显示出来，这种交互方式是不可见的；

4、程序执行完后必须打印输出符合要求的JSON字符串。如果商户反馈给百度收银台的字符不是合法json或者解析出来的errno不为0会对此次请求发起重试；

5、cookies、session等在此页面会失效，即无法获取这些数据；

6、该方式的调试与运行必须在服务器上，即互联网上能访问。


### **业务方通知参数合法性验证**

当百度收银台通过调用接口请求业务方订单退款审核时，业务方获得这些数据后，必须进行如下处理:

1、验证签名

首先必需验证签名，然后验证是否是平台发来的通知，请参见[签名与验签](http://smartprogram.baidu.com/docs/develop/function/sign_v2/)。

2、业务数据处理注意事项

业务方需要验证该通知数据中的orderId是否为业务方系统中创建的订单号，若非业务方订单，则表明本次通知是异常通知，务必忽略。在上述验证通过后业务方请审核判断该订单是否可以退款，将审核结果返回（若业务方返回可退款，平台会执行退款任务，退款成功后该笔订单不参与业务方的核销结算）。如果商户未正确处理业务通知，存在潜在的风险，商户自行承担因此而产生的所有损失。


### **DEMO**

入参(REQUEST) DEMO：

```
http://xxx.tpbusiness.xxx/refundAudit?orderId=800020199&refundBatchId=100003588&rsaSign=Gzu1RT2toJSDthcLPG1ZWROI3jzvxFtO7yCPUqMT3L7cmnARncm5IIIQ6x+7S/02zWxr5FC9945WFSurO9kepVbU7YS6Lh9SEVQhvTO0YKG7TlLFTpH3Ik7JeHQalAKXYe/jNREDpHmTF9Jrq/wABeZGYXJn1M75A37h9zUt+kw=
```

返回(RESPONSE) DEMO:

```
{"errno":0,"msg":"success","data":{"auditStatus":1, "calculateRes":{"refundPayMoney":100}}}
```

<br />

>refundPayMoney的值是以分为单位的整数，如不严格按照文档提示操作，会导致退款审核失败。
<br />


## 通知退款状态

#### 使用场景 

百度收银台调用业务方的退款审核接口成功，且业务方返回允许退款后，平台会去做退款操作，当订单退款成功后，百度收银台会主动调用业务方的退款回调地址（开发者平台注册的退款回调地址）通知业务方该订单退款成功。

###  接口注意事项 

* **幂等性：**业务方接口需要具备幂等性[平台技术术语---幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)；

* **超时时间：**业务方接口的耗时要求小于2s（超过2s会触发平台的超时重试，重试间隔：2min/4min/10min/30min/1h...）；

* **返回值判断：**errno为0表示商户已经成功收到退款成功信息，并妥善处理。errno不为0将认为是同步退款结果信息失败，会发起重试（不限次数，重试间隔：2min/4min/10min/30min/1h...）；

* **订单状态同步：**商家收到通知退款状态回调切严格按照文档提示返回参数，后台订单状态才会同步且显示“已退款”；

>如未收到回调请求，请检查服务器网关是否有准入限制，如有限制参照[阿里云安全组设置](http://smartprogram.baidu.com/docs/develop/function/aliyun_v2/)中的IP地址设置白名单。

###  通知参数说明 

|参数|参数名称|类型（长度范围）|参数说明|是否可空|样例|
|---|---|---|---|---|---|
|userId|用户ID|Long|百度用户ID|	是|149235070|
|orderId|订单ID|Long|百度平台订单ID|否|1068881223|
|tpOrderId|业务方订单ID|string|业务方订单ID|是|11119800|
|refundBatchId|退款批次号|String|平台退款批次号【[幂等性](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/anchor/term.md)标识参数】(用于重入判断)|否|149235070|
|refundStatus|退款状态|Integer|1：退款成功，2：退款失败|否|1|
|rsaSign|参数签名|String	|平台生成的sign|	是|全部参数参与签名，详见[签名与验签](http://smartprogram.baidu.com/docs/develop/function/sign_v2/)|
备注：这里对全部参数签名是对平台的所有POST参数进行签名，如果商户URL里包含GET类型参数，不会参与签名。

###  返回参数说明 

|名称|类型|是否必须|示例值|描述|
|---|---|---|---|---|
|errno|	Integer|是|	0|返回码|
|msg|	String	|是|	success	|返回信息|
|data|	Object	|是|	{}	|返回数据|


###  通知触发条件 

退款成功后，平台会调用该接口，将退款成功消息通知到业务方。

###  业务方服务器通知参数获取 

1.百度收银台是用POST方式发送通知信息，参数以URL param的方式返回

  PHP服务推荐参数获取方式：$_POST['xxx']

  Java服务推荐参数获取方式：@RequestParam(value="xxx") 

2.百度收银台主动发起通知，该方式才会被启用

3.程序执行完后须同步返回符合要求的JSON字符串。如果商户返回给百度收银台的字符不是合法JSON或者解析出来的errno不为0，会再次重发


###  业务方通知参数合法性验证 

当百度收银台通过调用接口同步退款信息给给业务方时，业务方获得这些数据后，必须进行如下处理:

1.验证签名

首先必需验证签名，然后验证是否是百度收银台发来的通知，请参见[签名与验签](http://smartprogram.baidu.com/docs/develop/function/sign_v2/)。

2.业务数据处理注意事项

业务方需要验证该通知数据中的orderId是否为业务方系统中记录的百度订单号，若未发现该订单，则表明本次通知是异常通知，务必忽略。在上述验证通过后业务方请处理退款成功消息，将处理结果返回。如果商户未正确处理业务通知，存在潜在的风险，业务方自行承担因此而产生的所有损失。


### DEMO 

入参(REQUEST) DEMO：

```
http://xxx.tpbusiness.xxx/notifyRefundRes?orderId=800020199&refundBatchId=100058888&refundStatus=1&rsaSign=Gzu1RT2toJSDthcLPG1ZWROI3jzvxFtO7yCPUqMT3L7cmnARncm5IIIQ6x+7S/02zWxr5FC9945WFSurO9kepVbU7YS6Lh9SEVQhvTO0YKG7TlLFTpH3Ik7JeHQalAKXYe/jNREDpHmTF9Jrq/wABeZGYXJn1M75A37h9zUt+kw=
```

返回(RESPONSE) DEMO:

```
{"errno":0,"msg":"success","data":{}}
```

<br />

