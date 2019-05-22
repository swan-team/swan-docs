### saveFileSync()

`saveFileSync()` 是 fileSystemManager 对象的方法，[`saveFile()`](#saveFile) 的同步版本，保存临时文件到本地。此接口会移动临时文件，因此调用成功后, `tempFilePath` 将不可用。

```js
fileSystemManager.saveFileSync(tempFilePath, filePath)
```
**参数值**：

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|tempFilePath|string||是|临时存储文件路径|
|filePath|string||否|要存储的文件路径|
**返回值**：

`string` 类型的值：

|值|类型|描述|
|-|-|-|-|-|-|
|savedFilePath|string|存储后的文件路径径|


若接口调用失败，会抛出一个标准的 Error 对象，报错信息如下：

| message | 描述
|-|-|
| fail no such file or directory ${path} | 文件/目录不存在  |
| fail tempFilePath file not exist|指定的 tempFilePath 找不到文件|
| fail permission denied, open ${filePath} | 指定的 filePath 路径没有写权限|

**示例**：

```js
const fileSystemManager = swan.getFileSystemManager();
try{
    let savedFilePath=fileSystemManager.saveFileSync(tempFilePath,filePath);
    // 临时文件已经被保存，存储后的文件路径为saveFilePath
}
catch（e）{
    // 出错了
    console.log(e.message);
}
```