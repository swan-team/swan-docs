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

**请求路径**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/access/submit/sitemap
```

**公共请求参数**

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
|access_token	|string|	是	|第三方平台的接口调用凭据|

**请求参数**

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
|type |int | 是 | 上传级别 0：周级别，一周左右生效；1：天级别，2~3天生效|
|url\_list |string | 是 | url集合；上传级别上限，0：每天3000条，1：每天5000条 多个,分割|

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | int | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |


**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/access/submit/sitemap?access_token=45.8456925a1fa1ed237f64114d2bfa3890.3600.1559561689.Cckr3yEJVH4X5JJnZmgfNX4wo_ej3y4-1W3JTSQkkj5RZ9lgfC&type=1&url_list=www.baidu.com'
```

**响应示例**

```
{
  "errno": 0,
  "msg": "success"
}
```

**错误码说明**

|错误码 | 错误描述 | 
|----- |-----|
|0| 成功|
|2002|小程序不存在/选择的收录级别不合法/url数量不合法|
|30001| 参数有误|
|30013| 数量超上限|
|47005| 文件上传失败|
|60005|尚未绑定熊掌ID，请先绑定熊掌ID|

## 设置web化开关

>决定是否能将小程序sitemap推送到百度搜索，需要在提代码包前进行操作。

```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/modifywebstatus
```

**公共请求参数**

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
|access\_token|string | 是 | 授权小程序的接口调用凭据|

**请求参数**

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
|web\_status |int | 是 | 1:开启 2:关闭|

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | int | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |



**请求实例**

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/app/modifywebstatus?access_token=45.8456925a1fa1ed237f64114d2bfa3890.3600.1559561689.Cckr3yEJVH4X5JJnZmgfNX4wo_ej3y4-1W3JTSQkkj5RZ9lgfC&web=1'
```



**响应实例**
```json
{
  "errno": 0,
  "msg": "success"
}
```

## 小程序熊掌ID绑定

> 小程序sitemap进入搜索，需要先绑定熊掌ID。此目前只支持绑定当前账户主体对应的熊掌ID。

**接口路径**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/promotion/bind/xzh
```

**公共请求参数**

| 参数名        | 类型   | 是否必须 | 描述                     |
| ------------- | ------ | -------- | ------------------------ |
| access\_token | string | 是       | 授权小程序的接口调用凭据 |

 

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | int | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |



**请求实例**

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/promotion/bind/xzh?access_token=45.8456925a1fa1ed237f64114d2bfa3890.3600.1559561689.Cckr3yEJVH4X5JJnZmgfNX4wo_ej3y4-1W3JTSQkkj5RZ9lgfC'
```

**响应示例**

```json
{
	"errno": 0,
	"msg": "success"
}
```
错误码表

|错误码 | 错误描述 | 
|----- |-----|
|50033 | 主体资质没有审核通过，请先通过主体资质审核|
|50034 | 熊掌ID尚未审核通过|
|50036	| 主体未绑定熊掌ID，请先在开发者平台进行绑定|

## 配置页面基础信息

目前，小程序包上线并绑定熊掌ID后，搜索引擎会自动抓取小程序内的页面信息。开发者可通过robots文件声明小程序中不想被搜索引擎收录的部分或者指定搜索引擎只收录特定的部分。仅当您的小程序中包含不希望被搜索引擎收录的内容时，才需要使用robots.txt文件。
具体规则可参考文档：[robots协议介绍](https://smartprogram.baidu.com/docs/introduction/rank_robots/)

### 为小程序提交页面基础信息文件API

> 为小程序设置页面基础信息，调用成功后即时设置生效。

**请求地址**:

```
POST https://openapi.baidu.com/file/2.0/smartapp/robots/app/upload
```

**公共请求参数**：

| 参数名称    | 类型   | 是否必须 | 说明                                 |
| ----------- | ------ | -------- | --------------------------------  |
| access_token   | string | true     | 授权小程序的接口调用凭据                     |
**请求参数**

| 参数名称    | 类型   | 是否必须 | 说明                                 |
| ----------- | ------ | -------- | --------------------------------  |
| robots | file | true | robots.txt 文件，要求文件为 txt 格式，目前支持48k的文件内容检测，请保证robots.txt文件不要过大，目录最长不超过250个字符。 |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | int | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | string  | 响应参数 | 文件链接       |

 


**返回值示例**

```json
{
    "errno": 0,
    "msg": "success",
    "data": "https://searchbox.bj.bcebos.com/v1/searchbox/mappconsole/image/20191017/0e51f553-3631-4c45-9cc6-09c4496282d6.txt"
}
```

### 为模板提交页面基础信息文件API

调用API为模板设置页面基础信息，设置成功后，用该模板提包后的小程序，自动继承模板的页面基础信息。

**请求地址**:

```
POST https://openapi.baidu.com/file/2.0/smartapp/robots/template/upload
```

**公共请求参数**：

| 参数名称    | 类型   | 是否必须 | 说明                                 |
| ----------- | ------ | -------- | --------------------------------  |
| access_token   | string | true     | 授权小程序的接口调用凭据                     |
**请求参数**

| 参数名称    | 类型   | 是否必须 | 说明                                 |
| ----------- | ------ | -------- | --------------------------------  |
| template_id | long | true | 模版id |
| robots | file | true | robots.txt 文件，要求文件为 txt 格式，目前支持48k的文件内容检测，请保证robots.txt文件不要过大，目录最长不超过250个字符。 |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | int | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | string  | 响应参数 | 文件链接       |

 

**响应示例**

```json
{
    "errno": 0,
    "msg": "success",
    "data": "https://searchbox.bj.bcebos.com/v1/searchbox/mappconsole/image/20191017/0e51f553-3631-4c45-9cc6-09c4496282d6.txt"
}
```



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
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/add
```

**公共请求参数**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 授权小程序的接口调用凭据 |
**请求参数**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| chain_name   | string | true     | 4-10个字符，说明子链的功能       |
| chain_desc   | string | true     | 8-16个字符，辅助描述子链的功能   |
| chain_path   | string | false    | 以“/”开头的子链对应的path路径    |
| telephone    | string | false    | SA类型的客服电话子链             |

**公共响应参数**

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

>可删除已提交的子链。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/delete
```

**公共请求参数**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 授权小程序的接口调用凭据 |

**请求参数**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| subchain_id  | string | true     | 子链 Id                          |

**公共响应参数**

| 参数名 | 类型    | 描述         |
| ------ | ------- | ------------ |
| errno  | string  | 状态码       |
| msg    | string  | 状态信息     |
| data   | boolean | 是否成功删除 |

 

**响应示例**

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
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/update
```

**公共请求参数**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 授权小程序的接口调用凭据 |

**请求参数**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| subchain_id  | string | true     | 子链 Id                          |
| chain_name   | string | true     | 4-10个字符，说明子链的功能       |
| chain_desc   | string | true     | 8-16个字符，辅助描述子链的功能   |
| chain_path   | string | false    | 以“/”开头的子链对应的path路径    |
| telephone    | string | false    | SA类型的客服电话子链             |

**公共响应参数**

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
GET https://openapi.baidu.com/rest/2.0/smartapp/subchain/getall
```

**公共请求参数**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 授权小程序的接口调用凭据 |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | int | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

**响应参数** 

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

**响应示例**

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

> 针对已提交的全部子链，可进行重新排序，并将调整顺序后完整的子链列表通过接口返回。

> 子链的排序决定了其在小程序卡片中的展示顺序。审核通过的子链将会依照一定规则展示前3条或6条，其余过审子链将作为备选子链。对单卡子链进行排序，每次需要传递所有的子链Id组成的字符串，字符串中的Id顺序代表了子链的排序。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/rank
```

**公共请求参数**

| 参数名           | 类型   | 是否必须 | 描述                               |
| ---------------- | ------ | -------- | ---------------------------------- |
| access_token     | string | true     | 授权小程序的接口调用凭据   |

**请求参数**

| 参数名           | 类型   | 是否必须 | 描述                               |
| ---------------- | ------ | -------- | ---------------------------------- |
| subchain_ranklist | string | true     | 子链 Id 字符串，顺序代表了排序位置,使用逗号分割 |

**公共响应参数**

| 参数名 | 类型    | 描述     |
| ------ | ------- | -------- |
| errno  | string  | 状态码   |
| msg    | string  | 状态信息 |
| data   | boolean | 是否成功 |

 

**响应示例**

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
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/stop
```

**公共请求参数**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 授权小程序的接口调用凭据 |

**请求参数**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| subchain_id  | string | true     | 子链 Id                          |

**公共响应参数**

| 参数名 | 类型    | 描述         |
| ------ | ------- | ------------ |
| errno  | string  | 状态码       |
| msg    | string  | 状态信息     |
| data   | boolean | 是否成功 |

 



**响应示例**

```json
{
    "errno":0,
    "errMsg":"success",
    "data":true
}
```

### 启用子链

>针对停用状态下的子链，可执行启用操作。启用后则可恢复子链的分发展现。重新启用子链需经过审核，审核结果推送地址为授权后的**消息与事件接收URL**。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/subchain/restart?access_token=ACCESS_TOKEN
```

**公共请求参数**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 授权小程序的接口调用凭据 |

**请求参数**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| subchain_id  | string | true     | 子链 Id                          |

**公共响应参数**

| 参数名 | 类型    | 描述         |
| ------ | ------- | ------------ |
| errno  | string  | 状态码       |
| msg    | string  | 状态信息     |
| data   | boolean | 是否成功 |

 



**响应示例**

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



## 信息流物料提交简介

必填字段为必须要提交的字段，未填写时系统校验将不会通过。

选填字段越多越好，有利于保证物料的更好分发。

