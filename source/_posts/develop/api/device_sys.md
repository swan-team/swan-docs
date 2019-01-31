---
title: 系统信息
header: develop
nav: api
sidebar: device_sys
---


getSystemInfo
---
**解释：**获取系统信息

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  是 |  接口调用成功的回调|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数  |说明 |
|---- | ---- |
|brand  | 手机品牌 |
|model |  手机型号   |
|pixelRatio | 设备像素比  |
|screenWidth |屏幕宽度   |
|screenHeight |   屏幕高度 |
|windowWidth |可使用窗口宽度 |
|windowHeight  |  可使用窗口高度 |
|statusBarHeight| 状态栏的高度 |
|language |百度 App 设置的语言 |
|version |百度 App 版本号|
|system  |操作系统版本  |
|platform |客户端平台|
|fontSizeSetting |用户字体大小设置 |
|SDKVersion |客户端基础库版本 |

**示例：**
<a href="swanide://fragment/8ecdf5d7226a7a576f4c3b46227cab711540395127" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果 </a>
```js
swan.getSystemInfo({
    success: function (res) {
        console.log(res.model);
        console.log(res.pixelRatio);
        console.log(res.windowWidth);
        console.log(res.windowHeight);
        console.log(res.language);
        console.log(res.version);
        console.log(res.platform);
    }
});
```

getSystemInfoSync
---
**解释：**获取系统信息同步接口

**同步返回参数说明：**

|参数  |说明 |
|---- | ---- |
|brand  | 手机品牌 |
|model |  手机型号   |
|pixelRatio | 设备像素比  |
|screenWidth |屏幕宽度   |
|screenHeight |   屏幕高度 |
|windowWidth |可使用窗口宽度 |
|windowHeight  |  可使用窗口高度 |
|statusBarHeight| 状态栏的高度 |
|language |百度 App 设置的语言 |
|version |百度 App 版本号|
|system  |操作系统版本  |
|platform |客户端平台|
|fontSizeSetting |用户字体大小设置 |
|SDKVersion |客户端基础库版本 |

**示例：**

```js
try {
    var res = swan.getSystemInfoSync();
    console.log(res.model);
    console.log(res.pixelRatio);
    console.log(res.windowWidth);
    console.log(res.windowHeight);
    console.log(res.language);
    console.log(res.version);
    console.log(res.platform);
} catch (e) {
    // Do something when catch error
}
```

getEnvInfoSync
---
**解释：**获取运行环境信息同步接口

> 基础库 2.0.28 版本开始支持。

**同步返回参数说明：**

|参数  |类型|说明 |
|---- | ---- |---|---|
|appKey  |string| 智能小程序 App Key |
|appName |string|  智能小程序名称   |
|lastAppURL |string|  智能小程序最近一次打开的调起协议  |
|sdkVersion |string|  基础库版本   |
|scheme |string|  调起协议的协议头   |

**示例：**

```js
try {
    const envInfo = swan.getEnvInfoSync();
    console.log(envInfo.appKey);
    console.log(envInfo.appName);
    console.log(envInfo.lastAppURL);
    console.log(envInfo.sdkVersion);
    console.log(envInfo.scheme);
} catch (e) {
    // Do something when catch error
}
```

canIUse
---
**解释：** 判断智能小程序的API，回调，参数，组件等是否在当前版本可用。

**参数说明：** 使用 ${API}.${method}.${param}.${options} 或者 ${component}.${attribute}.${option} 方式来调用。

|参数  |说明 |
|---- | ---- |
|${API}  | API 名字 |
|${method} |  调用方式，有效值为return, success, object, callback   |
|${param} | 参数或者返回值  |
|${options} |参数的可选值   |
|${component} |   组件名字 |
|${attribute} | 组件属性 |
|${option}  |  组件属性的可选值 |


**示例：**

```js

swan.canIUse('view.hover-class')
swan.canIUse('scroll-view.scroll-x')
swan.canIUse('cover-view')
swan.canIUse('button.size.default')
swan.canIUse('button.size.default')
swan.canIUse('request.object.success.data')
swan.canIUse('getSavedFileList')
swan.canIUse('getSavedFileList.object')
swan.canIUse('getSavedFileList.object.success')
```
