---
title: element.size
header: develop
nav: devtools
sidebar: size
---

**解释**：获取元素大小。

```ts
element.size(): Promise<Object>
```

**Object 返回参数说明：**

|参数 |类型 |说明|
|---- | ---- |----|
|width| Number  |元素宽度|
|height| Number  |元素高度|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-bd');
    const res = await element.size();
    console.log(res.width, res.height);
});
```