开发者需按照小程序物料对应的类型补充相关字段，否则将会被过滤。若包含多个物料类型，可以按照开发者文档提供多个物料类型（例如汽车之家同时包含视频和图文两种类型物料）。

#### 1.物料提交

- 开发者可以通过接口（适用于少量的素材提交，每天调用上限500次，实时性较好）、sitemap接口（适用于素材量较大的情况）或文件三种方式提交物料，需通过对应的位置提交相应的物料。

#### 2.首次数据提交和更新模式

- 首次提交：开发者根据自己的物料类型，依照对应字段提交初次的内容。字段应包含基本字段和拓展字段。
- 实时更新：调用相关接口，实时进行物料增删改

#### 3.审核上线

- 百度侧会对物料进行机器审核和人工审核，并实时反馈审核状态，开发者可对审核失败的物料进行修改
- 物料审核通过后即可进行小流量分发，当质量和分发效果达到一定程度时则进行全量分发

#### 4.内容和页面规范

- 物料内容应积极健康，并保证一定的实效性，同时不应与百家号内容重合

## 物料提交和删除服务接口

开发者可通过接口或sitemap接口的方式提交物料。

* **API实时接口提交**：适用于少量素材的提交，每天有500次的调用限制。该方式实效性较高，素材可实时同步到小程序库。

* **链接文件（sitemap）提交：** 适用于大量素材的提交，该方式实效性相对接口方式较低，提交素材后，下一天的0点小程序侧会自动抓取解析物料，存在一定时间差。

## 提交物料资源 

> 若有资源在小程序内需要提交或资源推送错误需要修改（或更新）的情况，请调用该接口进行资源的提交，该提交方式适用于少量的素材提交，每天有500次调用限制，如果素材量大建议使用sitemap的方式。 

``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/access/resource/submit 
```
**公共请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|access_token|string|是|授权小程序的接口调用凭据|--|
**请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|app_id|int|否|app_id|--|
|body|string|是|消息体，物料的介绍|以小程序粒度推送时，请填写小程序的详细介绍<br>示例：爱说唱是一款基于百度语音技术的智能小程序。即便你对嘻哈音乐一窍不通，只需对它说上几句话，便可智能合成最酷的嘻哈音乐。同时还支持歌词查看和等功能，在线即可完成rap单曲的创作和分享。来吧，让我们在嘻哈的世界肆意妄为，一起Freestyle吧！<br>以图文粒度推送时，请填写内容的正文<br>示例：智能小程序，智能连接人与信息、人与服务、人与万物的开放生态，依托以百度APP为代表的全域流量，通过百度AI开放式赋能，精准连接用户，无需下载安装便可享受智慧超前的使用体验<br>以视频粒度推送时，请填写视频的详细介绍<br>示例：此片是当年为张国荣的参演而度身订造的电影，这也是他的歌唱和演艺事业的高峰时期。由包括人气歌手露云娜、偶像锺保罗等多位明星合演，片中以张国荣为首的角色最为丰富。|
|ext|string|否|扩展信息（JSON格式，参考附录三）|{"publish_time": "2018年11月1日"}|
|feed_sub_type|string|否|feed二级分类（参考附录二）|明星八卦（可选有限集合）|
|feed_type|string|是|feed一级分类（参考附录二）|娱乐（可选有限集合）|
|images|string|是|封面图片链接（JSON格式）（最多3张，单图片最大2M） 建议尺寸：宽>=375 & 高>=250；建议比例 宽:高=1.5:1|["https://b.bdstatic.com/miniapp/resource/image/demo1.png", "https://b.bdstatic.com/miniapp/resource/image/demo2.png"]|
|mapp_sub_type|string|是|资源子类型（参考附录一）|1001|
|mapp_type|string|是|资源类型（参考附录一）|1000|
|path|string|是|智能小程序落地页链接|/pages/detail/detail?id=100001|
|tags|string|否|资源标签，英文逗号分割，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字）|示例：电影,吴亦凡|
|title|string|是|标题|百度智能小程序，给你全新的智能体验|
**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|int|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|
 
 

**响应示例** 

```json
{
　　"errno":0,
　　"msg":"success",
　　"data":""
}
```
## 查询物料资源 

> 查询物料资源数据 

``` 
 GET https://openapi.baidu.com/rest/2.0/smartapp/access/resource/query 
```

**公共请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|access_token|string|是|授权小程序的接口调用凭据|--|

**请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|begin|string|是|开始时间 (默认值前一天0点)|1569728735|
|end|string|是|结束时间 (默认值今天0点)|1569728735|
|image_type|int|否|image_type|--|
|page_no|string|是|结束时间 (默认值今天0点)|页数(分页参数,第几页,默认值(1)|
|page_size|string|是|结束时间 (默认值今天0点)|单页展示数据量(分页参数,默认值(10)|
|status|string|是|状态（0: 全部 1: 审核中 2: 审核失败 3: 投放中 4: 已删除），默认值为0|0|
|title|string|是|标题|百度智能小程序，给你全新的智能体验|

**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|int|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|

**响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|count|int|数据总量|--|
|page|int|页数|--|
|page_size|int|单页数量|--|
|list|array[object]|数据内容|--|
|list.app_id|int|小程序id|--|
|list.audit_time|string|审核时间|--|
|list.create_time|string|提交时间|--|
|list.message|string|审核信息|--|
|list.rid|string|物料id|--|
|list.source|string|物料来源|--|
|list.status|string|状态|--|
|list.title|string|标题|--|

 

**响应示例** 

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "page": 1,
        "pageSize": 5,
        "count": 9,
        "list": [
            {
                "rid": "11902716467688469563",
                "app_id": 17182748,
                "title": "1009-内容-问答-1009",
                "create_time": "1569244816",
                "status": "审核中",
                "audit_time": "1569244816",
                "source": "Api提交"
            },
            {
                "rid": "10521637653310175733",
                "app_id": 17182748,
                "title": "1007-内容-本地生活图文-1007",
                "create_time": "1569244764",
                "status": "审核中",
                "audit_time": "1569244764",
                "source": "Api提交"
            },
            {
                "rid": "13767651427491660618",
                "app_id": 17182748,
                "title": "1001-内容-图文物料110",
                "create_time": "1569244618",
                "status": "审核中",
                "audit_time": "1569244618",
                "source": "Api提交"
            },
            {
                "rid": "11808066851004828892",
                "app_id": 17182748,
                "title": "内容问答1009",
                "create_time": "1569231369",
                "status": "审核中",
                "audit_time": "1569231370",
                "source": "Api提交"
            },
            {
                "rid": "16360358341294102874",
                "app_id": 17182748,
                "title": "内容本地生活图文001",
                "create_time": "1569231328",
                "status": "审核中",
                "audit_time": "1569231328",
                "source": "Api提交"
            }
        ]
    }
}
```


## 下线物料资源 

> 若有资源在小程序内下线或资源推送错误需要删除的情况，请调用该接口进行资源的删除，删除后的素材无法重新提交。 

``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/access/resource/delete 
```

**公共请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|access_token|string|是|授权小程序的接口调用凭据|--|

**请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|app_id|integer|否|app_id|--|
|path|string|是|智能小程序内页链接|/pages/detail/detail?id=100001|

**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|integer|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|

 

 

**响应示例** 
```json
{   　　
	"errno":0,   　　
	"msg":"success",   　　
	"data":""   
}
```

## 提交sitemap 

> 1.需要注意sitemap链接的内容格式（sitemap链接打开后，为多个loc链接；每个loc链接打开后，为单条素材内容。<br>2.提交素材或更新素材，则链接文件的type（即sitemap）选为“1”。<br>3.删除素材或下线素材，则链接文件的type选为“0”。<br>4.每个小程序，最多提交3条sitemap链接，建议一条type为1的sitemap链接，一条type为0的sitemap链接的（即增量/更新的sitemap一个，线下/删除的sitemap一个），若已满3条sitemap，若想添加新的sitemap链接，建议先删除一条sitemap，再进行添加新的sitemap。<br>5.提交sitemap链接方法共两种,两种提交方法任选其一即可：a.通过下方接口提交；b.通过智能小程序开发者平台端提交，提交入口：流量配置-信息流-上传素材-链接文件提交。 

``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/access/sitemap/submit
```

**公共请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|access_token|string|是|授权小程序的接口调用凭据|--|
**请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|app_id|integer|否|app_id|--|
|desc|string|是|描述信息|智能小程序示例|
|frequency|string|是|更新频率 3-每天 4-每周|3|
|type|string|是|类型 1-增量/更新； 0-下线/删除|1|
|url|string|是|sitemap链接|???|
**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|integer|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|
 
 

**响应示例** 
```json
{
　　"errno":0,
　　"msg":"success",
　　"data":""
}
```
**sitemap内容格式**

```json
{
	"sitemapindex": [{
			"sitemap": {
				"loc": "https://www.baidu.com/baidu/little/program/baidu_little_program_add_01.json",
				"lastmod": "2018-07-17"
			}
		},
		{
			"sitemap": {
				"loc": "https://www.baidu.com/baidu/little/program/baidu_little_program_add_02.json",
				"lastmod": "2018-07-17"
			}
		},
		{
			"sitemap": {
				"loc": "https://www.baidu.com/baidu/little/program/baidu_little_program_add_03.json",
				"lastmod": "2018-07-17"
			}
		}
	]
}
```
**loc为小于5M的分片数据，格式如下**：
```
[{
		"app_id": "1000001",
		"title": "百度智能小程序，给你全新的智能体验",
		"body": "智能小程序，智能连接人与信息、人与服务、人与万物的开放生态，依托以百度APP为代表的全域流量，通过百度AI开放式赋能，精准连接用户，无需下载安装便可享受智慧超前的使用体验",
		"path": "/pages/index/index",
		"images": [
			"https://b.bdstatic.com/searchbox/mappconsole/image/20180712/1531387421302894.png",
			"https://www.baidu.com/img/bd_logo1.png?qua=high%26where=super"
		],
		"mapp_type": "1000",
		"mapp_sub_type": "1001",
		“feed_type”: “娱乐”“ feed_sub_type”: “明星八卦” "tags": "组件,接口",
		"ext": {
			"desc": "智能小程序官方示例",
			"version": "10.7.1"
		}
	},
	{
		"app_id": "1000001",
		"title": "小程序接口",
		"body": "百度智能小程序提供丰富的接口，为开发者赋能。",
		"path": "/pages/api/api",
		"images": [
			"https://b.bdstatic.com/searchbox/mappconsole/image/20180712/1531387421302894.png"
		],
		"mapp_type": "1000",
		"mapp_sub_type": "1001",
		“feed_type”: “娱乐”“ feed_sub_type”: “明星八卦” "tags": "接口",
		"ext": {}
	}
]
```

