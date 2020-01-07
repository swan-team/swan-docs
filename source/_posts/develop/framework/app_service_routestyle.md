---
title:  路由方式
header: develop
nav: framework
sidebar: app_service_routestyle
---

对于路由的触发方式以及页面生命周期函数如下：

**[详见页面生命周期函数](/develop/framework/app_service_pagelife/)**

|路由方式 |触发时机 |路由前页面触发事件 |路由后页面触发事件 |
|---- | ---- | ---- | ---- |
|初始化 |智能小程序打开的第一个页面 | |onLoad, onShow |
|打开新页面 |调用 API [swan.navigateTo](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-navigateTo/) 或使用组件 [`<navigator open-type="navigateTo"/>`](/develop/component/nav/) | onHide |onLoad, onShow |
|页面重定向 |调用 API [swan.redirectTo](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-redirectTo/) 或使用组件 [`<navigator open-type="redirectTo"/>`](/develop/component/nav/) | onUnload |onLoad, onShow |
|页面返回  |调用 API [swan.navigateBack](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-navigateBack/) 或使用组件 [`<navigator open-type="navigateBack"/>`](/develop/component/nav/)或用户按左上角返回按钮 | onUnload |onShow |
|Tab 切换  |调用 API [swan.switchTab](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-switchTab/) 或使用组件 [`<navigator open-type="switchTab"/>`](/develop/component/nav/) 或用户切换 Tab | | 各种情况参考以下表 |
|重新启动  |调用 API [swan.reLaunch](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-reLaunch/) 或使用组件 [`<navigator open-type="reLaunch"/>`](/develop/component/nav/) | onUnload | onLoad, onShow |

Tab 切换对应的生命周期（以 A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例）：

** 生命周期函数详解 **

|当前页面 |路由后页面 |触发的生命周期 |备注|
|---- | ---- | ---- | ---- |
|A|A|Nothing happend| 默认小程序打开时已经触发了A.onLoad,此时没有事件触发|
|A|B|A.onHide(), B.onLoad(), B.onShow()| 路径A->B，B第一次打开，触发onLoad|
|A|B（再次打开）| A.onHide(), B.onShow()| 路径A->B->x(任意页面)->B，B再次打开，不再触发onLoad，直接触发onShow|
|C|A|C.onUnload(), A.onShow()| 路径A->C->A，C页面销毁触发onUnLoad，A第二次打开触发onShow|
|C|B|C.onUnload(), B.onLoad(), B.onShow()|路径A->C->B，C页面销毁触发onUnLoad，B第一次创建触发onLoad|
|D|B|D.onUnload(), C.onUnload(), B.onLoad(), B.onShow()|路径A->C->D->B，D和C页面依次销毁触发onUnLoad，B第一次创建触发onLoad|
|D（从转发进入）|A|D.onUnload(), A.onLoad(), A.onShow()|路径D->A，D页面销毁触发onUnLoad，A第一次创建触发onLoad|
|D（从转发进入）|B|D.onUnload(), B.onLoad(), B.onShow()|路径D->B，D页面销毁触发onUnLoad，B第一次创建触发onLoad|

**注意**：
- navigateTo、redirectTo 只能打开非 tabBar 页面；
- switchTab 只能打开 tabBar 页面；
- reLaunch 可以打开任意页面；
- 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar；
- 调用页面路由带的参数可以在目标页面的 onLoad 中获取。
