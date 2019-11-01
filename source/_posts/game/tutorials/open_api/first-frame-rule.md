
---
title: 登录、授权、获取用户信息接口使用规范
layout: gamedoc
categoryName: tutorials
topic: open_api
priority: 07-04
---

### 背景
在实际使用场景中，我们发现：很多小游戏在首帧绘制之前调用登录、授权相关交互类 API，在用户还没看到游戏画面的情况下，很多用户就会选择拒绝登录授权等操作从而导致无限循环弹框或者一直停留在游戏加载页面，打断了用户正常玩游戏的流程。这种操作会严重影响用户体验和游戏的转化率。

常用的交互类开放接口 ：
- [swan.login()](/game/api/openApi/login/#swan-login)
- [swan.authorize()](/game/api/openApi/authorize/#swan-authorize)
- [swan.getUserInfo()](/game/api/openApi/openData/#swan-getUserInfo)


### 如何合理使用获取用户信息能力

#### ** a. 游客模式 **
若游戏为非强登录游戏，开发者可以先通过 `swan.isLoginSync` 接口来判断登录状态，若用户当前已登录手百，就可以使用真实的用户信息，若未登录，可以通过 `swan.getSwanId` 接口获取用户设备标识来关联用户。如果在游客模式下需要获取用户昵称、头像等信息，可在游戏绘制完成后，直接调用 `swan.getUserInfo` 接口或使用 `userInfoButton` 按钮获取模拟用户信息。

#### ** b. 通过点击事件调用 **
若正常游戏需要登录操作，开发者可以在类似开始游戏的按钮上加 `swan.login` 逻辑，并提示用户登录后开始游戏的信息。也可以在游戏进入某些特定场景后进行登录操作。如：支付场景、个人中心等。这样可提升用户体验和增加用户留存。

#### ** c. 不要将加载首场景逻辑放在登录的回调中 **
有些强登录游戏，将绘制元素逻辑（如将 Sprite，Label 等元素在上屏渲染时添加到舞台上）放在交互类 API 的回调中。在用户未确认的情况下，会在加载页面自动拉起交互界面，此时如果用户关闭弹出的交互页面将有可能一直停留在游戏加载的页面中，无法进入正常的游戏流程。
以 `swan.login` 为例：
将 loadScene 加载首场景操作放在 `swan.login` 成功回调中，所产生的错误效果。

![](/img/game/tutorials/first-frame.gif)

#### ** d. 友好的提示文案 **
若使用 `swan.login` [示例2](/game/api/openApi/login/#swan-login)的递归方式强制用户登录的话，尽量要用 `show.showModal` 或者 `swan.showToast` 来提示用户，让用户选择是否选择登录。避免一直循环来询问用户是否登录。


