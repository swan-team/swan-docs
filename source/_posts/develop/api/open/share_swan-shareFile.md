---
title: swan.shareFile
header: develop
nav: api
sidebar: share_swan-shareFile
---
 
 

>  在工具和真机中的实现有区别，详见[API 实现差异](https://smartapp.baidu.com/docs/develop/devtools/diff/)。基础库3.80.2开始支持，低版本需做兼容处理。

**解释**：支持调起系统分享面板将文件分享到其他App。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_shareFile.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`data` 参数说明**：

|参数名 |类型  |是否必填  |默认值|说明|
|---- | ---- | ---- |--|---- |
|filePath| string | 是 |   |需要分享的文档的地址|
|success |Function  |  否 | | 接口调用成功的回调|
|fail   | Function |   否  | |接口调用失败的回调函数|
|complete  |  Function |   否 |  |接口调用结束的回调函数（调用成功、失败都会执行）|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/shareFile.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1 - 分享本地文件**

<a href="swanide://fragment/6c244bf3c5956ed06e526e3e886cfbde1561984657908" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中
```
<view class="wrap">
    <button type="primary" bindtap="shareFile">点击分享文件</button>
</view>
```

* 在 js 文件中
```
Page({
    shareFile() {
        swan.chooseImage({
            count: 1,
            success: res => {
                swan.shareFile({
                    filePath: res.tempFilePaths[0],
                    success: res => {
                        swan.showModal({
                            title: '分享成功',
                            content: JSON.stringify(res)
                        });
                    },
                    fail: err => {
                        swan.showModal({
                            title: '分享失败',
                            content: JSON.stringify(err)
                        });
                    }
                });
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```
* 在 css 文件中
```
.wrap {
    padding: 50rpx 30rpx;
}
```

**代码示例2 - 分享服务器上文件**

<a href="swanide://fragment/9678b33ffdeaf30f47a73c1923287a4f1576565600809" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中
```
<view class="container">
     <view class="card-area">
        <view class="display-area">
            <view>
                <image class="file-icon" src="/images/file-pdf.png" mode="widthFix"></image>
            </view>
            <view class="file-label">示例文件.pdf</view>
        </view>
        <view class="button-group">
            <button type="primary" bindtap="shareFile">分享服务器上文件</button>
        </view>
    </view>
</view>
```

* 在 js 文件中
```
Page({
    data: { },
    shareFile() {
        this.toast('正在保存', 'loading');
        swan.downloadFile({
            url: 'https://smartprogram.baidu.com/docs/img/file-simple.pdf',
            header: {
                'content-type': 'application/json'
            },
            success: res => {
                const filePath = res.tempFilePath;
                swan.shareFile({
                    filePath: res.tempFilePath,
                    success: res => {
                        swan.showModal({
                            title: '分享成功',
                            content: JSON.stringify(res)
                        });
                    },
                    fail: err => {
                        swan.showModal({
                            title: '分享失败',
                            content: JSON.stringify(err)
                        });
                    }
                });
            },
            fail: err => {
                this.toast('下载文件失败');
            },
            complete: () => {
                swan.hideToast();
            }
        });
    },
    toast(title, icon = 'none') {
        swan.showToast({title, icon});
    }
});

```
* 在 css 文件中
```
.wrap {
    padding: 50rpx 30rpx;
}
```