## 删除sitemap 

> 若需要删除sitemap文件，请调用该接口，删除的仅为sitemap链接地址，对sitemap中已提交成功的素材无影响。 

``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/access/sitemap/delete 
```

**公共请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|access_token|string|是|授权小程序的接口调用凭据|--|

**请求参数** 

|参数|类型|是否必填|描述|示例值|
|--|--|--|--|--|
|app_id|integer|否|app_id|--|
|url|string|是|sitemap链接|--|

**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|integer|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|

 

 

**响应示例** 

```json
{
	"errno":0,   　　
	"msg":"success",   　　
	"data":""   
}
```
## 信息流物料投放具体字段

### 1.内容型

物料为文章的详情，通过图文、视频、音频、直播等形式供用户阅读为主。

1）图文型

文章的详情，物料类型主要为图片和文字的结合。

基本字段

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字，最多20个字 | 示例豆果美食小程序：超经典的蔓越莓曲奇饼干，在家也能做       |
| body          | string   | **是**       | 消息体，图文内容的介绍，最多20000字                          | 图文的全部正文，示例豆果美食小程序：黄油化开备用,黄油化开后加入糖霜，搅拌均匀。,加入蛋清，继续打匀。,加入切碎的蔓越莓，继续搅拌。蔓越莓放多少根据自己的喜... |
| path          | string   | **是**       | 智能小程序内页链接                                           | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（最多3张，单图片最大2M）   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一），内容型为1000                         | 内容型固定为1000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），图文子类为1001                     | 图文型固定为1001                                             |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 例如美食（可选有限集合）                                     |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 例如甜品（可选有限集合）                                     |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：甜甜圈,糕点,鲍师傅,酥饼                                |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**                  | **类型**   | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------------------ | ---------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| author_name              | string     | 否           | 作者名                                                       | 张三                                                         |
| author_portrait_url      | string     | 否           | 作者头像url                                                  | <https://www.xxx.baidu.com/author/portrail.jpg>               |
| author_path              | string     | 否           | 作者落地页链接                                               | /pages/author/author                                         |
| author_fans_num          | int        | 否           | 作者粉丝量                                                   | 10000                                                        |
| author_auth              | string     | 否           | 是否认证作者                                                 | 1-是 0-否   示例：1                                          |
| author_publish_num       | string     | 否           | 作者发文量                                                   | 100                                                          |
| author_ask_num           | int        | 否           | 作者提问量                                                   | 100                                                          |
| publish_time             | string     | **是**       | 内容原始发布时间                                             | 内容原始发布时间需在一年以内   示例：2018年9月8日            |
| img_urls                 | string     | 否           | 文章所有图片url                                              | ["<https://b.bdstatic.com/miniapp/resource/image/headImg.png>"] |
| channel_id               | int        | 否           | 频道ID                                                       | 1000                                                         |
| channel                  | string     | 否           | 频道名称                                                     | 在小程序内所属频道名   示例：萌宠，推荐，最热等              |
| like_num                 | int        | 否           | 点赞量                                                       | 1000                                                         |
| comment_num              | int        | 否           | 评论量                                                       | 1000                                                         |
| dislike_num              | int        | 否           | 踩数                                                         | 1000                                                         |
| collect_num              | int        | 否           | 收藏量                                                       | 1000                                                         |
| share_num                | int        | 否           | 转发量                                                       | 1000                                                         |
| topic                    | string     | 否           | 话题名                                                       | 减肥日记                                                     |
| is_quality               | string     | 否           | 是否精品内容                                                 | 小程序内优质或者热门的内容，是为1，否为0，例如1              |
| is_interactive           | string     | 否           | 是否高互动内容                                               | 顶/评论/收藏/分享任一互动数据在100以上的攻略资源，是为1，否为0，例如0 |
| comment                  | string     | 否           | 优质评论内容                                                 | 智能连接人与信息、人与服务、人与万物的开放生态               |
| topic_path               | string     | 否           | 话题落地页链接                                               | /pages/topic/topic                                           |
| author_introduction      | string     | 否           | 作者简介                                                     | 清华大学教授，主要研究方向。。。                             |
| author_followers_num     | int        | 否           | 作者关注量                                                   | 10000                                                        |
| author_like_num          | int        | 否           | 作者累计点赞量                                               | 10000                                                        |
| author_collect_num       | int        | 否           | 作者累计被收藏量                                             | 10000                                                        |
| author_gender            | string     | 否           | 作者性别                                                     | 男                                                           |
| author_location          | string     | 否           | 作者位置                                                     | 中国                                                         |
| author_accept_rate       | string     | 否           | 作者发文采纳率                                               | 85%，为百分比的数值                                          |
| is_verified              | string     | 否           | 是否大V                                                      | true                                                         |
| author_level             | int        | 否           | 作者等级                                                     | 0为无等级，1为最低，数字越大等级越高                         |
| author_registration_year | string     | 否           | 作者注册年限                                                 | 8（不足一年按照1计算）                                       |
| content_items            | JSON array | 否           | 文章结构化内容，需要提供正文所有的文字和图片混排内容   按原文正文换行及图片进行item分隔   type为item类型 text-文本 image-图片   例如下面的正文区可以拆分为右侧的样例。 | [    {    "type":"text",    "data":"第一段文字"    },    {    "type":"text",    "data":"第二段文字"    },    {    "type":"image",    "data":"<https://qnwww2.autoimg.cn/newsdfs/Qu4748.jpg>"    },    {    "type":"text",    "data":"第三段文字"    },    {    "type":"image",    "data":"<https://qnwww2.autoimg.cn/newsdfs/Nh4020.jpg>"    },    {    "type":"text",    "data":"第四段文字"    }    ] |
| ip                       | string     | 否           | 需引入的热点ip资源名称（如，漫画类，综艺类等）               | 极限挑战    斗破苍穹                                         |

2）视频型

内容的详情，物料类型主要以视频为主，辅以部分文字的说明。

基本字段

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字 | 示例小红书小程序：为什么大西洋和太平洋的海水，不会融合在一起？什么原因导致的？ |
| body          | string   | **是**       | 消息体，视频内容的介绍，最多20000字                          | 视频的详细介绍，示例小红书小程序：世界之大，可谓无奇不有，虽然现在我们人类的科学技术在不断的进步，关于很多的未解之谜都在逐步的揭开，但是在世界上依然存在着很多的未解之谜，有一些自然现象真的是无法用现有的理论来解释 |
| path          | string   | **是**       | 智能小程序内页链接                                           | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（最多3张，单图片最大2M）   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一），内容型为1000                         | 内容型固定为1000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），视频子类为1002                     | 视频型固定为1002                                             |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 科学（可选有限集合）                                         |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 科学（可选有限集合）                                         |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：组件,接口,API                                          |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**                  | **类型** | **是否必填**               | **备注**                                       | **示例**                                                     |
| ------------------------ | -------- | -------------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| author_name              | string   | 否                         | 作者名                                         | 张三                                                         |
| author_profile           | string   | 否                         | 作者简介                                       | 搞笑视频作者                                                 |
| author_portrait_url      | string   | 否                         | 作者头像url                                    | <https://www.xxx.baidu.com/author/portrail.jpg>               |
| author_path              | string   | 否                         | 作者落地页链接                                 | /pages/author/author                                         |
| author_fans_num          | int      | 否                         | 作者粉丝量                                     | 1000                                                         |
| author_publish_num       | int      | 否                         | 作者视频发布量                                 | 1000                                                         |
| author _video_views      | int      | 否                         | 作者发布视频浏览量                             | 1000                                                         |
| author_followers_num     | int      | 否                         | 作者关注量                                     | 10000                                                        |
| author_like_num          | int      | 否                         | 作者页累计点赞量                               | 1000                                                         |
| author_collect_num       | int      | 否                         | 作者页累计收藏量                               | 10000                                                        |
| author_ask_num           | int      | 否                         | 作者提问量                                     | 100                                                          |
| author_auth              | int      | 否                         | 是否认证作者                                   | 1-是 0-否   示例：1                                          |
| author_level             | int      | 否                         | 作者等级                                       | 0为无等级，1为最低，数字越大等级越高                         |
| is_verified              | string   | 否                         | 是否大V                                        | true                                                         |
| video_title              | string   | 否                         | 片名                                           | 我不是药神                                                   |
| director                 | string   | 否                         | 导演                                           | 徐峥                                                         |
| lead_role                | string   | 否                         | 主演                                           | 徐峥 周一围 王传君 谭卓 杨新鸣                               |
| presenter                | string   | 否                         | 主持人                                         | 何炅                                                         |
| guest                    | string   | 否                         | 嘉宾                                           | 谢娜                                                         |
| publish_time             | string   | **是**                     | 内容原始发布时间                               | 内容原始发布时间需在一年以内   示例：2018年9月8日            |
| movie_release_time       | string   | 电影上映时间               | 否                                             | 电影上映时的时间，建议填写，   示例：2018年9月8日            |
| video_duration           | string   | **是**                     | 视频时长                                       | 按照00:00:00格式填写                                         |
| pc_url                   | string   | **是（和h5_url需填一种）** | 视频PC播放链接                                 |                                                              |
| h5_url                   | string   | **是（和pc_url需填一种）** | 视频H5播放链接                                 |                                                              |
| update_time              | string   | 否                         | 更新时间                                       | 2018年9月10日 15:36:20                                       |
| channel_id               | int      | 否                         | 频道ID                                         | 1002                                                         |
| video_profile            | string   | 否                         | 视频简介                                       | 如：XXXX是最火的综艺                                         |
| channel                  | string   | 否                         | 频道名称                                       | 在小程序内所属的频道名称，例如视频，最热、推荐               |
| is_pay                   | string   | 否                         | 是否付费                                       | 付费                                                         |
| play_num                 | int      | 否                         | 播放次数                                       | 1000                                                         |
| publish_year             | string   | 否                         | 发行年份                                       | 2018年                                                       |
| area                     | string   | 否                         | 地区                                           | 北京                                                         |
| video_status             | string   | 否                         | 视频状态                                       | 正在热映                                                     |
| score                    | string   | 否                         | 评分                                           | 9.3                                                          |
| like_num                 | int      | 否                         | 点赞量                                         | 1000                                                         |
| comment_num              | int      | 否                         | 评论量                                         | 1000                                                         |
| collect_num              | int      | 否                         | 收藏量                                         | 1000                                                         |
| dislike_num              | int      | 否                         | 踩数                                           | 1000                                                         |
| share_num                | int      | 否                         | 转发量                                         | 1000                                                         |
| comment                  | string   | 否                         | 优质评论内容                                   | “你敢保证你一辈子不得病？”纯粹、直接、有力！常常感叹：电影只能是电影。但每看到这样的佳作，又感慨：电影不只是电影！由衷的希望这部电影大卖！成为话题！成为榜样！成为国产电影最该有的可能。 |
| is_exclusive             | string   | 否                         | 是否独播                                       | 是1，否0   示例：1                                           |
| is_quality               | string   | 否                         | 是否精品内容                                   | 小程序内优质或者热门的内容，是为1，否为0，例如1              |
| is_interactive           | string   | 否                         | 是否高互动内容                                 | 顶/评论/收藏/分享任一互动数据在100以上的攻略资源，是为1，否为0，例如0 |
| author_registration_year | string   | 否                         | 作者注册年限                                   | 8（不足一年按照1计算）                                       |
| img_urls                 | string   | 否                         | 视频内多张图片url（至少3张）   JSON格式        | ["<https://b.bdstatic.com/miniapp/resource/image/headImg.png>",   "<https://b.bdstatic.com/miniapp/resource/image/headImg.png>",   "<https://b.bdstatic.com/miniapp/resource/image/headImg.png>"] |
| ip                       | string   | 否                         | 需引入的热点ip资源名称（如，漫画类，综艺类等） | 极限挑战    斗破苍穹                                         |

3）直播型

内容的详情，物料类型主要以直播的形式为主。

基本字段

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字 | 示例斗鱼直播：户外主播宁波小老哥：《恋爱厨房》和小姐姐一起做饭，心动的感觉！ |
| body          | string   | **是**       | 消息体，为小程序或内容的详细介绍，机器将参考消息体为物料打上相应分发标签 | 直播内容的介绍，示例斗鱼直播：这里有美食，有音乐，还有漂亮贤惠的小姐姐。跟着《恋爱厨房》一起感受美食的魅力。 |
| path          | string   | **是**       | 智能小程序内页链接                                           | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（最多3张，单图片最大2M）   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一），内容型为1000                         | 内容型固定为1000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），直播子类为1003                     | 直播型固定为1003                                             |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 美食（可选有限集合）                                         |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 美食节目（可选有限集合）                                     |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：组件,接口,API                                          |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**      | **类型** | **是否必填** | **备注**                                   | **示例**           |
| ------------ | -------- | ------------ | ------------------------------------------ | ------------------ |
| source_name  | string   | **是**       | 主播昵称                                   | 张三               |
| living_type  | string   | **是**       | 直播状态                                   | online/offline     |
| publish_time | int      | **是**       | 开播时间                                   | 10位时间戳，示例： |
| end_time     | int      | **是**       | 关播时间                                   | 10位时间戳，示例： |
| session_id   | string   | **是**       | 场次（请将session_id加入path拼接规则当中） | 场次 id            |

4）音频

 

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字 | 示例斗鱼直播：户外主播宁波小老哥：《恋爱厨房》和小姐姐一起做饭，心动的感觉！ |
| body          | string   | **是**       | 消息体，为小程序或内容的详细介绍，机器将参考消息体为物料打上相应分发标签 | 直播内容的介绍，示例斗鱼直播：这里有美食，有音乐，还有漂亮贤惠的小姐姐。跟着《恋爱厨房》一起感受美食的魅力。 |
| path          | string   | **是**       | 智能小程序内页链接                                           | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（最多3张，单图片最大2M）   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一），内容型为1000                         | 内容型固定为1000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），直播子类为1003                     | 音频型固定为1004                                             |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 美食（可选有限集合）                                         |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 美食节目（可选有限集合）                                     |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：组件,接口,API                                          |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**                | **类型**   | **备注**             | **是否必填** | **示例**                                                     |
| ---------------------- | ---------- | -------------------- | ------------ | ------------------------------------------------------------ |
| author_name            | string     | 专辑作者名           | 是           | 徐佳                                                         |
| album_name             | string     | 专辑名               | 是           | 晓说2018                                                     |
| album_type             | string     | 专辑一级分类         | 是           | 开发者平台自有一级分类，例如 历史                            |
| album_sub_type         | string     | 专辑二级分类         | 是           | 开发者平台自有二级分类，例如 名人传                          |
| album_update_type      | string     | 专辑更新方式         | 是           | 2代表无规律更新、1代表有规律更新、0代表无更新   例如：0      |
| album_update_frequency | int        | 专辑更新频率         | 是           | 单位：天。   例如：2   ａ．若更新方式字段传“无更新”，则专辑更新频率传0；ｂ．若更新方式字段传“有规律更新”则专辑更新字段传N（Ｎ为天数）；ｃ．若更新方式字段传“无规律更新”，专辑频率传0 |
| **publish_time**       | **string** | **内容原始发布时间** | 是           | **内容原始发布时间需在一年以内**   **示例：****2018****年9月8日** |
| album_publish_time     | string     | 专辑发布时间         | 是           | 内容原始发布时间需在一年以内   ，要求为时间戳格式，例如：1553529600 |
| album_update_time      | string     | 专辑更新时间         | 是           | 最新专辑的更新时间，要求为时间戳格式，例如：1553529600       |
| chapter_publish_time   | string     | 单章发布时间         | 是           | 内容原始发布时间需在一年以内   要求为时间戳格式，例如：1553529600 |
| chapter_update_time    | string     | 单章更新时间         | 是           | 最新单章的更新时间，要求为时间戳格式，例如：1553529600       |
| chapter_name           | string     | 单章名               | 是           | 单章的名称，例如 高晓松聊历史                                |
| chapter_num            | int        | 章节号               | 是           | 章节所对应的序号，例如 5                                     |
| audio_duration         | string     | 音频时长             | 是           | 按照00:00:00格式填写                                         |

5）本地生活

基于地理位置信息的内容详情（没有地理位置则不用填写地域标签，此时以图文或视频的策略进行全国分发）。

基本字段

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字 | 示例大众点评：舌尖上的江南之江浙菜                           |
| body          | string   | **是**       | 消息体，为小程序或内容的详细介绍，机器将参考消息体为物料打上相应分发标签 | 本地生活的详情页介绍，示例大众点评：江浙菜即浙江菜系，以杭州菜作为代表，是中国传统八大菜系之一，其地山清水秀，产物丰富，佳肴美味，古有谚语曰：“上有天堂，下有苏杭”。 |
| path          | string   | **是**       | 智能小程序内页链接                                           | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（最多3张，单图片最大2M）   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一），内容型为1000                         | 内容型固定为1000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），本地生活图文子类为1007             | 本地生活型固定为1007                                         |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 美食（可选有限集合）                                         |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 苏菜（可选有限集合）                                         |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：组件,接口,API                                          |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**             | **类型** | **是否必填**                                                 | **备注**         | **示例**                                                     |
| ------------------- | -------- | ------------------------------------------------------------ | ---------------- | ------------------------------------------------------------ |
| author_name         | string   | 否                                                           | 作者名           | 张三                                                         |
| author_portrait_url | string   | 否                                                           | 作者头像url      | <https://www.xxx.baidu.com/author/portrail.jpg>               |
| author_path         | string   | 否                                                           | 作者落地页链接   | /pages/author/author                                         |
| author_fans_num     | int      | 否                                                           | 作者粉丝量       | 10000                                                        |
| author_auth         | string   | 否                                                           | 是否认证作者     | 1-是 0-否   示例：1                                          |
| author_publish_num  | string   | 否                                                           | 作者发文量       | 100                                                          |
| publish_time        | string   | **是**                                                       | 内容原始发布时间 | 2018年9月8日                                                 |
| img_urls            | string   | 否                                                           | 文章所有图片url  | ["<https://b.bdstatic.com/miniapp/resource/image/headImg.png>"] |
| channel_id          | int      | 否                                                           | 频道ID           | 1000                                                         |
| channel             | string   | 否                                                           | 频道名称         | 在小程序内所属频道名   示例：萌宠                            |
| content_heat        | string   | **是**                                                       | 内容热度         | 98.5                                                         |
| page_view           | int      | **是**                                                       | 内容浏览量       | 1000                                                         |
| like_num            | int      | **是**                                                       | 内容点赞量       | 1000                                                         |
| comment_num         | int      | **是**                                                       | 内容评论量       | 1000                                                         |
| collect_num         | int      | **是**                                                       | 内容收藏量       | 1000                                                         |
| share_num           | int      | **是**                                                       | 内容转发量       | 1000                                                         |
| video_duration      | string   | 是（当资源为视频时，该字段必填）                             | 视频时长         | 示例：00:00:00                                               |
| pc_url              | string   | 是（当资源为视频时，和h5链接必填一种）                       | 视频PC链接       |                                                              |
| h5_url              | string   | 是（当资源为视频时，和pc链接必填一种）                       | 视频H5链接       |                                                              |
| store_name          | string   | 是（如一篇文章有多个店铺，可不填写）                         | 商铺名称         | 商铺名称， case：火烧云                                      |
| store_province      | string   | 是（如一篇文章有多个店铺，不属于一个省，可不填写）           | 商铺所在省       | 商铺信息：省 case：北京                                      |
| store_city          | string   | 是（如一篇文章有多个店铺，不属于一个市，可不填写）           | 商铺所在市       | 商铺信息：市 case： 北京                                     |
| store_area          | string   | 是（如一篇文章有多个店铺，不属于一个区，可不填写）           | 商铺所在区       | 商铺信息：区 case：海淀                                      |
| store_district      | string   | 是（如一篇文章有多个店铺，不属于一个商圈，可不填写）         | 商铺所在商圈     | 商铺信息：商圈 case：中关村                                  |
| store_type          | string   | 是（如一篇文章有多个店铺，不属于一个一级类别，可不填写）     | 商铺一级类别     | 商铺一级类别： case：美食                                    |
| store_sub_type      | string   | 是（如一篇文章有多个店铺，不属于一个二级类别，可不填写）     | 商铺二级类别     | 商铺二级类别： case：日料                                    |
| store_star          | string   | 是（如一篇文章有多个店铺，可不填写）                         | 商铺星级         | 商铺星级：5星                                                |
| taste_rate          | string   | 否（如一篇文章有多个店铺，可不填写）                         | 口味评分         | 口味：7.9                                                    |
| enviroment_rate     | string   | 否（如一篇文章有多个店铺，可不填写）                         | 环境评分         | 环境：8.5                                                    |
| service_rate        | string   | 否（如一篇文章有多个店铺，可不填写）                         | 服务评分         | 服务：7.9                                                    |
| leaderboard_rank    | int      | 是（如一篇文章有多个店铺，可不填写）                         | 排行榜名次       | 排行榜名次：1                                                |
| ave_price           | int      | 是（如一篇文章有多个店铺，不属于一个人均消费价格段，可不填写） | 人均价格         | 人均价格：200                                                |
| high_comment        | string   | 否                                                           | 优质评价内容     | 手机款式漂亮，颜色我很喜欢，系统流畅，功能齐全，物超所值     |

6）问答

文章的详情，物料类型主要为图片和文字的组合，素材落详情页内容由一个问题对应多个答案。

基本字段

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字，不大于40个字 | 示例豆果美食小程序：超经典的蔓越莓曲奇饼干，在家也能做       |
| body          | string   | **是**       | 消息体，为小程序或内容的详细介绍，机器将参考消息体为物料打上相应分发标签 | 内容的正文简介，示例豆果美食小程序：黄油化开备用,黄油化开后加入糖霜，搅拌均匀。,加入蛋清，继续打匀。,加入切碎的蔓越莓，继续搅拌。蔓越莓放多少根据自己的喜... |
| path          | string   | **是**       | 智能小程序内页链接，落地页要求为一个问题对应多个答案，具体样式参考 百度 App问答落地页，**feed****要求至少8个答案** | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（问答资源要求3张封图，单图片最大2M），且封图不可重复   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"   "https://b.bdstatic.com/miniapp/resource/image/demo3.png“] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一），内容型为1000                         | 内容型固定为1000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），图文子类为1001                     | 问答型固定为1009                                             |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 例如美食（可选有限集合）                                     |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 例如甜品（可选有限集合）                                     |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：甜甜圈,糕点,鲍师傅,酥饼                                |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**              | **类型** | **是否必填** | **备注**                                        | **示例**                                                     |
| -------------------- | -------- | ------------ | ----------------------------------------------- | ------------------------------------------------------------ |
| author_name          | string   | 否           | 作者名                                          | 张三                                                         |
| author_portrait_url  | string   | 否           | 作者头像url                                     | 例如<https://www.xxx.baidu.com/author/portrail.jpg>           |
| author_path          | string   | 否           | 作者落地页链接                                  | /pages/author/author                                         |
| author_fans_num      | int      | 否           | 作者粉丝量                                      | 10000                                                        |
| author_auth          | string   | 否           | 是否认证作者                                    | 1-是 0-否   示例：1                                          |
| comment_portrait_url | array    | 是           | 讨论人头像URL   问答类型资源该字段必填，固定4条 | ["<https://www.xxx.baidu.com/author/portrail.jpg>",<br>"<https://www.xxx.baidu.com/author/portrail.jpg>",<br>"<https://www.xxx.baidu.com/author/portrail.jpg>",<br>"<https://www.xxx.baidu.com/author/portrail.jpg>"]110*110 |
| comment_author_num   | int      | 是           | 讨论人数   问答类型必填该字段                   | 30                                                           |
| publish_time         | string   | **是**       | 内容发布时间                                    | 内容发布时间需在一年以内   示例：2018年9月8日                |
| img_urls             | string   | 否           | 文章所有图片url                                 | ["<https://b.bdstatic.com/miniapp/resource/image/headImg.png>"] |
| channel_id           | int      | 否           | 频道ID                                          | 1000                                                         |
| channel              | string   | 否           | 频道名称                                        | 在小程序内所属频道名   示例：萌宠                            |
| like_num             | int      | 否           | 点赞量                                          | 1000                                                         |
| comment_num          | int      | 否           | 评论量                                          | 例如1001                                                     |
| dislike_num          | int      | 否           | 踩数                                            | 1000                                                         |
| collect_num          | int      | 否           | 收藏量                                          | 1000                                                         |
| share_num            | int      | 否           | 转发量                                          | 1000                                                         |
| topic                | string   | 否           | 话题名                                          | 减肥日记                                                     |
| comment              | string   | 否           | 优质评论内容                                    | 智能连接人与信息、人与服务、人与万物的开放生态               |
| topic_path           | string   | 否           | 话题落地页链接                                  | /pages/topic/topic                                           |

### 2.工具型

工具的详情页，主要为解决用户某个问题或需求，而提供的解决方案。

基本字段

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字 | 示例齐天大圣小程序：违章高发地_齐车大圣智能小程序            |
| body          | string   | **是**       | 消息体，为小程序或内容的详细介绍，机器将参考消息体为物料打上相应分发标签 | 工具内容的介绍，示例齐天大圣小程序：提供准确、及时的违章高发地信息，方便快捷，安全出行.。 |
| path          | string   | **是**       | 智能小程序内页链接                                           | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（最多3张，单图片最大2M）   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一），工具型为3000                         | 工具型固定为3000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），依照具体子类型填写                 | 根据不同子类型，填写对应的二级类型，例如金融为3001           |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 效率（可选有限集合）                                         |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 信息查询（可选有限集合）                                     |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：组件,接口,API                                          |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**   | **类型** | **是否必填** | **备注**      | **示例**           |
| --------- | -------- | ------------ | ------------- | ------------------ |
| scene     | string   | 否           | 使用场景      | 车主违章           |
| function  | string   | 否           | 功能点        | 违章查询，在线缴费 |
| right_age | string   | 否           | 适用年龄/评级 | 17岁以上           |

### 3.游戏型   

游戏的详情页，提供小游戏，供开发者消遣和娱乐。

基本字段

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字 | 示例跳一跳小游戏：不一样的跳一跳，比比看，看谁跳的更远。无需下载，立刻玩！ |
| body          | string   | **是**       | 消息体，为小程序或内容的详细介绍，机器将参考消息体为物料打上相应分发标签 | 游戏的介绍，示例跳一跳小游戏：我们要指控青蛙或兔子，使它们穿梭在折盒上翻蹦。 |
| path          | string   | **是**       | 智能小程序内页链接                                           | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（最多3张，单图片最大2M）   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一），游戏型为4000                         | 游戏型固定为4000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），依照具体子类型而定                 | 依照具体子类型而定                                           |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 游戏（可选有限集合）                                         |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 休闲游戏（可选有限集合）                                     |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：组件,接口,API                                          |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**   | **类型** | **是否必填** | **备注**      | **示例**               |
| --------- | -------- | ------------ | ------------- | ---------------------- |
| is_multi  | string   | 否           | 单人/多人     | 多人1，单人0   示例：1 |
| is_online | string   | 否           | 是否联机      | 是1，否0   示例：1     |
| right_age | string   | 否           | 适用年龄/评级 | 17岁以上               |
| language  | string   | 否           | 语言          | 英语                   |
| game_type | string   | 否           | 游戏类型      | 动作                   |

### 4.服务

商品 / 服务的详情页，主要为提供商品 / 服务，用户可享受或购买。

1）商品

商品的详情页，主要售卖相关商品。

基本字段

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字 | 示例超值年货节：过年啦，让年货心意比你先到家！妈妈的最爱和爸爸的心头好全都低于5折哦~ |
| body          | string   | **是**       | 消息体，为小程序或内容的详细介绍，机器将参考消息体为物料打上相应分发标签 | 商品内容的介绍，示例超值年货节：整合主流电商平台低价好货产品，满足购物消费需求 |
| path          | string   | **是**       | 智能小程序内页链接                                           | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（最多3张，单图片最大2M）   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一），服务型为2000                         | 服务型固定位2000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），商品子类为2003                     | 商品型固定位2003                                             |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 服务（可选有限集合）                                         |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 电商（可选有限集合）                                         |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：组件,接口,API                                          |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**        | **类型** | **是否必填** | **备注**                | **示例**                                                 |
| -------------- | -------- | ------------ | ----------------------- | -------------------------------------------------------- |
| name           | string   |              | 商品名称                | Apple Iphone X                                           |
| price          | string   |              | 价格                    | 7099                                                     |
| favorable_rate | string   |              | 好评率                  | 99%                                                      |
| category_1     | string   |              | 商品类别（一级）        | 电子产品                                                 |
| category_2     | string   |              | 商品类别（二级）        | 通讯                                                     |
| category_3     | string   |              | 商品类别（三级）        | 手机                                                     |
| brand          | string   |              | 品牌                    | `Apple`                                                  |
| model          | string   |              | 型号                    | (A1865) 64GB                                             |
| inventory      | int      |              | 库存（动态时时数据）    | 10000                                                    |
| is_failure     | string   |              | 是否失效（已下架/售罄） | 已下架                                                   |
| high_comment   | string   |              | 优质评价内容            | 手机款式漂亮，颜色我很喜欢，系统流畅，功能齐全，物超所值 |

2）酒店

酒店的详情页，主要介绍相关酒店，并且供用户预订。

基本字段

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字 | 示例跳一跳小游戏：北京上地CitiGo HOUSE欢寓酒店               |
| body          | string   | **是**       | 消息体，为小程序或内容的详细介绍，机器将参考消息体为物料打上相应分发标签 | 酒店的介绍，示例同城艺龙小程序：上地附近最高端实惠的三星酒店，百度、腾讯等科技园员工必选 |
| path          | string   | **是**       | 智能小程序内页链接                                           | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（最多3张，单图片最大2M）   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一），商品型为2000                         | 服务型固定为2000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），酒店子类为2001                     | 酒店型固定为2001                                             |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 服务（可选有限集合）                                         |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 酒店订票（可选有限集合）                                     |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：组件,接口,API                                          |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**      | **类型** | **是否必填** | **备注**                       | **示例**                                                 |
| ------------ | -------- | ------------ | ------------------------------ | -------------------------------------------------------- |
| name         | string   |              | 酒店名称                       | 如家前门店                                               |
| location     | string   |              | 酒店地理位置信息（具体到城市） | 北京西城区                                               |
| score        | string   |              | 酒店评分                       | 9.6                                                      |
| price        | int      |              | 价格                           | 468                                                      |
| star_level   | string   |              | 酒店星级                       | 经济型酒店                                               |
| is_full      | string   |              | 是否满房（动态实时数据）       | 是：1，否0   示例：1                                     |
| high_comment | string   |              | 优质评价内容                   | 住的大床房，一楼，胡同里很有接地气的感觉。刚装修的挺干净 |

3）景点

景点的详情页，主要是景点的介绍或购买。

基本字段

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字 | 示例跳一跳小游戏：上海野生动物园                             |
| body          | string   | **是**       | 消息体，为小程序或内容的详细介绍，机器将参考消息体为物料打上相应分发标签 | 景点内容的介绍，示例携程小程序：上海野生动物园，带你亲近自然，感受大熊猫的可爱憨厚 |
| path          | string   | **是**       | 智能小程序内页链接                                           | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（最多3张，单图片最大2M）   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一）服务型为2000                           | 服务型固定为2000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），景点子类为2002                     | 景点型固定为2002                                             |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 效率（可选有限集合）                                         |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 信息查询（可选有限集合）                                     |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：组件,接口,API                                          |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**        | **类型** | **是否必填** | **备注**                       | **示例**                                                 |
| -------------- | -------- | ------------ | ------------------------------ | -------------------------------------------------------- |
| name           | string   |              | 景点名称                       | 故宫                                                     |
| location       | string   |              | 景点地理位置信息（具体到城市） | 北京市东城区                                             |
| score          | string   |              | 景点评分                       | 9.6                                                      |
| price          | string   |              | 价格                           | 60元                                                     |
| artificial_tag | string   |              | 人工tag                        | 卖点或吸引点，或其他话题性tag   示例：城市观光，亲水避暑 |
| is_bookable    | string   |              | 是否可预订（动态实时数据）     | 是1，否0   示例：1                                       |
| high_comment   | string   |              | 优质评价内容                   | 中国古代宫廷建筑之精华                                   |

4）美食

基本字段

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字 | 示例跳一跳小游戏：不一样的跳一跳，比比看，看谁跳的更远。无需下载，立刻玩！ |
| body          | string   | **是**       | 消息体，为小程序或内容的详细介绍，机器将参考消息体为物料打上相应分发标签 | 直播内容的介绍，示例齐天大圣小程序：我们要指控青蛙或兔子，使它们穿梭在折盒上翻蹦。 |
| path          | string   | **是**       | 智能小程序内页链接                                           | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（最多3张，单图片最大2M）   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一），服务型为2000                         | 服务型固定为2000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），图文子类为1001                     |                                                              |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 效率（可选有限集合）                                         |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 信息查询（可选有限集合）                                     |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：组件,接口,API                                          |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**          | **类型** | **是否必填** | **备注**                       | **示例**                                                     |
| ---------------- | -------- | ------------ | ------------------------------ | ------------------------------------------------------------ |
| name             | string   |              | 餐厅名称                       | 香山饭店                                                     |
| location         | string   |              | 餐厅地理位置信息（具体到城市） | 北京海淀                                                     |
| favorable_rate   | string   |              | 餐厅好评率                     | 99%                                                          |
| price_per_person | string   |              | 人均价格                       | 600元                                                        |
| star_level       | string   |              | 星级                           | 五星级                                                       |
| artificial_tag   | string   |              | 人工tag                        | 餐饮类目或者属性   示例：日料、韩餐、西餐，宴请              |
| high_comment     | string   |              | 优质评价内容                   | 饭店建于1984年，位于香山公园内,饭店由美籍华人   贝聿铭设计，白墙灰瓦，建筑与周围的环境相映成趣。 |

5）医疗

基本字段

| **key**       | **类型** | **是否必填** | **备注**                                                     | **示例**                                                     |
| ------------- | -------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title         | string   | **是**       | 在信息流中分发的展示标题，需要描述完整，能够明确表示小程序或内容的主要信息点，不能全英文，最少6个字 | 示例跳一跳小游戏：不一样的跳一跳，比比看，看谁跳的更远。无需下载，立刻玩！ |
| body          | string   | **是**       | 消息体，为小程序或内容的详细介绍，机器将参考消息体为物料打上相应分发标签 | 直播内容的介绍，示例齐天大圣小程序：我们要指控青蛙或兔子，使它们穿梭在折盒上翻蹦。 |
| path          | string   | **是**       | 智能小程序内页链接                                           | /pages/index/index                                           |
| images        | string   | **是**       | 封面图片链接（JSON格式）（最多3张，单图片最大2M）   建议尺寸：高>=210 & 宽>=375   最小尺寸：高>=146 & 宽>=218 | ["https://b.bdstatic.com/miniapp/resource/image/demo1.png",   "https://b.bdstatic.com/miniapp/resource/image/demo2.png"] |
| mapp_type     | string   | **是**       | 资源类型（参考附录一），服务型为2000                         | 服务型固定为2000                                             |
| mapp_sub_type | string   | **是**       | 资源子类型（参考附录一），医疗子类为2005                     | 2005                                                         |
| feed_type     | string   | **是**       | feed一级分类（参考附录二）                                   | 效率（可选有限集合）                                         |
| feed_sub_type | string   | **是**       | feed二级分类（参考附录二）                                   | 信息查询（可选有限集合）                                     |
| tags          | string   | 否           | 资源标签，英文逗号分割 ，填写越准确详细可能带来更好的分发效果（最多10个，总长度最多100字） | 示例：组件,接口,API                                          |
| ext           | string   | 见下表       | 扩展信息（JSON格式，参考下方拓展字段）                       | {"desc": "智能小程序官方示例","version": "10.7.1"}           |

拓展字段

| **key**      | **类型** | **是否必填** | **备注**     | **示例** |
| ------------ | -------- | ------------ | ------------ | -------- |
| disease      | string   |              | 疾病         | 心脏病   |
| doctor_num   | int      |              | 医生数量     | 1000     |
| high_comment | string   |              | 优质评价内容 | 妙手回春 |

## 信息流字段附录

### 附录一 :mapp_type和mapp\_sub\_type列表

**mapp_type列表**

|类型|ID|
|---|---|
|内容|	1000|
|服务|	2000|
|工具|	3000|
|游戏|	4000|

**mapp\_sub\_type列表**

|类型|ID|PID|
|--|--|--|
|图文|1001|	1000|
|视频	|1002|	1000|
|直播|1003|1000|
|音频|	1004|	1000|
|横滑卡主卡	|1005	|1000|
|横滑卡子卡	|1006	|1000|
|本地生活图文| 1007| 1000|
|本地生活视频 |1008 |1000|
|问答| 1009 |1000|
|酒店	|2001	|2000|
|景点|	2002|	2000|
|商品|	2003|	2000|
|汽车|	2004|	2000|
|医疗|	2005|	2000|
|金融|	3001|	3000|
|天气|	3002|	3000|
|车辆|	3003|	3000|
|智能|	3004|	3000|
|交通|	3005|	3000|
|生活|3006|	3000|
|社交|	3007|	3000|
|对战|	4001|	4000|
|单机|	4007|	4000|
|益智|	4008|	4000|

### 附录二：Feed一二级分类可选集
> * 准确填写将带来更好的分发效果。
* 能且只能选择一个二级分类。
* 若无合适的一级或二级分类选项，可填为综合。

|新一级分类|新二级分类|
|---|---|
|财经|畜牧业、国内宏观、白银、煤炭、保险、基金、投资、能源、股票、渔业、三农、美股、种植业、贵金属、银行、金融、林业、宏观经济、银行业、债券、风投、外汇、期货、IPO、数字货币、个人理财、农资、国外宏观、石油、理财、农业、私募、新三板、汇率、P2P理财、沪指、黄金、蓝筹股、盘面分析、非银金融行业、矿产、财会、A股、港股、国际经济、化工业、购房、租房、二手房、房地产、信托、汽车制造、物流、传媒|
|宠物|狗、动物、宠物、动物界、宠物健康、猫|
|动漫|动漫、热血动漫、日本动漫、漫画、国产动漫、cosplay、动画、漫威漫画、欧美动漫、新番动漫、动漫展、声优、特摄|
|搞笑|奇葩、段子、冷笑话、奇葩人事、神回复|
|国际|国际社会、时政外交、中东局势、移民、中俄关系、中美关系、中日关系、中欧关系、国际时事、国际局势、国际政务、国际组织、中非关系、中韩关系|
|家居|家居、装修、植物、家具、厨卫电器、家用电器、小户型装修、家居装饰、小家电、家装设计、室内设计、花、DIY、厨具、家居风水、生活常识、设计师、卫浴、厨房|
|健康养生|健康、养生、癌症、中医、减肥、精神病、健身、传染病、药品、睡眠、口腔护理、高血压、推拿、保健品、中药、心血管病、呼吸道疾病、糖尿病、饮食健康、肠胃病、肿瘤、穴位、护理、营养学、食疗、瘦身、心理健康、儿科、皮肤病、神经科学、养肾、瑜伽、胃癌、乳腺癌、临床医学、医学研究、医疗行业|
|教育|大学、高考、幼儿园、英语、数学、语文、公务员、中考、资格考试、创业、求职、成人教育、留学、考研、家庭教育、心理学、职业规划、学前教育、在线教育、外语学习、小学教育、商学院、研究生、中学教育、高中教育|
|军事|航空航天、陆军、海军、武器装备、中国军情、军事历史、空军、导弹、战斗机、航母、军舰、核武器、环球军事、军工业、军事演习、恐怖主义、战争|
|科技|电子商务、移动互联网、移动支付、社交网络、众筹、互联网金融、O2O、产品运营、信息安全、网络安全、软件、运营商、人工智能、通信、市场营销、大数据、云计算、电信、3D打印、生物技术、物联网、智能出行、酷玩、虚拟现实、编程语言、材料科学、创客、科技创投、智能硬件、医药科学、苹果公司、小米科技、ios、消费电子、网络营销|
|数码|手机、数码、电脑、机器人、无人机、Android、笔记本电脑、平板、操作系统、耳机、相机、电视机、智能家居、穿戴设备、家电、数码评测、华为手机、可穿戴设备、影音设备|
|科学|科学、外星生命、天文、科普、生物研究、科学家、太空探索、科幻|
|历史|历史、清朝、中国历史、中国近代史、三国、唐朝、中国古代史、明朝、汉朝、宋朝、春秋战国、世界历史、历史人物、中国现代史|
|旅游|航空、摄影、民用航空、旅游产业、签证、徒步、自驾游、民俗、旅游休闲、亲子出游、背包客、国内旅游、酒店住宿、旅游攻略、欧洲游|
|美食|水果、菜谱、蔬菜、海鲜、调味品、小吃、甜品、烹饪技巧、咖啡、葡萄酒、麻辣美食、糕点、中餐、日本料理、烘焙、美食节目、西餐、饮品、川菜、鲁菜、粤菜、苏菜、浙菜、闽菜、湘菜、徽菜|
|母婴育儿|育儿、怀孕、孕产、产后护理、妇科、婴幼儿护理、母乳喂养、分娩、亲子成长、备孕、玩具、不孕不育、早期教育、婴儿辅食、童书绘本、新生儿、胎教|
|汽车|豪华车、国产车、跑车、德国汽车、商用车、新车、汽车用品、汽车导购、电动汽车、驾照考试、日本汽车、摩托车、二手车、汽车展览、SUV、越野车、汽车产业、韩国汽车、汽车保养、新能源汽车、驾驶技巧、新能源、无人驾驶、汽车保险、汽车租赁、汽车维修、MPV、汽车配件、节能减排、赛车、房车、汽车改装、轿车、卡车、汽车公司|
|情感|婚姻、两性、婚外情、恋爱、正能量、鸡汤、婆媳关系、情感故事、励志、择偶、家庭关系、人际关系|
|社会|交通、婚礼、天气、农村、农民、食品安全、奇闻轶事、彩票、餐饮、水污染、黑社会、医患关系、慈善、社会万象、交通事故、民事纠纷、校园生活、诈骗|
|时尚|时装搭配、美女、美发、模特、化妆、整形、美容、护肤、流行文化、珠宝、奢侈品、男装、时装、化妆品、美体、腕表、男性时尚、时尚潮流、设计、服装设计、街拍、香氛|
|时事|法制、时政、台海时事、民生、社会保险、刑法、反腐倡廉、环境污染、气象灾害、环境保护、地质、计划生育、农村改革、医疗改革、空气污染、养老保险、城市规划、医疗保险、政务监督、国内时政、自然灾害、领土问题、人事任免、事故灾难|
|体育|综合格斗、中国足球、NBA、自行车、中国男足、篮球、钓鱼、国际足球、足球、中超、网球、乒乓球、拳击、台球、排球、CBA、奥运会、欧冠、西甲、英超、户外运动、田径、中国篮球、搏击、游泳、羽毛球、体育八卦、冰雪运动、中甲、跳水、意甲、体操、德甲、棋牌、马拉松、跑步、极限运动、射击、骑行、跆拳道、高尔夫、法甲、F1赛车、棒球、国际象棋、滑冰、滑雪、举重、麻将、马术、扑克、射箭、摔跤、水上运动、跳高、跳远、围棋、武术、中国象棋|
|文化|文化、文学、建筑、艺术、小说、文物、读书、考古、文玩、舞蹈、收藏、美术、诗歌、玉、佛教、书法、雕塑、国学、艺术品、古诗、陶瓷、手工艺、日本文化、话剧、戏剧、哲学、儒家、戏曲、科幻小说、广告设计、网络文学、陶艺、工业设计、中国文学、宗教、穿越小说、创意设计、恐怖小说、玄幻小说、悬疑小说、言情小说、基督教、伊斯兰教、美文、故事、行为艺术、道教、印度教、犹太教、西方哲学、民间故事、拍卖|
|星座运势|生肖、星座、风水、命理、占卜、解梦智商测试、相术、周易、黄历、自然、鬼神|
|音乐|音乐、演唱会、乐器、华语音乐、摇滚乐、民族乐器、民俗音乐、纯音乐、电子音乐、翻唱、歌剧、歌曲、古典音乐、爵士乐、乐评、流行音乐、民谣、欧美音乐、说唱、音乐会、音乐节|
|游戏|网游、电竞、手游、游戏机、RPG游戏、沙盒游戏、塔防游戏、电玩、射击游戏、卡片游戏、冒险游戏、动作游戏、桌游、小游戏、游戏产业、休闲游戏、战略游戏、moba游戏、VR游戏、单机游戏、页游、端游、游戏主播、游戏主机、掌机游戏、主机游戏、XBOX、STEAM|
|娱乐|明星八卦、影视、港台娱乐、电视剧、内地电视剧、电影、内地综艺、电影节、真人秀、综艺、华语片、韩娱、日韩娱乐、欧美娱乐、小品、相声、韩剧、动作片、港台综艺、美剧、欧美电影、韩国综艺、恐怖片、喜剧片、欧美综艺、好莱坞、爱情片、动画电影、港台剧、古装剧、纪录片、科幻片、魔术、偶像剧、青春片、日韩电影、日剧、泰国电影、泰剧、网红、文艺片、舞台剧、战争片、马戏、杂技|
|体育|铅球、铁饼、标枪、跨栏、竞走、冰球、冰壶、手球、帆船、皮划艇、赛艇、水球、柔道、攀岩、冲浪、保龄球、飞镖、击剑、跑酷、橄榄球|


### 附录三：扩展字段参考

内容类

图文

|参数名|类型|说明|是否必填|示例|
|---|---|---|---|---|
|author_name|	string|	作者名|否|	张三|
|author\_portrait\_url|	string|作者头像url|否|`	https://www.xxx.baidu.com/author/portrail.jpg`|
|author_path|	string|	作者落地页链接|	否|/pages/author/author|
|author\_fans\_num|	int	|作者粉丝量|否|10000|
|author_auth|	string|	是否认证作者	|否|1-是 0-否 |
|author\_publish\_num	|string	|作者发文量|否|100|
|publish_time|	string|	内容原始发布时间|是|2018年9月8日|
|img_urls|	string	|文章所有图片url|否|`https://b.bdstatic.com/miniapp/resource/image/headImg.png`|
|channel_id|	int|	频道ID|	否|1000|
|channel|	string|	频道名称	|否|在小程序内所属频道名 示例：萌宠|
|like_num|	int|	点赞量|	否|1000|
|comment_num|	int|	评论量|	否|1000|
|dislike_num|	int	|踩数|否|	1000|
|collect_num	|int	|收藏量|否|	1000|
|share_num|	int	|转发量|否|	1000|
|topic|	string|	话题名|	否|减肥日记|
|comment|	string|	优质评论内容|	否|智能连接人与信息、人与服务、人与万物的开放生态|
|topic_path|	string|	话题落地页链接|	否|/pages/topic/topic|

