---
title: 插件中api的限制
header: develop
nav: plugins
sidebar: limit_api
---

插件中对 API 的调用做了限制，其中区别主要有以下两点：

- 插件中请求的域名列表与小程序是相互独立的。
- 有些 API 在插件中不可以被使用，没有暴露在 swan 对象上。

插件中可以使用的 API 及基础库对应版本如下：

**网络：**

|API|最低版本|
|----|----|
|[request](https://smartprogram.baidu.com/docs/develop/api/net_request/#request/)|3.90.1|
|[downloadFile](https://smartprogram.baidu.com/docs/develop/api/net_uploadfile/#downloadFile/)|3.90.1|
|[uploadFile](https://smartprogram.baidu.com/docs/develop/api/net_uploadfile/#uploadFile/)|3.90.1|
|[connectSocket](https://smartprogram.baidu.com/docs/develop/api/net_websocket/#connectSocket/)|3.90.1|
|[onSocketOpen](https://smartprogram.baidu.com/docs/develop/api/net_websocket/#onSocketOpen/)|3.90.1|

**AI：**

|API|最低版本|
|----|----|
|[ocrIdCard](https://smartprogram.baidu.com/docs/develop/api/ai_ocr/#ocrIdCard/)|3.90.1|
|[ocrBankCard](https://smartprogram.baidu.com/docs/develop/api/ai_ocr/#ocrBankCard/)|3.90.1|
|[ocrDrivingLicense](https://smartprogram.baidu.com/docs/develop/api/ai_ocr/#ocrDrivingLicense/)|3.90.1|
|[ocrVehicleLicense](https://smartprogram.baidu.com/docs/develop/api/ai_ocr/#ocrVehicleLicense/)|3.90.1|
|[textReview](https://smartprogram.baidu.com/docs/develop/api/ai_text/#textReview/)|3.90.1|
|[textToAudio](https://smartprogram.baidu.com/docs/develop/api/ai_audio/#textToAudio/)|3.90.1|
|[imageAudit](https://smartprogram.baidu.com/docs/develop/api/ai_audit/#imageAudit/)|3.90.1|
|[advancedGeneralIdentify](https://smartprogram.baidu.com/docs/develop/api/ai_classify/#advancedGeneralIdentify/)|3.90.1|
|[objectDetectIdentify](https://smartprogram.baidu.com/docs/develop/api/ai_classify/#objectDetectIdentify/)|3.90.1|
|[carClassify](https://smartprogram.baidu.com/docs/develop/api/ai_classify/#carClassify/)|3.90.1|
|[dishClassify](https://smartprogram.baidu.com/docs/develop/api/ai_classify/#dishClassify/)|3.90.1|
|[logoClassify](https://smartprogram.baidu.com/docs/develop/api/ai_classify/#logoClassify/)|3.90.1|
|[animalClassify](https://smartprogram.baidu.com/docs/develop/api/ai_classify/#animalClassify/)|3.90.1|
|[plantClassify](https://smartprogram.baidu.com/docs/develop/api/ai_classify/#plantClassify/)|3.90.1|
|[getVoiceRecognizer](https://smartprogram.baidu.com/docs/develop/api/ai_voice/#getVoiceRecognizer/)|3.90.1|

**媒体：**

|API|最低版本|
|----|----|
|[chooseImage](https://smartprogram.baidu.com/docs/develop/api/media_image/#chooseImage/)|3.90.1|
|[previewImage](https://smartprogram.baidu.com/docs/develop/api/media_image/#previewImage/)|3.90.1|
|[getImageInfo](https://smartprogram.baidu.com/docs/develop/api/media_image/#getImageInfo/)|3.90.1|
|[saveImageToPhotosAlbum](https://smartprogram.baidu.com/docs/develop/api/media_image/#saveImageToPhotosAlbum/)|3.90.1|
|[getRecorderManager](https://smartprogram.baidu.com/docs/develop/api/media_recorder/#getRecorderManager/)|3.90.1|
|[getBackgroundAudioManager](https://smartprogram.baidu.com/docs/develop/api/media_backgroundaudiomanager/#getBackgroundAudioManager/)|3.90.1|
|[createInnerAudioContext](https://smartprogram.baidu.com/docs/develop/api/media_createinneraudiocontext/#createInnerAudioContext/)|3.90.1|
|[chooseVideo](https://smartprogram.baidu.com/docs/develop/api/media_video/#chooseVideo/)|3.90.1|
|[saveVideoToPhotosAlbum](https://smartprogram.baidu.com/docs/develop/api/media_video/#saveVideoToPhotosAlbum/)|3.90.1|
|[createVideoContext](https://smartprogram.baidu.com/docs/develop/api/media_videocontext/#createVideoContext/)|3.90.1|
|[createLivePlayerContext](https://smartprogram.baidu.com/docs/develop/api/media_liveplayercontext/#createLivePlayerContext/)|3.90.1|
|[createCameraContext](https://smartprogram.baidu.com/docs/develop/api/media_cameracontext/#createCameraContext/)|3.90.1|
|[createARCameraContext](https://smartprogram.baidu.com/docs/develop/api/media_arcameracontext/#createARCameraContext/)|3.90.1|

**存储数据：**

|API|最低版本|
|----|----|
|[setStorage](https://smartprogram.baidu.com/docs/develop/api/storage_save/#setStorage/)|3.90.1|
|[setStorageSync](https://smartprogram.baidu.com/docs/develop/api/storage_save/#setStorageSync/)|3.90.1|
|[getStorage](https://smartprogram.baidu.com/docs/develop/api/storage_save/#getStorage/)|3.90.1|
|[getStorageSync](https://smartprogram.baidu.com/docs/develop/api/storage_save/#getStorageSync/)|3.90.1|
|[removeStorage](https://smartprogram.baidu.com/docs/develop/api/storage_remove/#removeStorage/)|3.90.1|
|[removeStorageSync](https://smartprogram.baidu.com/docs/develop/api/storage_remove/#removeStorageSync/)|3.90.1|

**位置：**

|API|最低版本|
|----|----|
|[getLocation](https://smartprogram.baidu.com/docs/develop/api/location_get/#getLocation/)|3.90.1|
|[chooseLocation](https://smartprogram.baidu.com/docs/develop/api/location_get/#chooseLocation/)|3.90.1|
|[openLocation](https://smartprogram.baidu.com/docs/develop/api/location_open/#openLocation/)|3.90.1|
|[createMapContext](https://smartprogram.baidu.com/docs/develop/api/location_map/#createMapContext/)|3.90.1|

**界面：**

|API|最低版本|
|----|----|
|[createCanvasContext](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#createCanvasContext/)|3.90.1|
|[canvasGetImageData](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasGetImageData/)|3.90.1|
|[canvasPutImageData](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasPutImageData/)|3.90.1|
|[canvasToTempFilePath](https://smartprogram.baidu.comdocs/develop/api/show_canvas/#canvasToTempFilePath-OBJECT-this/)|3.90.1|
|[showToast](https://smartprogram.baidu.com/docs/develop/api/show_toast/#showToast/)|3.90.1|
|[showLoading](https://smartprogram.baidu.com/docs/develop/api/show_toast/#showLoading/)|3.90.1|
|[hideToast](https://smartprogram.baidu.com/docs/develop/api/show_toast/#hideToast/)|3.90.1|
|[hideLoading](https://smartprogram.baidu.com/docs/develop/api/show_toast/#hideLoading/)|3.90.1|
|[showModal](https://smartprogram.baidu.com/docs/develop/api/show_toast/#showModal/)|3.90.1|
|[showActionSheet](https://smartprogram.baidu.com/docs/develop/api/show_toast/#showActionSheet/)|3.90.1|
|[setNavigationBarTitle](https://smartprogram.baidu.com/docs/develop/api/show_navigationbar/#setNavigationBarTitle/)|3.90.1|
|[showNavigationBarLoading](https://smartprogram.baidu.com/docs/develop/api/show_navigationbar/#showNavigationBarLoading/)|3.90.1|
|[hideNavigationBarLoading](https://smartprogram.baidu.com/docs/develop/api/show_navigationbar/#hideNavigationBarLoading/)|3.90.1|
|[setNavigationBarColor](https://smartprogram.baidu.com/docs/develop/api/show_navigationbar/#setNavigationBarColor/)|3.90.1|
|[navigateTo](https://smartprogram.baidu.com/docs/develop/api/show_tab/#navigateTo/)|3.90.1|
|[redirectTo](https://smartprogram.baidu.com/docs/develop/api/show_tab/#redirectTo/)|3.90.1|
|[switchTab](https://smartprogram.baidu.com/docs/develop/api/show_tab/#switchTab/)|3.90.1|
|[navigateBack](https://smartprogram.baidu.com/docs/develop/api/show_tab/#navigateBack/)|3.90.1|
|[reLaunch](https://smartprogram.baidu.com/docs/develop/api/show_tab/#reLaunch/)|3.90.1|
|[createAnimation](https://smartprogram.baidu.com/docs/develop/api/show_createanimation/#createAnimation/)|3.90.1|
|[pageScrollTo](https://smartprogram.baidu.com/docs/develop/api/show_pagescrollto/#pageScrollTo/)|3.90.1|
|[setBackgroundColor](https://smartprogram.baidu.com/docs/develop/api/show_background/#setBackgroundColor/)|3.90.1|
|[setBackgroundTextStyle](https://smartprogram.baidu.com/docs/develop/api/show_background/#setBackgroundTextStyle/)|3.90.1|
|[startPullDownRefresh](https://smartprogram.baidu.com/docs/develop/api/show_pull/#startPullDownRefresh/)|3.90.1|
|[stopPullDownRefresh](https://smartprogram.baidu.com/docs/develop/api/show_pull/#stopPullDownRefresh/)|3.90.1|
|[createIntersectionObserver](https://smartprogram.baidu.com/docs/develop/api/show_query/#createIntersectionObserver-this-options/)|3.90.1|
|[createSelectorQuery](https://smartprogram.baidu.com/docs/develop/api/show_query/#createSelectorQuery/)|3.90.1|

**设备：**

|API|最低版本|
|----|----|
|[getSystemInfo](https://smartprogram.baidu.com/docs/develop/api/device_sys/#getSystemInfo/)|3.90.1|
|[getSystemInfoSync](https://smartprogram.baidu.com/docs/develop/api/device_sys/#getSystemInfoSync/)|3.90.1|
|[getEnvInfoSync](https://smartprogram.baidu.com/docs/develop/api/device_sys/#getEnvInfoSync/)|3.90.1|
|[getNetworkType](https://smartprogram.baidu.com/docs/develop/api/device_network/#getNetworkType/)|3.90.1|
|[onNetworkStatusChange](https://smartprogram.baidu.com/docs/develop/api/device_network/#onNetworkStatusChange/)|3.90.1|
|[onAccelerometerChange](https://smartprogram.baidu.com/docs/develop/api/device_accelerometer/#onAccelerometerChange/)|3.90.1|
|[startAccelerometer](https://smartprogram.baidu.com/docs/develop/api/device_accelerometer/#startAccelerometer/)|3.90.1|
|[stopAccelerometer](https://smartprogram.baidu.com/docs/develop/api/device_accelerometer/#stopAccelerometer/)|3.90.1|
|[onCompassChange](https://smartprogram.baidu.com/docs/develop/api/device_compass/#onCompassChange/)|3.90.1|
|[startCompass](https://smartprogram.baidu.com/docs/develop/api/device_compass/#startCompass/)|3.90.1|
|[stopCompass](https://smartprogram.baidu.com/docs/develop/api/device_compass/#stopCompass/)|3.90.1|
|[scanCode](https://smartprogram.baidu.com/docs/develop/api/device_scan/#scanCode/)|3.90.1|
|[setScreenBrightness](https://smartprogram.baidu.com/docs/develop/api/device_screen/#setScreenBrightness/)|3.90.1|
|[getScreenBrightness](https://smartprogram.baidu.com/docs/develop/api/device_screen/#getScreenBrightness/)|3.90.1|
|[setKeepScreenOn](https://smartprogram.baidu.com/docs/develop/api/device_screen/#setKeepScreenOn/)|3.90.1|
|[onUserCaptureScreen](https://smartprogram.baidu.com/docs/develop/api/device_capture/#onUserCaptureScreen/)|3.90.1|
|[vibrateLong](https://smartprogram.baidu.com/docs/develop/api/device_vibrate/#vibrateLong/)|3.90.1|
|[vibrateShort](https://smartprogram.baidu.com/docs/develop/api/device_vibrate/#vibrateShort/)|3.90.1|
|[addPhoneContact](https://smartprogram.baidu.com/docs/develop/api/device_phonecontact/#addPhoneContact/)|3.90.1|
|[makePhoneCall](https://smartprogram.baidu.com/docs/develop/api/device_call/#makePhoneCall/)|3.90.1|
|[setClipboardData](https://smartprogram.baidu.com/docs/develop/api/device_clipboard/#setClipboardData/)|3.90.1|
|[getClipboardData](https://smartprogram.baidu.com/docs/develop/api/device_clipboard/#getClipboardData/)|3.90.1|

**开放接口：**

|API|最低版本|
|----|----|
|[isLoginSync](https://smartprogram.baidu.com/docs/develop/api/open_log/#isLoginSync/)|3.90.1|
|[getSwanId](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#getSwanId/)|3.90.1|
|[navigateToSmartProgram](https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#navigateToSmartProgram/)|3.90.1|
|[navigateBackSmartProgram](https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#navigateBackSmartProgram/)|3.90.1|
|[setMetaDescription](https://smartprogram.baidu.com/docs/develop/api/seo/#setMetaDescription/)|3.90.1|
|[setMetaKeywords](https://smartprogram.baidu.com/docs/develop/api/seo/#setMetaKeywords/)|3.90.1|
|[setDocumentTitle](https://smartprogram.baidu.com/docs/develop/api/seo/#setDocumentTitle/)|3.90.1|
|[reportAnalytics](https://smartprogram.baidu.com/docs/develop/api/data/#reportAnalytics/)|3.90.1|