### readFile()

`fileSystemManager.readFile()` 用于读文件，是 [`readFileSync()`](#readFileSync) 的异步版本。

```js
fileSystemManager.readFile(opts)
```

`opts` 对象属性说明

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts.filePath|string| |是|文件/目录路径。“本地用户文件”须以 `swan.env.USER_DATA_PATH` 开头（如 `'swan.env.USER_DATA_PATH' + '/demo.txt'`），否则认为是“代码包文件”（如 `'asset/bg.jpg'`）。不支持相对路径。|
|opts.encoding|string| |否|指定读文件的字符编码。如果不指定，则读出 `ArrayBuffer`；如果指定，则读出 `string`。|
|opts.success|function| |否|成功回调函数。|
|opts.fail|function| |否|失败回调函数。|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）。|

`opts.encoding` 的有效值：

|值|描述|
|-|-|
|ascii| |
|base64|对读取的内容进行 base64 编码并返回。|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取。|
|utf-8/utf8| |
|latin1/binary|ISO-8859-1 的别名。|


`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.data|string/ArrayBuffer|如果传入了 `opts.encoding` 则返回 `string`，否则返回 `arrayBuffer`（文件二进制内容） |


`fail` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|报错信息 |


`res.errMsg` 的有效值：

|值|描述|
|-|-|
|fail no such file or directory ${filePath} | 文件/目录不存在。|
|fail permission denied, open ${dirPath}|指定的 filePath 路径没有写权限。|

`complete` 回调函数 `function (res) {...}`：

当接口执行成功时，其 `res` 与 `success` 的 `res` 相同；
当接口执行失败时，其 `res` 与 `fail` 的 `res` 相同。

**示例：**

```js
const fs = swan.getFileSystemManager();

fs.readFile({
    filePath: `${swan.env.USER_DATA_PATH}/demo.txt`,
    success: res => {
        // res.data 中为 arrayBuffer，文件内容。
    },
    fail: res => {
        // res.errMsg 为失败信息。
    },
    complete: () => {
        // 接口执行完成
    }
});

fs.readFile({
    filePath: `${swan.env.USER_DATA_PATH}/demo.txt`,
    encoding: 'utf8',
    success: res => {
        // res.data 中为 string，文件内容。
    },
    fail: res => {
        // res.errMsg 为失败信息。
    },
    complete: () => {
        // 接口执行完成
    }
});
```