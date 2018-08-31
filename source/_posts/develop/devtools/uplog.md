---
title: 工具历史更新记录
header: develop
nav: devtools
sidebar: uplog
---
#### 工具更新记录中包括<a href="https://smartprogram.baidu.com/docs/develop/devtools/uplog_tool/">开发者工具更新日志</a>，和<a href="https://smartprogram.baidu.com/docs/develop/devtools/uplog_compile/">编译工具更新日志</a>。
请单击下载最新版本工具：
<p>**·** [windows 64](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&type=online)   <p>**·** [mac](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&type=online)


<!-- ## 开发者工具更新日志
|版本号|更新内容|
|----|----|
|v1.10.3 |**Change**<p> 分包支持多级目录作为包名。<p>**BugFix**<p> 修复模拟器渲染新增组件出错的问题。|
|v1.10.2|**New**<p>**·** 支持组件：textarea;<p>**·** 自定义编译支持预览；<p>**·** 支持微信小程序转换成智能小程序；<p>**Change**<p>**·** 优化showToast显示样式和文字长度限制；<p>**·**  优化录音、录像功能，将音频、视频文件保存到tmp目录；<p>**·** 优化socket，增加socket task个数限制。<p>**BugFix**<p>**·** 修复模拟器切换手机型号useragent不变的问题；<p>**·** 修复模拟器在使用setData api来增加组件时渲染失败的问题。|
|v1.9.0 |**New**<p>**·** 调试工具支持 android 下真机调试；<p>**·** 编译支持自定义入口页面和参数;<p>**·** 增加清除网络缓存功能。<p>**BugFix**<p>**·** 修复执行hideTabBar方法后高度不对的问题；<p>**·** 修复设置缩放后模拟器显示异常的问题；<p>**·** 修复模拟器模拟android设置时swan api无法调用的问题。|
|v1.8.0 |**New**<p>**·** 支持组件: video/audio/backgroundAudio；<p>**·** 发布支持自定义版本号；<p>**·** 调试工具 Network 面板支持页面内图片的展示；<p>**·** 增加版本更新提示。<p>**Change**<p> **·** 优化创建、选择工程的错误提示；<p>**·** 新建工程界面增加新建文件夹的选项。<p>**BugFix**<p>**·** 修复模拟器中无法使用鼠标拖动来滚动页面的问题；<p>**·** 修复部分系统下开发者工具图标显示异常的问题；<p>**·** 修复授权缓存无法清除的问题；<p>**·** 修复配置中 backgroundColor 没有生效的问题；<p>**·** 修复打开项目后项目列表未排序的问题；<p>**·** 修复模拟器中切换设备不会刷新的问题。|
|v1.7.3|**New**<p>**·** 支持API：chooseVideo/saveVideoToPhotosAlbum/getLocation/onAccelerometerChange/startAccelerometer/stopAccelerometer/onCompassChange/startCompass/stopCompass；<p>**·** 支持组件: web-view；<p>**·** 调试工具增加 Sensors 面板，用于模拟地址、加速度计和罗盘信息；<p>**·** 增加清除授权缓存功能。<p>**Change**<p>预览增加上传人及时间信息，增加错误信息提示。<p>**BugFix**<p>**·**  修复无 AppID 时无法登录成功的问题；<p>**·** 修复切后台时没有 onHide 事件的问题；<p>**·** 修复 picker 组件在重新编译后无法隐藏的bug；<p>**·**  修复 choseImage 返回文件路径错误的问题；<p>**·** 修复 getSwanId 的返回数据不正确问题。|
|v1.7.2 |**New**<p>**·** 更新工具栏图标；<p>**·**  支持API：recommendSimilarProducts/recommendProducts/setScreenBrightness/getScreenBrightness/setKeepScreenOn/vibrateLong/vibrateShort；<p>**·** 支持组件： open-data；<p>**·** 调试工具增加 Storages 和 App data 面板；<p>**·** 模拟器内  useragent 增加 swan 标识；<p>**·** 增加清除缓存功能。<p>**Change**<p> request 请求增加 referer，格式 `https://smartapp.baidu.com/{appkey}/devtools/page-frame.html`。<p>**BugFix**<p>**·** 优化调试工具通信时序，修复 Swan 面板偶现的白屏问题；<p>**·** 修改模拟器背景色为白色，保持和百度App一致；<p>**·** 修复历史工程排序不正确问题；<p>**·** 修复 video 无法播放问题；<p>**·** 修复切换 tab 后，进入任意页面后退无法点击问题。|
|v1.6.2 |**New**<p>video 组件增加 bind 事件支持。|
|v1.6.1 |**BugFix**<p>**·**  修复 swan.navigateTo 回调执行两次的错误；<p>**·** 修复请求参数被字段增加&字段的错误;<p>**·** 修复退回选择工程页面后选择其他工程卡死的错误;<p>**·** 修复调试器 Network、Swan 面板不稳定的问题。|
|v1.4.2 |**BugFix**<p>**·** 修复 input 组件的背景颜色和 placeholder 颜色问题；<p>**·** 修复 swan.request 回调函数的语法问题。| -->

