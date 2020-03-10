---
title: 设置第三方服务/业务域名 
header: third
nav: third
sidebar: domain
---

## 设置第三方平台服务器域名 
> 为授权的小程序配置域名时支持配置子域名，例如第三方登记的服务器域名如为baidu.com，则可以直接将baidu.com及其子域名（如xxx.baidu.com）也配置到授权的小程序中。 
``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/tp/modifydomain 
```
**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 第三方平台的接口调用凭据 | --     |
**请求参数** 

| 参数            | 类型   | 是否必填 | 描述                                                         | 示例值 |
| --------------- | ------ | -------- | ------------------------------------------------------------ | ------ |
| action          | string | 否       | add添加, delete删除, set覆盖, get获取。当参数是get时不需要填四个域名字段，如果没有action字段参数，则默认将开放平台第三方登记的小程序业务域名全部添加到授权的小程序中。 | --     |
| download_domain | string | 否       | download合法域名，多个时用,分割，当action参数是get时不需要此字段 | --     |
| request_domain  | string | 否       | request合法域名，多个时用,分割，当action参数是get时不需要此字段。 | --     |
| socket_domain   | string | 否       | socket合法域名，多个时用,分割，当action参数是get时不需要此字段。 | --     |
| upload_domain   | string | 否       | upload合法域名，多个时用,分割，当action参数是get时不需要此字段。 | --     |
**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |
**响应参数** 

| 参数            | 类型          | 描述             | 示例值 |
| --------------- | ------------- | ---------------- | ------ |
| download_domain | array[string] | download合法域名 | --     |
| request_domain  | array[string] | request合法域名  | --     |
| socket_domain   | array[string] | socket合法域名   | --     |
| upload_domain   | array[string] | upload合法域名   | --     |

**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/tp/modifydomain?access_token=42.6fe3b83637bcf969ecbd076390aff5be.3600
  .1574865809.HPiKUxSxNQ-3Fy3JR1wLsECD15bpJHQ-1W3JTSQkkj5RZ9lgfC&download_domain=https://www.baidu.com&request_domain=https://www.baidu.com&socket_domain=https://www.baidu.com&upload_domain=https://www.baidu.com'
```

**响应示例** 

> action=delete | set | add

```json
{
    "errno":0,
    "msg":"success"
}
```

> action=get

```json
{
    "errno":0,
    "msg":"success",
    "data":
    {
        "request_domain":[
        	 "https://www.baidu.com",
             "https://www.baidu.com"
        ],
        "socket_domain":[
        	"wss://www.baidu.com",
        	"wss://www.baidu.com"
        ],
        "download_domain":[
	        "wss://www.baidu.com",
   		     "wss://www.baidu.com"
        ],
        "upload_domain":[
        	"wss://www.baidu.com",
        	"wss://www.baidu.com"
        ]
    }
}
```
**错误码说明**

|参数名 | 类型 |
|----- |-----|
|470013 | 至少传递一个要被操作的服务域名类型|
|470014 | 域名格式非法，请检查格式，协议目前只支持http:// https:// wss://|
|470015 | 被操作的域名不能为空|
|50040  | 删除的域名在第三方平台中没有设置过|

## 设置第三方平台业务域名 

> 设置第三方平台服务域名，同时检验新增域名是否可控。需要将校验文件放置到域名根目录下。为授权的小程序配置域名时支持配置子域名，例如第三方登记的业务域名如为baidu.com，则可以直接将baidu.com及其子域名（如xxx.baidu.com）也配置到授权的小程序中 

``` 
 POST https://openapi.baidu.com/rest/2.0/smartapp/tp/modifywebviewdomain 
```

**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 第三方平台的接口调用凭据 | --     |

**请求参数** 

| 参数            | 类型   | 是否必填 | 描述                                                         | 示例值 |
| --------------- | ------ | -------- | ------------------------------------------------------------ | ------ |
| action          | string | 否       | add添加, delete删除, set覆盖, get获取。当参数是get时不需要填四个域名字段，如果没有action字段参数，则默认将开放平台第三方登记的小程序业务域名全部添加到授权的小程序中。 | get    |
| web_view_domain | string | 否       | 小程序业务域名，多个时用,分割，当action参数是get时不需要此字段 | --     |

**公共响应参数** 

| 参数  | 类型          | 描述     | 示例值   |
| ----- | ------------- | -------- | -------- |
| errno | integer       | 状态码   | 40001    |
| msg   | string        | 状态描述 | 参数错误 |
| data  | array[string] | 响应参数 | --       |



**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/tp/modifywebviewdomain?access_token=42.6fe3b83637bcf969ecbd076390aff5be.3600.1574865809.HPiKUxSxNQ-3Fy3JR1wLsECD15bpJHQ-1W3JTSQkkj5RZ9lgfC' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'web_view_domain=http%3A%2F%2Fwww.baidu.com&action=get&bd_tp_app_id=1482626634&bd_app_id=1482626598&bdop_dev_user=2600268821'
```



**响应示例** 

action=get

```json
{
    "errno":0,
    "msg":"success",
    "data":[
	    "https://www.baidu.com",
	    "https://www.baidu.com"
    ]
}
```

action=delete | set | add

```json
{
    "errno":0,
    "msg":"success"
}

```
### 错误码说明：

|参数名 | 类型 |
|----- |-----|
|470013 | 至少传递一个要被操作的服务域名类型|
|470014 | 域名格式非法，请检查格式，协议目前只支持http:// https:// wss://|
|470015 | 被操作的域名不能为空|
|50040  | 删除的域名在第三方平台中没有设置过|
|50041  | 请在业务域名根目录下添加检验文件，以证明域名可控|

## 下载域名检验文件

 >接口说明：下载域名检验文件，用于第三方平台设置业务域名时使用。

```
GET https://openapi.baidu.com/rest/2.0/smartapp/tp/download/domaincer
```

**公共请求参数** 

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
|access_token | string | 是 | 第三方平台的接口调用凭据 |

**正确情况下返回文件的字节流，响应 header 中包含**

```http
HTTP/1.1 200 OK

Content-Disposition: attachment; filename=bd_mapp_domaincer.txt

Content-Type: application/octet-stream;charset=UTF-8

Content-Length: 32

```