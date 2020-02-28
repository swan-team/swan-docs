---
title: swan.requestPolymerPayment
header: develop
nav: api
sidebar: payment_swan-requestPolymerPayment
# webUrl: https://qft12m.smartapps.cn/api/payment/payment
---


 
> 基础库 1.8.5 版本开始支持。使用工具调试时为模拟支付，使用真机调试时可查看真实支付结果。在工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**解释**： 百度收银台，聚合了主流的百度钱包、微信、支付宝、网银等多种支付方式，方便开发者一站式快速接入多种支付渠道，让百度用户能在智能小程序场景下，直接完成支付、交易闭环，提升用户支付体验的同时，提高智能小程序的订单转化率。

为了帮助开发者调用收银台接口，我们提供了Go语言版本封装了签名&验签、HTTP接口请求等基础功能，详见[下载小程序支付demo](https://github.com/baidu-smart-app)。


了解更多信息，请查看[百度收银台支付开通指引](https://smartprogram.baidu.com/docs/introduction/pay/)、[支付功能开发](https://smartprogram.baidu.com/docs/develop/function/invoke_process/)。

 

## 方法参数 

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|orderInfo| Object | 是 | |订单信息|
|bannedChannels| StringArray | 否 | | 需要隐藏的支付方式|
|success |Function  |  否  | | 接口调用成功的回调函数|
|fail   | Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function  |  否 || 接口调用结束的回调函数（调用成功、失败都会执行）|

###  orderInfo 参数说明 

|参数| 必填|说明|
|----|   ----|---|
|dealId| 是|跳转百度收银台支付必带参数之一，是百度收银台的财务结算凭证，与账号绑定的结算协议一一对应，每笔交易将结算到dealId对应的协议主体。详见<a href="https://smartprogram.baidu.com/docs/develop/function/parameter/">核心参数获取与组装</a>。|
|appKey| 是|支付能力开通后分配的支付appKey，用以表示应用身份的唯一ID，在应用审核通过后进行分配，一经分配后不会发生更改，来唯一确定一个应用。详见<a href="https://smartprogram.baidu.com/docs/develop/function/parameter/)。">核心参数获取与组装</a>。|
|totalAmount|  是|订单金额，单位为人民币分。|
|tpOrderId| 是|商户平台自己记录的订单ID，当支付状态发生变化时，会通过此订单ID通知商户。|
| dealTitle| 是|订单的名称|
| signFieldsRange| 是|固定值1|
|rsaSign| 是|对`appKey+dealId+totalAmount+tpOrderId `进行RSA加密后的签名，防止订单被伪造。签名过程见 [签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)。|
|bizInfo|  是|订单详细信息，需要是一个可解析为JSON Object的字符串。字段内容见： [bizInfo组装](https://smartprogram.baidu.com/docs/develop/function/parameter/)。|

 

###  bannedChannels 参数说明  

|channel|说明 |
|----| ---- |
| Alipay | 支付宝 |
| BDWallet | 百度钱包 |
| WeChat | 微信支付|
## 示例

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/payment.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/requestPolymerPayment.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div> 

###  代码示例1 - 简单支付示例 

<a href="swanide://fragment/b5697fc510e1a409906f471c70467fec1576568451890" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


```js
Page({
    data: { },
    requestPolymerPayment(e) {
        swan.request({
            url: 'https://mbd.baidu.com/ma/nuomi/createorder',
            success: res => {
                console.log(res)
                res.data.data.dealTitle = '百度小程序Demo支付测试';
                let data = res.data;
                if (data.errno !== 0) {
                    console.log('create order err', data);
                    return;
                }

                swan.requestPolymerPayment({
                    orderInfo: data.data,
                    bannedChannels: this.getData('bannedChannels'),
                    success: res =>  {
                        swan.showToast({
                            title: '支付成功',
                            icon: 'success'
                        });
                    },
                    fail: err => {
                        swan.showToast({
                            title: err.errMsg,
                            icon: 'none'
                        });
                        console.log('pay fail', err);
                    }
                });
            },
            fail: err => {
                swan.showToast({
                    title: '订单创建失败',
                    icon: 'none'
                });
                console.log('create order fail', err);
            }
        });
    }
});

```

###  代码示例2 - 复杂支付示例 

<a href="swanide://fragment/6a8036afe85cc399b5ab4bd478100f771558341867863" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


```js
// 这里只做字段展示，详细示例请在代码片段中查看
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
    success: res => {
        swan.showToast({
            title: '支付成功',
            icon: 'success'
        });
    },
    fail: err => {
        swan.showToast({
            title: JSON.stringify(err)
        });
        console.log('pay fail', err);
    }
});
```


##  错误码
###  Android

|错误码|说明|
|:--|:--|
|1001|执行失败                                           |

###  iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
|10002|网络请求失败|
|10005|系统拒绝|

## Bug & Tip 

* 服务审核未通过会导致调起失败“商品不存在”等错误，需要移步“开发者平台-支付管理”查看服务审核状态；
* 整个orderInfo 是个 json 对象； 
* bizInfo  这个键值是一个以字符串形式存放的json对象； 
* 在调起收银台过程中，如开发者在任何一个环节没有严格按照文档要求操作均会导致此“签名错误”，请认真阅读文档。
