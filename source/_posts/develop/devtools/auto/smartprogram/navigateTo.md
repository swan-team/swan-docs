---
title: smartProgram.navigateTo
header: develop
nav: devtools
sidebar: navigateTo
---

**解释**：保留当前页面，跳转到应用内的某个页面，同 swan.navigateTo。

```ts
smartProgram.navigateTo(url: string): Promise<Page>
```

**参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|url| String|否|- |需要跳转的应用内非 tabBar 的页面的路径|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.navigateTo('/pages/icon/icon');
    console.log(page.path); // pages/icon/icon
});
```

