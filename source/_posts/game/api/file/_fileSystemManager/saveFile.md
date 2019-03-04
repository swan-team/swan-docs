### saveFile()

`saveFile()` 是 fileSystemManager 对象的方法，该方法可根据传入的 `opts` 参数，保存临时文件到本地。此接口会移动临时文件，因此调用成功后,  `tempFilePath` 将不可用。

```js
fileSystemManager.saveFile(opts)
```

**opts 对象属性说明：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该方法时，要传入的对象参数|
|opts.tempFilePath|string||是|临时存储文件路径|
|opts.filePath|string||否|要存储的文件路径|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`success` 回调函数：
形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.savedFilePath|string|存储后的文件路径 |


`fail` 回调函数：
形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|报错信息 |

`res.errMsg` 的合法值：

| 值                                     | 描述                                            |
| -------------------------------------- | -----------------------------------------------|
| fail no such file or directory ${dirPath} | 上级目录不存在
| fail tempFilePath file not exist|指定的 tempFilePath 无法找到文件
| fail permission denied, open ${filePath} | 指定的 filePath 路径没有写权限

`complete` 回调参数：
当接口执行成功时，其返回值与 success 回调函数的返回值相同；
当接口执行失败时，其返回值与 fail 回调函数的返回值相同。

**示例：**

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.saveFile({
    tempFilePath:'/usr/temp.txt',
    filePath:'/usr/demo.txt',
    success: res => {
        // 存储后的文件路径
        console.log(res.savedFilePath);
    },
    fail: res => console.log('接口执行失败', res.errMsg),
    complete: res => console.log('接口执行完成')
});
```