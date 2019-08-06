---
title: 系统信息
layout: gamedoc
topic: system
categoryName: api
priority: 02-03
---

### swan.getSystemInfo()

获取系统信息。

```js
swan.getSystemInfo(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|-|
|success|function|否|成功回调函数|
|fail|function|否|失败回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值：**

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.brand|string|手机品牌|
|res.model|string|手机型号|
|res.pixelRatio|number|设备像素比|
|res.screenWidth|number|屏幕宽度|
|res.screenHeight|number|屏幕高度|
|res.windowWidth|number|可使用窗口宽度|
|res.windowHeight|number|可使用窗口高度|
|res.statusBarHeight|number|状态栏的高度|
|res.navigationBarHeight|number|导航栏的高度|
|res.language|string|百度 App 设置的语言|
|res.version|string|百度 App 版本号|
|res.system|string|操作系统版本|
|res.platform|string|客户端平台|
|res.fontSizeSetting|number|用户字体大小设置|
|res.SDKVersion|string|客户端基础库版本|
|res.host|string|宿主平台，如：baiduboxapp|
|res.swanNativeVersion|string|宿主平台版本号|
|res.devicePixelRatio|string|屏幕密度|
**示例：**

```js
swan.getSystemInfo({
    success: res => {
        console.log(res.model);
        console.log(res.pixelRatio);
        console.log(res.windowWidth);
        console.log(res.windowHeight);
        ...
    }
});
```

### swan.getSystemInfoSync()

获取系统信息同步版本。

```js
swan.getSystemInfoSync()
```

**返回值：**

`Object` 类型的对象：

|属性|类型|描述|
|-|-|-|
|brand|string|手机品牌|
|model|string|手机型号|
|pixelRatio|number|设备像素比|
|screenWidth|number|屏幕宽度|
|screenHeight|number|屏幕高度|
|windowWidth|number|可使用窗口宽度|
|windowHeight|number|可使用窗口高度|
|statusBarHeight|number|状态栏的高度|
|navigationBarHeight|number|导航栏的高度|
|language|string|百度 App 设置的语言|
|version|string|百度 App 版本号|
|system|string|操作系统版本|
|platform|string|客户端平台|
|fontSizeSetting|number|用户字体大小设置|
|SDKVersion|string|客户端基础库版本|
|host|string|宿主平台，如：baiduboxapp|
|swanNativeVersion|string|宿主平台版本号|
|devicePixelRatio|string|屏幕密度|

**示例：**

```js
let data = swan.getSystemInfoSync();
console.log('手机品牌信息：', data.brand);

```

**注意：**
`fontSizeSetting` 数据信息双端纬度不一致，iOS 1~4 共计 4 档，Android 0~3 共计 4 档。