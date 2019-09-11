---
title: 兼容性说明
header: develop
nav: swan
sidebar: compatibility
---

随着智能小程序版本的不断更新，组件和 API 能力正在逐步完善和丰富，旧版本的客户端会出现不支持新增功能的情况，因此在使用这些新功能的时候要进行兼容处理。通常我们会使用版本号比较、API存在判断、swan.canIUse三种方式来处理兼容。如果由于业务需求，无法在低版本的基础库上运行小程序的话，还可以设置最低基础库来让小程序在低于最低基础库版本的客户端上提示用户升级。

## 版本号比较 

智能小程序客户端和智能小程序基础库版本号风格为 Major.Minor.Patch（主版本号.次版本号.修订号），可以通过 <a href="http://smartprogram.baidu.com/docs/develop/api/device_sys/#getSystemInfo/">swan.getSystemInfo </a>或者 <a href="http://smartprogram.baidu.com/docs/develop/api/device_sys/#getSystemInfoSync/">swan.getSystemInfoSync</a> 方法返回的 SDKVersion 字段来获取。 智能小程序的 API 和组件会标明支持的基础库版本，开发者可以比较基础库版本号来进行兼容，这通常可以兼容所有情况，对于API和组件的兼容也可以考虑后面提供的其他方法。
版本号比较可以参考下面的方法来判断：

```js
function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  var len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i])
    var num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

compareVersion('1.11.0', '1.9.9')
// 1
```

**注意: **
此方法同样适用于判断百度 App版本，但在不得不使用百度 App版本进行判断兼容的情况下，请使用 SWAN 版本进行判断兼容。


## API存在判断
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
## [canIUse](http://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-canIUse/)
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
## Android 与 iOS 差异

|功能|Andriod|iOS|
|--|--|--|
|webp格式|支持|不支持|


## 基础库最低版本设置

在上线小程序之前，您可根据业务需要，设置最低基础库版本。

> 一个百度 App 版本对应多个基础库版本，具体映射关系详见[版本分布](https://smartprogram.baidu.com/docs/develop/swan/version/)。

* 初次发布小程序包

  如您初次发布小程序包，在选择最低基础库版本后，该基础库版本及基础库更高版本所对应的百度 App 使用者，将可正常使用您的小程序；低版本使用者，则会收到升级百度 App 的提示。

* 多次发布小程序包

  如您为多次发布小程序的开发者，选择最低基础库版本后，该基础库版本及基础库更高版本所对应的百度 App 使用者，将可正常使用您最新发布的小程序；低版本使用者，可自行升级百度 App 版本使用新的小程程，或将继续使用旧版本小程序。

<!-- 
例：小程序 A 希望使用导航栏的自定义导航栏功能，由于这个功能在 2.10.7 的基础库才开始支持，开发者不希望在低版本客户端上让用户看到不完美的效果，就可以在发布小程序版本A时设置最低基础库版本为 2.10.7。2.10.7版本基础库对应的百度APP版本是11.1.0.0，当使用低于11.1.0.0版本的百度APP（如10.12.0.0）打开该小程序时，有两种情况：
> - 如果开发者之前发布过的最低基础库版本低于1.13.0的小程序版本B，那么会下发版本B的小程序包
> - 如果开发者没有发布过最低基础库版本低于1.13.0的小程序版本，那么会提升用户升级百度APP -->

### 设置方法

最低基础库的设置可以在发布时通过开发者工具设置。

![图片](../../../img/min-swan-version.png)