---
title: swan.setEnableDebug
header: develop
nav: api
sidebar: swan-setEnableDebug
---
 

> 基础库 1.12 开始支持,在工具和真机中的实现有区别，详见 [API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**解释**：设置是否打开调试开关，此开关对正式版也能生效。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/setEnableDebug.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`object`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
| enableDebug | Boolean | 是 | | 是否打开调试 |
|success|	function|		否||	接口调用成功的回调函数，仅支持 Android。|
|fail	|function		|否||	接口调用失败的回调函数，仅支持 Android。|
|complete	|function		|否||	接口调用结束的回调函数（调用成功、失败都会执行），仅支持 Android。|

**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/setEnableDebug.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/b16d4650778afde3aa54d7e501e16a051574047694621" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="openEnableDebug">openEnableDebug</button>
    <button type="primary" bindtap="closeEnableDebug">closeEnableDebug</button>
</view>
```

* 在 js 文件中

```js
Page({
    openEnableDebug() {
        swan.setEnableDebug({
            enableDebug: true
        })
    },
    closeEnableDebug() {
        swan.setEnableDebug({
            enableDebug: false
        })
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}

.wrap button {
    margin-bottom: 30rpx;
}
```

## Bug & Tip 

* 可以先在开发版或体验版打开调试模式，再切回到正式版就能看到调试器;
* 请确认已登录百度帐号，当前登录用户属于该小程序开发者时，才能打开调试。
