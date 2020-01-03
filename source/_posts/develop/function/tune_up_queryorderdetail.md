---
title: 支付状态查询
header: develop
nav: function
sidebar: tune_up_queryorderdetail
---



###  请求Url 

|环境|URL地址|
|---|---|
|正式环境|https://dianshang.baidu.com/platform/entity/openapi/queryorderdetail|


> 必须是走收银台的订单

###  请求参数说明 

**参数介绍**

|参数名称|类型|是否必须|描述|
|---|---|---|---|
|appId| Long |是|10026，在支付能力申请通过后，开发者在开发者平台-支付管理-支付设置中查看支付的APP ID|
|appKey|String|是|MMM4oc，在开发者平台开通支付能力后分配的支付appKey|
|orderId|Long|是|1920891312,百度平台订单ID|
|siteId|Long|是|	百度用户ID(通过支付成功回调给业务的userId)，如：2250333905|
|sign|String|是|RSA签名，基于appKey/appId/orderId/siteId，参数计算，详见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)。|

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
