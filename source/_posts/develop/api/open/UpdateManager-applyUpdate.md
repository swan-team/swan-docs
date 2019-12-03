---
title: UpdateManager.applyUpdate
header: develop
nav: api
sidebar: UpdateManager-applyUpdate
---
 




**解释**： 当新版本下载完成，调用该方法会强制当前小程序应用上新版本并重启

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_getUpdateManager.png"  class="demo-qrcode-image" />

**方法参数**：无

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
            // 请求完新版本信息的回调
            console.log("res", res.hasUpdate);
            if(!res.hasUpdate){
                swan.showModal({
                    title: '更新提示',
                    content: '无可用更新版本',
                });
            }
        });

        updateManager.onUpdateReady(function (res) {  
            swan.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success(res) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate();
                    }
                }
            });
        });
    }
});
```
 



**Bug & Tip**： 

* 检查更新操作由宿主APP在小程序冷启动时自动触发，不需由开发者主动触发，开发者只需监听检查结果即可。
* onUpdateReady(callback) 回调结果说明：当宿主APP检查到小程序有新版本，会主动触发下载操作（无需开发者触发），当下载完成后，会通过 onUpdateReady 告知开发者。
* onUpdateFailed(callback) 回调结果说明：当宿主APP检查到小程序有新版本，会主动触发下载操作（无需开发者触发），如果下载失败（可能是网络原因等），会通过 onUpdateFailed 告知开发者。
* applyUpdate 说明：当小程序新版本已经下载时（即收到 onUpdateReady 回调），可以通过这个方法强制重启小程序并应用上最新版本。
