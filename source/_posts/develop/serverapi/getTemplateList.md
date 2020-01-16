---
title: getTemplateList
header: develop
nav: serverapi
sidebar: getTemplateList
---
  
### 获取帐号下已存在的模板列表

**解释**：获取帐号下已存在的模板列表。


```
GET https://openapi.baidu.com/rest/2.0/smartapp/template/templatelist
```
**公共请求参数:**

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | access_token，授权小程序的接口调用凭据 

**请求参数:**

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
offset | int | 是 | 用于分页，表示从offset开始，默认值为0
count | int | 是 | 用于分页，表示拉取count条记录，默认值为0,最大为20

**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|int|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|

**响应参数** 

字段名 | 类型  | 描述
----- |-----| -----
total_count | int| 模板库标题总数
template_id |string | 模板id,发送小程序模板消息时所需
title |string | 模板标题
content |string | 模板内容
example |string | 模板内容示例

**请求示例**

```shell
curl -X GET \
  'https://openapi.baidu.com/rest/2.0/smartapp/template/templatelist?access_token=24.ee3671b4e41f2704280d5ddbe9a3f94c
  .3600.1556461507.C8Bds396khnu6KDKnqfoUUgZ31K-hBY-gJNc4SsGGjYJrS2RMh&count=20&offset=2271'
```



**响应示例:**

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "total_count": 2,
        "list": [
            {
                "template_id": "e4313219538c4b0262e3a14a0507000e8bd79e9PTPAz",
                "title": "续费成功通知",
                "content": "购买时间{{keyword1.DATA}}\n物品名称{{keyword2.DATA}}",
                "example": "购买时间: 2016年6月6日\n物品名称: 奶茶"
            },
            {
                "template_id": "f34178cd598201d9dc8d5c88cd87b44cf7cd0e64d90Y",
                "title": "续费成功通知",
                "content": "购买时间{{keyword1.DATA}}\n物品名称{{keyword2.DATA}}",
                "example": "购买时间: 2016年6月6日\n物品名称: 奶茶"
            }
        ]
    }
}
```
