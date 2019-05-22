### enable()

WebGL 程序是一个状态机，函数的调用与当前状态有关，而“状态”的开关就可以用 `gl.enable` 和 `gl.disable` 进行切换。例如，使用 `gl.enable(gl.DEPTH_TEST)` 会开启深度测试，像素在写入颜色缓冲区前会先将深度值与深度缓冲区数据进行比较，而使用 `gl.disable(gl.DEPTH_TEST)` 则会关闭深度测试，不再关心深度缓冲区数据。

```js
gl.disable(cap)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|cap|GLenum|指定开启的 WebGL 能力，包括：`gl.BLEND`（混合）、 `gl.CULL_FACE`（剔除表面）、 `gl.DEPTH_TEST`（深度测试）、 `gl.DITHER`（颜色抖动）、 `gl.POLYGON_OFFSET_FILL`（多边形偏移）、 `gl.SAMPLE_ALPHA_TO_COVERAGE`（Alpha 通道多重采用覆盖）、 `gl.SAMPLE_COVERAGE`（多重采用覆盖）、 `gl.SCISSOR_TEST`（裁剪测试）、 `gl.STENCIL_TEST`（模板测试）|

**示例**：

```js
gl.enable(gl.DEPTH_TEST)
// ...
gl.disable(gl.DEPTH_TEST)
```
