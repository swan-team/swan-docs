---
title: 小游戏版本兼容
layout: gamedoc
categoryName: tutorials
topic: version
priority: 11-03
---

随着小游戏不断支持更多的功能，旧版本的客户端可能会出现不支持新增功能的情况，因此在使用新增功能时需做兼容性处理。

开发者可以通过以下方式进行低版本的兼容：

### 比较版本号
百度 APP 客户端和小游戏基础库的版本号风格为 Major.Minor.Patch（主版本号.次版本号.修订版本号）。

文档中会在 API 描述中带上各个功能所要求的最低基础库版本号。

开发者可以在小游戏中通过调用 swan.getSystemInfo 或者 swan.getSystemInfoSync 获取到当前小游戏运行的基础库的版本号。通过版本号比较的方式进行运行低版本兼容逻辑。


参考代码：

```javascript
function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

compareVersion('1.0.12', '1.0.13') // 1


const version = swan.getSystemInfoSync().SDKVersion

if (compareVersion(version, '1.0.13') >= 0) {
  swan.getGameRecorderManager()
} else {
  // 如果希望用户在最新版本的客户端上体验您的小游戏，可以提示用户升级
  swan.showModal({
    title: '提示',
    content: '当前客户端版本过低，无法使用该功能，请升级到最新版本后重试。'
  })
}

```

**注意：**
 1. 因为客户端首次内置的基础库版本为在上一客户端版本稳定运行过的基础库版本。因此，为避免首次启动客户端时小游戏出现异常，请尽量避免判断百度 APP 客户端的版本。

 2. 不要直接使用字符串比较的方法进行版本号比较。（因为`"1.10.1" < "1.2.1"`）


###  判断 API 是否存在
对于新增的 API，可以通过判断该 API 在该版本基础库内是否存在，从而判断该 API 是否支持用户使用。例如：

```javascript
if (swan.getGameRecorderManager) {
  const recorder = swan.getGameRecorderManager()
} else {
  // 如果希望用户在最新版本的客户端上体验您的小游戏，可以提示用户升级
  swan.showModal({
    title: '提示',
    content: '当前客户端版本过低，无法使用该功能，请升级到最新版本后重试。'
  })
}
```

### 设置最低基础库版本
为便于开发者解决低版本基础库无法兼容小游戏的新功能的问题，开发者可设置小游戏基础库最低版本要求。

开发者可以登录管理后台，进入「设置 - 基本设置 - 基础库最低版本设置」进行配置。

![](/img/game/tutorials/version-setting.png)

设置后，若用户基础库版本低于设置值，则无法正常打开小游戏。同时，客户端会提示用户更新客户端版本。

