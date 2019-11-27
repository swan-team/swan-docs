---
title: 参数说明
header: develop
nav: framework
sidebar: app_service_page
---

 
 

**解释**：Page 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、页面事件处理函数、组件事件处理函数等。

**Object参数说明**：

|属性  |类型  |描述  |
|---- | ---- | ---- |
|data | Object | 页面的初始数据 |
|onLoad | Function | 页面的生命周期函数 -- 监听页面加载 |
|onShow | Function | 页面的生命周期函数 -- 监听页面显示 |
|onReady | Function | 页面的生命周期函数 -- 监听页面初次渲染完成 |
|onHide | Function | 页面的生命周期函数 -- 监听页面隐藏 |
|onUnload | Function | 页面的生命周期函数 -- 监听页面卸载 |
|onForceReLaunch|Function|页面的生命周期函数 -- 监听页面重启，单击右上角菜单栏<sup>注</sup>的重启按钮时触发|
|onPullDownRefresh | Function | 页面的事件处理函数 -- 监听用户下拉动作 |
|onReachBottom | Function | 页面的事件处理函数 -- 上拉触底事件的处理函数 |
|onShareAppMessage | Function | 页面的事件处理函数 -- 用户点击右上角转发 |
|onPageScroll | Function | 页面的事件处理函数 -- 页面滚动触发事件的处理函数 |
|onTabItemTap | Function | 页面的事件处理函数 -- 当前是 tab 页时，点击 tab 时触发 |
| onURLQueryChange | Function | 页面的事件处理函数 -- 监听页面 URL query 改变 |
|其他 | Any | 开发者可以添加任意的函数或数据到 object 参数中 |

**名词解释:**

菜单栏: 页面右上角获取菜单按钮（右上角胶囊按钮）中三个点的图标，点击会弹出菜单面板(包含: 分享、评价、重启小程序等功能)。

**示例代码**

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
    onPageScroll() {
        // do something when page scroll
    },
    onTabItemTap(item) {
        console.log(item.index);
        console.log(item.pagePath);
        console.log(item.text);
    },
    onURLQueryChange({newURLQuery, oldURLQuery}) {
        // do something when url query change
    },
    customData: {}
});
```








