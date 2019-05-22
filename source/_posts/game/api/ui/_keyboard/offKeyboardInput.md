### swan.offKeyboardInput()

取消监听键盘的输入事件。

```js
swan.offKeyboardInput(callback)
```

**参数值**：

|参数|类型|描述|
|-|-|-|
|callback|function|监听键盘输入事件的回调函数|

**示例**：

```js
swan.showKeyboard();
swan.onKeyboardInput(inputEvent);
swan.offKeyboardInput(inputEvent);

function inputEvent(res) {
    console.log(res.value)
}
```