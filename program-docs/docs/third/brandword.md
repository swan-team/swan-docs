---
title: 小程序品牌词
header: third
nav: third
---

## 小程序品牌词

该接口允许服务商代开发者提交品牌相关query及证明资质，在通过审核后，百度搜索引擎将按此query召回小程序或同步“官方”标识。
其中，品牌词包括商标词、别名、简称，提交商标词时必须同步上传商标证等证明资质，别名、简称则无需上传资质。官方词则需要品牌词完成审核后再提交，可在品牌词对应召回的小程序单卡上标识“官方”字样。
该系列接口仅限高质量小程序调用，每个小程序最多可以有10个品牌召回词（包括商标词、别名、简称）。

### 商标词提交

提交商标词及相应资质，百度搜索引擎将通过该商标词召回小程序。接口每次调用都会记录资质信息，便于复用资质进行品牌词提交，生成的资质Id会在响应中返回。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/brand/word/submit?access_token=ACCESS_TOKEN
```

> 资质图片需要通过图片上传接口上传返回的 url

**参数说明:**

| 参数名             | 类型   | 是否必须 | 描述                                                         |
| :------------------ |: ------ | :-------- | ------------------------------------------------------------ |
| access_token       | string | true     | 授权小程序的接口调用凭据                             |
| word               | string | true     | 商标词                                                       |
| certification_id   | string | true     | 注册号                                                       |
| certification_name | string | true     | 注册名                                                       |
| certification_pic  | string | true     | 商标证原件照片                                               |
| relation_type      | int    | true     | 小程序主体与商标主体  1-商标注册人与申请认证主体相同<br> 2-两公司为分公司，子公司关系<br> 3-两公司为控股，出资关系 4 两公司法人为同一自然人 <br> 5-两公司法人为亲属关系 <br> 6-商标注册人与认证主体法人为亲属关系 <br> 7-商标注册人为认证主体法人<br>8-纯授权关系 |
| relation_pic       | json   | true     | 关系证明 详细格式见 relation_pic格式说明                     |


**relation_pic格式说明：**

| 参数名             | 类型   | 是否必须 | 描述                                                         |
| ------------------ | ------ | -------- | ------------------------------------------------------------ |
| certification_type | int    | true     | 证明材料类型  1-商标注册方营业执照<br>2-说明函<br>3-出资/控股证明<br>4-法人身份证明<br>5-双方法人身份证明<br>6-双方法人关系证明<br>7-双方身份证明<br>8-双方关系证明<br>9-商标证<br>10-授权说明函公证书 |
| pic_address        | string | true     | 证明材料图片 url                                             |

**relation_pic格式说明：**

```json
[
  {
        "certification_type": 1,
        "pic_address": "https://b.bdstatic.com/searchbox/mappconsole/image/20180913/1536820255990771.png"
    },
    {
        "certification_type": 2,
        "pic_address": "https://b.bdstatic.com/searchbox/mappconsole/image/20180913/1536820255990771.png"
    }
]
```

**公共响应参数**

| 参数  | 类型   | 描述     | 示例值   |
| ----- | ------ | -------- | -------- |
| errno | int    | 状态码   | 40001    |
| msg   | string | 状态描述 | 参数错误 |
| data  | object | 响应参数 | --       |

**响应参数**

| 字段名           | 类型 | 描述           |
| ---------------- | ---- | -------------- |
| certification_id | long | 存在后的资质Id |

**返回值示例:**

```json
{
  "errno": 0,
  "msg": "success",
  "data": {
    "certification_id": 1
  }
}
```


**错误码表：**

| 错误码 | 错误描述                           |
| ------ | ---------------------------------- |
| 100001 | 品牌词关系类型无效                 |
| 100002 | 不能包含字符,                      |
| 100003 | 品牌词长度超限                     |
| 100004 | 已经过申请该品牌词                 |
| 100005 | 缺少关系证明图                     |
| 100006 | 该小程序不满足提交商标词的条件     |
| 100007 | 提交数量超限                       |
| 100008 | 提交失败                           |
| 100009 | 正在审核中，请勿重复提交           |
| 100010 | 请在品牌词审核通过之后在提交官方标 |

### 复用资质提交商标词

通过已存在的资质信息进行品牌词的提交。

```
POST https://openapi.baidu.com/rest/2.0/smartapp/brand/word/submitwithcertificationid
```

**公共请求参数**:

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | 是       | 授权小程序的接口调用凭据 |

**请求参数**:

| 参数名           | 类型   | 是否必须 | 描述            |
| ---------------- | ------ | -------- | --------------- |
| word             | string | 是       | 商标词          |
| certification_id | long   | 是       | 已上传的资质 id |

**公共响应参数**

| 参数  | 类型   | 描述     | 示例值   |
| ----- | ------ | -------- | -------- |
| errno | int    | 状态码   | 40001    |
| msg   | string | 状态描述 | 参数错误 |
| data  | object | 响应参数 | --       |

**请求实例**

```json
curl -X POST 'https://openapi.baidu.com/rest/2.0/smartapp/brand/word/submitwithcertificationid?access_token=45.d5399ff94657c24e05541e9083cb6a5b.3600.1582805648.XK9_OHvhaMiG9JYKYV3hqQ9fNQ8e-qsN6gz8WG1fqJ8ZR5Q&word=word&certification_id=1'
```

**响应示例**:

```json
{
    "errno":0,
    "msg":"success"
}   
```

### 别名、简称提交

提交小程序别名、简称，百度搜索引擎将通过该别名、简称召回小程序。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/alias/name/submit?access_token=ACCESS_TOKEN
```

