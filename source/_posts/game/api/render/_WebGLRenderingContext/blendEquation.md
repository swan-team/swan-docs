### blendEquation()

设置混合函数，也就是指定源和目标颜色如何进行组合。

```js
gl.blendEquation(mode)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|mode|GLenum|混合模式，可取值：`gl.FUNC_ADD`、 `gl.FUNC_SUBTRACT`、 `gl.FUNC_REVERSE_SUBTRACT`，分别表示源 + 目标、源 - 目标、目标 - 源|

**示例**：

```js
gl.blendEquation(gl.FUNC_ADD);
```
