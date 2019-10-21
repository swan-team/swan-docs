---
title: swan.removeSavedFile
header: develop
nav: api
sidebar:  remove
---

 


**解释**：删除本地存储的文件

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/file.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|filePath   |String  |  是  | -|需要删除的文件路径|
|success   |Function  |  否  |-| 接口调用成功的回调函数|
|fail  |Function  |  否 |-|  接口调用失败的回调函数|
|complete   | Function   | 否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：

<a href="swanide://fragment/dc177b0d57c63576a0052df0bf2c36361569427170503" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
Page({
    removeSavedFile() {
        swan.getSavedFileList({
            success: res => {
                if (res.fileList.length > 0) {
                    swan.removeSavedFile({
                        filePath: res.fileList[0].filePath,
                        success: res => {
                            console.log('removeSavedFile success', res);
                        },
                        fail: err => {
                            console.log('removeSavedFile fail', err);
                        }
                    });
                };
            }
        });
    }
});
```


#### 错误码

* Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |
|1001|执行失败|
|2000|文件路径无效|
|2001|文件不存在|
|2002|文件过大|
|2004|文件删除失败|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |
|2001|文件不存在|
|2004|文件删除失败|


