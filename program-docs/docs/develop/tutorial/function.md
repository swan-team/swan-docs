---
title: 页面路由
header: develop
nav: tutorial
sidebar: function
---


### 页面栈

框架以栈的形式维护了当前的所有页面。 当发生路由切换的时候，页面栈的表现如下：

|路由方式|页面栈表现|
|----|----|
|初始化|新页面入栈|
|打开新页面|新页面入栈|
|页面重定向|当前页面出栈，新页面入栈。|
|页面返回|页面不断出栈，直到目标返回页。|
|Tab 切换|页面全部出栈，只留下新的 Tab 页面。|

### getCurrentPages()

getCurrentPages() 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。

**代码示例**

<a href="swanide://fragment/be265192b32b09af4deb17093bfb73cb1576048350631" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

> 页面切换路径过多，详细示例请在开发者工具中的控制台查看。


<div class="notice"> Tip： </div> 不要尝试修改页面栈，会导致路由以及页面状态错误。<text></text>
<br/>

### 路由方式

对于路由的触发方式以及页面生命周期函数如下：

|路由方式|触发时机|路由前页面|路由后页面|
|----|----|----|----|
|初始化|智能小程序打开的第一个页面|   | onLoad, onShow |
|打开新页面|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-navigateTo/">swan.navigateTo</a> 或使用<a href="/develop/component/nav/">组件</a> < navigator open-type="navigateTo"/ > | onHide | onLoad, onShow |
|页面重定向|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-redirectTo/">swan.redirectTo</a> 或使用<a href="/develop/component/nav/">组件</a> < navigator open-type="redirectTo"/ > | onUnload | onLoad, onShow |
|Tab 切换	|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-switchTab/">swan.switchTab</a> 或使用<a href="/develop/component/nav/">组件</a> < navigator open-type="switchTab"/ > 或用户切换 Tab |    | 各种情况请参考下表 |
|页面返回	|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-navigateBack/">swan.navigateBack</a> 或使用<a href="/develop/component/nav/">组件</a> < navigator open-type="navigateBack"/ > 或用户按左上角返回按钮 | onUnload | onShow |
|重启动	|调用 API <a href="https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-reLaunch/">swan.reLaunch</a> 或使用<a href="/develop/component/nav/">组件</a> < navigator open-type="reLaunch"/ > | onUnload | onLoad, onShow |

Tab 切换对应的生命周期（以 A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例）：

|当前页面|路由后页面|触发的生命周期（按顺序）|
|----|----|----|
|A     |A     | Nothing happend |
|A     |B     | A.onHide(), B.onLoad(), B.onShow() |
|A     |B（再次打开） | A.onHide(), B.onShow() |
|C     |A     | C.onUnload(), A.onShow() |
|C     |B     | C.onUnload(), B.onLoad(), B.onShow() |
|D     |B     | D.onUnload(), C.onUnload(), B.onLoad(), B.onShow() |
|D（从转发进入）|A     | D.onUnload(), A.onLoad(), A.onShow() |
|D（从转发进入）|B     | D.onUnload(), B.onLoad(), B.onShow() |

**说明**:
* navigateTo, redirectTo 只能打开非 tabBar 页面。
* switchTab 只能打开 tabBar 页面。
* reLaunch 可以打开任意页面。
* 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
* 调用页面路由带的参数可以在目标页面的 onLoad 中获取。