> 资质图片需要通过图片上传接口上传返回的 url
**参数说明:**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 授权小程序的接口调用凭据 |
| word         | string | true     | 品牌别名                         |

**返回值示例:**

```json
{
    "errno":0,
    "errMsg":"success"
}
```


**错误码表：**

| 错误码 | 错误描述                       |
| ------ | ------------------------------ |
| 100002 | 不能包含字符,                  |
| 100003 | 品牌词长度超限                 |
| 100004 | 已经过申请该品牌词             |
| 100006 | 该小程序不满足提交商标词的条件 |
| 100007 | 提交数量超限                   |
| 100008 | 提交失败                       |
| 100009 | 正在审核中，请勿重复提交       |



### 官方词提交

提交小程序官方词，百度搜索引擎将在该官方词召回的小程序单卡上标识“官方”字样。

注：需品牌词完成审核后，才可将该品牌词继续提交为官方词。

**请求路径:**

```
POST https://openapi.baidu.com/rest/2.0/smartapp/official/mark/submit?access_token=ACCESS_TOKEN
```

**参数说明:**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 授权小程序的接口调用凭据 |
| word         | string | true     | 官方标词                         |

**返回值示例:**

```json
{
    "errno":0,
    "errMsg":"success"
}
```


**错误码表：**

| 错误码 | 错误描述                       |
| ------ | ------------------------------ |
| 100002 | 不能包含字符,                  |
| 100003 | 品牌词长度超限                 |
| 100004 | 已经过申请该品牌词             |
| 100006 | 该小程序不满足提交商标词的条件 |
| 100007 | 提交数量超限                   |
| 100008 | 提交失败                       |
| 100009 | 正在审核中，请勿重复提交       |




### 品牌词、官方词审核状态查询

查询品牌词（商标词、别名、简称）、官方词的审核状态。

**请求路径:**

```
GET https://openapi.baidu.com/rest/2.0/smartapp/brand/word/list?access_token=ACCESS_TOKEN
```

> 资质图片需要通过图片上传接口上传返回的 url
**参数说明:**

| 参数名       | 类型   | 是否必须 | 描述                             |
| ------------ | ------ | -------- | -------------------------------- |
| access_token | string | true     | 授权小程序的接口调用凭据 |
| word         | string | true     | 官方标词                         |


