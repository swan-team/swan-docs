### accessSync()

`accessSync()` 是 fileSystemManager 对象的方法，没有返回值，`access()` 的同步版本，判断文件/目录是否存在。

```js
fileSystemManager.accessSync(path)
```
**参数值：**

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|path|string|`''`|是|文件/目录路径|

若接口调用失败，会抛出一个标准的 Error 对象，报错信息如下：

| message| 描述
|-|-|
| fail no such file or directory ${path} | 文件/目录不存在

**示例：**

```js
const fileSystemManager = swan.getFileSystemManager();
try{
    let path=swan.env.USER_DATA_PATH + '/demo.txt';
    fileSystemManager.accessSync(path);
    // 文件存在
}
catch（e）{
    // 出错了，文件/目录不存在
    console.log(e.message);
}
```