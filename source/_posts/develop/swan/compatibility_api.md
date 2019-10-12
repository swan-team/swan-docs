---
title: API存在判断
header: develop
nav: swan
sidebar: compatibility_api
---
 
一般来说，对于新增的API，开发者可以用以下代码来判断新增API是否支持用户的客户端：
```js
if (swan.createCanvasContext) {
  swan.createCanvasContext()
}
else {
  swan.showModal({
    title: '提示',
    content: '当前客户端版本过低，无法使用该功能，请升级。'
  })
}
```