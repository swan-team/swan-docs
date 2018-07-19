---
title: 兼容
header: develop
nav: framework
sidebar: compatibility
---

原因
-----
随着智能小程序版本的不断更新，功能逐渐增加，部分功能使用了新版本手机百度的端能力。
但旧版本的手机百度还不支持这些新的能力，所以在使用这些新功能的时候要进行兼容处理。


兼容方式
-----

### 1 版本对比

在组件，API的文档中，各功能都已经标明所支持的手机百度版本号。
可以通过 swan.getSystemInfo 或者 swan.getSystemInfoSync 获取到智能小程序的基础库的信息，其中包含了基础库的版本号
<br>

### 2 能力检测
可以通过 swan.canIUse 来判断当前使用的版本能否支持想要使用的新功能。下面分别列举了 API 、参数、组件的检测方法。
<br>
对于新增的API，我们可以参考以下代码来进行版本兼容
```js
if (swan.canIUse('getSystemInfoSync')) {
  swan.getSystemInfoSync()
} else {
  // 如果希望用户更新手机百度版本以支持您的智能小程序
  swan.showModal({
    title: '提示',
    content: '当前手机百度版本过低，无法使用该功能，请升级到最新版本后重试。'
  })
}

```
<br>
对于API的参数会返回值中是否包含新增参数，我们可以参考以下代码来进行检测
```js
swan.canIUse('getSystemInfoSync.return.screenWidth');
```
<br>
对于新增的组件或属性，在老版本的手机百度中不会被处理，也不会抛出异常。如果想要检测当前版本是否支持新增组件，可以用如下代码来进行检测
```js
Page({
  data: {
    canIUse: swan.canIUse('cover-view')
  }
})
```
```html
<video controls="{{!canIUse}}">
  <cover-view swan:if="{{canIUse}}">play</cover-view>
</video>
```

更多的使用方法详见 [canIUse](https://smartprogram.baidu.com/docs/develop/api/device/#canIUse)

