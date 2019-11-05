---
title: swan.saveImageToPhotosAlbum
header: develop
nav: api
sidebar: image_saveImageToPhotosAlbum
---




**解释**： 保存图片到系统相册，需要用户授权。

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|filePath  |  String  |是 | |  图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径。|
|success |Function |   否  | | 接口调用成功的回调函数|
|fail  |  Function  |  否  | | 接口调用失败的回调函数|
|complete |   Function |   否 || 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/1493fabbbf98659284ff1d4837d9cb7f1569416506836" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    swan.downloadFile({
        // 仅为示例，并非真实的资源
        url: 'https://b.bdstatic.com/miniapp/xxxx',
        header: {
            'content-type': 'application/json'
        },
        success: res => {
            let filePath = res.tempFilePath;
            swan.saveImageToPhotosAlbum({
                filePath, // 暂不支持网络图片地址，需与swan.downloadFile一起使用
                success: res => {
                    swan.showToast({
                        title: '已保存到本地相册',
                        icon: 'none'
                    });
                    console.log('saveImageToPhotosAlbum success', res);
                },
                fail: err => {
                    swan.showToast({
                        title: '',
                        icon: 'none'
                    });
                    console.log('saveImageToPhotosAlbum fail', err);
                }
            });
        },
        fail: err => {
            console.log('错误码：' + err.errCode);
            console.log('错误信息：' + err.errMsg);
        }
    });
});
```