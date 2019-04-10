### getActiveUniform()

获取活动统一变量（uniform）的信息。

```js
WebGLActiveInfo WebGLRenderingContext.getActiveUniform(program, index)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|program|WebGLProgram|包含顶点属性的程序对象|
|index|GLuint|要获取的顶点属性的偏移值，使用 `gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)` 可以获取当前活动统一变量的数量 `N`，这里 `index` 可取 0 到 `N - 1`|

**示例：**

```js
const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
for (let i = 0; i < numUniforms; ++i) {
    const info = gl.getActiveUniform(program, i);
    console.log('name:', info.name, 'type:', info.type, 'size:', info.size);
}
```
