
---
title: 网络的注意事项
layout: gamedoc
categoryName: tutorials
topic: network
priority: 07-01
---

在小游戏/小游戏中使用网络相关的 API 时，需要注意下列问题，请开发者提前了解。

### 网络请求

**请求地址校验**

- 域名只支持 `https` (request、uploadFile、downloadFile) 和 `wss` (socket) 协议。

**超时时间**

- 网络请求默认超时时间 `30s`。
- 超时时间可以在 `game.json` 中配置。

```
// game.json
{
    "deviceOrientation": "portrait",
    "networkTimeout":
    {
        "request": 30000,
        "connectSocket": 30000,
        "uploadFile": 30000,
        "downloadFile": 30000
}
```


**使用限制**

网络请求的 `header` 中不可设置`referer`。
默认referer格式为：`https://smartapp.baidu.com/{appkey}/{version}/page-frame.html`
- {appkey}：客户端小游戏的appkey（aps 下发的 appkey，不含调起协议中拼接的下划线），非服务端的小游戏 appid。
- {version}：为小游戏的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本。

request、uploadFile、downloadFile 的最大并发限制是 10 个。

**返回值编码**

建议服务器返回值使用 UTF-8 编码。对于非 UTF-8 编码，小游戏会尝试进行转换，但是会有转换失败的可能。
小游戏会自动对 BOM 头进行过滤（只过滤一个 BOM 头）。

**回调函数**

只要成功接收到服务器返回，无论 statusCode 是多少，都会进入 success 回调。请开发者根据业务逻辑对返回值进行判断。
