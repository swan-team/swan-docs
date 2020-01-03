---
title: swan.openShare
header: develop
nav: api
sidebar: share_swan-openShare
---
 
 
**解释**： 调起分享面板。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/openShare.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title |String  |  否  | | 分享标题|
|content |String  |  否 || 分享内容|
|imageUrl |String  |  否  | | 分享图标|
|path |String  |  否  | | 页面 path，必须是以 / 开头的完整路径。|
|success |Function  |  否  | | 接口调用成功的回调函数|
|fail   | Function  |  否  | | 接口调用失败的回调函数|
|complete  |  Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）|


**函数返回值**：Boolean result

**返回值说明**：反馈分享结果，成功或失败。

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/openShare.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例1 - API调起分享面板**：

<a href="swanide://fragment/bf6d9c5218c3c9a0dc83bab7b1bca04d1559044591619" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="openShare">openShare</button>
</view>
```

* 在 js 文件中

```js
Page({
    openShare() {
        swan.openShare({
            title: '智能小程序示例',
            content: '世界很复杂，百度更懂你',
            path: '/pages/openShare/openShare?key=value',
            imageUrl: 'https://smartprogram.baidu.com/docs/img/logo_new.png',
            success: res => {
                swan.showToast({
                    title: '分享成功'
                });
                console.log('openShare success', res);
            },
            fail: err => {
                console.log('openShare fail', err);
            }
        });
    }
});
```
**代码示例2 - 组件调起分享面板**：

<a href="swanide://fragment/362c2203c0aa4bfd7f700553fa248fd41575200219753" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" open-type="share">openShare</button>
</view>
```
**Bug & Tip**

bug: 基础库 1.13.43 版本 Android 手机中，点击分享面板的取消时，不会执行 fail 回调。

