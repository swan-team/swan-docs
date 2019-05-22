### clear()

清除特定缓冲区（颜色缓冲区、深度缓冲区、模板缓冲区）。

```js
gl.clear(mask)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|mask|GLbitfield|待清除的缓冲区，可取值为：`gl.COLOR_BUFFER_BIT`、 `gl.DEPTH_BUFFER_BIT`、 `gl.STENCIL_BUFFER_BIT`，也可以是这些值的逻辑或组合|

可以一次性清除颜色缓冲区、深度缓冲区、模板缓冲区中的一个或多个缓冲区，通过将 `mask` 设为多个值的逻辑或实现同时清除多个缓冲区。使用 `gl.clearColor()`、 `gl.clearDepth()`、 `gl.clearStencil()` 分别设置用以清除的颜色、深度、模板。

**示例**：

```js
gl.clear(gl.DEPTH_BUFFER_BIT);
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
```
