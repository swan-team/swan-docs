---
title: swan.openShare
header: develop
nav: api
sidebar: share_swan-openShare
# webUrl: https://qft12m.smartapps.cn/subPackages/apiPackage/pages/openShare/openShare
---
 
 
**解释**： 调起分享面板。
**Web 态说明**：Web 态小程序运行在微信、QQ、QQ空间、微博、百度 Hi 内时，调用 openShare 会弹出引导层引导用户通过平台的分享能力进行分享；在非以上环境时会弹出分享面板把分享链接复制到剪切板内，用户需自行到社交软件进行分享链接。
 

## 方法参数 

Object object

### `object`参数说明 

|属性名 |类型  |必填 | 默认值 |说明| Web 态说明|
|:---- |:---- |:---- |:----|:----|:----|
|title |String  |  否  | | 分享标题|暂不支持|
|content |String  |  否 || 分享内容|暂不支持|
|imageUrl |String  |  否  | | 分享图标|暂不支持|
|path |String  |  否  | | 页面 path，必须是以 / 开头的完整路径。|Web 态小程序运行在微信、QQ、QQ空间、微博、百度 Hi 内时分享链接为当前页面的路径|
|success |Function  |  否  | | 接口调用成功的回调函数||
|fail   | Function  |  否  | | 接口调用失败的回调函数||
|complete  |  Function  |  否 | |  接口调用结束的回调函数（调用成功、失败都会执行）||


###  函数返回值 
Boolean result

###  返回值说明
反馈分享结果，成功或失败。
## 示例

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/openShare.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
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

###  代码示例1 - API调起分享面板 ：

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
                if (res.result === 'url copy success') {
                    // Web 态小程序运行在浏览器环境中，用户把分享链接成功复制到了剪切板，用户可能会去其他社交软件进行分享链接
                }
                swan.showToast({
                    title: '分享成功'
                });
                console.log('openShare success', res);
            },
            fail: err => {
                if (err.errMsg === 'url copy fail') {
                    // Web 态小程序分享链接复制到剪切板失败
                }
                if (err.errMsg === 'sharing guide canceled') {
                    // Web 态小程序运行在微信、QQ、QQ空间、微博、百度 Hi 内，用户主动点击取消分享引导弹层。此时用户可能已经通过平台能力进行了分享，也可能并没有分享
                }
                if (err.errMsg === 'share canceled') {
                    // Web 态小程序运行在浏览器环境中，用户主动点击了取消分享面板
                }
                console.log('openShare fail', err);
            }
        });
    }
});
```

### 代码示例2 - 组件调起分享面板 ：

<a href="swanide://fragment/362c2203c0aa4bfd7f700553fa248fd41575200219753" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" open-type="share">openShare</button>
</view>
```
##  错误信息

###  Web 态

|错误信息（errMsg）|类型|说明|
|:--|:--|:--|
|url copy fail|string| 分享链接复制到剪切板失败 |
|share canceled|string| 取消分享面板 |
|sharing guide canceled|string|取消分享引导弹层|


## Bug & Tip 

bug: 基础库 1.13.43 版本 Android 手机中，点击分享面板的取消时，不会执行 fail 回调。

