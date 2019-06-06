---
title: 模拟器 API 与真机的实现差异
header: develop
nav: devtools
sidebar: diff
---


API 在模拟器与真机中的实现差异如下：


|api |  差异| 
|---|---|
|onMemoryWarning | 通过“模拟操作->内存警告”触发 | 
|onNetworkStatusChange | 通过“模拟操作->网络”切换网络触发 | 
|onCompassChange | 返回模拟数据 | 
| onDeviceMotionChange| 返回模拟数据, 通过“模拟操作->震动”触发| 
|scanCode | 通过“模拟操作->扫码”设置扫码返回数据 | 
|onUserCaptureScreen | 通过“模拟操作->截屏”触发 | 
|vibrateLong | 开发者工具暂不支持 | 
| vibrateShort| 开发者工具暂不支持 | 
| makePhoneCall| 弹窗提示接口调用成功 | 
|requestPolymerPayment | 工具暂不支持调起支付 | 
| chooseInvoiceTitle| 提供模拟可选发票 | 
|navigateToSmartProgram | 开发者工具暂不支持 | 
|navigateBackSmartProgram |  开发者工具暂不支持| 
|setEnableDebug|开发者工具暂不支持|
|recognizeImage|开发者工具暂不支持|
|showFavoriteGuide| 为方便开发者开发和调试，该api在开发工具中并未使用引导组件的统一[策略](https://smartapp.baidu.com/docs/develop/api/nacomponent/#swan-showFavoriteGuide/)。|