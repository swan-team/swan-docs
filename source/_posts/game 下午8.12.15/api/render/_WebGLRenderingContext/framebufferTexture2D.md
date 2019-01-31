### framebufferTexture2D()

将一个纹理的一个层次（level）绑定到缓冲区对象。

```js
gl.framebufferTexture2D(target, attachment, textarget, texture, level)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|target|GLenum|绑定点（binding point），可取值：`gl.FRAMEBUFFER`|
|attachment|GLenmu|指定 `renderbuffer` 应该绑定到帧缓冲区对象的颜色缓冲区或深度缓冲区或模板缓冲区，可取值：`gl.COLOR_ATTACHMENT0`（颜色缓冲区）、 `gl.DEPTH_ATTACHMENT`（深度缓冲区）、 `gl.STENCIL_ATTACHMENT`（模板缓冲区）|
|textarget|GLenum|纹理目标，可取值：表示二维纹理的 `gl.TEXTURE_2D`，以及表示立方体六个面的 `gl.TEXTURE_CUBE_MAP_POSITIVE_X`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`、 `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`、 `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`|
|texture|WebGLTexture|待绑定的纹理|
|level|GLint|纹理层次，必须为 0|

**示例：**

```js
gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
```
