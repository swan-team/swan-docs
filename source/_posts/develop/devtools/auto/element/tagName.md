---
title: element.tagName
header: develop
nav: devtools
sidebar: tagName
---

**解释**：标签名，小写。

```ts
element.tagName: string
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-bd');
    console.log(element.tagName); // view
});
```
