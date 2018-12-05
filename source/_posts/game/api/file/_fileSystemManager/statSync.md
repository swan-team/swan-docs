### statSync()

`statSync()` 是 fileSystemManager.stat() 的同步方法，该方法可根据传入的 `path` 参数，生成文件的 `Stats` 对象，并将该对象返回。只能获取本地文件和本地临时文件。

```js
fileSystemManager.statSync(path)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|-|
|path|string|是|目录/文件路径|

**返回值：**

若接口调用成功，则返回该路径对应的文件的 Stats 对象。

```js
Stats stats
```

若接口调用失败，则返回：

|属性|类型|描述|
|-|-|-|
|err|Object|错误对象|
|err.message|string|错误信息，可能是：`'fail no such file or directory ${path}'` 表示指定的路径下文件不存在，或读取的是文件非目录；或 `'fail permission denied, open ${path}'` 表示指定目录不在本地路径下，没有读权限|

**其他方法：**

`stats.isDirectory()`
判断当前文件是否一个目录，返回 boolean 值

`stats.isFile()`
判断当前文件是否一个普通文件，返回 boolean 值

**示例：**

```js
const fileSystemManager = swan.getFileSystemManager();
try {
    let stats = fileSystemManager.statSync(swan.env.USER_DATA_PATH + '/demo.txt');
    console.log('该路径对应的文件的Stats对象', stats);
    console.log('当前文件是否目录', stats.isDirectory());
    console.log('当前文件是否普通文件', stats.isFile());
} catch(e) {
    console.log('接口执行失败', e.message);
}
```
