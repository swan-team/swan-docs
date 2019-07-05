### socketTask.onClose()

监听 WebSocket 连接关闭事件。

```js
socketTask.onClose(callback)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|callback|function|是|监听事件的回调函数|

`callback` 回调函数：

形如 `function (res) {...}`, 其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.errMsg|string|错误信息|

**示例：**

```js
const task = swan.connectSocket({
    url: 'wss://example.baidu.com' // 仅为示例，并非真实的接口地址
});

task.onOpen(() => task.close());

task.onClose(() => console.log('task close success.'));
```