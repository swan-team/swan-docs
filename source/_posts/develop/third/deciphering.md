---
title: 第三方平台消息加解密
header: develop
nav: third
sidebar: deciphering
---

### 开发者在代替授权小程序接收和处理消息时，出于安全考虑，必须对消息收发的过程进行必须的加解密。

第三方平台可能会接收到两种类型的消息：

1、百度服务器发送给第三方服务的事件推送（如Ticket推送，代码包审核结果推送等）。这种系统事件推送通知，服务开发者收到后也需进行解密，接收到后只需直接返回字符串“success”。

2、用户发送给小程序的消息。

具体消息解密的步骤如下：

#### 1、验证消息签名

目的是保证消息是来自于百度服务器。

消息格式为：

```json
{
  "Nonce": "4464221",
  "TimeStamp": "1535551395",
  "Encrypt": "/X6AhuNc6ObfSXaA0/DI2SH4m4NAhaaLrYDxyeARIXnGkVYwjhSz/cK8ZLvPcbsHi6d8spK+brQwHw5+t55o4NuZj09x1TT2G6hkCQwU/R9ejDIv9yFI292XwkTMVkQ6dnZIwpvRbPmsV2EX6cagRl3C5KVlFme+6b4SS3aDat7dmpNyxjb6MdYCdZnzp4CmgbramsS0BtA/tnNgqKZ1VA==",
  "MsgSignature": "ba394c04acece6c2c0edee058c5dddf82474b8ee"
}
```
Nonce为随机数，TimeStamp时间戳，Encrypt加密消息体，MsgSignature为消息签名

可以使用MsgSignatureUtil类的getMsgSignature方法。根据消息验证TOKEN、Nonce、TimeStamp、Encrypt获取签名，和比较MsgSignature比较，如果相同则证明来源于百度服务器。

#### 2、解密消息

Encrypt字段为加密消息体，可以使用AesDecryptUtil类的decrypt方法进行解密。

提供了php, java2种语言的示例代码（<a href="https://b.bdstatic.com/searchbox/mappconsole/image/20190709/fb1d6c0c-e211-4152-9c53-2400a5d61b05.zip">点击下载</a>，请运行示例代码前先阅读readme文件），每种语言的类名和接口名均一致。

#### 注意：

1、AESKey长度固定为43个字符，从a-z,A-Z,0-9共62个字符中选取。

2、出于安全考虑，开放平台网站提供了修改消息加解密Key的功能。

3、百度服务器发送给第三方服务的事件推送必须直接返回"success"，否则会进行多次重试。