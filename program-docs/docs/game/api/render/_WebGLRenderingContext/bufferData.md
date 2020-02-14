### bufferData()

创建和初始化缓冲区对象的数据存储。

```js
gl.bufferData(target, size, usage)
gl.bufferData(target, ArrayBuffer? srcData, usage)
gl.bufferData(target, ArrayBufferView srcData, usage)
```

**参数：**

|参数|类型|描述|
|-|-|-|
|target|GLenum|绑定点（binding point），也就是目标缓冲区对象。可取值为 `gl.ARRAY_BUFFER` 或 `gl.ELEMENT_ARRAY_BUFFER`。前者表示顶点缓冲类型，适用于包含顶点属性（如：顶点坐标、纹理坐标、顶点颜色等）；后者表示顶点索引缓冲，适用于元素索引值相关|
|size|GLsizeiptr|缓冲区对象的新数据存储的大小，以 Byte 为单位|
|usage|GLenum|数据存储的预期使用模式，通过指定可能的使用模式，使得有更好的性能。可取值：`gl.STATIC_DRAW`（缓冲区内容经常被使用但是不经常改变）、 `gl.DYNAMIC_DRAW`（缓冲区内容经常被使用与改变）、 `gl.STREAM_DRAW`（缓冲区内容不经常被使用）|
|srcData|ArrayBuffer &#124; SharedArrayBuffer &#124; ArrayBufferView|指定将要被复制到数据存储以进行初始化的数据，如果是 `null` 则数据存储仍会被创建，但是不会被初始化和定义|

**示例：**

```js
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
```
