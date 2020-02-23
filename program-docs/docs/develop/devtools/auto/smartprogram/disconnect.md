---
title: smartProgram.disconnect
header: develop
nav: devtools
sidebar: disconnect
---

**解释**：断开与小程序运行时的连接。

``` js
smartProgram.disconnect(): void
```

**示例代码：**

``` js
automator.launch().then(async smartProgram => {
    smartProgram.disconnect();
});
```
