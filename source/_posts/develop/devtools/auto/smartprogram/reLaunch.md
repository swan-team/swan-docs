---
title: smartProgram.reLaunch
header: develop
nav: devtools
sidebar: reLaunch
---

**解释**：关闭所有页面，打开到应用内的某个页面，同 swan.reLaunch。

```ts
smartProgram.reLaunch(url: string): Promise<Page>
```
**参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|url| String|否|- |需要跳转的应用内页面路径|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    await smartProgram.reLaunch('/pages/api/api');
});
```