### compressedTexSubImage2D()

加载预先压缩过的 2D 纹理的一个矩形局部。

```js
gl.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, ArrayBufferView? pixels)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|target|GLenum|当前活跃纹理的绑定点，可取值为：表示二维纹理的 `gl.TEXTURE_2D`，以及表示立方体六个面的 `gl.TEXTURE_CUBE_MAP_POSITIVE_X`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`、 `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`、 `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`、 `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`|
|level|GLint|mip 级别。0 表示基本级别，更大的数值表示后续的 mip 级别|
|xoffset|GLint|横向偏移|
|yoffset|GLint|纵向偏移|
|width|GLsizei|纹理宽度|
|height|GLsizei|纹理高度|
|format|GLenum|压缩图片的格式，详见：[MDN 文档](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)|
|pixels|ArrayBufferView|纹理像素的数据|

**示例：**

```js
var ext = (
  gl.getExtension('WEBGL_compressed_texture_s3tc') ||
  gl.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
  gl.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc')
);
gl.compressedTexSubImage2D(gl.TEXTURE_2D, 0, 256, 256, 512, 512, ext.COMPRESSED_RGBA_S3TC_DXT5_EXT, textureData);
```
