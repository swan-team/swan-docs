---
title: 文件系统
header: develop
nav: api
sidebar: file_system
---

> 基础库 3.130.1 开始支持，低版本需做[兼容处理](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)。

## swan.getFileSystemManager

**解释**：获取全局唯一的文件管理器对象。

**方法参数**：无

**返回值**：fileSystemManager

若接口调用失败，会抛出一个标准的`Error`对象

## FileSystemManager

**解释**：文件管理器。

<!-- **示例**：

<a href="swanide://fragment/c1cd19f4bd6c53b0c272aa1d2bce10481557729887965" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a> -->

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="access">access</button>
    <button type="primary" bindtap="accessSync">accessSync</button>
    <button type="primary" bindtap="appendFile">appendFile</button>
    <button type="primary" bindtap="appendFileSync">appendFileSync</button>
    <button type="primary" bindtap="copyFile">copyFile</button>
    <button type="primary" bindtap="copyFileSync">copyFileSync</button>
    <button type="primary" bindtap="getFileInfo">getFileInfo</button>
    <button type="primary" bindtap="getSavedFileList">getSavedFileList</button>
    <button type="primary" bindtap="mkdir">mkdir</button>
    <button type="primary" bindtap="mkdirSync">mkdirSync</button>
    <button type="primary" bindtap="readdir">readdir</button>
    <button type="primary" bindtap="readdirSync">readdirSync</button>
    <button type="primary" bindtap="readFile">readFile</button>
    <button type="primary" bindtap="readFileSync">readFileSync</button>
    <button type="primary" bindtap="removeSavedFile">removeSavedFile</button>
    <button type="primary" bindtap="rename">rename</button>
    <button type="primary" bindtap="renameSync">renameSync</button>
    <button type="primary" bindtap="rmdir">rmdir</button>
    <button type="primary" bindtap="rmdirSync">rmdirSync</button>
    <button type="primary" bindtap="saveFile">saveFile</button>
    <button type="primary" bindtap="saveFileSync">saveFileSync</button>
    <button type="primary" bindtap="stat">stat</button>
    <button type="primary" bindtap="statSync">statSync</button>
    <button type="primary" bindtap="unlink">unlink</button>
    <button type="primary" bindtap="unlinkSync">unlinkSync</button>
    <button type="primary" bindtap="unzip">unzip</button>
    <button type="primary" bindtap="writeFile">writeFile</button>
    <button type="primary" bindtap="writeFileSync">writeFileSync</button>
