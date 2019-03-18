---
title: console
layout: gamedoc
topic: debug
categoryName: api
---

向 sConsole 调试面板中打印日志。
console 是一个全局对象，可以直接访问。

**方法**

console.debug()
向调试面板中打印 debug 日志

|参数|类型|是否必填|描述|
|-|-|-|-|
| args | any |是|日志内容,可以有任意多个|

console.log()
向调试面板中打印 log 日志

|参数|类型|是否必填|描述|
|-|-|-|-|
| args | any |是|日志内容,可以有任意多个|

console.info()
向调试面板中打印 info 日志

|参数|类型|是否必填|描述|
|-|-|-|-|
| args | any |是|日志内容,可以有任意多个|

console.warn()
向调试面板中打印 warn 日志

|参数|类型|是否必填|描述|
|-|-|-|-|
| args | any |是|日志内容,可以有任意多个|

console.error()
向调试面板中打印 error 日志

|参数|类型|是否必填|描述|
|-|-|-|-|
| args | any |是|日志内容,可以有任意多个|


**注意：**
* 由于 sConsole 功能有限，以及不同客户端对 console 方法的支持情况有差异，建议开发者在小游戏中只使用本文档中提供的方法。
* 部分内容展示的限制请参见 [sConsole](/game/tutorials/devtools/smartappdebug/#sConsole)。

