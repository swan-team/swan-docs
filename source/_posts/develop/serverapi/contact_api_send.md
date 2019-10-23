---
title: 发送客服消息接口
header: develop
nav: serverapi
sidebar: contact_api_send
---

 

#### 接口说明

本接口应在服务器端调用。

发送客服消息给用户。详细规则见 [消息下发条件](http://smartprogram.baidu.com/docs/introduction/contact/#消息下发条件)

```
post https://openapi.baidu.com/rest/2.0/smartapp/message/custom/send
```

##### 请求参数

| 参数名       | 类型   | 是否必须 | 描述                                   |
| ------------ | ------ | -------- | -------------------------------------- |
| access_token | string | 是       | 小程序access_toekn                     |
| user_type    | int    | 是       | 1:游客登录 2:百度账号登录              |
| open_id      | string | 是       | 用户的 OpenID                          |
| msg_type     | string | 是       | 消息类型  text:文本格式 image:图片链接 |
| content      | string | 是       | 文本消息内容，msg_type ="text" 时必填  |
| pic_url      | string | 是       | 图片消息，msg_type ="image" 时必填     |

##### 响应数据

```json
{
    "errno": 0,
    "msg": "success"
}
```

##### 错误码

| 值    | 说明                                                         | 描述 |
| ----- | ------------------------------------------------------------ | ---- |
| 0     | 请求成功                                                     |      |
| 3001  | 请求参数有误                                                 |      |
| 30022 | 不合法的 OpenID，请开发者确认 OpenID 是否是其他小程序的 OpenID |      |
| 90001 | 客服接口下行条数超过上限                                     |      |
| 90002 | 请确认小程序已开通客服能力                                   |      ||

