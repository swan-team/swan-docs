### appendFileSync()

`appendFileSync()` 是 fileSystemManager 对象的方法，没有返回值，[`appendFile()`](#appendFile) 的同步版本，在文件末尾追加内容。

```js
fileSystemManager.appendFileSync(path, data, encoding)
```
**参数值：**

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|path|string||是|文件/目录路径|
|data|string/ArrayBuffer||是|要追加的文本或二进制数据|
|encoding|string|`utf-8`||指定写入文件的字符编码|

`encoding` 的合法值:

|值|描述|
|-|-|
|ascii| |
|base64|对输入的字符串进行 base64 解码再写入|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8||
|latin1/binary|ISO-8859-1的别名|
若接口调用失败，会抛出一个标准的 Error 对象，报错信息如下：

| message  | 描述     |
|-|-|
|fail no such file or directory, open ${filePath}|指定的 filePath 文件不存在
| fail illegal operation on a directory, open "${filePath}"| 指定的 filePath 是一个已经存在的目录
|fail permission denied, open ${dirPath}|指定的 filePath 路径没有写权限
|fail sdcard not mounted|sd 卡没有安装
**示例：**

```js
const fileSystemManager = swan.getFileSystemManager();
try{
    const path=swan.env.USER_DATA_PATH + '/demo.txt';
    fileSystemManager.appendFileSync(path,'hello');
    // 追加内容成功
}
catch(e){
    // 出错了，追加内容失败
    console.log(e.message);
}
```