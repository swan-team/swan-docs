### attachShader()

将着色器 `shader` 绑定到程序对象 `program` 上。

`program` 是 `WebGLProgram` 的实例，它负责将片元着色器与顶点着色器绑在一起。

```js
gl.attachShader(program, shader)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|program|WebGLProgram|程序对象，`WebGLProgram` 的实例|
|shader|WebGLShader|片元着色器或顶点着色器|

**示例**：

```js
// 创建 program
var program = gl.createProgram();

// 绑定顶点着色器与片元着色器
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

// 连接 program
gl.linkProgram(program);
```
