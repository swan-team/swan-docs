### generateMipmap()

对当前绑定的活动纹理，生成多分辨率纹理（mipmap）。

多分辨率纹理是为不同远近的物体采取不同分辨率纹理的意思。对于离屏幕近的物体，使用更大的分辨率以达到更好的渲染效果；对于离屏幕远的物体，使用更小的分辨率以节约渲染开销。

```js
gl.generateMipmap(target)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|target|GLenum|绑定点（binding point），可取值：`gl.TEXTURE_2D` 表示二维纹理，`gl.TEXTURE_CUBE_MAP` 表示立方体纹理|

**示例：**

```js
gl.generateMipmap(gl.TEXTURE_2D);
```
