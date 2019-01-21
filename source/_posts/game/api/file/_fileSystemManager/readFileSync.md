### readFileSync()

`fileSystemManager.readFileSync()` 用于读文件，是 [`readFile()`](#readFile) 的同步版本。

```js
let data = fileSystemManager.readFileSync(filePath, encoding)
```

**参数值：**

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|filePath|string| |是|文件/目录路径。“本地用户文件”须以 `swan.env.USER_DATA_PATH` 开头（如 `'swan.env.USER_DATA_PATH' + '/demo.txt'`），否则认为是“代码包文件”（如 `'asset/bg.jpg'`）。不支持相对路径。|
|encoding|string| |否|指定写入文件的字符编码。如果不指定，则读出 `ArrayBuffer`；如果指定，则读出 `string`。|

`encoding` 的合法值：

|值|描述|
|-|-|
|ascii| |
|base64|对读取的内容进行 base64 编码并返回。|
|hex|十六进制。|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8| |
|latin1/binary|ISO-8859-1 的别名|

**返回值：**

|类型|描述|
|-|-|
|string/ArrayBuffer|如果 `encoding` 被指定，则返回 `string`；如果 `encoding` 没有被指定，则返回 `ArrayBuffer`。|


若接口调用失败，会抛出一个标准的 Error 对象，报错信息如下：

|error.message|描述|
|-|-|
|fail no such file or directory, open ${filePath}|指定的 filePath 文件不存在|
|fail permission denied, open ${dirPath}|指定的 filePath 路径没有写权限|

**示例：**

```js
const fs = swan.getFileSystemManager();

try {
    let data = fs.readFileSync(
        `${swan.env.USER_DATA_PATH}/demo.txt`,
        'utf8'
    );
    // 读用户文件成功，文件内容为 hello
}
catch (err) {
    // 出错了，读文件失败
    console.log(err.message);
}

try {
    let data = fs.writeFileSync(
        `${swan.env.USER_DATA_PATH}/demo.bin`
    );
    // 读用户文件成功，文件内容为 arrayBuffer 指定的内容。
}
catch (err) {
    // 出错了，读文件失败
    console.log(err.message);
}

try {
    let gameJSON = fs.writeFileSync(
        `game.json`,
         'utf8'
    );
    // 读代码文件成功。
}
catch (err) {
    // 出错了，读文件失败
    console.log(err.message);
}
```
