---
title: 开发者工具下载
header: develop
nav: devtools
sidebar: download
---

最新版本下载地址
---
[windows 64](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&type=online) 、  [mac](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&type=online)

## v1.7.3 更新日志
[New] 支持API：chooseVideo/saveVideoToPhotosAlbum/getLocation/onAccelerometerChange/startAccelerometer/stopAccelerometer/onCompassChange/startCompass/stopCompass
[New] 支持组件: web-view
[New] 调试工具增加 sensors 面板，用于模拟地址、加速度计和罗盘信息
[New] 增加清除授权缓存功能
[Changes] 预览增加上传人及时间信息，增加错误信息提示
[BugFix] 修复无 AppID 时无法登录成功的问题
[BugFix] 修复切后台时没有 onHide 事件的问题
[BugFix] 修复 picker 组件在重新编译后无法隐藏的 bug
[BugFix] 修复 choseImage 返回文件路径错误的问题
[BugFix] 修复 getSwanId 返回数据不正确的问题

## v1.7.2 更新日志
[New]  更新工具栏图标
[New] 支持API：recommendSimilarProducts/recommendProducts/setScreenBrightness/getScreenBrightness/setKeepScreenOn/vibrateLong/vibrateShort
[New] 支持组件： open-data
[New] 调试工具增加 storage 和 appdata 面板
[New] 模拟器内 useragent 增加 swan 标识
[New] 增加清除缓存功能
[Changes] request 请求增加 referer，格式 `https://smartprogram.baidu.com/{appkey}/devtools/page-frame.html`
[BugFix] 优化调试工具通信时序，修复 swan 面板偶现的白屏问题
[BugFix] 修改模拟器背景色为白色，保持和百度App一致
[BugFix] 修复历史工程排序不正确问题
[BugFix] 修复 video 无法播放问题
[BugFix] 修复切换 tab 后，进入任意页面后退无法点击问题


## v1.6.2 更新日志

[New] video 组件增加 bind 事件支持


## v1.6.1 更新日志

[BugFix] 修复 navigateTo 回调执行两次的错误 
[BugFix] 修复请求参数被字段增加&字段的错误 
[BugFix] 修复退回选择工程页面后选择其他工程卡死的错误 
[BugFix] 修复 network、swan panel 不稳定的问题 
[Changes] 优化授权交互流程，去除强制弹窗
