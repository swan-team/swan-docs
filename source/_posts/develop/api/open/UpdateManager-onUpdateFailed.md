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

**代码示例**

[在开发者工具中预览效果](swanide://fragment/503b5e092aa23d3d161ab728f88d7b051575375613317)

* 在 swan 文件中
```html
<view class="container">
    <view class="card-area">
        <view class="top-description border-bottom">此api会在旧版小程序在拉到最新包失败时触发</view>   
    </view>
</view>
```

* 在 js 文件中
```js
Page({
    data: { },
    onLoad() {
        const updateManager = swan.getUpdateManager();
        updateManager.onUpdateFailed(function (res) {
            // 请求完新版本信息的回调
            console.log("res", res);
            if(!res.hasUpdate){
                swan.showModal({
                    title: '更新提示',
                    content: '版本更新失败，请重试',
                });
            }
        });
    }
});
```
