### swan.onMessage()

开放数据域中调用，用来监听主域发送过来的消息。

```js
swan.onMessage(callback)
```
**参数值**：

|参数|类型|描述|
|-|-|-|
|callback|function|监听事件的回调函数|

`callback` 回调参数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res|Object|从主域发送过来的消息|

**示例**：

```js
// 开放数据域中
swan.onMessage(res => console.log(res))
```