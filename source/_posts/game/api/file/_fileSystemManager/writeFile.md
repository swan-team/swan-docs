### writeFile()

`fileSystemManager.writeFile()` 用于写文件，是 [`writeFileSync()`](#writeFileSync) 的异步版本。

```js
fileSystemManager.writeFile(opts)
```

`opts` 对象属性说明：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts.filePath|string| |是|文件/目录路径。须以 `swan.env.USER_DATA_PATH` 开头（如 `'swan.env.USER_DATA_PATH' + '/demo.txt'`）|
|opts.data|string/ArrayBuffer| |是|要写入的文本或二进制数据|
|opts.encoding|string| |否|指定写入文件的字符编码。如果 `data` 为 `ArrayBuffer`，就不要传入 `encoding`。如果 `data` 为 `string`，`encoding` 默认为 `utf8`|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

`opts.encoding` 的合法值：

|值|描述|
|-|-|
|ascii| |
|base64|对输入的字符串进行 base64 解码再写入|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8| |
|latin1/binary|ISO-8859-1 的别名|


`fail` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|报错信息|

`res.errMsg` 的合法值：

|值|描述|
|-|-|
|fail no such file or directory ${filePath}|文件/目录不存在|
|fail permission denied, open ${dirPath}|指定的 filePath 路径没有写权限|

`complete` 回调函数 `function (res) {...}`：

当接口执行成功时，其 `res` 与 `success` 的 `res` 相同；
当接口执行失败时，其 `res` 与 `fail` 的 `res` 相同。


**示例：**

```js
const fs = swan.getFileSystemManager();

fs.writeFile({
    filePath: `${swan.env.USER_DATA_PATH}/demo.txt`,
    data: 'hello',
    success: res => {
        // 写入成功。
    },
    fail: res => {
        // res.errMsg 为失败信息。
    },
    complete: () => {
        // 接口执行完成
    }
});

let bin = new Uint8Array(100);
for (let i = 0; i < bin.length; i++) {
    bin[i] = Math.round(Math.random() * 50);
}
fs.writeFile({
    filePath: `${swan.env.USER_DATA_PATH}/demo.bin`,
    data: bin.buffer,
    success: res => {
        // 写入成功。
    },
    fail: res => {
        // res.errMsg 为失败信息。
    },
    complete: () => {
        // 接口执行完成。
    }
});
```
