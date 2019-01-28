### deleteTexture()

删除之前通过 [createTexture](#createTexture) 创建的纹理。删除后，该纹理的名字又可以被重新激活了。

```js
gl.deleteTexture(texture)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|texture|WebGLTexture|待删除的纹理|

**示例：**

```js
var texture = gl.createTexture();
// ...
gl.deleteTexture(texture);
```
