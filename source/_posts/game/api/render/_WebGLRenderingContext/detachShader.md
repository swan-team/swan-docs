### detachShader()

将着色器从程序对象中解除绑定，是 [`attachShader`](#attachShader) 的逆操作。

```js
gl.detachShader(program, shader)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|program|WebGLProgram|程序对象，`WebGLProgram` 的实例|
|shader|WebGLShader|片元着色器或顶点着色器|

**示例：**

```js
var program = gl.createProgram();
gl.attachShader(program, vertexShader);
// ...
gl.detachShader(vertexShader);
```
