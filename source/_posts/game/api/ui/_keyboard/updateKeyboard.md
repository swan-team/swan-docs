### swan.updateKeyboard()

当键盘处于拉起状态时, 改变当前键盘输入框中的值。

```js
swan.updateKeyboard(opts)
```

**参数值**：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|
|opts|Object| |否|调用该方法时，要传入的对象参数|
|opts.value|string|`''`|否|更新之后的值|
|opts.success|function| |否|接口调用成功的回调函数|
|opts.fail|function| |否|接口调用失败的回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口调用成功、失败都会执行）|
