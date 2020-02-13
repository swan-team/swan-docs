---
title: 后台接入消息服务
header: develop
nav: serverapi
sidebar: contact_api_background
---
 

用户向小程序客服发送消息时，百度服务器将向开发者填写的服务器配置 URL推送消息，开发者可以依据自身业务逻辑进行响应。
百度服务器在将用户的消息发给开发者服务器地址后，百度服务器在2秒内收不到响应会断掉连接。

关于重试的消息排重，有 msgid 的消息推荐使用 msgid 排重。事件类型消息推荐使用 FromUserName + CreateTime 排重。

服务器收到请求必须做出下述回复。详见下面说明：
>1. 直接回复success（推荐方式）
>2. 直接回复空串

### 接收消息

各消息类型的推送JSON.XML数据包结构如下。

#### 文本消息

用户在客服会话中发送文本消息时将产生如下数据包：

##### XML 格式

```xml
<xml>
   <ToUserName><![CDATA[toUser]]></ToUserName>
   <FromUserName><![CDATA[fromUser]]></FromUserName>
   <CreateTime>1482048670</CreateTime>
   <MsgType><![CDATA[text]]></MsgType>
   <Content><![CDATA[this is a test]]></Content>
   <MsgId>1234567890123456</MsgId>
</xml>
```

#### JSON 格式

```json
{
  "ToUserName": "toUser",
  "FromUserName": "fromUser",
  "CreateTime": 1482048670,
  "MsgType": "text",
  "Content": "this is a test",
  "MsgId": 1234567890123456
}
```

##### 参数说明

| 参数         | 说明                |
| :----------- | :------------------ |
| ToUserName   | 小程序的appId      |
| FromUserName | 发送者的openid      |
| CreateTime   | 消息创建时间(整型） |
| MsgType      | text                |
| Content      | 文本消息内容        |
| MsgId        | 消息id，64位整型    |

#### 图片消息

用户在客服会话中发送图片消息时将产生如下数据包：

##### XML 格式

```xml
<xml>
      <ToUserName><![CDATA[toUser]]></ToUserName>
      <FromUserName><![CDATA[fromUser]]></FromUserName>
      <CreateTime>1482048670</CreateTime>
      <MsgType><![CDATA[image]]></MsgType>
      <PicUrl><![CDATA[this is a url]]></PicUrl>
      <MsgId>1234567890123456</MsgId>
</xml>
```

##### JSON 格式

```json
{
  "ToUserName": "toUser",
  "FromUserName": "fromUser",
  "CreateTime": 1482048670,
  "MsgType": "image",
  "PicUrl": "this is a url",
  "MsgId": 1234567890123456
}
```

##### 参数说明

| 参数         | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| ToUserName   | 小程序的appId                                               |
| FromUserName | 发送者的openid                                               |
| CreateTime   | 消息创建时间(整型）                                          |
| MsgType      | image                                                        |
| PicUrl       | 图片链接（由系统生成）                                       |
| MsgId        | 消息id，64位整型                                             |
