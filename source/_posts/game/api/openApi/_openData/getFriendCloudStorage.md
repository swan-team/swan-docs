### swan.getFriendCloudStorage()

获取当前用户双向关注的同玩好友的托管数据，这里的双向关注是指彼此相互关注。该接口只能在开放数据域下调用。

```js
swan.getFriendCloudStorage(opts);
```

**参数值**：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object|{}|是|调用该接口时，传入的对象参数|
|opts.keyList|Array.<`string`>| |是|要获取的托管数据的 key 列表|
|opts.success|function| |否|接口调用成功的回调函数|
|opts.fail|function| |否|接口调用失败的回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口调用成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`, 其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.data|Array.<[UserGameData](#UserGameData)\>|获取的双向关注同玩好友的托管数据|
