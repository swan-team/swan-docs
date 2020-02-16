---
title: element.tap
header: develop
nav: devtools
sidebar: tap
---

**解释**：点击元素。

```ts
element.tap(): Promise<void>
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const const page = await smartProgram.currentPage()
    const element = await page.$('.click-here');
    await element.tap();
})
```