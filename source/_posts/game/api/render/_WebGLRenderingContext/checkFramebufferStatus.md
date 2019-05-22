### checkFramebufferStatus()

检查一个帧的完整性状态

```js
GLenum gl.checkFramebufferStatus(target)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|target|GLenum|绑定点（binding point），可取值：`gl.FRAMEBUFFER`|

**返回值**：

`GLenum` 类型的状态值，可取值为：

- `gl.FRAMEBUFFER_COMPLETE`：帧缓冲区就位，可以用于显示
- `gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT`：存在不完全绑定的帧缓冲区
- `gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`：没有图像绑定到帧缓冲区
- `gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS`：绑定的宽度或高度与帧缓冲区不符
- `gl.FRAMEBUFFER_UNSUPPORTED`：绑定的类型不支持，或深度、模板（stencil）绑定的不是同一个渲染帧

```js
var framebuffer = gl.createFramebuffer();
// ...
if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE) {
    // ...
}
```
