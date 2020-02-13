---
title: element.offset
header: develop
nav: devtools
sidebar: offset
---


**解释**：获取元素绝对位置。

```ts
element.offset(): Promise<Object>
```

**Object 返回参数说明：**

|参数 |类型 |说明|
|---- | ---- |----|
|left| Number  |左上角 x 坐标，单位：px|
|top| Number  |左上角 y 坐标，单位：px|

坐标信息以页面左上角为原点。

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-bd');
    const res = await element.offset();
    console.log(res.left, res.top);
});
```

