### bindTexture()

绑定一个纹理。

```js
gl.bindTexture(target, texture)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|target|GLenum|可取值为 `gl.TEXTURE_2D`（二维纹理）或 `gl.TEXTURE_CUBE_MAP`（正方体纹理）|
|renderbuffer|WebGLTexture|一个正整数值，由 `gl.createTexture()` 生成，用以标记纹理的名字|

**示例：**

```js
var gl = canvas.getContext('webgl');
var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
```
