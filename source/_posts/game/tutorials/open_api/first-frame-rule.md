
---
title: 交互类开放接口使用规则
layout: gamedoc
categoryName: tutorials
topic: open_api
priority: 07-04
---

用户在使用交互类接口时，不要把游戏首帧（首屏）渲染操作放在交互接口的回调函数中。

### 背景
很多小游戏在首帧绘制之前调用登录、授权相关交互类 API ，且如果授权不成功，则将无限循环弹框或者一直停留在游戏加载页面。所以这种操作严重影响了用户体验和游戏的到达率。

常用的交互类开放接口 ：
- [swan.login()](/game/api/openApi/login/#swan-login)
- [swan.authorize()](/game/api/openApi/authorize/#swan-authorize)
- [swan.getUserInfo()](http://localhost:4000/docs/game/api/openApi/openData/#swan-getUserInfo)

### 典型使用场景

**以 `swan.login` API 为例：**
如果在游戏场景 load 之前调用 `swan.login` 接口，并将渲染逻辑放在 `swan.login` 的 `success` 回调中。在用户未登录的情况下，会在加载页面自动拉起登录页，此时如果用户点击右上角的关闭按钮后将会一直停留在游戏加载的页面中。
如图所示：
![](/img/game/tutorials/first-frame.gif)

**错误的代码示例：**

> 将加载首场景逻辑放在 `swan.login` 的成功回调中。

```js
    swan.login({
        success: res => {
            // load scene
            cc.director.loadScene('首场景');  // cocos
            // _this.loadScene("首场景"); // laya
            // 其他首帧渲染操作
        }
    })
```

**正确的代码示例：**

```js
    // cocos 形式不固定，放在场景加载完成的回调函数中，或放在 onLoad/start 生命周期回调中也是没问题的。
    cc.director.loadScene('首场景', () => {
        swan.login({
            success: res => {
                // ...
            }
        })
    });

    // 其他游戏引擎同理
```

