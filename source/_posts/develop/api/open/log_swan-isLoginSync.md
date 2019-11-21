---
title: swan.isLoginSync
header: develop
nav: api
sidebar: log_swan-isLoginSync
---

 

> 基础库 1.13.4 版本开始支持。

**解释**：获取宿主 App登录状态。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_isLoginSync.png"  class="demo-qrcode-image" />

**方法参数**：无

**返回参数说明**：

|参数 | 类型 | 说明|
|---- | ---- | ---- |
|isLogin  |  Boolean | 宿主 App登录状态 true: 已登录，false: 未登录  |

**代码示例**：

<a href="swanide://fragment/f036e8e9edbe82f352f824c83e6b81911558336338111" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
        try {
            var result = swan.isLoginSync();
            console.log('isLoginSync', result);
        } catch (e) {
            console.log('error', e);
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
#### 错误码

* Andriod 

|错误码|说明|
|--|--|
|1001|执行失败|

