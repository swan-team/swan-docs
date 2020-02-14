---
title: element.value
header: develop
nav: devtools
sidebar: value
---

**解释**：获取元素值。

```ts
element.value(): Promise<string>
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/input/input');
    const element = await page.$('.small-ipt');
    const res = await element.value(); // 此处为输入内容
});
```

