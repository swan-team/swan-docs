---
title: 基本信息设置
header: develop
nav: third
sidebar: info
---

## 获取小程序全类目列表

接口说明:
```
GET https://openapi.baidu.com/rest/2.0/smartapp/app/category/list
```
请求参数：

|参数名	|类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭证/第三方调用凭证|
|category_type|	int	|是|1.个人类型类目 2.企业类型类目 为2时可以查出全部类目|
返回值示例:
```json
{
    "errno": 0,
    "msg": "success",
    "data": [
      {
        "id": 1,
        "category_name": "快递业与邮政",
        "category_type": 2,
        "sub_items": {
            "2": {
                "id": "2",
                "category_name": "快递",
                "category_type": 2,
                "need_quali": 1,
                "category_quali": "{\"desc\":\"请上传《快递业务经营许可证》\",\"list\":[[{\"id\":1,\"must\":1,\"name\":\"快递业务经营许可证\",\"desc\":\"\"}]]}"
            },
            "3": {
                "id": "3",
                "category_name": "邮政",
                "category_type": 2,
                "need_quali": "0",
                "category_quali": ""
             },
            ...
        } ,
        ...
     ]
}
```
返回值说明:

|参数名	|类型|描述|
|---|---|---|
|id| int| 类目id|
|category_name|string|父类目名称|
|category_type|string|父类目类型 1.个人服务 2.企业服务 主体为企业类型所有类目均可设置，主体为个人类型时只能设置个人服务
|sub_items|object|子类目 key为类目id value为类目详情|
|sub_items.id|int|子类目id|
|sub_items.category_name|int|子类目名称|
|sub_items.category_type|int|子类目类型 规则同父类目类型|
|sub_items.need_quali|int|类目是否需资质 1：需要 0：不需要|
|sub_items.category_quali|string|类目 资质要求|
|category_quali.desc|string|资质描述|
|category_quali.list|array|资质项要求 数组中包含多个值时 为或的关系 多选一即可|
|category_quali.list.id|int|资质项id|
|category_quali.list.must|int|资质项是否必须 1:必须 0:非必须|
|category_quali.list.name|string|资质项名称|
|category_quali.list.desc|string|资质项描述|
## 修改小程序类目

现在只支持类目的覆盖修改，主体下类目资质已经审核通过的不会再次审核。资质图片需要使用<a href="https://smartprogram.baidu.com/docs/develop/third/upload/">图片上传接口</a>的返回值

接口说明:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/category/update
```
请求参数：

|参数名	|类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|categorys|	json	|是	|类目类别|
categorys示例：
```json
[{
    "sub_category_id": 197,
    "qualis": [{
        "id": 1, 
        "addr": "https://b.bdstatic.com/searchbox/mappconsole/image/20180903/1535970481267095.jpg"
    }]
}, {
    "sub_category_id": 6
}]
```

返回值说明:

|参数名	|类型|描述|
|---|---|---|
|sub_category_id| int| 获取小程序全类目列表接口获取的的子类目id|
|qualis|array|资质|
|qualis.id|int|资质项id|
|qualis.addr|int|资质项图片|

响应数据:
```json
{
    "errno": 0,
    "msg": "success"
}
```

## 修改小程序icon

修改小程序icon会送审核，审核结果的推送见<a href="http://smartprogram.baidu.com/docs/develop/third/info/#基本信息审核通知">基本信息审核结果推送。</a>

接口说明:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/modifyheadimage
```
请求参数：

|参数名	|类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|image_url|	string	|是	|小程序icon地址，可以通过<a href="https://smartprogram.baidu.com/docs/develop/third/upload/">图片上传接口</a>获取icon的url。|
响应数据:
```json
{
    "errno": 0,
    "msg": "success"
}
```
## 修改小程序功能介绍

修改小程序功能介绍会送审核，审核结果的推送见<a href="http://smartprogram.baidu.com/docs/develop/third/info/#基本信息审核通知">基本信息审核结果推送。</a>

接口说明:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/modifysignature
```
请求参数：

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|signature|	string|	是|	小程序的功能介绍（简介）|
响应数据:
```json
{
    "errno": 0,
    "msg": "success"
}
```
## 暂停服务

暂停服务后，用户将不可以正常访问线上小程序版本小程序

接口说明:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/pause
```
请求参数：

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
响应数据:
```json
{
    "errno": 0,
    "msg": "success"
}
```
## 开启服务

开启服务，可将暂定服务的小程序恢复正常

