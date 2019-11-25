### rename()

`rename()` 是 fileSystemManager 对象的方法，该方法可根据传入的 `opts` 参数，重命名文件，可以把文件从 `oldPath` 移动到 `newPath`。

```js
fileSystemManager.rename(opts)
```
**opts 对象属性说明：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该方法时，要传入的对象参数|
|opts.oldPath|string|`''`|是|源文件/源目录路径|
|opts.newPath|string|`''`|是|目标路径|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`fail` 回调函数：
形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|报错信息 |

`res.errMsg` 的有效值：

|值|描述|
|-|-|
|fail permission denied, rename ${oldPath} -> ${newPath}|指定源文件或目标文件没有写权限|
|fail no such file or directory, rename ${oldPath} -> ${newPath}|源文件不存在，或目标文件路径的上层目录不存在|

`complete` 回调参数：
当接口执行成功时，其返回值与 success 回调函数的返回值相同；
当接口执行失败时，其返回值与 fail 回调函数的返回值相同。

**示例：**

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.rename({
    oldPath:'./a.txt',
    newPath:'./b',
    success: res => console.log('接口执行成功，a.txt转移到了b目录下'),
    fail: res => console.log('接口执行失败', res.errMsg),
    complete: res => console.log('接口执行完成');
});
```