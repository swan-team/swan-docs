### globalCompositeOperation

`globalCompositeOperation` 属性用来设置或获取当前的合成操作类型，即设置如何将一个（新）图像绘制在一个已有图像上。其中 type 是用于标识要使用的合成或混合模式操作的字符串。默认值为 `source-over` 将新图像覆盖在已有图像上显示。
```js
context.globalCompositeOperation = type;
```
`globalCompositeOperation` 属性必须在绘制图形之前定义才有效，作为全局属性对之后的图形都起作用，直到 `globalCompositeOperation` 被重新定义为其他属性值为止。

**属性值**：

| 值     |  类型   | 描述              |
|------- |------  | ---------------- |
| source-over  | string |默认值。新图像覆盖在已有图像上显示  |
| destination-over | string |已有图像覆盖在新图像上显示  |
| destination-in   | string |只显示新图像与已有图像的重合部分，其余部分透明 |
| destination-out  | string |只显示新图像与已有图像的不重合部分，其余部分透明 |
| destination-atop | string |显示已有图像与新图像的重合部分及新图像其余部分，其余部分透明  |
| source-in   | string |只显示新图像与已有图像的重合部分，其余部分透明  |
| source-out  | string |只显示新图像与已有图像的不重合部分，其余部分透明 |
| source-atop | string |显示新图像与已有图像的重合部分及已有图像其余部分，其余部分透明  |
| lighter| string |显示新图像和已有图像，重合部分颜色值是两个图形颜色值的相加总和  |
| xor | string |显示新图像和已有图像，重合部分透明 |
| copy| string |只显示新图像，已有图像透明 |

绘制两个有重叠的圆形，使用 `globalCompositeOperation` 属性的不同取值设置的结果如图所示：

![图片](/img/game/canvas/globalCompositeO-001.png)


**示例**：

使用 `globalCompositeOperation` 设置两个有重叠的矩形的合成操作：

![图片](/img/game/canvas/globalCompositeO-002.png)

```js
var context = canvas.getContext('2d');

context.globalCompositeOperation = "xor";

context.fillStyle = 'red';
context.fillRect(20, 20, 100, 100);

context.fillStyle = 'orange';
context.fillRect(60, 60, 100, 100);
```
