---
title: 支付服务功能
header: develop
nav: third
sidebar: paymentservice
---

本接口是第三方平台（TP）代替小程序开发者完成开通支付功能而提供的 API。小程序自己开通支付服务的参见[百度收银台支付开通指引](https://smartprogram.baidu.com/docs/introduction/pay/)。第三方平台帮助小程序开通支付功能需要经历三个步骤，并且需要小程序授予开发者**支付服务权限**（唯一性权限）：

1. 代创建支付账号。
2. 提交开发者信息设置。
3. 创建支付服务。

因此，为了满足上面的步骤，现在提供如下接口：

0. 获取创建支付服务的数据字典

1. 创建支付账号

   * 1.1 创建支付账号
   * 1.2 支付账号创建状态查询
2. 提交开发者信息

   * 2.1 提交开发者信息
3. 创建支付服务
   * 3.1 创建并绑定支付服务
   * 3.2 支付服务创建状态查询
   * 3.3 更新支付服务部分信息（不需要审核）
   * 3.4 更新支付服务全部信息（需要审核）
   * 3.5 获取绑定的支付服务信息

* 审核消息推送

当完成上述的步骤，开发者就可以调用以下接口获取支付信息数据了。目前提供以下信息接口数据：

4.  支付数据获取
    * 4.1 支付订单流水列表。
    * 4.2 支付收入列表
    * 4.3 支付收入贷款列表
    * 4.4 支付收入其他款项列表
    * 4.5 支出列表
    * 4.6 支付打款详情

* 错误码列表



## 0. 获取开通支付服务的数据字典

数据字典返回的内容包含了四部分的内容：开户省市信息、开户银行信息、佣金比例、结算周期。后续一些接口的调用需要传递的值，需要来源于这个数据字典。

**请求地址**

```
GET  https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/dict?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据 |

**返回值说明**

| 参数            | 类型 | 说明                                                       |
| --------------- | ---- | ---------------------------------------------------------- |
| province_list   | List | 开户省市（支付服务 open_province，open_city ）             |
| bank_list       | List | 开户银行 （支付服务 bank_name）                            |
| commission_rate | Map  | 佣金比例，小程序固定为千分之六（支付服务 commission_rate） |
| payment_days    | Map  | 结算周期（支付服务 payment_days）                          |

**返回值示例**

```json
{
    "province_list":[
        {
                "provinceId":0,
                "provinceName":"澳门",
                "cities":[
                    {
                        "cityId":0,
                        "cityName":"澳门"
                    }
                ]
            }
        ...
    ],
    "bank_list":[
        {
                "character":"B",
                "banks":[
                    {
                        "bankId":0,
                        "bankName":"北京银行",
                        "logoUrl":"http://e.hiphotos.baidu.com/nuomi/pic/item/adaf2edda3cc7cd926e5c5ff3301213fb90e91c8.jpg"
                    },
            ]
        },
        ...
    ],
    "commissionRate":{
        "6":"千分之六",
        "10":"百分之一"
    },
    "paymentDays":{
        "1":"T+1",
        "7":"T+7",
        "14":"T+14",
        "28":"T+28"
    }
}
```


## 1. 创建支付账号

创建支付账号是开通支付服务的第一步。完成该步的标志是支付账号创建成功并且状态为**审核通过**。

### 1.1 创建支付账号

创建支付账号需要审核，审核后会推送消息给当前小程序授予支付权限的TP平台，告知创建支付账号当前的审核结果(推送说明见尾部)。

**请求地址**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/pay/account/create?access_token=ACCESS_TOKEN
```
**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据 |
| business_scope      | String | true | 经营范围。营业执照上经营范围，长度 2-2000 个字符                       |
|business_province| String | true |经营范围所在省。|
| business_city | String | true |经营范围所在市。|
| business_detail_address | String | true |经营地址详情。|
| legal_person        | String | true | 法人姓名，即身份证姓名（汉字，限制在 1 - 25 位）。            |
| legal_id            | String | true | 身份证号（长度限定为18位）。                                        |
| id_card_front_url | String | true | 身份证正面地址(必须是我们服务上传生成的图片URL，参见图片上传)                 |
| id_card_back_url | String | true | 身份证反面地址(必须是我们服务上传生成的图片URL，参见图片上传)               |

**返回值说明**

| 参数名 | 类型   | 描述     |
| ------ | ------ | -------- |
| errno  | string | 状态码   |
| msg    | string | 状态信息 |

**返回值示例**

```
{"errno":0,"msg":"success"}
```

### 1.2 支付账号创建状态查询

创建支付账号需要进行审核，审核过后会推送审核结果给当前小程序授予支付权限的TP平台。同时这里提供主动查询创建的进度状态接口。

**请求地址**

```
GET https://openapi.baidu.com/rest/2.0/smartapp/pay/account/auditstatus?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据 |

**返回值说明**

| 参数名               | 类型 | 说明                                                         |
| :------------------- | :--- | :----------------------------------------------------------- |
| errno  | string | 状态码。  |
| msg    | string | 状态信息。 |
| status               | int | 用户提交的审核信息：0:初始状态；1:编辑中 2:提审 3:未通过 4:审核通过 5:回填过协议id |
| verify_message | string | 失败原因。                                                    |

**返回值示例**

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "status":null,
        "verify_message":null
    }
}
```

## 2. 开发者信息设置

开发者信息设置是创建支付服务的第二步，创建支付服务要求开发者设置必须存在。

### 2.1 提交开发者信息

提交开发者信息同样需要进行审核，审核结束会推送审核结果给当前小程序授予支付权限的TP平台。

**请求地址**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/pay/developconfig/submit?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据 |
| tp_public_key    | String | true     | 开发者公钥。参见[**RSA公私钥生成**](<https://smartprogram.baidu.com/docs/develop/function/keygen_v2/>) |
| pay_notify_url   | String | true     | 支付回调地址。                                               |
| refund_audit_url | String | true     | 退款审核地址。                                               |
| refund_succ_url  | String | true     | 退款回调地址。                                               |

**返回值说明**

| 参数名 | 类型   | 描述     |
| ------ | ------ | -------- |
| errno  | string | 状态码   |
| msg    | string | 状态信息 |

**返回值示例**

```
{"errno":0,"msg":"success"}
```

## 3. 创建支付服务

创建支付服务是开通支付服务的最后一步，要求进行该步之前，开通支付账号、开发者信息设置必须完成。

### 3.1 创建并绑定支付服务

创建支付服务需要审核，审核结束会推送审核结果给当前小程序授予支付权限的TP平台，创建成功标志是审核状态为审核通过。

**请求地址**

```
https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/create?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据 |
| app_name              | String | true     | 服务名称。支付服务的名称                       |
| service_phone         | String | true     | 服务电话。                                     |
| bank_account          | String | true     | 银行账户。银行卡开户名                         |
| bank_card             | String | true     | 银行卡号。                                     |
| bank_name             | String | true     | 所属银行。由数据字典接口取                     |
| bank_branch           | String | true     | 支行信息。自由输入，例如：招商银行北京上地支行 |
| open_province         | String | true     | 开户省份。由数据字典接口取                     |
| open_city             | String | true     | 开户城市。由数据字典接口取                     |
| payment_days          | int    | true     | 结算周期。由数据字典接口取                     |
| commission_rate       | int    | true     | 佣金比例。固定传 6 ，小程序固定为千分之六(6)   |
| pool_cash_pledge      | Long   | true     | 打款预留（元）。提现后的保留金额               |
| day_max_frozen_amount | Long   | true     | 每日退款上限(元)。每天最大退款限额10000元      |

**事项说明**

| 事项               | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| 结算周期           | 小程序可以选择T+1,T+7,T+14,T+28，小游戏默认T+28。            |
| 佣金               | 小程序收取千分之六，小游戏收取百分之一。                     |
| 每日退款上限（元） | 每日发起给用户退款的最大金额。如每日退款上限为10000元，当日退款的总金额则不可以超过10000元，超过10000元则退款失败，次日可以再次发起退款。 |
| 打款预留（元）     | 自动付款至绑定银行卡时，可以设置预留金额，此部分金额不进行付款，预留金额可以用来给用户进行退款，以防企业资产为0时，不能给用户退款的情况。如预留金额为1000元，T日产生流水1200元，T+1日则付款200 元至绑定银行卡，1000元在企业资产中。打款预留金额可进行修改。 |

**返回值说明**

| 参数名 | 类型   | 描述     |
| ------ | ------ | -------- |
| errno  | string | 状态码   |
| msg    | string | 状态信息 |

**返回值示例**

```
{"errno":0,"msg":"success"}
```

###  3.2 支付服务创建状态查询

创建支付支付需要进行审核，审核过后会推送审核结果给当前小程序授予支付权限的TP平台。同时这里提供主动查询创建进度状态的接口。

**请求地址**

```
GET https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/auditstatus?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据 |

**返回值说明**

| 参数名      | 类型   | 描述                                           |
| ----------- | ------ | ---------------------------------------------- |
| errno       | string | 状态码。                                       |
| msg         | string | 状态信息。                                     |
| status      | int    | 开通状态 0：新建 1：审核中 2：审核通过 3：驳回 |
| fail_reason | int    | 失败原因。                                     |

**返回值示例**

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "status":null,
        "fail_reason":null
    }
}
```

### 3.3 更新支付服务部分字段（不需要审核）

**请求地址**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/update?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据 |
| app_name         | String | true     | 服务名称。                 |
| service_phone    | String | true     | 服务电话。                 |
| pool_cash_pledge | String | true     | 打款预留。提现后的保留金额 |

**返回值说明**

| 参数名 | 类型   | 描述       |
| ------ | ------ | ---------- |
| errno  | string | 状态码。   |
| msg    | string | 状态信息。 |

**返回值示例**

```
{"errno":0,"msg":"success"}
```

### 3.4 更新支付服务全部信息（需要审核）

**请求地址**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/updatebindservice?access_token=ACCESS_TOKEN
```

