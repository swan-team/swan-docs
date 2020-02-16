---
title: smartProgram.close
header: develop
nav: devtools
sidebar: close
---

**解释**：断开与小程序运行时的连接并关闭项目窗口。

``` ts
smartProgram.close(): Promise<void>
```

**示例代码：**

``` js
automator.launch().then(async smartProgram => {
    await smartProgram.close();
});
```