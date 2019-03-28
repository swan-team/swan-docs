---
title: 开发者服务权限说明
header: develop
nav: server
sidebar: power_exp
---


使用对开发者服务相关接口需要先从智能小程序开发者平台申请该服务

调用服务权限校验方式：
<notice>Client Credentials 授权</notice>

采用 Client Credentials 方式，即应用公钥、密钥方式获取 Access Token, 后 Access Token 访问各服务接口。对于应用而言，其流程只有一步，即直接获取 Access Token。

使用 Client Credentials 获取 Access Token 需要应用在其服务端发送请求（推荐用POST方法）到百度  OAuth2.0 授权服务的 `https://openapi.baidu.com/oauth/2.0/token `地址上，并带上以下参数：

```
grant_type：必须参数，固定为“client_credentials”
client_id： 必须参数，智能小程序的AppKey 从开发者平台中获取
client_secret：必须参数，智能小程序的AppSecret 从开发者平台中获取
scope：必须参数，固定为"smartapp_snsapi_base"
```

例如：

`https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=Va5yQRHlA4Fq4eR&client_secret=0rDSjzQ20XUj5itV7WRtznPQS&scope=smartapp_snsapi_base` 

 响应数据包格式

```
{
　　"access_token":"1.a6b7dbd428f731035f771b8d15063f61.86400.1292922000-2346678-124328",
　　"expires_in":86400,
　　"refresh_token":"2.385d55f8615fdfd9edb7c4b5ebdc3e39.604800.1293440400-2346678-124328",
　　"scope":"smartapp_snsapi_base",
　　"session_key":"ANXxSNjwQDugf8615OnqeikRMu2bKaXCdlLxn",
　　"session_secret":"248APxvxjCZ0VEC43EYrvxqaK4oZExMB"
}
```

默认情况下，Access Token 的有效期为一个月，如果 Access Token 过期可以重新获取。
