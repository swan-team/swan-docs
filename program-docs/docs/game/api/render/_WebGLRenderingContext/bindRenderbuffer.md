### bindRenderbuffer()

绑定一个渲染缓冲区对象。一个渲染缓冲区对象可以是一个颜色表面、模板表面或者深度/模板组合表面。

```js
gl.bindRenderbuffer(target, rendererbuffer)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|target|GLenum|可取值为 `gl.RENDERBUFFER`|
|renderbuffer|WebGLRenderbuffer|一个正整数值，由 `gl.createRenderbuffer()` 生成，用以标记渲染缓冲区的名字|

**示例：**

```js
var gl = canvas.getContext('webgl');
var renderbuffer = gl.createRenderbuffer();
gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
```
