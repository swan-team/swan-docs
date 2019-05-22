### deleteFramebuffer()

删除之前通过 [createFramebuffer](#createFramebuffer) 创建的帧缓冲区。删除后，该缓冲区的名字又可以被重新激活了。

```js
gl.deleteFramebuffer(buffer)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|buffer|WebGLFramebuffer|待删除的帧缓冲区|

**示例**：

```js
var framebuffer = gl.createFramebuffer();
// ...
gl.deleteFramebuffer(framebuffer);
```
