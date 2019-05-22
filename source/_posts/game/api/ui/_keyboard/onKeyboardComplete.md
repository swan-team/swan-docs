### swan.onKeyboardComplete()

监听键盘收起的事件。

```js
swan.onKeyboardComplete(callback)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|callback|function|监听键盘收起的事件回调函数|

`callback` 回调参数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调返回对象|
|res.value|string|当前键盘输入框里面的所有的值|