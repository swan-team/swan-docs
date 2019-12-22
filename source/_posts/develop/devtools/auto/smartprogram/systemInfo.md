---
title: smartProgram.systemInfo
header: develop
nav: devtools
sidebar: systemInfo
---

**解释**：获取系统信息，同 swan.getSystemInfo。

```ts
smartProgram.systemInfo(): Promise<Object>
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const systemInfo = await smartProgram.systemInfo();
    console.log(systemInfo.platform);
});
```