**返回值说明：**

| 参数名                          | 类型   | 描述                                                         |
| ------------------------------- | ------ | ------------------------------------------------------------ |
| word                            | string | 品牌词                                                       |
| type                            | int    | 词类型 1-官方词 2-品牌词 3-别名                              |
| status                          | int    | 审核状态 2-申请成功  0/6-审核中 4-审核拒绝                   |
| reason                          | string | 审核失败原因                                                 |
| certification_id                | string | 注册号                                                       |
| certification_name              | string | 注册名                                                       |
| certification_pic               | string | 注册名                                                       |
| relation_pic                    | object | 关系证明资质                                                 |
| relation_pic.certification_type | int    | 关系证明类型 <br/>1-商标注册方营业执照<br/>2-说明函<br/>3-出资/控股证明<br/>4-法人身份证明<br/>5-双方法人身份证明<br/>6-双方法人关系证明<br/>7-双方身份证明<br/>8-双方关系证明<br>9-商标证<br/>10-授权说明函公证书 |
| relation_pic.pic_address    | string | 图片地址 |
| create_time    | string  | 提交时间 |


**返回值示例:**

```json
{
    "errno": 0,
    "msg": "success",
    "data": [{
            "word": "别名词",
            "type": 3,
            "status": 0,
            "reason": "",
            "create_time": "2019/10/31 19:44:10"
        },
        {
            "word": "官方标词",
            "type": 1,
            "status": 0,
            "reason": "",
            "create_time": "2019/10/31 20:37:57"
        },
        {
            "word": "品牌词",
            "type": 2,
            "status": 0,
            "reason": "",
            "certification_id": "110108002734659",
            "certification_name": "北京百度网讯科技有限公司",
            "certification_pic": "https://b.bdstatic.com/searchbox/mappconsole/image/20180913/1536820255990771.png",
            "relation_pic": [{
                    "certification_type": 1,
                    "pic_address": "https://b.bdstatic.com/searchbox/mappconsole/image/20180913/1536820255990771.png"
                },
                {
                    "certification_type": 2,
                    "pic_address": "https://b.bdstatic.com/searchbox/mappconsole/image/20180913/1536820255990771.png"
                }
            ],
            "create_time": "2019/10/31 20:37:57"
        }
    ]
}
```

**错误码表：**

| 错误码 | 错误描述                       |
| ------ | ------------------------------ |
| 100006 | 该小程序不满足提交商标词的条件 |



### 品牌词、官方词审核状态推送

> 审核完成后，百度将推送小程序品牌词（商标词、别名、简称）、官方词审核结果至第三方的消息与事件接收URL。
* 审核通过时，接收到的推送数据示例如下：

```json
{
    "appId": 小程序appid,
    "tpAppId": 第三方平台appid,
    "word":"word",
    "type":1,
    "eventTime": "2019-01-14 12:45:10",
    "event": "BRAND_WORD_AUDIT_SUCCESS"
}
```

* 审核不通过时，接收到的推送数据示例如下：

```json
{
    "appId": 小程序appid,
    "tpAppId": 第三方平台appid,
    "word":"word",
    "type":1,
    "eventTime": "2019-01-14 12:45:10",
    "event": "BRAND_WORD_AUDIT_FAIL",
    "reason": "名称过长（名称控制在50个字以内)"
}
```

| 参数名    | 类型   | 描述                                                         |
| --------- | ------ | ------------------------------------------------------------ |
| appId     | int    | 小程序appid                                                  |
| tpAppId   | int    | 第三方平台id                                                 |
| eventTime | string | 事件发生时间                                                 |
| word      | int    | 品牌词                                                       |
| type      | string | 词类型 1-官方词 2-品牌词 3-别名                              |
| event     | string | BRAND\_WORD\_AUDIT\_SUCCESS:品牌词审核成功 BRAND\_WORD\_AUDIT\_FAIL: 品牌词审核失败 |