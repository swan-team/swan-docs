---
title: 设备
header: develop
nav: api
sidebar: device
---

系统信息
-----

### getSystemInfo

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

### getSystemInfoSync

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

****示例：****

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

网络状态
-----

### getNetworkType

**解释：**获取网络类型

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  是  | 接口调用成功，返回网络类型 networkType|
|fail | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数  |说明 |
|---- | ---- |
|networkType |网络类型，值有 wifi/2g/3g/4g/unknown (Android 下不常见的网络类型)/none (无网络)|

****示例：****

```js
swan.getNetworkType({
    success: function (res) {
        console.log(res.networkType);
    }
});
```

### onNetworkStatusChange

**解释：**监听网络状态变化

**参数：**CALLBACK

**CALLBACK返回参数：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|isConnected |Boolean |当前是否有网络连接|
|networkType| String | 网络类型|

**networkType 有效值：**

|值   |说明|
|---- | ---- |
|wifi   | wifi 网络|
|2g  |2g 网络|
|3g | 3g 网络|
|4g | 4g 网络|
|none  |  无网络|
|unknown |Android 下不常见的网络类型|

****示例：****

```js
swan.onNetworkStatusChange(function (res) {
    console.log(res.isConnected);
    console.log(res.networkType);
});
```

加速度计
-----

### onAccelerometerChange

**解释：**监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 swan.stopAccelerometer 停止监听。
**参数：**CALLBACK

**CALLBACK返回参数：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|x |Number |X 轴|
|y |Number |Y 轴|
|z |Number |Z 轴|

****示例：****

```javascript
swan.onAccelerometerChange(function (res) {
  console.log(res.x);
  console.log(res.y);
  console.log(res.z);
});
```
### startAccelerometer

**解释：**开始监听加速度数据。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

****示例：****

```javascript
swan.startAccelerometer();
```

### stopAccelerometer

**解释：**停止监听加速度数据。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

****示例：****

```javascript
swan.stopAccelerometer();
```

罗盘
-----

### onCompassChange

**解释：**监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用swan.stopCompass停止监听。
**参数：**CALLBACK

**CALLBACK返回参数：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|direction |Number |面对的方向度数|

****示例：****

```javascript
swan.onCompassChange(function (res) {
    console.log(res.direction);
});

```
### startCompass

**解释：**开始监听罗盘数据。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

****示例：****

```javascript
swan.startCompass();
```

### stopCompass

**解释：**停止监听罗盘数据。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete |   Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

****示例：****

```javascript
swan.stopCompass();
```

扫码
-----

### scanCode

**解释：**调起客户端扫码界面，扫码成功后返回对应的结果
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |说明|
|---- | ---- |
|result| 所扫码的内容 |
|scanType| 所扫码的类型 |

****示例：****

```js
swan.scanCode({
    success: function (res) {
        console.log(res.result);
        console.log(res.scanType);
    }
});
```

屏幕亮度
-----

### setScreenBrightness

**解释：**设置屏幕亮度。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|value |Number | 是  | 屏幕亮度值，范围 0~1，0 最暗，1 最亮|
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

### getScreenBrightness

**解释：**获取屏幕亮度。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|value   | Number | 屏幕亮度值，范围 0~1，0 最暗，1 最亮|

### setKeepScreenOn

**解释：**设置是否保持常亮状态。仅在当前智能小程序生效，离开智能小程序后设置失效。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|keepScreenOn |Boolean | 是  | 是否保持屏幕常亮|
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

振动
-----

### vibrateLong

**解释：**使手机发生较长时间的振动（400ms）
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

### vibrateShort

**解释：**使手机发生较短时间的振动（15ms）

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success| Function  |  否  | 接口调用成功的回调函数|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

手机联系人
-----

### addPhoneContact

**解释：**调用后，用户可以选择将联系人数据以“新增联系人”或“添加到已有联系人”的方式，写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加。
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|photoFilePath |String | 否  | 头像本地文件路径|
|nickName |String | 否  | 昵称|
|lastName |String | 否  | 姓氏|
|middleName |String | 否  | 中间名|
|firstName |String | 是  | 名字|
|mobilePhoneNumber |String | 否  | 手机号|
|weChatNumber |String | 否  | 微信号|
|addressCountry |String | 否  | 联系地址国家|
|addressState |String | 否  | 联系地址省份|
|addressCity |String | 否  | 联系地址城市|
|addressStreet |String | 否  | 联系地址街道|
|addressPostalCode |String | 否  | 联系地址邮政编码|
|organization |String | 否  | 公司|
|title |String | 否  | 职位|
|workFaxNumber |String | 否  | 工作传真|
|workPhoneNumber |String | 否  | 工作电话|
|hostNumber |String | 否  | 公司电话|
|email |String | 否  | 电子邮件|
|url |String | 否  | 网站|
|workAddressCountry |String | 否  | 工作地址国家|
|workAddressState |String | 否  | 工作地址省份|
|workAddressCity |String | 否  | 工作地址城市|
|workAddressStreet |String | 否  | 工作地址街道|
|workAddressPostalCode |String | 否  | 工作地址邮政编码|
|homeFaxNumber |String | 否  | 住宅传真|
|homePhoneNumber |String | 否  | 住宅电话|
|homeAddressCountry |String | 否  | 住宅地址国家|
|homeAddressState |String | 否  | 住宅地址省份|
|homeAddressCity |String | 否  | 住宅地址城市|
|homeAddressStreet |String | 否  | 住宅地址街道|
|homeAddressPostalCode |String | 否  | 住宅地址邮政编码|
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

拨打电话
-----

### makePhoneCall

**解释：**拨打电话
**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|phoneNumber |String | 是  | 需要拨打的电话号码|
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

****示例：****

```js
swan.makePhoneCall({
    phoneNumber: '000000' //仅为示例，并非真实的电话号码
});
```

剪贴板
-----

### setClipboardData

**解释：**设置系统剪贴板的内容

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|data  |  String  |是  | 需要设置的内容|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail  | Function  |  否  | 接口调用失败的回调函数|
|complete   | Function   | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

****示例：****

```js
swan.setClipboardData({
    data: 'baidu',
    success: function (res) {
        swan.getClipboardData({
            success: function (res) {
                console.log(res.data) // baidu
            }
        });
    }
});
```

### getClipboardData

**解释：**获取系统剪贴板内容

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success |Function |   否 |  接口调用成功的回调函数|
|fail  |  Function |   否 |  接口调用失败的回调函数|
|complete  |  Function |   否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|data   | String | 剪贴板的内容|

****示例：****

```js
swan.getClipboardData({
    success: function (res) {
        console.log(res.data);
    }
});
```
