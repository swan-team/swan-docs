### createFrameBuffer()

创建帧缓冲区。

帧缓冲区其实是不是真正的缓冲区，也就是说，并不存在一个与帧缓冲区对象相关联的真正内存存储空间。帧缓冲区其实是一种容器，用于存储纹理缓冲区、渲染缓冲区等。

```js
WebGLFrameBuffer gl.createFrameBuffer()
```

**返回值**：

WebGLFrameBuffer 类型的缓冲区。

**示例**：

```js
var gl = canvas.getContext('webgl');
var framebuffer = gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
```
