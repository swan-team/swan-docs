### compressedTexImage2D()

加载预先压缩过的 2D 纹理。

在 WebGL 中，使用压缩纹理具有：减少纹理图像数据在设备上的内存占用、减少读取纹理需要的带宽、减少应用程序下载大小等多种作用。

```js
gl.compressedTexImage2D(target, level, internalformat, width, height, border, ArrayBufferView? pixels)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|target|GLenum|当前活跃纹理的绑定点，可取值为：表示二维纹理的 `gl.TEXTURE_2D`，以及表示立方体六个面的 `gl.TEXTURE_CUBE_MAP_POSITIVE_X`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`、 `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`、 `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`|
|level|GLint|mip 级别。0 表示基本级别，更大的数值表示后续的 mip 级别|
|internalformat|GLenum|压缩图片的格式，详见：[MDN 文档](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)|
|width|GLsizei|纹理宽度|
|height|GLsizei|纹理高度|
|border|GLint|编译大小，应为 0；保留该参数是为了和桌面版的 OpenGL 兼容|
|pixels|ArrayBufferView|纹理像素的数据|

**示例：**

```js
var ext = (
  gl.getExtension('WEBGL_compressed_texture_s3tc') ||
  gl.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
  gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc')
);

var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.compressedTexImage2D(gl.TEXTURE_2D, 0, ext.COMPRESSED_RGBA_S3TC_DXT5_EXT, 512, 512, 0, textureData);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
```
