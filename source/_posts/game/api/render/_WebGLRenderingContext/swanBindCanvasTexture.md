### swanBindCanvasTexture()

将一个 Canvas 对应的二维纹理绑定到 WebGL 渲染上下文。注意，这里只能绑定二维的纹理，并且绑定后的纹理随着对应 Canvas 的变化而变化。

```js
gl.swanBindCanvasTexture(texture, canvas)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|texture|GLenum|只能取值为 `gl.TEXTURE_2D`（二维纹理）|
|canvas|Canvas|被绑定的 canvas|

**示例**：

使用 swanBindCanvasTexture

```js
gl.swanBindCanvasTexture(gl.TEXTURE_2D, canvas);
```

等同于

```js
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texImage2D(target, level, internalformat, format, type, canvas);
```
