
---
title: 基础库更新日志
layout: gamedoc
categoryName: tutorials
topic: version
priority: 04-04
---

<!--

todo 11.6.0 客户端发版后再开放

#### v 1.5.2
1. `feat` 新增交叉推荐 API createRecommendationButton
2. `feat` 新增 API 加速计、屏幕、罗盘、剪切板、saveImageToPhotosAlbum

-->

随着小游戏不断支持更多的功能，旧版本的客户端可能会出现不支持新增功能的情况，因此在使用新增功能时需要关注基础库版本的更新日志，并根据实际情况来决定是否做兼容性处理。

**说明：**
1. 客户端和基础库的版本映射关系见 [客户端版本映射](/game/tutorials/version/clientVersion/)。
2. 版本兼容方案见 [小游戏版本兼容](/game/tutorials/version/compatibility/)。

#### v 1.4.4
无对外功能

#### v 1.4.1
1. `Feature` 新增录屏 API [getVideoRecorderManager](/game/api/media/videoRecorder/#swan-getVideoRecorderManager)
2. `Feature` 新增分享 API [shareVideo](/game/api/share/shareVideo/)
3. `Bug Fix` 禁掉 eval 和 Function

#### v 1.1.1
1. `Feature` 新增 API [getSwanId](/game/api/openApi/login/#swan-getSwanId)、[isLoginSync](/game/api/openApi/login/#isLoginSync)，可用于实现[资产继承](/game/tutorials/open_api/open-inherit/)

#### v 1.0.12
1. `Bug Fix` 在 [触摸事件](/game/api/system/touchEvents/) API 回调参数的 touches 中的每项增加 target 对象，同外层的 target 对象
2. `Feature` 新增帧率 API [setPreferredFramesPerSecond](/game/api/render/framerate/)
3. `Feature` 新增客服消息 API [openCustomerServiceConversation](/game/api/openApi/customerService/)

#### v 1.0.14
1. `Feature` 新增 API [getSwanId](/game/api/openApi/login/#swan-getSwanId)、[isLoginSync](/game/api/openApi/login/#isLoginSync)，可用于实现[资产继承](/game/tutorials/open_api/open-inherit/)

#### v 1.0.11
1. `Feature` 开放域中新增计时器方法 [console.time](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/time) 和 [console.timeEnd](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/timeEnd) 的支持
2. `Feature` sConsole 优化，支持 console 多个数据

#### v 1.0.10
1. `Feature` 优化 webSocket 和 request 性能

