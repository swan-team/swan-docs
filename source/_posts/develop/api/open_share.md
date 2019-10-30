---
title: 分享
header: develop
nav: api
sidebar: open_share
---

## onShareAppMessage

详情参见<a href="http://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E9%A1%B5%E9%9D%A2%E7%9B%B8%E5%85%B3%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0/">页面相关事件处理函数</a>。

## swan.openShare

**解释**： 调起分享面板。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/openShare.png"  class="demo-qrcode-image" />


**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title |String  |  否  | -| 分享标题|
|content |String  |  否  |  -|分享内容|
|imageUrl |String  |  否  | -| 分享图标|
|path |String  |  否  | -| 页面 path，必须是以 / 开头的完整路径。|
|success |Function  |  否  | -| 接口调用成功的回调函数|
|fail   | Function  |  否  | -| 接口调用失败的回调函数|
|complete  |  Function  |  否 | -|  接口调用结束的回调函数（调用成功、失败都会执行）|


**函数返回值**：Boolean result
**返回值说明**：反馈分享结果，成功或失败。

**示例**：

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
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```

**Bug & Tip**
bug: 百度App Android 客户端 10.13 以下版本，点击分享面板的取消时，不会执行 fail 回调。

##  swan.shareFile

>  在工具和真机中的实现有区别，详见[API 实现差异](https://smartapp.baidu.com/docs/develop/devtools/diff/)。基础库3.80.2开始支持，低版本需做兼容处理。

**解释**：支持调起系统分享面板将文件分享到其他App。


**方法参数**：Object data
**`data` 参数说明**：

|参数名 |类型  |是否必填  |默认值|说明|
|---- | ---- | ---- |--|---- |
|filePath| string | 是 |   |需要分享的文档的地址|
|success |Function  |  否 | | 接口调用成功的回调|
|fail   | Function |   否  | |接口调用失败的回调函数|
|complete  |  Function |   否 |  |接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：
<a href="swanide://fragment/6c244bf3c5956ed06e526e3e886cfbde1561984657908" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

* 在 swan 文件中
```
<view class="wrap">
    <button type="primary" bindtap="shareFile">点击分享文件</button>
</view>
```

* 在 js 文件中
```
Page({
    shareFile() {
        swan.chooseImage({
            count: 1,
            success: res => {
                swan.shareFile({
                    filePath: res.tempFilePaths[0],
                    success: res => {
                        swan.showModal({
                            title: '分享成功',
                            content: JSON.stringify(res)
                        });
                    },
                    fail: err => {
                        swan.showModal({
                            title: '分享失败',
                            content: JSON.stringify(err)
                        });
                    }
                });
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    }
});
```
* 在 css 文件中
```
.wrap {
    padding: 50rpx 30rpx;
}
```

## web-view中的分享 

当使用 web-view 组件时，用户从 A(h5) 页面跳转到了 B(h5) 页面。此时，用户在 B 页面发起分享，更可能的预期是分享 B 页面。但是，默认行为将打开 A 页面。此时，开发者可以做以下处理，让分享后打开 B 页面。

* 针对小程序框架调起的分享

```xml
// swan 文件
<web-view s-if="webViewUrl" src="{{webViewUrl}}"></web-view>
```
```js
// js 文件
Page({
    data: {
        webViewUrl: ''
    },
    
    onLoad({webViewUrl}) {
        webViewUrl && this.setData({webViewUrl});
    },

    onShareAppMessage({webViewUrl}) {
        return {
            title: '分享回流示例',
            content: '默认会回到分享时的 url',
            path: `/pages/openShare/openShare?webViewUrl=${encodeURIComponent(webViewUrl)}`
        };
    }
});
```

* 针对 H5 页面通过 openShare API 调起的分享

```js
const webViewUrl = location.href;
swan.openShare({
    title: '智能小程序示例',
	content: '世界很复杂，百度更懂你',
    appKey: 'y3dTfnWfkx2OXttMEMWlGHoB1KzMogm7', // 可通过 开发者平台 -> 设置 -> 开发设置 中查看
    path: `/pages/openShare/openShare?webViewUrl=${encodeURIComponent(webViewUrl)}`
});
```
