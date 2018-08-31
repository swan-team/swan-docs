---
title: 注册程序
header: develop
nav: framework
sidebar: app-service_register
---

App
---

<div class="notice">解释： </div>App() 函数用来注册一个智能小程序。接受一个 Object 作为参数，用以指定智能小程序的生命周期函数等。

**Object参数说明：**

|属性  |类型  |描述  |触发时机|
|---- | ---- | ---- |---- |
|onLaunch | Function | 生命周期函数-- 监听 SWAN 的初始化  | 当 SWAN 初始化完成时，会触发 onLaunch （全局只触发一次） |
|onShow | Function | 生命周期函数-- 监听 SWAN 的显示  | 当 SWAN 初始化，或从后台进入前台显示，会触发 onShow |
|onHide | Function | 生命周期函数-- 监听 SWAN 的隐藏  | 当 SWAN 从前台进入后台，会触发 onHide |
|其他 | Any |  | 开发者可以添加任意的函数或者数据到 Object 参数中, 用 this 可以访问 |


**<div class="notice">前台、后台定义：当用户点击左上角的关闭，或者按了设备的 Home 键离开智能小程序，智能小程序没有直接销毁，而是进入到了后台；当再次进入智能小程序，又会从后台进入前台。需要注意的是：只有当智能小程序进入后台一定时间，或者系统资源占用过高，才会被销毁 </div>**

**<div class="notice">示例： </div>**

```js
App({
    onLaunch: function (options) {
        // do something when launch
    },
    onShow: function (options) {
        // do something when show
    },
    onHide: function () {
        // do something when hide
    },
    globalData: 'global data'
});
```

onLaunch，onShow 参数

|字段  |类型  |说明  |
|---- | ---- | ---- |
|scene | Number | 打开智能小程序的场景值 |
|path|String|打开小程序的路径|
|query|Object|打开小程序的query|
|shareTicket|String|标记转发对象|
|referrerInfo|Object|当场景为由从另一个小程序或公众号或App打开时，返回此字段。|
|referrerInfo.appId|String|来源小程序或公众号或App的 appId。|
|referrerInfo.extraData|Objec|	来源小程序传过来的数据，scene=1037或1038时支持。|


getApp()
---
全局的 getApp() 函数可以用来获取到智能小程序实例。

**<div class="notice">示例： </div>**

```js
var appInstance = getApp()
console.log(appInstance.globalData)
```

**<div class="notice">注意： </div>**
1、App() 必须在 app.js 中注册，且不能注册多个。
2、不要在 App() 内的函数中调用 getApp() 函数，使用 this 就可以拿到 app 实例
3、不要在 onLaunch 中调用 getCurrentPages() ，此时，page 还没有生成
