### shadowColor

`shadowColor` 属性用来设置或获取阴影的颜色。

```js
context.shadowBlur = color;
```
**属性值：**

| 值     |  类型   | 描述              |
|------- |------  | ---------------- |
| color  | string | 阴影的颜色值，默认值是 fully-transparent black |

**示例：**

如下示例中几种设定颜色的方式都可用来设定矩形阴影的颜色，：

![图片](/img/game/canvas/shadowColor-001.png)

```js
var context = canvas.getContext('2d');
context.shadowBlur = 20;
context.fillStyle = 'red';

context.shadowColor = 'red'; //设置阴影的颜色
context.fillRect(20, 20, 100, 100);

context.shadowColor = 'rgba(90, 179, 80, 0.8)'; //设置阴影的颜色及不透明度
context.fillRect(150, 20, 100, 100);

context.shadowColor = '#6F9BBA';   //设置阴影的颜色
context.fillRect(280, 20, 100, 100);
```

要实现更丰富的阴影效果，需要配合使用 `shadowColor` 属性与 [`shadowBlur`](#shadowBlur) 属性来创建阴影，使用 [`shadowOffsetX`](#shadowOffsetX) 属性与 [`shadowOffsetY`](#shadowOffsetY) 属性来设置阴影的偏移。

![图片](/img/game/canvas/shadow-001.png)

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