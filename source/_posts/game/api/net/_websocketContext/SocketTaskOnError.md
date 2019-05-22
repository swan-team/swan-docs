### socketTask.onError()

监听 WebSocket 错误事件。

```js
socketTask.onError(callback)
```

**参数值**：

|属性|类型|是否必填|描述|
|-|-|-|-|
|callback|function|是|监听事件的回调函数|

`callback` 回调函数：

形如 `function (res) {...}`, 其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.errMsg|string|错误信息|

**示例**：

```js
const task = swan.connectSocket({
    // 错误的 url，连接失败，调用 onError 回调。
    url: 'wss://sddfefv' // 仅为示例，并非真实的接口地址
});

task.onError(res => console.log('tast connect error.', res.errMsg));
```
