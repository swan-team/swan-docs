### createBuffer()

创建缓冲区，可以用来储存顶点、颜色等信息。

```js
WebGLBuffer gl.createBuffer()
```

**返回值**：

WebGLBuffer 格式的缓冲区。

**示例**：

```js
var gl = canvas.getContext('webgl');
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```
