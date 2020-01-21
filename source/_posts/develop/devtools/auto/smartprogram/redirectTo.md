---
title: smartProgram.redirectTo
header: develop
nav: devtools
sidebar: redirectTo
---

**解释**：关闭当前页面，跳转到应用内的某个页面，同 swan.redirectTo

```ts
smartProgram.redirectTo(url: string): Promise<Page>
```

**参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|url| String|否|- |需要跳转的应用内非 tabBar 的页面的路径|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    await smartProgram.redirectTo('/pages/icon/icon');
});
```