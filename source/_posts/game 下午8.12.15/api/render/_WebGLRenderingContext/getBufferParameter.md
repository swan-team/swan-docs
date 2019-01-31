### getBufferParameter()

返回缓冲区参数。

```js
GLint|GLenum gl.getBufferParameter(target, pname)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|target|GLenum|目标缓冲区类型，可取值：`gl.ARRAY_BUFFER`（包含顶点属性的缓冲区，如顶点坐标、纹理坐标数据等）、 `gl.ELEMENT_ARRAY_BUFFER`（元素下标数组）|
|pname|GLenum|查询信息，可取值：`gl.BUFFER_SIZE`（返回 `GLint` 类型的缓冲区大小）、 `gl.BUFFER_USAGE`（返回 `GLenum` 类型的缓冲区模式，包括：`gl.STATIC_DRAW`、 `gl.DYNAMIC_DRAW`、 `gl.STREAM_DRAW`，参见 [bufferData](#bufferData)）|

**返回值：**

根据 `pname` 不同，返回 `GLint` 或 `GLenum` 类型的查询结果。

**示例：**

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
```
