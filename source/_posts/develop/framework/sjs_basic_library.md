---
title:  基础类库
header: develop
nav: framework
sidebar: sjs_basic_library
---

> 以下属性/方法的具体使用请参考 ES5 标准。

## console
console.log 方法用于在 console 窗口输出信息。它可以接受多个参数，将它们的结果连接起来输出。

## Math
**属性**

- E
- LN10
- LN2
- LOG2E
- LOG10E
- PI
- SQRT1_2
- SQRT2

**方法**

- abs
- acos
- asin
- atan
- atan2
- ceil
- cos
- exp
- floor
- log
- max
- min
- pow
- random
- round
- sin
- sqrt
- tan

## JSON

**方法**

- `stringify(object)`: 将 object 对象转换为 JSON 字符串，并返回该字符串。
- `parse(string)`: 将 JSON 字符串转化成对象，并返回该对象。

**代码示例**
<a href="swanide://fragment/b9a6872f321750087fb2aa6459230cfd1571226160369" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
console.log(undefined === JSON.stringify());
console.log(undefined === JSON.stringify(undefined));
console.log('null'===JSON.stringify(null));
console.log('111'===JSON.stringify(111));
console.log('"111"'===JSON.stringify('111'));
console.log('true'===JSON.stringify(true));
console.log(undefined===JSON.stringify(function(){}));
console.log(null===JSON.parse(JSON.stringify(null)));
console.log(111===JSON.parse(JSON.stringify(111)));
console.log('111'===JSON.parse(JSON.stringify('111')));
console.log(true===JSON.parse(JSON.stringify(true)));
```

## Number
**属性**

- MAX_VALUE
- MIN_VALUE
- NEGATIVE_INFINITY
- POSITIVE_INFINITY

## Date
**属性**

- parse
- UTC
- now

## Global
**属性**

- NaN
- Infinity
- undefined

## 方法

- parseInt
- parseFloat
- isNaN
- isFinite
- decodeURI
- decodeURIComponent
- encodeURI
- encodeURIComponent