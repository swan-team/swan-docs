### mkdirSync()

`fileSystemManager.mkdir()` 对应的同步版本。

```js
fileSystemManager.mkdirSync(dirPath)
```
**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|dirPath|string| |是|创建的目录路径|


`errMsg` 的有效值:

| 值                                     | 描述                                            |
| -------------------------------------- | -----------------------------------------------|
| fail no such file or directory ${dirPath}  | 上级目录不存在                               |
| fail permission denied, open ${dirPath} | 指定的 filePath 路径没有写权限                                   |
|fail file already exists ${dirPath}     |   有同名文件或目录                                |


**示例：**

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.mkdirSync(`${swan.env.USER_DATA_PATH}/demo`);
```