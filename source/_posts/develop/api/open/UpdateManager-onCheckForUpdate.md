---
title: UpdateManager.onCheckForUpdate
header: develop
nav: api
sidebar: UpdateManager-onCheckForUpdate
---
 

 

**解释**：当向百度后台请求完新版本信息，会进行回调。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_getUpdateManager.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**参数说明**：

|属性 | 类型 | 说明|
|---- | ---- | ---- |
|hasUpdate |  Boolean | 是否有新的版本 |

**代码示例**：

<a href="swanide://fragment/1d5e55c4a591129c35adf0cb7bd4c2f21574070810759" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <view class="top-description border-bottom">onCheckForUpdate</view>
        <button type="primary" bindtap="bindOnCheckForUpdate">button</button>   
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
