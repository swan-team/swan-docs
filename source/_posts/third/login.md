---
title: 授权小程序登录
header: third
nav: third
sidebar: login
---


## 登录接口

> 第三方平台代替小程序实现登录功能请参考<a href="https://smartprogram.baidu.com/docs/develop/api/open/log_swan-login/#swan-login"> 小程序登录 </a> 。除了下述部分以外，其他接口的功能与小程序实现方式一致。

> code换取session_key

> 第三方平台开发者的服务器使用登录凭证 code 以及授权小程序 access_token 获取 session_key 和 openid。其中session_key 是对用户数据进行加密签名的密钥。

**接口说明**:

```
GET https://openapi.baidu.com/rest/2.0/oauth/getsessionkeybycode
```

**公共请求参数**

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
access\_token|string | 是 | 授权小程序的接口调用凭据 |

**请求参数**

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
|code | string | 是| 调用swan.login后获取的code|
|grant_type | string | 是| 授权类型，固定字符串："authorization_code"|

**响应数据**:

```
{
    openid: "l214zFqNrEuIEnp6m7Y01sw8yj",
    session_key: "981ce8b151c0599acf7ad1a673c6ff5e"
}
```
#### 错误情况下:

|字段名   | 类型 | 描述|
|------ | -----| ----|
|error | string | 错误码；关于错误码的详细信息请参考 https://developer.baidu.com/wiki/index.php?title=docs/oauth/error|
|error\_description | string | 错误描述信息，用来帮助理解和解决发生的错误|


## 获取unionid

> **unionid说明：**

>1.  一个开发者可以创建多个小程序， 开发者可以通过unionid实现跨小程序的用户区分。从用户角度看，每个用户在一个开发者所有的小程序下的unionid是唯一的。
>2. unionid 获取依赖用户登录授权，请妥善处理用户未授权场景。

**请求地址**:

```
GET https://openapi.baidu.com/rest/2.0/smartapp/unionId/get
```

**公共请求参数**：

| 参数名称     | 类型   | 是否必须 | 说明                                                         |
| ------------ | ------ | -------- | ------------------------------------------------------------ |
| access_token | string | true     | 授权小程序的接口调用凭据                                     |

**请求参数**

| 参数名称     | 类型   | 是否必须 | 说明                                                         |
| ------------ | ------ | -------- | ------------------------------------------------------------ |
| open_id      | string | true     | 用户openid, 需要经过用户登录授权过程获取 |

**公共响应参数**

| 参数名 | 类型   | 描述     |
| ------ | ------ | -------- |
| errno  | string | 状态码   |
| msg    | string | 状态信息 |
| data   | string | 文件链接 |

**响应参数：**

| 参数名   | 类型   | 描述            |
| -------- | ------ | --------------- |
| union_id | string | 对应的 union id |
**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/unionId/get?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC=,45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&open_id=HGdw1342d1fbHGe'
```
**响应示例**

```json
{
    "errno":0,
    "msg":"success",
    "data":{
        "union_id":"Srn8jbRVFTFMRdV2KTJfmSE"
    }
}
```


