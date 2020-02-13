---
title: swan.getSetting
header: develop
nav: api
sidebar: setting_swan-getSetting
---
 

 

**解释**： 获取用户的当前设置

 

## 方法参数 

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|success |Function  |  否 | |  接口调用成功的回调函数|
|fail  |  Function |   否 | |  接口调用失败的回调函数|
|complete |   Function |   否  | | 接口调用结束的回调函数（调用成功、失败都会执行）|


### success返回参数说明  

|参数  |类型|说明 |
|---- | ---- |---- |
|authSetting|Object|用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权。|
## 示例

<a href="swanide://fragment/0cbaf44110e4d9283f9bcd78f477f0d51574136860171" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/openSetting.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getSetting.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 



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
##  错误码
###  Android

|错误码|说明|
|:--|:--|
|201|解析失败，请检查调起协议是否合法|
|1001|执行失败|

###  iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
|10001|内部错误                                           |
|10002|网络请求失败|
