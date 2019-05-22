### createRadialGradient()

`createRadialGradient()` 方法用于创建放射/圆形渐变。渐变可用于填充形状、线条、文本。

```js
context.createRadialGradient(x0, y0, r0, x1, y1, r1);
```

**参数值**：

| 参数   | 类型  | 描述                 |
| ------|------ | ------------------- |
| x0    | number | 渐变开始点的 x 坐标  |
| y0    | number | 渐变开始点的 y 坐标  |
| r0    | number | 开始圆形的半径       |
| x1    | number | 渐变结束点的 x 坐标  |
| y1    | number | 渐变结束点的 y 坐标  |
| r1    | number | 结束圆形的半径       |

`createRadialGradient()` 方法前三个参数描述了开始圆，后三个参数描述了结束圆，实际的渐变效果是从开始圆向结束圆移动呈椎体状填充的。两个圆的参数决定了放射渐变的方向、位置、形状。


**示例**：

示例配图标注了参数，帮助解释放射渐变的原理：

![图片](/img/game/canvas/RadialGradient-001.png)

```js
var context = canvas.getContext('2d');

var gradient = context.createRadialGradient(20, 20, 10, 350, 150, 50);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'yellow');

context.fillStyle = gradient;
context.fillRect(0, 0, 400, 200);
```
如果想要实现从中心向外圆形辐射的渐变，只需要把开始圆和结束圆设为同一位置不同半径即可实现，如示例：

![图片](/img/game/canvas/RadialGradient-002.png)

```js
var context = canvas.getContext('2d');

var gradient = context.createRadialGradient(100, 100, 0, 200, 100, 200);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'yellow');

context.fillStyle = gradient;
context.fillRect(0, 0, 400, 200);
```