**参数说明****

| 参数名                | 类型   | 是否必须 | 描述                                           |
| --------------------- | ------ | -------- | ---------------------------------------------- |
| access_token          | string | true     | access_token，授权小程序的接口调用凭据         |
| app_name              | String | true     | 服务名称。支付服务的名称                       |
| service_phone         | String | true     | 服务电话。                                     |
| bank_account          | String | true     | 银行账户。银行卡开户名                         |
| bank_card             | String | true     | 银行卡号。                                     |
| bank_name             | String | true     | 所属银行。由数据字典接口取                     |
| bank_branch           | String | true     | 支行信息。自由输入，例如：招商银行北京上地支行 |
| open_province         | String | true     | 开户省份。由数据字典接口取                     |
| open_city             | String | true     | 开户城市。由数据字典接口取                     |
| payment_days          | int    | true     | 结算周期。由数据字典接口取                     |
| commission_rate       | int    | true     | 佣金比例。固定传 6 ，小程序固定为千分之六(6)   |
| pool_cash_pledge      | Long   | true     | 打款预留（元）。提现后的保留金额               |
| day_max_frozen_amount | Long   | true     | 每日退款上限(元)。每天最大退款限额10000元      |

**事项说明**

| 事项               | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| 结算周期           | 小程序可以选择T+1,T+7,T+14,T+28，小游戏默认T+28。            |
| 佣金               | 小程序收取千分之六，小游戏收取百分之一。                     |
| 每日退款上限（元） | 每日发起给用户退款的最大金额。如每日退款上限为10000元，当日退款的总金额则不可以超过10000元，超过10000元则退款失败，次日可以再次发起退款。 |
| 打款预留（元）     | 自动付款至绑定银行卡时，可以设置预留金额，此部分金额不进行付款，预留金额可以用来给用户进行退款，以防企业资产为0时，不能给用户退款的情况。如预留金额为1000元，T日产生流水1200元，T+1日则付款200 元至绑定银行卡，1000元在企业资产中。打款预留金额可进行修改。 |

