---
title: element.outerSwan
header: develop
nav: devtools
sidebar: outerSwan
---

**解释**：同 element.swan，只是会获取到元素本身。

```ts
element.outerSwan(): Promise<string>
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-logo');
    console.log(await element.outerSwan());
});
```
