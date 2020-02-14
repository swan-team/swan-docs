---
title: smartProgram.login
header: develop
nav: devtools
sidebar: login
---

**解释**：未登录情况下调起开发者工具的登录，如果已登录则跳过。

``` ts
smartProgram.login(): Promise<void>
```

**示例代码：**

``` js
automator.launch().then(async smartProgram => {
    await smartProgram.login();
    // 扫面开发者工具上的登录二维码后继续执行
});
```
