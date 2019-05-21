---
title: 分享
header: develop
nav: api
sidebar: open_share
---

## onShareAppMessage

详情参见<a href="http://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E9%A1%B5%E9%9D%A2%E7%9B%B8%E5%85%B3%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0/">页面相关事件处理函数</a>。

## swan.openShare

**解释：** 调起分享面板。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|title |String  |  否  | -| 分享标题|
|content |String  |  否  |  -|分享内容|
|imageUrl |String  |  否  | -| 分享图标|
|path |String  |  否  | -| 页面 path ，必须是以 / 开头的完整路径。|
|success |Function  |  否  | -| 接口调用成功的回调函数|
|fail   | Function  |  否  | -| 接口调用失败的回调函数|
|complete  |  Function  |  否 | -|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

<a href="swanide://fragment/4f49285949da6c4da88c604eab59fd221558336632057" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

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
            success: function (res) {
                swan.showToast({
                    title: '分享成功'
                });
                console.log('openShare success', res);
            },
            fail: function (err) {
                console.log('openShare fail', res);
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
1、bug: 百度App Android 客户端 10.13 以下版本，点击分享面板的取消时，不会执行 fail 回调。
