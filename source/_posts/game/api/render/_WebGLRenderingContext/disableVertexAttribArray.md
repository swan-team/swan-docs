### disableVertexAttribArray()

使得特定索引对应的一般顶点属性数组（generic vertex attribute array）失效。参见 [enableVertexAttribArray](#enableVertexAttribArray)。

```js
gl.disableVertexAttribArray(index)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|index|GLuint|指定一般顶点属性的索引|

**示例：**

```js
var aVertexPosition =
    gl.getAttribLocation(shaderProgram, "aVertexPosition");
// ...
gl.disableVertexAttribArray(aVertexPosition)
```
