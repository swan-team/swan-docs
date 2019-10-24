---
title: swan.saveFile
header: develop
nav: api
sidebar: save_swan-saveFile
---



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
<a href="swanide://fragment/dc177b0d57c63576a0052df0bf2c36361569427170503" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    saveFile() {
        // 先把服务器上文件下载下来生成临时文件路径，再保存到本地,不支持网络路径
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
        })
    }
});
```

**说明**

本地文件存储的大小限制为 10M。


#### 错误码

* Andriod

|错误码|说明|
|--|--|
|201  |解析失败，请检查调起协议是否合法|
|1001|执行失败|
|2000|文件路径无效|
|2001|文件不存在|
|2002|文件大小超过限制|
|2003|IO异常|

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |
|2001|文件不存在|
|2002|文件大小超过限制|
|2003|IO异常|
