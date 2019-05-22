### depthFunc()

设置在比较将要写入的像素深度与当前深度缓冲区值时采用的算法。

```js
gl.depthFunc(func)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|func|GLenum|何时写入像素，可取值：`gl.NEVER`：永远不写入；`gl.LESS` 当将要写入的深度值比深度缓冲区的值小时写入；`gl.EQUAL`：相同时写入；`gl.LEQUAL`：小于等于时写入；`gl.GREATER`：大于时写入；`gl.NOTEQUAL`：不相同时写入；`gl.GEQUAL`：大于等于时写入；`gl.ALWAYS`：始终写入|

在 WebGL 中绘制面片的时候，会有先后顺序。该方法可以决定后绘制的像素是否会覆盖之前的值，而判断的依据就是这两者的深度值的相对大小。

具体来说，比如将 `func` 设为 `gl.GREATER`，就可以实现不绘制位于比已画的像素更远的点。这时，如果先渲染位于屏幕前方的物体，再渲染之后的物体，那就可以减少写入像素的操作，从而加速渲染时间。

**示例**：

```js
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LESS);
```
