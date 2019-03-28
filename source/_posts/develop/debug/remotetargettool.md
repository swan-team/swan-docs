---
title: 在控制台中进行真机调试
header: develop
nav: devtools
sidebar: remotetargettool
---


adb-devtools 介绍
-----

adb-devtools 是一个利用 ADB 工具调试 Android 版智能小程序的远程调试命令


安装
-----
在命令行中执行
```shell
npm install adb-devtools -g
```


准备
-----
被调试的手机通过数据线连接电脑，同时确保设备打开了开发者模式（参考：[如何打开开发者模式](https://jingyan.baidu.com/article/948f5924ebe158d80ff5f9ab.html)）

使用
-----
启动待调试的智能小程序后，在命令行中执行
```shell
devtools
```

即可自动打开调试窗口进行远程调试
