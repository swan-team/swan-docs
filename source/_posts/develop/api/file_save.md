---
title: 保存、获取文件
header: develop
nav: api
sidebar: file_save
---

## swan.saveFile

>saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用。

**解释**：保存文件到本地

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/file.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|tempFilePath |String  |  是  |-| 需要保存的文件的临时路径|
|success   |Function  |  否  |-| 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}。|
|fail  |Function  |  否 | -| 接口调用失败的回调函数|
|complete   | Function   | 否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|savedFilePath  |String | 文件的保存路径|

**示例**：
<a href="swanide://fragment/4816f991cc6234fb35caa7f93d2e55621560166064722" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <button bind:tap="saveFile" type="primary" hover-stop-propagation="true">下载并保存文件</button>
        <button bind:tap="openDocument" type="primary" hover-stop-propagation="true">打开文件</button>
    </view>
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">{{title}}</view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        title: 'saveFile/openDocument',
        filePath: ''
    },

    saveFile() {
        swan.showToast({
            title: '开始下载'
        });
        swan.downloadFile({
            header: {
                'Cache-Control': 'no-cache'
            },
            url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
            success: res => {
                swan.saveFile({
                    tempFilePath: res.tempFilePath,
                    success: res => {
                        swan.showToast({
                            title: '保存成功'
                        });
                        this.setData('filePath', res.savedFilePath);
                    },
                    fail: err => {
                        swan.showToast({
                            title: '保存失败'
                        });
                    }
                });
            },
            fail: err => {
                swan.showToast({
                    title: '下载失败'
                });
            }
        });
    },

    openDocument() {
        swan.openDocument({
            filePath: this.getData('filePath'),
            fileType: 'pdf',
            fail: err => {
                if (!this.getData('filePath')) {
                    swan.showToast({
                        title: '请先点击保存文件'
                    });
                    return;
                }
                swan.showToast({
                    title: '打开失败'
                });
            }
        });
    }
});
```

**说明**

本地文件存储的大小限制为 10M。

<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201 |解析失败，请检查调起协议是否合法|
|1001|执行失败|
|2000|文件路径无效|
|2001|文件不存在|
|2002|文件过大|
|2003|IO异常|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|2001|指定文件不存在|
|2002|文件大小超过限制|
|2003|IO异常| -->

## swan.getFileInfo


**解释**：获取文件信息

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|filePath  |String  |  是  |-| 本地文件路径 |
|digestAlgorithm  |String	| 否  |md5|计算文件摘要的算法，有效值：md5，sha1。|
|success   |Function  |  否  |-| 接口调用成功的回调函数 |
|fail  |Function  |  否 | -| 接口调用失败的回调函数|
|complete   | Function   | 否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|size  | Number | 文件大小，单位：B。|
|digest  | String | 按照传入的 digestAlgorithm 计算得出的的文件摘要。|

**示例**：

<a href="swanide://fragment/03fb8ed0c13722acc9b06f441603988b1556536748943" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getFileInfo">getFileInfo</button>
</view>
```

* 在 js 文件中

```js
Page({
    getFileInfo() {
        swan.chooseImage({
            count: 1,
            success: function (res) {
                const tempFilePaths = res.tempFilePaths;
                swan.getFileInfo({
                    filePath: tempFilePaths[0],
                    success: function (res) {
                        swan.showToast({
                            title: 'success',
                            icon: 'none'
                        });
                        console.log('getFileInfo success', res);
                    },
                    fail: function (err) {
                        swan.showToast({
                            title: 'fail',
                            icon: 'none'
                        });
                        console.log('getFileInfo success', err);
                    }
                });
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|执行失败|
|2001|文件不存在|
|2003|IO异常|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|2001|指定文件不存在| -->



## swan.getSavedFileList


**解释**：获取本地已保存的文件列表

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success   |Function  |  否  | -|接口调用成功的回调函数，返回结果见success返回参数说明。|
|fail  |Function  |  否 | -| 接口调用失败的回调函数|
|complete   | Function   | 否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|fileList  |` Array.<object>  `| 文件列表|

**fileList中的项目说明**：

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|filePath  |String | 文件的本地路径|
|createTime  |Number | 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数。|
|size  |Number | 文件大小，单位 B|



**示例**：

<a href="swanide://fragment/3450c561cdf1ef62951d13eff25df65b1556536911397" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getSavedFileList">getSavedFileList</button>
</view>
```

* 在 js 文件中

```js
Page({
    getSavedFileList() {
        swan.chooseImage({
            count: 1,
            success: function (res) {
                const tempFilePaths = res.tempFilePaths;
                swan.saveFile({
                    tempFilePath: tempFilePaths[0],
                    success: function (res) {
                        swan.getSavedFileList({
                            success: function (res) {
                                swan.showToast({
                                    title: 'success',
                                    icon: 'none'
                                });
                                console.log('getSavedFileList success', res);
                            },
                            fail: function (err) {
                                swan.showToast({
                                    title: 'fail',
                                    icon: 'none'
                                });
                                console.log('getSavedFileList fail', err);
                            }
                        });
                    }
                });
            }
        });
    }
});
```

* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
<!-- #### 错误码


|错误码|说明|
|--|--|
|1001|执行失败 |
|2003|IO异常| -->



## swan.getSavedFileInfo


**解释**：获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 getFileInfo 接口。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|filePath   |String  |  是  |-| 文件路径|
|success   |Function  |  否  |-| 接口调用成功的回调函数，返回结果见 success 返回参数说明。|
|fail  |Function  |  否 |-|  接口调用失败的回调函数|
|complete   | Function | 否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型 | 说明|
|---- | ---- | ---- |
|size  |Number | 文件大小，单位B|
|createTime  |Number | 文件保存时的时间戳，从1970/01/01 08:00:00 到该时刻的秒数。|

**示例**：

<a href="swanide://fragment/8e9af32a9901a93711f286f0f65e2eb61556537016514" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getSavedFileInfo">getSavedFileInfo</button>
</view>
```

* 在 js 文件中

```js
Page({
    getSavedFileInfo() {
        swan.getSavedFileList({
            success: function (res) {
                if (res.fileList.length > 0) {
                    const filePath = res.fileList[0].filePath;
                    swan.getSavedFileInfo({
                        filePath,
                        success: function (res) {
                            swan.showToast({
                                title: 'success',
                                icon: 'none'
                            });
                            console.log('getSavedFileList success', res);
                        },
                        fail: function (err) {
                            swan.showToast({
                                title: 'fail',
                                icon: 'none'
                            });
                            console.log('getSavedFileList fail', err);
                        }
                    });
                }
            }
        });
    }
});
```

* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|执行失败|
|2001|文件不存在|
|2003|IO异常|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|2001|指定文件不存在| -->

