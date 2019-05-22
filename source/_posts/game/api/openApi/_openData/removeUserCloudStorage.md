### swan.removeUserCloudStorage()

删除当前用户在该小游戏中托管的对应 key 的数据。

```js
swan.removeUserCloudStorage(opts);
```

**参数值**：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object|{}|是|调用该方法时，传入的对象参数|
|opts.keyList|Array| |是|要删除的托管数据的 key 列表|
|opts.success|function| |否|接口调用成功的回调函数|
|opts.fail|function| |否|接口调用失败的回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`, 其中：

|属性|类型|描述|
|-|-|-|
|res|Object|回调函数参数对象|
|res.errMsg|string|移除数据成功信息|

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
swan.removeUserCloudStorage({
  keyList: [ "score", "cardId" ],
  success: res => console.log(res),
  fail: res => console.log(res),
  complete: res => console.log(res)
});
```
