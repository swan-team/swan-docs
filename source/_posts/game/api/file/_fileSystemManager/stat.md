### stat()

`stat()` 是 fileSystemManager 对象的方法，该方法可根据传入的 path 参数，生成文件的 `Stats` 对象，并在 success 回调函数中将该 `Stats` 对象返回。只能获取本地文件和本地临时文件。

```js
fileSystemManager.stat(opts)
```

**参数值**：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该方法时，要传入的对象参数|
|opts.path|string|`''`|是|文件/目录路径|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`success` 回调函数：
形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.stats|Stats|一个 Stats 类型的对象|

`fail` 回调函数：
形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|fail no such file or directory ${path} 指定的路径下文件不存在|
|||fail permission denied, open ${path} 指定目录不在本地路径下，没有读权限|
`complete` 回调参数：
当接口执行成功时，其返回值与 success 回调函数的返回值相同；
当接口执行失败时，其返回值与 fail 回调函数的返回值相同。

**其他方法**：

`stats.isDirectory()`
判断当前文件是否一个目录，返回 boolean 值

`stats.isFile()`
判断当前文件是否一个普通文件，返回 boolean 值

**示例**：

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.stat({
    path: swan.env.USER_DATA_PATH + '/demo.txt',
    success: res => {
        let stats = res.stats;
        console.log('接口执行成功，返回文件的Stats对象', res.stats);
        console.log('当前文件是否目录', stats.isDirectory());
        console.log('当前文件是否普通文件', stats.isFile());
    },
    fail: res => console.log('接口执行失败', res.errMsg),
    complete: res => console.log('接口执行完成', res);
});
```
