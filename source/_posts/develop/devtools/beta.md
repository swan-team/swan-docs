---
title: beta版本
header: develop
nav: devtools
sidebar: beta
---

> 本页面提供百度开发者工具 Beta 版本的下载,以 Beta 版本方式发布公测。

Beta 版本工具进行了 UI 和交互上的优化，涵盖所有正式版本功能的同时新增了一些 API 的支持。Beta 版安装时不会覆盖正式版本的安装路径，与正式版的数据不会互相影响。

**下载地址 **:[Windows-beta](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&type=beta) / [mac-beta](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&type=beta)

## changelog

|版本号|更新时间|更新内容|
|--|--|
|2.0.4-beta.|2019.1.15|**New**<p>新增 button 组件 bindgetphonenumber 属性的支持。<p>**BugFix**<p>**·**调整 request API 重定向时的错误提示；<p>**·**修复切换系统语言时造成的英文加载失效问题；<p>**·**修复选择编译模式时会使用未选中的编译模式的问题。|
|2.0.0-beta|2019.1.07| **New**<p>**·**支持api updateManager；<p>**·**编辑器新增快捷键 cmd+w / ctrl+w ,关闭当前tab；<p>**·** 编辑器支持tab切换时回到原来位置。<p>**Change**<p>**·**保存登录状态,重启不需要重新登录；<p>**·**模拟器部分登录和工具主体登录分离,切换模拟器内账号、清除缓存不会导致开发者账号登录状态被清除了；<p>**·** 调试器中AppData、Storage、Sensor 整体重写；<p>**·**新建工程时提供空白脚手架工程；<p>**·**新建工程时不再会覆盖目录下内容；<p>**·**打开时会恢复上次界面退出时的状态；<p>**·**授权和清除授权时会同步到手机端。<p>**BugFix**<p>**·**修复刷新时websocket没有正确断开连接的问题；<p>**·**修复getSetting、openSetting返回数据格式错误的问题。|
	