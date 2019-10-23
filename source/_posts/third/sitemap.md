---
title: 流量配置
header: third
nav: third
sidebar: sitemap
---



## 自然搜索流量配置流程详解

为小程序接入百度自然搜索有两种方式：

* 小程序开发者已有h5站点，寻求用小程序替换原有的h5收录结果，则小程序可继承原有h5页面的搜索权重与排位，具体可参考：[接入自然搜索指南](https://smartprogram.baidu.com/docs/introduction/rank/)
* 小程序开发者没有原始h5站点，寻求将小程序页面以新站资源形式接入自然搜索，可参考下述流程

### 为小程序以新站形式接入自然搜索

#### 第一步：模板开启web化
若第三方选择以模板方式代授权小程序提交代码包，则第三方小程序模板需要开启web化

* 查询模板是否开启web化可参考：[模板列表API](https://smartprogram.baidu.com/docs/third/module/)

**注意：目前，提交模板将默认开启web化，无需您进行任何操作。而存量未开启web化的模板则需要重新提交草稿并添加至模板库**

#### 第二步：小程序开启web化
在小程序提交代码包审核前，需要确保开启小程序web化

* 开启小程序web化可参考：[设置web化开关API](https://smartprogram.baidu.com/docs/third/sitemap/#设置web化开关)
* 查询小程序是否开启web化可参考：[获取小程序基础信息API](https://smartprogram.baidu.com/docs/third/pro/#8、获取小程序基础信息)

**注意：目前，新创建的小程序将默认开启web化，而存量未开启web化的小程序需调用上述API开启web化**

#### 第三步：设置页面基础信息
智能小程序被搜索引擎正常收录的前提是Web化，Web化后小程序将以普通网页的形式被爬虫发现和抓取，因此需要进行页面基础信息的设置用于提升搜索引擎优化。具体配置方式可参考：[设置页面基础信息指南](https://smartprogram.baidu.com/docs/introduction/rank/#%E8%AE%BE%E7%BD%AE%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF/)

#### 第四步：小程序发布上线
小程序上线后才能被自然搜索收录，具体发布上线流程可参考：[小程序包管理](https://smartprogram.baidu.com/docs/third/apppage/)

#### 第五步：绑定熊掌ID
绑定熊掌ID后才可提交Sitemap从而被百度收录并获取流量。第三方可通过API代授权小程序绑定当前超管账号的熊掌ID，或引导开发者自行前往开发者平台绑定已有的其他熊掌ID。

* 绑定当前超管账号熊掌ID可参考：[绑定熊掌ID API](https://smartprogram.baidu.com/docs/third/sitemap/#小程序熊掌ID绑定)
* 绑定其他熊掌ID则需要引导开发者前往小程序开发者平台进行操作：[绑定熊掌ID操作指南](https://smartprogram.baidu.com/docs/introduction/rank/#%E7%BB%91%E5%AE%9A%E7%86%8A%E6%8E%8CID/)

#### 第六步：提交sitemap
Sitemap（即站点地图）就是您⽹站上各⽹⻚的列表。创建并提交 Sitemap 有助于百度发现并了解您⽹站上的所有⽹⻚。您还可以使⽤ Sitemap 提供有关您⽹站的其他信息，如上次更新⽇期、Sitemap ⽂件的更新频率等，供百度 Spider 参考。

百度对已提交的数据，不保证⼀定会抓取及索引所有⽹址。但是，我们会使⽤ Sitemap 中的数据来了解⽹站的结构等信息，这样可以帮助我们改进抓取策略，并在⽇后能更好地对⽹站进⾏抓取。

此外，Sitemap 与搜索排名没有关系，提交的 Sitemap 内容为⼩程序⻚⾯的 Path路径列表，以便百度 spider 按照其规则尽可能多的抓取和收录⼩程序的⻚⾯。

* 通过API提交sitemap可参考：[提交sitemap API](https://smartprogram.baidu.com/docs/third/sitemap/#提交sitemap)
* sitemap的内容、格式等其他信息可参考：[提交sitemap指南](https://smartprogram.baidu.com/docs/introduction/rank/#%E6%8F%90%E4%BA%A4sitemap/)



## 提交sitemap

请求路径:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/access/submit/sitemap?access_token=ACCESS_TOKEN
```

参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token	|string|	是	|第三方平台access_token
type |int | 是 | 上传级别 0：周级别，一周左右生效；1：天级别，2~3天生效
url\_list |string | 是 | url集合；上传级别上限，0：每天3000条，1：每天5000条 多个,分割

返回值示例:
```
{
  "errno": 0,
  "msg": "success"
}
```

错误码说明：

错误码 | 错误描述 | 
----- |-----
0| 成功
2002|小程序不存在/选择的收录级别不合法/url数量不合法
30001| 参数有误
30013| 数量超上限
47005| 文件上传失败
60005|尚未绑定熊掌ID，请先绑定熊掌ID

## 设置web化开关

决定是否能将小程序sitemap推送到百度搜索，需要在提代码包前进行操作。

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/modifywebstatus?access_token=ACCESS_TOKEN
```

参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 授权小程序的接口调用凭据
web\_status |int | 是 | 1:开启 2:关闭
返回值示例:

```
{
  "errno": 0,
  "msg": "success"
}
```

## 小程序熊掌ID绑定

小程序sitemap进入搜索，需要先绑定熊掌ID。此目前只支持绑定当前账户主体对应的熊掌ID。

接口调用请求说明：

```
POST https://openapi.baidu.com/rest/2.0/smartapp/promotion/bind/xzh?access_token=ACCESS_TOKEN
```

参数说明:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| ----
access_token	|string|	是	|授权小程序的接口调用凭据

返回值示例:
```
{
	"errno": 0,
	"msg": "success"
}
```
错误码表

错误码 | 错误描述 | 
----- |-----
50033 | 主体资质没有审核通过，请先通过主体资质审核
50034 | 熊掌ID尚未审核通过
50036	| 主体未绑定熊掌ID，请先在开发者平台进行绑定

## 小程序单卡配置

小程序单卡是面向开发者的流量权益，是符合准入要求的小程序开发者向百度用户提供相关产品及服务的搜索特型卡片。

第三方平台（TP）可代替小程序开发者提交2-15个小程序的核心功能或子频道，作为小程序单卡的外露子链，被用户直接访问触达。现提供如下接口：

### 添加子链
为小程序添加子链，子链总数 2 - 15 个。子链需要为小程序的核心功能或子频道，不能是首页、单一商品页或单一内容页。子链提交后将送审核，审核结果的推送见子链审核结果推送。

审核通过的子链，排序前3/6条作为优选子链将优先分发；其余为备选子链。优选子链异常或用户对备选子链有强需求时，会分发备选子链。优选子链和备选子链会按照顺序依次分发展现，请按照期望顺序上传子链。

1. path路径即页面路径，和配置文件`app.json`的pages字段涵义相同，这是为了让百度搜索知道你的小程序页面定义在哪个目录。示例:`/pages/index/index`。
<br>
2. 子链至少需要2条审核通过才可以在线上展示。
<br>
3. 新增子链的名称、描述及路径不能与已存在的子链重复。
<br>
4. 针对已提交的子链，非审核状态下可进行二次编辑，再次提交后将送审核，审核结果推送地址为授权后的**消息与事件接收URL**。
<br>
5. `chain_path` 与`telephone`参数同时只能存在一个，代表创建了不同的子链类型。`telephone`类型只有某些小程序能够创建 。

> 注意：审核中的子链不支持编辑。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/add?access_token=ACCESS_TOKEN
```

**参数说明:**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 小程序授权给TP平台生成的调用凭据 |
| chain_name   | string | true     | 4-10个字符，说明子链的功能       |
| chain_desc   | string | true     | 8-16个字符，辅助描述子链的功能   |
| chain_path   | string | false    | 以“/”开头的子链对应的path路径    |
| telephone    | string | false    | SA类型的客服电话子链             |

**返回值说明：**

| 参数名 | 类型   | 描述         |
| ------ | ------ | ------------ |
| errno  | string | 状态码       |
| msg    | string | 状态信息     |
| data   | int    | 生成的子链Id |

**返回值示例:**

```json
{
    "errno":0,
    "errMsg":"success",
    "data":5831
}
```

### 删除子链

可删除已提交的子链。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/delete?access_token=ACCESS_TOKEN
```

**参数说明:**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 小程序授权给TP平台生成的调用凭据 |
| subchain_id  | string | true     | 子链 Id                          |

**返回值说明：**

| 参数名 | 类型    | 描述         |
| ------ | ------- | ------------ |
| errno  | string  | 状态码       |
| msg    | string  | 状态信息     |
| data   | boolean | 是否成功删除 |

**返回值示例:**

```json
{
    "errno":0,
    "errMsg":"success",
    "data":true
}
```

### 更新子链

针对创建成功的子链，更新它的内容。更新操作需要经过审核，审核结果推送地址为授权后的**消息与事件接收URL**。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/update?access_token=ACCESS_TOKEN
```

**参数说明:**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 小程序授权给TP平台生成的调用凭据 |
| subchain_id  | string | true     | 子链 Id                          |
| chain_name   | string | true     | 4-10个字符，说明子链的功能       |
| chain_desc   | string | true     | 8-16个字符，辅助描述子链的功能   |
| chain_path   | string | false    | 以“/”开头的子链对应的path路径    |
| telephone    | string | false    | SA类型的客服电话子链             |

**返回值说明：**

| 参数名 | 类型    | 描述         |
| ------ | ------- | ------------ |
| errno  | string  | 状态码       |
| msg    | string  | 状态信息     |
| data   | boolean | 是否成功更新 |

**返回值示例:**

```json
{
    "errno":0,
    "errMsg":"success",
    "data":true
}
```

### 获取所有的子链信息

可通过接口查询子链的审核状态、分发顺序等相关信息。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/getall?access_token=ACCESS_TOKEN
```

**参数说明:**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 小程序授权给TP平台生成的调用凭据 |

**返回值说明：**

| 参数名 | 类型   | 描述     |
| ------ | ------ | -------- |
| errno  | Long   | 状态码   |
| errMsg | String | 状态信息 |

详细说明：

| 参数名                 | 类型   | 描述                                                         |
| ---------------------- | ------ | ------------------------------------------------------------ |
| app_level              | Long   | 小程序等级，等级为 3、4的小程序能展示六个单卡子链。          |
| sub_chain_prior_number | Long   | 展示的单卡子链个数。                                         |
| id                     | Long   | 子链id                                                       |
| app_id                 | Long   | 小程序Id                                                     |
| app_name               | String | 小程序名称                                                   |
| customer_id            | Long   | 主体id                                                       |
| chain_name             | String | 子链的名称                                                   |
| chain_desc             | String | 子链的描述信息                                               |
| chain_path             | String | 子链的访问路径                                               |
| status                 | Long   | 子链的状态。0：未知<br/>1：审核中<br/>2：审核通过<br/>3：审核拒绝<br/>4：撤回<br/>5：删除<br/>6：停用 |
| chain_rank             | Long   | 展示顺序，当子链的状态为审核通过，值越小，越优先展示，展示数量由sub_chain_prior_number 控制，超过的子链为备选子链。新添加的子链该值为99，停用的子链该值为100。 |
| create_time            | Long   | 创建时间                                                     |
| update_time            | Long   | 更新时间                                                     |
| audit_time             | Long   | 审核时间                                                     |
| audit_desc             | String | 审核描述信息                                                 |
| subchain_type          | Long   | 子链类型。1: path类型子链 2:客服电话子链（要求小程序等级为 4 ） |
| show_status          | Long   | 展示类型。1: 优选 2: 备选。为null代表还未通过审核|


返回值示例:

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "app_level":1,
        "sub_chain_prior_number":3,
        "sub_chain_info_list":[
            {
                "id":249,
                "app_id":1482656741,
                "app_name":"小程序B",
                "customer_id":197,
                "customer_name":"先锋德高(北京)信息技术有限公司",
                "chain_name":"haifei2",
                "chain_desc":"desc desc2",
                "chain_path":"/path/2",
                "path_md5":"1e7e9b06cda51fc95a933c727d6a9772",
                "status":1,
                "chain_rank":1,
                "create_time":1566219603,
                "update_time":1566224567,
                "audit_time":0,
                "audit_desc":"",
                "subchain_type":1,
                "showStatus":1
            },
            {
                "id":248,
                "app_id":1482656741,
                "app_name":"小程序B",
                "customer_id":197,
                "customer_name":"先锋德高(北京)信息技术有限公司",
                "chain_name":"NAME1",
                "chain_desc":"haifei desc1",
                "chain_path":"/path/1",
                "path_md5":"b6329bb3c3420e46c33b9bc0beb858e1",
                "status":1,
                "chain_rank":2,
                "create_time":1566219583,
                "update_time":1566224567,
                "audit_time":0,
                "audit_desc":"",
                "subchain_type":1,
                "showStatus":1
            }
        ]
    }
}
```

### 重排序子链

针对已提交的全部子链，可进行重新排序，并将调整顺序后完整的子链列表通过接口返回。

子链的排序决定了其在小程序卡片中的展示顺序。审核通过的子链将会依照一定规则展示前3条或6条，其余过审子链将作为备选子链。对单卡子链进行排序，每次需要传递所有的子链Id组成的字符串，字符串中的Id顺序代表了子链的排序。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/rank?access_token=ACCESS_TOKEN
```

**参数说明:**

| 参数名           | 类型   | 是否必须 | 描述                               |
| ---------------- | ------ | -------- | ---------------------------------- |
| access_token     | string | true     | 小程序授权给TP平台生成的调用凭据   |
| subchain_ranklist | string | true     | 子链 Id 字符串，顺序代表了排序位置,使用逗号分割 |

**返回值说明：**

| 参数名 | 类型    | 描述     |
| ------ | ------- | -------- |
| errno  | string  | 状态码   |
| msg    | string  | 状态信息 |
| data   | boolean | 是否成功 |

**返回值示例:**

```json
{
    "errno":0,
    "errMsg":"success",
    "data":true
}
```

### 停用子链
针对审核通过的子链，可执行停用操作。停用后将暂停子链数据的分发展现。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/stop?access_token=ACCESS_TOKEN
```

**参数说明:**

| 参数名           | 类型   | 是否必须 | 描述                               |
| ---------------- | ------ | -------- | ---------------------------------- |
| access_token     | string | true     | 小程序授权给TP平台生成的调用凭据   |

**返回值说明：**

| 参数名 | 类型    | 描述     |
| ------ | ------- | -------- |
| errno  | string  | 状态码   |
| msg    | string  | 状态信息 |
| data   | boolean | 是否成功 |

**返回值示例:**

```json
{
    "errno":0,
    "errMsg":"success",
    "data":true
}
```

### 启用子链

针对停用状态下的子链，可执行启用操作。启用后则可恢复子链的分发展现。重新启用子链需经过审核，审核结果推送地址为授权后的**消息与事件接收URL**。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/restart?access_token=ACCESS_TOKEN
```

**参数说明:**

| 参数名           | 类型   | 是否必须 | 描述                               |
| ---------------- | ------ | -------- | ---------------------------------- |
| access_token     | string | true     | 小程序授权给TP平台生成的调用凭据   |

**返回值说明：**

| 参数名 | 类型    | 描述     |
| ------ | ------- | -------- |
| errno  | string  | 状态码   |
| msg    | string  | 状态信息 |
| data   | boolean | 是否成功 |

**返回值示例:**

```json
{
    "errno":0,
    "errMsg":"success",
    "data":true
}
```

### 子链审核结果推送
新添加、二次编辑、重新启用的子链将送审核，审核结果会通过推送通知，推送地址为授权后的**消息与事件接收URL**

**推送参数说明：**

| 参数名     | 类型   | 描述                                                         |
| ---------- | ------ | ------------------------------------------------------------ |
| appId      | long   | 小程序appid                                                  |
| tpAppId    | long   | 第三方平台id                                                 |
| eventTime  | string | 事件发生时间                                                 |
| event      | string | 推送的事件说明：  AUDIT_SUB_CHAIN_PASS ：创建单卡子链审核通过  AUDIT_SUB_CHAIN_FAILED ：创建单卡子链审核失败 |
| subchainId | long   | 子链id                                                       |
| reason     | string | 失败原因                                                     |

**推送示例：**

```json
{
    "appId":小程序appid,
    "tpAppId":第三方平台appid,
    "eventTime":"2019-01-14 12:45:10",
    "event":"APP_PAYMENT_CREATE_ACCOUNT_FAIL",
    "subchainId":13234,
    "reason":"失败原因"
}
```

**错误码表：**

| 错误码 | 错误描述                                                     |
| ------ | ------------------------------------------------------------ |
| 40001  | 1. 子链路径与客服电话不能同时存在或不存在<br>2. 子链路径为空<br>3. 客服电话为空<br>4. 该小程序不支持客服电话类型<br>5. 审核中的子链不支持修改<br>6. 子链Id列表不能为空<br>7. 排序列表中子链数量与已存在子链数量不一致<br>8. id为 subChainId 的子链不属于当前小程序<br>9. 同一个小程序的子链条数不能超过15条<br>10. 客服电话类型子链，同时只能存在一条<br>11. 子链路径必须以'/'开头<br>12. 子链名称、描述、路径不能重 |