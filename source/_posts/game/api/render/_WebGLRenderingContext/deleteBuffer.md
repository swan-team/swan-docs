### deleteBuffer()

删除之前通过 [createBuffer](#createBuffer) 创建的缓冲区。删除后，该缓冲区的名字又可以被重新激活了。

```js
gl.deleteBuffer(buffer)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|buffer|WebGLBuffer|待删除的缓冲区|

**示例**：

```js
var buffer = gl.createBuffer();
// ...
gl.deleteBuffer(buffer);
```
