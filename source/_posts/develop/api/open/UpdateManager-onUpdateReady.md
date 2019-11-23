---
title: UpdateManager.onUpdateReady
header: develop
nav: api
sidebar: UpdateManager-onUpdateReady
---

 

 

**解释**：当新版本下载完成，会进行回调。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_getUpdateManager.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**代码示例**：

<a href="swanide://fragment/1d5e55c4a591129c35adf0cb7bd4c2f21574070810759" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <view class="top-description border-bottom">onUpdateReady</view>
        <button type="primary" bindtap="bindOnUpdateReady">button</button>   
    </view>
</view>
```

* 在 js 文件中
```js
Page({
    data: {},
    bindOnCheckForUpdate() {
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
    }
});
```
