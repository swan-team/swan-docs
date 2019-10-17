---
title: addTemplate
header: develop
nav: serverapi
sidebar: addTemplate
---
 
**解释**：组合模板并添加至帐号下的个人模板库。
**接口调用请求说明**:
```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/templateadd?access_token=ACCESS_TOKEN
```
**参数说明**:

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|id|	string|	是|	模板库id|
|keyword_id_list|	json|	是|	模板关键词id列表，如[1,2,3]；keyid 数目取值区间[2,6] 。|
**返回值**:
```json
{
    "errno": 0,
    "msg": "success",
    "data": {
        "template_id": "f34178cd598201d9dc8d5c88cd87b44cf7cd0e62NwmP"
    }
}
```