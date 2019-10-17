---
title: 启动流程与能力
header: develop
nav: third
sidebar: apppage
---

## 小程序提包上线流程

![上线流程](../../../img/tp/8d86c204cc7d7940542cfb859.png "上线流程")

如上图所示，在开发者将小程序授权给第三方平台后，第三方代客户完成小程序提包上线需如下步骤：

### 第一步：提交代码包
第三方可通过模板提包或源代码提包两种方式，为授权小程序账号提交代码包

* 通过API实现模板提包可参考：[为授权的小程序帐号上传小程序代码API](https://smartprogram.baidu.com/docs/develop/third/apppage/#为授权的小程序帐号上传小程序代码)
* 使用开发者工具直接代提交源代码包可参考：[为授权的小程序帐号上传源代码包](https://smartprogram.baidu.com/docs/develop/third/develop/#二、定制开发)
* 查询代码包状态及详情可参考：[获取小程序包列表API](https://smartprogram.baidu.com/docs/develop/third/apppage/#获取小程序包列表)

### 第二步：提交代码审核
代码包提交成功后，可以为小程序提交代码审核

* 为代码包提交审核可参考：[为授权的小程序提交审核API](https://smartprogram.baidu.com/docs/develop/third/apppage/#为授权的小程序提交审核)
* 审核完成出结果后，将会推送审核结果消息至第三方平台：[代码审核状态推送](https://smartprogram.baidu.com/docs/develop/third/apppage/#代码审核状态推送)

**注意：提交代码审核前请确保小程序的基本信息已经全部审核通过，否则无法正常提交代码包审核**

### 第三步：提交发布上线
代码包审核通过后，可以提交小程序发布，实现小程序上线

* 为小程序提交发布可参考：[发布已通过审核的小程序API](https://smartprogram.baidu.com/docs/develop/third/apppage/#发布已通过审核的小程序)

**注意：提交小程序发布前，请确保开发者的主体真实性认证已通过，否则无法发布上线。**

真实性认证操作可参考：[主体真实性认证操作指南](https://smartprogram.baidu.com/docs/introduction/authenticity/)


## 为授权的小程序帐号上传小程序代码

接口调用请求说明：
```
POST https://openapi.baidu.com/rest/2.0/smartapp/package/upload?access_token=ACCESS_TOKEN
```
参数说明

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|template_id	|int	|是	|代码库中的代码模板ID，可以在第三方平台-模板管理-模板库 查看到模板ID|
|ext_json	|string|	是|	第三方自定义的配置|
|user_version	|string	|是|	代码版本号，开发者可自定义。|
|user_desc	|string|	是|	代码描述，开发者可自定义。|

返回值示例
```json
{
  "errno": 0,
  "msg": "success"
}
```
错误情况下:

|字段名|	类型|	描述|
|---|---|---|
|errno|	int	|错误码|
|msg|	string|	错误描述信息，用来帮助理解和解决发生的错误。|

ext_json需为json类型，格式示例如下 ：
```json
{
    "extEnable":true,
    "extAppid":"100000282",
    "directCommit":false,
    "ext":{
        "name":"helloword",
        "attr":{
            "host":"open.baidu.com",
            "users":[
                "user_1",
                "user_2"
            ]
        }
    },
    "extPages":{
        "pages/api/api":{
            "navigationBarTitleText":"小程序接口能力展示open"
        }
    },
    "window":{
        "backgroundTextStyle":"light",
        "navigationBarBackgroundColor":"#fff",
        "navigationBarTitleText":"Demo",
        "navigationBarTextStyle":"black"
    },
    "tabBar":{
        "list":[
            {
                "iconPath":"images/component_normal.png",
                "pagePath":"pages/index",
                "text":"首页open"
            },
            {
                "pagePath":"pages/component/component",
                "iconPath":"images/component_normal.png",
                "selectedIconPath":"images/component_selected.png",
                "text":"组件open"
            }
        ]
    },
    "networkTimeout":{
        "request":20000,
        "downloadFile":20000
    }
}
```
ext_json内容说明

|参数名|	类型	|是否必须	|描述|
|---|---|---|---|
|extEnable	    |boolean|是	|true：将ext_json中自定义格式和模板结合 false: 不使用ext_json自定义内容|
|extAppid	    |int |是	|小程序id|
|directCommit	|string|否|	是否直接送审|

**说明**
* 为了便于第三方平台使用同一个小程序模板为不同的小程序提供服务，第三方可以将自定义信息放置在ext_json中。

* 关于ext_json中的其他参数详情见：https://smartprogram.baidu.com/docs/develop/tutorial/process/

* 这个接口调用成功后会有一段延迟生效时间(3秒左右)，可以轮询获取 小程序包列表接口 获取上传状态。

## 为授权的小程序提交审核

```
POST https://openapi.baidu.com/rest/2.0/smartapp/package/submitaudit?access_token=ACCESS_TOKEN
```
参数说明

|参数名|	类型	|是否必须	|描述|
|---|---|---|---|
|access_token	|string	|是	|授权小程序的接口调用凭据|
|content	|string|	是	|送审描述|
|package_id	|string|	是|	代码包id|
|remark	|string|	是|	备注|
返回值示例
```json
{
  "errno": 0,
  "msg": "success"
}
```
错误情况如下:

|字段名|	类型	|描述|
|---|---|---|
|errno|	int	|错误码|
|msg	|string	|错误描述信息，用来帮助理解和解决发生的错误。|

## 发布已通过审核的小程序

```
POST https://openapi.baidu.com/rest/2.0/smartapp/package/release?access_token=ACCESS_TOKEN
```
参数说明

|参数名|	类型	|是否必须	|描述|
|---|---|---|---|
|access_token	|string	|是	|授权小程序的接口调用凭据|
|package_id	|string	|是	|代码包id|

返回值示例
```json
{
  "errno": 0,
  "msg": "success"
}
```
错误情况下:

|字段名	|类型	|描述|
|---|---|---|
|errno|	int	|错误码|
|msg	|string|	错误描述信息，用来帮助理解和解决发生的错误。|

## 小程序版本回滚

将线上版本的小程序回滚至上一个线上版本

```
POST https://openapi.baidu.com/rest/2.0/smartapp/package/rollback?access_token=ACCESS_TOKEN
```
参数说明

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|package_id	|string|	是	|当前线上代码包id|
返回值示例

```
{
  "errno": 0,
  "msg": "success"
}
```
错误情况下:

|字段名	|类型	|描述|
|---|---|---|
|errno	|int	|错误码|
|msg|	string	|错误描述信息，用来帮助理解和解决发生的错误。|
**说明**：
这个接口调用成功后会有一段延迟生效时间。

## 小程序审核撤回

```
POST https://openapi.baidu.com/rest/2.0/smartapp/package/withdraw?access_token=ACCESS_TOKEN
```
参数说明

|参数名|类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是	|授权小程序的接口调用凭据|
|package_id|	string|	是	|待撤回审核的代码包id|
返回值示例
```json
{
  "errno": 0,
  "msg": "success"
}
```
错误情况下:

|字段名	|类型|	描述|
|---|---|---|
|errno	|int	|错误码|
|msg|	string	|错误描述信息，用来帮助理解和解决发生的错误。|


## 获取小程序包列表

列表中一共会展示三种状态的小程序代码包，包括开发版本(已经上传成功/上传中)、审核版本(审核中/审核成功/审核成功)、线上版本。

```
GET https://openapi.baidu.com/rest/2.0/smartapp/package/get?access_token=ACCESS_TOKEN
```
参数说明

|参数名	|类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
返回值说明

|字段名|	类型|	描述|
|---|---|---|
|version|	string|	版本号|
|remark	|int	|备注|
|msg|	string|	审核信息|
|committer|	string|	提交人|
|status|	int|	状态|
|commit_time|	string|	提交时间|
|version_desc|	string|	版本描述|
|package_id	|string	|代码包id|
|rollback_version|	string|	上一个线上版本的版本号|
|upload_status|	int	|上传状态|
|upload_status_desc|	string|	上传状态描述|
status字段码表

|status	|含义|
|---|---|
|1	|线上版本|
|3	|开发版本|
|4|	审核中|
|5	|审核失败|
|6|	审核通过|
|8	|回滚中|
**说明**：
包上传需要一定的处理时间，处理期间upload_status，upload_status_desc字段会体现上传的状态。

|upload_status	|upload_status_desc|
|---|---|
|1	|上传中|
|3|	上传失败|
返回值示例
```json
{
  "errno": 0,
  "msg": "success",
  "data": [
    {
      "version": "1.2.6",
      "remark": "",
      "msg": "审核通过",
      "committer": "--",
      "status": 1,
      "commit_time": "2018/09/04 17:13:59",
      "version_desc": "desc",
      "package_id": 1,
      "rollback_version": "v1.2.5"
    },
    {
       "version": "1.2.7",
       "commit_time": "2018/09/06 15:32:38",
       "version_desc": "desc",
       "upload_status": 1,
       "upload_status_desc": "上传中"
    }
  ]
}
```
错误情况下:

|字段名|	类型|	描述|
|---|---|---|
|errno	|int	|错误码|
|msg	|string|	错误描述信息，用来帮助理解和解决发生的错误|

## 获取授权小程序包详情

```
GET https://openapi.baidu.com/rest/2.0/smartapp/package/getdetail?access_token=ACCESS_TOKEN&type=TYPE&package_id=PACKAGE_ID
```
参数说明

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|type|	int|	否|	小程序状态，不指定package_id的情况下默认是线上版本|
|package_id	|int|	否|	代码包id|
代码包状态码表

|type|	含义|
|---|---|
|1|	线上版本|
|3	|开发中|
|4	|审核中|
|5	|审核失败|
|6|	审核通过|
|8|	回滚中|
返回值说明

|字段名|	类型|	描述|
|---|---|---|
|version|	string|	版本号|
|remark|	int	|备注|
|msg	|string	|审核信息|
|committer|	string|	提交人|
|status|	int	|状态|
|commit_time|	string|	提交时间|
|version_desc	|string	|版本描述|
|package_id	|string	|代码包Id|
返回值示例
```json
{
  "errno": 0,
  "msg": "success",
  "data":  {
        "version": "d0.0.0.2",
        "remark": "",
        "msg": "",
        "committer": "--",
        "status": 4,
        "commit_time": "1970/01/19 02:19:13",
        "version_desc": "dddd123",
        "package_id": 201
      }
}
```
错误情况下:

|字段名|	类型|	描述|
|---|---|---|
|errno|	int	|错误码|
|msg|	string|	错误描述信息，用来帮助理解和解决发生的错误|

## 代码包审核状态推送

> 小程序审核结果推送到第三方的消息与事件接收URL。

* 审核通过时，接收到的推送数据示例如下：

```json
{
    "appId": 小程序appid,
    "tpAppId": 第三方平台appid,
    "eventTime": "2019-01-14 12:45:10",
    "event": "PACKAGE_AUDIT_PASS"
}
```

* 审核不通过时，接收到的推送数据示例如下：

```json
{
    "appId": 小程序appid,
    "tpAppId": 第三方平台appid,
    "eventTime": "2019-01-14 12:45:10",
    "event": "PACKAGE_AUDIT_FAIL",
    "reason": "名称过长（名称控制在10个字以内）。名称与实际打开后的名称不符。"
}
```


#### 参数说明

|参数名 | 类型 | 描述|
|----- |-----|  -----|
|appId |int | 小程序appid|
|tpAppId | int | 第三方平台id|
|eventTime |string | 事件发生时间|
|event |string | PACKAGE\_AUDIT\_PASS:代码包审核成功 PACKAGE\_AUDIT\_FAIL: 代码包审核失败|