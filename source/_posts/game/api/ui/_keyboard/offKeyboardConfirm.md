### swan.offKeyboardConfirm()

取消监听用户在点击键盘的 `confirm` 按钮时的事件。

```js
swan.offKeyboardConfirm(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|监听点击 `confirm` 时的事件回调函数|

**示例：**

```js
swan.showKeyboard();
swan.onKeyboardConfirm(confirmEvent);
swan.offKeyboardConfirm(confirmEvent);

function confirmEvent(res) {
    console.log(res.value)
}
```