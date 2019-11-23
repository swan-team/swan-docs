---
title: UpdateManager.onUpdateFailed 
header: develop
nav: api
sidebar: UpdateManager-onUpdateFailed 
---
 

 

**解释**：当新版本下载失败，会进行回调

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_getUpdateManager.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**代码示例**：

[在开发者工具中预览效果](swanide://fragment/65877d62da2f54c951b087ed53ee2dc91573808765114)

* 在 swan 文件中
```html
<view class="card-area">
    <view class="top-description border-bottom">applyUpdate</view>
    <button type="primary" bindtap="updateTap">button</button>   
</view>
```

* 在 js 文件中
```js
Page({
    updateTap() {
        const updateManager = swan.getUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
            if(!res.hasUpdate){
                swan.showModal({
                    title: '更新提示',
                    content: '无可用更新版本',
                });
            }
        });

        updateManager.onUpdateFailed(function (err) {
            swan.showModal({
                title: '更新提示',
                content: '版本更新失败，请重试'
            });
            // 新的版本下载失败
            console.log('update fail', err);
        });
    }
});
```