**返回值说明**

| 参数名 | 类型   | 描述       |
| ------ | ------ | ---------- |
| errno  | string | 状态码。   |
| msg    | string | 状态信息。 |

**返回值示例**

```
{"errno":0,"msg":"success"}
```

### 3.5 获取绑定的支付服务

**请求地址**

```
GET https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/getbindservice?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据 |

**返回值说明**

| 参数名 | 类型   | 描述 |
| ------ | ------ | ------ |
| errno  | string | 状态码。 |
| msg    | string | 状态信息。 |
| pm_app_id | Long | 服务id。支付服务内部标示 id |
| app_name              | String | 服务名称。支付服务的名称                       |
| pm_app_key | String | 服务Key。支付服务内部标示key |
| platform_public_key | String | 平台公钥。详见[电商技术平台术语](<https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/term_v2.md>) |
| deal_id | String | 百度收银台的财务结算凭证。详见[电商技术平台术语](<https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/term_v2.md>) |
| service_phone         | String | 服务电话。                                     |
| bank_account          | String | 银行账户。银行卡开户名                         |
| bank_card             | String | 银行卡号。                                |
| bank_name             | String | 所属银行。由数据字典接口取                     |
| bank_branch           | String | 支行信息。自由输入，例如：招商银行北京上地支行 |
| open_province         | String | 开户省份。由数据字典接口取                     |
| open_city             | String | 开户城市。由数据字典接口取                     |
| payment_days          | int    | 结算周期。由数据字典接口取                     |
| commission_rate       | int    | 佣金比例。固定传 6 ，小程序固定为千分之六(6)   |
| pool_cash_pledge      | Long   | 打款预留（元）。提现后的保留金额               |
| day_max_frozen_amount | Long   | 每日退款上限(元)。每天最大退款限额10000元      |
| open_status | int | 开通状态. 0:新建 1:审核中 2:审核通过 3:驳回 |
| fail_reason | String | 驳回回执。 |

**返回值示例**

```
{
    "errno":0,
    "msg":"success",
    "data":{
        "pm_app_id":10896,
        "app_name":"测试",
        "pm_app_key":"XXX",
        "platform_public_key":"XXX",
        "deal_id":"1292243105",
        "service_phone":"1351431XXXX",
        "bank_account":"北京百度网讯科技有限公司",
        "bank_card":"110902160610510",
        "bank_name":"招商银行",
        "bank_branch":"招商银行股份有限公司北京双榆树支行",
        "open_province":"北京市",
        "open_city":"海淀区",
        "payment_days":1,
        "commission_rate":6,
        "pool_cash_pledge":1,
        "day_max_frozen_amount":10000,
        "open_status":2,
        "fail_reason":""
    }
}
```


## 审核消息推送

本功能的消息推送，推送目标为已被小程序授予**支付服务权限**的TP平台，推送地址为授权后的**消息与事件接收URL**。支付相关的推送：

| 参数名    | 类型   | 描述                                                         |
| --------- | ------ | ------------------------------------------------------------ |
| appId     | long   | 小程序appid                                                  |
| tpAppId   | long   | 第三方平台id                                                 |
| eventTime | string | 事件发生时间                                                 |
| event     | string | 推送的事件说明：<br>APP_PAYMENT_CREATE_ACCOUNT_PASS : 创建支付账号通过<br>APP_PAYMENT_CREATE_ACCOUNT_FAIL : 创建支付账号失败<br>APP_PAYMENT_UPDATE_DEVELOP_CONFIG_PASS : 配置开发者设置通过<br>APP_PAYMENT_UPDATE_DEVELOP_CONFIG_FAIL : 配置开发者设置失败<br>APP_PAYMENT_CREATE_PAYMENT_PASS : 开通支付服务通过<br>APP_PAYMENT_CREATE_PAYMENT_FAIL : 开发支付服务失败 |
| reason    | string | 失败原因                                                     |

POST数据示例（审核成功）：

```
{
    "appId": 小程序appid,
    "tpAppId": 第三方平台appid,
    "eventTime": "2019-01-14 12:45:10",
    "event": "APP_PAYMENT_CREATE_ACCOUNT_PASS"
}
```

POST数据示例 （审核失败）：

```
{
    "appId": 小程序appid,
    "tpAppId": 第三方平台appid,
    "eventTime": "2019-01-14 12:45:10",
    "event": "APP_PAYMENT_CREATE_ACCOUNT_FAIL",
    "reason": "失败原因"
}
```



## 支付数据

###  4.1 支付订单流水列表

**请求地址**

```
GET https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/orderlist?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                                         |
| ------------ | ------ | -------- | ------------------------------------------------------------ |
| access_token | string | true     | access_token，授权小程序的接口调用凭据                       |
| status       | String | true     | 订单状态。 all：全部 、 1：待付款 、 2：已付款 、 3：已消费 、 4：退款中 、 5：已退款 、 6：退款失败 、7：已取消 |
| start_time   | Long   | true     | 起始时间戳，10位时间戳                                       |
| end_time     | Long   | true     | 起始时间戳，10位时间戳                                       |
| current_page | Long   | true     | 当前页数。起始为 1                                           |
| page_size    | Long   | true     | 分页每页数量                                                 |

