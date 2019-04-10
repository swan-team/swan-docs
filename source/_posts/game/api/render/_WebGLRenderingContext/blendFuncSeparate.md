### blendFuncSeparate()

设置混合因子，也就是源（待画的颜色）和目标（帧缓冲区中的颜色）各自的缩放比例，然后再根据 [`gl.blendEquation`](#blendEquation) 决定以加或减的方式进行混合。与 `blendFunc` 不同的是，本方法为 RGB 与 Alpha 通道分别设置。

```js
gl.blendFunc(srcRGB, dstRGB, srcAlpha, dstAlpha)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|srcRGB|GLenum|源 RGB 的缩放因子，默认值为 `gl.ONE`，也就是完全使用接下来绘制的颜色作为最终的颜色|
|dstRGB|GLenum|目标（帧缓冲区）RGB 的缩放因子，默认值为 `gl.ZERO`，也就是完全使用接下来绘制的颜色作为最终的颜色|
|srcAlpha|GLenum|源 Alpha 的缩放因子，默认值为 `gl.ONE`，也就是完全使用接下来绘制的颜色作为最终的颜色|
|dstAlpha|GLenum|目标（帧缓冲区）Alpha 的缩放因子，默认值为 `gl.ZERO`，也就是完全使用接下来绘制的颜色作为最终的颜色|

**示例：**

```js
gl.enable(gl.BLEND);
gl.blendFuncSeparate(gl.SRC_COLOR, gl.DST_COLOR, gl.ONE, gl.ZERO);
```
