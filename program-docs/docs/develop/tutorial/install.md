---
title: 安装开发者工具
header: develop
nav: tutorial
sidebar: install
---
为了帮助开发者简单高效地开发和调试智能小程序，我们推出了百度开发者工具。
正式版本下载链接：[Windows 64](https://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&type=online) / [mac](https://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&type=online)
rc 版本下载链接：[Windows 64](https://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&type=rc) / [mac](https://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&type=rc)

查看<a href="https://smartprogram.baidu.com/docs/develop/devtools/history/">历史版本</a>信息。

> <a href="https://smartprogram.baidu.com/docs/develop/appendix/frequently/#工具">安装过程中碰到的问题</a>。

使用百度开发者工具调试，开发者可以完成智能小程序的 API 和页面的开发调试、智能小程序预览和发布等功能。

## 开发者工具登录

开发者工具安装完成后，请按如下操作进行登录：
1. 打开开发者工具，单击“新建”。
 ![图片](../../../img/tool/tool3.png)
2. 在弹出框内输入项目名称、项目目录和 AppID。
 ![图片](../../../img/tool/tool1.png)

|名称|内容说明|
|--|--|
|项目名称|请使用英文为项目自定义命名。|
|项目目录|**·** 请新建或选择一个空的文件夹；<br>**·** 如选择一个非空的文件夹，则会在该文件夹下自动生成一个与项目名称相同的文件夹。|
|AppID|**·** 如果您未注册 AppID，请选择默认的"使用测试号体验智能小程序";<br>**·** 当您完成<a href="https://smartprogram.baidu.com/docs/introduction/enter_application/">智能小程序账号注册</a>之后，则选择"填写APPID"并填写对应的 AppID。|

3. 模拟器登录

如果选择新建一个智能小程序，开发者工具会默认创建一个小程序示例demo，点击demo首页的"获取头像昵称"按钮可弹出登录的二维码，进行扫码之后可完成智能小程序在模拟器中的登录。
> 模拟器的登录状态和开发者工具的登录状态相互独立，因为智能小程序已经开源，不同宿主小程序的开发者会使用不同的帐号登录模拟器进行开发；且在调试阶段开发者需要通过切换不同帐号的方式进行调试，因此模拟器为您提供单独登录的方式。

 ![图片](../../../img/tool/tool5.png)
