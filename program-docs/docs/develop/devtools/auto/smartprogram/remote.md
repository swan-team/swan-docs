---
title: smartProgram.remote
header: develop
nav: devtools
sidebar: remote
---

**解释**：开启工具真机调试功能，这里需要提前对真机环境进行配置，详情可参考 [真机自动化](../../remote)

``` ts
smartProgram.remote(): Promise<void>
```

调用后脚本会启动工具预览功能，并且在控制台上打印预览二维码，然后你需要使用真机扫码连接使自动化脚本继续跑下去。

**示例代码：**

``` js
automator.launch().then(async smartProgram => {
    await smartProgram.remote();
    // 扫码连接成功后在真机上执行自动化脚本
});
```
