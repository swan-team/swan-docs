### framebufferRenderbuffer()

将一个渲染缓冲区对象绑到一个帧缓冲区对象。

```js
gl.framebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|target|GLenum|绑定点（binding point），可取值：`gl.FRAMEBUFFER`|
|attachment|GLenmu|指定 `renderbuffer` 应该绑定到帧缓冲区对象的颜色缓冲区或深度缓冲区或模板缓冲区，可取值：`gl.COLOR_ATTACHMENT0`（颜色缓冲区）、 `gl.DEPTH_ATTACHMENT`（深度缓冲区）、 `gl.DEPTH_STENCIL_ATTACHMENT`（深度和模板缓冲区）、 `gl.STENCIL_ATTACHMENT`（模板缓冲区）|
|renderbuffertarget|GLenum|渲染缓冲区的绑定点，可取值：`gl.RENDERBUFFER`|
|renderbuffer|WebGLRenderbuffer|待绑定的渲染缓冲区对象|

**示例：**

```js
gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, renderbuffer);
```
