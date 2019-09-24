---
title: 设置
header: develop
nav: api
sidebar: open_setting
---
## swan.openSetting

**解释**： 调起客户端智能小程序设置界面，返回用户设置的操作结果。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 |  -| 接口调用成功的回调函数|
|fail  |  Function |   否 |  -| 接口调用失败的回调函数|
|complete |   Function |   否  | -| 接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明**：

|参数  |类型|说明 |
|---- | ---- |---- |
|authSetting|Object|用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权。|


**示例**：
<a href="swanide://fragment/1b12263b2caf52db8d7fce9f5420bf121560170167235" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```xml
<view class="container">
    <view class="page-body">
        <button bind:tap="openSetting" type="primary" hover-stop-propagation="true">打开设置</button>
    </view>
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">{{title}}</view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        title: 'openSetting'
    },

    openSetting() {
        swan.openSetting({});
    }
});
```


## swan.getSetting

**解释**： 获取用户的当前设置

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|success |Function  |  否 | -|  接口调用成功的回调函数|
|fail  |  Function |   否 | -|  接口调用失败的回调函数|
|complete |   Function |   否  | -| 接口调用结束的回调函数（调用成功、失败都会执行）|


**success返回参数说明**：

|参数  |类型|说明 |
|---- | ---- |---- |
|authSetting|Object|用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权。|


**示例**：

<a href="swanide://fragment/fd766a831dfad90a23a57b4c9e78c62f1558336554529" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="getSetting">getSetting</button>
</view>
```

* 在 js 文件中

```js
Page({
    getSetting() {
        swan.getSetting({
            success: res => {
                console.log('getSetting success, authSetting:', res.authSetting);
            },
            fail: err => {
                console.log('getSetting fail', err);
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
 