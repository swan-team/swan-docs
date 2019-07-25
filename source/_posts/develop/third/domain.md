---
title: 设置第三方服务/业务域名 
header: develop
nav: third
sidebar: domain
---

## 设置第三方平台服务器域名

### 接口说明：设置第三方平台服务域名

> 提示：为授权的小程序配置域名时支持配置子域名，例如第三方登记的服务器域名如为baidu.com，则可以直接将baidu.com及其子域名（如xxx.baidu.com）也配置到授权的小程序中。

```
POST https://openapi.baidu.com/rest/2.0/smartapp/tp/modifydomain
```

### 请求参数:
参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token | string | 是 | 第三方平台调用凭证
action | string | 否 | add添加, delete删除, set覆盖, get获取。当参数是get时不需要填四个域名字段
request_domain | string | 否 | request合法域名，多个时用,分割，当action参数是get时不需要此字段
socket_domain | string | 否 | socket合法域名，多个时用,分割，当action参数是get时不需要此字段
download_domain | string | 否 | download合法域名，多个时用,分割，当action参数是get时不需要此字段
upload_domain | string | 否 | upload合法域名，多个时用,分割，当action参数是get时不需要此字段
### 响应数据: 
action=get

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

action=delete | set | add

```json
{
    "errno":0,
    "msg":"success"
}
```
### 错误码说明：

参数名 | 类型 
----- |-----
470013 | 至少传递一个要被操作的服务域名类型
470014 | 域名格式非法，请检查格式，协议目前只支持http:// https:// wss://
470015 | 被操作的域名不能为空
50040  | 删除的域名在第三方平台中没有设置过

## 设置第三方平台业务域名

### 接口说明：设置第三方平台服务域名，同时检验新增域名是否可控。需要将校验文件放置到域名根目录下。

> 提示：为授权的小程序配置域名时支持配置子域名，例如第三方登记的业务域名如为baidu.com，则可以直接将baidu.com及其子域名（如xxx.baidu.com）也配置到授权的小程序中。

```
POST https://openapi.baidu.com/rest/2.0/smartapp/tp/modifywebviewdomain
```

### 请求参数:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token | string | 是 | 第三方平台调用凭证
action | string | 否 | add添加, delete删除, set覆盖, get获取。当参数是get时不需要填四个域名字段
web\_view\_domain | string | 否 | 小程序业务域名，多个时用,分割，当action参数是get时不需要此字段

### 响应数据: 

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

参数名 | 类型 
----- |-----
470013 | 至少传递一个要被操作的服务域名类型
470014 | 域名格式非法，请检查格式，协议目前只支持http:// https:// wss://
470015 | 被操作的域名不能为空
50040  | 删除的域名在第三方平台中没有设置过
50041  | 请在业务域名根目录下添加检验文件，以证明域名可控

## 下载域名检验文件

### 接口说明：下载域名检验文件，用于第三方平台设置业务域名时使用。

```
GET https://openapi.baidu.com/rest/2.0/smartapp/tp/download/domaincer
```

### 请求参数:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token | string | 是 | 第三方平台调用凭证

正确情况下返回文件的字节流，响应 header 中包含:

```
HTTP/1.1 200 OK

Content-Disposition: attachment; filename=bd_mapp_domaincer.txt

Content-Type: application/octet-stream;charset=UTF-8

Content-Length: 32

```