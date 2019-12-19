---
title: element.outerHTML
header: develop
nav: devtools
sidebar: outerHTML
---

**解释**：同 innerHTML，只是会获取到元素本身。

```ts
element.outerHTML(): Promise<string>
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-logo');
    console.log(await element.outerHTML());
});
```
