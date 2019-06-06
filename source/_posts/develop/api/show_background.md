---
title: 背景
header: develop
nav: api
sidebar: show_background
---

## swan.setBackgroundColor


**解释**：设置窗口的背景颜色。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|backgroundColor |String | 否|  - | 需设置的背景窗口颜色，支持十六进制颜色值。11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|backgroundColorTop |String | 否| - | 需设置的顶部背景窗口颜色，支持十六进制颜色值，仅ios有效。 11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|backgroundColorBottom |String  |  否| - |需设置的底部背景窗口颜色，支持十六进制颜色值，仅ios有效。11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|success  |  Function |   否  |-| 接口调用成功的回调函数| 
|fail  |  Function |   否  |-| 接口调用失败的回调函数| 
|complete   | Function  |  否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|  

**示例**：

<a href="swanide://fragment/ab56d47c0644aada7d01b8fbadb30ebf1557730077056" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setBackgroundColor">setBackgroundColor</button>
</view>
```

* 在 js 文件中

```js
Page({
    setBackgroundColor() {
        swan.setBackgroundColor({
            backgroundColor: '#000000',
            backgroundColorTop: '#222222',
            backgroundColorBottom: '#333333',
            success: function () {
                console.log('setBackgroundColor success');
            },
            fail: function (err) {
                console.log('setBackgroundColor fail', err);
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

## swan.setBackgroundTextStyle


**解释**：设置窗口下拉背景loading样式。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|textStyle |String | 是|  - | loading图样式，仅支持light和dark 。11.3 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|success |Function  |  否 | - | 接口调用成功的回调函数 | 
|fail  |  Function |   否  | - | 接口调用失败的回调函数| 
|complete   | Function  |  否 | - |  接口调用结束的回调函数（调用成功、失败都会执行）| 

**示例**：

<a href="swanide://fragment/d051af9cce097ea405f94592ec8128941557730133671" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setBackgroundTextStyle">setBackgroundTextStyle</button>
</view>
```

* 在 js 文件中

```js
Page({
    setBackgroundTextStyle() {
        swan.setBackgroundTextStyle({
            textStyle: 'light',
            success: function () {
                console.log('setBackgroundTextStyle success');
            },
            fail: function (err) {
                console.log('setBackgroundTextStyle fail', err);
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