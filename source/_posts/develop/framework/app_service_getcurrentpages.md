---
title: 页面路由
header: develop
nav: framework
sidebar: app_service_getcurrentpages
---

在智能小程序中所有页面的路由全部由框架进行管理。

页面栈
---
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

getCurrentPages
---
<div class="notice">解释： </div>
getCurrentPages 全局函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。

**<div class="notice">示例： </div>**

```js
Page({
    onShow() {
        console.log(getCurrentPages()); // [{...}]
    }
});
```

**<div class="notice">注意： </div>不要尝试修改页面栈，会导致路由以及页面状态错误。**

路由方式
---
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

文件作用域
---
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

模块化
---
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
```

### 编译工具提供依赖分析模式和普通编译模式两种编译模式：

<p>**· 依赖分析模式** :无用文件不会被打包到产出中,支持node_modules的使用;
<p>**· 普通编译模式** :不支持node_modues的使用。


### 项目目录结构如下所示：
```
├── app.js
├── app.json
├── pages
└── util
    ├── a.js
    └── b.js
```
### 在普通模式下正确的模块引用方式:
```
    // 在app.js中引用util文件夹下的a.js的方式:
    1. require('/util/a.js');
    2. require('./util/a.js');
    3. require('util/a.js');
```

### 在依赖分析编译模式下正确的模块引用方式:

```
    // 在app.js中引用util文件夹下的a.js的方式:
    require('./util/a.js');
    // b.js中引用a.js
    require('./a.js');
    // 从当前目录到项目根目录下递归寻找node_modules文件夹中是否存在a.js，没有则报错；
    require('a.js');
```
<!-- ├── a.js
└── b.js
// 项目结构如上所示

// b.js的内容
require('a.js'); // bad
require('./a.js'); // good
``` -->
