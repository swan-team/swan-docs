---
title: element.text
header: develop
nav: devtools
sidebar: text
---

**解释**：获取元素文本。

```ts
element.text(): Promise<string>
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-desc');
    const res = await element.text(); // 以下将演示小程序接口能力，具体属性参数详见小程序开发文档。
});
```
