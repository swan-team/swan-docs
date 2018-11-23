---
title: 图片上传
header: develop
nav: third
sidebar: upload
---
接口说明:
```
POST https://openapi.baidu.com/file/2.0/smartapp/upload/image
```
请求参数：

|参数名|	类型|	是否必须|	描述|
|---|---|---|---|
|access_token|	string|	是|	授权小程序的接口调用凭据|
|multipartFile|	multipartFile|	是|	文件|
响应数据:
```json
{
    "data": "url",  // 返回上传后图片的url地址
    "errno": 0,
    "msg": "success"
}
```