---
title: getTemplateLibraryList
header: develop
nav: serverapi
sidebar: getTemplateLibraryList
---

### 获取帐号下已存在的模板列表

**解释**：获取小程序模板库标题列表。


```
GET https://openapi.baidu.com/rest/2.0/smartapp/template/librarylist
```
**公共请求参数**:

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
|access_token |string | 是 | access_token，授权小程序的接口调用凭据 |

**请求参数**:

|参数名 | 类型 | 是否必须 | 描述|
|----- |-----| ------| -----|
|offset | int | 是 | 用于分页，表示从offset开始，默认值为0|
|count | int | 是 | 用于分页，表示拉取count条记录，默认值为0,最大为20|
**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|int|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|

**响应参数** 

|字段名 | 类型  | 描述|
|----- |-----| -----|
|total_count | int| 模板库标题总数|
|id |string | 模板标题id（获取模板标题下的关键词库时需要）|
|title |string | 模板标题内容|
**请求实例**

```shell
curl -X GET \
  'https://openapi-test.baidu.com/rest/2.0/smartapp/template/librarylist?access_token=24
  .ee3671b4e41f2704280d5ddbe9a3f94c.3600.1556461507.C8Bds396khnu6KDKnqfoUUgZ31K-hBY-gJNc4SsGGjYJrS2RMh&count=20&offset=2271'
```



**响应示例**:

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "total_count": 2278,
        "list": [
            {
                "id": "BD0001",
                "title": "订单支付成功通知"
            },
            {
                "id": "BD0002",
                "title": "购买成功通知"
            },
            {
                "id": "BD0003",
                "title": "订单发货提醒"
            },
            {
                "id": "BD0004",
                "title": "待付款提醒"
            },
            {
                "id": "BD0005",
                "title": "付款成功通知"
            }
        ]
    }
}
```
