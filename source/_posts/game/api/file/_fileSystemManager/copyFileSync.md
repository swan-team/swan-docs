### copyFileSync()

`copyFileSync()` 是 fileSystemManager 对象的方法，用于实现文件拷贝，是 [`copyFile()`](#copyFile) 的同步方法。


```js
fileSystemManager.copyFileSync(srcPath, destPath)
```

**参数值**

|参数|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|srcPath|string|``|是|要被拷贝的源文件名称|
|destPath|string|``|是|拷贝操作的目标文件名|

错误信息：

| 值                                     | 描述                                            |
| -------------------------------------- | -----------------------------------------------|
| fail no such file or directory | 文件/目录不存在                                      |
| fail permission denied, copyFileSync ${srcPath} -> ${destPath} | 指定目标文件路径没有写权限 |
| The argument must be string | 参数类型错误，`srcPath` 参数应该是 string 类型|
| The argument must be string | 参数类型错误，`destPath` 参数应该是 string 类型|


**示例**：

```js
const fileSystemManager = swan.getFileSystemManager();
try {
    fileSystemManager.copyFileSync(
        `${swan.env.USER_DATA_PATH}/demo/demo.txt`,
        `${swan.env.USER_DATA_PATH}/dest/dest.txt`
    );
}
catch (e) {
    // 出错信息
    console.log(e.message);
}
```