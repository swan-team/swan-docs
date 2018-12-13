---
title: 启动流程与能力
header: develop
nav: third
sidebar: module
---
使用的access_token为第三方平台自己的接口调用凭据，，获取方式请参考：<a href="http://smartprogram.baidu.com/docs/develop/third/pro/"> 授权流程</a>中“6、使用授权码换小程序的接口调用凭据和授权信息”。

## 模板列表

获取某第三方平台下的模板列表信息

接口调用请求说明
```
GET https://openapi.baidu.com/rest/2.0/smartapp/template/gettemplatelist?access_token=ACCESS_TOKEN&page=1&page_size=10
```
参数说明

|参数名	|类型|	是否必须|	描述|
|---|---|---|---|
|page|	int|	否|	页码(默认1)|
|page_size|	int|	否|	条数(默认10)|
|access_token|	string|	是|	通过ticket换取的第三方平台自己的access_token|
返回值说明

|字段名	|类型|	描述|
|---|---|---|
|template_id|	long|	模板id|
|user_version|	string|	模板版本信息|
|user_desc|	String	|模板描述名称|
|create_time|	String|	创建时间|
错误情况下:

|字段名|	类型|	描述|
|---|---|---|
|errno|	int|	错误码|
|msg|	string|	错误描述信息，用来帮助理解和解决发生的错误|
返回值示例
```js
{
  "errno": 0,
  "msg": "success",
  "data": {
    "count": 53,
    "list": [
      {
        "user_version": "2.2.2.2",
        "user_desc": "",
        "create_time": "1531812276",
        "template_id": 7
      },
      {
        "user_version": "2.2.2.2",
        "user_desc": "",
        "create_time": "1531812305",
        "template_id": 8
      }
    ]
  }
}
```
## 删除模板

删除当前第三方平台下的模板信息

接口调用请求说明
```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/deltemplate?access_token=ACCESS_TOKEN&template_id=1
```
参数说明

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|template_id|	long|	是|	模板id|
|access_token|	string|	是|	第三方平台自己的接口调用凭据|
返回值说明

|字段名|	类型|	描述|
|---|---|---|
|result|	int|	1为成功|
错误情况下:

|字段名|	类型|	描述|
|---|---|---|
|errno|	string|	错误码|
|msg|	string|	错误描述信息，用来帮助理解和解决发生的错误|
返回值示例
```js
{
  "errno": 0,
  "msg": "success",
  "data": {
     "result": 1
  }
}
```
## 模板草稿列表

以获取某第三方平台下的模板草稿信息

接口调用请求说明
```
GET https://openapi.baidu.com/rest/2.0/smartapp/template/gettemplatedraftlist?access_token=ACCESS_TOKEN&page=1&page_size=10
```
参数说明

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|page|	int|	否|	页码(默认1)|
|page_size|	int	|否他|	条数(默认10)|
|access_token|	string|	是	|第三方平台自己的接口调用凭据|
返回值说明

|字段名|	类型|	描述|
|---|---|---|
|draft_id|	long|	草稿id|
|user_version|	string|	模板版本信息|
|user_desc|	String|	模板描述信息|
|create_time|	String|	创建时间|
错误情况下:

|字段名|	类型|	描述|
|---|---|---|
|errno	|string|	错误码|
|msg|	string|	错误描述信息，用来帮助理解和解决发生的错误|
返回值示例
```js
{
  "errno": 0,
  "msg": "success",
  "data": {
    "count": 53,
    "list": [
      {
        "user_version": "2.2.2.2",
        "user_desc": "",
        "create_time": "1531812276",
        "draft_id": 7
      },
      {
        "user_version": "2.2.2.2",
        "user_desc": "",
        "create_time": "1531812305",
        "draft_id": 8
      }
    ]
  }
}
```
## 添加草稿至模板

删除当前第三方平台下的模板信息

接口调用请求说明
```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/addtotemplate?access_token=ACCESS_TOKEN&draft_id=1
```
参数说明

|参数名|	类型 |	是否必须	|描述|
|----- |-----| ------| -----|
|draft_id	|long|	是|	模板id|
|access_token|	string|	是|	第三方平台自己的接口调用凭据|
|user_desc|	string|	是|	自定义模板名称，30字以内|
返回值说明

|字段名	|类型|	描述|
|---|---|---|
|template_id|	long|	返回模板id|
错误情况下:

|字段名	|类型|	描述|
|---|---|---|
|errno|	string|	错误码|
|msg|	string|	错误描述信息，用来帮助理解和解决发生的错误|
返回值示例
```js
{
  "errno": 0,
  "msg": "success",
  "data": {
     "template_id": 1
  }
}
```