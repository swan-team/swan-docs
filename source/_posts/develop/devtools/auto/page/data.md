---
title: page.data
header: develop
nav: devtools
sidebar: data
---

**解释**：获取页面渲染数据。

```ts
page.data(path?: string): Promise<Object>
```

**参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|path| String|否|- |数据路径|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.currentPage();
    const data = await page.data('items');
})；
```