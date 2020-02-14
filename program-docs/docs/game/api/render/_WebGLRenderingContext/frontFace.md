### frontFace()

定义多边形正面和背面。

```js
gl.frontFace(mode)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|mode|GLenum|设置顺时针 `gl.CW` 或逆时针 `gl.CCW` 为正面方向|

**示例：**

```js
gl.frontFace(gl.CW);
```
