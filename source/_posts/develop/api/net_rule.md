---
title: 使用注意事项
header: develop
nav: api
sidebar: net_rule
---
## 服务器域名配置
每个智能小程序需要事先设置一个通讯域名，小程序可以跟指定的域名与进行网络通信。包括普通 HTTPS 请求（request）、上传文件（uploadFile）、下载文件（downloadFile) 和 WebSocket 通信（connectSocket）。
## 配置流程
服务器域名请在 “智能小程序后台->设置->开发设置-><a href="https://smartprogram.baidu.com/mappconsole/main/set?tabCur=1">服务器域名</a>” 中进行配置，配置时需要注意：
*    域名只支持 https (request、uploadFile、downloadFile) 和 wss (socket) 协议；
*    域名不能使用 IP 地址、localhost或端口号；
*    域名必须经过 ICP 备案；
*    出于安全考虑，openapi.baidu.com 不能被配置为服务器域名，相关API也不能在小程序内调用。开发者应将 App Secret 保存到自有后台服务器中，通过服务器使用App Secret获取 access_token，并调用相关 API；
*    对于每个接口，分别可以配置最多 20 个域名。
## 网络请求
#### 超时时间
* 默认超时时间和最大超时时间都是 60s；
* 超时时间可以在 app.json 中配置。
#### 使用限制  
* [request](https://smartapp.baidu.com/docs/develop/api/net_request/#swan-request/) 最大并发数6；
* [websocket](https://smartapp.baidu.com/docs/develop/api/net_websocket/) 最大并发数5。
* 网络请求的 referer header 不可设置。
    * 其格式固定为 https://smartapp.baidu.com/{appKey}/{version}/page-frame.html。
    * 其中 {appkey} 为小程序的 appkey。
    * {version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本，正式版本号发布前在开发者工具中设置。
    ![图片](../../../img/min-swan-version.png)