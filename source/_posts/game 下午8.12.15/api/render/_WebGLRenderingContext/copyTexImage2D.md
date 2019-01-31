### copyTexImage2D()

将像素值从当前帧缓冲区复制到 2D 纹理图片。

如果你需要将渲染结果作为纹理中的图像，就应该使用该方法。

```js
gl.copyTexImage2D(target, level, internalformat, x, y, width, height, border)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|target|GLenum|当前活跃纹理的绑定点，可取值为：表示二维纹理的 `gl.TEXTURE_2D`，以及表示立方体六个面的 `gl.TEXTURE_CUBE_MAP_POSITIVE_X`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`、 `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`、 `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`|
|level|GLint|mip 级别。0 表示基本级别，更大的数值表示后续的 mip 级别|
|internalformat|GLenum|压缩图片的格式，详见：[MDN 文档](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/copyTexImage2D)|
|x|GLint|横向偏移|
|y|GLint|纵向偏移|
|width|GLsizei|纹理宽度|
|height|GLsizei|纹理高度|
|border|GLint|编译大小，应为 0；保留该参数是为了和桌面版的 OpenGL 兼容|

**示例：**

```js
gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, 512, 512, 0);
```
