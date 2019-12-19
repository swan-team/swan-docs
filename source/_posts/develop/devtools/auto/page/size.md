---
title: page.size
header: develop
nav: devtools
sidebar: size
---

**解释**：获取页面大小。

```ts
page.size(): Promise<Object>
```

**Object 返回参数说明：**

|参数 |类型 |说明|
|---- | ---- |----|
|width| Number  |页面可滚动宽度|
|height| Number  |页面可滚动高度|


**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.currentPage();
    const res = await page.size();
    console.log(res.width);
    console.log(res.height);
})
```

