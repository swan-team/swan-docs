---
title: FileSystemManager
header: develop
nav: api
sidebar: FileSystemManager
---


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

