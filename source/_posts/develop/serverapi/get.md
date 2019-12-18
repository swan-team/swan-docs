---
title: get
header: develop
nav: serverapi
sidebar: get
---

**解释**：

获取小程序二维码，适用于需要的码数量较少的业务场景。**通过该接口生成的二维码，永久有效，有数量限制。**

**接口调用请求说明**：

```
POST https://openapi.baidu.com/rest/2.0/smartapp/qrcode/get?access_token=ACCESS_TOKEN
```

#### 参数说明

**query参数**:

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	[接口调用凭证](https://smartprogram.baidu.com/docs/develop/serverapi/power_exp/)|

**post参数**:

|参数名|	类型|是否必须|默认值|描述|
|---|---|---|---|---|
|path|	string|	否|	主页|扫码进入的小程序页面路径，最大长度 128 字节，可以为空。|
|width|	int|	否|	430|二维码的宽度，单位 px。最小 280px，最大 1280px|

**返回值说明**:

如果调用成功，会直接返回图片二进制内容，如果请求失败，会返回 JSON 格式的数据。

**返回值**

返回的图片 Buffer

**异常返回**

Object
JSON

|名称|类型|描述|
|---|---|---|
|errno|	int|错误码|
|errmsg| string |错误信息|
|request_id|	string|请求ID，标识一次请求|

**错误码**

|错误码|描述|
|---|---|
|400|请求参数错误|

**注意**

 - POST 只支持 form 表单提交。 
 - 接口只能生成已发布的小程序的二维码 生成二维码数量限制为100,000个
 - 正确返回Content-Type：image/png
