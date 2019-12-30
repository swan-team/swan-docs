---
title: page.waitFor
header: develop
nav: devtools
sidebar: waitFor
---


**解释**：等待直到指定条件成立。

```ts
page.waitFor(condition: string | number | Function): Promise<void>
```

**参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|condition| String/Number/Function|是|- |等待条件|

- 如果条件是 string 类型，那么该参数会被当成选择器，当该选择器选中元素个数不为零时，结束等待。
- 如果条件是 number 类型，那么该参数会被当成超时时长，当经过指定时间后，结束等待。
- 如果条件是 Function 类型，那么该参数会被当成断言函数，当该函数返回真值时，结束等待。

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    await page.waitFor(2e3); // 等待 2 秒
    await page.waitFor('view'); // 等待页面中出现 view 元素
    await page.waitFor(async () => {
        return (await page.$$('view')).length > 5;
    }); // 等待页面中 view 元素数量大于 5
});
```