**返回值说明**

| 参数名                 | 类型   | 说明                                                         |
| ---------------------- | :----- | :----------------------------------------------------------- |
| id                     | string | 百度平台订单ID。                                             |
| deal_id                | string | 百度收银台的财务结算凭证。详见[电商技术平台术语](<https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/term_v2.md>) |
| deal_title             | string | 商品名。订单的名称                                           |
| order_id               | string | 平台订单号。百度平台订单ID                                   |
| tp_order_id            | string | 第三方订单号。业务方唯一订单号                               |
| phone                  | string | 用户手机号。                                                 |
| create_time            | string | 订单创建时间。                                               |
| update_time            | string | 订单完成时间。                                               |
| sub_status             | string | 订单状态 1:待付款 2:已付款 3:已消费 4:退款中 5:已退款 6:退款失败 7:已取消 |
| total_money            | string | 订单金额(分)。订单的实际金额                                 |
| pay_money              | string | 支付金额(分)。扣除各种优惠后用户还需要支付的金额             |
| segment_refunded_money | string | 退款金额(分)。                                               |
| channel                | string | 支付渠道。                                                   |

**返回值示例**

```
{
    "errno":0,
    "msg":"success",
    "data":{
        "total_money":"-",
        "current_page":1,
        "page_size":10,
        "total_count":101,
        "total_page":1,
        "data":[
            {
                "id":"80048556607063",
                "deal_id":"2055275011",
                "deal_title":"sandbox-test-one",
                "order_id":"80048556607063",
                "tp_order_id":"TEST345671234",
                "phone":"未登录用户",
                "create_time":"2019-05-30 21:37:53",
                "update_time":"2019-05-30 21:37:53",
                "sub_status":"1",
                "total_money":"20",
                "pay_money":"20",
                "segment_refunded_money":null,
                "channel":null
            },
            {
                "id":"80049190777835",
                "deal_id":"2055275011",
                "deal_title":"一清测试订单xxxx",
                "order_id":"80049190777835",
                "tp_order_id":"ZD1559221562189606834",
                "phone":"178****2684",
                "create_time":"2019-05-30 21:06:08",
                "update_time":"2019-05-30 21:06:12",
                "sub_status":"1",
                "total_money":"1",
                "pay_money":"1",
                "segment_refunded_money":null,
                "channel":null
            }
        ]
    }
}
```

