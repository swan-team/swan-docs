### bindAttribLocation()

指定属性（attribute）在着色器中的位置（location）。

```js
gl.bindAttribLocation(program, index, name)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|program|WebGLProgram|程序对象|
|index|GLuint|指定将要绑定的一般顶点属性的索引|
|name|string|着色器属性变量名称|

**注意：**

该方法需要在着色器对象被绑定到程序对象之前调用。

**示例：**

```js
var positionLocation = 0;
var colorLocation = 1;
gl.bindAttribLocation(program, positionLocation, 'vPosition');
gl.bindAttribLocation(program, colorLocation, 'vColor');
```

上例将顶点着色器中顶点位置 `vPosition` 的在着色器属性的位置设为 `0`，顶点颜色 `vColor` 的位置设为 `1`。
