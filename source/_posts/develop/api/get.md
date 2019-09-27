---
title: 更新
header: develop
nav: api
sidebar: get
---

## swan.getUpdateManager

>基础库 1.13.4 开始支持，低版本需做兼容处理。

**解释**：获取全局唯一的版本更新管理器，用于管理小程序更新。

**方法参数**：无

**返回值**：updateManager

## UpdateManager

**解释**：管理更新，[swan.getUpdateManager](https://smartprogram.baidu.com/docs/develop/api/get/)返回值。

**示例**：

<a href="swanide://fragment/0c200e097017ef1f7409aec546adb30c1569553882500" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


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

## UpdateManager.onCheckForUpdate

**解释**：当向百度后台请求完新版本信息，会进行回调。

**方法参数**：Function callback

**参数说明**：

|属性 | 类型 | 说明|
|---- | ---- | ---- |
|hasUpdate |  Boolean | 是否有新的版本 |

## UpdateManager.onUpdateReady

**解释**：当新版本下载完成，会进行回调。

**方法参数**：Function callback

## UpdateManager.onUpdateFailed 

**解释**：当新版本下载失败，会进行回调

**方法参数**：Function callback


## UpdateManager.applyUpdate


**解释**： 当新版本下载完成，调用该方法会强制当前小程序应用上新版本并重启

**方法参数**：无

 



**说明**： 
* 检查更新操作由宿主APP在小程序冷启动时自动触发，不需由开发者主动触发，开发者只需监听检查结果即可。
* onUpdateReady(callback) 回调结果说明：当宿主APP检查到小程序有新版本，会主动触发下载操作（无需开发者触发），当下载完成后，会通过 onUpdateReady 告知开发者。
* onUpdateFailed(callback) 回调结果说明：当宿主APP检查到小程序有新版本，会主动触发下载操作（无需开发者触发），如果下载失败（可能是网络原因等），会通过 onUpdateFailed 告知开发者。
* applyUpdate() 说明：当小程序新版本已经下载时（即收到 onUpdateReady 回调），可以通过这个方法强制重启小程序并应用上最新版本。