---
title: page.path
header: develop
nav: devtools
sidebar: path
---

**解释**：页面路径。

```ts
page.path: string
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    await smartProgram.reLaunch('/pages/api/api');
    const page = await smartProgram.currentPage();
    console.log(page.path) // pages/api/api
});
```