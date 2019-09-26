---
title: 下载资金账单
header: develop
nav: function
sidebar: tune_up_capitaBil
---



**接口描述**:商户可以通过该接口下载历史资金流水账单。


**接口地址**:`https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/capitaBill`


**请求方式**：`GET`

**请求参数**：

| 参数名称         | 参数说明     |     in |  是否必须      |  数据类型  | 
| ------------ | -------------------------------- |-----------|--------|----|
|access_token|获取[access_token](https://smartprogram.baidu.com/docs/develop/serverapi/power_exp/)  | query | true |string  |   
| billTime |  对账单日期 格式 yyyy-MM-dd | query | true |string  |  

**响应示例**:

```json
{
  "data": {
    "data": [
      {
        "createTime": "string",//创建时间
        "downloadName": "string",//账单名称
        "exportStatus": 0,//导出进度
        "url": "string"//下载地址
      }
    ],
    "totalCount": 0
  },
  "errno": 0,
  "msg": "string"
}
```



