---
title: swan.getFileInfo
header: develop
nav: api
sidebar: save_swan-getFileInfo
---



**解释**：获取文件信息
 

## 方法参数  

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |: ---- | :---- |: ----|:----|
|filePath  |String  |  是  | | 本地文件路径 |
|digestAlgorithm  |String	| 否  |md5|计算文件摘要的算法，有效值：md5，sha1。|
|success   |Function  |  否  | | 接口调用成功的回调函数 |
|fail  |Function  |  否 | | 接口调用失败的回调函数|
|complete   | Function   | 否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明 

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|size  | Number | 文件大小，单位：B。|
|digest  | String | 按照传入的 digestAlgorithm 计算得出的的文件摘要。|

## 示例

 

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_getFileInfo.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getFileInfo1.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 1 ：

 获取临时文件信息 

<a href="swanide://fragment/f71d02a0f25cf550584e34c6cc5d00b91573626558825" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    data: { },
    getFileInfo() {
        swan.downloadFile({
            header: {
                'Cache-Control': 'no-cache'
            },
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            success: res => {
                swan.getFileInfo({
                    filePath: res.tempFilePath,
                    success: res => {
                        console.log('getFileInfo success', res);
                        swan.showModal({
                            title: 'getFileInfo success',
                            content: JSON.stringify(res)
                        });
                    },
                    fail: err => {
                        console.log('getFileInfo fail', err);
                        swan.showModal({
                            title: 'getFileInfo fail',
                            content: JSON.stringify(err)
                        });
                    }
                });
            }
        })
    }    
})
```

### 图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getFileInfo2.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 2 ：
 获取本地文件信息 

<a href="swanide://fragment/a0491bc953bae3ceac257222d8f964621573626622598" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    data: { },
    getFileInfo() {
        swan.chooseImage({
            count: 1,
            success: res => {
                const tempFilePaths = res.tempFilePaths;  // 本地文件的路径(也可通过swan.saveFile获取)
                swan.getFileInfo({
                    filePath: tempFilePaths[0],
                    success: res => {
                        swan.showModal({
                            title: 'getFileInfo success',
                            content: JSON.stringify(res)
                        });
                        console.log('getFileInfo success', res);
                    },
                    fail: err => {
                        swan.showModal({
                            title: 'getFileInfo fail',
                            content: JSON.stringify(err)
                        });
                        console.log('getFileInfo fail', err);
                    }
                })
            }
        });
    }    
})
```

### 代码示例 3 - digestAlgorithm为sha1 ：
 获取本地文件信息 

<a href="swanide://fragment/d730cd04b43766202854c776fa7ca2fb1575219277634" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    data: { },
    getFileInfo() {
        swan.downloadFile({
            header: {
                'Cache-Control': 'no-cache'
            },
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            success: res => {
                swan.getFileInfo({
                    filePath: res.tempFilePath,
                    digestAlgorithm: 'sha1',
                    success: res => {
                        console.log('getFileInfo success', res);
                        swan.showModal({
                            title: 'getFileInfo success',
                            content: JSON.stringify(res)
                        });
                    },
                    fail: err => {
                        console.log('getFileInfo fail', err);
                        swan.showModal({
                            title: 'getFileInfo fail',
                            content: JSON.stringify(err)
                        });
                    }
                });
            }
        })
    }    
})
```

##  错误码

### Android

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确   |
|1001|执行失败|
|2001|文件不存在|
|2003|IO异常|

### iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确   |
|2001|文件不存在|



