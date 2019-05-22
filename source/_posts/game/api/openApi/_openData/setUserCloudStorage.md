### swan.setUserCloudStorage()

写入用户托管数据，可以以数组形式传入多个 `KVData` 数据。

```js
swan.setUserCloudStorage(opts);
```

**参数值**：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object|{}|是|调用该方法时，要传入的对象参数|
|opts.KVDataList|Array.<[KVData](#KVData)\>||是|要修改的 KVData 数据列表|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`, 其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.errMsg|string|写入数据成功信息|

`fail` 回调函数：

形如 `function (res) {...}`, 其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.errMsg|string|报错信息|

`complete` 回调函数：

当接口调用成功时，其返回值与 `success` 回调函数的返回值相同；
当接口调用失败时，其返回值与 `fail` 回调函数的返回值相同。

**示例**：

```js
swan.setUserCloudStorage({
  KVDataList: [{key: 'score', value: '123'}, {key: 'cardId', value: '1'}],
  success: res => console.log(res),
  fail: res => console.log(res),
  complete: res => console.log(res)
});
```

**用户托管数据的限制**

1. 每个 swanId 所对应的百度用户在单个游戏上托管的数据不能超过 128 个 key-value 键值对。

2. 上报托管的 key-value 键值对列表中每一项的 key+value 长度都不能超过 1024 个字节。

3. 上报托管的 key-value 键值对列表中每一项的 key 长度都不能超过 128 个字节。
