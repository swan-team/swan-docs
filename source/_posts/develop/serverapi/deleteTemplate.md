---
title: deleteTemplate
header: develop
nav: serverapi
sidebar: deleteTemplate
---
  
### 删除帐号下的某个模板

**解释**：删除帐号下的某个模板。

```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/del?template_id=TEMPLATE_ID
```
**公共请求参数**:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | access_token，授权小程序的接口调用凭据

**请求参数**:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
template_id |string |是| 模板id,发送小程序模板消息时所需

**公共响应参数** 

|参数|类型|描述|示例值|
|--|--|--|--|
|errno|int|状态码|40001|
|msg|string|状态描述|参数错误|
|data|object|响应参数|--|

 

**请求参数**

```shell
curl -X GET \
  'https://openapi.baidu.com/rest/2.0/smartapp/template/del?access_token=45.ee3671b4e41f2704280d5ddbe9a3f94c.3600.1556461507.C8Bds396khnu6KDKnqfoUUgZ31K-hBY-gJNc4SsGGjYJrS2RMh&template_id=e4313219538c4b0262e3a14a0507000e8bd79e9PTPAz'
```



**响应示例**:

```json
{
    "errno": 0,
    "msg": "success"
}
```

**错误码说明**：

|错误码 | 错误描述 |
|----- |-----|
|30001|参数错误（具体提示见返回值）|