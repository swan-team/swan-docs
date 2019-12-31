---
title:  路由方式
header: develop
nav: framework
sidebar: app_service_routestyle
---

对于路由的触发方式以及页面生命周期函数如下：

** [详见页面生命周期函数](/develop/framework/app_service_pagelife/) **

|路由方式 |触发时机 |路由前页面触发事件 |路由后页面触发事件 |
|---- | ---- | ---- | ---- |
|初始化 |智能小程序打开的第一个页面 | |onLoad, onShow |
|打开新页面 |调用 API [swan.navigateTo](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-navigateTo/) 或使用组件 [`<navigator open-type="navigateTo"/>`](/develop/component/nav/) | onHide |onLoad, onShow |
|页面重定向 |调用 API [swan.redirectTo](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-redirectTo/) 或使用组件 [`<navigator open-type="redirectTo"/>`](/develop/component/nav/) | onUnload |onLoad, onShow |
|页面返回  |调用 API [swan.navigateBack](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-navigateBack/) 或使用组件 [`<navigator open-type="navigateBack"/>`](/develop/component/nav/)或用户按左上角返回按钮 | onUnload |onShow |
|Tab 切换  |调用 API [swan.switchTab](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-switchTab/) 或使用组件 [`<navigator open-type="switchTab"/>`](/develop/component/nav/) 或用户切换 Tab | | 各种情况参考以下表 |
|重新启动  |调用 API [swan.reLaunch](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-reLaunch/) 或使用组件 [`<navigator open-type="reLaunch"/>`](/develop/component/nav/) | onUnload | onLoad, onShow |

**代码示例**

<a href="swanide://fragment/5437bf2c6384f30a813c5a336d0442e11577779221377" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

> 详细示例建议在开发者工具中的控制台查看。


Tab 切换对应的生命周期（以 A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例）：

** 生命周期函数详解 **

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

**代码示例（情况全集）**

<a href="swanide://fragment/7a8c197594e4bdfae18379516ebfe7071577788894937" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

> 建议在开发者工具中的控制台查看，查看时需要注意以下几点，1、再次打开B页面为切换PageA再打开PageB。2、工具与真机略有差异，以真机的生命周期为准。3、以上示例会有访问过页面不触发onLoad，建议在以下示例中预览。

**代码示例（A -> A）**

<a href="swanide://fragment/81bae62aadf651ba19aaa15e72bcc9881577789213316" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```xml
<!-- 在pageA.swan中 -->
<button class="item-scroll" bind:tap="switchTabA">
    打开PageA
</button>

 <!-- 在pageA.js中 -->
switchTabA() {
    swan.switchTab({
        url: '/PageA/PageA'
    });
}
```

**代码示例（A -> B）**

<a href="swanide://fragment/e705c10e19b18a375681128d2550a68c1577789424190" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


**代码示例（C -> A）**

<a href="swanide://fragment/eedb1a74987cbc8a5ea65875ccc883461577789598111" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


**代码示例（C -> B）**

<a href="swanide://fragment/d26582b968f42d256fd92583c35806c01577789765204" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


**代码示例（D -> B）**

<a href="swanide://fragment/502ca5dc2742ef1348d44b24e3a1023a1577785740402" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**代码示例（D -> A）：从转发进入即回流到D页面，示例用D页面为首页做模拟。**

<a href="swanide://fragment/60af3e1965cc6e173d505fa8f12a37cc1577786146899" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**代码示例（D -> B）：从转发进入即回流到D页面，示例用D页面为首页做模拟。**

<a href="swanide://fragment/2f76fe1b164c5bb5858dd1f21e201bfd1577786108967" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


**注意**：
- navigateTo、redirectTo 只能打开非 tabBar 页面；
- switchTab 只能打开 tabBar 页面；
- reLaunch 可以打开任意页面；
- 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar；
- 调用页面路由带的参数可以在目标页面的 onLoad 中获取。