视频

|参数名|类型|说明|是否必填|示例|
|---|---|---|---|---|
|author_name|	string|	作者名|	否|张三|
|author\_portrait\_url	|string	|	作者头像url|否|`https://www.xxx.baidu.com/author/portrail.jpg`|
|author_path|	string|	作者落地页链接|		否|/pages/author/author|
|author\_fans\_num|	int	|作者粉丝量|	否|	1000|
|author\_publish\_num|	int	|作者发文量|	否|1000|
|author_auth|	int|是否认证作者|	否|	1-是 0-否|
|video_title|	string|	片名|	否|	我不是药神|
|director|	string|	导演|	否|	徐峥|
|lead_role|	string	|主演|	否|徐峥 周一围 王传君 谭卓 杨新鸣|
|presenter|	string|	主持人|		否|何炅|
|guest	|string	|嘉宾	|	否|谢娜|
|publish_time	|string	|内容原始发布时间|是|2018年9月8日|
|video_duration	|string|	视频时长|	是|按照00:00:00格式填写|
|pc_url	|string	|视频PC播放链接	|是（和h5_url需填一种）|-|
|h5_url	|string	|视频H5播放链接|是（和pc_url需填一种）|-|
|update_time|	string|	更新时间|否|	2018年9月10日 15:36:20|
|channel_id|	int|	频道ID|		否|1002|
|channel|	string|	频道名称|	否|	视频|
|is_pay	|string|	是否付费|	否|	付费|
|play_num	|int	|播放次数|	否|	10000|
|publish_year|	string|	发行年份|	否|	2018年|
|area|	string|	地区	|	否|北京|
|video_status|	string|	视频状态|	否|	正在热映|
|score	|string|	评分|	否|	9.3|
|like_num|	int	|点赞量	|	否|1000|
|comment_num	|int	|评论量|	否|1000|
|collect_num|	int	|收藏量	|	否|1000|
|dislike_num	|int	|踩数|	否|	1000|
|share_num|	int|	转发量|	否|	1000|
|comment	|string	|优质评论内容	|	否|“你敢保证你一辈子不得病？”纯粹、直接、有力！常常感叹：电影只能是电影。但每看到这样的佳作，又感慨：电影不只是电影！由衷的希望这部电影大卖！成为话题！成为榜样！成为国产电影最该有的可能。|
|is_exclusive	|string|	是否独播	|	否|是1，否0 |
|img_urls|	string	|视频内多张图片url（至少3张）JSON格式|	否|`https://b.bdstatic.com/miniapp/resource/image/headImg.png`<p>`https://b.bdstatic.com/miniapp/resource/image/headImg.png`<p>`https://b.bdstatic.com/miniapp/resource/image/headImg.png`|

