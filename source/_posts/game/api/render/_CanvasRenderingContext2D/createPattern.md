### createPattern()

`createPattern()` 方法用于在指定方向上重复绘制源图像。

```js
context.createPattern(image, repetition);
```

**参数值**：

| 参数   | 类型  | 描述                 |
| ------|------ | ------------------- |
| image | Object |  要绘制的图像，可使用 Image 、 Video 、 Canvas   |
| repetition | string / null | 默认为 `repeat` (在水平和垂直方向重复)，可设为 `repeat-x`（只在水平方向重复）、`repeat-y` （只在垂直方向重复）、`no-repeat`（不重复）。若字符串为空或 null 则默认为 `repeat` |

**示例**：
所使用的图像：
![图片](/img/game/canvas/createPattern-001.png)

在水平和垂直方向重复绘制图像的示例：

![图片](/img/game/canvas/createPattern-002.png)

```js
var context = canvas.getContext('2d');
var image = new Image();

image.onload = function(){
    var pattern = context.createPattern(image, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(0, 0, 440, 200);
};
image.src = 'createPattern-001.png';
```

通过改变参数可以实现不同的重复效果。如下示例设定重复的参数为 `repeat-y`，此时图像只会在垂直方向重复：

![图片](/img/game/canvas/createPattern-003.png)

```js
var context = canvas.getContext('2d');
var image = new Image();

image.onload = function(){
    var pattern = context.createPattern(image, 'repeat-y');
    context.fillStyle = pattern;
    context.fillRect(0, 0, 440, 200);
};
image.src = 'createPattern-001.png';
```
