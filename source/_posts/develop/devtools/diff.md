---
title: 模拟器实现差异
header: develop
nav: devtools
sidebar: diff
---


组件，API，框架在模拟器与真机中的实现差异如下：


|组件 |  差异| 
|---|---|
|[ar-camera AR相机 ](https://smartprogram.baidu.com/docs/develop/component/media_ar-camera/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[map 地图 ](https://smartapp.baidu.com/docs/develop/component/map/) | map地图的bindpoitap事件开发者工具暂不支持 |

|api |  差异| 
|---|---|
|[swan.getNetworkType ](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getNetworkType/) | 通过“模拟操作”->执行成功的回调函数返回模拟数据|
|[swan.startDeviceMotionListening ](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-startDeviceMotionListening/) | 通过“模拟操作->执行成功的回调函数返回模拟数据”|
|[swan.stopDeviceMotionListening ](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-stopDeviceMotionListening/) | 通过“模拟操作->执行成功的回调函数返回模拟数据”|
|[swan.getUpdateManager ](https://smartprogram.baidu.com/docs/develop/api/open/swan-getUpdateManager/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试|
|[UpdateManager.onCheckForUpdate ](https://smartprogram.baidu.com/docs/develop/api/open/UpdateManager-onCheckForUpdate/) | 通过“模拟操作->点击依赖分析->添加编译->下次编译时模拟更新”|
|[UpdateManager.onUpdateReady ](https://smartprogram.baidu.com/docs/develop/api/open/UpdateManager-onUpdateReady/) | 通过“模拟操作->点击依赖分析->添加编译->下次编译时模拟更新”|
|[UpdateManager.onUpdateFailed ](https://smartprogram.baidu.com/docs/develop/api/open/UpdateManager-onUpdateFailed/) | 通过“模拟操作->点击依赖分析->添加编译->下次编译时模拟更新”|
|[UpdateManager.applyUpdate ](https://smartprogram.baidu.com/docs/develop/api/open/UpdateManager-applyUpdate/) | 通过“模拟操作->点击依赖分析->添加编译->下次编译时模拟更新”|
|[swan.getAvailableAudioSources ](https://smartprogram.baidu.com/docs/develop/api/media/recorder_swan-getAvailableAudioSources/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[swan.createARCameraContext](https://smartprogram.baidu.com/docs/develop/api/media/arcameracontext_swan-createARCameraContext/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[ARCameraContext.takePhoto](https://smartprogram.baidu.com/docs/develop/api/media/arcameracontext_ARCameraContext-takePhoto/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[ARCameraContext.reset](https://smartprogram.baidu.com/docs/develop/api/media/arcameracontext_ARCameraContext-reset/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[ARCameraContext.startRecord](https://smartprogram.baidu.com/docs/develop/api/media/arcameracontext_ARCameraContext-startRecord/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[ARCameraContext.stopRecord](https://smartprogram.baidu.com/docs/develop/api/media/arcameracontext_ARCameraContext-stopRecord/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[VoiceRecognizer](https://smartprogram.baidu.com/docs/develop/api/ai/voice_swan-VoiceRecognizer/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[VoiceRecognizer.start](https://smartprogram.baidu.com/docs/develop/apiai/voice_VoiceRecognizer-start/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[VoiceRecognizer.stop](https://smartprogram.baidu.com/docs/develop/apiai/voice_VoiceRecognizer-stop/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[VoiceRecognizer.cancel](https://smartprogram.baidu.com/docs/develop/apiai/voice_VoiceRecognizer-cancel/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[VoiceRecognizer.onStart](https://smartapp.baidu.com/docs/develop/api/ai/voice_VoiceRecognizer-onStart/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[VoiceRecognizer.onFinish](https://smartapp.baidu.com/docs/develop/api/ai/voice_VoiceRecognizer-onFinish/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[VoiceRecognizer.onError](https://smartapp.baidu.com/docs/develop/api/ai/voice_VoiceRecognizer-onError/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[VoiceRecognizer.onRecognize](https://smartapp.baidu.com/docs/develop/api/ai/voice_VoiceRecognizer-onRecognize/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[swan.startLocationUpdate](https://smartapp.baidu.com/docs/develop/api/location/swan-startLocationUpdate/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[swan.onLocationChange](https://smartapp.baidu.com/docs/develop/api/location/swan-onLocationChange/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[swan.offLocationChange](https://smartapp.baidu.com/docs/develop/api/location/swan-offLocationChange/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[swan.stopLocationUpdate](https://smartapp.baidu.com/docs/develop/api/location/swan-stopLocationUpdate/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[swan.deleteEventOnCalendar](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-deleteEventOnCalendar/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[swan.addEventOnCalendar](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-addEventOnCalendar/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 |
|[swan.getSystemInfo](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfo/) | 部分属性开发者工具暂不支持,详情请看详情页 |
|[swan.getSystemInfoSync](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfoSync/) | 部分属性开发者工具暂不支持,详情请看详情页 |
|[swan.compressImage](https://smartprogram.baidu.com/docs/develop/api/media_image/#swan-compressImage/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 | 
|[swan.getLocation](https://smartprogram.baidu.com/docs/develop/api/location/swan-getLocation/) | 工具暂不支持返回wgs84坐标系 | 
|[swan.onMemoryWarning](https://smartprogram.baidu.com/docs/develop/api/device_sys/onmemory/) | 通过“模拟操作->内存警告”触发 | 
|[swan.onNetworkStatusChange](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-onNetworkStatusChange/) | 通过“模拟操作->网络”切换网络触发 | 
|[swan.onCompassChange](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-onCompassChange/) | 返回模拟数据 | 
| [swan.onDeviceMotionChange](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-onDeviceMotionChange/)| 通过“模拟操作->震动”触发| 
|[swan.scanCode](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-scanCode/) | 通过“模拟操作->扫码”设置扫码返回数据 | 
|[swan.onUserCaptureScreen](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-onUserCaptureScreen/) | 通过“模拟操作->截屏”触发 | 
|[swan.vibrateLong](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-vibrateLong/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 | 
| [swan.vibrateShort](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-vibrateShort/)| 降级支持，开发者工具控制台会给出提示，请使用真机调试 | 
| [swan.makePhoneCall](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-makePhoneCall/)| 通过“模拟操作->弹窗提示接口调用成功” | 
|[swan.requestPolymerPayment](https://smartprogram.baidu.com/docs/develop/api/open/payment_swan-requestPolymerPayment/) | 通过“模拟操作->弹窗提示接口调用成功” | 
| [swan.chooseInvoiceTitle](https://smartprogram.baidu.com/docs/develop/api/open/swan-chooseInvoiceTitle/)| 通过“模拟操作->提供模拟可选发票” | 
| [swan.chooseAddress](https://smartapp.baidu.com/docs/develop/api/open/chooseaddress_swan-chooseAddress/)| 通过“模拟操作->提供模拟地址” | 
| [swan.addPhoneContact](https://smartapp.baidu.com/docs/develop/api/device_sys/swan-addPhoneContact/)| 通过“模拟操作->提供模拟手机联系人” | 
|[swan.navigateToSmartProgram](https://smartprogram.baidu.com/docs/develop/api/open/swan-navigateToSmartProgram/) | 降级支持，开发者工具控制台会给出提示，请使用真机调试 | 
|[swan.navigateBackSmartProgram](https://smartprogram.baidu.com/docs/develop/api/open/swan-navigateBackSmartProgram/) |  降级支持，开发者工具控制台会给出提示，请使用真机调试| 
|[swan.setEnableDebug](https://smartprogram.baidu.com/docs/develop/api/open/swan-setEnableDebug/)|降级支持，开发者工具控制台会给出提示，请使用真机调试|
|[swan.showFavoriteGuide](https://smartprogram.baidu.com/docs/develop/api/show/nacomponent/)| 为方便开发者开发和调试，该api在开发工具中并未使用引导组件的统一[策略](https://smartapp.baidu.com/docs/develop/api/show/nacomponent/)|
|[swan.setInnerAudioOption](https://smartprogram.baidu.com/docs/develop/api/media/createinneraudiocontext_swan-setInnerAudioOption/)|降级支持，开发者工具控制台会给出提示，请使用真机调试| 
|[swan.ai.getVoiceRecognizer](https://smartprogram.baidu.com/docs/develop/api/ai_voice/#swan-ai-getVoiceRecognizer/)|降级支持，开发者工具控制台会给出提示，请使用真机调试| 
|[swan.shareFile](https://smartprogram.baidu.com/docs/develop/api/open_share/#swan-shareFile)|降级支持，开发者工具控制台会给出提示，请使用真机调试| 

|框架 |  差异|
|---|---|
|[onReachBottom](https://smartapp.baidu.com/docs/develop/framework/app_service_pagefunction/)|降级支持，请使用真机调试| 
|[requiredBackgroundModes](https://smartapp.baidu.com/docs/develop/tutorial/process/#requiredBackgroundModes/)|降级支持，请使用真机调试| 
|[preloadRule](https://smartprogram.baidu.com/docs/develop/framework/subpackages/#%E5%88%86%E5%8C%85%E9%A2%84%E4%B8%8B%E8%BD%BD%E8%A7%84%E5%88%99/)|降级支持，请使用真机调试| 
