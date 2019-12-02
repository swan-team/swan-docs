---
title: UpdateManager
header: develop
nav: api
sidebar: UpdateManager
---





**解释**：管理更新，[swan.getUpdateManager](https://smartprogram.baidu.com/docs/develop/api/get/)返回值。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_getUpdateManager.png"  class="demo-qrcode-image" />

**方法参数**：无

**代码示例**

<a href="swanide://fragment/0c200e097017ef1f7409aec546adb30c1569553882500" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


```js
Page({
    onLoad() {
        const updateManager = swan.getUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.log(res.hasUpdate);
        });

        updateManager.onUpdateReady(function (res) {
            swan.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: res => {
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
