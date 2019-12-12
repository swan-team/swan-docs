---
title: Element
header: develop
nav: devtools
sidebar: Element
---

Element 模块提供了控制小程序页面元素的方法。

### 属性

### element.tagName

**解释**：标签名，小写。

```ts
element.tagName: string
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-bd');
    console.log(element.tagName); // view
});
```

### 方法

### element.$

**解释**：在元素范围内获取元素。

```ts
element.$(selector: string): Promise<Element>
```

**参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|selector| String|是|- |选择器|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-bd');
    const logo = await element.$('.item-logo');
});
```

### element.$$

**解释**：在元素范围内获取元素数组。

```ts
element.$$(selector: string): Promise<Element[]>
```

**参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|selector| String|是|- |选择器|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group');
    const res = await element.$$('.group-bd');
    console.log(res.length);
});
```

### element.size

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

### element.offset

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

### element.text

**解释**：获取元素文本。

```ts
element.text(): Promise<string>
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-desc');
    const res = await element.text(); // 以下将演示小程序接口能力，具体属性参数详见小程序开发文档。
});
```

### element.attribute

**解释**：获取元素属性。

```ts
element.attribute(name: string): Promise<string>
```

**参数说明：**

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|name| String|是|- |属性名|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-logo');
    const res = await element.attribute('id'); // id
});
```

### element.innerHTML

**解释**：获取元素 HTML。

```ts
element.innerHTML(): Promise<string>
```
**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-logo');
    const res = await element.innerHTML();
});
```

### element.outerHTML

**解释**：同 innerHTML，只是会获取到元素本身。

```ts
element.outerHTML(): Promise<string>
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-logo');
    console.log(await element.outerHTML());
});
```

### element.value

**解释**：获取元素值。

```ts
element.value(): Promise<string>
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/input/input');
    const element = await page.$('.small-ipt');
    const res = await element.value(); // 此处为输入内容
});
```

### element.style

**解释**：获取元素样式值。

```ts
element.style(name: string): Promise<string>
```

**参数说明**

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|name| String|是|- |属性名|

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const page = await smartProgram.reLaunch('/pages/api/api');
    const element = await page.$('.group-desc');
    const res = await element.style('color'); // rgb(153, 153, 153)
```

### element.tap

**解释**：点击元素。

```ts
element.tap(): Promise<void>
```

**示例代码：**

```js
automator.launch().then(async smartProgram => {
    const const page = await smartProgram.currentPage()
    const element = await page.$('.click-here');
    await element.tap();
})
```