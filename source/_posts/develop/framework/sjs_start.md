---
title:   开始
header: develop
nav: framework
sidebar: sjs_start
---


## 介绍

`SJS`是小程序一套自定义脚本语言，可以在`SWAN`中使用其辅助构建页面结构。

`SJS`代码可以编写在`swan`文件中的`<import-sjs>`标签内，或以`sjs`为后缀名的文件内，然后在`SWAN`模板中进行引用。

> SJS 自小程序基础库版本`3.105.17` 、开发者工具正式版`2.13.1`开始支持。
> 低版本需要做兼容处理，在逻辑层可以使用 swan.canIUse('sjs') 判断基础库是否支持SJS能力。其它兼容方式请参考 [兼容性处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)

## 模块

每一个`sjs`文件和`<import-sjs>`标签都是一个单独的模块。

每个模块都有自己独立的作用域。即在一个模块里面定义的变量与函数，默认为私有的，对其他模块不可见。

一个模块要想对外暴露其内部的私有变量与函数，可以通过`export`或者`module.exports`实现，使用`import`或者`require`引用。

## 使用方式

### sjs 文件

在小程序项目中创建以`sjs`为后缀的文件，然后可以在其中编写`sjs`脚本。

下述例子在`/pages/utils.sjs`的文件里面编写了`sjs`代码。该`.sjs`文件可以被其他的`.sjs`文件 或`SWAN`中的 `<import-sjs>` 标签引用。

**代码示例**
<a href="swanide://fragment/5d52f3c6b35db9ac67f9eea0886d207b1571199141333" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

- 编写SJS逻辑

```js
// pages/utils.sjs中编写SJS逻辑

const bar = function(name) {
    return 'swan-' + name;
}
const foo = 'hello swan';

export default {
    bar: bar,
    foo: foo
};

// 或者使用CMD的形式导出
// module.exports = {
//     bar: bar,
//     foo: foo
// };
```

- 引用并调用SJS

```xml
<!-- 在 pages/index/index 页面中 -->

<!-- 引用SJS -->
<import-sjs src="../utils.sjs" module="utils" />

<!-- 使用SJS -->
<view class="container">{{utils.bar(name)}}</view>
<view>{{utils.foo}}</view>
```

- 页面显示结果

```
swan-sjs
hello swan
```

## `import-sjs`标签

`import-sjs`标签有两个作用，一个是通过src属性引用其它sjs模块，此时标签可以为自闭和标签；另一个是使用其容纳sjs代码。

**1.引用sjs文件**

**相关属性**

|属性名|类型|必填|说明|
|---|---|---|---|
|module|String|是|当前`<import-sjs>`标签的模块名。必填字段。
|src|String	|否|引用`.sjs`文件的路径，仅当本标签为单闭合标签或标签的内容为空时有效； 如果当做sjs代码容器标签，则不必填写。

**module 属性**

`module`属性是当前`<import-sjs>`标签的模块名。在单个`swan`文件内，建议其值唯一。有重复模块名则按照先后顺序覆盖（后者覆盖前者）。不同文件之间的`sjs`模块名不会相互覆盖。

`module`属性值的命名必须符合下面两个规则：

  - 首字符必须是：字母（a-zA-Z），下划线（_）
  - 剩余字符可以是：字母（a-zA-Z），下划线（_）， 数字（0-9）


**src 属性**

`src`属性可以用来引用其他的`sjs`文件模块。

引用的时候，要注意如下几点：

- 只能引用`.sjs`文件模块。
- `sjs`模块均为单例，`sjs`模块在第一次被引用时，会自动初始化为单例对象。多个页面，多个地方，多次引用，使用的都是同一个`sjs`模块对象。
- 如果一个`sjs`模块在定义之后，一直没有被引用，则该模块不会被解析与运行。
- 在 sjs 模块中引用其他 sjs 文件模块，可以使用 require 函数。

**代码示例**
<a href="swanide://fragment/bdb548875bd22d07e221c451fc3e760d1581523581407" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


```xml
<import-sjs src="./../tools.sjs" module="logic"></import-sjs>
```

```js
// pages/utils.sjs中编写SJS逻辑

var foo = "hello world";
var bar = function (d) {
  return d;
}
module.exports = {
  FOO: foo,
  bar: bar,
};
module.exports.msg = "some msg";
```

```js
var tools = require("utils.sjs");

console.log(tools.FOO);
console.log(tools.bar("tools.sjs"));
console.log(tools.msg);
```

- 页面显示结果

```
hello world
tools.sjs
some msg
```


**2.作为SJS代码容器**

`import-sjs`标签除了引用其它`sjs`模块，还可直接作为`SJS`代码的容器，使用`module`制定该模块名称，用法与上等同。

**代码示例**
<a href="swanide://fragment/a214cb06c6d7342d91bde3135ce802851571214960218" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

- 在SWAN模板中定义并使用SJS

```xml
<!-- 定义SJS -->
<import-sjs module="utils">
const bar = function(name) {
    return 'swan-' + name;
}
const foo = 'hello swan';

export default {
    bar: bar,
    foo: foo
};
</import-sjs>

<!-- 使用SJS -->
<view class="container">{{utils.bar(name)}}</view>
<view>{{utils.foo}}</view>

```

- 页面显示结果

```
swan-sjs
hello swan
```

**注意**

- 引用sjs模块时务必使用`.sjs`文件后缀。
- sjs 只能定义在 .sjs 文件中，然后在 swan 文件中使用`<import-sjs>`标签引入。
- sjs 可以调用其他 sjs 文件中定义的函数。
- sjs 的运行环境和其它 JavaScript 代码是相互隔离的， 即 sjs 中不能调用其他 JavaScript 文件中定义的函数与API。
- sjs 函数不能作为组件事件回调。
