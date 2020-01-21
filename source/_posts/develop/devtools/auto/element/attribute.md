---
title: element.attribute
header: develop
nav: devtools
sidebar: attribute
---
**解释**：获取元素属性。

```ts
element.attribute(name: string): Promise<string>
```

**参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|name| String|是|- |属性名|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-logo');
    const res = await element.attribute('id'); // id
});
```
