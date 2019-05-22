---
title: 振动
header: develop
nav: api
sidebar: device_vibrate
---


## swan.vibrateLong

**解释**： 使手机发生较长时间的振动（400ms）

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success| Function  |  否  | -|接口调用成功的回调|
|fail  |  Function  |  否 | -| 接口调用失败的回调函数|
|complete  |  Function |   否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/68b0d89af019129d48b899052f023fbb1557732604443" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="vibrateLong">vibrateLong</button>
</view>
```

* 在 js 文件中

```js
Page({
    vibrateLong() {
        swan.vibrateLong({
            success(res) {
                console.log('vibrateLong success', res);
            },
            fail(err) {
                console.log('vibrateLong fail', err);
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

## swan.vibrateShort

**解释**：使手机发生较短时间的振动（15ms），仅在 iPhone 7/7 Plus 以上及 Android 机型生效。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success| Function  |  否  |-| 接口调用成功的回调函数|
|fail  |  Function  |  否  |-| 接口调用失败的回调函数|
|complete  |  Function  |  否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/a6df718fa0df4ec933e432d2b81d7fc41557732661761" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="vibrateShort">vibrateShort</button>
</view>
```

* 在 js 文件中

```js
Page({
    vibrateShort() {
        swan.vibrateShort({
            success(res) {
                console.log('vibrateShort success', res);
            },
            fail(err) {
                console.log('vibrateShort fail', err);
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