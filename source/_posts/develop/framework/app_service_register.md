---
title: 注册程序
header: develop
nav: framework
sidebar: app_service_register
---

## App


**解释**： App() 函数用来注册一个智能小程序。接受一个 Object 作为参数，用以指定智能小程序的生命周期函数等。

**Object参数说明：**

|属性  |类型  |描述  |触发时机|
|---- | ---- | ---- |---- |
|onLaunch | Function | 生命周期函数-- 监听 SWAN 的初始化  | 当 SWAN 初始化完成时，会触发 onLaunch （全局只触发一次） |
|onShow | Function | 生命周期函数-- 监听 SWAN 的显示  | 当 SWAN 初始化，或从后台进入前台显示，会触发 onShow |
|onHide | Function | 生命周期函数-- 监听 SWAN 的隐藏  | 当 SWAN 从前台进入后台，会触发 onHide |
|onError|	Function|	错误监听函数|	小程序发生脚本错误，或者 api 调用失败时触发，会带上错误信息。|
|onPageNotFound|	Function|	页面不存在监听函数|	小程序要打开的页面不存在时触发，会带上页面信息回调该函数。|
|其他 | Any |   开发者可以添加任意的函数或者数据到 Object 参数中, 用 this 可以访问 |-|


**前台、后台定义：当用户点击右上角的关闭，或者按了设备的 Home 键离开智能小程序，智能小程序没有直接销毁，而是进入到了后台；当再次进入智能小程序，又会从后台进入前台。需要注意的是：只有当智能小程序进入后台一定时间，或者系统资源占用过高，才会被销毁 **

**示例**

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

onLaunch 参数

|字段  |类型  |说明  |
|---- | ---- | ---- |
|scene | String | 打开智能小程序的<a href="http://smartprogram.baidu.com/docs/data/scene/">场景值 |
|path|String|打开小程序的路径|
|query|Object|打开小程序的query|
|shareTicket|String|标记转发对象|
|referrerInfo|Object|当场景为由从另一个小程序打开时，返回此字段。|
|referrerInfo.appId|String|来源小程序的 appKey。|
|referrerInfo.extraData|Object|	来源小程序传过来的数据，scene=1037或1038时支持。|

onShow 参数

|字段  |类型  |说明  |最低版本|
|---- | ---- | ---- |---|
|scene | String | 打开智能小程序的<a href="http://smartprogram.baidu.com/docs/data/scene/">场景值 |-|
|path|String|打开小程序的路径|-|
|query|Object|打开小程序的query|-|
|shareTicket|String|标记转发对象|-|
|referrerInfo|Object|当场景为由从另一个小程序打开时，返回此字段。|-|
|referrerInfo.appId|String|来源小程序的 appKey。|-|
|referrerInfo.extraData|Object|	来源小程序传过来的数据，scene=1037或1038时支持。|-|
|entryType|String|展现的来源标识，取值为 user/ schema /sys :<br>user：表示通过home前后台切换或解锁屏幕等方式调起；<br>schema：表示通过协议调起;<br>sys：其它。|2.10.7|
|appURL| String|展现时的调起协议，仅当entryType值为 schema 时存在。|2.10.7|


<div class="m-doc-custom-examples">
<div class="m-doc-custom-examples-warning">
    <p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text"><ul><li>在解析 query 的时候，基础库会使用decodeURIComponent对query的参数值进行一次解码，该功能将在新的版本中下线。</li><li>如在打开或跳转小程序时传递了 encode 后的值作为参数，为避免发生页面错误，使用时请自行将拿到的值使用decodeURIComponent进行一次decode操作。</li></ul></p>
</div>
</div>

## getApp

全局的 getApp 函数可以用来获取到智能小程序实例。

**示例**

```js
var appInstance = getApp()
console.log(appInstance.globalData)
```
<div class="m-doc-custom-examples">
<div class="m-doc-custom-examples-warning">
    <p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text"><ul><li>App() 必须在 app.js 中注册，且不能注册多个。</li><li>不要在 App() 内的函数中调用 getApp() 函数，使用 this 就可以拿到 app 实例。</li><li>不要在 onLaunch 中调用 getCurrentPages() ，此时，page 还没有生成。</li></ul></p>
</div>
</div>