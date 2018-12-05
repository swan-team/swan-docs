### swan.getUserCloudStorage()

获取当前用户托管数据（KVData）中对应 key 的数据，该接口只能在开放数据域下调用。

```js
swan.getUserCloudStorage(opts);
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该方法时，传入的对象参数|
|opts.keyList|Array.<`string\`>||是|要获取的托管数据的 key 列表|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`, 其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.KVDataList|Array.<[KVData](#KVData)\>|用户托管的 KV 数据列表|

`fail` 回调函数：

形如 `function (res) {...}`, 其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.errMsg|string|报错信息|

`complete` 回调函数：

当接口调用成功时，其返回值与 `success` 回调函数的返回值相同；
当接口调用失败时，其返回值与 `fail` 回调函数的返回值相同。

**示例：**

```js
swan.getUserCloudStorage({
    keyList: ['test1'],
    success: res => console.log('接口执行成功', res.KVDataList),
    fail: res => console.log('接口执行失败', res),
    complete: res => console.log('接口执行完成', res)
});
```