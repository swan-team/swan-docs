
---
title: 登录资产证明
layout: gamedoc
categoryName: tutorials
topic: open_api
priority: 07-03
---


百度小游戏可以支持未登录情况下体验小游戏，所以我们为开发者提供了一套技术方案，来解决未登录到登录两种状态下的资产继承问题。


### 流程示意图

用户在未登录态到登录态前后的资产继承实现流程，请参考下图：

![](/img/game/tutorials/inherit.png)


### 流程说明

在用户进入游戏时，我们可以限制用户是否强制登录，如果该游戏是非强制登录，则会涉及登录后的资产继承问题。
调用 [swan.isLoginSync()](/game/api/openApi/login/#isLoginSync) 判断用户是否是登录状态，如果用户未登录，请使用 swanid 来标识数据（通过 [swan.getSwanId()](/game/api/openApi/login/#swan-getSwanId) 获取 swanid）；如果用户已登录，接下来请判断用户是否为首次登录。
判断用户是否为首次登录，如果不是，我们就继续使用用户 openid 来记录数据；如果是首次登录，我们就需要把用 swanid 标识的数据迁移到用户的 openid 上，同时注意把 swanid 标识的数据清除（否则可能存在刷号等风险），此后使用用户的 openid 记录用户的数据。
此后触发依赖登录的 API 时，用户授权登录后我们再回到判断是否为首次登录的步骤，再重新执行一遍下面的流程。

