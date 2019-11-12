---
title: CanvasContext.measureText
header: develop
nav: api
sidebar: canvas_CanvasContext-measureText
---

 


**解释**：测量文本尺寸信息，目前仅返回文本宽度，同步接口。

**方法参数**：String text

**`text`参数说明**：要测量的文本  

**返回**：

返回 TextMetrics 对象，结构如下：

| 参数名 | 类型 | 说明 |
|---- | ---- | ---- |
| width | Number | 文本的宽度 |

**代码示例**：

```js
const CanvasContext = swan.createCanvasContext('myCanvas')
CanvasContext.font = 'italic bold 20px cursive'
const metrics = CanvasContext.measureText('Hello World')
console.log(metrics.width);
```
#### 错误码
* Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
 


