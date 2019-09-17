---
title: canIUse
header: develop
nav: swan
sidebar: compatibility_caniuse
---
 [canIUse](http://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-canIUse/)
### 兼容api新增属性或返回值
开发者可以用以下代码判断 API 的参数或者返回值是否有新增：
```js
swan.showModal({
  success: function(res) {
    if (swan.canIUse('showModal.cancel')) {
      console.log(res.cancel)
    }
  }
})
```
### 兼容组件
由于新增的组件或属性在旧版本上是否既不会被处理，也不会报错。开发者可以用以下代码对旧版本进行降级处理：
```js
Page({
  data: {
    canIUse: swan.canIUse('cover-view')
  }
})
<video controls="{{!canIUse}}">
  <cover-view s-if="{{canIUse}}">play</cover-view>
</video>
```