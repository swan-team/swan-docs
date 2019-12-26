---
title: element.swan
header: develop
nav: devtools
sidebar: swan
---

**解释**：获取元素 swan 内容。

```ts
element.swan(): Promise<string>
```
**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-logo');
    const res = await element.swan();
});
```
