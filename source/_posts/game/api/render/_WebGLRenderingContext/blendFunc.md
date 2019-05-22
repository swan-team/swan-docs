### blendFunc()

设置混合因子，也就是源（待画的颜色）和目标（帧缓冲区中的颜色）各自的缩放比例，然后再根据 [`gl.blendEquation`](#blendEquation) 决定以加或减的方式进行混合。

```js
gl.blendFunc(sfactor, dfactor)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|sfactor|GLenum|源的缩放因子，默认值为 `gl.ONE`，也就是完全使用接下来绘制的颜色作为最终的颜色|
|dfactor|GLenum|目标（帧缓冲区）的缩放因子，默认值为 `gl.ZERO`，也就是完全使用接下来绘制的颜色作为最终的颜色|

**示例**：

```js
gl.enable(gl.BLEND);
gl.blendEquation(gl.FUNC_ADD);
gl.blendFunc(gl.SRC_COLOR, gl.DST_COLOR);
```

在这个例子中，源的颜色会因为 `blendFunc` 的第一个参数是 `gl.SRC_COLOR` 而乘以源的颜色；目标的颜色会因为第二个参数是 `gl.DST_COLOR` 而乘以目标的颜色；然后 `gl.FUNC_ADD` 决定了将这两者相加。
