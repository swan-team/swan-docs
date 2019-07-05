---
title: 名称检测
header: develop
nav: third
sidebar: checkname
---

**接口调用请求说明**：
```
GET https://openapi.baidu.com/rest/2.0/smartapp/app/checkname?access_token=ACCESS_TOKEN
```
**参数说明**:

参数名 | 类型 | 是否必须 | 描述
----- |-----| ------| -----
access_token |string | 是 | TP的access_token，第三方平台接口调用凭据 
app_name | string | 是 | 小程序名称

**返回值说明**:

字段名 | 类型  | 描述
----- |-----| -----
checkResult |int | 小程序名称检测结果码
checkWords | array| 命中的品牌词或高流量词

**错误码**:

字段名 | 类型  | 描述
----- |-----| -----
errno |int | 错误码
msg |string  | 第三方id

**返回值示例**:

```
{
    "errno": 0,
    "msg": "success",
    "data": {
        "checkResult": 0
    }
}
```
**结果码说明**：

结果码 | 错误描述 
----- | -----  
0| 检测通过
1| 重名检测未通过
2| 敏感&黄反检测未通过
3| 完全对等品牌词检测未通过
4| 包含品牌词检测未通过
5| 高流量词检测未通过