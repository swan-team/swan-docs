---
title: 修改服务器地址
header: develop
nav: third
sidebar: address
---

## 设置小程序服务器域名

授权给第三方的小程序，其服务器域名只可以为第三方的服务器，当小程序通过第三方发布代码送审后，小程序原先自己配置的服务器域名将被删除，只保留第三方平台的域名，所以第三方平台在代替小程序送审之前，需要调用接口为小程序添加服务器域名。

> 1. 需要先将域名登记到第三方平台的小程序服务器域名中，才可以调用接口进行配置。
> 2. 为授权的小程序配置域名时支持配置子域名，例如第三方登记的服务器域名如为baidu.com，则可以直接将baidu.com及其子域名（如xxx.baidu.com）也配置到授权的小程序中。

**接口调用请求说明**：
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/modifydomain
```

**请求参数**:

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
|access_token | string | 是 | 授权小程序的接口调用凭据
|action | string | 否 | add添加, delete删除, set覆盖, get获取。当参数是get时不需要填四个域名字段，如果没有action字段参数，则默认将开放平台第三方登记的小程序服务器域名全部添加到授权的小程序中。|
|request_domain | string | 否 | request合法域名，多个时用,分割，当action参数是get时不需要此字段。|
|socket_domain | string | 否 | socket合法域名，多个时用,分割，当action参数是get时不需要此字段。|
|download_domain | string | 否 | download合法域名，多个时用,分割，当action参数是get时不需要此字段。|
|upload_domain | string | 否 | upload合法域名，多个时用,分割，当action参数是get时不需要此字段。|
**响应数据**: action=get
**示例**：
```
{
    "errno":0,
    "msg":"success",
    "data":
    {
        "request_domain":"https://www.baidu.com,https://www.baidu.com",
        "socket_domain":"wss://www.baidu.com,wss://www.baidu.com",
        "download_domain":"wss://www.baidu.com,wss://www.baidu.com",
        "upload_domain":"wss://www.baidu.com,wss://www.baidu.com"
    }
}
```
**响应数据**: action=delete | set | add
**示例**：
```
{
    "errno":0,
    "msg":"success"
}
```
**错误码说明**：

|参数名 | 类型 |
|----- |-----|
|470011 | 修改服务器域名超过限制次数。 |
|470013 | 至少传递一个要被操作的服务域名类型。|
|470014 | 域名格式非法，请检查格式，协议目前只支持http:// https:// wss://。|
|470015 | 被操作的域名不能为空。|
|470016 | 请求保存的域名不是第三方平台中已设置的小程序域名或子域名。|
|470017 | 删除的域名在小程序中没有设置过。|

## 设置小程序业务域名

授权给第三方的小程序，其业务域名只可以为第三方的服务器，当小程序通过第三方发布代码送审后，小程序原先自己配置的业务域名将被删除，只保留第三方平台的域名，所以第三方平台在代替小程序送审之前，需要调用接口为小程序添加业务域名。
> 1. 需要先将域名登记到第三方平台的小程序业务域名中，才可以调用接口进行配置。
> 2. 为授权的小程序配置域名时支持配置子域名，例如第三方登记的业务域名如为baidu.com，则可以直接将baidu.com及其子域名（如xxx.baidu.com）也配置到授权的小程序中。

**接口调用请求说明**：
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/modifywebviewdomain
```

**请求参数**:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token | string | 是 | 授权小程序的接口调用凭据
action | string | 否 | add添加, delete删除, set覆盖, get获取。当参数是get时不需要填四个域名字段，如果没有action字段参数，则默认将开放平台第三方登记的小程序业务域名全部添加到授权的小程序中。
web_view_domain | string | 否 | 小程序业务域名，多个时用,分割，当action参数是get时不需要此字段
**响应数据**: action=get
**示例**：
```
{
    "errno":0,
    "msg":"success",
    "data":"https://www.baidu.com,https://www.baidu.com"
}
```
**响应数据**: action=delete | set | add
**示例**：
```
{
    "errno":0,
    "msg":"success"
}

```
**错误码说明**：

参数名 | 类型 
----- |-----
470012 | 修改业务域名超过限制次数 
470013 | 至少传递一个要被操作的服务域名类型
470014 | 域名格式非法，请检查格式，协议目前只支持http:// https:// wss://
470015 | 被操作的域名不能为空
470016 | 请求保存的域名不是第三方平台中已设置的小程序域名或子域名
470017 | 删除的域名在小程序中没有设置过
