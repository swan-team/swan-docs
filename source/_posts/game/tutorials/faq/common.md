---
title: 小游戏常见问题
layout: gamedoc
categoryName: tutorials
topic: faq
priority: 12-01
---

### 前提
文档地址：https://smartprogram.baidu.com/docs/game/
开发前请务必查看**"介绍"**和**"教程"**的所有文档，详细了解小游戏开发的相关规范及教程，可以避免遇到一些常见的问题，在开发中达到事半功倍的效果哦。

### 自我排查指南
遇到问题后初步自我排查指南如下：
1. 开发者工具版本是否过于陈旧？
请更新为最新版本工具。点击查看：[工具更新日志及下载地址](/game/tutorials/devtools/uplog/)

2. 百度 APP 版本是否过于陈旧？
请在应用商店将百度 APP 更新为最新版本。

3. 开发者工具是否确认打开的是小游戏项目？
确认方式：查看项目根目录下的 project.swan.json 文件，其中标识编译类型的字段 `compileType` 应该为 `game` 。
若不是小游戏项目，则修改 project.swan.json 后，重新 **打开** 该项目目录。注意是要重新打开，而不是点击**最近编辑**中的项目。

> `project.swan.json` 是用于保存开发者工具的配置项的文件。
开发者工具为小程序和小游戏共用。开发者工具打开项目时，会读取 `project.swan.json` 配置。如果不存在此文件，则默认为打开的是小程序项目，并且给该项目生成一个配置内容为小程序的 `project.swan.json` 文件。
修改 `project.swan.json` 文件后，需要关闭该项目，重新**打开**该项目目录才会生效。

4. 所参考的文档是否确认是小游戏的文档？
小游戏的文档根目录为 https://smartprogram.baidu.com/docs/game/ 注意 docs 后面一定要有 `/game/`。

