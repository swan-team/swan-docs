### copyTexSubImage2D()

将像素值从当前帧缓冲区复制到已有的 2D 纹理图片的局部。

```js
gl.copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|target|GLenum|当前活跃纹理的绑定点，可取值为：表示二维纹理的 `gl.TEXTURE_2D`，以及表示立方体六个面的 `gl.TEXTURE_CUBE_MAP_POSITIVE_X`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`、 `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`、 `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`|
|level|GLint|mip 级别。0 表示基本级别，更大的数值表示后续的 mip 级别|
|xoffset|GLint|纹理图像的横向偏移|
|yoffset|GLint|纹理图像的纵向偏移|
|x|GLint|帧缓冲区的横向偏移|
|y|GLint|帧缓冲区的纵向偏移|
|width|GLsizei|纹理宽度|
|height|GLsizei|纹理高度|

**示例：**

```js
gl.copyTexSubImage2D(gl.TEXTURE_2D, 0, 0,0, 0, 0, 16, 16)
```
