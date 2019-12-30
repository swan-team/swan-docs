---
title: smartProgram.navigateBack
header: develop
nav: devtools
sidebar: navigateBack
---

**解释**：关闭当前页面，返回上一页面，同 swan.navigateBack

```ts
smartProgram.navigateBack(): Promise<Page>
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    await smartProgram.navigateBack();
});
```

