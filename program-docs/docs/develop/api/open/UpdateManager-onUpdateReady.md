---
title: UpdateManager.onUpdateReady
header: develop
nav: api
sidebar: UpdateManager-onUpdateReady
---

 

 

**解释**：当新版本下载完成，会进行回调。

 
## 方法参数 

Function callback

## 示例
<a href="swanide://fragment/7e11216c88b914ab394f74e952b144d81575375461493" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_getUpdateManager.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 代码示例 



* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <view class="top-description border-bottom">此api会在旧版小程序在成功拉到最新包时触发</view>   
    </view>
</view>
```

* 在 js 文件中
```js
Page({
    data: { },
    onLoad() {
        const updateManager = swan.getUpdateManager();
        updateManager.onUpdateReady(function (res) {
            // 请求完新版本信息的回调
            console.log("res", res);
            if(!res.hasUpdate){
                swan.showModal({
                    title: '更新提示',
                    content: '新版本下载完成啦， 是否应用',
                });
            }
        });
    }
});
```
