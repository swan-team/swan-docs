### readdirSync()

`readdirSync()` 是 [fileSystemManager.readdir()](#readdir) 的同步方法，该方法可读取本地指定路径下的目录。

```js
fileSystemManager.readdirSync(dirPath)
```

**参数值**：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|dirPath|string||是|想要读取的文件所在的目录|

**返回值**：

若接口调用成功，则返回

|属性|类型|描述|
|-|-|-|
|files|Array|指定目录下的文件列表|
|files.fileItem|string|文件列表里的文件项，存储着路径|

若接口调用失败，则返回

|属性|类型|描述|
|-|-|-|
|err|Object|错误对象|
|err.message|string|错误信息，可能是：`'fail no such file or directory ${dirPath}'` 表示指定的路径下目录不存在，或读取的是文件非目录；或 `'fail permission denied, open ${dirPath}'` 表示指定目录不在本地路径下，没有读权限|

**示例**：

```js
const fileSystemManager = swan.getFileSystemManager();
try {
    let files = fileSystemManager.readdirSync(swan.env.USER_DATA_PATH + '/demo');
    console.log('该路径对应文件的files数组', files);
} catch(e) {
    console.log('接口执行失败', e.message);
}
```