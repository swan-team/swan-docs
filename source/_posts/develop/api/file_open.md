---
title: 打开新的文件页面
header: develop
nav: api
sidebar: file_open
---
## swan.openDocument

**解释**：新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|filePath   |String  |  是  |-| 文件路径，可通过 downloadFile 获得|
|fileType   |String  |  否  |-| 文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx。|
|success   |Function  |  否  | -|接口调用成功的回调函数|
|fail  |Function  |  否 | -| 接口调用失败的回调函数|
|complete   | Function   | 否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/296ad3255e4a0a9704a411f9e70ea9801557726088382" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="openDocument">openDocument</button>
</view>
```

* 在 js 文件中

```js
Page({
    openDocument() {
        swan.downloadFile({
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            success: function (res) {
                swan.openDocument({
                    filePath: res.tempFilePath,
                    fileType: 'pdf',
                    success: function (res) {
                        console.log('openDocument success', res);
                    },
                    fail: function (err) {
                        console.log('openDocument fail', err);
                    }
                });
            },
            fail: function (err) {
                console.log('downloadFile fail', err);
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