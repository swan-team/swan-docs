---
title: 基本信息设置
header: develop
nav: third
sidebar: info
---
使用的access_token为授权小程序的接口调用凭据，获取方式请参考：<a href="http://smartprogram.baidu.com/docs/develop/third/pro/"> 授权流程</a>中“6、使用授权码换小程序的接口调用凭据和授权信息”。

## 获取小程序类目

接口说明:
```
GET https://openapi.baidu.com/rest/2.0/smartapp/app/category/list
```
请求参数：

|参数名	|类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据。|
|category_type|	int	|是|获取所有类目，固定值为：2 。|
返回值示例:
```js
{
    "data": [
      {
        id: "1",
        category_name: "快递业与邮政",
        category_type: "2",
        subItems: {
            2: {
                id: "2",
                category_name: "快递",
                category_type: "2",
                need_quali: "1",
                category_quali: "{"desc":"请上传《快递业务经营许可证》","list":[[{"id":1,"must":1,"name":"快递业务经营许可证","desc":""}]]}"
            },
            3: {
                id: "3",
                category_name: "邮政",
                category_type: "2",
                need_quali: "0",
                category_quali: ""
             },
            ...
        } ,
        ...
     ],
    "errno": 0,
    "msg": "success"
}
```
## 修改小程序类目

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
```js
[{
    "sub_category_id": 197, //类目id
    "qualis": [{
        "id": 1, //资质id
        "addr": "https://b.bdstatic.com/searchbox/mappconsole/image/20180903/1535970481267095.jpg" //认证内容
    }]
}, {
    "sub_category_id": 2,
    "qualis": [{
        "id": 1,
        "addr": "https://b.bdstatic.com/searchbox/mappconsole/image/20180903/1535970498145990.jpg"
    }]
}]
```
响应数据:
```json
{
    "errno": 0,
    "msg": "success"
}
```
## 修改小程序icon

接口说明:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/modifyheadimage
```
请求参数：

|参数名	|类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|image_url|	string	|是	|小程序icon地址，可以通过图片上传接口获取 icon 的 url。|
响应数据:
```js
{
    "errno": 0,
    "msg": "success"
}
```
## 修改功能介绍

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
```js
{
    "errno": 0,
    "msg": "success"
}
```
## 暂停服务

接口说明:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/pause
```
请求参数：

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
响应数据:
```js
{
    "errno": 0,
    "msg": "success"
}
```
## 开启服务

接口说明:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/resume
```
请求参数：

|参数名	|类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
响应数据:
```js
{
    "errno": 0,
    "msg": "success"
}
```
## 二维码

### 获取二维码

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

## 小程序名称设置及改名

接口说明:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/app/setnickname
```
请求参数：

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|nick_name|	string|	是|	小程序名字|
响应数据:
```js
{
    "errno": 0,
    "msg": "success"
}
```

## 设置最低基础库版本

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