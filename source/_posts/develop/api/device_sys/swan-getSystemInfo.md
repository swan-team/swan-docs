---
title: swan.getSystemInfo
header: develop
nav: api
sidebar: swan-getSystemInfo
---


 

>  基础库 1.10.8 版本开始支持。

**解释**：获取系统信息

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getSystemInfo.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否|| 接口调用成功的回调|
|fail   | Function |   否  | |接口调用失败的回调函数|
|complete  |  Function |   否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数  |说明 |最低版本|
|---- | ---- |
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

**示例**：
<a href="swanide://fragment/6eb773151e65554728a7731425b69b341569477824448" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果 </a>

* 在 js 文件中

```js
    swan.getSystemInfo({
        success: res => {
            console.log('getSystemInfo success', res)
        },
        fail: err => {
            console.log('getSystemInfo fail', err)
        }
    });
```
#### 错误码
Andriod

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法|
|202|解析失败，请检查参数是否正确|
|402|安全性检查：访问控制校验失败|
                                
