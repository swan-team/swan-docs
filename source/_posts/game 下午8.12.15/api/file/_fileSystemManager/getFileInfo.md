### getFileInfo()

`getFileInfo()` 是 fileSystemManager 对象的方法，该方法可获取到本地临时文件的相关信息， 并在 success 回调函数中返回该文件大小。

```js
fileSystemManager.getFileInfo(opts)
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该方法时，要传入的对象参数|
|opts.filePath|string||是|读取的文件路径|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`success` 回调函数：
形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.size|number|文件大小，以字节为单位|

`fail` 回调函数：
形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|fail file not exist 指定的路径下该文件不存在|

**示例：**

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.getFileInfo({
    filePath: swan.env.USER_DATA_PATH + '/demo.txt',
    success: res => console.log('接口执行成功，返回文件的size值', res.size),
    fail: res => console.log('接口执行失败', res.errMsg),
    complete: res => console.log('接口执行完成', res);
});
```