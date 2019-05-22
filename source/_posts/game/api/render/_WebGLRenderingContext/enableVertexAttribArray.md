### enableVertexAttribArray()

使得特定索引对应的一般顶点属性数组（generic vertex attribute array）生效。生效后，一般顶点属性数组中的值将能被访问到，并且能够使用诸如 `glDrawArrays`、 `glDrawElements` 之类的顶点数组指令。

```js
gl.enableVertexAttribArray(index)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|index|GLuint|指定一般顶点属性的索引|

**示例**：

```js
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

aVertexPosition = gl.getAttribLocation(shaderProgram, "aVertexPosition");
gl.enableVertexAttribArray(aVertexPosition);
gl.vertexAttribPointer(aVertexPosition, vertexNumComponents, gl.FLOAT, false, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
```

上例中 `aVertexPosition` 就是一般顶点属性数组的索引。
