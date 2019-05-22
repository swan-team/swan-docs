### blendColor()

设置混合颜色。

默认情况下是不进行颜色混合的，`gl.blendFunc` 可以指定混合函数，其中可以和一个固定的颜色进行混合，`gl.blendColor` 就用来设置这个混合颜色。

```js
gl.blendColor(red, green, blue, alpha)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|red|GLclampf|颜色的红色通道，值在 `0` 到 `1` 之间|
|green|GLclampf|颜色的绿色通道，值在 `0` 到 `1` 之间|
|blue|GLclampf|颜色的蓝色通道，值在 `0` 到 `1` 之间|
|alpha|GLclampf|颜色的透明通道，值在 `0` 到 `1` 之间|

**示例**：

下面的例子展示了如何使用混合颜色作为最终的颜色。

```js
gl.enable(gl.BLEND);
gl.blendColor(0, 0.5, 1, 1);
gl.blendFunc(gl.CONSTANT_COLOR);
```
