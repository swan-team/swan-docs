---
title: 百度收银台支付
layout: gamedoc
topic: openApi
categoryName: api
priority: 01-11
---

### swan.requestPolymerPayment()

发起百度收银台支付。

**解释：**

支付接口调用前需要用户进行百度帐号登录，未登录的用户系统会强行先调用登录操作，再调起支付。

```js
swan.requestPolymerPayment(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|-|
|opts.orderInfo|Object|是|订单信息|
|opts.bannedChannels|Array.<`string`>|否| 需要隐藏的支付方式|
|opts.success|function|否|成功的回调函数|
|opts.fail|function|否|失败的回调函数|
|opts.complete|function|否|接口调用完成的回调函数（接口调用成功、失败都会执行）|

`opts.orderInfo` 对象结构：

|值|必填|描述|
|-|-|-|
|opts.orderInfo.dealId|是|跳转百度收银台支付必带参数之一，是百度收银台的财务结算凭证，与账号绑定的结算协议一一对应，每笔交易将结算到dealId对应的协议主体。详见[核心参数获取](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/mini_program_cashier/parameter.md) |
|opts.orderInfo.appKey|是|[百度电商开放平台 appKey](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/term_v2.md) ，用以表示应用身份的唯一 ID，在应用审核通过后进行分配，一经分配后不会发生更改，来唯一确定一个应用。详见[核心参数获取](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/mini_program_cashier/parameter.md) |
|opts.orderInfo.totalAmount|是|订单金额，单位为人民币分|
|opts.orderInfo.tpOrderId|是|商户平台自己记录的订单 ID，当支付状态发生变化时，会通过此订单 ID 通知商户|
|opts.orderInfo.dealTitle|是|订单的名称|
|opts.orderInfo.signFieldsRange|是|固定值 1|
|opts.orderInfo.rsaSign|是|对对 appKey，dealId，tpOrderId，totalAmount RSA 加密后的签名，防止订单被伪造。签名过程见[百度电商开发平台：签名与验签](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/sign_v2.md) |
|opts.orderInfo.bizInfo|否|订单详细信息，需要是一个可解析为 JSON Object 的字符串。字段内容见：[百度电商开发平台：收银台接入](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/mini_program_cashier/parameter.md) |

`opts.bannedChannels` 的合法值：

|值|描述|
|-|-|
|Alipay|支付宝|
|BDWallet|百度钱包|
|WeChat|微信支付|

`success` 回调函数：

形如 `function (res) {...}`, 其中:

|属性|描述|
|-|-|
|res|成功信息描述（每种支付渠道返回值类型与信息会有差异，具体需开发者用真机自行检验）|

`fail` 回调函数：

形如 `function (res) {...}`, 其中:

|属性|描述|
|-|-|
|res|失败信息描述（每种支付渠道返回值类型与信息会有差异，具体需开发者用真机自行检验）|

`complete` 回调函数：

当接口调用成功时，其返回值与 `success` 回调函数的返回值相同；
当接口调用失败时，其返回值与 `fail` 回调函数的返回值相同。

**示例：**

```js
swan.request({
    url: '', // 开发者服务器接口地址
    method: 'GET',
    dataType: 'json',
    data: {},
    header: {
        'content-type': 'application/json' // 默认值
    },
    success: res => {
        swan.requestPolymerPayment({
            orderInfo: {
                dealId: res.dealId, // "470193086"
                appKey: res.appKey, // "MMMabc"
                totalAmount: res.totalAmount, // "800"
                tpOrderId: res.tpOrderId, // "3028903626"
                dealTitle: res.dealTitle, // "支付8元测试"
                rsaSign: res.rsaSign, // "A+MJYVd5SAgZ4ouhxNavvBxY5XVCNrWSi6knlGVY/dIn0z3zd9b37/BDFa6WT....."
                signFieldsRange: 1,
                bizInfo: res.bizInfo // {tpData: {"appkey": "MMMabc", "dealId": "470193086", "dealTitle": "支付8元测试", "payResultUrl": "", "returnData": "111", "rsaSign": "A+MJYVd5SAgZ4ouhxNavvBxY5XVCNrWSi6knlGVY/dIn0z3zd9b37/BDFa6WT.....", "totalAmount": "800", "tpOrderId": "3028903626"}}
            },
            bannedChannels: ['ApplePay'],
            success: res => {
                swan.showToast({
                    title: '支付成功',
                    icon: 'success'
                });
            },
            fail: res => {
                swan.showToast({
                    title: JSON.stringify(res)
                });
            }
        });
    },
    fail: err => {
        console.log('错误码：', err.errCode);
        console.log('错误信息：', err.errMsg);
    }
});

```

**注意：**

iOS 暂不支持使用此接口
