### rmdirSync()

`fileSystemManager.rmdir()` 对应的同步版本。

```js
fileSystemManager.rmdirSync(dirPath)
```
**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|dirPath|string| |是|要删除的目录路径|


`errMsg` 的合法值:

| 值                                     | 描述                                            |
| -------------------------------------- | -----------------------------------------------|
| fail no such file or directory ${dirPath}   | 目录不存在                        |
| fail directory not empty | 目录不为空                                     |
| fail permission denied, open ${dirPath}   | 指定的 dirPath 路径没有写权限      |


**示例：**

```js
const fileSystemManager = swan.getFileSystemManager();
fileSystemManager.rmdirSync(`${swan.env.USER_DATA_PATH}/demo`);
```