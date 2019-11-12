---
title:  swan.getSystemInfoSync
header: develop
nav: api
sidebar: swan-getSystemInfoSync
---


 

**解释**：获取系统信息同步接口

**方法参数**：无

**同步返回参数说明**：

|参数  |说明 |最低版本|
|---- | ---- |----|
|brand  | 手机品牌 | |
|model |  手机型号   | |
|pixelRatio | 设备像素比  | |
|screenWidth |屏幕宽度   | |
|screenHeight |   屏幕高度 | |
|windowWidth |可使用窗口宽度 | |
|windowHeight  |  可使用窗口高度 | |
|statusBarHeight| 状态栏的高度 | |
|navigationBarHeight| 导航栏的高度|3.0.17|
|language |宿主 App 设置的语言 | |
|version |宿主 App 版本号| |
|system  |操作系统版本  | |
|platform |客户端平台，如：ios。| |
|fontSizeSetting |用户字体大小设置 | |
|SDKVersion |客户端基础库版本 | |
|host|宿主平台，如：baiduboxapp 。|3.30.2|
|cacheLocation |上一次缓存的位置信息|安卓端最低swanjs版本3.40.4；ios最低支持版本3.70.2|
|swanNativeVersion|宿主平台版本号|最低支持版本1.13.18|
|devicePixelRatio|屏幕密度|安卓最低支持swanjs版本3.0.39； ios最低支持版本3.0.39 |
|albumAuthorized|允许宿主使用相册的开关（仅 iOS 有效）|ios最低支持版本3.110.3； 开发者工具暂不支持 |
|notificationAuthorized|允许宿主通知的开关|安卓最低支持swanjs版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|notificationAlertAuthorized|允许宿主通知带有提醒的开关（仅 iOS 有效）|ios最低支持版本3.110.3； 开发者工具暂不支持 |
|notificationBadgeAuthorized|允许宿主通知带有标记的开关（仅 iOS 有效）|ios最低支持版本3.110.3； 开发者工具暂不支持 |
|notificationSoundAuthorized|允许宿主通知带有声音的开关（仅 iOS 有效）|ios最低支持版本3.110.3； 开发者工具暂不支持 |
|cameraAuthorized|允许宿主使用摄像头的开关|安卓最低支持swanjs版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|locationAuthorized|允许宿主使用定位的开关|安卓最低支持swanjs版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|microphoneAuthorized|允许宿主使用麦克风的开关|安卓最低支持swanjs版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|locationEnabled|地理位置的系统开关|安卓最低支持swanjs版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|wifiEnabled|Wi-Fi 的系统开关|安卓最低支持swanjs版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|safeArea|在竖屏正方向下的安全区域|安卓最低支持swanjs版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |


**代码示例**：

<a href="swanide://fragment/6eb773151e65554728a7731425b69b341569477824448" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
try {
    const result = swan.getSystemInfoSync();
    console.log('getSystemInfoSync success', result);
} catch (e) {
    console.log('getSystemInfoSync fail', e);
}

```

#### 错误码

Andriod

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |