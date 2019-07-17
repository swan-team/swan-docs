---
title: 屏幕亮度
header: develop
nav: api
sidebar: device_screen
---

## swan.setScreenBrightness

**解释**：设置屏幕亮度。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|value |Number | 是  | -|屏幕亮度值，范围 0~1，0 最暗，1 最亮。|
|success| Function  |  否  | -|接口调用成功的回调|
|fail  |  Function  |  否 | -| 接口调用失败的回调函数|
|complete  |  Function |   否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/e5d47d57648d468eccaaace41cdc98581557732266048" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setScreenBrightness">setScreenBrightness</button>
</view>
```

* 在 js 文件中

```js
Page({
    setScreenBrightness() {
        swan.setScreenBrightness({
            value: 1,
            success(res) {
                console.log('setScreenBrightness success', res);
            },
            fail(err) {
                console.log('scanCode fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```

## swan.getScreenBrightness

**解释**：获取屏幕亮度。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success| Function  |  否  | -|接口调用成功的回调|
|fail  |  Function  |  否 | -| 接口调用失败的回调函数|
|complete  |  Function |   否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |类型  |说明|
|---- | ---- | ---- |
|value   | Number | 屏幕亮度值，范围 0~1，0 最暗，1 最亮。|

**示例**：

<a href="swanide://fragment/243a71bee8db9c47e577113676a7cb871557732358188" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getScreenBrightness">getScreenBrightness</button>
</view>
```

* 在 js 文件中

```js
Page({
    getScreenBrightness() {
        swan.getScreenBrightness({
            success(res) {
                console.log('屏幕亮度值', res.value);
            },
            fail(err) {
                console.log('scanCode fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```

## swan.setKeepScreenOn

**解释**：设置是否保持常亮状态。仅在当前智能小程序生效，离开智能小程序后设置失效。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|keepScreenOn |Boolean | 是  |-| 是否保持屏幕常亮|
|success| Function  |  否  |-| 接口调用成功的回调|
|fail  |  Function  |  否 | -| 接口调用失败的回调函数|
|complete  |  Function |   否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/67ec77169a612cba1709271e950f35fb1557732443741" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setKeepScreenOn">setKeepScreenOn</button>
</view>
```

* 在 js 文件中

```js
Page({
    setKeepScreenOn() {
        swan.setKeepScreenOn({
            keepScreenOn: true,
            success(res) {
                console.log('keepScreenOn success', res);
            },
            fail(err) {
                console.log('keepScreenOn fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```
<!-- onUserCaptureScreen
---
**解释**：监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。
**参数**：CALLBACK

**CALLBACK返回参数**：
无
**示例**：

```js
swan.onUserCaptureScreen(function() {
    console.log('用户截屏了')
});
``` -->
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|201|解析失败，请检查调起协议是否合法。|
|202|解析失败，请检查参数是否正确。|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。| -->