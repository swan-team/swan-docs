---
title: 删除文件
header: develop
nav: api
sidebar: file_remove
---

## swan.removeSavedFile


**解释：**删除本地存储的文件

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|filePath   |String  |  是  | 需要删除的文件路径|
|success   |Function  |  否  | 接口调用成功的回调函数|
|fail  |Function  |  否 |  接口调用失败的回调函数|
|complete   | Function   | 否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.getSavedFileList({
    success: function (res) {
        if (res.fileList.length > 0){
            swan.removeSavedFile({
                filePath: res.fileList[0].filePath,
                success: function (res) {
                    console.log(res.filePath);
                }
            });
        };
    }
});
```

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|执行失败|
|2000|文件路径无效|
|2001|文件不存在|
|2002|文件过大|
|2004|文件删除失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|2001|指定文件不存在|
|2004|文件删除失败| -->


