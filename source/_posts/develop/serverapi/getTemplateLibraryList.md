---
title: getTemplateLibraryList
header: develop
nav: serverapi
sidebar: getTemplateLibraryList
---
  
**解释**：获取小程序模板库标题列表。
**接口调用请求说明**：
```
POST https://openapi.baidu.com/rest/2.0/smartapp/template/librarylist?access_token=ACCESS_TOKEN
```

**参数说明**:

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|offset|	int|	是|	偏移数量|
|count|	int|	是|	返回长度，取值区间（0，20]。|
|access_token|string	|是|	<a href="https://smartprogram.baidu.com/docs/develop/serverapi/power_exp/">接口调用凭证</a>|

**返回值**:
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