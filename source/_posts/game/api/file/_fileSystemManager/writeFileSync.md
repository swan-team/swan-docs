### writeFileSync()

`fileSystemManager.writeFileSync()` 用于写文件，是 [`writeFile()`](#writeFile) 的同步版本。

```js
fileSystemManager.writeFileSync(filePath, data, encoding)
```

**参数值：**

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|filePath|string| |是|文件/目录路径。须以 `swan.env.USER_DATA_PATH` 开头（如 `'swan.env.USER_DATA_PATH' + '/demo.txt'`）。|
|data|string/ArrayBuffer| |是|要写入的文本或二进制数据。|
|encoding|string| |否|指定写入文件的字符编码。如果 `data` 为 `ArrayBuffer`，就不要传入 `encoding`。如果 `data` 为 `string`，`encoding` 默认为 `utf8`。|

`encoding` 的合法值：

|值|描述|
|-|-|
|ascii| |
|base64|对输入的字符串进行 base64 解码再写入|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8| |
|latin1/binary|ISO-8859-1 的别名|

若接口调用失败，会抛出一个标准的 Error 对象，报错信息如下：

|error.message|描述|
|-|-|
|fail no such file or directory, open ${filePath}|指定的 filePath 文件不存在。|
|fail permission denied, open ${dirPath}|指定的 filePath 路径没有写权限。|

**示例：**

```js
const fs = swan.getFileSystemManager();

try {
    fs.writeFileSync(
        `${swan.env.USER_DATA_PATH}/demo.txt`,
        'hello',
        'utf8'
    );
    // 写文件成功，文件内容为 hello
}
catch (err) {
    // 出错了，写文件失败
    console.log(err.message);
}

try {
    let bin = new Uint8Array(100);
    for (let i = 0; i < bin.length; i++) {
        bin[i] = Math.round(Math.random() * 50);
    }
    fs.writeFileSync(
        `${swan.env.USER_DATA_PATH}/demo.bin`,
        bin.buffer
    );
    // 写文件成功，文件内容为 arrayBuffer 指定的内容。
}
catch (err) {
    // 出错了，写文件失败
    console.log(err.message);
}
```
