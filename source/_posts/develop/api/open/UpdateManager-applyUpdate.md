---
title: UpdateManager.applyUpdate
header: develop
nav: api
sidebar: UpdateManager-applyUpdate
---
 




**解释**： 当新版本下载完成，调用该方法会强制当前小程序应用上新版本并重启

**方法参数**：无

 



**Bug & Tip**： 

* 检查更新操作由宿主APP在小程序冷启动时自动触发，不需由开发者主动触发，开发者只需监听检查结果即可。
* onUpdateReady(callback) 回调结果说明：当宿主APP检查到小程序有新版本，会主动触发下载操作（无需开发者触发），当下载完成后，会通过 onUpdateReady 告知开发者。
* onUpdateFailed(callback) 回调结果说明：当宿主APP检查到小程序有新版本，会主动触发下载操作（无需开发者触发），如果下载失败（可能是网络原因等），会通过 onUpdateFailed 告知开发者。
* applyUpdate 说明：当小程序新版本已经下载时（即收到 onUpdateReady 回调），可以通过这个方法强制重启小程序并应用上最新版本。