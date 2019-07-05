### 开发者工具历史更新日志

#### 开发工具下载

下载最新版开发者工具（[Windows 64 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&type=online) | [Mac 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&type=online)）进行代码的开发和上传。

#### v2.4.2
**New Feature**
- 调用swan.login、swan.authorize、swan.getUserInfo三个API时，会在工具调试器中展示**接口使用规范**提示以及相关文档链接，方便用户查看这些接口最新的使用规范。

下载地址：（[Windows 64 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&type=online) | [Mac 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&type=online)）

#### v2.2.3
**New Feature**
- 小游戏支持本地广告调试
- 小游戏 API downloadFile & uploadFile 新增 offprogressUpdate (基础版本库需要 >= 1.7.2)


**Bug Fixed**

- 修复了发布小游戏 ESOCKETTIMEOUT 问题
- 修复小游戏欢迎页的项目 icon 不展示

下载地址：（[Windows 64 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&version=2.2.3&type=online) | [Mac 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&version=2.2.3&type=online)）

#### v2.2.2
**Bug Fixed**

- 修复了预览/发布含有分包加载功能的小游戏时，使用最新版安卓打开小游戏出现分包加载失败的问题
- 修复小游戏开放域接口 fail，报错“小程序标识不合法”的问题
- 修复了将 Cocos 项目修改为远程加载时，IDE 会卡死的问题
- 修复了发布小游戏 ESOCKETTIMEOUT 问题
- 修复了打开含 node_modules 的小游戏项目，编译会卡住的问题

下载地址：（[Windows 64 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&version=2.2.2&type=online) | [Mac 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&version=2.2.2&type=online)）


#### v2.2.1
**Bug Fixed**
- 修复小游戏分包加载
- 修复小游戏开放域 bug
- 修复小游戏 bdfile 网络加载问题
- 修复小游戏键盘问题
- 修复小游戏项目切换登陆状态问题

下载地址：（[Windows 64 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&version=2.2.1&type=online) | [Mac 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&version=2.2.1&type=online)）

#### v2.2.0
**New Feature**
- 新版开发者工具支持小游戏功能
- 支持 1.6.x 1.5.x 1.4.x 1.1.x 1.0.x 基础版本库调试
- 支持 worker 功能
- 保证交叉换量组件不报错（同广告组件）

下载地址：（[Windows 64 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&version=2.2.0&type=online) | [Mac 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&version=2.2.0&type=online)）

#### v1.15.3
**Bug Fixed**
- 修复了引用 swan-game-adapter 导致 onShow 方法使用失败问题。
- 兼容调试基础库 1.4.1 禁用 eval 的问题。

下载地址：（[Windows 64 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=windows&version=1.15.3&type=online) | [Mac 版下载地址](http://smartprogram.baidu.com/mappconsole/api/devDownload?system=mac&version=1.15.3&type=online)）

#### v1.15.2
**Bug Fixed**
- 修复了 webSocket 返回的 ArrayBuffer 被转为 Buffer 的问题。
- 修复了发布代码时，上传失败，无法关闭弹窗的问题。

#### v1.15.1
**New Feature**
- 新增登录状态保持功能，关掉开发者工具后登录状态不清除。

**Bug Fixed**
- 修复项目列表部分项目名不显示问题。
- 修复了 Windows 系统中，使用 unzip 无法正确将 zip 文件解压到目标文件夹的问题。
- 修复收银台样式。
- 修复分包加载，subPackages 字段和端不一致的问题。

#### v1.15.0
**New Feature**
- 新增端能力 getSwanId、isLoginSync 的支持（调试基础库 1.0.12 以上支持）
- 新增开放域 touch 事件支持 (调试基础库 1.0.12 支持)
- 新增模拟器自定义设备功能
- 新增 “更多功能 -> 编译日志” 查看功能
- 优化上传流程，可直接查看线上已提交版本
- 优化退出登陆（将用户的退出登陆移到用户登陆头像下）
- 优化版本升级提示
- 优化部分交互

#### v1.14.19
**New Feature**
- 新增小游戏 updateManager 相关端能力实现

**Bug Fixed**
- 修复分包后预览/上传包体积超过限制问题

#### v1.14.18
**New Feature**
- 新增小游戏真机调试、性能调优
- 优化小游戏预览、真机调试、性能调优的编译速度

#### v1.14.17
**New Feature**
- 开发者工具中支持小游戏
