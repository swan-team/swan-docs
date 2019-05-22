### clearColor()

设置清除颜色缓冲区的颜色值。

```js
gl.clearColor(red, green, blue, alpha)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|red|GLclampf|红色通道颜色值，0 到 1，默认值为 0|
|green|GLclampf|绿色通道颜色值，0 到 1，默认值为 0|
|blue|GLclampf|蓝色通道颜色值，0 到 1，默认值为 0|
|alpha|GLclampf|透明度通道颜色值，0 到 1，默认值为 0|

**示例**：

```js
gl.clearColor(1, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
```

清除后，帧缓冲区中的颜色都是红色。
