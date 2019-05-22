### deleteProgram()

删除之前通过 [createProgram](#createProgram) 创建的程序对象。删除后，该程序对象的名字又可以被重新激活了。

```js
gl.deleteProgram(program)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|program|WebGLProgram|待删除的程序对象|

**示例**：

```js
var program = gl.createProgram();
// ...
gl.deleteProgram(program);
```
