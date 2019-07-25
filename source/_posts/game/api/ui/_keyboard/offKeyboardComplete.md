### swan.offKeyboardComplete()

取消监听键盘收起事件。

```js
swan.offKeyboardComplete(callback)
```

**参数值：**

|参数|类型|描述|
|-|-|-|
|callback|function|监听键盘收起的事件回调函数|

**示例：**

```js
swan.showKeyboard();
swan.onKeyboardComplete(completeEvent);
swan.offKeyboardComplete(completeEvent);

function completeEvent(res) {
    console.log(res.value)
}
```