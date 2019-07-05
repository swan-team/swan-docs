---
title: 扫码
header: develop
nav: api
sidebar: device_scan
---


## swan.scanCode

> 在工具和真机中的实现有区别，详见[API 实现差异](https://smartapp.baidu.com/docs/develop/devtools/diff/)。

**解释**：调起客户端扫码界面，扫码成功后返回对应的结果。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success| Function  |  否  | -|接口调用成功的回调|
|fail  |  Function  |  否 | -| 接口调用失败的回调函数|
|complete  |  Function |   否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明**：

|参数名 |说明|
|---- | ---- |
|result| 所扫码的内容 |
|scanType| 所扫码的类型 |
|charSet|所扫码的字符集，仅支持 Andriod 系统。|

**示例**：

<a href="swanide://fragment/0fd5772c3958f41c72ce6ccf48d4a6061557732093518" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="scanCode">scanCode</button>
</view>
```

* 在 js 文件中

```js
Page({
    scanCode() {
        swan.scanCode({
            success(res) {
                console.log('扫码的内容', res.result);
                console.log('扫码的类型', res.scanType);
                console.log('扫码的字符集', res.charSet);
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