###  4.2 支付收入列表

**请求地址**

```
GET https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/financebalance?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据 |
| current_page | Long   | true     | 当前页数。起始为 1。                   |
| page_size    | Long   | true     | 分页每页数量。                         |
| start_time   | String | true     | 开始日期。格式如：2019-01-02。         |
| end_time     | String | true     | 结束日期。格式如： 2019-01-02。        |

**返回值说明**

| 参数名称     | 类型   | 说明                 |
| ------------ | ------ | -------------------- |
| income       | String | 货款（元）。         |
| period       | Long   | 当前付款周期（天）。 |
| data         | List   | 收入列表详情数据。   |
| adjustment   | String | 调整款（元）。       |
| free_balance | String | 账户余额（元）。     |
| payment_due  | String | 支付时间。           |
| others       | String | 其它款项（元）。     |

列表List数据说明：

| 参数名称      | 类型   | 说明           |
| ------------- | ------ | -------------- |
| income        | String | 货款（元）。   |
| operate_time  | String | 日期。         |
| adjust_amount | String | 调整款（元）。 |
| others        | String | 其他款项。     |

**返回值示例**

```
{
    "errno":0,
    "msg":"success",
    "data":{
        "income":"0.32",
        "period":1,
        "data":[
            {
                "income":"0.02",
                "operate_time":"2019-06-11",
                "adjust_amount":"0.00",
                "others":"0.00"
            },
            {
                "income":"0.01",
                "operate_time":"2019-06-10",
                "adjust_amount":"0.00",
                "others":"0.00"
            },
            {
                "income":"0.01",
                "operate_time":"2019-06-06",
                "adjust_amount":"0.00",
                "others":"0.00"
            },
            {
                "income":"0.01",
                "operate_time":"2019-06-04",
                "adjust_amount":"0.00",
                "others":"0.00"
            },
            {
                "income":"0.18",
                "operate_time":"2019-05-21",
                "adjust_amount":"0.00",
                "others":"-0.01"
            },
            {
                "income":"0.09",
                "operate_time":"2019-05-20",
                "adjust_amount":"0.00",
                "others":"-0.01"
            }
        ],
        "adjustment":"0.00",
        "free_balance":"1.00",
        "payment_due":"2019-06-13 00:00:00",
        "others":"-0.02",
        "page_size":10,
        "total_count":6,
        "current_page":1
    }
}
```

###  4.3 支付收入贷款列表

**请求地址**

```
GET https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/financebalance/incomedetail?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据 |
| current_page | Long   | true     | 当前页数。起始为 1。                   |
| page_size    | Long   | true     | 分页每页数量。                         |
| start_time   | String | true     | 开始日期。格式如：2019-01-02。         |
| end_time     | String | true     | 结束日期。格式如： 2019-01-02。        |

