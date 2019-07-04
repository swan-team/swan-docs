---
title: 注册页面
header: develop
nav: tutorial
sidebar: registerpage
---


对于小程序中的每个页面，都需要在页面对应的 js 文件中调用 Page 方法注册页面示例，指定页面的初始数据、生命周期回调、事件处理函数等。

详细的参数含义和使用请参考[注册页面](https://smartprogram.baidu.com/docs/develop/framework/app_service_page/) 。

**示例**

```js
// page.js
Page({
    data: {
        text: 'init data'
    },
    onLoad(options) {
        // do something when page load
    },
    onReady() {
        // do something when page ready
    },
    onShow() {
        // do something when page show
    },
    onHide() {
        // do something when page hide
    },
    onUnload() {
        // do something when page unload
    },
    onForceReLaunch() {
        // do something when page force reLaunch
    },    
    onPullDownRefresh() {
        // do something when pull down
    },
    onReachBottom() {
        // do something when page reach bottom
    },
    onShareAppMessage() {
        // return custom share data
    },
    onPageScroll: function () {
        // do something when page scroll
    },
    onTabItemTap(item) {
        console.log(item.index);
        console.log(item.pagePath);
        console.log(item.text);
    },
    customData: {}
});
```

除了 Page ，作为高级用法，页面可以像自定义组件一样使用 Component 来创建，这样就可以使用自定义组件的特性，如 behaviors 等。

具体细节请阅读 [Component](==TODO==) 构造器 章节。