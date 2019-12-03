### unlinkSync()

`fileSystemManager.unlink()` 对应的同步版本。

```js
fileSystemManager.unlinkSync(filePath)
```
**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|filePath|string| |是|要删除的文件路径|


`errMsg` 的有效值:

| 值                                     | 描述                                            |
| -------------------------------------- | -----------------------------------------------|
| fail permission denied, open ${filePath}   | 指定的 filePath 路径没有读权限                        |
| fail no such file or directory ${filePath} | 文件不存在                                      |
| fail operation not permitted, unlink ${filePath}  |  传入的 filePath 是一个目录          |


**示例：**

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.unlinkSync(`${swan.env.USER_DATA_PATH}/demo.txt`);
```