**返回值说明**

**返回值说明**

| 参数名称      | 类型   | 说明                   |
| ------------- | ------ | ---------------------- |
| income        | String | 货款（元）。           |
| quantity      | Long   | 验证（成交）数量。     |
| data          | List   | 列表详情数据。         |
| operate_time  | String | 操作日期。             |
| income_amount | String | 验证(成交)总额（元）。 |
| refund_amount | String | 退款总额（元）。       |

列表数据说明：

| 参数名称       | 类型   | 说明                       |
| -------------- | ------ | -------------------------- |
| opt_type       | String | 操作类型。                 |
| money          | String | 计算依据价格。             |
| order_id       | Long   | 平台订单号。百度平台订单ID |
| operate_time   | String | 操作时间。                 |
| third_order_id | String | 第三方订单号。             |

**返回值示例**

```
{
    "errno":0,
    "msg":"success",
    "data":{
        "income":"0.32",
        "period":1,
        "data":[
            {
                "income":"0.02",
                "operate_time":"2019-06-11",
                "adjust_amount":"0.00",
                "others":"0.00"
            },
            {
                "income":"0.01",
                "operate_time":"2019-06-10",
                "adjust_amount":"0.00",
                "others":"0.00"
            },
            {
                "income":"0.01",
                "operate_time":"2019-06-06",
                "adjust_amount":"0.00",
                "others":"0.00"
            },
            {
                "income":"0.01",
                "operate_time":"2019-06-04",
                "adjust_amount":"0.00",
                "others":"0.00"
            },
            {
                "income":"0.18",
                "operate_time":"2019-05-21",
                "adjust_amount":"0.00",
                "others":"-0.01"
            },
            {
                "income":"0.09",
                "operate_time":"2019-05-20",
                "adjust_amount":"0.00",
                "others":"-0.01"
            }
        ],
        "adjustment":"0.00",
        "free_balance":"1.00",
        "payment_due":"2019-06-13 00:00:00",
        "others":"-0.02",
        "page_size":10,
        "total_count":6,
        "current_page":1
    }
}
```

