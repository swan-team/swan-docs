### createShader()

创建着色器。参见 [compileShader](#compileShader)。

```js
WebGLShader gl.createShader(type)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|type|GLenum|着色器类型，可取值：`gl.VERTEX_SHADER` 表示顶点着色器，`gl.FRAGMENT_SHADER` 表示片段着色器。|

**返回值：**

WebGLShader 类型的着色器。

**示例：**

```js
var vertId = gl.createShader(gl.VERTEX_SHADER);
var vert = document.getElementById('vertScript').text;
gl.shaderSource(vertId, vert);
```
