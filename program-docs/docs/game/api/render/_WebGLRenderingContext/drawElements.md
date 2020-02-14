### drawElements()

从数组数据渲染图元。

```js
gl.drawElements(mode, count, type, offset)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|mode|GLenum|绘制方式，可取值：`gl.POINTS`（单独的点）、 `gl.LINE_STRIP`（折线段）、 `gl.LINE_LOOP`（折线段，最后一个点与第一个点连接）、 `gl.LINES`（每两个点画成一个线段）、 `gl.TRIANGLE_STRIP`（三角形带）、 `gl.TRIANGLE_FAN`（三角形扇面）、 `gl.TRIANGLES`（每三个点画成一个三角形）|
|count|GLsizei|绘制多少个数组元素|
|type|GLenum|数组元素类型，可取值：`gl.UNSIGNED_BYTE`、 `gl.UNSIGNED_SHORT`|
|offset|GLintptr|偏移值，应是 `type` 对应长度的整数倍|

**示例：**

```js
gl.drawElements(gl.POINTS, 8, gl.UNSIGNED_BYTE, 0);
```
