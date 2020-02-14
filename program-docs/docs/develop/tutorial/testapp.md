---
title: 测试号
header: develop
nav: tutorial
sidebar: testapp
---

测试号是一个特殊的智能小程序的 AppID，开发者可以使用此 AppID 来开发和体验智能小程序。

### 使用测试号

在 2.19.0 以上版本的百度开发者工具中，进入新建项目界面，在填写 AppID 下面可以点击使用测试号，即可自动开通测试号权限并将测试号填写到 AppID 输入框。

![图片](../../../img/tutorial/testapp/create.png)

测试号在使用上有一些功能上的限制，比如不支持发布、云开发、云测试、插件、动态库、远程调试等能力，以及不支持支付、手机号等权限的获取。

![图片](../../../img/tutorial/testapp/main.png)

如果需要使用webview组件，请在项目信息内关闭域名校验功能后再次预览，即可在百度APP上跳过域名校验。
