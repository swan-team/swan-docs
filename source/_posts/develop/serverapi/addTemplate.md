---
title: addTemplate
header: develop
nav: serverapi
sidebar: addTemplate
---
 
### 组合模板并添加至帐号下的个人模板库

**解释**：组合模板并添加至帐号下的个人模板库。


```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/templateadd
```
**公共请求参数**:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | access_token，授权小程序的接口调用凭据 

**请求参数**

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
id | int | 是 | 模板标题id
keyword\_id\_list | string | 是 | 模板关键词id列表，如[1,2,3]；

**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|int|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|

**响应参数** 

字段名 | 类型  | 描述
----- |-----| -----
template_id | string| 添加至帐号下的模板id，发送小程序模板消息时所需 

**请求示例**

```shell
curl -X POST \
  'https://openapi.baidu.com/rest/2.0/smartapp/template/templateadd?access_token=24.ee3671b4e41f2704280d5ddbe9a3f94c
  .3600.1556461507.C8Bds396khnu6KDKnqfoUUgZ31K-hBY-gJNc4SsGGjYJrS2RMh&id=BD0016&keyword_id_list=[1,2,3]'
```

**响应示例**:

```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "template_id": "wDYzYZVxobJivW9oMpSCpuvACOfJXQIoKUm0PY397Tc"
    }
}
```

**错误码说明**：

|错误码 | 错误描述 |
|----- |-----|
|2002/30001|参数错误（具体提示见返回值）|
