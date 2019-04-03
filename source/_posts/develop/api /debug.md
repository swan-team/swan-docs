---
title: 调试接口
header: develop
nav: api
sidebar: debug
---
## swan.setEnableDebug

> 客户端10.12，基础库1.12开始支持

设置是否打开调试开关，此开关对正式版也能生效。

**OBJECT参数说明：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | ---|
| enableDebug | Boolean | 是 | 是否打开调试 |

**示例代码**

```js
    // 打开调试
    swan.setEnableDebug({
        enableDebug: true
    })

    // 关闭调试
    swan.setEnableDebug({
        enableDebug: false
    })
```

**说明：**
* 可以先在开发版或体验版打开调试模式，再切回到正式版就能看到调试器;
* 请确认已登录百度帐号，当前登录用户属于该小程序开发者时，才能打开调试。