<!-- ### 编译工具更新日志
|版本号|更新内容|
|----|----|
|v2.0.6|**New**<p>**·** 新增依赖分析编译模式;<p>**·** 增量编译，编译模式分为普通编译模式及依赖分析编译模式。<p>**BugFix**<p>**·** 解决单引号包含双引号，页面空白的问题；<p>**·** 修复动画失效的问题；<p> **·** 修复因引入filter功能从而影响页面渲染的问题；<p> **·** 自定义组件引用js，报模块未定义的bug。<p> **·** 模板命名问题。| -->
<!-- ## v1.9.0 更新日志
[New] 调试工具支持 android 下真机调试
[New] 编译支持自定义入口页面和参数
[New] 增加清除网络缓存功能
[BugFix] 修复执行hideTabBar方法后高度不对的问题
[BugFix] 修复设置缩放后模拟器显示异常的问题
[BugFix] 修复模拟器模拟android设置时swan api无法调用的问题

## v1.8.0 更新日志
[New] 支持组件: video/audio/backgroundAudio
[New] 发布支持自定义版本号
[New] 调试工具 Network 面板支持页面内图片的展示
[New] 增加版本更新提示
[Changes] 优化创建、选择工程的错误提示
[Changes] 新建工程界面增加新建文件夹的选项
[BugFix] 修复模拟器中无法使用鼠标拖动来滚动页面的问题
[BugFix] 修复部分系统下开发者工具图标显示异常的问题
[BugFix] 修复授权缓存无法清除的问题
[BugFix] 修复配置中 backgroundColor 没有生效的问题
[BugFix] 修复打开项目后项目列表未排序的问题
[BugFix] 修复模拟器中切换设备不会刷新的问题

## v1.7.3 更新日志
[New] 支持API：chooseVideo/saveVideoToPhotosAlbum/getLocation/onAccelerometerChange/startAccelerometer/stopAccelerometer/onCompassChange/startCompass/stopCompass
[New] 支持组件: web-view
[New] 调试工具增加 Sensors 面板，用于模拟地址、加速度计和罗盘信息
[New] 增加清除授权缓存功能
[Changes] 预览增加上传人及时间信息，增加错误信息提示
[BugFix] 修复无 AppID 时无法登录成功的问题
[BugFix] 修复切后台时没有 onHide 事件的问题
[BugFix] 修复 picker 组件在重新编译后无法隐藏的bug
[BugFix] 修复 choseImage 返回文件路径错误的问题
[BugFix] 修复 getSwanId 的返回数据不正确问题

## v1.7.2 更新日志
[New] 更新工具栏图标
[New] 支持API：recommendSimilarProducts/recommendProducts/setScreenBrightness/getScreenBrightness/setKeepScreenOn/vibrateLong/vibrateShort
[New] 支持组件： open-data
[New] 调试工具增加 Storages 和 App data 面板
[New] 模拟器内  useragent 增加 swan 标识
[New] 增加清除缓存功能
[Changes] request 请求增加 referer，格式 `https://smartapp.baidu.com/{appkey}/devtools/page-frame.html`
[BugFix] 优化调试工具通信时序，修复 Swan 面板偶现的白屏问题
[BugFix] 修改模拟器背景色为白色，保持和百度App一致
[BugFix] 修复历史工程排序不正确问题
[BugFix] 修复 video 无法播放问题
[BugFix] 修复切换 tab 后，进入任意页面后退无法点击问题

## v1.6.2 更新日志

[New] video 组件增加 bind 事件支持


## v1.6.1 更新日志

[BugFix] 修复 swan.navigateTo 回调执行两次的错误
[BugFix] 修复请求参数被字段增加&字段的错误
[BugFix] 修复退回选择工程页面后选择其他工程卡死的错误
[BugFix] 修复调试器 Network、Swan 面板不稳定的问题

## v1.4.2 更新日志

[BugFix] 修复 input 组件的背景颜色和 placeholder 颜色问题
[BugFix] 修复 swan.request 回调函数的语法问题 -->