接口说明:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/resume
```
请求参数：

|参数名	|类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
响应数据:
```json
{
    "errno": 0,
    "msg": "success"
}
```
## 二维码

支持自定义路径、图片大小

**接口说明**:
```
GET https://openapi.baidu.com/rest/2.0/smartapp/app/qrcode
```
请求参数：

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access\_token|string | 是 | 授权小程序的接口调用凭据
path |string | 否 | 自定义打开路径
package\_id |string | 否 | 可指定代码包id(只支持审核、开发、线上版本)，不传默认线上版本。
width |int | 否 | 默认200px，最大1280px，最小200px

**正确情况下返回图像的字节流，响应 header 中包含:**

```
HTTP/1.1 200 OK

Content-Type: image/png
```

**错误情况下返回**

字段名   | 类型 | 描述
------ | -----| ----
errno | int | 错误码
msg | string | 错误描述信息，用来帮助理解和解决发生的错误

##### 错误码表
错误码 | 错误描述 |
----- |-----
470018| 二维码 width 字段超过指定范围
470019| 二维码 package_id 非法，只支持审核，开发，线上版本的 package
470020| 此小程序没有线上版本的包，需要指定 package_id
40001 | 请求参数内容或格式非法
47002 | 获取二维码失败

## 修改小程序名称

修改小程序名称会送审核，审核结果的推送见<a href="http://smartprogram.baidu.com/docs/develop/third/info/#基本信息审核通知">基本信息审核结果推送。</a>

接口说明:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/setnickname
```
请求参数：

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|nick_name|	string|	是|	小程序名字|
|app_name_material| string | 否 | 如果小程序名称包含品牌词，需要上传品牌资质证明。要求图片链接来自于<a href="https://smartprogram.baidu.com/docs/develop/third/upload/">图片上传接口</a>返回的url，多个图片链接以逗号 , 分隔 |

响应数据:
```json
{
    "errno": 0,
    "msg": "success"
}
```

## 设置最低基础库版本

若用户使用的基础库版本低于设置的最低版本时，用户本地版本将不更新

**接口说明**：
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/setsupportversion?access_token=ACCESS_TOKEN
```
**参数说明**:

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
|access\_token|string | 是 | 授权小程序的接口调用凭据|
|version |string | 是 | 最低基础库版本|

**返回值示例**:

```
{
  "errno": 0,
  "msg": "success"
}
```

**错误码说明**：

|错误码 | 错误描述 | 
|----- |-----|
|470021| 版本输入错误|

## 查询当前设置的最低基础库版本及各版本列表

**接口说明**：

```
GET https://openapi.baidu.com/rest/2.0/smartapp/app/getsupportversion?access_token=ACCESS_TOKEN
```
**参数说明**:

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
|access\_token|string | 是 | 授权小程序的接口调用凭据|

**返回值示例**:

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "now_version": "2.5.15",
        "items": [
            {
                "version": "1.10.15"
            },
            {
                "version": "1.10.17"
            },
            {
                "version": "1.10.18"
            },
            {
                "version": "1.10.20"
            },
            {
                "version": "1.10.21"
            }
            ......
        ]
    }
}
```
**返回值说明**:

|字段名  | 类型   | 描述|
|------ | ----- | ----|
|now\_version | string | 当前版本|
|items | object | 版本号列表|
|version | string | 版本号|


## 基本信息审核通知

当小程序基本信息有审核结果后，第三方平台将可以通过开放平台上填写的回调地址，获得审核结果通知。

审核通过时，接收到的推送数据示例如下：

```
{
    "appId": 小程序appid,
    "tpAppId": 第三方平台appid,
    "eventTime": "2019-01-14 12:45:10",
    "event": "APP_NAME_AUDIT_PASS"
}
```

审核不通过时，接收到的推送数据示例如下：

```
{
    "appId": 小程序appid,
    "tpAppId": 第三方平台appid,
    "eventTime": "2019-01-14 12:45:10",
    "event": "APP_NAME_AUDIT_FAIL",
    "reason": "名称过长（名称控制在10个字以内）。"
}
```


#### 参数说明

|参数名 | 类型 | 描述|
|----- |-----|  -----|
|appId |long | 小程序appid|
|tpAppId | long | 第三方平台id|
|eventTime |string | 事件发生时间|
|event |string | APP\_NAME\_AUDIT\_PASS:小程序名称审核成功<br>APP\_NAME\_AUDIT\_FAIL:小程序名称审核失败 <br>APP\_ICON\_AUDIT\_PASS:小程序头像审核成功 <br>APP\_ICON\_AUDIT\_FAIL:小程序头像审核失败<br>APP\_DESC\_AUDIT\_PASS:小程序描述审核成功 <br>APP\_DESC\_AUDIT\_FAIL:小程序描述审核失败<br>APP_CATEGORY_AUDIT_PASS:小程序行业类目审核成功<br>APP_CATEGORY_AUDIT_FAIL:小程序行业类目审核失败|


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

