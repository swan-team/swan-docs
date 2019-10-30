---
title: UpdateManager
header: develop
nav: api
sidebar: UpdateManager
---

 

 

**解释**：管理更新，[swan.getUpdateManager](https://smartprogram.baidu.com/docs/develop/api/get/)返回值。

**示例**：

<a href="swanide://fragment/ed874693dca5217df429f19488b83fbc1558342900404" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="applyUpdate">applyUpdate</button>
</view>
```

* 在 js 文件中

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

        updateManager.onUpdateFailed(function (err) {
            // 新的版本下载失败
            console.log('update fail', err);
        });

        this.updateManager = updateManager;
    },
    applyUpdate() {
        this.updateManager.applyUpdate();
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```

