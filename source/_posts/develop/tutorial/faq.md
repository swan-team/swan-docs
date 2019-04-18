---
title: 安装开发者工具
header: develop
nav: tutorial
sidebar: faq
---
 
### 为什么 Electron 2.x 在部分中文 win7 上无法打开？

**现象**：部分 windows7 下 1.x 工具可以打开，升级到 2.x 后，打开工具无反应，后台没有启动任何进程。
**原因分析**：应该是启动时直接崩溃，未找到有效错误信息。猜测是 electron 的bug，远程协助连接问题机器，尝试安装 electron 官方 demo 后发现，启动 demo 直接报错，搜索错误信息找到相关的 [issue](https://github.com/electron/electron/issues/12980) 

**解决方案**

 - 安装 [windows 系统更新](https://support.microsoft.com/en-us/help/4343900/windows-7-update-kb4343900) 
 - 命令行执行 `netsh winsock reset`
 - 重启电脑
