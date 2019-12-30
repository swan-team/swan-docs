---
title: page.query
header: develop
nav: devtools
sidebar: query
---

**解释**：页面参数。

```ts
page.query: Object
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.navigateTo('/pages/icon/icon?foo=bar');
    console.log(page.query); // {foo: 'bar'}
});
```