直播

|参数名|类型|说明|是否必填|示例|
|---|---|---|---|---|
|source_name|	string|	主播昵称|是|	张三|
|living_type|	string|	直播状态|是|	online/offline|
|publish_time|	int	|开播时间|是|	10位时间戳|
|end_time| 	int	|关播时间|是|	10位时间戳|
|session_id 	|string	|场次	|是|场次 id|

服务类

商品

|参数名|类型|说明|示例|
|---|---|---|---|
|name|	string|	商品名称	|Apple Iphone X|
|price|	string|	价格|	7099|
|favorable_rate	|string|	好评率|	99%|
|category_1|	string|	商品类别（一级）|	电子产品|
|category_2	|string	|商品类别（二级）|	通讯|
|category_3	|string	|商品类别（三级）	|手机|
|brand|	string	|品牌|Apple|
|model	|string	|型号	|(A1865) 64GB|
|inventory	|int	|库存（动态时时数据）|	10000|
|is_failure|	string|	是否失效（已下架/售罄）|已下架|
|high_comment|	string|	优质评价内容|	手机款式漂亮，颜色我很喜欢，系统流畅，功能齐全，物超所值|

酒店

|参数名|类型|说明|示例|
|---|---|---|---|
|name	|string|	酒店名称|	如家前门店|
|location	|string	|酒店地理位置信息（具体到城市）|	北京西城区|
|score|	string|	酒店评分|	9.6|
|price	|int|	价格	|468|
|star_level|	string|	酒店星级|经济型酒店|
|is_full	|string	|是否满房（动态实时数据）|	是：1，否0|
|high_comment	|string	|优质评价内容|	住的大床房，一楼，胡同里很有接地气的感觉。刚装修的挺干净|

