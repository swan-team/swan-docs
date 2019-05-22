### cullFace()

设置是否剔除正面（面向观察者的面片）或背面（背向观察者的面片）。

剔除有多种作用，一般而言，去除那些始终不被看到的背面，可以避免浪费时间，从而提高性能。除此之外，还能用来指定某些面不被显示。

```js
gl.cullFace(mode)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|mode|GLenum|指定对正面或背面进行剔除，可取值：`gl.FRONT` 表示剔除正面（也就是不显示正面）、 `gl.BACK` 表示剔除背面、 `gl.FRONT_AND_BACK` 表示正面背面都剔除（都不显示）|

**示例**：

需要注意的是，还需要调用 `gl.enable(gl.CULL_FACE)` 才能开启剔除。

```js
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.BACK);
```
