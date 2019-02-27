### depthMask()

激活或禁用深度缓冲区写入。禁用后，深度缓冲区将不能被写入。

```js
gl.depthMask(flag)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|flag|GLboolean|是否允许写入|

**示例：**

```js
gl.depthMask(false);
```
