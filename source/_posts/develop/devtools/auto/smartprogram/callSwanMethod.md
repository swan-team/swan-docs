---
title: smartProgram.callSwanMethod
header: develop
nav: devtools
sidebar: callSwanMethod
---


**解释**：调用 swan 对象上的指定方法。

```ts
smartProgram.callSwanMethod(method: string, ...args: any[]): Promise<any>
```
**参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|method| String|是|- |需要调用的方法名|
|...args| Array|否|- |方法参数|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    await smartProgram.callSwanMethod('setStorage', {
        key: 'foo',
        data: 'bat'
    });
    const data = await smartProgram.callSwanMethod('getStorageSync', 'foo');
    console.log(data); // bar
})
```
