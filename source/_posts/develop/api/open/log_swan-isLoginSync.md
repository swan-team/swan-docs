---
title: swan.isLoginSync
header: develop
nav: api
sidebar: log_swan-isLoginSync
---

 

> 基础库 1.13.4 版本开始支持。

**解释**：获取宿主 App登录状态。

 
## 方法参数

无

### 返回参数说明  

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|isLogin  |  Boolean | 宿主 App登录状态 true: 已登录，false: 未登录  |
## 示例

<a href="swanide://fragment/43a83ff9ca0dbaf02dda947149486f231577107613065" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_isLoginSync.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/isLoginSync.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>


###   代码示例 


* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="isLoginSync">isLoginSync</button>
</view>
```

* 在 js 文件中

```js
Page({
    isLoginSync() {
        let res = swan.isLoginSync();
        // 基础库 3.140.1 之前，无法判断接口是否调用失败
        // 基础库 3.140.1 及以后，通过 instanceof 来判断接口是否调用失败
        if (!(res instanceof Error)) {
            console.log('isLoginSync success', res);
        }
        else {
            console.log('isLoginSync fail', res.message);
        }
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
|--|--|
|1001|执行失败|

## Bug & Tip 

* 基础库 3.140.1 之前，无法判断接口是否调用失败。
* 基础库 3.140.1 及以后，接口调用失败时会返回一个标准的`Error`对象，可通过`instanceof`来判断接口是否调用失败。