景点

|参数名|类型|说明|示例|
|---|---|---|---|
|name|	string|	景点名称|	故宫|
|location|	string|	景点地理位置信息（具体到城市）|北京市东城区|
|score|	string|	景点评分|	9.6|
|price|	string|	价格|	60元|
|artificial_tag|	string|	人工tag	|卖点或吸引点，或其他话题性tag。示例：城市观光，亲水避暑|
|is_bookable|	string|	是否可预订（动态实时数据）|是1，否0|
|high_comment|	string|	优质评价内容|	中国古代宫廷建筑之精华|

美食

|参数名|类型|说明|示例|
|---|---|---|---|
|name|	string|	餐厅名称|	香山饭店|
|location|	string|	餐厅地理位置信息（具体到城市）|北京海淀|
|favorable_rate	|string|	餐厅好评率|	99%|
|price\_per\_person	|string	|人均价格|	600元|
|star_level	|string|	星级|	五星级|
|artificial_tag	|string|	人工tag	|餐饮类目或者属性 示例：日料、韩餐、西餐，宴请|
|high_comment|	string|	优质评价内容|	饭店建于1984年，位于香山公园内,饭店由美籍华人。贝聿铭设计，白墙灰瓦，建筑与周围的环境相映成趣。|

医疗

|参数名|类型|说明|示例|
|---|---|---|---|
|disease	|string|	疾病	|心脏病|
|doctor_num|	int|	医生数量|	1000|
|high_comment|	string|	优质评价内容|	妙手回春|