</view>
```

* 在 js 文件中

```js
Page({
    data: {},
    onLoad() {
        const fs = swan.getFileSystemManager();
        this.fs = fs;
    },
    access() {
        this.fs.access({
            path: `${swan.env.USER_DATA_PATH}/demo.txt`,
            success: res => {
                console.log('access success', res);
            },
            fail: err => {
                console.log('access fail', err)
            }
        });
    },
    accessSync() {
        try {
            let result = this.fs.accessSync(
                `${swan.env.USER_DATA_PATH}/demo.txt`
            );
            console.log('accessSync success', result);
        }
        catch (err) {
            console.log('accessSync fail', err);
        }
    },
    appendFile() {
        this.fs.appendFile({
            filePath: `${swan.env.USER_DATA_PATH}/demo.txt`,
            data: 'appendFile',
            success: res => {
                console.log('appendFile success', res);
            },
            fail: err => {
                console.log('appendFile fail', err)
            }
        });
    },
    appendFileSync() {
        try {
            let result = this.fs.appendFileSync(
                `${swan.env.USER_DATA_PATH}/demo.txt`,
                'appendFileSync'
            );
            console.log('appendFileSync success', result);
        }
        catch (err) {
            console.log('appendFileSync fail', err);
        }
    },
    copyFile() {
        this.fs.copyFile({
            srcPath: `${swan.env.USER_DATA_PATH}/demo.txt`,
            destPath: `${swan.env.USER_DATA_PATH}/destPath.txt`,
            success: res => {
                console.log('copyFile success', res);
            },
            fail: err => {
                console.log('copyFile fail', err)
            }
        });
    },
    copyFileSync() {
        try {
            let result = this.fs.copyFileSync(
                `${swan.env.USER_DATA_PATH}/demo.txt`,
                `${swan.env.USER_DATA_PATH}/copyFileSync.txt`
            );
            console.log('copyFileSync success', result);
        }
        catch (err) {
            console.log('copyFileSync fail', err);
        }
    },
    getFileInfo() {
        this.fs.getFileInfo({
            filePath: `${swan.env.USER_DATA_PATH}/demo.txt`,
            success: res => {
                console.log('getFileInfo success', res);
            },
            fail: err => {
                console.log('getFileInfo fail', err)
            }
        });
    },
    getSavedFileList() {
        this.fs.getSavedFileList({
            success: res => {
                console.log('getSavedFileList success', res);
            },
            fail: err => {
                console.log('getSavedFileList fail', err)
            }
        });
    },
    mkdir() {
        this.fs.mkdir({
            dirPath: `${swan.env.USER_DATA_PATH}/mkdir`,
            success: res => {
                console.log('mkdir success', res);
            },
            fail: err => {
                console.log('mkdir fail', err)
            }
        });
    },
    mkdirSync() {
        try {
            let result = this.fs.mkdirSync(
                `${swan.env.USER_DATA_PATH}/mkdirSyc`
            );
            console.log('mkdirSync success', result);
        }
        catch (err) {
            console.log('mkdirSync fail', err);
        }
    },
    readdir() {
        this.fs.readdir({
            dirPath: `${swan.env.USER_DATA_PATH}/readdir`,
            success: res => {
                console.log('readdir success', res);
            },
            fail: err => {
                console.log('readdir fail', err)
            }
        });
    },
    readdirSync() {
        try {
            let result = this.fs.readdirSync(
                `${swan.env.USER_DATA_PATH}/readdirSyc'`
            );
            console.log('readdirSync success', result);
        }
        catch (err) {
            console.log('readdirSync fail', err);
        }
    },
    readFile() {
        this.fs.readFile({
            filePath: `${swan.env.USER_DATA_PATH}/demo.txt`,
            encoding: 'utf8',
            success: res => {
                console.log('readFile success', res);
            },
            fail: err => {
                console.log('readFile fail', err)
            }
        });
    },
    readFileSync() {
        try {
            let result = this.fs.readFileSync(
                `${swan.env.USER_DATA_PATH}/demo.txt`
            );
            console.log('readFileSync success', result);
        }
        catch (err) {
            console.log('readFileSync fail', err);
        }
    },
    removeSavedFile() {
        this.fs.removeSavedFile({
            filePath: `${swan.env.USER_DATA_PATH}/demo.txt`,
            encoding: 'utf8',
            success: res => {
                console.log('removeSavedFile success', res);
            },
            fail: err => {
                console.log('removeSavedFile fail', err)
            }
        });
    },
    rename() {
        this.fs.rename({
            oldPath: `${swan.env.USER_DATA_PATH}/demo.txt`,
            newPath: `${swan.env.USER_DATA_PATH}/rename/demo.txt`,
            encoding: 'utf8',
            success: res => {
                console.log('rename success', res);
            },
            fail: err => {
                console.log('rename fail', err)
            }
        });
    },
    renameSync() {
        try {
            let result = this.fs.renameSync(
                `${swan.env.USER_DATA_PATH}/demo.txt`,
                `${swan.env.USER_DATA_PATH}/renameSync/demo.txt`
            );
            console.log('renameSync success', result);
        }
        catch (err) {
            console.log('renameSync fail', err);
        }
    },
    rmdir() {
        this.fs.rmdir({
            dirPath: `${swan.env.USER_DATA_PATH}/rmdir`,
            success: res => {
                console.log('rmdir success', res);
            },
            fail: err => {
                console.log('rmdir fail', err)
            }
        });
    },
    rmdirSync() {
        try {
            let result = this.fs.rmdirSync(
                `${swan.env.USER_DATA_PATH}/rmdirSync`
            );
            console.log('rmdirSync success', result);
        }
        catch (err) {
            console.log('rmdirSync fail', err);
        }
    },
    saveFile() {
        this.fs.saveFile({
            tempFilePath: '/usr/temp.txt', // 仅为示例，实际上请传真实临时路径地址，如 swan.downloadFile 的 tempFilePath 返回参数
            filePath: `${swan.env.USER_DATA_PATH}/`,
            success: res => {
                console.log('saveFile success', res);
            },
            fail: err => {
                console.log('saveFile fail', err)
            }
        });
    },
    saveFileSync() {
        try {
            let result = this.fs.saveFileSync(
                '/usr/temp.txt', // 仅为示例，实际上请传真实临时路径地址，如 swan.downloadFile 的 tempFilePath 返回参数
                `${swan.env.USER_DATA_PATH}/`
            );
            console.log('saveFileSync success', result);
        }
        catch (err) {
            console.log('saveFileSync fail', err);
        }
    },
    stat() {
        this.fs.stat({
            path: `${swan.env.USER_DATA_PATH}/demo.txt`,
            success: res => {
                console.log('stat success', res);
            },
            fail: err => {
                console.log('stat fail', err)
            }
        });
    },
    statSync() {
        try {
            let result = this.fs.statSync(
                `${swan.env.USER_DATA_PATH}/demo.txt`
            );
            console.log('statSync success', result);
        }
        catch (err) {
            console.log('statSync fail', err);
        }
    },
    unlink() {
        this.fs.unlink({
            filePath: `${swan.env.USER_DATA_PATH}/demo.txt`,
            success: res => {
                console.log('unlink success', res);
            },
            fail: err => {
                console.log('unlink fail', err)
            }
        });
    },
    unlinkSync() {
        try {
            let result = this.fs.unlinkSync(
                `${swan.env.USER_DATA_PATH}/demo.txt`
            );
            console.log('unlinkSync success', result);
        }
        catch (err) {
            console.log('unlinkSync fail', err);
        }
    },
    unzip() {
        this.fs.unzip({
            zipFilePath: `${swan.env.USER_DATA_PATH}/demo/a.zip`,
            targetPath: `${swan.env.USER_DATA_PATH}/demo/b`,
            success: res => {
                console.log('unzip success', res);
            },
            fail: err => {
                console.log('unzip fail', err)
            }
        });
    },
    writeFile() {
        this.fs.writeFile({
            filePath: `${swan.env.USER_DATA_PATH}/demo.txt`,
            data: 'writeFile',
            success: res => {
                console.log('writeFile success', res);
            },
            fail: err => {
                console.log('writeFile fail', err)
            }
        });
    },
    writeFileSync() {
        try {
            let result = this.fs.writeFileSync(
                `${swan.env.USER_DATA_PATH}/demo.txt`,
                'writeFileSync'
            );
            console.log('writeFileSync success', result);
        }
        catch (err) {
            console.log('writeFileSync fail', err);
        }
    }
});
```

##  FileSystemManager.access

**解释**：判断文件/目录是否存在。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|path|String|是|-|文件/目录路径|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

##  FileSystemManager.accessSync

**解释**：判断文件/目录是否存在的同步接口。

**方法参数**：String path

**`path`参数说明**：文件/目录路径。

若接口调用失败，会抛出一个标准的`Error`对象

##  FileSystemManager.appendFile

**解释**：在文件结尾追加内容。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|filePath|String|是|-|文件路径|
|data|String/ArrayBuffer|是|-|要追加的文本|
|encoding|String|否|utf8|	指定写入文件的字符编码|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**encoding 的合法值**

|值|说明|
|-|-|
|ascii| |
|base64|对输入的字符串进行 base64 解码再写入|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8||
|latin1/binary|ISO-8859-1 的别名|

##  FileSystemManager.appendFileSync

**解释**：在文件结尾追加内容的同步接口。

**方法参数**：String filePath, String/ArrayBuffer data, String encoding

**`filePath`参数说明**：文件路径。

**`data`参数说明**：要追加的文本。

**`encoding`参数说明**：指定写入文件的字符编码。

**encoding 的合法值**

|值|说明|
|-|-|
|ascii| |
|base64|对输入的字符串进行 base64 解码再写入|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8||
|latin1/binary|ISO-8859-1 的别名|

若接口调用失败，会抛出一个标准的`Error`对象

##  FileSystemManager.copyFile

**解释**：用于实现文件拷贝。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|srcPath|String|是|-|要被拷贝的源文件名称|
|destPath|String|是|-|拷贝操作的目标文件名|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

##  FileSystemManager.copyFileSync

**解释**：用于实现文件拷贝的同步接口。

**方法参数**：String srcPath, String destPath

**`srcPath`参数说明**：文件/目录路径。

**`destPath`参数说明**：拷贝操作的目标文件名。

若接口调用失败，会抛出一个标准的`Error`对象

##  FileSystemManager.getFileInfo

**解释**：获取本地临时文件的相关信息， 并在 success 回调函数中返回该文件大小。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|filePath|String|是|-|读取的文件路径|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数|类型|说明|
|---- | ---- | ---- |
|size|Number|文件大小，以字节为单位|

##  FileSystemManager.getSavedFileList

**解释**：获取该小程序下已保存的本地用户文件列表。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数|类型|说明|
|---- | ---- | ---- |
|fileList|Array|文件数组|

##  FileSystemManager.mkdir

**解释**：创建目录。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|dirPath|String|是|-|创建的目录路径|
|recursive|Boolean|否|false|是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

##  FileSystemManager.mkdirSync

**解释**：创建目录的同步接口。

**方法参数**：String dirPath, Boolean recursive

**`dirPath`参数说明**：创建的目录路径。

**`recursive`参数说明**：是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。。

若接口调用失败，会抛出一个标准的`Error`对象

##  FileSystemManager.readdir

**解释**：读取本地指定路径下的目录内文件列表。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|dirPath|String|是|-|想要读取的文件所在的目录|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数|类型|说明|
|---- | ---- | ---- |
|files|Array|指定目录下的文件列表|
|files[].fileItem|String|文件列表里的文件项，存储着路径|

##  FileSystemManager.readdirSync

**解释**：读取本地指定路径下的目录内文件列表的同步接口。

**方法参数**：String dirPath

**`dirPath`参数说明**：想要读取的文件所在的目录。

**同步返回参数说明**：

|参数 |类型|说明|
|---- | ---- |---|---|
|files|Array|指定目录下的文件列表|
|files[].fileItem|String|文件列表里的文件项，存储着路径|

若接口调用失败，会抛出一个标准的`Error`对象

##  FileSystemManager.readFile

**解释**：读取本地文件内容。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|filePath|String|是|-|文件/目录路径。“本地用户文件”须以 swan.env.USER_DATA_PATH 开头（如 'swan.env.USER_DATA_PATH' + '/demo.txt'），否则认为是“代码包文件”（如 'asset/bg.jpg'）。不支持相对路径。|
|encoding|String|否|-|指定读文件的字符编码。如果不指定，则读出 ArrayBuffer；如果指定，则读出 string。|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**encoding 的合法值**

|值|说明|
|-|-|
|ascii| |
|base64|对输入的字符串进行 base64 解码再写入|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8||
|latin1/binary|ISO-8859-1 的别名|

**success 返回参数说明**：

|参数|类型|说明|
|---- | ---- | ---- |
|data|string/ArrayBuffer|读取结果|

##  FileSystemManager.readFileSync

**解释**：读取本地文件内容的同步接口。

**方法参数**：String filePath, String encoding

**`filePath`参数说明**：文件/目录路径。“本地用户文件”须以 swan.env.USER_DATA_PATH 开头（如 'swan.env.USER_DATA_PATH' + '/demo.txt'），否则认为是“代码包文件”（如 'asset/bg.jpg'）。不支持相对路径。

**`encoding`参数说明**：指定读文件的字符编码，默认 'utf8'。

**encoding 的合法值**

|值|说明|
|-|-|
|ascii| |
|base64|对输入的字符串进行 base64 解码再写入|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8||
|latin1/binary|ISO-8859-1 的别名|

**同步返回参数说明**：

|参数|类型|说明|
|---- | ---- | ---- |
|data|String|读取结果|

若接口调用失败，会抛出一个标准的`Error`对象

##  FileSystemManager.removeSavedFile

**解释**：删除该小程序下已保存的本地用户文件。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|filePath|String|是|-|需要删除的文件路径|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

##  FileSystemManager.rename

**解释**：重命名文件，可以把文件从 oldPath 移动到 newPath。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|oldPath|String|是|-|源文件/源目录路径|
|newPath|String|是|-|目标路径|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

##  FileSystemManager.renameSync

**解释**：重命名文件的同步接口，可以把文件从 oldPath 移动到 newPath。

**方法参数**：String oldPath, String newPath

**`oldPath`参数说明**：源文件/源目录路径。
**`newPath`参数说明**：目标路径。

若接口调用失败，会抛出一个标准的`Error`对象

##  FileSystemManager.rmdir

**解释**：删除目录。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|dirPath|String|是|-|要删除的目录路径|
|recursive|Boolean|否|false|是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

##  FileSystemManager.rmdirSync

**解释**：删除目录的同步接口。

**方法参数**：String dirPath, Boolean recursive

**`dirPath`参数说明**：要删除的目录路径。

**`recursive`参数说明**：是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。

若接口调用失败，会抛出一个标准的`Error`对象

##  FileSystemManager.saveFile

**解释**：保存临时文件到本地。此接口会移动临时文件，因此调用成功后, tempFilePath 将不可用。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|tempFilePath|String|是|-|临时存储文件路径|
|filePath|String|否|-|要存储的文件路径|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数|类型|说明|
|---- | ---- | ---- |
|savedFilePath|String|存储后的文件路径|

##  FileSystemManager.saveFileSync

**解释**：保存临时文件到本地的同步接口。此接口会移动临时文件，因此调用成功后, tempFilePath 将不可用。

**方法参数**：String tempFilePath, String filePath

**`tempFilePath`参数说明**：临时存储文件路径。
**`filePath`参数说明**：要存储的文件路径。

**同步返回参数说明**：

|参数|类型|说明|
|---- | ---- | ---- |
|savedFilePath|String|存储后的文件路径|

若接口调用失败，会抛出一个标准的`Error`对象

##  FileSystemManager.stat

**解释**：获取文件 Stats 对象。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|path|String|是|-|临时存储文件路径|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数|类型|说明|
|---- | ---- | ---- |
|stats|Stats|一个 Stats 类型的对象|

**stats 返回值说明**

|参数名|参数类型 |说明|
|---|---|---|---|
|mode|String|文件的类型和存取的权限，对应 POSIX stat.st_mode|
|size|Number|文件大小，单位：B，对应 POSIX stat.st_size|
|lastAccessedTime|Number|文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime|
|lastModifiedTime|Number|文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime|
|isDirectory|Function|判断当前文件是否一个目录，返回 boolean 值|
|isFile|Function|判断当前文件是否一个普通文件，返回 boolean 值|

##  FileSystemManager.statSync

**解释**：获取文件 Stats 对象的同步接口。

**返回参数**：String path

**`path`参数说明**：临时存储文件路径。

**返回值**：Stats stats

**stats 返回值说明**

|参数名|参数类型 |说明|
|---|---|---|---|
|mode|String|文件的类型和存取的权限，对应 POSIX stat.st_mode|
|size|Number|文件大小，单位：B，对应 POSIX stat.st_size|
|lastAccessedTime|Number|文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime|
|lastModifiedTime|Number|文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime|
|isDirectory|Function|判断当前文件是否一个目录，返回 boolean 值|
|isFile|Function|判断当前文件是否一个普通文件，返回 boolean 值|

若接口调用失败，会抛出一个标准的`Error`对象

##  FileSystemManager.unlink

**解释**：删除文件。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|filePath|String|是|-|要删除的文件路径|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

##  FileSystemManager.unlinkSync

**解释**：删除文件的同步接口。

**方法参数**：String filePath

**`filePath`参数说明**：要删除的文件路径。

若接口调用失败，会抛出一个标准的`Error`对象

##  FileSystemManager.unzip

**解释**：解压文件。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|zipFilePath|String|是|-|源文件路径，必须是 zip 压缩文件|
|targetPath|String|是|-|解压目标路径，目标目录必须位于用户目录下|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

##  FileSystemManager.writeFile

**解释**：写文件。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型|必填|默认值|说明|
|----|----|----|----|----|
|filePath|String|是|-|文件/目录路径。须以 swan.env.USER_DATA_PATH 开头（如 'swan.env.USER_DATA_PATH' + '/demo.txt'）|
|data|String/ArrayBuffer|是|-|要写入的文本|
|encoding|String|否|utf8|指定写入文件的字符编码。|
|success|Function|否|-|接口调用成功的回调函数|
|fail|Function|否|-|接口调用失败的回调函数|
|complete|Function|否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**encoding 的合法值**

|值|说明|
|-|-|
|ascii| |
|base64|对输入的字符串进行 base64 解码再写入|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8||
|latin1/binary|ISO-8859-1 的别名|

##  FileSystemManager.writeFileSync

**解释**：写文件的同步接口。

**方法参数**：String filePath, String/ArrayBuffer data, String encoding

**`filePath`参数说明**：文件/目录路径。须以 swan.env.USER_DATA_PATH 开头（如 'swan.env.USER_DATA_PATH' + '/demo.txt'）。

**`data`参数说明**：要写入的文本。

**`encoding`参数说明**：指定写入文件的字符编码，默认为 utf8。

**encoding 的合法值**

|值|说明|
|-|-|
|ascii| |
|base64|对输入的字符串进行 base64 解码再写入|
|hex|十六进制|
|ucs2/ucs-2/utf16le/utf-16le|以小端序读取|
|utf-8/utf8||
|latin1/binary|ISO-8859-1 的别名|

若接口调用失败，会抛出一个标准的`Error`对象