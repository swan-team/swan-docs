---
title: 文件作用域 
header: develop
nav: framework
sidebar: app_service_routefile
---


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