---
title: 界面
header: develop
nav: devtools
sidebar: show
---

概述
-----


为了帮助开发者简单高效地开发和调试智能小程序，我们推出了百度开发者工具。

使用百度开发者工具调试，开发者可以完成智能小程序的 API 和页面的开发调试、智能小程序预览和发布等功能。

项目选择及管理页
-----

在本页面可以选择创建新的智能小程序或打开已创建的智能小程序，并在下方提供了最近编写的智能小程序选项，点击会进入相应的智能小程序开发调试页面。


    1、点击新建会进入模式选择页面。
    2、打开按钮可以打开一个本地已经创建好的智能小程序。
    3、最近编辑下会展示一些开发者最近开发的智能小程序，点击会进入到相应的智能小程序开发调试界面。


![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/smartapp/project_start.png)


模式选择页
-----

 点击新建按钮之后会进入本页面，本页面暂时只提供了组件/ API Demo 选项，点击该选项并点击下一步会进入新建项目页面。


 组件/ API Demo 会加载我们内置的一个展示智能小程序组件的 Demo，进入新建页面需要填写项目名称、存放组件 Demo 磁盘路径和 AppID。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/smartapp/project_demo.png)

新建页面
-----

新建页面需要开发者填写项目的名称、项目开发路径和 AppID。信息校验无误后脚手架会自动生成一些智能小程序的初始化文件。


    1、如果开发者尚没有 AppID 可以点击'注册'注册 AppID 或者点击'智能小程序'选择体验模式，但体验模式下，部分 API 可能无法正常调用。
    2、登录的百度帐号需要是该 AppID 的开发者。
    3、需要选择一个空目录，如果选择一个非空目录，生成的智能小程序的初始化文件会覆盖原目录下的文件。

 ![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/smartapp/project_new2.png)


 管理项目
-----

对本地项目进行删除

 ![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/smartapp/project_delete.png)

智能小程序开发调试主页
-----

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/smartapp/tools.png)

### 菜单栏
百度开发者工具

    文档：智能小程序文档链接
    退出：退出开发者工具
    编辑：可以查看快捷键说明

项目

    打开最近项目：可以查看最近开发项目

工具

    编译：与编译功能一致
    刷新：与刷新功能一致
    清除缓存：清除文件、授权和登录数据

界面

    进入全屏：开发者工具全屏显示
    工具栏：隐藏/显示工具栏
    模拟器：隐藏/显示模拟器
    调试器：隐藏/显示调试器

视图

    最小化：开发者工具最小化


### 工具栏

模拟器、调试器按钮：控制主界面模块显示/隐藏。至少需要一个模块显示。
![图片](https://b.bdstatic.com/searchbox/image/cmsuploader/20180630/1530331806780700.gif)

编译按钮：可以自定义编译。
![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/smartapp/tools-compile.png)

预览按钮：本地编译产出上传至服务器后生成二维码，使用百度App扫码即可查看

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/smartapp/tools-preview.png)

清缓存按钮：可以便捷的清除工具上的文件缓存、数据缓存、授权缓存和登录状态，方便开发者调试。
![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/smartapp/tools-clear-cache.png)

项目信息按钮：可以查看项目的详细信息。
![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/smartapp/tools-info.png)

发布按钮：点击发布成功后进入待提交审核状态，可登录官网查看。
![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/smartapp/publish.png)

更多按钮：展开可以刷新和查看项目的编译历史详情。
![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/smartapp/tools-more.png)


### 模拟器

模拟器可以模拟智能小程序在百度 App 的表现。智能小程序的代码通过编译后可以在模拟器上直接运行。

开发者可以选择不同的设备来调试智能小程序在不同尺寸机型上的适配问题。

模拟器底部的切后台按钮可以模拟移动设备切换窗口的操作。

### 调试器

提供查看组件树、console、查看源文件、查看网络请求、查看storage等功能


快捷键
-----

|Mac OS 快捷键 | Windows 快捷键 | 说明 |
|---|---|---|
| ⌘ + Q |  | 退出开发者工具 |
| ⌘ + Z | ctrl + Z | 撤销 |
| ⌘ + ⇧ + Z | ctrl + shift + Z | 重做 |
| ⌘ + C | ctrl + C | 复制 |
| ⌘ + X | ctrl + X | 剪切 |
| ⌘ + V | ctrl + V | 粘贴 |
| ⌘ + A | ctrl + A | 全选 |
| ⌘ + R | | 刷新页面 |
| ⌘ + ⌃ + F |  | 全屏或退出全屏 |
| ⌘ + shift + T|ctrl + shift + T| 隐藏或显示工具栏|
| ⌘ + shift + D|ctrl + shift + D|隐藏或显示模拟器|
| ⌘ + shift + I|ctrl + shift + I|隐藏或显示调式器|
| ⌘ + M |  | 最小化 |
