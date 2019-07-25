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
|[request](/docs/develop/api/net_request/#request/)|3.90.1|
|[downloadFile](/docs/develop/api/net_uploadfile/#downloadFile/)|3.90.1|
|[uploadFile](/docs/develop/api/net_uploadfile/#uploadFile/)|3.90.1|
|[connectSocket](/docs/develop/api/net_websocket/#connectSocket/)|3.90.1|
|[onSocketOpen](/docs/develop/api/net_websocket/#onSocketOpen/)|3.90.1|

**AI：**

|API|最低版本|
|----|----|
|[ocrIdCard](/docs/develop/api/ai_ocr/#ocrIdCard/)|3.90.1|
|[ocrBankCard](/docs/develop/api/ai_ocr/#ocrBankCard/)|3.90.1|
|[ocrDrivingLicense](/docs/develop/api/ai_ocr/#ocrDrivingLicense/)|3.90.1|
|[ocrVehicleLicense](/docs/develop/api/ai_ocr/#ocrVehicleLicense/)|3.90.1|
|[textReview](/docs/develop/api/ai_text/#textReview/)|3.90.1|
|[textToAudio](/docs/develop/api/ai_audio/#textToAudio/)|3.90.1|
|[imageAudit](/docs/develop/api/ai_audit/#imageAudit/)|3.90.1|
|[advancedGeneralIdentify](/docs/develop/api/ai_classify/#advancedGeneralIdentify/)|3.90.1|
|[objectDetectIdentify](/docs/develop/api/ai_classify/#objectDetectIdentify/)|3.90.1|
|[carClassify](/docs/develop/api/ai_classify/#carClassify/)|3.90.1|
|[dishClassify](/docs/develop/api/ai_classify/#dishClassify/)|3.90.1|
|[logoClassify](/docs/develop/api/ai_classify/#logoClassify/)|3.90.1|
|[animalClassify](/docs/develop/api/ai_classify/#animalClassify/)|3.90.1|
|[plantClassify](/docs/develop/api/ai_classify/#plantClassify/)|3.90.1|
|[getVoiceRecognizer](/docs/develop/api/ai_voice/#getVoiceRecognizer/)|3.90.1|

**媒体：**

|API|最低版本|
|----|----|
|[chooseImage](/docs/develop/api/media_image/#chooseImage/)|3.90.1|
|[previewImage](/docs/develop/api/media_image/#previewImage/)|3.90.1|
|[getImageInfo](/docs/develop/api/media_image/#getImageInfo/)|3.90.1|
|[saveImageToPhotosAlbum](/docs/develop/api/media_image/#saveImageToPhotosAlbum/)|3.90.1|
|[getRecorderManager](/docs/develop/api/media_recorder/#getRecorderManager/)|3.90.1|
|[getBackgroundAudioManager](/docs/develop/api/media_backgroundaudiomanager/#getBackgroundAudioManager/)|3.90.1|
|[createInnerAudioContext](/docs/develop/api/media_createinneraudiocontext/#createInnerAudioContext/)|3.90.1|
|[chooseVideo](/docs/develop/api/media_video/#chooseVideo/)|3.90.1|
|[saveVideoToPhotosAlbum](/docs/develop/api/media_video/#saveVideoToPhotosAlbum/)|3.90.1|
|[createVideoContext](/docs/develop/api/media_videocontext/#createVideoContext/)|3.90.1|
|[createLivePlayerContext](/docs/develop/api/media_liveplayercontext/#createLivePlayerContext/)|3.90.1|
|[createCameraContext](/docs/develop/api/media_cameracontext/#createCameraContext/)|3.90.1|
|[createARCameraContext](/docs/develop/api/media_arcameracontext/#createARCameraContext/)|3.90.1|

**存储数据：**

|API|最低版本|
|----|----|
|[setStorage](/docs/develop/api/storage_save/#setStorage/)|3.90.1|
|[setStorageSync](/docs/develop/api/storage_save/#setStorageSync/)|3.90.1|
|[getStorage](/docs/develop/api/storage_save/#getStorage/)|3.90.1|
|[getStorageSync](/docs/develop/api/storage_save/#getStorageSync/)|3.90.1|
|[removeStorage](/docs/develop/api/storage_remove/#removeStorage/)|3.90.1|
|[removeStorageSync](/docs/develop/api/storage_remove/#removeStorageSync/)|3.90.1|

**位置：**

|API|最低版本|
|----|----|
|[getLocation](/docs/develop/api/location_get/#getLocation/)|3.90.1|
|[chooseLocation](/docs/develop/api/location_get/#chooseLocation/)|3.90.1|
|[openLocation](/docs/develop/api/location_open/#openLocation/)|3.90.1|
|[createMapContext](/docs/develop/api/location_map/#createMapContext/)|3.90.1|

**界面：**

|API|最低版本|
|----|----|
|[createCanvasContext](/docs/develop/api/show_canvas/#createCanvasContext/)|3.90.1|
|[canvasGetImageData](/docs/develop/api/show_canvas/#canvasGetImageData/)|3.90.1|
|[canvasPutImageData](/docs/develop/api/show_canvas/#canvasPutImageData/)|3.90.1|
|[canvasToTempFilePath](docs/develop/api/show_canvas/#canvasToTempFilePath-OBJECT-this/)|3.90.1|
|[showToast](/docs/develop/api/show_toast/#showToast/)|3.90.1|
|[showLoading](/docs/develop/api/show_toast/#showLoading/)|3.90.1|
|[hideToast](/docs/develop/api/show_toast/#hideToast/)|3.90.1|
|[hideLoading](/docs/develop/api/show_toast/#hideLoading/)|3.90.1|
|[showModal](/docs/develop/api/show_toast/#showModal/)|3.90.1|
|[showActionSheet](/docs/develop/api/show_toast/#showActionSheet/)|3.90.1|
|[setNavigationBarTitle](/docs/develop/api/show_navigationbar/#setNavigationBarTitle/)|3.90.1|
|[showNavigationBarLoading](/docs/develop/api/show_navigationbar/#showNavigationBarLoading/)|3.90.1|
|[hideNavigationBarLoading](/docs/develop/api/show_navigationbar/#hideNavigationBarLoading/)|3.90.1|
|[setNavigationBarColor](/docs/develop/api/show_navigationbar/#setNavigationBarColor/)|3.90.1|
|[navigateTo](/docs/develop/api/show_tab/#navigateTo/)|3.90.1|
|[redirectTo](/docs/develop/api/show_tab/#redirectTo/)|3.90.1|
|[switchTab](/docs/develop/api/show_tab/#switchTab/)|3.90.1|
|[navigateBack](/docs/develop/api/show_tab/#navigateBack/)|3.90.1|
|[reLaunch](/docs/develop/api/show_tab/#reLaunch/)|3.90.1|
|[createAnimation](/docs/develop/api/show_createanimation/#createAnimation/)|3.90.1|
|[pageScrollTo](/docs/develop/api/show_pagescrollto/#pageScrollTo/)|3.90.1|
|[setBackgroundColor](/docs/develop/api/show_background/#setBackgroundColor/)|3.90.1|
|[setBackgroundTextStyle](/docs/develop/api/show_background/#setBackgroundTextStyle/)|3.90.1|
|[startPullDownRefresh](/docs/develop/api/show_pull/#startPullDownRefresh/)|3.90.1|
|[stopPullDownRefresh](/docs/develop/api/show_pull/#stopPullDownRefresh/)|3.90.1|
|[createIntersectionObserver](/docs/develop/api/show_query/#createIntersectionObserver-this-options/)|3.90.1|
|[createSelectorQuery](/docs/develop/api/show_query/#createSelectorQuery/)|3.90.1|

**设备：**

|API|最低版本|
|----|----|
|[getSystemInfo](/docs/develop/api/device_sys/#getSystemInfo/)|3.90.1|
|[getSystemInfoSync](/docs/develop/api/device_sys/#getSystemInfoSync/)|3.90.1|
|[getEnvInfoSync](/docs/develop/api/device_sys/#getEnvInfoSync/)|3.90.1|
|[getNetworkType](/docs/develop/api/device_network/#getNetworkType/)|3.90.1|
|[onNetworkStatusChange](/docs/develop/api/device_network/#onNetworkStatusChange/)|3.90.1|
|[onAccelerometerChange](/docs/develop/api/device_accelerometer/#onAccelerometerChange/)|3.90.1|
|[startAccelerometer](/docs/develop/api/device_accelerometer/#startAccelerometer/)|3.90.1|
|[stopAccelerometer](/docs/develop/api/device_accelerometer/#stopAccelerometer/)|3.90.1|
|[onCompassChange](/docs/develop/api/device_compass/#onCompassChange/)|3.90.1|
|[startCompass](/docs/develop/api/device_compass/#startCompass/)|3.90.1|
|[stopCompass](/docs/develop/api/device_compass/#stopCompass/)|3.90.1|
|[scanCode](/docs/develop/api/device_scan/#scanCode/)|3.90.1|
|[setScreenBrightness](/docs/develop/api/device_screen/#setScreenBrightness/)|3.90.1|
|[getScreenBrightness](/docs/develop/api/device_screen/#getScreenBrightness/)|3.90.1|
|[setKeepScreenOn](/docs/develop/api/device_screen/#setKeepScreenOn/)|3.90.1|
|[onUserCaptureScreen](/docs/develop/api/device_capture/#onUserCaptureScreen/)|3.90.1|
|[vibrateLong](/docs/develop/api/device_vibrate/#vibrateLong/)|3.90.1|
|[vibrateShort](/docs/develop/api/device_vibrate/#vibrateShort/)|3.90.1|
|[addPhoneContact](/docs/develop/api/device_phonecontact/#addPhoneContact/)|3.90.1|
|[makePhoneCall](/docs/develop/api/device_call/#makePhoneCall/)|3.90.1|
|[setClipboardData](/docs/develop/api/device_clipboard/#setClipboardData/)|3.90.1|
|[getClipboardData](/docs/develop/api/device_clipboard/#getClipboardData/)|3.90.1|

**开放接口：**

|API|最低版本|
|----|----|
|[isLoginSync](/docs/develop/api/open_log/#isLoginSync/)|3.90.1|
|[getSwanId](/docs/develop/api/open_userinfo/#getSwanId/)|3.90.1|
|[navigateToSmartProgram](/docs/develop/api/open_smartprogram/#navigateToSmartProgram/)|3.90.1|
|[navigateBackSmartProgram](/docs/develop/api/open_smartprogram/#navigateBackSmartProgram/)|3.90.1|
|[setMetaDescription](/docs/develop/api/seo/#setMetaDescription/)|3.90.1|
|[setMetaKeywords](/docs/develop/api/seo/#setMetaKeywords/)|3.90.1|
|[setDocumentTitle](/docs/develop/api/seo/#setDocumentTitle/)|3.90.1|
|[reportAnalytics](/docs/develop/api/data/#reportAnalytics/)|3.90.1|