### getAttachedShaders()

获取已绑定到程序对象的着色器数组。

```js
WebGLShader[] gl.getAttachedShaders(program)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|program|WebGLProgram|绑定着色器的程序对象|

**返回值：**

`WebGLShader[]` 类型的着色器数组。

**示例：**

```js
var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
// ...
gl.getAttachedShaders(program);
```
