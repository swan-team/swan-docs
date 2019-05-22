### activeTexture()

激活指定的纹理。

```js
gl.activeTexture(texture)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|texture|WebGLTexture|激活的纹理，其值为 `gl.TEXTUREx`（其中 `x` 为 `0` 到 `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1`）|

`gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS` 是支持的纹理个数。

**示例**：

```js
activeTexture(gl.TEXTURE0);
```
