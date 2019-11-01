---
title: swan.saveVideoToPhotosAlbum
header: develop
nav: api
sidebar: video_swan-saveVideoToPhotosAlbum
---




**解释**： 保存视频到系统相册。需要用户授权。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|filePath  |  String  |是 | |  视频文件路径，可以是临时文件路径也可以是永久文件路径。|
|success |Function |   否  | | 接口调用成功的回调函数|
|fail  |  Function  |  否 || 接口调用失败的回调函数|
|complete |   Function |   否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|

 


**示例**：
<a href="swanide://fragment/078059df20a15ce21c906235c4a075771569395753746" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    saveVideoToPhotosAlbum() {
        swan.chooseVideo({
            sourceType: ['album', 'camera'],
            compressed: false,
            success: res => {
                swan.saveVideoToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: res => {
                        swan.showToast({
                            title: 'success',
                            icon: 'none'
                        });
                        console.log('saveVideoToPhotosAlbum success', res);
                    },
                    fail: err => {
                        swan.showToast({
                            title: 'fail',
                            icon: 'none'
                        });
                        console.log('saveVideoToPhotosAlbum fail', err);
                    }
                });
            },
            fail: err => {
                console.log('fail', err);
            }
        });
    }
});
```

