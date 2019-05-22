### clearDepth()

设置清除深度缓冲区的深度值。

```js
gl.clearDepth(depth)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|depth|GLclampf|深度值，0 到 1，默认值为 0|

**示例**：

```js
gl.clearDepth(0.5);
gl.clear(gl.DEPTH_BUFFER_BIT);
```

清除后，帧缓冲区中的颜色都是红色。
