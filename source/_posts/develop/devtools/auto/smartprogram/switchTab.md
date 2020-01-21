---
title: smartProgram.switchTab
header: develop
nav: devtools
sidebar: switchTab
---

**解释**：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，同 swan.switchTab。

```js
smartProgram.switchTab(url: string): Promise<Page>
```
**参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|url| String|否|- |需要跳转的 tabBar 页面的路径|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    await smartProgram.switchTab('/pages/component/component');
});
```