工具类

|参数名|类型|说明|示例|
|---|---|---|---|
|scene|	string|	使用场景|	车主违章|
|function|	string|	功能点|	违章查询，在线缴费|
|right_age|	string|	适用年龄/评级|	17岁以上|

游戏类

|参数名|类型|说明|示例|
|---|---|---|---|
|is_multi	|string	|单人/多人	|多人1，单人0 |
|is_online|	string|	是否联机|	是1，否0|
|right_age|	string	|适用年龄/评级|	17岁以上|
|language|	string|	语言|	英语|
|game_type|	string|	游戏类型|	动作|

## **常见问题**
1. **access_token不合法**

常见异常原因: 小程序密钥(client_secret)在开发者平台有改动，但未同步到获取access_token的接口。(获取access_token : [接口文档](https://smartprogram.baidu.com/docs/develop/serverapi/power_exp/#开发者服务权限说明) )

2. API接口调用失败，提示“Invalid parameter”。

注意access_token字段使用GET方法，其他字段使用POST方法form-data提交2. **如何修改已提交的素材**

path字段是素材的唯一标识，将需要修改的素材更新任一字段（除path字段外）重新进行提交，则会触发资源修改。

3. **如何删除已提交的素材**

> path字段是素材的唯一标识，已删除的资源不可再次提交，所以建议若非严重性问题，无需将素材进行删除操作，可以直接在提交接口中重新提交修改或更新后的素材。

* API实时接口进行删除，[deleteresource](#deleteresource)

* 链接文件删除，链接文件类型（type字段）为0，[submitsitemap](#submitsitemap)


4. **素材发布时间（publish_time）格式不正确**

扩展字段中，publish_time的格式为2019年1月2日，若传2019-01-02、时间戳格式或其他格式，则属于错误格式。

5. **素材审核拒绝后，是否可以重新提交**

可以重新提交，但建议提交的资源为优化后的资源（以path为素材的唯一标识），否则依旧会被审核拒绝。

注意：需要重新提交的素材，需更素材的任一字段（除path字段外）重新进行提交才会触发资源入库，否则会默认为重复资源入库失败。

6. **为什么使用sitemap提交的素材，没有提交成功**

1）确定是否素材的sitemap链接无效，导致解析失败；

2）确定是否sitamp内容格式错误，正确内容格式请见接口文档中”链接文件提交“，sitamap链接打开后应为多个loc，loc链接打开后应为多条素材；

3）确定素材是否无任何字段更新重新而进行了提交，若素材无任何字段更新重新进行提交则判定为重复资源，重复资源无法入库成功；

4）每个小程序，最多提交3条sitemap链接，建议一条type为1的sitemap链接，一条type为0的sitemap链接的（即增量/更新的sitemap一个，线下/删除的sitemap一个），若已满3条sitemap，若想添加新的sitemap链接，建议先删除一条sitemap，再进行添加新的sitemap

5）确定sitemap链接设置的更新频率，若为每天，则次日凌晨执行素材入库任务，若为每周，则七天后的凌晨执行素材入库任务；建议开发者更新频率设置为每天。

7. 为什么单条素材管理中展示的素材数量与提交量不一致，例如提交了10条，单条素材管理中仅展示5条

１）确认是否素材的path字段是否相同，若素材path字段相同，标题或其他字段有不同，则视为素材更新入库，（素材内容会以最新提交的素材为准）

素材A的内容标题为“百度AI开发者大会：百度大脑开放200项AI能力”，对应的path为“/pages/detail/post/post?qid=3b9732”

素材Ｂ的内容标题为“百度AI开发者大会回顾，９大AI利剑被亮出”，对应的path为“/pages/detail/post/post?qid=3b9732”

则素材A和素材Ｂ视为同一条素材

２）确认是否其中提交的素材在提交前进行过删除操作，若素材进行过删除操作，则再次提交无法入库，（删除素材视为线下操作）。

８. API接口调用失败，提示“Invalid parameter”

注意access_token字段使用GET方法，其他字段使用POST方法form-data提交/
