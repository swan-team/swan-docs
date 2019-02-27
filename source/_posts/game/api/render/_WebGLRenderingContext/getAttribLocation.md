### getAttribLocation()

获取一个顶点着色器属性变量（attribute variable）在程序对象中的位置。

```js
GLint gl.getAttribLocation(program, name)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|program|WebGLProgram|绑定着色器的程序对象|
|name|string|属性变量名称|

**返回值：**

如果找到，返回 `GLint` 类型的位置；否则返回 `-1`。

**示例：**

```js
gl.getAttribLocation(program, 'vColor');
```
