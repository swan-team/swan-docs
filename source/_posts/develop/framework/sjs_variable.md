---
title:   SJS 变量
header: develop
nav: framework
sidebar: sjs_variable
---

## 概念

- SJS 中的变量均为值的引用；
- 没有声明的变量直接赋值使用，会被定义为全局变量；
- 如果只声明变量而不赋值，则默认值为`undefined`；
- var 表现与 javascript 一致，会有变量提升；
- 支持 const 与 let，与 JavaScript 表现一致。

```js
// 在SJS模块中
var count = 110;
var bar = 'hello swan';
var undef; // undef === undefined
const NAME = 'SJS';
let str = 'string';
```

## 变量名
变量命名必须符合下面两个规则：

- 首字符必须是：字母（a-zA-Z），下划线（_）
- 剩余字符可以是：字母（a-zA-Z），下划线（_）， 数字（0-9）

## 保留标识符
以下标识符不能作为变量名：

```js
for
do
while
default
continue
switch
case
break

var
null
undefined
Infinity
NaN

void
delete
typeof

if
else

true
false

require
function
arguments
this
return
```