---
title: getTemplateList
header: develop
nav: serverapi
sidebar: getTemplateList
---
  
**解释**：获取帐号下已存在的模板列表。
**接口调用请求说明**：
```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/templatelist?access_token=ACCESS_TOKEN
```
**参数说明**:

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|offset|	int|	是|	偏移量|
|count|	int|	是|	数量|
**返回值**:
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