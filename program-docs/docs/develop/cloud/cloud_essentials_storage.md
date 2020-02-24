---
title: 云存储 
header: develop
nav: cloud
sidebar: cloud_essentials_storage
---



云开发提供的对象存储能力拥有一块云端存储空间，能够允许开发者在智能小程序中上传和下载文件，例如图片、音频、视频或其他各类内容。同时，在云函数中通过服务端 SDK，也可以管理这些文件。

下面是一个简单的示例。

**代码示例**
```
// 用户选择一张图片,上传到云存储空间
swan.chooseImage({
    success: chooseResult => {
        swan.cloud.uploadFile({
            // 指定上传到的云路径
            cloudPath: 'my-photo.png',
            // 指定要上传的文件的小程序临时文件路径
            filePath: chooseResult.tempFilePaths[0],
            // 成功回调
            success: res => {
                console.log('上传成功', res)
            },
            fail: err => {
                console.log('上传失败', err)
            }
        })
    },
})
```