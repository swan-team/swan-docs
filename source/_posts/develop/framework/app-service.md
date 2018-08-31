---
title: 逻辑层
header: develop
nav: framework
sidebar: app-service
---

智能小程序的逻辑层使用 JavaScript 编写。
逻辑层将数据进行处理后发送给视图层，同时接受视图层的反馈。
在 JavaScript 的基础上，我们提供了一些框架方法。
1、提供了 [App](#注册程序) 和 [Page](#注册页面) 方法
2、提供了 getApp 和 getCurrentPages 方法，分别用来获取 App 实例和当前页面栈
3、提供了丰富的 API ，如扫一扫，ocrIdCard 等智能小程序能力
4、每个页面有独立的 [作用域](#文件作用域) ，并提供 [模块化](#模块化)
5、框架本身并非运行在浏览器中，所以 JavaScript 在 Web 中的一些能力都无法使用，如 document , window 等
6、开发者写的所有代码，最终会被打包成一份 JavaScript ，并在智能小程序启动时运行，直到智能小程序销毁。

详细内容请参看<a href="https://smartprogram.baidu.com/docs/develop/framework/app-service_register/">注册程序</a>、<a href="https://smartprogram.baidu.com/docs/develop/framework/app-service_page/">注册页面</a>、<a href="https://smartprogram.baidu.com/docs/develop/framework/app-service_getcurrentpages//">页面路由</a>。



<!-- 注册程序
-----
App()
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

注册页面
-----
### Page()

<div class="notice">解释： </div>Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。

**Object参数说明：**

|属性  |类型  |描述  |
|---- | ---- | ---- |
|data | Object | 页面的初始数据 |
|onLoad | Function | 页面的生命周期函数 -- 监听页面加载 |
|onReady | Function | 页面的生命周期函数 -- 监听页面初次渲染完成 |
|onShow | Function | 页面的生命周期函数 -- 监听页面显示 |
|onHide | Function | 页面的生命周期函数 -- 监听页面隐藏 |
|onUnload | Function | 页面的生命周期函数 -- 监听页面卸载 |
|onPullDownRefresh | Function | 页面的事件处理函数 -- 监听用户下拉动作 |
|onReachBottom | Function | 页面的事件处理函数 -- 上拉触底事件的处理函数 |
|onShareAppMessage | Function | 页面的事件处理函数 -- 用户点击右上角转发 |
|onPageScroll | Function | 页面的事件处理函数 -- 页面滚动触发事件的处理函数 |
|onTabItemTap | Function | 页面的事件处理函数 -- 当前是 tab 页时，点击 tab 时触发 |
|其他 | Any | 开发者可以添加任意的函数或数据到 object 参数中 |

**<div class="notice">示例： </div>**

```js
Page({
    data: {
        text: 'swan data'
    },

    onLoad: function (options) {
        // do something when page load
    },

    onReady: function () {
        // do something when page ready
    },

    onShow: function () {
        // do something when page show
    },

    onHide: function () {
        // do something when page hide
    },

    onUnload: function () {
        // do something when page unload
    },

    onPullDownRefresh: function () {
        // do something when pull down
    },

    onReachBottom: function () {
        // do something when page reach bottom
    },

    onShareAppMessage: function () {
        // return custom share data
    },

    onPageScroll: function () {
        // do something when page scroll
    },

    onTabItemTap: function (item) {
        console.log(item.index);
        console.log(item.pagePath);
        console.log(item.text);
    },
    customData: {}
});
```

### 初始化数据

<div class="notice">解释： </div>
初始化数据将作为页面的第一次渲染。data 将会以 JSON 的形式由逻辑层传至渲染层，所以其数据必须是可以转成 JSON 的格式：字符串，数字，布尔值，对象，数组。

渲染层，通过SWAN模板，对数据进行绑定。

**<div class="notice">示例： </div>**

```js
Page({
    data: {
        name: 'swan'
    }
});
```
```js
<view>{{name}}</view>
```

### 生命周期函数

1、onLoad：页面加载
一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。

2、onShow：页面显示
每次打开页面都会调用一次。

3、onReady：页面初次渲染完成
一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
对界面的设置如：swan.setNavigationBarTitle 请在onReady之后设置。

4、onHide：页面隐藏
当 navigateTo 或底部 tab 切换时或Home键离开智能小程序时调用。

5、onUnload：页面卸载
当 redirectTo 或 navigateBack 的时候调用。


### 页面相关事件处理函数

1、onPullDownRefresh: 下拉刷新
监听用户下拉刷新事件。
需要在 app.json 的 window 选项中或页面配置中开启 enablePullDownRefresh 。
当处理完数据刷新后，swan.stopPullDownRefresh 可以停止当前页面的下拉刷新。

2、onReachBottom: 上拉触底
监听用户上拉触底事件。
可以在 app.json 的 window 选项中或页面配置中设置触发距离 onReachBottomDistance 。
在触发距离内滑动期间，本事件只会被触发一次。

3、onPageScroll：页面滚动
监听用户滑动页面事件。
参数为 Object，包含以下字段：


**Object参数说明：**

|字段 |类型  |说明 |
|---- | ---- | ---- |
|scrollTop|Number|页面在垂直方向已滚动的距离（单位px）|

4、onShareAppMessage：用户点击分享
用户点击转发按钮的时候会调用
此事件需要 return 一个 Object，用于自定义转发内容

** 自定义转发字段 **

|字段 |类型  |说明  |默认值 |
|---- | ---- | ---- | ---- |
|title |string | 转发标题 |当前的智能小程序的名称 |
|path |string | 转发路径 |当前页面 path ，必须是以 / 开头的完整路径 |

**<div class="notice">示例： </div>**

```js
Page({
    onShareAppMessage: function () {
        return {
            title: '标题',
            path: '/pages/path/path'
        }
    }
});
```

### 事件处理函数

<div class="notice">解释： </div>
除了初始化数据和生命周期函数，Page 中还可以定义一些特殊的函数：事件处理函数。在渲染层可以在组件中加入事件绑定，当达到触发事件时，就会执行 Page 中定义的事件处理函数。

**<div class="notice">示例： </div>**

```xml
<view bindtap="tap"> tap </view>
```

```js
Page({
    tap: function() {
        console.log('tap')
    }
})
```

### Page.prototype.setData()

<div class="notice">解释： </div>
setData 函数，用于将数据，从逻辑层发送到视图层，当开发者调用 setData 后，数据的变化，会引起视图层的更新。

**<div class="notice">示例： </div>**

```xml
<view>{{name}}</view>
<view bindtap="tap">{{age}}</view>
```

```js
Page({
    data: {
        name: '',
        age: 0
    },
    tap: function () {
        this.setData({'age': 1});
    }
});
```

页面路由
-----
<div class="notice">解释： </div>
在智能小程序中所有页面的路由全部由框架进行管理。

### 页面栈
<div class="notice">解释： </div>
框架以栈的形式维护了当前的所有页面。 当发生路由切换的时候，页面栈的表现如下：

** 页面栈 **

|路由方式 |页面栈表现 |
|---- | ---- |
|初始化 |新页面入栈 |
|打开新页面	|新页面入栈 |
|页面重定向 |当前页面出栈，新页面入栈 |
|页面返回 |页面出栈 |
|Tab 切换 |页面全部出栈，只留下初始的 Tab 页面 |
|重加载 |页面全部出栈，只留下新的页面 |

### getCurrentPages()
<div class="notice">解释： </div>
getCurrentPages() 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。

**<div class="notice">注意： </div>不要尝试修改页面栈，会导致路由以及页面状态错误。**

### 路由方式

对于路由的触发方式以及页面生命周期函数如下：

** 生命周期函数 **

|路由方式 |触发时机 |路由前页面触发事件 |路由后页面触发事件 |
|---- | ---- | ---- | ---- |
|初始化 |智能小程序打开的第一个页面 | |onLoad, onShow |
|打开新页面 |调用 API swan.navigateTo 或使用组件 <navigator open-type="navigateTo"/> | onHide |onLoad, onShow |
|页面重定向 |调用 API swan.redirectTo 或使用组件 <navigator open-type="redirectTo"/> | onUnload |onLoad, onShow |
|页面返回  |调用 API swan.navigateBack 或使用组件<navigator open-type="navigateBack">或用户按左上角返回按钮 | onUnload |onShow |
|Tab 切换  |调用 API swan.switchTab 或使用组件 <navigator open-type="switchTab"/> 或用户切换 Tab | | |
|重新启动  |调用 API swan.reLaunch 或使用组件 <navigator open-type="reLaunch"/> | onUnload | onLoad, onShow |

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


**<div class="notice">注意： </div>**
1、navigateTo, redirectTo 只能打开非 tabBar 页面。
2、switchTab 只能打开 tabBar 页面。
3、reLaunch 可以打开任意页面。
4、页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
5、调用页面路由带的参数可以在目标页面的 onLoad 中获取。

### 文件作用域

<div class="notice">解释： </div>
在 JavaScript 文件中声明的变量和函数只在该文件中有效；不同的文件中可以声明相同名字的变量和函数，不会互相影响。
通过全局函数 getApp() 可以获取全局的应用实例，如果需要全局的数据可以在 App() 中设置

**<div class="notice">示例： </div>**
```js
// app.js
App({
  data: 1
});
```
```js
// page.js
var app = getApp();
app.data++;
```
```js
// page2.js
var app = getApp();
console.log(app.data);
// 2
```

### 模块化

<div class="notice">解释： </div>
可以将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。模块只有通过 module.exports 或者 exports 才能对外暴露接口。

```js
// utils.js
var name = 'swan';
var age = 0;
function logName() {
    console.log(name);
}
function logAge() {
    console.log(age);
}
module.exports.logName = logName;
module.exports.logAge = logAge;
```

可以在需要使用这些模块的文件中，对模块进行引用：

```js
var utils = require('./utils');
Page({
    onLoad: function () {
        utils.logName();
    }
});
``` -->
