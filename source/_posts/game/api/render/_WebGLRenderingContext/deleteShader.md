### deleteShader()

删除之前通过 [createShader](#createShader) 创建的着色器。删除后，该着色器的名字又可以被重新激活了。

```js
gl.deleteShader(shader)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|shader|WebGLShader|待删除的着色器|

**示例：**

```js
var shader = gl.createShader(gl.VERTEX_SHADER);
// ...
gl.deleteShader(shader);
```
