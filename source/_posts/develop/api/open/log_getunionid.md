---
title: getunionid
header: develop
nav: api
sidebar: log_getunionid
---

 
 

### unionid说明
1. 一个开发者可以创建多个小程序， 开发者可以通过unionid实现跨小程序的用户区分。从用户角度看，每个用户在一个开发者所有的小程序下的unionid是唯一的。

2. unionid获取依赖用户登录授权，登录授权过程[授权流程说明](https://smartprogram.baidu.com/docs/develop/api/open_log/)，请妥善处理用户未授权场景。

### 接口调用请求说明
```
POST https://openapi.baidu.com/rest/2.0/smartapp/getunionid?access_token=ACCESS_TOKEN
```
### 参数说明

**Header 参数**

参数名 | 类型 | 是否必须 | 描述 
--| --| --|--
Content-Type| application/x-www-form-urlencoded | 是 | Http的实体首部字段，浏览器原生form表单。|

**query参数**

参数名 | 类型 | 是否必须 | 描述 
--| --| --|--
access_token| string | 是 | [接口调用凭证](https://smartprogram.baidu.com/docs/develop/serverapi/power_exp/)


**post参数**

参数名 | 类型 | 是否必须 | 描述 
--| --| --|--
openid| string | 是 | 用户openid, 需要经过用户[登录授权过程](https://smartprogram.baidu.com/docs/develop/api/open_log/)获取


**返回值说明**

参数名 | 类型 |描述 
--| --| --|--
errno| int | 错误码 0：正确返回，1：异常返回
errmsg| string | 错误信息
request_id| string | 请求ID，标识一次请求
data| object | 详细数据，errno为0的情况下才有意义


**data字段描述**

参数名 | 类型 | 描述 
--| --| --|--
unionid| string | 小程序用户 + 开发者主体维度 唯一的id


**返回值示例**
```
{ 
    "data": {
        "unionid": "St6PVMkgMDeh92Uq2EWfx6H"
    },
    "errmsg": "succ",
    "errno": 0,
    "request_id": "2321772211",
    "timestamp": 1563886782
}
```


