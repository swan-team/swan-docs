---
title: element.style
header: develop
nav: devtools
sidebar: style
---

**解释**：获取元素样式值。

```ts
element.style(name: string): Promise<string>
```

**参数说明**

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|name| String|是|- |属性名|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-desc');
    const res = await element.style('color'); // rgb(153, 153, 153)
```

