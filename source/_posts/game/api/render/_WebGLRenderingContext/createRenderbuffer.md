### createRenderbuffer()

创建渲染缓冲区。

```js
WebGLRenderbuffer gl.createRenderbuffer()
```

**返回值**：

WebGLRenderbuffer 类型的缓冲区。

**示例**：

```js
var gl = canvas.getContext('webgl');
var renderbuffer = gl.createRenderbuffer();
gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
```
