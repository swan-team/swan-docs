---
title: 客服消息
header: develop
nav: serverapi
sidebar: contact_api
---

## 消息推送介绍

1. 使用超级管理员或管理员账号登录开发者平台后，按提示填写相关信息，具体如下：

- URL: 开发者用来接收消息的接口 URL。开发者所填写的URL 必须以 http:// 或 https:// 开头，分别支持 80 端口和 443 端口。
- Token: 可由开发者可以任意填写，用作生成签名（该 Token 会和接口 URL 中包含的 Token 进行比对，从而验证安全性）。
- EncodingAESKey: 由开发者手动填写或随机生成，将用作消息体加解密密钥。
- 消息加解密方式：明文模式（默认）.兼容模式和安全模式。可以选择消息数据格式：XML 格式（默认）或 JSON 格式。

2. 验证消息的确来自百度服务器

开发者提交信息后，百度服务器将发送GET请求到填写的服务器地址URL上，GET请求携带参数如下表所示：

| 参数      | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| signature | 百度加密签名，signature结合了开发者填写的token参数和请求中的timestamp参数.nonce参数。 |
| timestamp | 时间戳                                                       |
| nonce     | 随机数                                                       |
| echoStr   | 随机字符串                                                   |

开发者通过检验 signature 对请求进行校验（下面有校验方式）。若确认此次 GET 请求来自百度服务器，请原样返回 echoStr 参数内容，则接入生效，成为开发者成功，否则接入失败。加密/校验流程如下：

1. 将token.timestamp.nonce三个参数进行字典序排序
2. 将三个参数字符串拼接成一个字符串进行sha1加密

## 在页面中使用客服消息

小程序 [button](https://smartprogram.baidu.com/docs/develop/component/formlist/#button/) 组件提供了 open-type 属性来供开发者调用百度 APP 的开放能力，若开发者需要使用客服能力，需要将 open-type 属性的值设置为 contact ，当用户点击该按钮时就会打开客服会话，如果用户在会话中点击消息卡片后返回小程序，开发者可以从 bindcontact 回调中获得具体的信息。 


#### 代码示例

```js
	<button open-type="contact" bindcontact="contactCB">客服</button>
```

```
	Page({
		contactCB(e) {
			console.log(e.detail);
		}
	});
```

#### 返回参数说明

| 参数 | 类型 | 说明 |
| ---- |---- |----|
| detail | object | 小程序消息详细信息 |

## 后台接入消息服务

用户向小程序客服发送消息时，百度服务器将向开发者填写的服务器配置 URL推送消息，开发者可以依据自身业务逻辑进行响应。
百度服务器在将用户的消息发给开发者服务器地址后，百度服务器在2秒内收不到响应会断掉连接。

关于重试的消息排重，有 msgid 的消息推荐使用 msgid 排重。事件类型消息推荐使用 FromUserName + CreateTime 排重。

服务器收到请求必须做出下述回复。详见下面说明：
>1. 直接回复success（推荐方式）
2. 直接回复空串

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

## 发送客服消息接口

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

