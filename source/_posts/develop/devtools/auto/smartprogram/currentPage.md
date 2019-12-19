---
title: smartProgram.currentPage
header: develop
nav: devtools
sidebar: currentPage
---

**解释**：获取当前页面。

```js
smartProgram.currentPage(): Promise<Page>
```
**示例代码：**

```js
automator.launch().then(async smartProgram => {
    await smartProgram.currentPage();
});
```

