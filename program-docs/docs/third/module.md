---
title: 模板列表
header: third
nav: third
sidebar: module
---

## 模板列表

> 获取某第三方平台下的模板列表信息。

```
GET https://openapi.baidu.com/rest/2.0/smartapp/template/gettemplatelist
```
**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 第三方平台Token | --     |

**请求参数** 

|参数名	|类型|	是否必须|	描述|
|---|---|---|---|
|page|	int|	否|	页码(默认1)|
|page_size|	int|	否|	条数(默认10)|
**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

**响应参数** 

| 参数  | 类型          | 描述     |
| ----- | ------------- | -------- |
| count | int           | 数据数量 |
| list  | array[object] | 模版列表 |

|参数	|类型|	描述|
|---|---|---|
|template_id|	long|	模板id|
|user_version|	string|	模板版本信息|
|user_desc|	string	|模板描述名称|
|create_time|	long|	创建时间|
|web_status | boolean  | 是否支持web化，开发者工具编译版本2.15.07以上传的模板支持web化。|

**请求示例** 

```shell
curl -X GET \
  'https://openapi.baidu.com/rest/2.0/smartapp/template/gettemplatelist?access_token=42.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC=,42.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&page=1&page_size=50'
```

**响应示例** 

```json
{
  "errno": 0,
  "msg": "success",
  "data": {
    "count": 53,
    "list": [
      {
        "user_version": "2.2.2.2",
        "user_desc": "",
        "create_time": 1531812276,
        "template_id": 7,
        "web_status":true
      },
      {
        "user_version": "2.2.2.2",
        "user_desc": "",
        "create_time": 1531812305,
        "template_id": 8,
        "web_status":false
      }
    ]
  }
}
```
## 删除模板

> 删除当前第三方平台下的模板

```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/deltemplate
```
**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 第三方平台Token | --     |

**请求参数** 

| 参数        | 类型   | 是否必填 | 描述   | 示例值 |
| ----------- | ------ | -------- | ------ | ------ |
| template_id | string | 是       | 模板id | 1      |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

**响应参数** 

|字段名|	类型|	描述|
|---|---|---|
|result|	int|	1为成功|
**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/template/deltemplate?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC=,45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&template_id=301'
```



**响应示例** 

```json
{
  "errno": 0,
  "msg": "success",
  "data": {
     "result": 1
  }
}
```
## 模板草稿列表

> 获取第三方平台下的模板草稿

```
GET https://openapi.baidu.com/rest/2.0/smartapp/template/gettemplatedraftlist
```
**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 第三方平台Token | --     |

**请求参数** 

| 参数      | 类型   | 是否必填 | 描述         | 示例值 |
| --------- | ------ | -------- | ------------ | ------ |
| page      | string | 否       | 页码(默认1)  | 1      |
| page_size | string | 否       | 条数(默认10) | 10     |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

**响应参数** 

|字段名|	类型|	描述|
|---|---|---|
|draft_id|	long|	草稿id|
|user_version|	string|	模板版本信息|
|user_desc|	string|	模板描述信息|
|create_time|	long|	创建时间|
|web_status|  boolean|   是否支持web化，开发者工具编译版本2.15.07以上传的草稿支持web化。|

**请求示例** 

```shell
curl -X GET \
  'https://openapi.baidu.com/rest/2.0/smartapp/template/gettemplatedraftlist?access_token=42.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC=,42.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&page=1&page_size=50'
```

**响应示例** 

```json
{
  "errno": 0,
  "msg": "success",
  "data": {
    "count": 53,
    "list": [
      {
        "user_version": "2.2.2.2",
        "user_desc": "",
        "create_time": 1531812276,
        "draft_id": 7,
        "web_status":true
      },
      {
        "user_version": "2.2.2.2",
        "user_desc": "",
        "create_time": 1531812305,
        "draft_id": 8,
        "web_status":false
      }
    ]
  }
}
```
## 添加草稿至模板

> 添加草稿至模板库中，模板上限为50个。

```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/addtotemplate
```
**公共请求参数** 

| 参数         | 类型   | 是否必填 | 描述            | 示例值 |
| ------------ | ------ | -------- | --------------- | ------ |
| access_token | string | 是       | 第三方平台Token | --     |

**请求参数** 

| 参数      | 类型   | 是否必填 | 描述                     | 示例值 |
| --------- | ------ | -------- | ------------------------ | ------ |
| draft_id  | string | 是       | 草稿id                   | 1      |
| user_desc | string | 是       | 自定义模板名称，30字以内 | 1      |

**公共响应参数** 

| 参数  | 类型    | 描述     | 示例值   |
| ----- | ------- | -------- | -------- |
| errno | integer | 状态码   | 40001    |
| msg   | string  | 状态描述 | 参数错误 |
| data  | object  | 响应参数 | --       |

**响应参数** 

|字段名	|类型|	描述|
|---|---|---|
|template_id|	long|	返回模板id|
**请求示例** 

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/template/addtotemplate?access_token=45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC=,45.262dcf08e4ac06bb3fd657741a540d40.2592000.1568538447.YaEGtZv0CrUcnG0OokJV4w-1W3JTSQkkj5RZ9lgfC&draft_id=68&user_desc=haha'
```



**响应示例** 

```json
{
  "errno": 0,
  "msg": "success",
  "data": {
     "template_id": 1
  }
}
```