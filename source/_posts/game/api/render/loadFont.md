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