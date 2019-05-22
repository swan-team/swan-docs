### innerAudioContext.onError()

监听音频播放错误事件。

```js
innerAudioContext.onError(callback)
```

**参数值**：

|属性|类型|是否必填|描述|
|-|-|-|
|callback|function|是|监听事件的回调函数|

**回调函数参数值**：
**Object res**

|属性|类型|描述|支持版本|
|-|-|-|-|
|res| Object |回调函数参数值||
|res.errCode|string|错误码||
|res.errMsg|string|错误说明| |

**errCode 的合法值:**

|值|说明|
|-|-|
|10001|系统错误|
|10002|网络错误|
|10003|文件错误|
|10004|格式错误|
|-1|未知错误|

**注意：Android 的返回值不包含 errMsg**