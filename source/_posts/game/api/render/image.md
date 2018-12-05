---
title: 图片
layout: gamedoc
topic: render
categoryName: api
priority: 06-06
---

### swan.createImage()

创建一个图片对象。

**返回值：**

`Object`：

|属性|类型|描述|
|-|-|-|
|src|number|图片地址|
|width|number|图片的实际宽度|
|height|number|图片的实际高度|
|onload|function|图片加载完的回调函数|
|onerror|function|图片加载错误的回调函数|

**示例：**

```js
var img = swan.createImage();

img.onload = function () {
    console.log(img.width, img.height);
};

img.onerror = function (err) {
    console.log(err);
};

img.src = 'https://www.baidu.com/img/bd_logo1.png';
```
