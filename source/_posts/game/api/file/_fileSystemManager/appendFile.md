### appendFile()

`appendFile()` 是 fileSystemManager 对象的方法，该方法可根据传入的 `opts` 参数，在文件结尾追加内容。

```js
fileSystemManager.appendFile(opts)
```
**opts 对象属性说明：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object||是|调用该方法时，要传入的对象参数|
|opts.filePath|string||是|文件/目录路径|
|opts.data|string/ArrayBuffer||是|要追加的文本或二进制内容|
|opts.encoding|string|`utf-8`|否|指定写入文件的字符编码|
|opts.success|function| |否|成功回调函数|
|opts.fail|function| |否|失败回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|
`encoding` 的合法值:

|值|描述|
|-|-|
|ascii| |
|base64|对输入的字符串进行 base64 解码再写入|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8||
|latin1/binary|ISO-8859-1 的别名|

`fail` 回调函数：
形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|报错信息 |


`res.errMsg` 的合法值：

| 值                                     | 描述
|-|-|
|fail no such file or directory, open ${filePath}|指定的 filePath 文件不存在
| fail illegal operation on a directory, open "${filePath}"| 指定的 filePath 是一个已经存在的目录
|fail permission denied, open ${dirPath}|指定的 filePath 路径没有写权限
|fail sdcard not mounted|sd 卡没有安装

`complete` 回调参数：
当接口执行成功时，其返回值与 success 回调函数的返回值相同；
当接口执行失败时，其返回值与 fail 回调函数的返回值相同。

**示例：**

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.appendFile({
    filePath: swan.env.USER_DATA_PATH + '/demo.txt',
    data:'hello',
    success: res => console.log('接口执行成功，已追加内容'),
    fail: res => console.log('接口执行失败', res.errMsg),
    complete: res => console.log('接口执行完成')
});
```