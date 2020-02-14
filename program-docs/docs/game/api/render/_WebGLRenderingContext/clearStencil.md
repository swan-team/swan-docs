### clearStencil()

设置清除模板缓冲区的模板值。

```js
gl.clearStencil(s)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|s|GLint|在模板缓冲区清除时的索引，默认值为 0|

`s` 由 2<sup>m</sup> - 1 进行遮罩，其中 m 是模板缓冲区中的位数。

**示例：**

```js
gl.clearStencil(1);
```
