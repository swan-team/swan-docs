### shadowBlur

`shadowBlur` 属性用来设置或获取阴影的模糊程度。

```js
context.shadowBlur = level;
```
**属性值：**

| 值     |  类型   | 描述              |
|------- |------  | ---------------- |
| level   | float | 模糊效果的程度，初始值为 0。值越小，模糊程度越弱；值越大，模糊程度越强。负数、Infinity 或 NaN 会被忽略|

**示例：**

使用 `shadowBlur` 属性设置两个矩形不同的阴影模糊程度：

![](/img/game/canvas/shadowBlur-001.png)

```js
var context = canvas.getContext('2d');

context.shadowBlur = 5;   //设定阴影模糊为 5
context.shadowColor = 'black';
context.fillStyle = 'red';
context.fillRect(20, 20, 100, 100);

context.shadowBlur = 20;  //设定阴影模糊为 20
context.shadowColor = 'black';
context.fillStyle = 'red';
context.fillRect(160, 20, 100, 100);
```

要实现更丰富的阴影效果，可配合使用 [`shadowColor`](#shadowColor) 与 `shadowBlur` 属性创建阴影，使用 [`shadowOffsetX`](#shadowOffsetX) 与 [`shadowOffsetY`](#shadowOffsetY) 属性设置阴影的偏移。

![](/img/game/canvas/shadow-001.png)

```js
var context = canvas.getContext('2d');

//设置阴影及阴影样式
context.shadowBlur = 10;
context.shadowColor = 'rgba(255, 0, 0, 0.3)';
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;

context.fillStyle = 'red';
context.fillRect(30, 30, 200, 100);
```