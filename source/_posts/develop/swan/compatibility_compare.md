---
title: 版本号比较 
header: develop
nav: swan
sidebar: compatibility_compare
---
  

智能小程序客户端和智能小程序基础库版本号风格为 Major.Minor.Patch（主版本号.次版本号.修订号），可以通过 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfo/#getSystemInfo/">swan.getSystemInfo </a>或者 <a href="https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfo/#getSystemInfoSync/">swan.getSystemInfoSync</a> 方法返回的 SDKVersion 字段来获取。 智能小程序的 API 和组件会标明支持的基础库版本，开发者可以比较基础库版本号来进行兼容，这通常可以兼容所有情况，对于API和组件的兼容也可以考虑后面提供的其他方法。
版本号比较可以参考下面的方法来判断：

**代码示例**

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

