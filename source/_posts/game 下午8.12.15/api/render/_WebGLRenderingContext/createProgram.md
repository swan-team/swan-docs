### createProgram()

创建程序程序对象。参见 [compileShader](#compileShader)。

```js
WebGLProgram gl.createProgram()
```

**返回值：**

WebGLProgram 类型的程序对象。

**示例：**

```js
var program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
```
