---
title: 字体
layout: gamedoc
topic: render
categoryName: api
priority: 09-05
---

### swan.loadFont()

加载自定义字体文件，并返回字体名。

```js
swan.loadFont(path);
```

**参数值**：

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|path|string||是|字体文件路径。可以是代码包文件路径，也可以是 bdfile:// 协议的本地文件路径|


**返回值**：

|类型|描述|
|-|-|
|string|如果加载字体成功，则返回字体名称，否则返回 undefined。|


**示例**：

```js
let font = swan.loadFont(path);
console.log(font);
```

### swan.getTextLineHeight()

> 基础库 swan-game.js 1.8.0 版本开始支持。

获取一行文本的行高。

```js
swan.getTextLineHeight(opts);
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|
|fontStyle|String|normal|否|字体样式|
|fontWeight|String|normal|否|字重|
|fontSize|number|16|否|字号|
|fontFamily|String||是|字体名称，可以支持 [`swan.loadFont`](#swan-loadFont) 加载的自定义字体|
|text|String||是|文本的内容|
|success|function||否|接口调用成功的回调函数|
|fail|function||否|	接口调用失败的回调函数|
|complete|function||否|接口调用结束的回调函数（调用成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|成功信息|

`fail` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|错误信息|

**opts.fontStyle 的合法值：**

|属性|描述|
|-|-|
|normal|正常|
|italic|斜体|

**opts.fontWeight 的合法值：**

|属性|描述|
|-|-|
|normal|正常|
|bold|粗体|

**返回值：**

字体的行高，值类型为 `number`

**示例：**

```js
let lineHeight = swan.getTextLineHeight({
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18',
    fontFamily: 'Georgia',
    text: '测试内容',
    success: res => {
        console.log('获取成功：', res);
    },
    fail: err => {
        console.log('获取失败：', err);
    }
});
console.log(lineHeight);
```