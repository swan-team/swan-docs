### innerAudioContext.onWaiting()

监听音频加载中事件，当音频因为数据不足，需要停下来加载时会触发。

```js
innerAudioContext.onWaiting(callback)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|
|callback|function|是|监听事件的回调函数|