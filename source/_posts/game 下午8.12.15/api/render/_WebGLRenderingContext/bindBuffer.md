### bindBuffer()

绑定一个缓冲区对象。

`buffer` 是缓冲区的意思，WebGL 程序中包括多种缓冲区，如：顶点缓冲区、深度缓冲区等，`target` 即指定了绑定点（binding point）。将缓冲区绑定之后，后续的缓冲区操作会对这个绑定的缓冲区进行操作。

```js
gl.bindBuffer(target, buffer)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|target|GLenum|可取值为 `gl.ARRAY_BUFFER` 或 `gl.ELEMENT_ARRAY_BUFFER`。前者表示顶点缓冲类型，适用于包含顶点属性（如：顶点坐标、纹理坐标、顶点颜色等）；后者表示顶点索引缓冲，适用于元素索引值相关|
|buffer|WebGLBuffer|一个正整数值，由 `gl.createBuffer()` 生成，用以标记帧缓冲区的名字|

**示例：**

```js
var gl = canvas.getContext('webgl');
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```
