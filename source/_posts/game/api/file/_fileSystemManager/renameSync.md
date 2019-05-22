### renameSync()

`renameSync()` 是 fileSystemManager 对象的方法，没有返回值，[`rename()`](#rename) 的同步版本，重命名文件，可以把文件从 `oldPath` 移动到 `newPath`。

```js
fileSystemManager.renameSync(oldPath, newPath)
```
**参数值**

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|oldPath|string||是|源文件/源目录路径|
|newPath|string||是|目标路径|

若接口调用失败，会抛出一个标准的 Error 对象，报错信息如下：

| message                                    | 描述
|-|-|
| fail permission denied, rename ${oldPath} -> ${newPath}| 指定源文件或目标文件没有写权限
|fail no such file or directory, rename ${oldPath} -> ${newPath}|源文件不存在，或目标文件路径的上层目录不存在

**示例**：

```js
const fileSystemManager = swan.getFileSystemManager();
try{
    fileSystemManager.renameSync('./a.txt','./b');
    // 重命名成功
}
catch(e){
    // 出错了，重命名失败
    console.log(e.message);
}
```