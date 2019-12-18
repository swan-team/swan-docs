---
title: element.innerHTML
header: develop
nav: devtools
sidebar: innerHTML
---


**解释**：获取元素 HTML。

```ts
element.innerHTML(): Promise<string>
```
**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-logo');
    const res = await element.innerHTML();
});
```
