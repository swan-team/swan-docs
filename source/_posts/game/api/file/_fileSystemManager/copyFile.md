### copyFile()

`copyFile()` 是 fileSystemManager 对象的方法，用于实现文件拷贝。

```js
fileSystemManager.copyFile(opts)
```

**参数值**

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts.srcPath|string|``|是|要被拷贝的源文件名称|
|opts.destPath|string|``|是|拷贝操作的目标文件名|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`fail` 回调参数：

|参数|类型|描述|
|-|-|-|
|errMsg|string|报错信息 |

errMsg 的合法值

| 值                                     | 描述                                            |
| -------------------------------------- | -----------------------------------------------|
| fail no such file or directory | 文件/目录不存在                                      |
| fail permission denied, copyFile ${srcPath} -> ${destPath} | 指定目标文件路径没有写权限 |
| `srcPath` should be string | 参数类型错误，`srcPath` 参数应该是 string 类型|
| `destPath` should be string | 参数类型错误，`destPath` 参数应该是 string 类型|

`complete` 回调参数：
当接口执行成功时，其返回值与 success 回调函数的返回值相同；
当接口执行失败时，其返回值与 fail 回调函数的返回值相同。

**示例**：

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.copyFile({
    srcPath: `${swan.env.USER_DATA_PATH}/demo/demo.txt`,
    destPath: `${swan.env.USER_DATA_PATH}/dest/dest.txt`,
    success: res => console.log('拷贝成功', res.errMsg),
    fail: res => console.log('接口执行失败', res.errMsg),
    complete: res => console.log('接口执行完成', res.errMsg)
});
```