### 4.4 支付收入其他款项列表

**请求地址**

```
GET https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/financebalance/otherdetail?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据 |
| current_page | Long   | true     | 当前页数。起始为 1。                   |
| page_size    | Long   | true     | 分页每页数量。                         |
| start_time   | String | true     | 开始日期。格式如：2019-01-02。         |
| end_time     | String | true     | 结束日期。格式如： 2019-01-02。        |

**返回值说明**

| 参数名称              | 类型   | 说明               |
| --------------------- | ------ | ------------------ |
| data                  | List   | 收入列表详情数据。 |
| order_amount          | String | 贷款总额（元）。   |
| rule_type             | String | 规则类型。         |
| settlement_end_time   | String | 账单周期结束时间。 |
| settlement_start_time | String | 账单周期开始时间。 |
| total_amount          | String | 入账金额（元）。   |

列表数据说明：

| 参数名称       | 类型   | 说明                       |
| -------------- | ------ | -------------------------- |
| opt_type       | String | 操作类型。                 |
| order_id       | Long   | 平台订单号。百度平台订单ID |
| operate_time   | String | 操作时间。                 |
| ref_money      | String | 计算依据价格。             |
| third_order_id | String | 第三方订单号。             |

**返回值示例**

```
{
    "errno":0,
    "msg":"success",
    "data":{
        "total_amount":"-0.04",
        "order_amount":"0.69",
        "data":[
            {
                "opt_type":"使用",
                "order_id":80040240090932,
                "operate_time":"2019-05-21 23:59:59",
                "ref_money":"0.00",
                "third_order_id":"ZD1558365540190944723"
            },
            {
                "opt_type":"使用",
                "order_id":80041094440932,
                "operate_time":"2019-05-21 23:30:30",
                "ref_money":"0.03",
                "third_order_id":"ZD1558452482151801759"
            }
            ],
     "rule_type":"{"commisionLadder":"0.00-9,223,372,036,854,775.00,0.60%;","marketing":"营销模式","marketingLadder":"","fixedCostLadder":"","fixedCost":"固定费用","commision":"分佣模式"}",
     "settlement_start_time":"2019-05-03 00:00:00",
     "settlement_end_time":"2019-06-28 00:00:00"
     }
```

### 4.5 支出列表

**请求地址**

```
GET https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/financeexpense?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据 |
| current_page | Long   | true     | 当前页数。起始为 1。                   |
| page_size    | Long   | true     | 分页每页数量。                         |
| start_time   | String | true     | 开始日期。格式如：2019-01-02。         |
| end_time     | String | true     | 结束日期。格式如： 2019-01-02。        |

**返回值说明**

| 参数名称      | 类型   | 说明             |
| ------------- | ------ | ---------------- |
| expense_count | Long   | 支出次数。       |
| data          | List   | 支出列表详情。   |
| expense_money | String | 支出金额（元）。 |
| total_count   | Long   | 数据总条数。     |

列表数据说明：

| 参数名称     | 类型   | 说明           |
| ------------ | ------ | -------------- |
| money        | String | 金额（元）。   |
| operate_time | String | 日期。         |
| start_time   | String | 账期开始时间。 |
| type_id      | String | 类型。         |
| end_time     | String | 账期结束时间。 |
| pay_status   | String | 状态。         |
| task_id      | Long   | 支付凭证 id。  |

**返回值示例**

```
{
    "errno":0,
    "msg":"success",
    "data":{
        "expense_count":5,
        "data":[
            {
                "money":"-0.02",
                "operate_time":"2019-06-12 00:00:00",
                "start_time":"2019-06-12 00:00:00",
                "type_id":"自动打款",
                "end_time":"2019-06-13 00:00:00",
                "pay_status":"成功",
                "task_id":12688777319
            },
            {
                "money":"-0.01",
                "operate_time":"2019-06-11 00:00:00",
                "start_time":"2019-06-11 00:00:00",
                "type_id":"自动打款",
                "end_time":"2019-06-12 00:00:00",
                "pay_status":"成功",
                "task_id":12688615470
            },
            {
                "money":"-0.01",
                "operate_time":"2019-06-07 00:00:00",
                "start_time":"2019-06-07 00:00:00",
                "type_id":"自动打款",
                "end_time":"2019-06-08 00:00:00",
                "pay_status":"成功",
                "task_id":12687927678
            },
            {
                "money":"-0.01",
                "operate_time":"2019-06-05 00:00:00",
                "start_time":"2019-06-05 00:00:00",
                "type_id":"自动打款",
                "end_time":"2019-06-06 00:00:00",
                "pay_status":"成功",
                "task_id":12687583307
            },
            {
                "money":"-0.05",
                "operate_time":"2019-05-22 00:00:00",
                "start_time":"2019-05-22 00:00:00",
                "type_id":"自动打款",
                "end_time":"2019-05-23 00:00:00",
                "pay_status":"成功",
                "task_id":11683911985
            }
        ],
        "expense_money":"-0.10",
        "total_count":5
    }
}
```

### 4.6 支出打款详情

**请求地址**

```
GET https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/financeexpense/paydetail?access_token=ACCESS_TOKEN
```

**参数说明**

| 参数名       | 类型   | 是否必须 | 描述                                     |
| ------------ | ------ | -------- | ---------------------------------------- |
| access_token | string | true     | access_token，授权小程序的接口调用凭据。 |
| task_id      | Long   | true     | 支付凭证 id。                            |

**返回值说明**

| 参数名称       | 类型   | 说明             |
| -------------- | ------ | ---------------- |
| paid_money     | String | 收款金额（元）。 |
| paid_account   | String | 收款账号。       |
| remark         | String | 备注。           |
| receive_user   | String | 收款人。         |
| payment_status | String | 收款状态。       |

**返回值示例**

```
{
    "errno":0,
    "msg":"success",
    "data":{
        "data":[
            {
                "paid_money":"0.05",
                "paid_account":"621****4964",
                "remark":"交易成功#SUCCESS",
                "receive_user":"*若阳",
                "payment_status":"成功"
            }
        ]
    }
}
```

## 错误码列表

错误码列表，仅供参考，以实际返回值为准。


| 错误码 | 错误描述 |
|:--:|:---|
| 60000 | 参数错误 |
| 60001 | 该账号已经绑定过了 |
| 60002 | 该账号未绑定支付账号 |
| 60003 | 该账号营业执照信息不完整 |
| 60004 | 法人姓名限定在 2 - 50 字符 |
| 60005 | 身份证号必须为18位 |
| 60006 | 支付账号审核信息不存在 |
| 60007 | 创建支付服务失败 |
| 60008 | 支付服务不存在 |
| 60009 | 支付服务已经存在，请勿重复创建 |
| 60010 | 更新支付服务信息失败 |
| 60011 | 图片Url不是来自于我们的图片上传服务 |
| 60012 | 支付账号已经存在，请勿重复创建 |
| 60013 | 支付账号不存在，请先创建支付账号 |
| 60014 | 开发者设置未提交，请先提交开发者设置 |
| 60015 | 账号异常 |
| 60016 | 创建账号审核未通过,请查看创建账号的审核状态 |
| 60017 | 支付账号审核中，无法再次创建 |
| 60018 | 开发者设置审核中，无法再次修改 |
| 60019 | 支付服务审核中，无法再次修改 |
| 60020 | Request Body 不能为空 |
| 60021 | 未获取到有效数据 |