5. 是否确认注册 AppId 时选择的**“服务类目”**是 **“小游戏”** ？
确认方式：从智能小程序首页进入“管理中心”，查看对应小游戏的服务类目是否是 “游戏 | xxx”。
注意左侧大类目必须是游戏。如不是则需要重新[创建小游戏](http://smartprogram.baidu.com/docs/game/introduction/prerare/register_consummate/)。
创建小游戏时，如果仍然需要用之前注册的小游戏名称，会遇到重名问题，此时进入之前注册的小游戏的**设置**，修改其名称为其他名称即可。

6. 查看开发者工具控制台或者真机 sConsole（打开方式见[sConsole文档](https://smartprogram.baidu.com/docs/game/tutorials/devtools/smartappdebug/#sConsole)），是否有 Javascript 运行报错？
若有报错信息，则根据报错信息继续排查。

### 常见问题 Q&A

#### 开发者工具

Q：开发者工具一直显示在编译，看不到日志？
A：点击右上角 “更多功能” -> “编译日志”，查看是否编译错误。

Q：使用 socket 连接必须使用 wss 吗？
A：开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名。

Q: 预览/真机调试，上传失败？
A：请确认小游戏代码包体积是否超过[包大小限制](/game/tutorials/subpackages/sub/#包大小限制)。如果超出限制，一般在预览弹窗会有提示“主包超限”。
如无提示，请用抓包工具抓包查看 `smartprogram.baidu.com` 的请求和返回，查看请求的包体积、或者返回错误信息。

Q：在开发者工具中，新建小游戏（点击“新建”->“小游戏”），打开的是一个游戏 demo，而不是一个空项目？
A：如果选择新建小游戏项目，则新建的小游戏项目默认带一个小游戏 demo，用以快速创建项目以及帮助理解开发者工具的小游戏项目结构。注意新建小游戏项目时需选择一个空目录；
如果需要打开已有小游戏项目，请点击“打开”，选择对应游戏目录即可；
如果需要打开一个曾打开过的小游戏项目，可直接在“最近编辑”的项目列表中，选择该项目点击即可。

Q：在开发者工具中，调用广告相关 API 后，没有反应。控制台提示当前版本不支持广告调试？
A：如控制台的警告所描述，IDE 不支持广告调试，广告请在真机上调试。

Q: 开发者工具支付 API `swan.requestPolymerPayment` 报错方法不存在？
A：请确认在模拟器选择的平台是 Android 还是 iPhone，请选择 Android 机型进行调试。
目前在 iPhone 真机中暂不支持支付功能，因此在开发者工具中，使用 iPhone 机型的模拟器调试时，暂无此 API。

Q：在开发者工具中，支付弹窗会超出一屏，显示在下一屏上？
A：已在开发者工具 1.15.1 版本修复，请更新开发者工具。

#### 真机
Q：如何在手机上查看调试信息？
A：小游戏支持使用 sConsole 查看 console API 输出的日志内容，也支持真机调试，详见文档中的工具[调试章节](/game/tutorials/devtools/smartappdebug/)。

Q：真机调试时，小游戏一直停留在加载中界面，无法进入？
A：真机调试默认把游戏暂停在游戏开头。在“真机调试窗口”的 Sources 面板中可以看到游戏被暂停在第一行代码。
也可能是使用了不存在的变量，如：window、document 等，程序抛出错误，请在控制台检查。

Q：真机预览时，小游戏一直停留在加载中界面，无法进入？
A：请确认创建小游戏时选择的服务类目是否是小游戏？如果不是，请重新创建。参考上述 [自我排查指南](./#自我排查指南)第 5 点。

Q：真机请求出现跨域问题？
A: 真机会对请求的协议进行校验，会拦截 http 协议。详见[网络注意事项](/game/tutorials/network/careful/)
如果使用 https 协议，仍有跨域问题，请确认是否用了非默认值的端口号。Android 会对端口号校验，非 443 端口则会被拦截。（Android 会在 11.5 版本中去掉关于端口号的限制。）

Q：分包加载失败？
A：请确认是否在  game.json 中正确配置了 `subpackages` 字段；调用下载分包 API 时，注意单词 `loadSubpackages` 的大小写拼写，区别于小程序的该同名 API。

Q：真机用 unzip 解压后，解压的文件找不到？
A：如 unzip 的 API 文档和示例所描述，传递给 unzip 的源文件和目标目录必须在用户目录（`${swan.env.USER_DATA_PATH}`）下。

Q：对接广告、激励视频的参数 adUnitId 和 appSid 分别填什么？
A：请详细阅读广告 API 参数说明中提到的[流量主开通指导文档](https://smartprogram.baidu.com/docs/game/introduction/flow_open/guide/)。adUnitId 和 appSid 分别对应于 Mssp 平台的代码位 ID 和所属应用 ID。

Q：在真机无法调起百度收银台支付？
A：需要确认签名是否正确，请详细阅读 `requestPolymerPayment`API 中提到的的[签名与验签文档](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/sign_v2.md)。

Q：在真机调起支付后，在点击付款的时候提示签名错误，验签一直不通过？
A：确认选择的公钥是否是平台公钥。从百度电商开放平台后台能看到两个公钥，一个是开发者公钥，另一个是平台公钥，验签需要用平台公钥。参见[百度电商开发平台核心参数获取](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/mini_program_cashier/parameter.md)。
此外，其他环节也可能导致验签错误，请认真阅读 [`requestPolymerPayment`](/game/api/openApi/requestPolymerPayment/#swan-requestPolymerPayment) 中涉及到的文档。

Q：授权用户信息，如果用户取消授权后，再次发起授权，直接进入 fail 回调？
A：目前，小游戏的用户信息权限没有重试机制。如果用户拒绝授权，用户只能手动在“右上角菜单-关于-右上角菜单-权限管理” 重新打开。

Q：Android 分包加载失败？
A：已知低版本 Android 问题，由于 Android 的路径原因，会导致分包加载失败。已在 Android 11.5 上修复。

Q：为什么 iOS 键盘无法弹出？
A：使用 Laya 引擎游戏的已知问题，将 Laya 引擎更新至 2.0.0 以上版本问题即可解决。

Q：为什么 iOS 未登录状态下打开横屏游戏，调用登录、授权接口偶现画面半屏？
A：iOS 已知问题，修复中。建议开发者先渲染游戏画面，待游戏画面出现后，提供交互按钮给用户点击，再调用登录接口。

Q：为什么 iOS 使用 UpdateManger.applyUpdate 接口后，部分游戏的加载进度条卡住？
A：百度App 11.3.5 版本修复了该问题，若要在低版本使用该接口，需在各机型尤其是低端机上测试通过后再使用，或在收到 UpdateManager.onUpdateReady 回调后，引导用户退出重新进入。

Q：为什么 iOS 使用 UpdateManager.applyUpdate 后，游戏无法更新？
A：部分游戏上会出现该问题。在新版本基础库上修复，详见[基础库更新日志](https://smartprogram.baidu.com/docs/game/tutorials/version/releaseLog/)。低版本在收到 UpdateManager.onUpdateReady 回调后，可引导用户退出重新进入。

Q：为什么 iOS 无法使用支付相关 API？
A：由于苹果政策限制，支付相关 API 在 iOS 上无法使用。

Q：为什么 iOS 的 swan.onTouchStart 无法响应？
A：百度 App 11.3.6 之前的版本已知问题， iPhone 屏幕左侧 1/5 概率性无法响应 swan.onTouchStart 事件，新版本修复。老版本可绕过该区域触摸或者监听其他触摸事件。

Q：为什么 iOS 分包加载回调成功，但却加载失败？
A：百度 App 11.3.6 之前版本已知问题，新版本修复，老版本可将 LoadSubpackageTask 对象挂在某个全局对象上增加引用，不让其释放，待分包加载完成后再减少引用，释放对象。

Q：为什么 swan.request 接口，调用失败的时候，无法获取到 HTTP status code？
A：百度 App 11.6.0 版本增加网络请求失败时的 HTTP status code，之前版本只能获取请求成功的 HTTP status code。

Q：为什么调用 swan.getUserInfo 接口，用户点击拒绝之后，无法再次弹出授权框？
A：该接口的设计既是如此，删除历史包后会重置授权状态。如一定要使用该 API，可在授权失败后，引导用户在权限管理中主动打开。不过强烈建议使用 UserInfoButton，这样用户点击拒绝之后，可通过点击按钮再次弹出授权框。

Q：如何获取百度 App 版本、基础库版本信息？
A：在关于页面中快速点击 5 次游戏图标，即可在弹出的 toast 中看到。
