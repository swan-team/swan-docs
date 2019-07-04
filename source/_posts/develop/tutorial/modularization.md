---
title: 模块化
header: develop
nav: framework
sidebar: modularization
---

## 模块化

**解释**：可以将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。模块可以通过 module.exports、exports 或者 export 对外暴露接口，使用require 或者 import 进行导入。

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

## 文件作用域 

**解释**： 在 JavaScript 文件中声明的变量和函数只在该文件中有效；不同的文件中可以声明相同名字的变量和函数，且不会互相影响。
通过全局函数 getApp() 可以获取全局的应用实例，如果需要全局的数据可以在 [App()](https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/) 中设置

**示例代码**：

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