### getActiveAttrib()

获取活动属性（attribute）变量的信息。

```js
WebGLActiveInfo gl.getActiveAttrib(program, index)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|program|WebGLProgram|包含顶点属性的程序对象|
|index|GLuint|要获取的顶点属性的偏移值，使用 `gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES)` 可以获取当前活动顶点属性的数量 `N`，这里 `index` 可取 0 到 `N - 1`|

**示例：**

```js
const numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
for (let i = 0; i < numAttribs; ++i) {
    const info = gl.getActiveAttrib(program, i);
    console.log('name:', info.name, 'type:', info.type, 'size:', info.size);
}
```
