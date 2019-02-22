### drawArrays()

从数组渲染图元。

```js
gl.drawArrays(mode, first, count)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|mode|GLenum|绘制方式，可取值：`gl.POINTS`（单独的点）、 `gl.LINE_STRIP`（折线段）、 `gl.LINE_LOOP`（折线段，最后一个点与第一个点连接）、 `gl.LINES`（每两个点画成一个线段）、 `gl.TRIANGLE_STRIP`（三角形带）、 `gl.TRIANGLE_FAN`（三角形扇面）、 `gl.TRIANGLES`（每三个点画成一个三角形）|
|first|GLint|从数组中第几个元素开始绘制|
|count|GLsizei|绘制多少个数组元素|

**示例：**

```js
gl.drawArrays(gl.POINTS, 0, 8);
```
