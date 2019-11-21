---
title: deleteTemplate
header: develop
nav: serverapi
sidebar: deleteTemplate
---

  
**解释**：删除帐号下的某个模板。
**接口调用请求说明**:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/templatedel?access_token=ACCESS_TOKEN
```
**参数说明**:

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|template_id|	string|	是|	模板id|
**返回值**:
```json
{
    "errno": 0,
    "msg": "success",
    "data": []
}
```