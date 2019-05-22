### colorMask()

设置颜色掩码，使得某些颜色通道不可写入。

```js
gl.colorMask(red, green, blue, alpha)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|red|boolean|红色通道是否可写入|
|green|boolean|绿色通道是否可写入|
|blue|boolean|蓝色通道是否可写入|
|alpha|boolean|透明度通道是否可写入|

**示例**：

```js
gl.colorMask(true, false, true, false);
```

上面的例子中，将绿色通道与透明度通道的掩码设为 `false`，再写入颜色时，这两个通道将不会被改变。
