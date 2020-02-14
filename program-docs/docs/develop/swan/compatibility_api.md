---
title: API存在判断
header: develop
nav: swan
sidebar: compatibility_api
---
 
一般来说，对于新增的API，开发者可以用以下代码来判断新增API是否支持用户的客户端：

**代码示例**

```js
if (swan.createCanvasContext) {
  swan.createCanvasContext()
}
else {
   //这里是开发者自己的兼容逻辑，可以把相关功能入口隐藏掉
}
```
