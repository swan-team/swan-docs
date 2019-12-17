---
title: smartProgram.pageStack
header: develop
nav: devtools
sidebar: pageStack
---

**解释**：获取小程序页面堆栈。

```ts
smartProgram.pageStack(): Promise<Page[]>
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const pageStack = await smartProgram.pageStack();
    console.log(pageStack.length); // 当前页面栈数量
});
```
