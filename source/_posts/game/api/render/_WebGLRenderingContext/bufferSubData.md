### bufferSubData()

更新缓冲区对象的数据存储的子集。

```js
gl.bufferSubData(target, offset, ArrayBuffer|ArrayBufferView srcData)
```

**参数**：

|参数|类型|描述|
|-|-|-|
|target|GLenum|绑定点（binding point），也就是目标缓冲区对象。可取值为 `gl.ARRAY_BUFFER` 或 `gl.ELEMENT_ARRAY_BUFFER`。前者表示顶点缓冲类型，适用于包含顶点属性（如：顶点坐标、纹理坐标、顶点颜色等）；后者表示顶点索引缓冲，适用于元素索引值相关|
|offset|GLintptr|开始替换的数据存储中的偏移，以 Byte 为单位|
|srcData|ArrayBuffer &#124; SharedArrayBuffer &#124; ArrayBufferView|指定将要被复制到数据存储以进行初始化的数据|

**示例**：

```js
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
gl.bufferSubData(gl.ARRAY_BUFFER, 512, data);
```
