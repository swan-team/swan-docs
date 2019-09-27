---
title: 调试接口
header: develop
nav: api
sidebar: debug
---
## swan.setEnableDebug

> 客户端10.12，基础库1.12开始支持,在工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**解释**：设置是否打开调试开关，此开关对正式版也能生效。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
| enableDebug | Boolean | 是 | | 是否打开调试 |
|success|	function|		否||	接口调用成功的回调函数，仅支持 Andriod。|
|fail	|function		|否||	接口调用失败的回调函数，仅支持 Andriod。|
|complete	|function		|否||	接口调用结束的回调函数（调用成功、失败都会执行），仅支持 Andriod。|

**示例**：

<a href="swanide://fragment/905712491046e4225a45c47d655371511569554133813" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    openEnableDebug() {
        swan.setEnableDebug({
            enableDebug: true
        })
    },
    closeEnableDebug() {
        swan.setEnableDebug({
            enableDebug: false
        })
    }
});
```

**说明**：
* 可以先在开发版或体验版打开调试模式，再切回到正式版就能看到调试器;
* 请确认已登录百度帐号，当前登录用户属于该小程序开发者时，才能打开调试。
