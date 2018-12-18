
---
title: 微信小游戏
layout: gamedoc
categoryName: tutorials
topic: migrating
priority: 03-01
---

如果开发者想把在微信小游戏上运行的项目迁移到手百小游戏项目的话，首先我们需要准备：

1. 在[百度智能小程序平台](https://smartprogram.baidu.com/mappconsole/main/login)申请入驻
2. 微信小游戏项目工程代码
3. 下载百度开发者工具
4. 下载百度 App

### 迁移方法

1. 确认小游戏项目可以在微信开发者工具中正常运行。

2. 打开百度开发者工具。
![](/img/game/tutorials/transferimg00.png)

3. 点击开发者工具面板的新建按钮。
![](/img/game/tutorials/create.png)

4. 选择或创建一个空的文件夹作为项目目录，填写项目名称，项目类型选择**小游戏**，并填写**百度小游戏**的 AppID ，点击完成按钮。
![](/img/game/tutorials/fillin.png)

5. 打开刚刚创建的百度小游戏文件夹和原微信小游戏项目文件夹，将原微信小游戏目录中的文件整体复制**覆盖**到刚刚创建的百度小游戏文件夹中。

6. 在百度开发者工具打开目中的 `project.swan.json` 文件，在配置项中添加字段： `"projectOrigin": "weapp"`。

7. 对项目进行细节兼容修改。

8. 点击预览按钮后使用百度 App 进行扫码预览。

### 迁移过程中可能遇见的问题

1. 开放数据域 API 与微信存在差异，百度小游戏开放数据域会屏蔽所有非开放数据域 API ，详细内容请看[关系链数据使用指南](/tutorials/open-api/open-api/)。

2. 百度 App 没有群的概念，所以原项目中分享群的逻辑需要修改，具体查看[转发](/api/share/onShareAppMessage/)文档。

3. 登录逻辑和场景跟微信小游戏有差异，详情请看 [swan.login()](/api/openApi/login/#swan-login) 文档。

4. 支付逻辑的修改，详情请看[百度收银台](/api/openApi/requestPolymerPayment/#swan-requestPolymerPayment)文档。

5. Banner 广告和激励视频广告逻辑的修改，入驻流程文档和[ API 文档](/api/ad/bannerAd/)

### LayaAir引擎

1. LayaAir 1.7.20 & 2.0 beta3 版本，在 libs/laya.wxminmi.js 文件中 `MiniAdpter.window.wx.onMessage(MiniAdpter._onMessage);` 由于百度小游戏在主域不会暴露 `onMessage` 方法，故会报错。
**解决方法：**在引擎方没有做兼容的情况下，若项目中没使用开放数据域即可注释该行代码，如果使用开放数据域，则尽量不要使用新版 LayaAir IDE 的开放数据域组件。

2. index.js 中 `loadLib` 无法引入文件。
**解决方法：** 使用 `require` 替换 `loadLib` 方法。

3. 如果使用物理引擎的话，会报 `Can not find box2d libs`。
**解决方法：**将 libs/laya.physics.js 文件中的 `var box2d={b2Settings:{}}` 替换成 ` box2d={b2Settings:{}}`。

### 白鹭引擎

1. openDataContext/index.js 中调用 `swan.onTouchEnd()` 监听开放数据域中的点击事件报错，在百度小游戏的开放数据域中不能调用非开放数据域 API。
**解决方法：**将按钮画在主域，通过在主域中绑定的点击事件中 `postMessage` 到开放数据域来实现相关操作。

2. openDataContext/index.js 中调用 `swan.getSystemInfoSync()` 调用报错。
**解决方法：**在主域使用 `postMessage` 将系统信息发到开放数据域中使用。
