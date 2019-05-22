### access()

`access()` 是 fileSystemManager 对象的方法，该方法可根据传入的 `opts` 参数，判断文件/目录是否存在。

```js
fileSystemManager.access(opts)
```

**opts 对象属性说明**：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该方法时，要传入的对象参数|
|opts.path|string|`''`|是|文件/目录路径|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|


`fail` 回调函数：
形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|报错信息 |



`res.errMsg` 的合法值：

| 值| 描述|
|-|-|
| fail no such file or directory ${path} | 文件/目录不存在

`complete` 回调参数：
当接口执行成功时，其返回值与 success 回调函数的返回值相同；
当接口执行失败时，其返回值与 fail 回调函数的返回值相同。

**示例**：

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.access({
    path: swan.env.USER_DATA_PATH + '/demo.txt',
    success: res => console.log('接口执行成功，demo.txt文件存在'),
    fail: res => console.log('接口执行失败', res.errMsg),
    complete: res => console.log('接口执行完成')
});
```