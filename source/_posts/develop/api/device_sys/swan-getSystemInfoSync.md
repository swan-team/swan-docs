---
title:  swan.getSystemInfoSync
header: develop
nav: api
sidebar: swan-getSystemInfoSync
---


 

**解释**：获取系统信息同步接口

 
## 方法参数 

无 

### 同步返回参数说明 

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
|host|宿主平台，详见[宿主平台枚举值列表](https://smartprogram.baidu.com/docs/develop/api/device_sys/hostlist/) 。|3.30.2|
|cacheLocation |上一次缓存的位置信息|安卓端最低基础库版本3.40.4；ios最低支持版本3.70.2|
|swanNativeVersion|宿主平台版本号|最低支持版本1.13.18|
|devicePixelRatio|屏幕密度|安卓最低支持基础库版本3.0.39； ios最低支持版本3.0.39 |
|albumAuthorized|允许宿主使用相册的开关（仅 iOS 有效）|ios最低支持版本3.110.3； 开发者工具暂不支持 |
|notificationAuthorized|允许宿主通知的开关|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|notificationAlertAuthorized|允许宿主通知带有提醒的开关（仅 iOS 有效）|ios最低支持版本3.110.3； 开发者工具暂不支持 |
|notificationBadgeAuthorized|允许宿主通知带有标记的开关（仅 iOS 有效）|ios最低支持版本3.110.3； 开发者工具暂不支持 |
|notificationSoundAuthorized|允许宿主通知带有声音的开关（仅 iOS 有效）|ios最低支持版本3.110.3； 开发者工具暂不支持 |
|cameraAuthorized|允许宿主使用摄像头的开关|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|locationAuthorized|允许宿主使用定位的开关|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|microphoneAuthorized|允许宿主使用麦克风的开关|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|locationEnabled|地理位置的系统开关|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|wifiEnabled|Wi-Fi 的系统开关|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |
|safeArea|在竖屏正方向下的安全区域|安卓最低支持基础库版本3.110.3； ios最低支持版本3.110.3； 开发者工具暂不支持 |

## 示例

<a href="swanide://fragment/19e8320c9c0942291e4db450dbbdb4251577107352196" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_getSystemInfoSync.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>




### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getSystemInfoSync.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 




* 在 js 文件中

```js
let res = swan.getSystemInfoSync();
// 基础库 3.140.1 之前，无法判断接口是否调用失败
// 基础库 3.140.1 及以后，通过 instanceof 来判断接口是否调用失败
if (!(res instanceof Error)) {
    console.log('getSystemInfoSync success', res);
}
else {
    console.log('getSystemInfoSync fail', res.message);
}

```

##  错误码

### Android

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |

 ##  Bug & Tip 
* 基础库 3.140.1 之前，无法判断接口是否调用失败。
* 基础库 3.140.1 及以后，接口调用失败时会返回一个标准的`Error`对象，可通过`instanceof`来判断接口是否调用失败。