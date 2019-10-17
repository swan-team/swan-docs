---
title: 第三方平台检测
header: third
nav: third
sidebar: publication
---

### 一、概述
在第三方平台创建成功并最终开发测试完毕后，可提交全网发布申请。此时，百度服务器会通过自动化测试的方式，检测第三方平台所勾选权限集对应服务的基础逻辑是否可用。在通过检测后，才会允许第三方平台提交全网发布，百度将对平台基本信息进一步审核。

### 二、检测机制
当第三方平台勾选以下权限集时，需通过自动化检测才能提交发布，具体机制如下：

#### 1.开发管理权限
当第三方平台勾选开发管理权限时，百度将对以下接口是否曾经调通进行检测：

* 提交代码包：通过调用[为授权的小程序帐号上传小程序代码API](https://smartprogram.baidu.com/docs/develop/third/apppage/#%E4%B8%BA%E6%8E%88%E6%9D%83%E7%9A%84%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%B8%90%E5%8F%B7%E4%B8%8A%E4%BC%A0%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BB%A3%E7%A0%81)，或[使用开发者工具直接代提交源代码包](https://smartprogram.baidu.com/docs/develop/third/develop/#%E4%BA%8C%E3%80%81%E5%AE%9A%E5%88%B6%E5%BC%80%E5%8F%91)，成功为授权小程序提交代码包
* 提交代码包审核：通过调用[为授权的小程序提交审核API](https://smartprogram.baidu.com/docs/develop/third/apppage/#%E4%B8%BA%E6%8E%88%E6%9D%83%E7%9A%84%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8F%90%E4%BA%A4%E5%AE%A1%E6%A0%B8)，成功为授权小程序提交代码包审核

相关能力开发可参考：[小程序包管理文档](https://smartprogram.baidu.com/docs/develop/third/apppage/)

#### 2.客服能力权限

当第三方平台勾选客服能力权限时，百度服务器会向第三方平台设置的消息接受URL发送请求，服务器收到请求必须做出规定的回复。

百度服务器将发送POST请求到填写的服务器地址URL上，POST请求携带参数如下表所示：

| 参数      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| signature | 百度加密签名，signature结合了开发者填写的token参数和请求中的timestamp参数.nonce参数 |
| timestamp | 时间戳                                                       |
| nonce     | 随机数                                                       |
| echoStr   | 随机字符串                                                   |

开发者通过检验 signature 对请求进行校验。若确认此次 POST 请求来自百度服务器，请原样返回 echoStr 参数内容，则接入生效，成为开发者成功.

相关能力开发可参考：[客服消息能力文档](https://smartprogram.baidu.com/docs/develop/third/customerability/)

#### 3.支付服务权限
当第三方平台勾选支付服务权限时，百度将对以下接口是否曾经调通进行检测：

* 创建支付账号：通过调用[创建支付账号API](https://smartprogram.baidu.com/docs/develop/third/paymentservice/#创建支付账号)，成功为授权小程序创建支付账号
* 提交开发者信息：通过调用[提交开发者信息API](https://smartprogram.baidu.com/docs/develop/third/paymentservice/#开发者信息设置)，成功为授权小程序提交开发者信息
* 创建并绑定支付服务：通过调用[创建并绑定支付服务API](https://smartprogram.baidu.com/docs/develop/third/paymentservice/#创建支付服务)，成功为授权小程序创建并绑定支付服务

相关能力开发可参考：[支付服务能力文档](https://smartprogram.baidu.com/docs/develop/third/paymentservice/)