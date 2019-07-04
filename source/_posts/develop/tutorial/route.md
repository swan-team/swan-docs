---
title: 页面路由
header: develop
nav: framework
sidebar: route
---

在小程序中所有页面的路由全部由框架进行管理。

## 页面栈

**解释**：框架以栈的形式维护了当前的所有页面。 当发生路由切换的时候，页面栈的表现如下：

**页面栈表现:**

|路由方式 |页面栈表现 |
|---- | ---- |
|初始化 |新页面入栈 |
|打开新页面	|新页面入栈 |
|页面重定向 |当前页面出栈，新页面入栈 |
|页面返回 |页面出栈 |
|Tab 切换 |页面全部出栈，只留下初始的 Tab 页面 |
|重加载 |页面全部出栈，只留下新的页面 |

**注意: 开发者可以使用 getCurrentPages() 函数获取当前页面栈。**

## 路由方式

对于路由的触发方式以及页面生命周期函数如下：

**[详见页面生命周期函数](https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0/)**

|路由方式 |触发时机 |路由前页面触发事件 |路由后页面触发事件 |
|---- | ---- | ---- | ---- |
|初始化 |智能小程序打开的第一个页面 | |onLoad, onShow |
|打开新页面 |调用 API [swan.navigateTo](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateTo/) 或使用组件 [`<navigator open-type="navigateTo"/>`](https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/) | onHide |onLoad, onShow |
|页面重定向 |调用 API [swan.redirectTo](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-redirectTo/) 或使用组件 [`<navigator open-type="redirectTo"/>`](https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/) | onUnload |onLoad, onShow |
|页面返回  |调用 API [swan.navigateBack](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateBack/) 或使用组件 [`<navigator open-type="navigateBack"/>`](https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/)或用户按左上角返回按钮 | onUnload |onShow |
|Tab 切换  |调用 API [swan.switchTab](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-switchTab/) 或使用组件 [`<navigator open-type="switchTab"/>`](https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/) 或用户切换 Tab | | 各种情况参考以下表 |
|重新启动  |调用 API [swan.reLaunch](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-reLaunch/) 或使用组件 [`<navigator open-type="reLaunch"/>`](https://smartprogram.baidu.com/docs/develop/component/nav/#navigator/) | onUnload | onLoad, onShow |

Tab 切换对应的生命周期（以 A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例）：

**生命周期函数详解**

|当前页面 |路由后页面 |触发的生命周期 |
|---- | ---- | ---- | ---- |
|A|A|Nothing happend|
|A|B|A.onHide(), B.onLoad(), B.onShow()|
|A|B（再次打开）| A.onHide(), B.onShow()|
|C|A|C.onUnload(), A.onShow()|
|C|B|C.onUnload(), B.onLoad(), B.onShow()|
|D|B|D.onUnload(), C.onUnload(), B.onLoad(), B.onShow()|
|D（从转发进入）|A|D.onUnload(), A.onLoad(), A.onShow()|
|D（从转发进入）|B|D.onUnload(), B.onLoad(), B.onShow()|

**注意**：
- navigateTo、redirectTo 只能打开非 tabBar 页面；
- switchTab 只能打开 tabBar 页面；
- reLaunch 可以打开任意页面；
- 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar；
- 调用页面路由带的参数可以在目标页面的 onLoad 中获取。
