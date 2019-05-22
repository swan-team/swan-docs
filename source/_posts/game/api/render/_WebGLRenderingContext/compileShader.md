### compileShader()

对顶点着色器或片段着色器中的源代码字符串进行编译。

```js
gl.compileShader(shader)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|shader|WebGLShader|顶点着色器或片段着色器，由 `gl.createShader` 生成。|

**示例**：

在 WebGL 中使用着色器的步骤通常是（其中步骤 1 到 4 是需要分别对顶点着色器与片段着色器做的）：

1. 通过 `gl.createShader` 创建着色器；
2. 通过 `gl.shaderSource` 为着色器指定字符串形式的源代码；
3. 通过 `gl.compileShader` 编译着色器；
4. 通过 `gl.getShaderParameter` 检查编译是否成功；
5. 如果没有问题，则将顶点着色器与片段着色器通过 `gl.attachShader` 绑定在一起，也就是程序对象 `program` 上；
6. 通过 `gl.linkProgram` 连接程序对象；
7. 通过 `gl.getProgramParameter` 检查连接是否成功。

所以，一个典型的初始化着色器步骤如下所示：

```js
function initShaderProgram() {
    // Create Program and Shaders
    shaderId = gl.createProgram();
    var vertId = gl.createShader(gl.VERTEX_SHADER);
    var fragId = gl.createShader(gl.FRAGMENT_SHADER);

    // Load Shader Source (source text are in scripts below)
    var vert = document.getElementById('vertScript').text;
    var frag = document.getElementById('fragScript').text;
    gl.shaderSource(vertId, vert);
    gl.shaderSource(fragId, frag);

    // Compile Shaders
    gl.compileShader(vertId);
    gl.compileShader(fragId);

    // Check Vertex Shader Compile Status
    if (!gl.getShaderParameter(vertId, gl.COMPILE_STATUS)) {
        alert('Vertex Shader Compiler Error: ' + gl.getShaderInfoLog(id));
        gl.deleteShader(vertId);
        return null;
    }

    // Check Fragment Shader Compile Status
    if (!gl.getShaderParameter(fragId, gl.COMPILE_STATUS)) {
        alert('Fragment Shader Compiler Error: ' + gl.getShaderInfoLog(id));
        gl.deleteShader(fragId);
        return null;
    }

    // Attach and Link Shaders
    gl.attachShader(shaderId, vertId);
    gl.attachShader(shaderId, fragId);
    gl.linkProgram(shaderId);

    // Check Shader Program Link Status
    if (!gl.getProgramParameter(shaderId, gl.LINK_STATUS)) {
      alert('Shader Linking Error: ' + gl.getProgramInfoLog(shader));
    }
}
```
